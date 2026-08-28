import { DIMENSIONS, DIMENSION_IDS, LEVELS } from "../constants.js";
import { ratingFor, starsFor } from "../domain.js";
import { httpError } from "../server.js";

const DISPLAY_TO_DIMENSION = {
  D1: "basics",
  D2: "prompting",
  D3: "tools",
  D4: "evaluation",
  D5: "collaboration",
  D6: "ethics"
};
const DISPLAY_KEYS = Object.keys(DISPLAY_TO_DIMENSION);

const SELF_ASSESSMENT = [
  {
    id: "self_1",
    text: "你之前使用过哪些AI工具？",
    options: ["几乎没接触过", "用过1-2个，会基础提问", "经常使用，能写出较完整提示词"],
    weights: [1, 3, 5]
  },
  {
    id: "self_2",
    text: "面对不熟悉的任务，你通常会？",
    options: ["直接让AI随便生成", "简单描述需求后看结果", "先拆目标、给角色、定格式再生成"],
    weights: [1, 3, 5]
  },
  {
    id: "self_3",
    text: "你希望本次测评从什么难度开始？",
    options: ["从较简单开始", "正常难度", "挑战较高难度"],
    weights: [1, 3, 5]
  }
];

export function registerStudentRoutes(router, { store }) {
  router.get("/api/meta", () => ({
    productName: "智核觉醒",
    assessmentVersion: "plan-v2",
    dimensionCount: DIMENSIONS.length,
    levelCount: LEVELS.length,
    dimensions: DIMENSIONS,
    levels: LEVELS,
    legacyNote: "需求清单早期写法为6站点；后端按策划2版实现为5关卡+觉醒报告，六大能力维度不变。"
  }));

  router.get("/api/students/me/profile", (ctx) => {
    if (!ctx.student) throw httpError(404, "学员档案不存在");
    const klass = store.data.classes.find((item) => item.id === ctx.student.classId);
    return { ...ctx.student, className: klass?.name || null };
  }, { auth: true, roles: ["student"] });

  router.put("/api/students/me/profile", (ctx) => {
    if (!ctx.student) throw httpError(404, "学员档案不存在");
    return store.update(() => {
      if (ctx.body.nickname !== undefined) ctx.student.nickname = String(ctx.body.nickname).slice(0, 20);
      if (ctx.body.avatarId !== undefined) ctx.student.avatarId = String(ctx.body.avatarId);
      if (ctx.body.classId !== undefined) {
        if (!store.data.classes.some((item) => item.id === ctx.body.classId)) throw httpError(400, "班级不存在");
        ctx.student.classId = ctx.body.classId;
      }
      return ctx.student;
    });
  }, { auth: true, roles: ["student"] });

  router.post("/api/students/me/join-class", (ctx) => {
    if (!ctx.student) throw httpError(404, "学员档案不存在");
    const code = String(ctx.body?.code || "").trim().toUpperCase();
    if (!code) throw httpError(400, "请输入班级口令");

    const klass = store.data.classes.find((item) =>
      item.joinCode === code &&
      new Date(item.joinCodeExpiresAt || 0).getTime() > Date.now()
    );
    if (!klass) throw httpError(404, "口令无效或已过期");

    return store.update(() => {
      ctx.student.classId = klass.id;
      return {
        ok: true,
        class: {
          id: klass.id,
          name: klass.name,
          grade: klass.grade,
          headTeacher: klass.headTeacher
        },
        joinCodeExpiresAt: klass.joinCodeExpiresAt
      };
    });
  }, { auth: true, roles: ["student"] });

  router.get("/api/students/me/self-assessment", () => ({ questions: SELF_ASSESSMENT }));

  router.post("/api/students/me/self-assessment", (ctx) => {
    const answers = ctx.body?.answers;
    if (!answers || typeof answers !== "object") throw httpError(400, "请提交自评答案");
    let total = 0;
    for (const question of SELF_ASSESSMENT) {
      const index = Number(answers[question.id]);
      if (!Number.isInteger(index) || index < 0 || index >= question.options.length) {
        throw httpError(400, "自评答案不完整");
      }
      total += question.weights[index];
    }
    const initialDifficulty = total <= 4 ? 1 : total <= 10 ? 3 : 5;
    return store.update(() => {
      const record = {
        id: store.id("self"),
        studentId: ctx.student.id,
        answers,
        initialDifficulty,
        completedAt: new Date().toISOString()
      };
      store.data.selfAssessments = store.data.selfAssessments.filter((item) => item.studentId !== ctx.student.id);
      store.data.selfAssessments.push(record);
      return record;
    });
  }, { auth: true, roles: ["student"] });

  router.get("/api/students/me/history", (ctx) => {
    const reports = store.data.reports
      .filter((item) => item.studentId === ctx.student.id)
      .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
    return { reports };
  }, { auth: true, roles: ["student"] });

  router.get("/api/students/me/wrong-questions", (ctx) => {
    const questions = (store.data.wrongQuestions || [])
      .filter((item) => item.studentId === ctx.student.id)
      .sort((a, b) => new Date(b.lastWrongAt || b.wrongAt || 0) - new Date(a.lastWrongAt || a.wrongAt || 0));
    return { questions, total: questions.length };
  }, { auth: true, roles: ["student"] });

  router.get("/api/students/me/reports/:id", (ctx) => {
    const report = store.data.reports.find((item) => item.id === ctx.params.id && item.studentId === ctx.student.id);
    if (!report) throw httpError(404, "报告不存在");
    return report;
  }, { auth: true, roles: ["student"] });

  router.post("/api/students/me/awakening-reports", (ctx) => {
    if (!ctx.student) throw httpError(404, "学员档案不存在");
    const klass = store.data.classes.find((item) => item.id === ctx.student.classId) || null;
    const sessionId = String(ctx.body?.sessionId || "").trim();
    if (!sessionId) throw httpError(400, "闯关会话不存在");

    const attempts = (store.data.quizAttempts || [])
      .filter((item) => item.studentId === ctx.student.id && item.sessionId === sessionId)
      .sort((a, b) => new Date(a.answeredAt) - new Date(b.answeredAt));
    if (attempts.length > 25) throw httpError(409, "闯关答题数量不合法");

    const fallbackScores = normalizeDisplayScores(ctx.body?.scores);
    const scores = buildScoresFromAttempts(attempts);
    const displayScores = DISPLAY_KEYS.some((key) => scores[key].total > 0)
      ? Object.fromEntries(DISPLAY_KEYS.map((key) => [key, Math.round(scores[key].score)]))
      : fallbackScores;

    const activity = {
      answeredCount: attempts.length || clampCount(ctx.body?.activity?.answeredCount, 25),
      correctCount: attempts.filter((item) => item.correct).length
    };
    if (!activity.correctCount) {
      activity.correctCount = clampCount(ctx.body?.activity?.correctCount, activity.answeredCount);
    }
    if (!activity.answeredCount) throw httpError(400, "闯关记录为空，无法生成觉醒报告");
    if (activity.correctCount > activity.answeredCount) throw httpError(400, "闯关记录不合法");

    const measurable = DISPLAY_KEYS
      .map((key) => [key, displayScores[key]])
      .filter(([, score]) => Number(score) > 0);
    const overall = measurable.length
      ? Math.round(measurable.reduce((sum, [, score]) => sum + score, 0) / measurable.length)
      : 0;
    const rating = ratingFor(overall);
    const levelResults = buildLevelResults(attempts, ctx.body?.levelResults);
    const stars = Math.min(25, levelResults.reduce((sum, item) => sum + item.stars, 0));

    return store.update((data) => {
      const existing = data.reports.find((item) =>
        item.studentId === ctx.student.id &&
        item.source === "level-quiz" &&
        item.sessionId === sessionId
      );
      const record = {
        id: existing?.id || store.id("r"),
        studentId: ctx.student.id,
        userId: ctx.user.id,
        classId: ctx.student.classId || null,
        className: klass?.name || "未分班",
        studentNo: ctx.student.studentNo,
        studentName: ctx.student.name,
        assessmentId: null,
        sessionId,
        source: "level-quiz",
        completedAt: new Date().toISOString(),
        scores: Object.fromEntries(DISPLAY_KEYS.map((key) => [
          DISPLAY_TO_DIMENSION[key],
          displayScores[key]
        ])),
        displayScores,
        overall,
        rating,
        stars,
        encouragement: encouragementFor(rating),
        activity,
        levelResults,
        sync: {
          personalCenter: true,
          adminWorkspace: true,
          syncedAt: new Date().toISOString()
        }
      };
      if (existing) Object.assign(existing, record);
      else data.reports.push(record);
      return record;
    });
  }, { auth: true, roles: ["student"] });

  router.get("/api/students/me/retest-goal", (ctx) => {
    const previous = store.data.reports
      .filter((item) => item.studentId === ctx.student.id)
      .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0];
    if (!previous) return { isFirstAttempt: true, previous: null, targetRating: "B" };
    const order = ["D", "C", "B", "A", "S"];
    const targetRating = order[Math.min(order.length - 1, order.indexOf(previous.rating) + 1)];
    return {
      isFirstAttempt: false,
      previous,
      targetRating,
      slogan: `上次评级${previous.rating}，本次冲击${targetRating}！`
    };
  }, { auth: true, roles: ["student"] });

  router.delete("/api/students/me/data", (ctx) => {
    return store.update((data) => {
      data.sessions = data.sessions.filter((item) => item.studentId !== ctx.student.id);
      data.reports = data.reports.filter((item) => item.studentId !== ctx.student.id);
      data.selfAssessments = data.selfAssessments.filter((item) => item.studentId !== ctx.student.id);
      data.practicalSubmissions = (data.practicalSubmissions || []).filter((item) => item.studentId !== ctx.student.id);
      data.tokens = data.tokens.filter((item) => item.userId !== ctx.user.id);
      const student = data.students.find((item) => item.id === ctx.student.id);
      if (student) {
        student.name = "已注销用户";
        student.nickname = "已注销用户";
        student.studentNo = `deleted_${student.id}`;
      }
      const user = data.users.find((item) => item.id === ctx.user.id);
      if (user) {
        user.name = "已注销用户";
        user.disabled = true;
      }
      return { ok: true, scope: "personal-data" };
    });
  }, { auth: true, roles: ["student"] });
}

