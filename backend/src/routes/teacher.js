import { DIMENSION_IDS, DIMENSIONS, LEVELS, QUESTION_TYPES } from "../constants.js";
import { classDashboard, ratingFor, starsFor, suggestionFor } from "../domain.js";
import { randomBytes } from "node:crypto";
import { hashPassword } from "../security.js";
import { httpError } from "../server.js";

const JOIN_CODE_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
const JOIN_CODE_LENGTH = 6;
const JOIN_CODE_TTL_MS = 24 * 60 * 60 * 1000;
const LETTERS = ["A", "B", "C", "D", "E", "F"];
const DISPLAY_KEY_TO_INTERNAL = { D1: "basics", D2: "prompting", D3: "tools", D4: "evaluation", D5: "collaboration", D6: "ethics" };
const DIMENSION_NAME = {
  D1: "AI基础认知",
  D2: "提示词工程",
  D3: "AI工具使用",
  D4: "AI结果评估与优化",
  D5: "人机协同解决问题",
  D6: "AI伦理与合规"
};
const DIMENSION_KEY_BY_NAME = Object.fromEntries(
  Object.entries(DIMENSION_NAME).map(([key, name]) => [name, key])
);

export function registerTeacherRoutes(router, { store }) {
  registerClassRoutes(router, store);
  registerAssessmentManagementRoutes(router, store);
  registerTaskRoutes(router, store);
  registerAnalyticsRoutes(router, store);
  registerQuestionRoutes(router, store);
}

