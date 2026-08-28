// 学员端闯关测评会话 API（移植自 version3/backend）。
// 该接口为公开接口（无需登录），与 AItest 现有登录/管理端接口共存于同一后端、同一源。
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { httpError } from "../server.js";

const QUESTION_COUNT_PER_LEVEL = 5;
const SESSION_TTL_MS = 48 * 60 * 60 * 1000;
const DIFFICULTIES = ["low", "medium", "high"];

// 关卡 -> 命中的能力维度（与 version3 学员端 level.html 的关卡 id 1..5 对应）
const LEVEL_DIMENSIONS = new Map([
  ["1", ["D1", "D2", "D3", "D6"]],
  ["2", ["D4", "D6", "D1", "D2"]],
  ["3", ["D3", "D2", "D4", "D6", "D5"]],
  ["4", ["D5", "D3", "D2", "D4", "D6"]],
  ["5", ["D6", "D5", "D4", "D1"]]
]);

const questionsPath = path.join(import.meta.dirname, "..", "..", "data", "questions.json");
let QUESTION_BANK = [];
try {
  const parsed = JSON.parse(readFileSync(questionsPath, "utf8"));
  const questions = parsed.questions || [];
  if (!questions.length) throw new Error("题库为空");
  QUESTION_BANK = Object.freeze(questions.map((question) => Object.freeze({
    ...question,
    difficulty: question.difficulty === "hard" ? "high" : question.difficulty
  })));
  console.log(`[quiz-session] 已加载 ${QUESTION_BANK.length} 道题（学员端闯关题库）`);
} catch (error) {
  // 即使题库缺失，也不影响登录/管理端接口，仅闯关功能返回 503。
  console.error(`[quiz-session] 题库加载失败（学员端闯关将不可用）: ${error.message}`);
}

const sessions = new Map();

function trimSessions(now = Date.now()) {
  for (const [id, session] of sessions) {
    if (session.expiresAt <= now) sessions.delete(id);
  }
}

function createSession(userId = null) {
  const now = Date.now();
  const levels = {};
  for (const id of LEVEL_DIMENSIONS.keys()) {
    levels[id] = { total: QUESTION_COUNT_PER_LEVEL, asked: [], answers: {}, pendingId: null, difficulty: 1 };
  }
  const session = {
    id: randomUUID(),
    userId,
    createdAt: now,
    expiresAt: now + SESSION_TTL_MS,
    usedQuestionIds: [],
    levels
  };
  sessions.set(session.id, session);
  return session;
}

function getSession(id) {
  if (!id) return null;
  trimSessions();
  const session = sessions.get(String(id));
  if (!session || session.expiresAt <= Date.now()) return null;
  return session;
}

function publicQuestion(question) {
  return {
    id: question.id,
    type: question.type,
    q: question.q,
    options: question.options,
    dims: question.dims,
    dimKeys: question.dimKeys
  };
}

function clampDifficulty(index) {
  return Math.min(DIFFICULTIES.length - 1, Math.max(0, index));
}

function chooseQuestion(session, store, dimensionKeys, difficultyValue) {
  const startIndex = clampDifficulty(DIFFICULTIES.indexOf(difficultyValue));
  const candidateDifficulties = [
    startIndex,
    Math.max(0, startIndex - 1),
    Math.min(DIFFICULTIES.length - 1, startIndex + 1),
    0,
    2
  ];
  for (const difficultyIndex of candidateDifficulties) {
    const difficulty = DIFFICULTIES[difficultyIndex];
    const candidates = [];
    let strongestMatch = 0;
    for (const question of questionBank(store)) {
      if (session.usedQuestionIds.includes(question.id)) continue;
      if (question.difficulty !== difficulty) continue;
      const matchCount = dimensionKeys.reduce(
        (total, key) => total + (question.dimKeys.includes(key) ? 1 : 0),
        0
      );
      strongestMatch = Math.max(strongestMatch, matchCount);
      candidates.push({ question, matchCount });
    }
    const bestCandidates = candidates
      .filter((candidate) => candidate.matchCount === strongestMatch)
      .map((candidate) => candidate.question);
    if (bestCandidates.length) {
      return bestCandidates[Math.floor(Math.random() * bestCandidates.length)];
    }
  }
  return null;
}

