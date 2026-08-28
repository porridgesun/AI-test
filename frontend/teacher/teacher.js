(function () {
  "use strict";

  var iconData = window.LucideIcons || {};
  var SVG_ATTRS =
    'width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';

  function icon(name) {
    var inner = iconData[name] || "";
    return '<svg class="lucide" ' + SVG_ATTRS + ">" + inner + "</svg>";
  }

  function injectIcons(root) {
    var holders = root.querySelectorAll("[data-icon]");
    Array.prototype.forEach.call(holders, function (holder) {
      holder.innerHTML = icon(holder.getAttribute("data-icon"));
    });
  }

  injectIcons(document);

  var DIMS = ["AI基础认知", "提示词工程", "AI工具使用", "AI结果评估", "人机协同", "AI伦理合规"];
  var DIM_COLORS = ["#fe5c43", "#fe5c43", "#fe5c43", "#fe5c43", "#fe5c43", "#fe5c43"];
  var DIMENSION_KEYS = ["basics", "prompting", "tools", "evaluation", "collaboration", "ethics"];
  var LEVELS = [
    { id: "academy", name: "智核学院", difficulty: "基础认知" },
    { id: "labyrinth", name: "信息迷城", difficulty: "信息甄别" },
    { id: "workshop", name: "创客工坊", difficulty: "实操创作" },
    { id: "station", name: "协同空间站", difficulty: "压力协同" },
    { id: "court", name: "伦理殿堂", difficulty: "伦理思辨" }
  ];
  var LEVEL_DIMENSIONS = {
    academy: ["basics", "prompting", "tools", "ethics"],
    labyrinth: ["evaluation", "ethics", "basics"],
    workshop: ["prompting", "tools", "evaluation", "ethics"],
    station: ["collaboration", "prompting", "evaluation"],
    court: ["ethics", "evaluation", "basics", "collaboration"]
  };
  var TEACHING_TIPS = {
    "AI基础认知": "回到任务、受众和输出目标，先讲清AI能做什么、不能做什么",
    "提示词工程": "强化角色、目标、约束、格式四要素，并要求保留迭代记录",
    "AI工具使用": "用创客工坊同款任务练习工具选择、输入输出与结果整理",
    "AI结果评估": "训练事实核验、来源比对、质量打分和错误定位",
    "人机协同": "重演星核AI危机对话，强调追问依据与人工决策边界",
    "AI伦理合规": "结合学术诚信、算法偏见与隐私案例做判断说明"
  };
  var compareMode = "classes";

  var COMPARE_DATA = {
    classes: {
      note: "横向对比 6 个班级六维均分，用于识别班级差异。",
      data: [
        { label: "高一1班", value: 84, color: "#fe5c43" },
        { label: "高一2班", value: 78, color: "#fe5c43" },
        { label: "高一3班", value: 80, color: "#fe5c43" },
        { label: "高一4班", value: 82, color: "#fe5c43" },
        { label: "高二1班", value: 86, color: "#fe5c43" },
        { label: "高二2班", value: 76, color: "#fe5c43" }
      ]
    },
    school: {
      note: "各班级均分与全校均值对比，高于均值视为优势班级。",
      data: [
        { label: "高一1班", value: 84, color: "#fe5c43" },
        { label: "高一2班", value: 78, color: "#fe5c43" },
        { label: "高一3班", value: 80, color: "#fe5c43" },
        { label: "高一4班", value: 82, color: "#fe5c43" },
        { label: "全校均值", value: 82, color: "#fe5c43" },
        { label: "高二1班", value: 86, color: "#fe5c43" }
      ]
    },
    history: {
      note: "与历史同期及本学期目标对比，追踪整体水平变化。",
      data: [
        { label: "去年同期", value: 70, color: "#fe5c43" },
        { label: "上学期", value: 76, color: "#fe5c43" },
        { label: "本学期", value: 82, color: "#fe5c43" },
        { label: "学期目标", value: 86, color: "#fe5c43" }
      ]
    }
  };


  var STORE_KEY = "ai-teacher-workspace-v3";
  var API_BASE = "";
  var apiState = { classes: [], assessments: [], questions: [], tasks: [], quizResults: [], roster: [], monitor: [], compare: { classes: [], schoolAverage: 0 }, profiles: {} };

  function authToken() {
    try {
      return localStorage.getItem("ai-auth-token") || "";
    } catch (e) {
      return "";
    }
  }

  function currentRole() {
    try {
      return localStorage.getItem("ai-auth-role") || "student";
    } catch (e) {
      return "student";
    }
  }

  function isAdmin() {
    var role = currentRole();
    return role === "admin" || role === "teacher";
  }

  function queryString(params) {
    var parts = [];
    Object.keys(params || {}).forEach(function (key) {
      var value = params[key];
      if (value !== undefined && value !== null && value !== "") parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    });
    return parts.length ? "?" + parts.join("&") : "";
  }

  async function apiRequest(path, options) {
    var token = authToken();
    var response = await fetch(path, {
      method: (options && options.method) || "GET",
      headers: Object.assign(
        { "Content-Type": "application/json" },
        token ? { Authorization: "Bearer " + token } : {},
        (options && options.headers) || {}
      ),
      body: options && options.body !== undefined ? JSON.stringify(options.body) : undefined
    });
    var data = await response.json().catch(function () { return {}; });
    if (response.status === 401) {
      window.location.href = "index.html";
      throw new Error("登录已过期，请重新登录");
    }
    if (!response.ok) {
      var message = data.error && typeof data.error === "object" ? data.error.message : data.error || data.message;
      throw new Error(message || "接口请求失败");
    }
    return data;
  }

  async function downloadApiCsv(path, fallbackName) {
    var token = authToken();
    var response = await fetch(path, { headers: token ? { Authorization: "Bearer " + token } : {} });
    if (response.status === 401) {
      window.location.href = "index.html";
      throw new Error("登录已过期，请重新登录");
    }
    if (!response.ok) {
      var payload = await response.json().catch(function () { return {}; });
      var message = payload.error && typeof payload.error === "object" ? payload.error.message : payload.error || payload.message;
      throw new Error(message || "导出失败");
    }
    var disposition = response.headers.get("Content-Disposition") || "";
    var match = /filename="?([^";]+)"?/.exec(disposition);
    var filename = decodeURIComponent(match ? match[1] : fallbackName);
    var blob = await response.blob();
    downloadBlob(blob, filename);
  }

  function typeLabel(code) {
    var map = { single: "单选", multi: "多选", judge: "判断", fill: "填空", scene: "情景", sort: "排序", dialogue: "对话", practical: "实操" };
    return map[code] || code || "-";
  }

  function typeCode(label) {
    var map = { "单选": "single", "多选": "multi", "判断": "judge", "填空": "fill", "情景": "scene", "排序": "sort", "对话": "dialogue", "实操": "practical" };
    return map[label] || label || "single";
  }

  function difficultyLabel(value) {
    var map = { 1: "低", 2: "低", 3: "中", 4: "高", 5: "高", low: "低", medium: "中", high: "高" };
    return map[Number(value)] || String(value || "-");
  }

  function difficultyValue(label) {
    var map = { "入门": 1, "基础": 2, "进阶": 3, "熟练": 4, "挑战": 5, "巅峰": 5 };
    return map[label] || Number(label) || 3;
  }

  function assessmentStatus(item) {
    if (item.status === "draft") return "草稿";
    if (item.status === "published") {
      var now = Date.now();
      if (item.closesAt && new Date(item.closesAt).getTime() < now) return "已结束";
      if (item.opensAt && new Date(item.opensAt).getTime() > now) return "未开始";
      return "进行中";
    }
    if (item.status === "closed") return "已结束";
    return item.status || "-";
  }

  function normalizeClass(item) {
    var dash = item.dashboard || {};
    var weak = (dash.weakDimensions || [])[0];
    var weakName = weak ? DIMS[DIMENSION_KEYS.indexOf(weak.dimensionId)] || weak.dimensionId : "-";
    return {
      id: item.id,
      name: item.name,
      grade: item.grade || "-",
      teacher: item.headTeacher || "-",
      joinCode: item.joinCode || "",
      joinCodeExpiresAt: item.joinCodeExpiresAt || null,
      students: Number(item.studentCount) || 0,
      quizAnsweredCount: Number(item.quizAnsweredCount) || 0,
      quizCorrectCount: Number(item.quizCorrectCount) || 0,
      practiceAnsweredCount: Number(item.practiceAnsweredCount) || 0,
      completed: Number(dash.completedCount) || 0,
      participation: (Number(dash.participationRate) || 0) + "%",
      rating: Object.keys(dash.ratingDistribution || {}).sort(function (a, b) {
        return (dash.ratingDistribution[b] || 0) - (dash.ratingDistribution[a] || 0);
      })[0] || "-",
      weak: weakName,
      dashboard: dash
    };
  }

  function formatDateTime(value) {
    var date = new Date(value);
    if (isNaN(date.getTime())) return "-";
    var pad = function (part) { return String(part).padStart(2, "0"); };
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) +
      " " + pad(date.getHours()) + ":" + pad(date.getMinutes());
  }

  function joinCodeCell(item) {
    if (!item.joinCode) return "未生成";
    var valid = item.joinCodeExpiresAt && new Date(item.joinCodeExpiresAt).getTime() > Date.now();
    return valid ? item.joinCode : "已过期";
  }

  function normalizeAssessment(item) {
    var classNames = (item.classIds || []).map(function (id) {
      var found = CLASSES.filter(function (c) { return c.id === id; })[0];
      return found ? found.name : id;
    }).join("、");
    return {
      id: item.id,
      name: item.title || item.name || "未命名测评",
      cls: classNames || "-",
      time: String(item.opensAt || "").replace("T", " ").slice(0, 16),
      limit: item.limitedTime ? (Number(item.durationMinutes) || 30) + " 分钟" : "不限时",
      retest: item.allowRetest ? "是" : "否",
      status: assessmentStatus(item),
      progress: (Number(item.progressRate) || 0) + "%",
      classIds: item.classIds || []
    };
  }

  function normalizeQuestion(item) {
    var dim = Array.isArray(item.dims) && item.dims.length ? item.dims.join("、") : DIMS[0];
    var knowledge = Array.isArray(item.knowledgePoints) ? item.knowledgePoints.join("、") : String(item.knowledgePoints || "-");
    return {
      id: item.id,
      levelId: item.levelId,
      dim: dim,
      type: typeLabel(item.type),
      typeCode: item.type,
      text: item.stem || item.q,
      difficulty: difficultyLabel(item.difficulty),
      difficultyValue: Number(item.difficultyValue) || difficultyValue(item.difficulty),
      time: item.estimatedSeconds ? Math.max(1, Math.round(Number(item.estimatedSeconds) / 60)) : 2,
      knowledge: knowledge,
      status: item.status === "approved" ? "已通过" : item.status === "pending" ? "待审核" : "已拒绝"
    };
  }

  function normalizeTask(item) {
    return {
      id: item.id,
      name: item.title || "未命名训练任务",
      type: item.type || "客观题练习",
      cls: (item.classIds || []).map(classDisplayName).join("、") || "-",
      deadline: item.deadline ? formatDateTime(item.deadline) : "-",
      status: item.status === "disabled" ? "已停用" : "进行中",
      progress: item.progressRate ? item.progressRate + "%" : "0%",
      classIds: item.classIds || []
    };
  }

  function normalizeRoster(rows) {
    return (rows || []).map(function (row) {
      var scores = DIMENSION_KEYS.map(function (key) {
        return Number(row.scores && row.scores[key]) || 0;
      });
      return {
        id: row.studentId,
        name: row.name,
        no: row.studentNo,
        cls: row.className || "",
        status: row.status === "completed" ? "已完成" : "未开始",
        rating: row.rating || "-",
        stars: Number(row.stars) || 0,
        overall: Number(row.overall) || 0,
        scores: scores,
        levels: row.status === "completed" ? LEVELS.map(function () { return "done"; }) : []
      };
    });
  }

  function classForStudent(student) {
    return CLASSES.filter(function (c) {
      return c.id === student.classId || c.name === student.cls;
    })[0];
  }

  async function loadTeacherWorkspace() {
    if (!authToken()) {
      window.location.href = "index.html";
      return;
    }
    try {
      var me = await apiRequest("/api/auth/me");
      var teacher = me.profile || {};
      var name = teacher.name || me.user.name || "管理员";
      document.querySelector("#teacherProfileBtn strong").textContent = name;
      document.querySelector("#teacherProfileBtn .t-user-copy span").textContent =
        "工号 " + (teacher.teacherNo || "-") + " · 管理端";

      var results = await Promise.all([
        apiRequest("/api/classes"),
        apiRequest("/api/teacher/assessments"),
        apiRequest("/api/questions"),
        apiRequest("/api/teacher/analytics/compare"),
        apiRequest("/api/teacher/quiz-results")
      ]);
      var classData = results[0], assessmentData = results[1], questionData = results[2], compareData = results[3], quizResultData = results[4];
      CLASSES = (classData.classes || []).map(normalizeClass);
      ASSESSMENTS = (assessmentData.assessments || []).map(normalizeAssessment);
      apiState.questions = questionData.questions || [];
      QUESTIONS = apiState.questions.map(normalizeQuestion);
      apiState.classes = CLASSES;
      apiState.assessments = ASSESSMENTS;
      apiState.compare = compareData || { classes: [], schoolAverage: 0 };
      apiState.quizResults = quizResultData.rows || [];
      var taskData = await apiRequest("/api/teacher/tasks");
      TASKS = (taskData.tasks || []).map(normalizeTask);
      apiState.tasks = taskData.tasks || [];
      await refreshAssessmentData(ASSESSMENTS[0] ? ASSESSMENTS[0].id : null);
    } catch (error) {
      showToast(error.message || "管理端数据加载失败");
      throw error;
    }
  }

  async function refreshAssessmentData(assessmentId) {
    var active = ASSESSMENTS.filter(function (a) {
      return assessmentId ? a.id === assessmentId : true;
    })[0] || ASSESSMENTS[0];
    selectedMonitorAssessmentId = active ? active.id : null;
    if (!active) {
      STUDENTS = normalizeRoster(apiState.quizResults || []);
      apiState.roster = STUDENTS;
      apiState.monitor = [];
      return;
    }
    var results = await Promise.all([
      apiRequest("/api/teacher/assessments/" + active.id + "/monitor"),
      apiRequest("/api/teacher/assessments/" + active.id + "/results")
    ]);
    apiState.monitor = results[0].rows || [];
    apiState.roster = normalizeRoster(results[1].rows || []);
    var formalRows = normalizeRoster(apiState.quizResults || []);
    var knownStudents = apiState.roster.reduce(function (set, row) {
      set.set(row.id, row);
      return set;
    }, new Map());
    formalRows.forEach(function (row) {
      if (!knownStudents.has(row.id)) {
        apiState.roster.push(row);
        knownStudents.set(row.id, row);
      }
    });
    STUDENTS = apiState.roster;
  }

  async function loadProfileFor(studentId) {
    if (apiState.profiles[studentId]) return apiState.profiles[studentId];
    var data = await apiRequest("/api/teacher/students/" + studentId + "/profile");
    apiState.profiles[studentId] = data;
    return data;
  }

  function scoresFromObject(scores) {
    return DIMENSION_KEYS.map(function (key) { return Number(scores && scores[key]) || 0; });
  }

  function studentScores(student) {
    return Array.isArray(student.scores) && student.scores.length === DIMS.length ? student.scores : scoresFromObject(student.scores);
  }


  var editingClassId = null;
  var editingQuestionId = null;
  var selectedStudentId = null;
  var selectedMonitorAssessmentId = null;

  var CLASSES = [];
  var ASSESSMENTS = [];
  var TASKS = [];

  var MONITOR = [];
  var STUDENTS = [];
  var QUESTIONS = [];

  var toastTimer = null;

  function saveWorkspace() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({
        CLASSES: CLASSES,
        ASSESSMENTS: ASSESSMENTS,
        TASKS: TASKS,
        STUDENTS: STUDENTS,
        QUESTIONS: QUESTIONS
      }));
    } catch (e) {
      showToast("本地存储不可用，本次操作刷新后不保留");
    }
  }

  function loadWorkspace() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return;
      var saved = JSON.parse(raw);
      if (Array.isArray(saved.CLASSES)) CLASSES = saved.CLASSES;
      if (Array.isArray(saved.ASSESSMENTS)) ASSESSMENTS = saved.ASSESSMENTS;
      if (Array.isArray(saved.TASKS)) TASKS = saved.TASKS;
      if (Array.isArray(saved.STUDENTS)) STUDENTS = saved.STUDENTS;
      if (Array.isArray(saved.QUESTIONS)) QUESTIONS = saved.QUESTIONS;
    } catch (e) {
      /* damaged local data falls back to the seed data */
    }
  }

  function showToast(message) {
    var el = document.getElementById("teacherToast");
    el.textContent = message;
    el.classList.add("open");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("open");
    }, 2600);
  }

  function nextId(prefix, list) {
    var max = 0;
    list.forEach(function (item) {
      var value = Number(String(item.id || "").replace(/[^0-9]/g, ""));
      if (value > max) max = value;
    });
    return prefix + (max + 1);
  }

  function csvCell(value) {
    return '"' + String(value === undefined || value === null ? "" : value).replace(/"/g, '""') + '"';
  }

  function csvRows(csvText) {
    var rows = [];
    var row = [];
    var cell = "";
    var quoted = false;
    var text = String(csvText || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (quoted) {
        if (ch === '"' && text[i + 1] === '"') {
          cell += '"';
          i++;
        } else if (ch === '"') {
          quoted = false;
        } else {
          cell += ch;
        }
      } else if (ch === '"') {
        quoted = true;
      } else if (ch === ",") {
        row.push(cell.trim());
        cell = "";
      } else if (ch === "\n") {
        row.push(cell.trim());
        if (row.some(function (v) { return v !== ""; })) rows.push(row);
        row = [];
        cell = "";
      } else {
        cell += ch;
      }
    }
    row.push(cell.trim());
    if (row.some(function (v) { return v !== ""; })) rows.push(row);
    return rows;
  }

  function tableFromRows(rows) {
    if (!rows.length) return [];
    var headers = rows[0].map(function (h) {
      return h.toLowerCase().replace(/\s/g, "");
    });
    return rows.slice(1).map(function (cells) {
      var item = {};
      headers.forEach(function (header, i) {
        item[header] = cells[i] || "";
      });
      return item;
    });
  }

  function downloadCsv(filename, rows) {
    var csv = "\uFEFF" + rows.map(function (row) {
      return row.map(csvCell).join(",");
    }).join("\r\n");
    downloadBlob(new Blob([csv], { type: "text/csv;charset=utf-8" }), filename);
  }

  function localProgressFor() {
    try {
      var raw = localStorage.getItem("ai-student-progress-v2");
      if (!raw) return null;
      var data = JSON.parse(raw);
      var levels = LEVELS.map(function (level) {
        var item = data[level.id] || {};
        return {
          id: level.id,
          status: item.status === "done" || item.status === "active" ? item.status : "todo",
          stars: Math.max(0, Math.min(3, Number(item.stars) || 0)),
          score: Math.max(0, Math.min(100, Number(item.score) || 0)),
          pendingTask: item.pendingTask === "practical" || item.pendingTask === "dialogue" ? item.pendingTask : null
        };
      });
      if (!levels.some(function (item) { return item.status !== "todo"; })) return null;
      var totals = data.dimensionScores || {};
      var weights = data.dimensionWeights || {};
      var scores = DIMENSION_KEYS.map(function (key) {
        var total = Number(totals[key]) || 0;
        var weight = Number(weights[key]) || 0;
        return weight ? Math.max(0, Math.min(100, Math.round(total / weight))) : 0;
      });
      var stars = levels.reduce(function (sum, item) { return sum + item.stars; }, 0);
      var avg = scores.length ? Math.round(scores.reduce(function (a, b) { return a + b; }, 0) / scores.length) : 0;
      return {
        levels: levels,
        scores: scores,
        stars: stars,
        avg: avg,
        rating: avg >= 90 ? "S" : avg >= 80 ? "A" : avg >= 70 ? "B" : avg >= 60 ? "C" : "D"
      };
    } catch (e) {
      return null;
    }
  }

  function syncLocalStudent() {
    var local = localProgressFor();
    if (!local) {
      STUDENTS = STUDENTS.filter(function (s) { return s.id !== "local-student"; });
      return;
    }
    var nickname = "探险者";
    try {
      nickname = localStorage.getItem("ai-student-nickname") || nickname;
    } catch (e) {
      /* keep the default demo nickname */
    }
    var cls = CLASSES.filter(function (c) { return c.id === "c3"; })[0] || CLASSES[0];
    var student = STUDENTS.filter(function (s) { return s.id === "local-student"; })[0];
    if (!student) {
      student = { id: "local-student" };
      STUDENTS.push(student);
    }
    var done = local.levels.filter(function (item) { return item.status === "done"; }).length;
    student.name = nickname;
    student.no = "20260000";
    student.cls = cls ? cls.name : "本机体验";
    student.classId = cls ? cls.id : "";
    student.status = done === 0 ? "未开始" : done === LEVELS.length ? "已完成" : "测评中";
    student.rating = local.rating;
    student.stars = local.stars;
    student.levels = local.levels.map(function (item) { return item.status; });
    student.pendingTask = (local.levels.filter(function (item) {
      return item.status === "active";
    })[0] || {}).pendingTask || null;
    student.scores = local.scores;
  }

  function completedStudents() {
    return STUDENTS.filter(function (s) {
      return Array.isArray(s.scores) && s.scores.length === DIMS.length && s.scores.some(function (v) {
        return Number(v) > 0;
      });
    });
  }

  function dimensionAverages(students) {
    return DIMS.map(function (_, index) {
      var values = students.map(function (s) {
        return Number(s.scores[index]) || 0;
      }).sort(function (a, b) {
        return a - b;
      });
      if (!values.length) return { avg: 0, median: 0 };
      var middle = Math.floor(values.length / 2);
      return {
        avg: Math.round(values.reduce(function (a, b) { return a + b; }, 0) / values.length),
        median: values.length % 2 ? values[middle] : Math.round((values[middle - 1] + values[middle]) / 2)
      };
    });
  }

  function studentAverage(s) {
    var scores = Array.isArray(s.scores) ? s.scores : [];
    if (!scores.length) return 0;
    return Math.round(scores.reduce(function (sum, v) {
      return sum + (Number(v) || 0);
    }, 0) / scores.length);
  }

  function studentLevels(s) {
    var levels = Array.isArray(s.levels) ? s.levels : [];
    return LEVELS.map(function (level, i) {
      var source = levels[i];
      var item = source && typeof source === "object" ? source : {};
      var status = typeof source === "string" ? source : item.status;
      return {
        id: level.id,
        name: level.name,
        status: status === "done" || status === "active" ? status : "todo",
        pendingTask: item.pendingTask === "practical" || item.pendingTask === "dialogue" ? item.pendingTask : (s.pendingTask || null)
      };
    });
  }

  function studentStars(s) {
    var levels = studentLevels(s);
    var stars = levels.reduce(function (sum, item) { return sum + (item.status === "done" ? 3 : 0); }, 0);
    if (s.stars !== undefined && s.stars !== null && s.stars !== "") return Math.max(0, Number(s.stars) || 0);
    return stars;
  }

  function studentProgress(s) {
    var levels = studentLevels(s);
    var count = levels.filter(function (item) {
      return item.status === "done";
    }).length;
    var reached = levels.filter(function (item) {
      return item.status !== "todo";
    }).length;
    var current = levels.filter(function (item) {
      return item.status !== "todo";
    }).pop() || levels[0];
    var station = count >= LEVELS.length ? "已完成" : current.name;
    if (current.status === "active" && current.pendingTask === "practical") station += " · 待实操";
    if (current.status === "active" && current.pendingTask === "dialogue") station += " · 待对话";
    return {
      count: count,
      text: reached + " / 5 关",
      station: station,
      status: count === 0 ? "未开始" : count >= LEVELS.length ? "已完成" : "测评中"
    };
  }

  function assessmentRoster(a) {
    var classStudents = STUDENTS.filter(function (s) {
      return s.cls === a.cls || classForStudent(s) && classForStudent(s).name === a.cls;
    });
    return classStudents.length ? classStudents : STUDENTS;
  }

  function assessmentProgress(a) {
    var roster = assessmentRoster(a);
    if (!roster.length) return a.progress || "0%";
    var done = roster.filter(function (s) {
      return studentProgress(s).count === LEVELS.length;
    }).length;
    return Math.round((done / roster.length) * 100) + "%";
  }

  function switchView(view) {
    var titles = {
      overview: ["智核觉醒 · 教学数据中心", "数据总览"],
      classes: ["班级管理", "班级管理"],
      assessments: ["测评管理", "测评管理"],
      profile: ["学员分析", "学员画像"],
      analysis: ["数据分析", "数据分析"],
      bank: ["资源中心", "题库管理"]
    };
    var info = titles[view] || titles.overview;
    document.getElementById("tKicker").textContent = info[0];
    document.getElementById("tTitle").textContent = info[1];

    Array.prototype.forEach.call(document.querySelectorAll(".t-nav-item"), function (item) {
      item.classList.toggle("active", item.getAttribute("data-view") === view);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".t-view"), function (v) {
      v.classList.toggle("active", v.id === "view-" + view);
    });
    if (view === "overview") renderOverview();
    if (view === "classes") renderClasses();
    if (view === "assessments") renderAssessments();
    if (view === "profile") renderProfile();
    if (view === "analysis") renderAnalysis();
    if (view === "bank") renderQuestions();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function esc(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function normalizeQuestionDim(value) {
    var map = {
      "提示词": "提示词工程",
      "智能检索": "AI结果评估",
      "对话": "人机协同",
      "内容创作": "AI工具使用",
      "数据分析": "AI结果评估",
      "工具工坊": "AI工具使用"
    };
    var text = String(value || "").trim();
    return DIMS.indexOf(text) >= 0 ? text : map[text] || DIMS[0];
  }

  function renderOverview() {
    var totalStudents = CLASSES.reduce(function (sum, c) { return sum + (Number(c.students) || 0); }, 0);
    var totalCompleted = CLASSES.reduce(function (sum, c) { return sum + (Number(c.completed) || 0); }, 0);
    var participation = totalStudents ? Math.round((totalCompleted / totalStudents) * 100) : 0;
    var activeAssessments = ASSESSMENTS.filter(function (a) {
      return a.status === "进行中" || a.status === "测评中";
    }).length;

    var avgTotals = DIMENSION_KEYS.map(function (key) {
      var values = CLASSES.map(function (c) {
        return Number(c.dashboard && c.dashboard.averages && c.dashboard.averages[key]) || 0;
      }).filter(function (v) { return v > 0; });
      if (!values.length) return { avg: 0, median: 0 };
      var sorted = values.slice().sort(function (a, b) { return a - b; });
      var middle = Math.floor(sorted.length / 2);
      return {
        avg: Math.round(values.reduce(function (a, b) { return a + b; }, 0) / values.length),
        median: sorted.length % 2 ? sorted[middle] : Math.round((sorted[middle - 1] + sorted[middle]) / 2)
      };
    });
    var ratingCounts = {};
    CLASSES.forEach(function (c) {
      Object.keys(c.dashboard && c.dashboard.ratingDistribution || {}).forEach(function (r) {
        ratingCounts[r] = (ratingCounts[r] || 0) + (c.dashboard.ratingDistribution[r] || 0);
      });
    });

    var kpis = [
      ["班级总数", String(CLASSES.length), "当前管理范围", "Users", "#fe5c43"],
      ["学员在册", String(CLASSES.reduce(function (sum, c) { return sum + (Number(c.students) || 0); }, 0)), "含待测评学员", "GraduationCap", "#fe5c43"],
      ["进行中测评", String(activeAssessments), "实时监控中", "ClipboardList", "#fe5c43"],
      ["平均参与率", participation + "%", "按班级统计", "TrendingUp", "#fe5c43"]
    ];
    document.getElementById("overviewKpis").innerHTML = kpis.map(function (k) {
      return (
        '<div class="t-kpi">' +
        '<div class="t-kpi-head"><span>' + k[0] + '</span><span class="kpi-icon" style="--kpi:' + k[4] + '">' + icon(k[3]) + "</span></div>" +
        "<b>" + k[1] + "</b><span>" + k[2] + "</span>" +
        "</div>"
      );
    }).join("");

    drawRadar("overviewRadar", [
      { name: "均值", scores: avgTotals.map(function (d) { return d.avg; }), color: "#fe5c43" },
      { name: "中位数", scores: avgTotals.map(function (d) { return d.median; }), color: "#fe5c43" }
    ]);
    drawRing("overviewRing", participation);
    drawBar("overviewRatingBar", ["S", "A", "B", "C", "D"].map(function (rating, i) {
      return { label: rating, value: ratingCounts[rating] || 0, color: DIM_COLORS[i] };
    }));

    var weak = CLASSES.map(function (c) {
      var dash = c.dashboard || {};
      var best = null;
      DIMENSION_KEYS.forEach(function (key, i) {
        var value = Number(dash.averages && dash.averages[key]) || 0;
        if (value > 0 && (!best || value < best.value)) best = { value: value, index: i };
      });
      var score = best ? best.value : 0;
      var dim = best ? DIMS[best.index] : (c.weak && c.weak !== "-" ? c.weak : DIMS[0]);
      return {
        dim: dim,
        cls: c.name,
        score: score,
        tip: score > 0 ? TEACHING_TIPS[dim] || "结合班级薄弱维度安排专项练习" : "该班暂无完整六维数据，先完成一轮智核觉醒测评"
      };
    }).sort(function (a, b) {
      return a.score - b.score;
    }).slice(0, 3);
    document.getElementById("weakList").innerHTML = weak.map(function (w) {
      return (
        '<div class="t-weak-item' + (w.score > 0 && w.score < 60 ? " danger" : "") + '">' +
        "<strong>" + icon("AlertCircle") + w.dim + " · " + w.cls + " · 均值 " + (w.score || "-") + "</strong>" +
        "<p>" + w.tip + "</p>" +
        "</div>"
      );
    }).join("") || '<div class="t-weak-item"><strong>' + '<div class="t-weak-item"><strong>' + icon("CheckCircle2") + "暂无短板</strong><p>所有班级暂未形成低于 60 分的维度，继续保持。</p></div>";
  }

  function badge(status) {
    var map = {
      "已完成": "green",
      "测评中": "blue",
      "进行中": "blue",
      "未开始": "gray",
      "已结束": "gray",
      "已停用": "gray",
      "已通过": "green",
      "待审核": "orange"
    };
    var cls = map[status] || "gray";
    return '<span class="t-badge ' + cls + '">' + status + "</span>";
  }

  function renderClasses() {
    var rows = CLASSES.map(function (c) {
      var completed = Number(c.completed) || 0;
      var status = completed > 0 ? "已完成" : "未开始";
      return (
        "<tr>" +
        "<td>" + esc(c.name) + "</td>" +
        "<td>" + esc(c.grade) + "</td>" +
        "<td>" + esc(c.teacher) + "</td>" +
        "<td><strong>" + esc(joinCodeCell(c)) + "</strong></td>" +
        "<td>" + c.students + "</td>" +
        "<td>" + (Number(c.quizAnsweredCount) || 0) + " / " + (Number(c.quizCorrectCount) || 0) + "</td>" +
        "<td>" + (Number(c.practiceAnsweredCount) || 0) + "</td>" +
        "<td>" + completed + " / " + (Number(c.students) || 0) + "</td>" +
        "<td>" + c.participation + "</td>" +
        "<td>" + badge(status) + "</td>" +
        "<td>" + esc(c.rating) + "</td>" +
        "<td><span class='t-row-actions'>" +
        '<button class="t-mini-btn" type="button" data-class-action="edit" data-id="' + c.id + '">' + icon("PenLine") + "编辑</button>" +
        '<button class="t-mini-btn" type="button" data-class-action="students" data-id="' + c.id + '">' + icon("Gauge") + "数据</button>" +
        '<button class="t-mini-btn" type="button" data-class-action="export" data-id="' + c.id + '">' + icon("Download") + "报告</button>" +
        '<button class="t-mini-btn danger" type="button" data-class-action="delete" data-id="' + c.id + '">' + icon("X") + "删除</button>" +
        "</span></td>" +
        "</tr>"
      );
    }).join("") || '<tr><td colspan="12" class="t-empty">暂无班级，请先新建班级</td></tr>';
    document.getElementById("classTable").innerHTML =
      "<thead><tr><th>班级</th><th>年级</th><th>班主任</th><th>加入口令</th><th>学员数</th><th>闯关题数 / 答对</th><th>练习题数</th><th>完成</th><th>参与率</th><th>状态</th><th>评级</th><th>操作</th></tr></thead><tbody>" + rows + "</tbody>";
  }

  function renderAssessments() {
    var rows = ASSESSMENTS.map(function (a) {
      return (
        "<tr>" +
        "<td>" + esc(a.name) + "</td>" +
        "<td>" + esc(a.cls) + "</td>" +
        "<td>" + a.time + "</td>" +
        "<td>" + a.limit + "</td>" +
        "<td>" + a.retest + "</td>" +
        "<td>" + badge(a.status) + "</td>" +
        "<td>" + a.progress + "</td>" +
        "<td><span class='t-row-actions'>" +
        '<button class="t-mini-btn" type="button" data-assessment-action="monitor" data-id="' + a.id + '">' + icon("Gauge") + "监控</button>" +
        '<button class="t-mini-btn" type="button" data-assessment-action="export" data-id="' + a.id + '">' + icon("Download") + "导出</button>" +
        '<button class="t-mini-btn danger" type="button" data-assessment-action="delete" data-id="' + a.id + '">' + icon("X") + "删除</button>" +
        "</span></td>" +
        "</tr>"
      );
    }).join("") || '<tr><td colspan="8" class="t-empty">暂无闯关测评</td></tr>';
    document.getElementById("assessmentTable").innerHTML =
      "<thead><tr><th>测评</th><th>目标班级</th><th>开放时间</th><th>限时</th><th>重测</th><th>状态</th><th>进度</th><th>操作</th></tr></thead><tbody>" + rows + "</tbody>";

    var activeAssessment = ASSESSMENTS.filter(function (item) {
      return item.id === selectedMonitorAssessmentId;
    })[0] || ASSESSMENTS.filter(function (item) {
      return item.status === "进行中" || item.status === "测评中";
    })[0] || ASSESSMENTS[0];
    selectedMonitorAssessmentId = activeAssessment ? activeAssessment.id : null;
    var monitorChip = document.querySelector("#view-assessments .t-table-card:nth-of-type(3) .t-chip");
    if (monitorChip) monitorChip.textContent = activeAssessment ? activeAssessment.name + " · 实时监控" : "暂无测评";

    var monitorRows = (apiState.monitor || []).map(function (row) {
      var target = Number(row.targetCount) || 15;
      var answered = Number(row.answeredCount) || 0;
      var station = row.currentLevel || "未开始";
      if (row.flags && row.flags.length) station += " · " + row.flags[0];
      var progressText = row.progressRate ? Math.min(5, Math.max(0, Math.round(Number(row.progressRate) * 5 / 100))) + " / 5 关" : answered + " / " + target + " 题";
      var status = row.status === "completed" ? "已完成" : row.status === "not_started" ? "未开始" : "测评中";
      return (
        "<tr>" +
        "<td>" + esc(row.name) + "</td>" +
        "<td>" + esc(row.studentNo) + "</td>" +
        "<td>" + esc(station) + "</td>" +
        "<td>" + progressText + "</td>" +
        "<td>" + badge(status) + "</td>" +
        '<td><button class="t-mini-btn" type="button" data-profile-open="' + row.studentId + '" data-profile-name="' + esc(row.name) + '">' + icon("CircleUserRound") + "画像</button></td>" +
        "</tr>"
      );
    }).join("") || '<tr><td colspan="6" class="t-empty">暂无学员数据</td></tr>';
    document.getElementById("monitorTable").innerHTML =
      "<thead><tr><th>姓名</th><th>学号</th><th>当前关卡</th><th>进度</th><th>状态</th><th>操作</th></tr></thead><tbody>" + monitorRows + "</tbody>";
    renderTasks();
    renderResults();
  }

  function renderTasks() {
    document.getElementById("taskCount").textContent = TASKS.length + " 个任务";
    var rows = TASKS.map(function (t) {
      return (
        "<tr>" +
        "<td>" + esc(t.name) + "</td>" +
        "<td>" + esc(t.type) + "</td>" +
        "<td>" + esc(t.cls) + "</td>" +
        "<td>" + t.deadline + "</td>" +
        "<td>" + badge(t.status) + "</td>" +
        "<td>" + t.progress + "</td>" +
        "<td><span class='t-row-actions'>" +
        '<button class="t-mini-btn" type="button" data-task-action="view" data-id="' + t.id + '">' + icon("Eye") + "查看</button>" +
        '<button class="t-mini-btn" type="button" data-task-action="stop" data-id="' + t.id + '">' + icon("CircleHelp") + "停用</button>" +
        '<button class="t-mini-btn danger" type="button" data-task-action="delete" data-id="' + t.id + '">' + icon("X") + "删除</button>" +
        "</span></td>" +
        "</tr>"
      );
    }).join("") || "<tr><td colspan='7' class='t-empty'>暂无训练任务</td></tr>";
    document.getElementById("taskTable").innerHTML =
        "<thead><tr><th>任务</th><th>类型</th><th>班级</th><th>截止时间</th><th>状态</th><th>完成率</th><th>操作</th></tr></thead><tbody>" + rows + "</tbody>";
  }

  function renderResults() {
    var q = document.getElementById("resultSearch").value.trim().toLowerCase();
    var rating = document.getElementById("resultRatingFilter").value;
    var sortMode = document.getElementById("resultSort").value;
    var rows = (apiState.roster || []).map(function (s) {
      var scores = Array.isArray(s.scores) ? s.scores : [];
      var avg = scores.length ? Math.round(scores.reduce(function (sum, v) {
        return sum + (Number(v) || 0);
      }, 0) / scores.length) : 0;
      return {
        s: s,
        avg: avg,
        stars: Number(s.stars) || 0,
        noNum: Number(String(s.no).slice(-4))
      };
    }).filter(function (r) {
      if (q && r.s.name.toLowerCase().indexOf(q) < 0 && String(r.s.no).indexOf(q) < 0) return false;
      if (rating && r.s.rating !== rating) return false;
      return true;
    }).sort(function (a, b) {
      if (sortMode === "stars") return b.stars - a.stars;
      if (sortMode === "no") return a.noNum - b.noNum;
      return b.avg - a.avg;
    });
    var html = rows.map(function (r) {
      var scoreBars = (r.s.scores || []).map(function (v, di) {
        return '<span class="t-mini-score" style="--dim:' + DIM_COLORS[di] + ";width:" + v + '%"></span>';
      }).join("");
      return (
        "<tr>" +
        "<td>" + esc(r.s.name) + "</td>" +
        "<td>" + r.s.no + "</td>" +
        "<td>" + esc(r.s.cls || "未分班") + "</td>" +
        "<td>" + badge(r.s.status || "未开始") + "</td>" +
        "<td>" + esc(r.s.rating) + "</td>" +
        "<td>" + r.stars + " / 15 星</td>" +
        '<td class="t-score-cell"><div class="t-mini-score-row">' + scoreBars + "</div></td>" +
        '<td><button class="t-mini-btn" type="button" data-profile-open="' + r.s.id + '" data-profile-name="' + esc(r.s.name) + '">' + icon("CircleUserRound") + "画像</button></td>" +
        "</tr>"
      );
    }).join("");
    document.getElementById("resultTable").innerHTML =
      "<thead><tr><th>姓名</th><th>学号</th><th>班级</th><th>状态</th><th>评级</th><th>星数</th><th>六维得分</th><th>操作</th></tr></thead><tbody>" +
      (rows.length ? html : "<tr><td colspan='8' class='t-empty'>暂无匹配结果</td></tr>") +
      "</tbody>";
  }

  async function exportClassReport(classId) {
    var cls = CLASSES.filter(function (c) {
      return c.id === classId;
    })[0] || CLASSES[0];
    if (!cls) {
      showToast("暂无班级可导出");
      return;
    }
    try {
      await downloadApiCsv("/api/teacher/export/class/" + classId, "班级报告-" + cls.name + ".csv");
      showToast("班级报告已导出：" + cls.name);
    } catch (e) {
      showToast(e.message || "导出失败");
    }
  }

  async function renderProfile() {
    var select = document.getElementById("studentSelect");
    if (!STUDENTS.length) {
      select.innerHTML = '<option value="">暂无学员</option>';
      return;
    }
    if (!selectedStudentId || !STUDENTS.some(function (s) { return s.id === selectedStudentId; })) {
      selectedStudentId = STUDENTS[0].id;
    }
    select.innerHTML = STUDENTS.map(function (s) {
      return '<option value="' + s.id + '">' + esc(s.name) + " · " + s.no + "</option>";
    }).join("");
    select.value = selectedStudentId;
    select.onchange = function () {
      selectedStudentId = select.value;
      renderProfileDetail();
    };
    await renderProfileDetail();
  }

  function currentStudent() {
    var id = document.getElementById("studentSelect").value || selectedStudentId;
    return STUDENTS.filter(function (s) {
      return s.id === id;
    })[0] || STUDENTS[0];
  }

  function shortText(value, length) {
    var text = String(value || "").replace(/\s+/g, " ").trim();
    return text.length > length ? text.slice(0, length - 1) + "…" : text;
  }

  function levelName(levelId) {
    var found = LEVELS.filter(function (item) { return item.id === levelId; })[0];
    return found ? found.name : levelId || "-";
  }

  function resultLabel(result) {
    if (result === "correct") return "正确";
    if (result === "partial") return "部分正确";
    if (result === "wrong") return "错误";
    return result || "-";
  }

  function profileDetails(s) {
    var profile = s && s.id ? apiState.profiles[s.id] : null;
    var answers = [];
    var dialogue = [];
    var practical = [];
    var prompts = [];

    if (profile && Array.isArray(profile.answerDetails)) {
      answers = profile.answerDetails.map(function (record) {
        return [
          levelName(record.levelId),
          typeLabel(record.type),
          resultLabel(record.result),
          (record.score === undefined ? 0 : record.score) + " 分",
          record.explanation || "无解析"
        ];
      });
    }

    if (profile && profile.dialogueTranscripts) {
      Object.keys(profile.dialogueTranscripts).forEach(function (qid) {
        var msgs = profile.dialogueTranscripts[qid] || [];
        for (var i = 0; i + 1 < msgs.length; i += 2) {
          dialogue.push([shortText(qid, 14), msgs[i], "回复", msgs[i + 1]]);
        }
      });
    }

    var practicalSource = profile && profile.practical ? profile.practical : null;
    if (practicalSource) {
      var versions = Array.isArray(practicalSource.versions) && practicalSource.versions.length
        ? practicalSource.versions
        : (practicalSource.prompts || []).map(function (prompt, i) {
            return { version: i + 1, prompt: prompt, output: (practicalSource.outputs || [])[i] || practicalSource.lastOutput || "" };
          });
      practical = versions.map(function (item) {
        return ["第 " + item.version + " 版", shortText(item.prompt, 28), "生成", shortText(item.output, 42)];
      });
      prompts = versions.map(function (item) {
        return ["第 " + item.version + " 版", shortText(item.prompt, 46), "运行", "第 " + item.version + " 次产物已记录"];
      });
    }

    return { answers: answers, dialogue: dialogue, practical: practical, prompts: prompts };
  }

  async function renderProfileDetail() {
    var s = currentStudent();
    if (!s) return;
    var profile = null;
    try {
      profile = await loadProfileFor(s.id);
    } catch (e) {
      showToast("学员画像加载失败：" + (e.message || ""));
    }
    var scores = profile && profile.latestReport && profile.latestReport.scores
      ? scoresFromObject(profile.latestReport.scores)
      : studentScores(s);
    var rating = profile && profile.latestReport ? profile.latestReport.rating : (s.rating || "-");
    var stars = profile && profile.latestReport ? Number(profile.latestReport.stars) || 0 : Number(s.stars) || 0;
    var cls = CLASSES.filter(function (c) { return c.name === s.cls || c.id === s.classId; })[0];
    var dash = cls && cls.dashboard ? cls.dashboard : null;
    var classAvg = DIMENSION_KEYS.map(function (key) { return Number(dash && dash.averages && dash.averages[key]) || 0; });
    drawRadar("profileRadar", [
      { name: s.name, scores: scores, color: "#fe5c43" },
      { name: "班级均值", scores: classAvg, color: "rgba(254,92,67,.38)" }
    ]);
    var profileChip = document.getElementById("profileMetaChip");
    if (profileChip) profileChip.textContent = "评级 " + (rating || "-") + " · " + stars + " / 15 星";
    document.getElementById("profileScores").innerHTML = '<div class="t-score-row">' + DIMS.map(function (d, i) {
      return (
        '<div class="t-score-item">' +
        "<span>" + d + "</span>" +
        '<div class="t-score-bar"><span style="width:' + scores[i] + "%;--score:" + DIM_COLORS[i] + '"></span></div>' +
        "<b>" + scores[i] + "</b>" +
        "</div>"
      );
    }).join("") + "</div>";
    renderProfileTab("answers");
  }

  function renderProfileTab(tab) {
    Array.prototype.forEach.call(document.querySelectorAll(".t-tab"), function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-profile-tab") === tab);
    });
    var current = currentStudent();
    var details = current ? profileDetails(current) : { answers: [], dialogue: [], practical: [], prompts: [] };
    var data = details[tab] || [];
    var head = tab === "answers"
      ? "<th>关卡</th><th>题型</th><th>结果</th><th>得分</th><th>解析</th>"
      : tab === "dialogue"
        ? "<th>角色</th><th>内容</th><th>角色</th><th>内容</th>"
        : tab === "practical"
          ? "<th>项目</th><th>内容</th><th>项目</th><th>内容</th>"
          : "<th>版本</th><th>提示词</th><th>结果</th><th>说明</th>";
    var rows = data.map(function (r) {
      return "<tr>" + r.map(function (c) {
        return "<td>" + esc(c) + "</td>";
      }).join("") + "</tr>";
    }).join("");
    if (!rows) {
      var colspan = tab === "answers" ? 5 : 4;
      rows = '<tr><td colspan="' + colspan + '" class="t-empty">暂无记录</td></tr>';
    }
    document.getElementById("profileDetail").innerHTML = "<table class='t-table'><thead><tr>" + head + "</tr></thead><tbody>" + rows + "</tbody></table>";
  }

  function renderAnalysis() {
    var overall = Number(apiState.compare && apiState.compare.schoolAverage) || 0;
    if (!overall && apiState.roster.length) {
      var total = 0;
      apiState.roster.forEach(function (s) {
        total += studentAverage(s);
      });
      overall = Math.round(total / apiState.roster.length);
    }
    drawLine("growthLine", [
      { label: "当前均值", value: overall },
      { label: "学期目标", value: Math.max(overall, 85) }
    ]);
    renderCompare();
    var stats = DIMENSION_KEYS.map(function (key, i) {
      var values = CLASSES.map(function (c) {
        return Number(c.dashboard && c.dashboard.averages && c.dashboard.averages[key]) || 0;
      }).filter(function (v) { return v > 0; });
      return {
        dim: DIMS[i],
        avg: values.length ? Math.round(values.reduce(function (a, b) { return a + b; }, 0) / values.length) : 0
      };
    });
    var weakest = stats.filter(function (item) { return item.avg > 0; }).sort(function (a, b) { return a.avg - b.avg; }).slice(0, 3);
    if (!weakest.length) {
      document.getElementById("analysisAdvice").innerHTML = '<div class="t-advice"><strong>' + icon("Lightbulb") + "暂无可分析数据</strong><p>先完成一轮智核觉醒测评，再生成教学建议。</p></div>";
      return;
    }
    document.getElementById("analysisAdvice").innerHTML = [
      [weakest[0].dim, TEACHING_TIPS[weakest[0].dim] || "结合班级薄弱维度安排专项练习", "Lightbulb"],
      [weakest[1].dim, TEACHING_TIPS[weakest[1].dim] || "结合班级薄弱维度安排专项练习", "Wrench"],
      [weakest[2].dim, TEACHING_TIPS[weakest[2].dim] || "结合班级薄弱维度安排专项练习", "Search"]
    ].map(function (a) {
      return (
        '<div class="t-advice"><strong>' + icon(a[2]) + a[0] + "</strong><p>" + a[1] + "</p></div>"
      );
    }).join("");
  }

  function renderCompare() {
    var compare = apiState.compare || { classes: [], schoolAverage: 0 };
    var classBars = (compare.classes || []).map(function (item, i) {
      return { label: String(item.className || "").replace(/\s*/g, ""), value: Number(item.overall) || 0, color: DIM_COLORS[i % DIM_COLORS.length] };
    });
    var schoolAvg = Number(compare.schoolAverage) || 0;
    if (!classBars.length) {
      classBars = CLASSES.map(function (c, i) {
        return { label: c.name.replace(/\s*/g, ""), value: 0, color: DIM_COLORS[i % DIM_COLORS.length] };
      });
    }
    var info;
    if (compareMode === "school") {
      info = {
        note: "各班级均分与全校均值对比，高于均值视为优势班级。",
        data: classBars.concat([{ label: "全校均值", value: schoolAvg, color: "#fe5c43" }])
      };
    } else if (compareMode === "history") {
      info = {
        note: "当前完整测评均分与学期目标对比，用于确认下一阶段训练重点。",
        data: [
          { label: "当前均值", value: schoolAvg, color: "#fe5c43" },
          { label: "学期目标", value: Math.max(schoolAvg, 85), color: "#fe5c43" }
        ]
      };
    } else {
      info = {
        note: "横向对比当前班级六维综合均分，用于识别班级差异。",
        data: classBars
      };
    }
    drawBar("compareBar", info.data);
    document.getElementById("compareNote").textContent = info.note;
    Array.prototype.forEach.call(document.querySelectorAll("#compareSeg .t-seg-btn"), function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-compare") === compareMode);
    });
  }

  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 150);
  }

  function maskName(name) {
    return name.length > 1 ? name.charAt(0) + "**" : name;
  }

  function maskNo(no) {
    return String(no).slice(0, 4) + "***" + String(no).slice(-1);
  }

  async function exportRawCsv() {
    try {
      await downloadApiCsv("/api/teacher/export/raw", "原始测评数据-脱敏.csv");
      showToast("已按脱敏规则导出原始数据 CSV");
    } catch (e) {
      showToast(e.message || "导出失败");
    }
  }

  function teacherRadarMarkup(cx, cy, R, scores) {
    function pt(r, i) {
      var angle = -Math.PI / 2 + (i * Math.PI) / 3;
      return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
    }
    function ring(f) {
      return Array.from({ length: 6 }, function (_, i) {
        return pt(R * f, i).map(function (n) {
          return n.toFixed(1);
        }).join(",");
      }).join(" ");
    }
    var data = scores.map(function (v, i) {
      return pt((R * v) / 100, i).map(function (n) {
        return n.toFixed(1);
      }).join(",");
    }).join(" ");
    return (
      '<polygon points="' + ring(0.33) + '" fill="#fff7f4" stroke="rgb(254 92 67 / 22%)"/>' +
      '<polygon points="' + ring(0.66) + '" fill="#ffffff" stroke="rgb(254 92 67 / 22%)"/>' +
      '<polygon points="' + ring(1) + '" fill="none" stroke="rgb(254 92 67 / 24%)"/>' +
      Array.from({ length: 6 }, function (_, i) {
        var p = pt(R, i);
        return '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '" stroke="rgb(254 92 67 / 18%)"/>';
      }).join("") +
      '<polygon points="' + data + '" fill="rgba(254,92,67,.14)" stroke="#fe5c43" stroke-width="2.5" stroke-linejoin="round"/>' +
      scores.map(function (v, i) {
        var p = pt((R * v) / 100, i);
        return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4" fill="#ffffff" stroke="#fe5c43" stroke-width="2"/>';
      }).join("") +
      DIMS.map(function (label, i) {
        var p = pt(R + 26, i);
        return '<text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 4).toFixed(1) + '" text-anchor="middle" class="lbl">' + label + "</text>";
      }).join("") +
      ""
    );
  }

  function studentReportSvg(s) {
    var W = 1000;
    var H = 1400;
    var font = '"PingFang SC","Microsoft YaHei","Source Han Sans SC",sans-serif';
    var now = new Date();
    var pad = function (n) {
      return String(n).padStart(2, "0");
    };
    var dateStr = now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate());
    var details = profileDetails(s);
    var html = '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + " " + H + '">';
    html += '<defs><linearGradient id="tHdr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fe5c43"/><stop offset="1" stop-color="#fe5c43"/></linearGradient></defs>';
    html += '<style>text{font-family:' + font + ";} .t1{fill:#ffffff;font-size:30px;font-weight:800;} .t2{fill:rgb(247 243 234);font-size:14px;} .lbl{fill:rgb(33 17 8 / 58%);font-size:14px;} .val{fill:rgb(33 17 8);font-size:16px;font-weight:700;} .mut{fill:rgb(33 17 8 / 44%);font-size:12px;}</style>";
    html += '<rect width="' + W + '" height="' + H + '" fill="#ffffff"/>';
    html += '<rect width="' + W + '" height="240" fill="url(#tHdr)"/>';
    html += '<text x="56" y="90" class="t1">智核觉醒 · 学员画像报告</text>';
    html += '<text x="56" y="122" class="t2">五关闯关记录 · 六维能力测评</text>';
    html += '<text x="944" y="82" text-anchor="end" class="t2">生成日期：' + dateStr + "</text>";
    html += '<text x="944" y="106" text-anchor="end" class="t2">' + esc(s.name) + " · " + esc(s.no) + "</text>";
    html += '<circle cx="844" cy="180" r="44" fill="rgba(255,255,255,.18)"/>';
    html += '<text x="844" y="196" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">' + esc(s.rating) + "</text>";
    html += '<text x="844" y="214" text-anchor="middle" font-size="12" fill="rgb(247 243 234)">综合评级</text>';
    html += '<text x="844" y="238" text-anchor="middle" font-size="12" fill="rgb(247 243 234)">' + studentStars(s) + ' / 15 星</text>';

    html += '<g transform="translate(20,270)">' + teacherRadarMarkup(190, 190, 130, s.scores) + "</g>";

    html += '<text x="470" y="300" class="val">六维得分</text>';
    s.scores.forEach(function (score, i) {
      var y = 332 + i * 44;
      html += '<text x="470" y="' + y + '" class="lbl">' + DIMS[i] + "</text>";
      html += '<rect x="560" y="' + (y - 11) + '" width="310" height="12" rx="6" fill="rgb(254 92 67 / 18%)"/>';
      html += '<rect x="560" y="' + (y - 11) + '" width="' + Math.round(3.1 * score) + '" height="12" rx="6" fill="' + DIM_COLORS[i] + '"/>';
      html += '<text x="892" y="' + y + '" text-anchor="end" class="val">' + score + "</text>";
    });

    html += '<line x1="56" y1="620" x2="944" y2="620" stroke="rgb(254 92 67 / 18%)"/>';
    html += '<text x="56" y="668" class="val">测评明细</text>';
    var blocks = [
      ["答题明细", details.answers.map(function (r) { return r[0] + " · " + r[2] + " · " + r[3]; }).join("  |  ")],
      ["对话记录", details.dialogue.map(function (r) { return r[1] + " → " + r[3]; }).join("  |  ")],
      ["实操产物", details.practical.map(function (r) { return r[1] + "：" + r[3]; }).join("  |  ")],
      ["提示词迭代", details.prompts.map(function (r) { return r[0] + "：" + r[1]; }).join("  |  ")]
    ];
    blocks.forEach(function (block, i) {
      var y = 716 + i * 70;
      html += '<rect x="56" y="' + y + '" width="888" height="56" rx="8" fill="#ffffff" stroke="rgb(254 92 67 / 18%)"/>';
      html += '<text x="82" y="' + (y + 24) + '" class="val">' + block[0] + "</text>";
      html += '<text x="82" y="' + (y + 44) + '" class="lbl">' + esc(block[1]) + "</text>";
    });

    html += '<line x1="56" y1="1020" x2="944" y2="1020" stroke="rgb(254 92 67 / 18%)"/>';
    html += '<text x="56" y="1070" class="val">班级建议</text>';
    html += '<rect x="56" y="1094" width="888" height="120" rx="8" fill="rgb(247 243 234)" stroke="rgb(254 92 67 / 24%)"/>';
    var weak = DIMS[s.scores.indexOf(Math.min.apply(null, s.scores))];
    var strong = DIMS[s.scores.indexOf(Math.max.apply(null, s.scores))];
    html += '<text x="84" y="1132" class="val">' + esc(s.name) + "（" + esc(s.rating) + "）" + "</text>";
    html += '<text x="84" y="1164" class="lbl">建议：强化' + esc(weak) + "训练，保持" + esc(strong) + "优势。</text>";

    html += '<text x="56" y="1280" class="mut">数据说明：本报告由智核觉醒管理端生成，敏感字段已脱敏，仅用于教学分析。</text>';
    html += '<text x="56" y="1304" class="mut">加密传输：HTTPS / TLS 1.3 · 存储加密：AES-256</text>';
    html += "</svg>";
    return html;
  }

  function svgToPngBlob(svgString, w, h) {
    var blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var img = new Image();
    return new Promise(function (resolve, reject) {
      img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = w * 2;
        canvas.height = h * 2;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        canvas.toBlob(function (out) {
          if (out) resolve(out);
          else reject(new Error("canvas export failed"));
        }, "image/png");
      };
      img.onerror = reject;
      img.src = url;
    });
  }

  async function exportStudentReportPdf() {
    if (!window.PDFLib) {
      showToast("PDF 组件未加载，请刷新后重试");
      return;
    }
    var s = currentStudent();
    showToast("正在生成学员画像 PDF...");
    try {
      await document.fonts.ready;
      var png = await svgToPngBlob(studentReportSvg(s), 1000, 1400);
      var bytes = await png.arrayBuffer();
      var pdfDoc = await window.PDFLib.PDFDocument.create();
      var image = await pdfDoc.embedPng(bytes);
      var page = pdfDoc.addPage([595.28, 841.89]);
      var scale = Math.min((page.getWidth() - 56) / image.width, (page.getHeight() - 56) / image.height);
      var w = image.width * scale;
      var h = image.height * scale;
      page.drawImage(image, {
        x: (page.getWidth() - w) / 2,
        y: (page.getHeight() - h) / 2,
        width: w,
        height: h
      });
      var out = await pdfDoc.save();
      downloadBlob(new Blob([out], { type: "application/pdf" }), "学员画像-" + s.name + ".pdf");
      showToast("学员画像 PDF 已导出");
    } catch (e) {
      console.error("student pdf export error", e);
      showToast("导出失败，请重新尝试");
    }
  }

  function renderQuestions() {
    var search = document.getElementById("questionSearch").value.trim().toLowerCase();
    var type = document.getElementById("questionTypeFilter").value;
    var status = document.getElementById("questionStatusFilter").value;
    var rows = QUESTIONS.filter(function (q) {
      var ok = true;
      if (search && (
        q.dim.toLowerCase().indexOf(search) < 0 &&
        q.knowledge.toLowerCase().indexOf(search) < 0 &&
        q.text.toLowerCase().indexOf(search) < 0
      )) ok = false;
      if (type && q.type !== type) ok = false;
      if (status && q.status !== status) ok = false;
      return ok;
    }).map(function (q) {
      return (
        "<tr>" +
        "<td>" + esc(q.dim) + "</td>" +
        "<td>" + esc(q.type) + "</td>" +
        '<td class="t-question-text">' + esc(q.text) + "</td>" +
        "<td>" + esc(q.difficulty) + "</td>" +
        "<td>" + esc(q.knowledge) + "</td>" +
        "<td>" + q.time + " 分钟</td>" +
        "<td>" + badge(q.status) + "</td>" +
        "<td><span class='t-row-actions'>" +
            '<button class="t-mini-btn" type="button" data-question-action="edit" data-id="' + q.id + '">' + icon("PenLine") + "编辑</button>" +
            '<button class="t-mini-btn danger" type="button" data-question-action="delete" data-id="' + q.id + '">' + icon("X") + "删除</button>" +
            "</span></td>" +
        "</tr>"
      );
    }).join("");
    document.getElementById("questionTable").innerHTML =
      "<thead><tr><th>维度</th><th>题型</th><th>题干</th><th>难度</th><th>知识点</th><th>用时</th><th>状态</th><th>操作</th></tr></thead><tbody>" +
      (rows ? rows : "<tr><td colspan='8' class='t-empty'>暂无匹配题目</td></tr>") +
      "</tbody>";
  }

  function drawRadar(id, series) {
    var el = document.getElementById(id);
    var cx = 170;
    var cy = 160;
    var R = 105;
    function pt(r, i) {
      var angle = -Math.PI / 2 + (i * Math.PI) / 3;
      return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
    }
    function ring(f) {
      return Array.from({ length: 6 }, function (_, i) {
        return pt(R * f, i).map(function (n) {
          return n.toFixed(1);
        }).join(",");
      }).join(" ");
    }
    var html =
      '<svg viewBox="0 0 340 320" role="img" aria-label="六维能力雷达图">' +
      '<polygon points="' + ring(0.33) + '" fill="#ffffff" stroke="rgb(254 92 67 / 18%)"/>' +
      '<polygon points="' + ring(0.66) + '" fill="#fff7f4" stroke="rgb(254 92 67 / 18%)"/>' +
      '<polygon points="' + ring(1) + '" fill="none" stroke="rgb(254 92 67 / 24%)"/>' +
      Array.from({ length: 6 }, function (_, i) {
        var p = pt(R, i);
        return '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '" stroke="rgb(254 92 67 / 18%)"/>';
      }).join("") +
      series.map(function (s) {
        var pts = s.scores.map(function (v, i) {
          return pt((R * v) / 100, i).map(function (n) {
            return n.toFixed(1);
          }).join(",");
        }).join(" ");
        return (
          '<polygon points="' + pts + '" fill="' + s.color + '" fill-opacity="0.16" stroke="' + s.color + '" stroke-width="2" stroke-linejoin="round"/>' +
          s.scores.map(function (v, i) {
            var p = pt((R * v) / 100, i);
            return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.5" fill="' + s.color + '"/>';
          }).join("")
        );
      }).join("") +
      DIMS.map(function (d, i) {
        var p = pt(R + 24, i);
        return '<text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 4).toFixed(1) + '" text-anchor="middle" class="chart-label">' + d + "</text>";
      }).join("") +
      "</svg>";
    el.innerHTML = html;
  }

  function drawRing(id, pct) {
    var el = document.getElementById(id);
    var r = 78;
    var c = 2 * Math.PI * r;
    var filled = (pct / 100) * c;
    el.innerHTML =
      '<svg viewBox="0 0 200 200" role="img" aria-label="参与率">' +
      '<circle cx="100" cy="100" r="' + r + '" fill="none" stroke="rgb(247 243 234)" stroke-width="16"/>' +
      '<circle cx="100" cy="100" r="' + r + '" fill="none" stroke="#fe5c43" stroke-width="16" stroke-linecap="round" ' +
      'stroke-dasharray="' + filled.toFixed(1) + " " + c.toFixed(1) + '" transform="rotate(-90 100 100)"/>' +
      "</svg>";
  }

  function drawBar(id, data) {
    var el = document.getElementById(id);
    var w = 420;
    var h = 240;
    var pad = 34;
    var max = Math.max.apply(null, data.map(function (d) {
      return d.value;
    })) * 1.15;
    var bw = (w - pad * 2) / data.length * 0.5;
    var html = '<svg viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="柱状图">';
    html += '<line x1="' + pad + '" y1="' + (h - 36) + '" x2="' + (w - pad) + '" y2="' + (h - 36) + '" stroke="rgb(254 92 67 / 18%)"/>';
    data.forEach(function (d, i) {
      var bh = (d.value / max) * (h - 70);
      var x = pad + i * ((w - pad * 2) / data.length) + ((w - pad * 2) / data.length - bw) / 2;
      var y = h - 36 - bh;
      html += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="4" fill="' + d.color + '"/>';
      html += '<text x="' + (x + bw / 2).toFixed(1) + '" y="' + (y - 8).toFixed(1) + '" text-anchor="middle" class="chart-label" font-weight="700">' + d.value + "</text>";
      html += '<text x="' + (x + bw / 2).toFixed(1) + '" y="' + (h - 18) + '" text-anchor="middle" class="chart-label">' + d.label + "</text>";
    });
    html += "</svg>";
    el.innerHTML = html;
  }

  function drawLine(id, series) {
    var el = document.getElementById(id);
    var w = 420;
    var h = 240;
    var pad = 36;
    var min = Math.min.apply(null, series.map(function (d) {
      return d.value;
    })) - 8;
    var max = Math.max.apply(null, series.map(function (d) {
      return d.value;
    })) + 8;
    function px(i) {
      return pad + (i * (w - pad * 2)) / (series.length - 1);
    }
    function py(v) {
      return h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    }
    var points = series.map(function (s, i) {
      return px(i) + "," + py(s.value);
    });
    var html =
      '<svg viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="折线图">' +
      '<line x1="' + pad + '" y1="' + (h - pad) + '" x2="' + (w - pad) + '" y2="' + (h - pad) + '" stroke="rgb(254 92 67 / 18%)"/>' +
      '<polyline points="' + points.join(" ") + '" fill="none" stroke="#fe5c43" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
      series.map(function (s, i) {
        return (
          '<circle cx="' + px(i) + '" cy="' + py(s.value) + '" r="4.5" fill="#fe5c43" stroke="#ffffff" stroke-width="2"/>' +
          '<text x="' + px(i) + '" y="' + (py(s.value) - 12) + '" text-anchor="middle" class="chart-label" font-weight="700">' + s.value + "</text>" +
          '<text x="' + px(i) + '" y="' + (h - 14) + '" text-anchor="middle" class="chart-label">' + s.label + "</text>"
        );
      }).join("") +
      "</svg>";
    el.innerHTML = html;
  }

  function openModal(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.hidden = false;
    setTimeout(function () {
      el.classList.add("open");
    }, 30);
  }

  function closeModal(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.remove("open");
    setTimeout(function () {
      el.hidden = true;
    }, 350);
  }

  function renderImportTargets() {
    var select = document.getElementById("importClassSelect");
    select.innerHTML = CLASSES.map(function (c) {
      return '<option value="' + c.id + '">' + esc(c.name) + "</option>";
    }).join("");
  }

  function fillClassSelect(input) {
    input.innerHTML = CLASSES.map(function (c) {
      return '<option value="' + c.id + '">' + esc(c.name) + "</option>";
    }).join("");
  }

  function classDisplayName(id) {
    var found = CLASSES.filter(function (c) { return c.id === id; })[0];
    return found ? found.name : id;
  }

  function openClassModal(classId) {
    editingClassId = classId || null;
    var cls = CLASSES.filter(function (c) {
      return c.id === classId;
    })[0];
    document.getElementById("classModalTitle").textContent = cls ? "编辑班级" : "新建班级";
    document.getElementById("classNameInput").value = cls ? cls.name : "";
    document.getElementById("classGradeInput").value = cls ? cls.grade : "高一";
    document.getElementById("classTeacherInput").value = cls ? cls.teacher : "";
    openModal("classModal");
  }

  async function saveClass() {
    var name = document.getElementById("classNameInput").value.trim();
    var grade = document.getElementById("classGradeInput").value;
    var teacher = document.getElementById("classTeacherInput").value.trim() || "待分配";
    if (!name) {
      showToast("请先填写班级名称");
      return;
    }
    try {
      var savedClass;
      if (editingClassId) {
        savedClass = await apiRequest("/api/classes/" + editingClassId, {
          method: "PUT",
          body: { name: name, grade: grade, headTeacher: teacher }
        });
      } else {
        savedClass = await apiRequest("/api/classes", {
          method: "POST",
          body: { name: name, grade: grade, headTeacher: teacher }
        });
      }
      closeModal("classModal");
      await loadTeacherWorkspace();
      renderClasses();
      renderImportTargets();
      if (editingClassId) {
        showToast("班级信息已更新");
      } else {
        openClassCodeModal(savedClass);
        showToast("班级已创建，请把加入口令发给学员");
      }
    } catch (e) {
      showToast(e.message || "班级保存失败");
    }
  }

  function openClassCodeModal(item) {
    if (!item || !item.joinCode) return;
    var expired = !item.joinCodeExpiresAt || new Date(item.joinCodeExpiresAt).getTime() <= Date.now();
    document.getElementById("classCodeName").textContent = item.name || "新班级";
    document.getElementById("classCodeValue").textContent = item.joinCode;
    document.getElementById("classCodeExpiry").textContent =
      "有效期至 " + formatDateTime(item.joinCodeExpiresAt) + (expired ? " · 已过期" : "");
    openModal("classCodeModal");
  }

  async function deleteClass(classId) {
    var cls = CLASSES.filter(function (c) {
      return c.id === classId;
    })[0];
    if (!cls) return;
    if (!window.confirm("确定删除“" + cls.name + "”？该班级导入的学员记录会一并删除。")) return;
    try {
      await apiRequest("/api/classes/" + classId, { method: "DELETE" });
      await loadTeacherWorkspace();
      renderClasses();
      renderImportTargets();
      showToast("班级已删除");
    } catch (e) {
      showToast(e.message || "班级删除失败");
    }
  }

  async function deleteAssessment(assessmentId) {
    var assessment = ASSESSMENTS.filter(function (item) { return item.id === assessmentId; })[0];
    if (!assessment) return;
    if (!window.confirm("确定删除“" + assessment.name + "”？相关测评进度和报告会一并删除。")) return;
    try {
      await apiRequest("/api/teacher/assessments/" + assessmentId, { method: "DELETE" });
      await loadTeacherWorkspace();
      renderAssessments();
      showToast("闯关测评已删除");
    } catch (e) {
      showToast(e.message || "闯关测评删除失败");
    }
  }

  function switchAssessmentTab(mode) {
    var view = document.getElementById("view-assessments");
    view.setAttribute("data-assessment-tab", mode);
    Array.prototype.forEach.call(document.querySelectorAll("[data-assessment-tab-btn]"), function (button) {
      button.classList.toggle("active", button.getAttribute("data-assessment-tab-btn") === mode);
    });
  }

  async function deleteStudent(studentId) {
    var student = apiState.monitor.filter(function (item) { return item.studentId === studentId; })[0] ||
      apiState.roster.filter(function (item) { return item.id === studentId; })[0];
    if (!student) return;
    var name = student.name || "该学员";
    if (!window.confirm("确定移除“" + name + "”？学员账号、答题数据和报告会一并删除。")) return;
    try {
      await apiRequest("/api/teacher/students/" + studentId, { method: "DELETE" });
      await loadTeacherWorkspace();
      renderAssessments();
      showToast("学员已移除");
    } catch (e) {
      showToast(e.message || "学员移除失败");
    }
  }

  function attemptTime(value) {
    if (!value) return "-";
    var parsed = new Date(value);
    if (isNaN(parsed.getTime())) return "-";
    return String(parsed.toISOString().slice(0, 16)).replace("T", " ");
  }

  function openStudentModal() {
    if (!CLASSES.length) {
      showToast("请先创建班级");
      return;
    }
    fillClassSelect(document.getElementById("studentClassInput"));
    document.getElementById("studentAccountInput").value = "";
    document.getElementById("studentNameInput").value = "";
    document.getElementById("studentPasswordInput").value = "";
    openModal("studentModal");
  }

  async function saveStudent() {
    var classId = document.getElementById("studentClassInput").value;
    var account = document.getElementById("studentAccountInput").value.trim();
    var name = document.getElementById("studentNameInput").value.trim();
    var password = document.getElementById("studentPasswordInput").value;
    var cls = CLASSES.filter(function (c) { return c.id === classId; })[0];
    if (!cls) {
      showToast("请选择目标班级");
      return;
    }
    if (!account) {
      showToast("请填写学员账号");
      return;
    }
    try {
      await apiRequest("/api/classes/" + classId + "/students", {
        method: "POST",
        body: { account: account, name: name, password: password }
      });
      closeModal("studentModal");
      await loadTeacherWorkspace();
      renderClasses();
      renderImportTargets();
      document.getElementById("importClassSelect").value = classId;
      showToast("学员已加入：" + cls.name);
    } catch (e) {
      showToast(e.message || "学员添加失败");
    }
  }

  async function openStudentData(classId) {
    var cls = CLASSES.filter(function (c) { return c.id === classId; })[0];
    if (!cls) return;
    document.getElementById("studentDataModalTitle").textContent = cls.name + " · 学习数据";
    document.getElementById("studentDataTable").innerHTML =
      "<tbody><tr><td class='t-empty'>正在加载学习数据...</td></tr></tbody>";
    openModal("studentDataModal");
    try {
      var data = await apiRequest("/api/classes/" + classId + "/students");
      var rows = (data.students || []).map(function (s) {
        return (
          "<tr>" +
          "<td>" + esc(s.name) + "</td>" +
          "<td>" + esc(s.studentNo || "-") + "</td>" +
          "<td>" + esc(s.account || "-") + "</td>" +
          "<td>" + (Number(s.quizAnsweredCount) || 0) + "</td>" +
          "<td>" + (Number(s.quizCorrectCount) || 0) + "</td>" +
          "<td>" + (Number(s.practiceAnsweredCount) || 0) + "</td>" +
          "<td>" + (Number(s.practiceCorrectCount) || 0) + "</td>" +
          "<td>" + attemptTime(s.lastQuizAt) + "</td>" +
          "<td>" + attemptTime(s.lastPracticeAt) + "</td>" +
          '<td><button class="t-mini-btn danger" type="button" data-student-action="delete" data-id="' + s.id + '">' + icon("X") + "移除</button></td>" +
          "</tr>"
        );
      }).join("") || "<tr><td colspan='10' class='t-empty'>该班级暂无学员</td></tr>";
      document.getElementById("studentDataTable").innerHTML =
        "<thead><tr><th>姓名</th><th>学号</th><th>账号</th><th>闯关题数</th><th>闯关答对</th><th>练习题数</th><th>练习答对</th><th>最近闯关</th><th>最近练习</th><th>操作</th></tr></thead><tbody>" +
        rows +
        "</tbody>";
    } catch (e) {
      document.getElementById("studentDataTable").innerHTML =
        "<tbody><tr><td class='t-empty'>" + esc(e.message || "学习数据加载失败") + "</td></tr></tbody>";
    }
  }

  async function saveAssessment() {
    var name = document.getElementById("assessmentNameInput").value.trim();
    var classId = document.getElementById("assessmentClassInput").value;
    var time = document.getElementById("assessmentTimeInput").value;
    var duration = Number(document.getElementById("assessmentDurationInput").value) || 30;
    var limited = document.getElementById("assessmentLimitInput").checked;
    var retest = document.getElementById("assessmentRetestInput").checked;
    if (!name || !time || !classId) {
      showToast("请填写测评名称、目标班级和开放时间");
      return;
    }
    try {
      var created = await apiRequest("/api/teacher/assessments", {
        method: "POST",
        body: {
          title: name,
          classIds: [classId],
          opensAt: new Date(time).toISOString(),
          closesAt: null,
          durationMinutes: duration,
          limitedTime: limited,
          allowRetest: retest,
          questionsPerLevel: 3,
          initialDifficulty: 3
        }
      });
      await apiRequest("/api/teacher/assessments/" + created.id, {
        method: "PATCH",
        body: { status: "published" }
      });
      closeModal("assessmentModal");
      await loadTeacherWorkspace();
      renderAssessments();
      showToast("测评已发布，学员端闯关模块可见");
    } catch (e) {
      showToast(e.message || "测评发布失败");
    }
  }

  function formatAnswer(raw) {
    var keys = raw.answerKeys || raw.answer || [];
    if (!Array.isArray(keys)) keys = [keys];
    return keys.join(",");
  }

  function optionLines(raw) {
    var options = raw.choiceOptions || raw.options || [];
    return options.map(function (option) {
      if (option && typeof option === "object") return option.key + "." + option.text;
      return String(option);
    }).join("\n");
  }

  function openQuestionModal(questionId) {
    editingQuestionId = questionId || null;
    var raw = apiState.questions.filter(function (item) {
      return item.id === questionId;
    })[0] || null;
    var q = raw ? normalizeQuestion(raw) : null;
    document.getElementById("questionModalTitle").textContent = q ? "编辑题目" : "添加题目";
    document.getElementById("questionLevelInput").value = q ? q.levelId : "academy";
    document.getElementById("questionTypeInput").value = q ? q.type : "单选";
    document.getElementById("questionDim1Input").value = raw && raw.dimKeys && raw.dimKeys[0] ? raw.dimKeys[0] : "D1";
    document.getElementById("questionDim2Input").value = raw && raw.dimKeys && raw.dimKeys[1] ? raw.dimKeys[1] : "D2";
    document.getElementById("questionDifficultyInput").value = raw ? raw.difficulty : "low";
    document.getElementById("questionTextInput").value = q ? q.text : "";
    document.getElementById("questionOptionsInput").value = raw ? optionLines(raw) : "";
    document.getElementById("questionAnswerInput").value = raw ? formatAnswer(raw) : "";
    document.getElementById("questionExplanationInput").value = raw ? String(raw.explanation || "") : "";
    openModal("questionModal");
  }

  async function reloadQuestions() {
    var data = await apiRequest("/api/questions");
    apiState.questions = data.questions || [];
    QUESTIONS = apiState.questions.map(normalizeQuestion);
  }

  async function saveQuestion() {
    var text = document.getElementById("questionTextInput").value.trim();
    var levelId = document.getElementById("questionLevelInput").value;
    var type = typeCode(document.getElementById("questionTypeInput").value);
    var dim1 = document.getElementById("questionDim1Input").value;
    var dim2 = document.getElementById("questionDim2Input").value;
    if (!text) {
      showToast("题干不能为空");
      return;
    }
    if (dim1 === dim2) {
      showToast("请选择两个不同的考察维度");
      return;
    }
    var options = document.getElementById("questionOptionsInput").value.split(/\n|\|/).map(function (s) {
      return s.trim().replace(/^[A-Fa-f][.、．:：]\s*/, "");
    }).filter(Boolean);
    var answerText = document.getElementById("questionAnswerInput").value.trim();
    var answer;
    var payload = {
      levelId: levelId,
      type: type,
      difficulty: document.getElementById("questionDifficultyInput").value,
      dimKeys: [dim1, dim2],
      stem: text,
      options: options.length ? options : undefined,
      answer: answerText.toUpperCase(),
      analysis: document.getElementById("questionExplanationInput").value.trim()
    };
    try {
      if (editingQuestionId) {
        await apiRequest("/api/questions/" + editingQuestionId, { method: "PUT", body: payload });
      } else {
        await apiRequest("/api/questions", { method: "POST", body: payload });
      }
      closeModal("questionModal");
      await reloadQuestions();
      renderQuestions();
      showToast("题目已保存到题库");
    } catch (e) {
      showToast(e.message || "题目保存失败");
    }
  }

  async function deleteQuestion(questionId) {
    var q = QUESTIONS.filter(function (item) {
      return item.id === questionId;
    })[0];
    if (!q) return;
    if (!window.confirm("确定从后端题库删除这道题目？")) return;
    try {
      await apiRequest("/api/questions/" + questionId, { method: "DELETE" });
      await reloadQuestions();
      renderQuestions();
      showToast("题目已删除");
    } catch (e) {
      showToast(e.message || "题目删除失败");
    }
  }

  async function reviewQuestion(questionId) {
    try {
      await apiRequest("/api/questions/" + questionId + "/review", {
        method: "PATCH",
        body: { result: "approved" }
      });
      await reloadQuestions();
      renderQuestions();
      showToast("题目审核通过");
    } catch (e) {
      showToast(e.message || "审核失败");
    }
  }

  function downloadStudentTemplate() {
    downloadCsv("学员名单模板.csv", [
      ["姓名", "学号", "班级"],
      ["林晓", "20260421", "高一 (3) 班"]
    ]);
  }

  async function downloadQuestionTemplate() {
    try {
      await downloadApiCsv("/api/questions/template", "题库导入模板.csv");
    } catch (e) {
      showToast(e.message || "模板下载失败");
    }
  }

  async function importStudents(file) {
    var reader = new FileReader();
    reader.onload = async function () {
      var records = tableFromRows(csvRows(reader.result));
      var targetId = document.getElementById("importClassSelect").value;
      var target = CLASSES.filter(function (c) {
        return c.id === targetId;
      })[0] || CLASSES[0];
      if (!target) {
        showToast("请先创建班级");
        return;
      }
      var rows = records.map(function (record) {
        return {
          name: record["姓名"] || record.name || "",
          studentNo: record["学号"] || record.no || record.studentno || ""
        };
      }).filter(function (row) {
        return row.name && row.studentNo;
      });
      if (!rows.length) {
        showToast("未解析到有效学员，请检查模板列名或学号");
        return;
      }
      try {
        var result = await apiRequest("/api/classes/" + target.id + "/students/import", {
          method: "POST",
          body: { rows: rows }
        });
        await loadTeacherWorkspace();
        renderClasses();
        renderImportTargets();
        document.getElementById("importClassSelect").value = target.id;
        showToast("已导入 " + (result.importedCount || rows.length) + " 名学员到 " + target.name +
          (result.skippedCount ? "，跳过 " + result.skippedCount + " 条重复/无效记录" : ""));
      } catch (e) {
        showToast(e.message || "学员导入失败");
      }
    };
    reader.readAsText(file, "utf-8");
  }

  function dimensionKeyFromText(value) {
    var map = {
      "AI基础认知": "D1",
      "提示词工程": "D2",
      "AI工具使用": "D3",
      "AI结果评估与优化": "D4",
      "AI结果评估": "D4",
      "人机协同解决问题": "D5",
      "人机协同": "D5",
      "AI伦理与合规": "D6",
      "AI伦理合规": "D6"
    };
    return map[String(value || "").trim()] || null;
  }

  function questionImportRows(records) {
    return records.map(function (record) {
      var dimText = String(record.dimKeys || record["考察维度"] || "").trim();
      var dimKeys = dimText
        ? dimText.split(/[,，、]/).map(function (value) {
          var text = value.trim();
          return /^D[1-6]$/.test(text) ? text : dimensionKeyFromText(text);
        }).filter(Boolean)
        : ["D1", "D2"];
      return {
        levelId: record.levelid || record.levelId || "academy",
        type: typeCode(record.type || record["题型"] || "单选"),
        difficulty: record.difficulty !== undefined && record.difficulty !== ""
          ? String(record.difficulty)
          : "low",
        dimKeys: dimKeys,
        stem: record.stem || record["题干"] || "",
        options: record.options || record["选项"] || "",
        answer: record.answer !== undefined && record.answer !== ""
          ? record.answer
          : (record["答案"] !== undefined ? record["答案"] : ""),
        analysis: record.analysis || record["解析"] || ""
      };
    });
  }

  async function importQuestions(file) {
    var reader = new FileReader();
    reader.onload = async function () {
      var records = tableFromRows(csvRows(reader.result));
      var rows = questionImportRows(records).filter(function (row) {
        return row.stem;
      });
      if (!rows.length) {
        showToast("未解析到有效题目，请检查模板列名");
        return;
      }
      try {
        var result = await apiRequest("/api/questions/import", {
          method: "POST",
          body: { rows: rows }
        });
        await reloadQuestions();
        renderQuestions();
        showToast("题库已导入 " + (result.importedCount || rows.length) + " 道题" +
          (result.failedCount ? "，失败 " + result.failedCount + " 道" : ""));
      } catch (e) {
        showToast(e.message || "题库导入失败");
      }
    };
    reader.readAsText(file, "utf-8");
  }

  function exportAllClassesReport() {
    if (!CLASSES.length) {
      showToast("暂无班级可导出");
      return;
    }
    var header = ["班级", "年级", "班主任", "学员数", "完成数", "参与率", "评级", "薄弱维度"];
    downloadCsv("班级测评汇总.csv", [header].concat(CLASSES.map(function (c) {
      return [c.name, c.grade, c.teacher, c.students, c.completed, c.participation, c.rating, c.weak];
    })));
    showToast("班级汇总报告已导出");
  }

  function bindEvents() {
    Array.prototype.forEach.call(document.querySelectorAll(".t-nav-item"), function (item) {
      item.addEventListener("click", function () {
        switchView(item.getAttribute("data-view"));
      });
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-assessment-tab-btn]"), function (item) {
      item.addEventListener("click", function () {
        switchAssessmentTab(item.getAttribute("data-assessment-tab-btn"));
      });
    });

    document.getElementById("addClassBtn").addEventListener("click", function () {
      openClassModal();
    });
    document.getElementById("saveClassBtn").addEventListener("click", saveClass);
    document.getElementById("addStudentBtn").addEventListener("click", openStudentModal);
    document.getElementById("saveStudentBtn").addEventListener("click", saveStudent);
    document.getElementById("copyClassCodeBtn").addEventListener("click", async function () {
      var code = document.getElementById("classCodeValue").textContent.trim();
      try {
        await navigator.clipboard.writeText(code);
        showToast("班级口令已复制");
      } catch (e) {
        showToast("复制失败，请手动记录口令");
      }
    });

    document.getElementById("createAssessmentBtn").addEventListener("click", function () {
      fillClassSelect(document.getElementById("assessmentClassInput"));
      openModal("assessmentModal");
    });
    document.getElementById("saveAssessmentBtn").addEventListener("click", saveAssessment);

    document.getElementById("publishTaskBtn").addEventListener("click", function () {
      fillClassSelect(document.getElementById("taskClassInput"));
      openModal("taskModal");
    });
    document.getElementById("saveTaskBtn").addEventListener("click", function () {
      (async function () {
        var name = document.getElementById("taskNameInput").value.trim();
        var classId = document.getElementById("taskClassInput").value;
        var deadline = document.getElementById("taskDeadlineInput").value;
        if (!name || !classId) {
          showToast("请填写训练任务名称并选择目标班级");
          return;
        }
        try {
          await apiRequest("/api/teacher/tasks", {
            method: "POST",
            body: {
              title: name,
              type: document.getElementById("taskTypeInput").value,
              classIds: [classId],
              deadline: deadline ? new Date(deadline).toISOString() : null,
              description: document.getElementById("taskDescInput").value.trim(),
              autoGrade: document.getElementById("taskAutoGradeInput").checked,
              notifyStudents: document.getElementById("taskNotifyInput").checked
            }
          });
          closeModal("taskModal");
          await loadTeacherWorkspace();
          renderTasks();
          showToast("训练任务已发布并通知学员");
        } catch (e) {
          showToast(e.message || "训练任务发布失败");
        }
      })();
    });

    document.getElementById("addQuestionBtn").addEventListener("click", function () {
      openQuestionModal();
    });
    document.getElementById("saveQuestionBtn").addEventListener("click", saveQuestion);

    document.getElementById("importStudentsBtn").addEventListener("click", function () {
      document.getElementById("importStudentsFile").click();
    });
    document.getElementById("importQuestionsBtn").addEventListener("click", function () {
      document.getElementById("importQuestionsFile").click();
    });
    document.getElementById("studentTemplateBtn").addEventListener("click", downloadStudentTemplate);
    document.getElementById("questionTemplateBtn").addEventListener("click", downloadQuestionTemplate);
    document.getElementById("importStudentsFile").addEventListener("change", function (e) {
      if (e.target.files && e.target.files[0]) importStudents(e.target.files[0]);
      e.target.value = "";
    });
    document.getElementById("importQuestionsFile").addEventListener("change", function (e) {
      if (e.target.files && e.target.files[0]) importQuestions(e.target.files[0]);
      e.target.value = "";
    });
    document.getElementById("exportReportBtn").addEventListener("click", function () {
      exportAllClassesReport();
    });
    document.getElementById("exportStudentBtn").addEventListener("click", exportStudentReportPdf);
    document.getElementById("exportRawBtn").addEventListener("click", exportRawCsv);
    Array.prototype.forEach.call(document.querySelectorAll("#compareSeg .t-seg-btn"), function (btn) {
      btn.addEventListener("click", function () {
        compareMode = btn.getAttribute("data-compare");
        renderCompare();
      });
    });

    document.getElementById("questionSearch").addEventListener("input", renderQuestions);
    document.getElementById("questionTypeFilter").addEventListener("change", renderQuestions);
    document.getElementById("questionStatusFilter").addEventListener("change", renderQuestions);
    document.getElementById("resultSearch").addEventListener("input", renderResults);
    document.getElementById("resultRatingFilter").addEventListener("change", renderResults);
    document.getElementById("resultSort").addEventListener("change", renderResults);

    Array.prototype.forEach.call(document.querySelectorAll(".t-modal-close, [data-close]"), function (btn) {
      btn.addEventListener("click", function () {
        closeModal(btn.getAttribute("data-close") || btn.closest(".t-modal").id);
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".t-modal"), function (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal(modal.id);
      });
    });

    document.addEventListener("click", function (e) {
      var classAction = e.target.closest("[data-class-action]");
      if (classAction) {
        var action = classAction.getAttribute("data-class-action");
        if (action === "edit") {
          openClassModal(classAction.getAttribute("data-id"));
        } else if (action === "students") {
          openStudentData(classAction.getAttribute("data-id"));
        } else if (action === "delete") {
          deleteClass(classAction.getAttribute("data-id"));
        } else {
          exportClassReport(classAction.getAttribute("data-id"));
        }
      }
      var assessAction = e.target.closest("[data-assessment-action]");
      if (assessAction) {
        var a = assessAction.getAttribute("data-assessment-action");
        if (a === "monitor") {
          selectedMonitorAssessmentId = assessAction.getAttribute("data-id");
          refreshAssessmentData(selectedMonitorAssessmentId).then(function () {
            renderAssessments();
            showToast("已切换到实时进度监控");
          }).catch(function (e) {
            showToast(e.message || "监控数据加载失败");
          });
        } else if (a === "delete") {
          deleteAssessment(assessAction.getAttribute("data-id"));
        } else {
          exportRawCsv();
        }
      }
      var taskAction = e.target.closest("[data-task-action]");
      if (taskAction) {
        var ta = taskAction.getAttribute("data-task-action");
        var taskId = taskAction.getAttribute("data-id");
        if (ta === "delete") {
          (async function () {
            try {
              await apiRequest("/api/teacher/tasks/" + taskId, { method: "DELETE" });
              TASKS = TASKS.filter(function (t) { return t.id !== taskId; });
              renderTasks();
              showToast("训练任务已删除");
            } catch (e) {
              showToast(e.message || "训练任务删除失败");
            }
          })();
        } else if (ta === "stop") {
          (async function () {
            try {
              await apiRequest("/api/teacher/tasks/" + taskId, { method: "PATCH", body: { status: "disabled" } });
              var stopped = TASKS.filter(function (item) { return item.id === taskId; })[0];
              if (stopped) {
                stopped.status = "已停用";
                renderTasks();
              }
              showToast("任务已停用，学员端将不再显示");
            } catch (e) {
              showToast(e.message || "任务停用失败");
            }
          })();
        } else {
          showToast("已打开任务详情");
        }
      }
      var qAction = e.target.closest("[data-question-action]");
      if (qAction) {
        var qa = qAction.getAttribute("data-question-action");
        var questionId = qAction.getAttribute("data-id");
        if (qa === "review") {
          reviewQuestion(questionId);
        } else if (qa === "delete") {
          deleteQuestion(questionId);
        } else {
          openQuestionModal(questionId);
        }
      }
      var profileBtn = e.target.closest("[data-profile-open]");
      if (profileBtn) {
        selectedStudentId = profileBtn.getAttribute("data-profile-open") || selectedStudentId;
        switchView("profile");
      showToast("已打开学员画像：" + (profileBtn.getAttribute("data-profile-name") || ""));
      }
      var studentAction = e.target.closest("[data-student-action]");
      if (studentAction && studentAction.getAttribute("data-student-action") === "delete") {
        deleteStudent(studentAction.getAttribute("data-id"));
      }
    });

    Array.prototype.forEach.call(document.querySelectorAll(".t-tab"), function (tab) {
      tab.addEventListener("click", function () {
        renderProfileTab(tab.getAttribute("data-profile-tab"));
      });
    });

    function doTeacherLogout() {
      var token = authToken();
      if (token) {
        fetch("/api/auth/logout", { method: "POST", headers: { Authorization: "Bearer " + token } }).catch(function () {});
      }
      try {
        localStorage.removeItem("ai-auth-token");
        localStorage.removeItem("ai-auth-role");
        localStorage.removeItem("ai-auth-user");
      } catch (e) { /* ignore storage errors */ }
      window.location.href = "index.html";
    }

    var teacherSettingsPop = document.getElementById("teacherSettingsPop");
    function toggleTeacherSettings() {
      teacherSettingsPop.hidden = !teacherSettingsPop.hidden;
    }
    function closeTeacherSettings() {
      teacherSettingsPop.hidden = true;
    }
    var teacherGear = document.getElementById("teacherGear");
    if (teacherGear) {
      teacherGear.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleTeacherSettings();
      });
      teacherGear.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); toggleTeacherSettings(); }
      });
    }
    document.getElementById("teacherManageAccountBtn").addEventListener("click", function () {
      closeTeacherSettings();
      var nameEl = document.getElementById("teacherAccountName");
      var applyFallback = function () {
        try {
          var u = JSON.parse(localStorage.getItem("ai-auth-user") || "{}");
          if (!nameEl.textContent || nameEl.textContent === "加载中…") nameEl.textContent = u.account || u.name || "当前账号";
        } catch (e) { if (!nameEl.textContent || nameEl.textContent === "加载中…") nameEl.textContent = "当前账号"; }
      };
      nameEl.textContent = "加载中…";
      applyFallback();
      apiRequest("/api/auth/me").then(function (me) {
        if (me && me.user && me.user.account) nameEl.textContent = me.user.account;
      }).catch(function () { /* 保留占位 */ });
      openModal("teacherAccountModal");
    });
    document.getElementById("teacherLogoutItem").addEventListener("click", function () {
      closeTeacherSettings();
      doTeacherLogout();
    });
    document.addEventListener("click", function (e) {
      if (!teacherSettingsPop.hidden && e.target !== teacherGear && !teacherGear.contains(e.target) && !teacherSettingsPop.contains(e.target)) {
        closeTeacherSettings();
      }
    });
    document.getElementById("teacherProfileBtn").addEventListener("click", function () {
      showToast("管理端账号 · 工号 123456");
    });
    document.getElementById("teacherSaveAccountBtn").addEventListener("click", function () {
      closeModal("teacherAccountModal");
      showToast("账号密码已更新");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeTeacherSettings();
        var open = document.querySelector(".t-modal.open");
        if (open) closeModal(open.id);
      }
    });
  }

  bindEvents();
  loadTeacherWorkspace().then(function () {
    renderImportTargets();
    switchView("overview");
  }).catch(function () {});
})();
