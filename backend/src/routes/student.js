import { DIMENSIONS, LEVELS } from "../constants.js";
import { httpError } from "../server.js";

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
    if (!ctx.student) throw httpError(404, "学生档案不存在");
    const klass = store.data.classes.find((item) => item.id === ctx.student.classId);
    return { ...ctx.student, className: klass?.name || null };
  }, { auth: true, roles: ["student"] });

  router.put("/api/students/me/profile", (ctx) => {
    if (!ctx.student) throw httpError(404, "学生档案不存在");
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

  router.get("/api/students/me/reports/:id", (ctx) => {
    const report = store.data.reports.find((item) => item.id === ctx.params.id && item.studentId === ctx.student.id);
    if (!report) throw httpError(404, "报告不存在");
    return report;
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