function registerClassRoutes(router, store) {
  function activitySummary(studentId) {
    const quiz = (store.data.quizAttempts || []).filter((item) => item.studentId === studentId);
    const practice = (store.data.practiceAttempts || []).filter((item) => item.studentId === studentId);
    const levelCounts = quiz.reduce((groups, item) => {
      groups[item.levelId] = (groups[item.levelId] || 0) + 1;
      return groups;
    }, {});
    return {
      quizAnsweredCount: quiz.length,
      quizCorrectCount: quiz.filter((item) => item.correct).length,
      quizCompletedLevels: Object.values(levelCounts).filter((count) => count >= 5).length,
      practiceAnsweredCount: practice.length,
      practiceCorrectCount: practice.filter((item) => item.correct).length,
      lastQuizAt: quiz.map((item) => item.answeredAt).sort().pop() || null,
      lastPracticeAt: practice.map((item) => item.answeredAt).sort().pop() || null
    };
  }

  router.get("/api/classes", () => {
    const classes = store.data.classes.map((item) => ({
      ...item,
      studentCount: store.data.students.filter((student) => student.classId === item.id).length,
      ...store.data.students
        .filter((student) => student.classId === item.id)
        .reduce((totals, student) => {
          const summary = activitySummary(student.id);
          totals.quizAnsweredCount += summary.quizAnsweredCount;
          totals.quizCorrectCount += summary.quizCorrectCount;
          totals.practiceAnsweredCount += summary.practiceAnsweredCount;
          return totals;
        }, {
          quizAnsweredCount: 0,
          quizCorrectCount: 0,
          practiceAnsweredCount: 0
        }),
      dashboard: classDashboard(store, item.id)
    }));
    return { classes };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.post("/api/classes", (ctx) => {
    const name = String(ctx.body?.name || "").trim();
    if (!name) throw httpError(400, "班级名称不能为空");
    return store.update((data) => {
      const expiresAt = new Date(Date.now() + JOIN_CODE_TTL_MS).toISOString();
      const taken = new Set(
        data.classes
          .filter((item) => new Date(item.joinCodeExpiresAt || 0).getTime() > Date.now())
          .map((item) => item.joinCode)
      );
      let joinCode = "";
      do {
        joinCode = Array.from(randomBytes(JOIN_CODE_LENGTH))
          .map((value) => JOIN_CODE_ALPHABET[value % JOIN_CODE_ALPHABET.length])
          .join("");
      } while (taken.has(joinCode));
      const item = {
        id: store.id("c"),
        name,
        grade: String(ctx.body.grade || "未分组").trim(),
        headTeacher: String(ctx.body.headTeacher || ctx.user.name).trim(),
        ownerTeacherId: ctx.user.role === "teacher" ? ctx.user.teacherId : null,
        joinCode,
        joinCodeExpiresAt: expiresAt,
        createdAt: new Date().toISOString()
      };
      data.classes.push(item);
      return item;
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.put("/api/classes/:id", (ctx) => {
    const item = findClass(store, ctx.params.id);
    return store.update(() => {
      if (ctx.body.name !== undefined) item.name = String(ctx.body.name).trim();
      if (ctx.body.grade !== undefined) item.grade = String(ctx.body.grade).trim();
      if (ctx.body.headTeacher !== undefined) item.headTeacher = String(ctx.body.headTeacher).trim();
      return item;
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.delete("/api/classes/:id", (ctx) => {
    const item = findClass(store, ctx.params.id);
    return store.update((data) => {
      const students = data.students.filter((student) => student.classId === item.id);
      const studentIds = students.map((student) => student.id);
      const userIds = students.map((student) => student.userId).filter(Boolean);
      const sessions = data.sessions.filter((session) => studentIds.includes(session.studentId));
      const sessionIds = sessions.map((session) => session.id);
      data.classes = data.classes.filter((classItem) => classItem.id !== item.id);
      data.students = data.students.filter((student) => student.classId !== item.id);
      data.users = data.users.filter((user) => !userIds.includes(user.id));
      data.tokens = (data.tokens || []).filter((token) => !userIds.includes(token.userId));
      data.assessments = (data.assessments || []).map((assessment) => ({
        ...assessment,
        classIds: (assessment.classIds || []).filter((classId) => classId !== item.id)
      })).filter((assessment) => assessment.classIds.length);
      data.tasks = (data.tasks || []).map((task) => ({
        ...task,
        classIds: (task.classIds || []).filter((classId) => classId !== item.id)
      })).filter((task) => task.classIds.length);
      data.sessions = data.sessions.filter((session) => !studentIds.includes(session.studentId));
      data.reports = data.reports.filter((report) => !studentIds.includes(report.studentId));
      data.selfAssessments = data.selfAssessments.filter((record) => !studentIds.includes(record.studentId));
      data.practicalSubmissions = (data.practicalSubmissions || []).filter((record) =>
        !studentIds.includes(record.studentId) && !sessionIds.includes(record.sessionId)
      );
      data.quizAttempts = (data.quizAttempts || []).filter((record) => !studentIds.includes(record.studentId));
      data.practiceAttempts = (data.practiceAttempts || []).filter((record) => !studentIds.includes(record.studentId));
      data.wrongQuestions = (data.wrongQuestions || []).filter((record) => !studentIds.includes(record.studentId));
      removeForumAuthors(data, userIds);
      return { ok: true };
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.get("/api/classes/:id/students", (ctx) => ({
    students: store.data.students
      .filter((item) => item.classId === ctx.params.id)
      .map((student) => {
        const account = store.data.users.find((user) => user.id === student.userId);
        return {
          id: student.id,
          name: student.name,
          studentNo: student.studentNo,
          account: account?.account || null,
          accountStatus: account ? "active" : "local-only",
          ...activitySummary(student.id)
        };
      })
  }), { auth: true, roles: ["teacher", "admin"] });

  router.post("/api/classes/:id/students", (ctx) => {
    const klass = findClass(store, ctx.params.id);
    const account = String(ctx.body?.account || "").trim();
    const name = String(ctx.body?.name || "").trim();
    const password = String(ctx.body?.password || "");
    if (account.length < 3) throw httpError(400, "学员账号至少3个字符");

    return store.update((data) => {
      const existingUser = data.users.find((user) => user.role === "student" && user.account === account);
      if (existingUser) {
        const existingStudent = data.students.find((student) =>
          student.userId === existingUser.id || student.studentNo === account
        );
        if (existingStudent && existingStudent.classId && existingStudent.classId !== klass.id) {
          const currentClass = data.classes.find((item) => item.id === existingStudent.classId);
          throw httpError(409, `该学员账号已加入${currentClass?.name || "其他班级"}`);
        }
        if (!existingStudent) {
          const created = {
            id: store.id("s"),
            userId: existingUser.id,
            studentNo: account,
            name: name || existingUser.name,
            classId: klass.id
          };
          data.students.push(created);
          return { student: created, created: false };
        }
        existingStudent.userId = existingUser.id;
        existingStudent.classId = klass.id;
        if (name) existingStudent.name = name;
        return { student: existingStudent, created: false };
      }

      if (!name) throw httpError(400, "新学员账号需要填写姓名");
      if (password.length < 6) throw httpError(400, "新学员账号密码至少6位");
      const userId = store.id("u");
      const { salt, hash } = hashPassword(password);
      data.users.push({
        id: userId,
        account,
        role: "student",
        name,
        createdAt: new Date().toISOString(),
        passwordSalt: salt,
        passwordHash: hash
      });
      const student = {
        id: store.id("s"),
        userId,
        studentNo: account,
        name,
        classId: klass.id,
        avatarId: "sage"
      };
      data.students.push(student);
      return { student, created: true };
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.post("/api/classes/:id/students/import", (ctx) => {
    const klass = findClass(store, ctx.params.id);
    const rows = parseImportRows(ctx.body);
    if (!rows.length) throw httpError(400, "导入名单不能为空");
    return store.update((data) => {
      const imported = [];
      const skipped = [];
      for (const row of rows) {
        const name = String(row.name || row["姓名"] || "").trim();
        const studentNo = String(row.studentNo || row["学号"] || "").trim();
        if (!name || !studentNo || data.students.some((item) => item.studentNo === studentNo)) {
          skipped.push(row);
          continue;
        }
        const student = { id: store.id("s"), userId: null, studentNo, name, classId: klass.id };
        data.students.push(student);
        imported.push(student);
      }
      return { importedCount: imported.length, skippedCount: skipped.length, students: imported };
    });
  }, { auth: true, roles: ["teacher", "admin"] });
}

function registerTaskRoutes(router, store) {
  router.get("/api/teacher/tasks", () => ({
    tasks: store.data.tasks || []
  }), { auth: true, roles: ["teacher", "admin"] });

  router.post("/api/teacher/tasks", (ctx) => {
    const title = String(ctx.body?.title || "").trim();
    if (!title) throw httpError(400, "训练任务名称不能为空");
    if (!Array.isArray(ctx.body?.classIds) || !ctx.body.classIds.length) throw httpError(400, "请选择目标班级");
    ctx.body.classIds.forEach((id) => findClass(store, id));
    return store.update((data) => {
      if (!Array.isArray(data.tasks)) data.tasks = [];
      const item = {
        id: store.id("task"),
        title,
        type: String(ctx.body.type || "客观题练习"),
        classIds: ctx.body.classIds,
        deadline: ctx.body.deadline || null,
        description: String(ctx.body.description || ""),
        autoGrade: ctx.body.autoGrade !== false,
        notifyStudents: ctx.body.notifyStudents !== false,
        status: "published",
        createdBy: ctx.user.id,
        createdAt: new Date().toISOString()
      };
      data.tasks.push(item);
      return item;
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.patch("/api/teacher/tasks/:id", (ctx) => {
    const item = (store.data.tasks || []).find((task) => task.id === ctx.params.id);
    if (!item) throw httpError(404, "训练任务不存在");
    return store.update(() => {
      if (ctx.body.title !== undefined) item.title = String(ctx.body.title).trim();
      if (ctx.body.deadline !== undefined) item.deadline = ctx.body.deadline;
      if (["published", "disabled"].includes(ctx.body.status)) item.status = ctx.body.status;
      return item;
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.delete("/api/teacher/tasks/:id", (ctx) => store.update((data) => {
    const before = (data.tasks || []).length;
    data.tasks = (data.tasks || []).filter((task) => task.id !== ctx.params.id);
    if (data.tasks.length === before) throw httpError(404, "训练任务不存在");
    return { ok: true };
  }), { auth: true, roles: ["teacher", "admin"] });
}

function registerAssessmentManagementRoutes(router, store) {
  router.get("/api/teacher/assessments", () => {
    const list = store.data.assessments.map((item) => {
      const sessions = store.data.sessions.filter((session) => session.assessmentId === item.id);
      const completed = sessions.filter((session) => session.status === "completed" || session.status === "levels_completed");
      return {
        ...item,
        sessionCount: sessions.length,
        completedCount: completed.length,
        progressRate: sessions.length ? Math.round((completed.length / sessions.length) * 100) : 0
      };
    });
    return { assessments: list };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.delete("/api/teacher/assessments/:id", (ctx) => store.update((data) => {
    const assessment = findAssessment(store, ctx.params.id);
    const sessionIds = data.sessions.filter((item) => item.assessmentId === assessment.id).map((item) => item.id);
    data.assessments = data.assessments.filter((item) => item.id !== assessment.id);
    data.sessions = data.sessions.filter((item) => item.assessmentId !== assessment.id);
    data.reports = data.reports.filter((item) => item.assessmentId !== assessment.id);
    data.practicalSubmissions = (data.practicalSubmissions || []).filter((item) => !sessionIds.includes(item.sessionId));
    data.quizAttempts = (data.quizAttempts || []).filter((item) => !sessionIds.includes(item.sessionId));
    data.practiceAttempts = (data.practiceAttempts || []).filter((item) => !sessionIds.includes(item.sessionId));
    return { ok: true };
  }), { auth: true, roles: ["teacher", "admin"] });

  router.post("/api/teacher/assessments", (ctx) => {
    const title = String(ctx.body?.title || "").trim();
    if (!title) throw httpError(400, "测评名称不能为空");
    if (!Array.isArray(ctx.body.classIds) || !ctx.body.classIds.length) throw httpError(400, "请选择目标班级");
    ctx.body.classIds.forEach((id) => findClass(store, id));
    return store.update((data) => {
      const item = {
        id: store.id("a"),
        title,
        classIds: ctx.body.classIds,
        opensAt: ctx.body.opensAt || new Date().toISOString(),
        closesAt: ctx.body.closesAt || null,
        durationMinutes: Number(ctx.body.durationMinutes) || 35,
        limitedTime: ctx.body.limitedTime !== false,
        allowRetest: ctx.body.allowRetest === true,
        status: "draft",
        policy: {
          questionsPerLevel: Math.min(4, Math.max(1, Number(ctx.body.questionsPerLevel) || 3)),
          initialDifficulty: Math.min(5, Math.max(1, Number(ctx.body.initialDifficulty) || 3))
        },
        createdBy: ctx.user.id,
        createdAt: new Date().toISOString()
      };
      data.assessments.push(item);
      return item;
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.patch("/api/teacher/assessments/:id", (ctx) => {
    const item = store.data.assessments.find((assessment) => assessment.id === ctx.params.id);
    if (!item) throw httpError(404, "测评不存在");
    return store.update(() => {
      if (ctx.body.status) {
        if (!["draft", "published", "closed"].includes(ctx.body.status)) throw httpError(400, "测评状态不合法");
        item.status = ctx.body.status;
      }
      if (ctx.body.opensAt !== undefined) item.opensAt = ctx.body.opensAt;
      if (ctx.body.closesAt !== undefined) item.closesAt = ctx.body.closesAt;
      if (ctx.body.allowRetest !== undefined) item.allowRetest = Boolean(ctx.body.allowRetest);
      return item;
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.get("/api/teacher/assessments/:id/monitor", (ctx) => {
    const assessment = findAssessment(store, ctx.params.id);
    const students = store.data.students.filter((item) => assessment.classIds.includes(item.classId));
    const rows = students.map((student) => {
      const session = store.data.sessions
        .filter((item) => item.assessmentId === assessment.id && item.studentId === student.id)
        .sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt))[0];
      const report = store.data.reports.find((item) => item.sessionId === session?.id);
      const currentLevel = session ? LEVELS[Math.min(session.currentLevelIndex, LEVELS.length - 1)] : null;
      return {
        studentId: student.id,
        name: student.name,
        studentNo: student.studentNo,
        status: report ? "completed" : !session ? "not_started" : session.status,
        currentLevel: currentLevel?.name || null,
        answeredCount: Object.keys(session?.answers || {}).length,
        targetCount: session?.levelStates?.reduce((sum, item) => sum + item.targetCount, 0) || 15,
        progressRate: session?.levelStates?.length
          ? Math.round(session.levelStates.filter((item) => item.completed).length / session.levelStates.length * 100)
          : 0,
        rating: report?.rating || null,
        stars: report?.stars || 0,
        flags: session?.antiCheat?.flags || []
      };
    });
    return {
      assessment,
      rows,
      summary: {
        total: rows.length,
        started: rows.filter((item) => item.status !== "not_started").length,
        completed: rows.filter((item) => item.status === "completed").length
      }
    };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.get("/api/teacher/assessments/:id/results", (ctx) => {
    const assessment = findAssessment(store, ctx.params.id);
    const students = store.data.students.filter((item) => assessment.classIds.includes(item.classId));
    const rows = students.map((student) => {
      const report = store.data.reports
        .filter((item) => item.studentId === student.id && item.assessmentId === assessment.id)
        .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0];
      const klass = store.data.classes.find((item) => item.id === student.classId);
      return {
        studentId: student.id,
        name: student.name,
        studentNo: student.studentNo,
        className: klass?.name,
        status: report ? "completed" : "pending",
        rating: report?.rating || null,
        stars: report?.stars || 0,
        overall: report?.overall || 0,
        scores: report?.scores || Object.fromEntries(DIMENSION_IDS.map((id) => [id, 0]))
      };
    });
    return { assessment, rows };
  }, { auth: true, roles: ["teacher", "admin"] });
}

function registerAnalyticsRoutes(router, store) {
  router.get("/api/teacher/quiz-results", (ctx) => {
    const classId = ctx.query.get("classId");
    const reports = (store.data.reports || [])
      .filter((item) => item.source === "level-quiz")
      .filter((item) => !classId || item.classId === classId)
      .slice()
      .sort((left, right) => new Date(right.completedAt) - new Date(left.completedAt));

    const rows = reports.map((report) => {
      const student = store.data.students.find((item) => item.id === report.studentId) || null;
      const klass = store.data.classes.find((item) => item.id === (student?.classId || report.classId)) || null;
      return {
        reportId: report.id,
        studentId: student?.id || report.studentId,
        userId: report.userId,
        name: student?.name || report.studentName || "已删除学员",
        studentNo: student?.studentNo || report.studentNo || "-",
        classId: klass?.id || null,
        className: klass?.name || report.className || "未分班",
        status: "completed",
        completedAt: report.completedAt,
        rating: report.rating,
        stars: report.stars,
        overall: report.overall,
        scores: report.scores,
        displayScores: report.displayScores,
        activity: report.activity,
        levelResults: report.levelResults,
        report
      };
    });

    const totals = rows.reduce((acc, row) => {
      acc.answeredCount += Number(row.activity?.answeredCount) || 0;
      acc.correctCount += Number(row.activity?.correctCount) || 0;
      return acc;
    }, { answeredCount: 0, correctCount: 0 });

    return {
      rows,
      summary: {
        reportCount: rows.length,
        completedStudentCount: new Set(rows.map((row) => row.studentId)).size,
        answeredCount: totals.answeredCount,
        correctCount: totals.correctCount
      }
    };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.get("/api/teacher/classes/:id/dashboard", (ctx) => {
    findClass(store, ctx.params.id);
    return classDashboard(store, ctx.params.id);
  }, { auth: true, roles: ["teacher", "admin"] });

  router.get("/api/teacher/analytics/compare", () => {
    const rows = store.data.classes.map((item) => {
      const dashboard = classDashboard(store, item.id);
      return {
        classId: item.id,
        className: item.name,
        grade: item.grade,
        overall: Math.round(Object.values(dashboard.averages).reduce((sum, value) => sum + value, 0) / DIMENSION_IDS.length),
        ...dashboard
      };
    });
    const schoolAverage = Math.round(rows.reduce((sum, item) => sum + item.overall, 0) / Math.max(1, rows.length));
    return { classes: rows, schoolAverage };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.get("/api/teacher/students/:id/profile", (ctx) => {
    const student = store.data.students.find((item) => item.id === ctx.params.id);
    if (!student) throw httpError(404, "学员不存在");
    const klass = store.data.classes.find((item) => item.id === student.classId);
    const reports = store.data.reports
      .filter((item) => item.studentId === student.id)
      .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
    const sessions = store.data.sessions
      .filter((item) => item.studentId === student.id)
      .sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt));
    const latestReport = reports[0] || null;
    const latestSession = sessions[0] || null;
    const latestStandalonePractical = (store.data.practicalSubmissions || [])
      .filter((item) => item.studentId === student.id)
      .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))[0] || null;
    const quizAttempts = (store.data.quizAttempts || []).filter((item) => item.studentId === student.id);
    const practiceAttempts = (store.data.practiceAttempts || []).filter((item) => item.studentId === student.id);
    const quizLevelCounts = quizAttempts.reduce((groups, item) => {
      groups[item.levelId] = (groups[item.levelId] || 0) + 1;
      return groups;
    }, {});
    const practical = [latestSession?.practical || null, latestStandalonePractical]
      .filter(Boolean)
      .sort((a, b) => new Date(b.updatedAt || b.submittedAt) - new Date(a.updatedAt || a.submittedAt))[0] || null;
    return {
      student: { ...student, className: klass?.name || null },
      activity: {
        quizAnsweredCount: quizAttempts.length,
        quizCorrectCount: quizAttempts.filter((item) => item.correct).length,
        quizCompletedLevels: Object.values(quizLevelCounts).filter((count) => count >= 5).length,
        quizLevelCounts,
        practiceAnsweredCount: practiceAttempts.length,
        practiceCorrectCount: practiceAttempts.filter((item) => item.correct).length
      },
      latestReport,
      growth: reports.map((item) => ({
        reportId: item.id,
        completedAt: item.completedAt,
        rating: item.rating,
        overall: item.overall,
        scores: item.scores
      })).reverse(),
      answerDetails: latestReport?.answerDetails || Object.values(latestSession?.answers || {}),
      dialogueTranscripts: latestSession?.dialogueTranscripts || {},
      practical,
      antiCheat: latestSession?.antiCheat || null
    };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.get("/api/teacher/export/class/:id", (ctx) => {
    findClass(store, ctx.params.id);
    const dashboard = classDashboard(store, ctx.params.id);
    const students = store.data.students.filter((item) => item.classId === ctx.params.id);
    const header = ["姓名", "学号", "状态", "综合分", "评级", "星数", ...DIMENSIONS.map((item) => item.name)];
    const rows = students.map((student) => {
      const report = store.data.reports
        .filter((item) => item.studentId === student.id)
        .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0];
      return [
        student.name,
        student.studentNo,
        report ? "已完成" : "未完成",
        report?.overall || 0,
        report?.rating || "",
        report?.stars || 0,
        ...DIMENSION_IDS.map((id) => report?.scores[id] || 0)
      ];
    });
    rows.push(["班级均值", "", "", Math.round(Object.values(dashboard.averages).reduce((sum, value) => sum + value, 0) / DIMENSION_IDS.length), "", "", ...DIMENSION_IDS.map((id) => dashboard.averages[id])]);
    const csv = toCSV([header, ...rows]);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="class-${ctx.params.id}-report.csv"`
      },
      body: csv
    };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.get("/api/teacher/export/raw", () => {
    const header = ["报告ID", "学员", "学号", "班级", "测评", "完成时间", "综合分", "评级", ...DIMENSIONS.map((item) => item.name)];
    const rows = store.data.reports.map((item) => {
      const student = store.data.students.find((entry) => entry.id === item.studentId);
      const klass = store.data.classes.find((entry) => entry.id === student?.classId);
      const assessment = store.data.assessments.find((entry) => entry.id === item.assessmentId);
      return [
        item.id,
        maskName(student?.name),
        maskStudentNo(student?.studentNo),
        klass?.name || "",
        assessment?.title || item.assessmentId,
        item.completedAt,
        item.overall,
        item.rating,
        ...DIMENSION_IDS.map((id) => item.scores[id] || 0)
      ];
    });
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": "attachment; filename=raw-assessment-data.csv"
      },
      body: toCSV([header, ...rows])
    };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.delete("/api/teacher/students/:id/data", (ctx) => {
    const student = store.data.students.find((item) => item.id === ctx.params.id);
    if (!student) throw httpError(404, "学员不存在");
    return store.update((data) => {
      data.sessions = data.sessions.filter((item) => item.studentId !== student.id);
      data.reports = data.reports.filter((item) => item.studentId !== student.id);
      data.selfAssessments = data.selfAssessments.filter((item) => item.studentId !== student.id);
      student.name = "已匿名";
      student.studentNo = `anon_${student.id}`;
      return { ok: true };
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.delete("/api/teacher/students/:id", (ctx) => {
    const student = store.data.students.find((item) => item.id === ctx.params.id);
    if (!student) throw httpError(404, "学员不存在");
    return store.update((data) => {
      const sessions = data.sessions.filter((item) => item.studentId === student.id);
      const sessionIds = sessions.map((item) => item.id);
      data.students = data.students.filter((item) => item.id !== student.id);
      data.users = data.users.filter((item) => item.id !== student.userId);
      data.tokens = (data.tokens || []).filter((item) => item.userId !== student.userId);
      data.sessions = data.sessions.filter((item) => item.studentId !== student.id);
      data.reports = data.reports.filter((item) => item.studentId !== student.id);
      data.selfAssessments = data.selfAssessments.filter((item) => item.studentId !== student.id);
      data.practicalSubmissions = (data.practicalSubmissions || []).filter((item) =>
        item.studentId !== student.id && !sessionIds.includes(item.sessionId)
      );
      data.quizAttempts = (data.quizAttempts || []).filter((item) => item.studentId !== student.id);
      data.practiceAttempts = (data.practiceAttempts || []).filter((item) => item.studentId !== student.id);
      data.wrongQuestions = (data.wrongQuestions || []).filter((item) => item.studentId !== student.id);
      removeForumAuthors(data, [student.userId].filter(Boolean));
      return { ok: true };
    });
  }, { auth: true, roles: ["teacher", "admin"] });
}

function registerQuestionRoutes(router, store) {
  router.get("/api/questions", (ctx) => {
    let list = store.data.questions.slice();
    const keyword = String(ctx.query.get("keyword") || "").trim().toLowerCase();
    const type = ctx.query.get("type");
    const levelId = ctx.query.get("levelId");
    const status = ctx.query.get("status");
    if (keyword) {
      list = list.filter((item) =>
        questionText(item).toLowerCase().includes(keyword) ||
        item.knowledgePoints.some((point) => point.toLowerCase().includes(keyword))
      );
    }
    if (type) list = list.filter((item) => item.type === type);
    if (levelId) list = list.filter((item) => item.levelId === levelId);
    if (status) list = list.filter((item) => item.status === status);
    return { questions: list, total: list.length };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.get("/api/questions/template", () => {
    const csv = toCSV([[
      "levelId", "type", "difficulty", "dimKeys", "stem", "options", "answer", "analysis"
    ], [
      "academy", "single", "low", "D1,D2", "题干内容", "选项A|选项B|选项C|选项D", "A", "答案解析"
    ]]);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": "attachment; filename=question-template.csv"
      },
      body: csv
    };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.post("/api/questions", (ctx) => {
    const question = validateQuestion(ctx.body || {});
    return store.update((data) => {
      const item = {
        ...question,
        id: store.id("q"),
        status: "approved",
        createdBy: ctx.user.id,
        createdAt: new Date().toISOString()
      };
      data.questions.push(item);
      return item;
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.put("/api/questions/:id", (ctx) => {
    const item = findQuestion(store, ctx.params.id);
    const next = validateQuestion({ ...item, ...ctx.body });
    return store.update(() => Object.assign(item, next, { updatedAt: new Date().toISOString() }));
  }, { auth: true, roles: ["teacher", "admin"] });

  router.delete("/api/questions/:id", (ctx) => store.update((data) => {
    data.questions = data.questions.filter((item) => item.id !== ctx.params.id);
    return { ok: true };
  }), { auth: true, roles: ["teacher", "admin"] });

  router.patch("/api/questions/:id/review", (ctx) => {
    const item = findQuestion(store, ctx.params.id);
    const result = ctx.body?.result;
    if (!["approved", "rejected"].includes(result)) throw httpError(400, "审核结果不合法");
    return store.update(() => {
      item.status = result === "approved" ? "approved" : "rejected";
      item.reviewedAt = new Date().toISOString();
      item.reviewedBy = ctx.user.id;
      item.reviewComment = String(ctx.body.reviewComment || "");
      return item;
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.post("/api/questions/import", (ctx) => {
    const rows = parseImportRows(ctx.body);
    if (!rows.length) throw httpError(400, "导入题库不能为空");
    return store.update((data) => {
      const imported = [];
      const failed = [];
      for (const row of rows) {
        try {
          const question = validateQuestion({
            ...row,
            difficulty: String(row.difficulty || "low"),
            dimKeys: String(row.dimKeys || "D1,D2").split(",").map((value) => value.trim()).filter(Boolean),
            options: String(row.options || "").split("|"),
            answer: row.type === "multi" ? String(row.answer || "").split(",").map((value) => value.trim()) : String(row.answer || "").trim()
          });
          const item = {
            ...question,
            id: store.id("q"),
            status: "approved",
            createdBy: ctx.user.id,
            createdAt: new Date().toISOString()
          };
          data.questions.push(item);
          imported.push(item);
        } catch {
          failed.push(row);
        }
      }
      return { importedCount: imported.length, failedCount: failed.length, questions: imported };
    });
  }, { auth: true, roles: ["teacher", "admin"] });
}

function validateQuestion(input) {
  const levelId = String(input.levelId || "");
  const type = String(input.type || "");
  if (!LEVELS.some((item) => item.id === levelId)) throw httpError(400, "关卡不合法");
  if (!QUESTION_TYPES.includes(type)) throw httpError(400, "题型不合法");
  if (!["single", "judge", "multi"].includes(type)) throw httpError(400, "题库格式仅支持单选题、判断题和多选题");
  const difficulty = ["low", "medium", "high"].includes(input.difficulty) ? input.difficulty : difficultyKey(input.difficulty);
  if (!difficulty) throw httpError(400, "难度必须为低、中或高");
  const stem = String(input.stem || input.q || "").trim();
  if (!stem) throw httpError(400, "题干不能为空");
  const dimKeys = normalizeDimKeys(input.dimKeys || Object.keys(input.dimensions || {}));
  if (dimKeys.length !== 2) throw httpError(400, "请选择两个考察维度");
  const rawOptions = Array.isArray(input.options) ? input.options : [];
  const options = rawOptions.map((option, index) => {
    const key = input.choiceOptions?.[index]?.key || option?.key || LETTERS[index];
    const text = String(option?.text ?? option ?? "").trim();
    if (!text) throw httpError(400, "选项内容不能为空");
    return { key, text };
  });
  const expected = type === "judge" ? 2 : 0;
  if (options.length < Math.max(2, expected) || options.length > 6) throw httpError(400, "选项数量不合法");
  const answerKeys = normalizeAnswerKeys(input.answer ?? input.answerKeys, options, type);
  const item = {
    levelId,
    type,
    difficulty,
    stem,
    q: stem,
    options,
    choiceOptions: options,
    answer: answerKeys,
    answerKeys,
    analysis: String(input.analysis || input.explanation || "").trim(),
    explanation: String(input.analysis || input.explanation || "").trim(),
    dims: dimKeys.map((key) => DIMENSION_NAME[key] || key),
    dimKeys,
    dimensions: Object.fromEntries(dimKeys.map((key) => [DISPLAY_KEY_TO_INTERNAL[key], 1])),
    knowledgePoints: dimKeys.map((key) => DIMENSION_NAME[key] || key)
  };
  if (!item.analysis) throw httpError(400, "答案解析不能为空");
  return item;
}

function questionText(item) {
  return String(item.stem || item.q || "");
}

function difficultyKey(value) {
  const map = { 1: "low", 2: "low", 3: "medium", 4: "high", 5: "high", low: "low", medium: "medium", hard: "high", high: "high", "低": "low", "中": "medium", "高": "high" };
  const numeric = Number(value);
  return map[numeric] || map[String(value).trim()] || null;
}

function normalizeDimKeys(input) {
  const values = Array.isArray(input) ? input : String(input || "").split(/[,，、]/);
  const keys = values.map((value) => {
    const text = String(value).trim();
    if (/^D[1-6]$/.test(text)) return text;
    return DIMENSION_KEY_BY_NAME[text] || null;
  }).filter(Boolean);
  return [...new Set(keys)];
}

function normalizeAnswerKeys(input, options, type) {
  const valid = new Set(options.map((item) => item.key));
  let values = Array.isArray(input) ? input : String(input ?? "").split(/[,，]/);
  values = values.map((value) => String(value).trim()).filter(Boolean).map((value) => {
    if (valid.has(value)) return value;
    const index = Number(value);
    return Number.isInteger(index) && index >= 1 && index <= options.length ? options[index - 1].key : null;
  }).filter(Boolean);
  const keys = [...new Set(values)];
  if (!keys.length || keys.some((key) => !valid.has(key))) throw httpError(400, "正确答案不合法");
  if (type !== "multi" && keys.length !== 1) throw httpError(400, "单选题和判断题只能有一个正确答案");
  return keys;
}

function findClass(store, id) {
  const item = store.data.classes.find((classItem) => classItem.id === id);
  if (!item) throw httpError(404, "班级不存在");
  return item;
}

function removeForumAuthors(data, userIds) {
  const removed = new Set(userIds.filter(Boolean));
  if (!removed.size) return;
  data.forumPosts = (data.forumPosts || []).filter((post) => !removed.has(post.authorId));
  for (const post of data.forumPosts) {
    if (!Array.isArray(post.comments)) continue;
    post.comments = post.comments.filter((comment) => !removed.has(comment.authorId));
    post.commentCount = post.comments.length;
  }
}

function findAssessment(store, id) {
  const item = store.data.assessments.find((assessment) => assessment.id === id);
  if (!item) throw httpError(404, "测评不存在");
  return item;
}

function findQuestion(store, id) {
  const item = store.data.questions.find((question) => question.id === id);
  if (!item) throw httpError(404, "题目不存在");
  return item;
}

function parseImportRows(body) {
  if (Array.isArray(body?.rows)) return body.rows;
  if (typeof body?.csv === "string") return parseCSV(body.csv);
  return [];
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  const source = String(text || "").replace(/^\uFEFF/, "");
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (char === '"' && source[index + 1] === '"') {
        cell += '"';
        index += 1;
      } else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(cell.trim());
      cell = "";
    } else if (char === "\n") {
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") cell += char;
  }
  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  if (!rows.length) return [];
  const headers = rows[0];
  return rows.slice(1).map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""])));
}

function toCSV(rows) {
  return "\uFEFF" + rows.map((row) => row.map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n");
}

function maskName(value = "") {
  const text = String(value || "");
  if (!text) return "";
  return text.length <= 1 ? "*" : `${text[0]}${"*".repeat(Math.max(1, text.length - 1))}`;
}

function maskStudentNo(value = "") {
  const text = String(value || "");
  return text.length <= 4 ? "****" : `${text.slice(0, 2)}****${text.slice(-2)}`;
}
