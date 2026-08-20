import { DIMENSION_IDS, DIMENSIONS, LEVELS, QUESTION_TYPES } from "../constants.js";
import { classDashboard, ratingFor, starsFor, suggestionFor } from "../domain.js";
import { httpError } from "../server.js";

export function registerTeacherRoutes(router, { store }) {
  registerClassRoutes(router, store);
  registerAssessmentManagementRoutes(router, store);
  registerAnalyticsRoutes(router, store);
  registerQuestionRoutes(router, store);
}

function registerClassRoutes(router, store) {
  router.get("/api/classes", () => {
    const classes = store.data.classes.map((item) => ({
      ...item,
      studentCount: store.data.students.filter((student) => student.classId === item.id).length,
      dashboard: classDashboard(store, item.id)
    }));
    return { classes };
  }, { auth: true, roles: ["teacher", "admin"] });

  router.post("/api/classes", (ctx) => {
    const name = String(ctx.body?.name || "").trim();
    if (!name) throw httpError(400, "班级名称不能为空");
    return store.update((data) => {
      const item = {
        id: store.id("c"),
        name,
        grade: String(ctx.body.grade || "未分组").trim(),
        headTeacher: String(ctx.body.headTeacher || ctx.user.name).trim(),
        ownerTeacherId: ctx.user.role === "teacher" ? ctx.user.teacherId : null,
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
    if (store.data.students.some((student) => student.classId === item.id)) {
      throw httpError(409, "班级下仍有学生，不能删除");
    }
    return store.update((data) => {
      data.classes = data.classes.filter((classItem) => classItem.id !== item.id);
      return { ok: true };
    });
  }, { auth: true, roles: ["teacher", "admin"] });

  router.get("/api/classes/:id/students", (ctx) => ({
    students: store.data.students.filter((item) => item.classId === ctx.params.id)
  }), { auth: true, roles: ["teacher", "admin"] });

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
    if (!student) throw httpError(404, "学生不存在");
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
    const practical = [latestSession?.practical || null, latestStandalonePractical]
      .filter(Boolean)
      .sort((a, b) => new Date(b.updatedAt || b.submittedAt) - new Date(a.updatedAt || a.submittedAt))[0] || null;
    return {
      student: { ...student, className: klass?.name || null },
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
    const header = ["报告ID", "学生", "学号", "班级", "测评", "完成时间", "综合分", "评级", ...DIMENSIONS.map((item) => item.name)];
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
    if (!student) throw httpError(404, "学生不存在");
    return store.update((data) => {
      data.sessions = data.sessions.filter((item) => item.studentId !== student.id);
      data.reports = data.reports.filter((item) => item.studentId !== student.id);
      data.selfAssessments = data.selfAssessments.filter((item) => item.studentId !== student.id);
      student.name = "已匿名";
      student.studentNo = `anon_${student.id}`;
      return { ok: true };
    });
  }, { auth: true, roles: ["admin"] });
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
        item.stem.toLowerCase().includes(keyword) ||
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
      "levelId", "type", "difficulty", "stem", "options", "answer", "dimensions", "knowledgePoints", "estimatedSeconds"
    ], [
      "academy", "single", 2, "题干内容", "选项A|选项B|选项C", "1", "basics:1,prompting:2", "知识点1|知识点2", 90
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
        status: ctx.user.role === "admin" ? "approved" : "pending",
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
  }, { auth: true, roles: ["admin"] });

  router.delete("/api/questions/:id", (ctx) => store.update((data) => {
    data.questions = data.questions.filter((item) => item.id !== ctx.params.id);
    return { ok: true };
  }), { auth: true, roles: ["admin"] });

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
  }, { auth: true, roles: ["admin"] });

  router.post("/api/questions/import", (ctx) => {
    const rows = parseImportRows(ctx.body);
    if (!rows.length) throw httpError(400, "导入题库不能为空");
    return store.update((data) => {
      const imported = [];
      const failed = [];
      for (const row of rows) {
        try {
          const dimensions = Object.fromEntries(String(row.dimensions || "").split(",").map((pair) => {
            const [id, weight] = pair.split(":");
            return [id.trim(), Number(weight) || 1];
          }));
          const question = validateQuestion({
            ...row,
            difficulty: Number(row.difficulty),
            estimatedSeconds: Number(row.estimatedSeconds),
            options: String(row.options || "").split("|"),
            answer: row.type === "multi" || row.type === "sort" ? String(row.answer).split(",").map(Number) : row.type === "single" || row.type === "judge" || row.type === "scene" ? Number(row.answer) : row.answer,
            knowledgePoints: String(row.knowledgePoints || "").split("|").filter(Boolean),
            dimensions
          });
          const item = {
            ...question,
            id: store.id("q"),
            status: ctx.user.role === "admin" ? "approved" : "pending",
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
  const difficulty = Number(input.difficulty);
  if (!Number.isInteger(difficulty) || difficulty < 1 || difficulty > 5) throw httpError(400, "难度必须为1-5");
  const stem = String(input.stem || "").trim();
  if (!stem) throw httpError(400, "题干不能为空");
  const dimensions = input.dimensions && typeof input.dimensions === "object"
    ? input.dimensions
    : {};
  const validDimensions = Object.entries(dimensions).filter(([id, weight]) => DIMENSION_IDS.includes(id) && Number(weight) > 0);
  if (!validDimensions.length) throw httpError(400, "至少标注一个有效能力维度");
  const item = {
    levelId,
    type,
    difficulty,
    stem,
    scenario: input.scenario || undefined,
    options: Array.isArray(input.options) ? input.options : undefined,
    answer: input.answer,
    fillAnswers: input.fillAnswers,
    script: input.script,
    requirements: input.requirements,
    dimensions: Object.fromEntries(validDimensions),
    explanation: String(input.explanation || "").trim(),
    knowledgePoints: Array.isArray(input.knowledgePoints) ? input.knowledgePoints : [String(input.knowledgePoints || "综合能力")],
    estimatedSeconds: Number(input.estimatedSeconds) || 90
  };
  return item;
}

function findClass(store, id) {
  const item = store.data.classes.find((classItem) => classItem.id === id);
  if (!item) throw httpError(404, "班级不存在");
  return item;
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
