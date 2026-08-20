import { LEVELS, SESSION_TTL_MS } from "../constants.js";
import {
  buildReport,
  gradeAnswer,
  nextDifficulty,
  npcFeedback,
  pickQuestion,
  publicQuestion,
  scoreByDimensions,
  sessionState
} from "../domain.js";
import { httpError } from "../server.js";

export function registerAssessmentRoutes(router, { store }) {
  router.get("/api/assessments", (ctx) => {
    const list = store.data.assessments.filter((item) => item.status === "published");
    return { assessments: list };
  }, { auth: true });

  router.post("/api/assessments/:id/sessions", (ctx) => {
    if (!ctx.student) throw httpError(404, "学生档案不存在");
    const assessment = store.data.assessments.find((item) => item.id === ctx.params.id);
    if (!assessment || assessment.status !== "published") throw httpError(404, "测评不存在或未发布");
    if (!assessment.classIds.includes(ctx.student.classId)) throw httpError(403, "你不属于该测评目标班级");
    const now = Date.now();
    if (new Date(assessment.opensAt).getTime() > now) throw httpError(409, "测评尚未开放");
    if (assessment.closesAt && new Date(assessment.closesAt).getTime() < now) throw httpError(409, "测评已结束");

    const existing = store.data.sessions.find((item) =>
      item.studentId === ctx.student.id &&
      item.status === "active" &&
      new Date(item.expiresAt).getTime() > now
    );
    if (existing) return { session: sessionState(store, existing), resumed: true };

    if (!assessment.allowRetest) {
      const completed = store.data.reports.some((item) =>
        item.studentId === ctx.student.id && item.assessmentId === assessment.id
      );
      if (completed) throw httpError(409, "该测评不允许重复参加");
    }

    return store.update(() => {
      const selfAssessment = store.data.selfAssessments.find((item) => item.studentId === ctx.student.id);
      const difficulty = selfAssessment?.initialDifficulty || assessment.policy.initialDifficulty;
      const session = {
        id: store.id("sess"),
        assessmentId: assessment.id,
        studentId: ctx.student.id,
        status: "active",
        startedAt: new Date().toISOString(),
        expiresAt: new Date(now + SESSION_TTL_MS).toISOString(),
        savedAt: new Date().toISOString(),
        difficulty,
        currentLevelIndex: 0,
        currentQuestionId: null,
        levelStates: LEVELS.map((level) => ({
          levelId: level.id,
          questionIds: [],
          answerIds: [],
          targetCount: assessment.policy.questionsPerLevel,
          completed: false,
          scoreSum: 0,
          score: 0
        })),
        answers: {},
        dialogueTranscripts: {},
        practical: null,
        antiCheat: { pageHiddenCount: 0, flags: [] }
      };
      session.currentQuestionId = pickQuestion(
        store,
        LEVELS[0].id,
        difficulty,
        Object.keys(session.answers)
      )?.id || null;
      store.data.sessions.push(session);
      return { session: sessionState(store, session), resumed: false };
    });
  }, { auth: true, roles: ["student"] });

  router.get("/api/sessions/current", (ctx) => {
    const now = Date.now();
    const session = store.data.sessions.find((item) =>
      item.studentId === ctx.student.id &&
      item.status === "active" &&
      new Date(item.expiresAt).getTime() > now
    );
    return { session: session ? sessionState(store, session) : null };
  }, { auth: true, roles: ["student"] });

  router.delete("/api/sessions/current", (ctx) => {
    return store.update(() => {
      const session = store.data.sessions.find((item) =>
        item.studentId === ctx.student.id && item.status === "active"
      );
      if (session) session.status = "abandoned";
      return { ok: true };
    });
  }, { auth: true, roles: ["student"] });

  router.get("/api/sessions/:id", (ctx) => {
    const session = findOwnSession(ctx);
    return { session: sessionState(store, session) };
  }, { auth: true, roles: ["student"] });

  router.patch("/api/sessions/:id/anti-cheat", (ctx) => {
    const session = findOwnSession(ctx);
    return store.update(() => {
      if (ctx.body.pageHidden) {
        session.antiCheat.pageHiddenCount += 1;
        if (session.antiCheat.pageHiddenCount >= 2) {
          session.antiCheat.flags.push(`页面切换${session.antiCheat.pageHiddenCount}次`);
        }
      }
      session.savedAt = new Date().toISOString();
      return session.antiCheat;
    });
  }, { auth: true, roles: ["student"] });

  router.post("/api/sessions/:id/answers", (ctx) => {
    const session = findOwnSession(ctx);
    const question = store.data.questions.find((item) => item.id === session.currentQuestionId);
    if (!question) throw httpError(409, "当前没有待作答题目");
    if (question.id !== ctx.body?.questionId) throw httpError(409, "题目与会话不一致");
    const submission = question.type === "dialogue"
      ? Array.isArray(ctx.body.messages) ? ctx.body.messages : []
      : ctx.body.answer;
    return store.update(() => {
      const result = saveAnswer(ctx.store, session, question, submission, {
        elapsedSeconds: Number(ctx.body.elapsedSeconds) || 0,
        pageHiddenCount: session.antiCheat.pageHiddenCount
      });
      if (question.type === "dialogue") {
        session.dialogueTranscripts[question.id] = Array.isArray(submission)
          ? submission.map((text, index) => ({
              round: index + 1,
              question: question.script[index]?.ask || "",
              answer: text
            }))
          : [];
      }
      return result;
    });
  }, { auth: true, roles: ["student"] });

  router.post("/api/sessions/:id/practical/submit", (ctx) => {
    const session = findOwnSession(ctx);
    const question = store.data.questions.find((item) => item.id === session.currentQuestionId);
    if (!question || question.type !== "practical") throw httpError(409, "当前不是实操任务");
    const run = session.practical;
    if (!run || run.iterations < 2) throw httpError(400, "实操任务至少需要完成2次提示词迭代");
    const submission = { prompts: run.prompts, output: run.lastOutput };
    return store.update(() => saveAnswer(store, session, question, submission, {
      elapsedSeconds: question.estimatedSeconds,
      pageHiddenCount: session.antiCheat.pageHiddenCount,
      iterationCount: run.iterations
    }));
  }, { auth: true, roles: ["student"] });

  router.post("/api/sessions/:id/finish", (ctx) => {
    const session = findOwnSession(ctx);
    const unfinished = session.levelStates.filter((item) => !item.completed);
    if (unfinished.length) throw httpError(409, `还有${unfinished.length}个关卡未完成`);
    return store.update(() => {
      const summary = buildReport(store, session, session.studentId);
      const report = {
        id: store.id("r"),
        studentId: session.studentId,
        assessmentId: session.assessmentId,
        sessionId: session.id,
        completedAt: new Date().toISOString(),
        ...summary,
        answerDetails: Object.values(session.answers)
      };
      store.data.reports.push(report);
      session.status = "completed";
      session.currentQuestionId = null;
      session.savedAt = report.completedAt;
      return report;
    });
  }, { auth: true, roles: ["student"] });

  router.get("/api/sessions/:id/report", (ctx) => {
    const session = findOwnSession(ctx);
    const report = store.data.reports.find((item) => item.sessionId === session.id);
    if (!report) throw httpError(404, "报告尚未生成");
    return report;
  }, { auth: true, roles: ["student"] });
}