function questionBank(store) {
  const source = store?.data?.questions || [];
  return source.length ? source : QUESTION_BANK;
}

function gradeAnswer(question, selectedKeys) {
  const expected = new Set(question.answer);
  const selected = new Set(selectedKeys);
  const correct = selected.size === expected.size && [...selected].every((key) => expected.has(key));
  const partialCorrect = !correct && question.answer.some((key) => selected.has(key));
  const answer = question.options
    .filter((option) => expected.has(option.key))
    .map((option) => ({ key: option.key, text: option.text }));
  return { correct, partialCorrect, answer };
}

function answerText(question) {
  return question.answer.map((key) => {
    const option = question.options.find((item) => item.key === key);
    return `${key}.${option ? option.text : ""}`;
  }).join("; ");
}

function wrongQuestionIdentity(question) {
  if (question.id) return `id:${question.id}`;
  return `stem:${String(question.q || question.stem || "").replace(/\s+/g, " ").trim()}`;
}

function saveWrongQuestion(data, input) {
  if (!Array.isArray(data.wrongQuestions)) data.wrongQuestions = [];
  const identity = wrongQuestionIdentity(input.question);
  const now = new Date().toISOString();
  const options = Array.isArray(input.question.options)
    ? input.question.options.map((option) => ({
      key: String(option.key || ""),
      text: String(option.text || "")
    })).filter((option) => option.key && option.text)
    : [];
  const answer = (Array.isArray(input.question.answer) ? input.question.answer : []).map(String);
  const selected = (Array.isArray(input.selected) ? input.selected : []).map(String);
  const dims = (Array.isArray(input.question.dims) ? input.question.dims : []).map(String);

  const existing = data.wrongQuestions.find((item) =>
    item.studentId === input.studentId &&
    item.source === input.source &&
    item.identity === identity
  );
  const common = {
    studentId: input.studentId,
    userId: input.userId,
    source: input.source,
    sourceLabel: input.sourceLabel,
    levelId: input.levelId || null,
    questionId: input.question.id || null,
    identity,
    stem: String(input.question.q || input.question.stem || ""),
    type: String(input.question.type || "single"),
    typeLabel: String(input.question.typeLabel || ""),
    options,
    answer,
    selected,
    analysis: String(input.question.analysis || ""),
    dims,
    lastWrongAt: now
  };

  if (existing) {
    Object.assign(existing, common, { wrongCount: (existing.wrongCount || 1) + 1 });
    return existing;
  }

  const record = { ...common, id: input.store.id("wq"), wrongCount: 1, wrongAt: now };
  data.wrongQuestions.push(record);
  return record;
}