function normalizeDisplayScores(input) {
  const source = input && typeof input === "object" ? input : {};
  return Object.fromEntries(DISPLAY_KEYS.map((key) => {
    const score = Number(source[key]);
    return [key, Number.isFinite(score) ? Math.min(100, Math.max(0, Math.round(score))) : 0];
  }));
}

function buildScoresFromAttempts(attempts) {
  const result = Object.fromEntries(DISPLAY_KEYS.map((key) => ({
    [key]: { score: 0, total: 0 }
  })));
  for (const attempt of attempts) {
    const keys = Array.isArray(attempt.dimensionKeys) && attempt.dimensionKeys.length
      ? attempt.dimensionKeys.filter((key) => DISPLAY_KEYS.includes(key))
      : [];
    if (!keys.length) continue;
    const value = attempt.correct ? 100 : 0;
    for (const key of keys) {
      result[key].score += value;
      result[key].total += 1;
    }
  }
  for (const key of DISPLAY_KEYS) {
    result[key].score = result[key].total ? result[key].score / result[key].total : 0;
  }
  return result;
}

function buildLevelResults(attempts, input) {
  const grouped = new Map();
  for (const attempt of attempts) {
    const levelId = String(attempt.levelId || "");
    if (!levelId) continue;
    const item = grouped.get(levelId) || { levelId, answeredCount: 0, correctCount: 0 };
    item.answeredCount += 1;
    item.correctCount += attempt.correct ? 1 : 0;
    grouped.set(levelId, item);
  }
  if (grouped.size) {
    return [...grouped.values()]
      .sort((a, b) => Number(a.levelId) - Number(b.levelId))
      .map((item) => ({
        ...item,
        stars: item.answeredCount ? Math.max(1, Math.round((item.correctCount / item.answeredCount) * 5)) : 1
      }));
  }

  const rows = Array.isArray(input) ? input : [];
  return rows.slice(0, 5).map((row, index) => ({
    levelId: String(Number(row?.levelId) || index + 1),
    answeredCount: clampCount(row?.answeredCount, 5),
    correctCount: Math.min(clampCount(row?.answeredCount, 5), clampCount(row?.correctCount, 5)),
    stars: Math.min(5, Math.max(1, Number(row?.stars) || 1))
  })).filter((item) => item.answeredCount > 0);
}

function clampCount(value, max) {
  const count = Number(value);
  return Number.isInteger(count) && count > 0 ? Math.min(max, count) : 0;
}

function encouragementFor(rating) {
  const messages = {
    S: "你已经在智核域点亮了完整的能力星图。保持好奇心，下一个复杂真实任务就交给你领航！",
    A: "觉醒进度非常漂亮！你的判断力和协作意识已经成型，继续把强项用进真实挑战里吧。",
    B: "星核已经稳定发光。你建立了可靠的能力基础，再集中打磨一两个维度，就能迎来大突破。",
    C: "每一次答题都是一次校准。别急着比较，先选一个最想突破的维度，把它练成你的新优势。",
    D: "萌芽期最重要是敢闯敢试。你已经完成了五关试炼，下一轮就从今天的错题里长出新的力量。"
  };
  return messages[rating] || messages.C;
}