function findOwnSession(ctx) {
  const session = ctx.store.data.sessions.find((item) => item.id === ctx.params.id);
  if (!session || session.studentId !== ctx.student?.id) throw httpError(404, "测评会话不存在");
  if (session.status === "abandoned") throw httpError(409, "会话已放弃");
  if (new Date(session.expiresAt) < new Date()) {
    if (session.status === "active") ctx.store.update(() => { session.status = "expired"; return true; });
    throw httpError(409, "会话已超过48小时有效期");
  }
  return session;
}

function saveAnswer(store, session, question, submission, metadata = {}) {
  const graded = gradeAnswer(question, submission);
  const dimensionScores = scoreByDimensions(question, graded.score);
  const dimensionWeight = Object.values(question.dimensions || {}).reduce((sum, value) => sum + value, 0);
  const flags = [];
  if (metadata.elapsedSeconds > 0 && metadata.elapsedSeconds < 3) flags.push("作答用时过短");
  if (Number(metadata.pageHiddenCount) >= 2) flags.push("页面多次切换");
  if (question.type === "dialogue" && (!Array.isArray(submission) || submission.length < 2)) flags.push("对话轮数不足");
  if (question.type === "practical" && Number(metadata.iterationCount || 0) < 2) flags.push("实操迭代不足");

  const level = session.levelStates.find((item) => item.levelId === question.levelId);
  if (!level) throw httpError(400, "题目关卡不合法");
  const record = {
    questionId: question.id,
    levelId: question.levelId,
    type: question.type,
    submittedAt: new Date().toISOString(),
    elapsedSeconds: metadata.elapsedSeconds || 0,
    result: graded.result,
    score: graded.score,
    flags,
    dimensionScores,
    dimensionWeight
  };
  session.answers[question.id] = record;
  level.answerIds.push(question.id);
  level.scoreSum += graded.score;
  level.score = Math.round(level.scoreSum / level.answerIds.length);
  session.difficulty = nextDifficulty(session.difficulty, graded.result);

  const usedIds = Object.keys(session.answers);
  if (level.answerIds.length >= level.targetCount) {
    level.completed = true;
    const nextIndex = session.currentLevelIndex + 1;
    if (nextIndex >= LEVELS.length) {
      session.currentLevelIndex = nextIndex;
      session.currentQuestionId = null;
    } else {
      session.currentLevelIndex = nextIndex;
      const nextLevel = LEVELS[nextIndex];
      const forcedType = nextLevel.id === "workshop" ? "practical" : nextLevel.id === "station" ? "dialogue" : null;
      const nextQuestion = pickQuestion(store, nextLevel.id, session.difficulty, usedIds, forcedType) ||
        pickQuestion(store, nextLevel.id, session.difficulty, usedIds);
      session.currentQuestionId = nextQuestion?.id || null;
    }
  } else {
    const preferredType = question.levelId === "workshop" && level.answerIds.length === 1 ? "practical" : null;
    const sameLevelQuestion = pickQuestion(store, question.levelId, session.difficulty, usedIds, preferredType) ||
      pickQuestion(store, question.levelId, session.difficulty, usedIds);
    session.currentQuestionId = sameLevelQuestion?.id || null;
    if (!session.currentQuestionId && level.answerIds.length >= Math.max(1, level.targetCount - 1)) {
      level.completed = true;
    }
  }

  const allLevelsCompleted = session.levelStates.every((item) => item.completed);
  if (allLevelsCompleted) {
    session.currentQuestionId = null;
    session.status = "levels_completed";
  }
  session.savedAt = new Date().toISOString();

  return {
    result: graded.result,
    score: graded.score,
    correctRatio: graded.correctRatio,
    explanation: question.explanation,
    npcReaction: npcFeedback(question.levelId, graded.result),
    dimensionScores,
    flags,
    session: sessionState(store, session),
    question: session.currentQuestionId
      ? publicQuestion(store.data.questions.find((item) => item.id === session.currentQuestionId))
      : null
  };
}