export function registerQuizSessionRoutes(router, { store }) {
  router.post("/api/quiz/sessions", (ctx) => {
    const session = createSession(ctx.user?.role === "student" ? ctx.user.id : null);
    return {
      statusCode: 201,
      body: {
        id: session.id,
        expiresAt: session.expiresAt,
        questionCountPerLevel: QUESTION_COUNT_PER_LEVEL
      }
    };
  });

  router.post("/api/quiz/sessions/:sessionId/levels/:levelId/next-question", (ctx) => {
    const { sessionId, levelId } = ctx.params;
    const session = getSession(sessionId);
    if (!session) throw httpError(404, "测评会话不存在或已过期，请刷新页面。");
    const dims = LEVEL_DIMENSIONS.get(levelId);
    const level = session.levels[levelId];
    if (!level || !dims) throw httpError(404, "关卡不存在。");
    if (level.asked.length >= level.total) throw httpError(409, "本关题目已全部完成。");
    const question = chooseQuestion(session, store, dims, DIFFICULTIES[level.difficulty]);
    if (!question) throw httpError(503, "题库中没有可用题目。");
    session.usedQuestionIds.push(question.id);
    level.asked.push(question.id);
    level.pendingId = question.id;
    return {
      question: publicQuestion(question),
      number: level.asked.length,
      total: level.total
    };
  });

  router.post("/api/quiz/sessions/:sessionId/answers", (ctx) => {
    const { sessionId } = ctx.params;
    const session = getSession(sessionId);
    if (!session) throw httpError(404, "测评会话不存在或已过期。");
    const payload = ctx.body || {};
    const level = session.levels[String(payload.levelId)];
    const question = questionBank(store).find((item) => item.id === payload.questionId);
    if (!level || !question || level.pendingId !== payload.questionId) {
      throw httpError(400, "题目信息无效或不在待回答状态。");
    }
    const optionKeys = new Set(question.options.map((option) => option.key));
    const selectedKeys = [...new Set(payload.selected || [])];
    if (!selectedKeys.length || selectedKeys.some((key) => !optionKeys.has(key))) {
      throw httpError(400, "答案选项无效。");
    }
    if (Object.prototype.hasOwnProperty.call(level.answers, question.id)) {
      throw httpError(409, "该题目已经提交过答案。");
    }
    const result = gradeAnswer(question, selectedKeys);
    if (session.userId && store) {
      const student = store.data.students.find((item) => item.userId === session.userId);
      if (student) {
        store.update((data) => {
          if (!Array.isArray(data.quizAttempts)) data.quizAttempts = [];
          data.quizAttempts.push({
            id: `${session.id}:${question.id}`,
            sessionId: session.id,
            studentId: student.id,
            classId: student.classId || null,
            userId: session.userId,
            studentNo: student.studentNo,
            studentName: student.name,
            levelId: String(payload.levelId),
            questionId: question.id,
            selected: selectedKeys,
            dimensionKeys: question.dimKeys,
            correct: result.correct,
            answeredAt: new Date().toISOString()
          });
          if (!result.correct) {
            saveWrongQuestion(data, {
              store,
              studentId: student.id,
              userId: session.userId,
              source: "level-quiz",
              sourceLabel: "闯关",
              levelId: String(payload.levelId),
              question,
              selected: selectedKeys
            });
          }
          return { recorded: true };
        });
      }
    }
    level.answers[question.id] = {
      questionId: question.id,
      selected: selectedKeys,
      correct: result.correct
    };
    level.pendingId = null;
    level.difficulty = clampDifficulty(level.difficulty + (result.correct ? 1 : -1));
    return {
      correct: result.correct,
      partialCorrect: result.partialCorrect,
      answer: result.answer,
      answerText: answerText(question),
      analysis: question.analysis,
      dims: question.dims
    };
  });

  router.post("/api/quiz/practice/answers", (ctx) => {
    const student = ctx.student;
    if (!student) throw httpError(404, "学员档案不存在");
    const correct = Boolean(ctx.body?.correct);
    const questionInput = ctx.body?.question || {};
    const stem = String(questionInput.q || questionInput.stem || "").trim();
    if (!stem) throw httpError(400, "训练题目信息不完整");

    return store.update((data) => {
      if (!Array.isArray(data.practiceAttempts)) data.practiceAttempts = [];
      data.practiceAttempts.push({
        id: store.id("pa"),
        studentId: student.id,
        userId: ctx.user.id,
        questionId: ctx.body?.questionId || null,
        correct,
        answeredAt: new Date().toISOString()
      });
      if (!correct) {
        saveWrongQuestion(data, {
          store,
          studentId: student.id,
          userId: ctx.user.id,
          source: "training",
          sourceLabel: String(ctx.body?.sourceLabel || "能力训练"),
          levelId: null,
          question: {
            id: questionInput.id || null,
            q: stem,
            type: questionInput.type,
            typeLabel: questionInput.typeLabel,
            options: Array.isArray(questionInput.options) ? questionInput.options : [],
            answer: Array.isArray(questionInput.answer) ? questionInput.answer : [],
            analysis: questionInput.analysis,
            dims: Array.isArray(questionInput.dims) ? questionInput.dims : []
          },
          selected: Array.isArray(ctx.body?.selected) ? ctx.body.selected : []
        });
      }

      return {
        practiceAnsweredCount: data.practiceAttempts.filter((item) => item.studentId === student.id).length,
        correct
      };
    });
  }, { auth: true, roles: ["student"] });
}
