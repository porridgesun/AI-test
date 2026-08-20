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
  var DIM_COLORS = ["#0ecf8e", "#22d3ee", "#ff9f43", "#9b6cff", "#5b6cf6", "#ff6b7a"];
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
        { label: "高一1班", value: 84, color: "#4f46e5" },
        { label: "高一2班", value: 78, color: "#22d3ee" },
        { label: "高一3班", value: 80, color: "#9b6cff" },
        { label: "高一4班", value: 82, color: "#0ecf8e" },
        { label: "高二1班", value: 86, color: "#ff9f43" },
        { label: "高二2班", value: 76, color: "#ff6b7a" }
      ]
    },
    school: {
      note: "各班级均分与全校均值对比，高于均值视为优势班级。",
      data: [
        { label: "高一1班", value: 84, color: "#4f46e5" },
        { label: "高一2班", value: 78, color: "#22d3ee" },
        { label: "高一3班", value: 80, color: "#9b6cff" },
        { label: "高一4班", value: 82, color: "#0ecf8e" },
        { label: "全校均值", value: 82, color: "#ff9f43" },
        { label: "高二1班", value: 86, color: "#ff6b7a" }
      ]
    },
    history: {
      note: "与历史同期及本学期目标对比，追踪整体水平变化。",
      data: [
        { label: "去年同期", value: 70, color: "#94a3b8" },
        { label: "上学期", value: 76, color: "#22d3ee" },
        { label: "本学期", value: 82, color: "#4f46e5" },
        { label: "学期目标", value: 86, color: "#0ecf8e" }
      ]
    }
  };

  var STORE_KEY = "ai-teacher-workspace-v3";
  var editingClassId = null;
  var editingQuestionId = null;
  var selectedStudentId = null;
  var selectedMonitorAssessmentId = null;

  var CLASSES = [
    { id: "c1", name: "高一 (1) 班", grade: "高一", teacher: "张老师", students: 32, completed: 30, participation: "94%", rating: "A", weak: "AI结果评估" },
    { id: "c2", name: "高一 (2) 班", grade: "高一", teacher: "李老师", students: 31, completed: 27, participation: "90%", rating: "B", weak: "人机协同" },
    { id: "c3", name: "高一 (3) 班", grade: "高一", teacher: "张老师", students: 30, completed: 26, participation: "92%", rating: "B", weak: "AI工具使用" },
    { id: "c4", name: "高一 (4) 班", grade: "高一", teacher: "王老师", students: 32, completed: 29, participation: "93%", rating: "A", weak: "AI伦理合规" },
    { id: "c5", name: "高二 (1) 班", grade: "高二", teacher: "赵老师", students: 31, completed: 28, participation: "91%", rating: "S", weak: "AI结果评估" },
    { id: "c6", name: "高二 (2) 班", grade: "高二", teacher: "陈老师", students: 30, completed: 24, participation: "88%", rating: "B", weak: "提示词工程" }
  ];

  var ASSESSMENTS = [
    { id: "a1", name: "智核觉醒 · 第一轮", cls: "高一 (3) 班", time: "2026-08-18 09:00", limit: "30 分钟", retest: "否", status: "进行中", progress: "68%" },
    { id: "a2", name: "智核觉醒 · 提示词专项", cls: "高一 (1) 班", time: "2026-08-16 14:00", limit: "20 分钟", retest: "是", status: "已结束", progress: "100%" },
    { id: "a3", name: "智核觉醒 · 信息甄别专项", cls: "高二 (1) 班", time: "2026-08-15 10:00", limit: "25 分钟", retest: "否", status: "已结束", progress: "100%" },
    { id: "a4", name: "智核觉醒 · 创客工坊实操", cls: "高一 (2) 班", time: "2026-08-20 15:00", limit: "35 分钟", retest: "是", status: "未开始", progress: "0%" }
  ];

  var TASKS = [
    { id: "t1", name: "提示词工程巩固练习", type: "客观题练习", cls: "高一 (3) 班", deadline: "2026-08-25 18:00", status: "进行中", progress: "45%" },
    { id: "t2", name: "协同空间站危机对话", type: "对话式练习", cls: "高一 (1) 班", deadline: "2026-08-22 18:00", status: "待开始", progress: "0%" }
  ];

  var MONITOR = [
    { name: "林晓", id: "20260421", station: "伦理殿堂", progress: "5 / 5 关", status: "已完成" },
    { name: "陈诺", id: "20260408", station: "创客工坊 · 待实操", progress: "3 / 5 关", status: "测评中" },
    { name: "王梓", id: "20260415", station: "协同空间站", progress: "4 / 5 关", status: "测评中" },
    { name: "周雨", id: "20260402", station: "信息迷城", progress: "2 / 5 关", status: "测评中" },
    { name: "赵铭", id: "20260419", station: "协同空间站 · 待对话", progress: "4 / 5 关", status: "测评中" },
    { name: "孙悦", id: "20260411", station: "未开始", progress: "0 / 5 关", status: "未开始" }
  ];

  var STUDENTS = [
    { id: "s1", name: "林晓", no: "20260421", cls: "高一 (3) 班", classId: "c3", status: "已完成", rating: "A", stars: 13, levels: ["done", "done", "done", "done", "done"], scores: [86, 82, 88, 83, 85, 88] },
    { id: "s2", name: "陈诺", no: "20260408", cls: "高一 (3) 班", classId: "c3", status: "测评中", rating: "C", stars: 6, levels: ["done", "done", "active", "todo", "todo"], pendingTask: "practical", scores: [72, 68, 75, 66, 60, 62] },
    { id: "s3", name: "王梓", no: "20260415", cls: "高一 (1) 班", classId: "c1", status: "已完成", rating: "S", stars: 15, levels: ["done", "done", "done", "done", "done"], scores: [92, 88, 90, 95, 94, 96] },
    { id: "s4", name: "周雨", no: "20260402", cls: "高一 (1) 班", classId: "c1", status: "已完成", rating: "B", stars: 11, levels: ["done", "done", "done", "done", "done"], scores: [76, 80, 82, 84, 81, 79] },
    { id: "s5", name: "赵铭", no: "20260419", cls: "高一 (2) 班", classId: "c2", status: "测评中", rating: "C", stars: 8, levels: ["done", "done", "done", "active", "todo"], pendingTask: "dialogue", scores: [78, 74, 80, 72, 78, 75] },
    { id: "s6", name: "孙悦", no: "20260411", cls: "高一 (2) 班", classId: "c2", status: "已完成", rating: "B", stars: 12, levels: ["done", "done", "done", "done", "done"], scores: [80, 86, 88, 82, 84, 79] }
  ];

  var QUESTIONS = [
    { id: "q1", levelId: "academy", dim: "AI基础认知", type: "单选", difficulty: "入门", time: 2, knowledge: "工具边界", status: "已通过", text: "新生讲座中，哪项任务最适合先交给 AI 完成？" },
    { id: "q2", levelId: "academy", dim: "提示词工程", type: "多选", difficulty: "基础", time: 3, knowledge: "提示词要素", status: "已通过", text: "高质量提示词通常需要写明哪些要素？" },
    { id: "q3", levelId: "labyrinth", dim: "AI结果评估", type: "判断", difficulty: "基础", time: 2, knowledge: "信息核验", status: "已通过", text: "转发 AI 生成的地震配图前，应先核验原始来源。" },
    { id: "q4", levelId: "labyrinth", dim: "AI伦理合规", type: "填空", difficulty: "进阶", time: 3, knowledge: "负责任传播", status: "已通过", text: "请补全：转发疑似 AI 生成信息时应标注______。" },
    { id: "q5", levelId: "workshop", dim: "提示词工程", type: "实操", difficulty: "进阶", time: 8, knowledge: "提示词迭代", status: "已通过", text: "为 AI 创意写作工具发布会写宣传文案，50字内，专业亲切，突出创意伙伴，并至少迭代两次。" },
    { id: "q6", levelId: "workshop", dim: "AI工具使用", type: "多选", difficulty: "熟练", time: 3, knowledge: "产物评估", status: "待审核", text: "评估 AI 宣传文案时，应检查哪些项目？" },
    { id: "q7", levelId: "station", dim: "人机协同", type: "对话", difficulty: "挑战", time: 5, knowledge: "危机追问", status: "已通过", text: "星核AI建议关闭三号氧气模块时，应先追问哪些信息？" },
    { id: "q8", levelId: "court", dim: "AI伦理合规", type: "单选", difficulty: "巅峰", time: 4, knowledge: "责任边界", status: "已通过", text: "AI 辅助完成作业后，最符合学术诚信的做法是？" }
  ];

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

  function classForStudent(student) {
    return CLASSES.filter(function (c) {
      return c.id === student.classId || c.name === student.cls;
    })[0];
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
      profile: ["学生分析", "学生画像"],
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
    var measured = completedStudents();
    var dimensionStats = dimensionAverages(measured);
    var ratingCounts = {};
    measured.forEach(function (s) {
      ratingCounts[s.rating] = (ratingCounts[s.rating] || 0) + 1;
    });
    var totalStudents = CLASSES.reduce(function (sum, c) { return sum + (Number(c.students) || 0); }, 0);
    var totalCompleted = CLASSES.reduce(function (sum, c) { return sum + (Number(c.completed) || 0); }, 0);
    var participation = totalStudents ? Math.round((totalCompleted / totalStudents) * 100) : 0;
    var activeAssessments = ASSESSMENTS.filter(function (a) {
      return a.status === "进行中" || a.status === "测评中";
    }).length;
    var kpis = [
      ["班级总数", String(CLASSES.length), "当前管理范围", "Users", "#4f46e5"],
      ["学生在册", String(CLASSES.reduce(function (sum, c) { return sum + (Number(c.students) || 0); }, 0)), "含待测评学生", "GraduationCap", "#0ecf8e"],
      ["进行中测评", String(activeAssessments), "实时监控中", "ClipboardList", "#ff9f43"],
      ["平均参与率", participation + "%", "按班级统计", "TrendingUp", "#22d3ee"]
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
      { name: "均值", scores: dimensionStats.map(function (d) { return d.avg; }), color: "#4f46e5" },
      { name: "中位数", scores: dimensionStats.map(function (d) { return d.median; }), color: "#22d3ee" }
    ]);
    drawRing("overviewRing", participation);
    drawBar("overviewRatingBar", ["S", "A", "B", "C", "D"].map(function (rating, i) {
      return { label: rating, value: ratingCounts[rating] || 0, color: DIM_COLORS[i] };
    }));

    var weak = CLASSES.map(function (c) {
      var classStudents = measured.filter(function (s) {
        return classForStudent(s) === c;
      });
      if (!classStudents.length) {
        return {
          dim: c.weak || DIMS[0],
          cls: c.name,
          score: 0,
          tip: "该班暂无完整六维数据，先完成一轮智核觉醒测评"
        };
      }
      var stats = dimensionAverages(classStudents);
      var minIndex = 0;
      stats.forEach(function (stat, i) {
        if (stat.avg < stats[minIndex].avg) minIndex = i;
      });
      return {
        dim: DIMS[minIndex] || c.weak || DIMS[0],
        cls: c.name,
        score: stats.length ? stats[minIndex].avg : 0,
        tip: TEACHING_TIPS[DIMS[minIndex]] || "先完成一轮基础测评后再定位短板"
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
    }).join("");
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
      return (
        "<tr>" +
        "<td>" + esc(c.name) + "</td>" +
        "<td>" + esc(c.grade) + "</td>" +
        "<td>" + esc(c.teacher) + "</td>" +
        "<td>" + c.students + "</td>" +
        "<td>" + c.completed + " / " + c.students + "</td>" +
        "<td>" + c.participation + "</td>" +
        "<td>" + badge("已完成") + "</td>" +
        "<td>" + esc(c.rating) + "</td>" +
        "<td><span class='t-row-actions'>" +
        '<button class="t-mini-btn" type="button" data-class-action="edit" data-id="' + c.id + '">' + icon("PenLine") + "编辑</button>" +
        '<button class="t-mini-btn" type="button" data-class-action="export" data-id="' + c.id + '">' + icon("Download") + "报告</button>" +
        '<button class="t-mini-btn danger" type="button" data-class-action="delete" data-id="' + c.id + '">' + icon("X") + "删除</button>" +
        "</span></td>" +
        "</tr>"
      );
    }).join("");
    document.getElementById("classTable").innerHTML =
      "<thead><tr><th>班级</th><th>年级</th><th>班主任</th><th>学生数</th><th>完成</th><th>参与率</th><th>状态</th><th>评级</th><th>操作</th></tr></thead><tbody>" + rows + "</tbody>";
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
        "<td>" + assessmentProgress(a) + "</td>" +
        "<td><span class='t-row-actions'>" +
        '<button class="t-mini-btn" type="button" data-assessment-action="monitor" data-id="' + a.id + '">' + icon("Gauge") + "监控</button>" +
        '<button class="t-mini-btn" type="button" data-assessment-action="export" data-id="' + a.id + '">' + icon("Download") + "导出</button>" +
        "</span></td>" +
        "</tr>"
      );
    }).join("");
    document.getElementById("assessmentTable").innerHTML =
      "<thead><tr><th>测评</th><th>目标班级</th><th>开放时间</th><th>限时</th><th>重测</th><th>状态</th><th>进度</th><th>操作</th></tr></thead><tbody>" + rows + "</tbody>";

    var activeAssessment = ASSESSMENTS.filter(function (item) {
      return item.id === selectedMonitorAssessmentId;
    })[0] || ASSESSMENTS.filter(function (item) {
      return item.status === "进行中" || item.status === "测评中";
    })[0] || ASSESSMENTS[0];
    var monitorStudents = activeAssessment ? assessmentRoster(activeAssessment) : STUDENTS;
    var monitorRows = monitorStudents.map(function (student) {
      var progress = studentProgress(student);
      return (
        "<tr>" +
        "<td>" + esc(student.name) + "</td>" +
        "<td>" + esc(student.no) + "</td>" +
        "<td>" + esc(progress.station) + "</td>" +
        "<td>" + progress.text + "</td>" +
        "<td>" + badge(progress.status) + "</td>" +
        '<td><button class="t-mini-btn" type="button" data-profile-open="' + student.id + '" data-profile-name="' + esc(student.name) + '">' + icon("CircleUserRound") + "画像</button></td>" +
        "</tr>"
      );
    }).join("") || '<tr><td colspan="6" class="t-empty">暂无学生数据</td></tr>';
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
    }).join("");
    document.getElementById("taskTable").innerHTML =
      "<thead><tr><th>任务</th><th>类型</th><th>班级</th><th>截止时间</th><th>状态</th><th>完成率</th><th>操作</th></tr></thead><tbody>" + rows + "</tbody>";
  }

  function renderResults() {
    var q = document.getElementById("resultSearch").value.trim().toLowerCase();
    var rating = document.getElementById("resultRatingFilter").value;
    var sortMode = document.getElementById("resultSort").value;
    var rows = STUDENTS.map(function (s) {
      var cls = classForStudent(s);
      var scores = Array.isArray(s.scores) ? s.scores : [];
      var avg = scores.length ? Math.round(scores.reduce(function (sum, v) {
        return sum + (Number(v) || 0);
      }, 0) / scores.length) : 0;
      return {
        s: s,
        cls: cls ? cls.name : (s.cls || "未分班"),
        avg: avg,
        stars: studentStars(s),
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
      var scoreBars = r.s.scores.map(function (v, di) {
        return '<span class="t-mini-score" style="--dim:' + DIM_COLORS[di] + ";width:" + v + '%"></span>';
      }).join("");
      return (
        "<tr>" +
        "<td>" + esc(r.s.name) + "</td>" +
        "<td>" + r.s.no + "</td>" +
        "<td>" + esc(r.cls) + "</td>" +
        "<td>" + badge(r.s.status || "已完成") + "</td>" +
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

  function exportClassReport(classId) {
    var cls = CLASSES.filter(function (c) {
      return c.id === classId;
    })[0] || CLASSES[0];
    var rows = STUDENTS.map(function (s) {
      var scores = Array.isArray(s.scores) ? s.scores : [];
      var avg = scores.length ? Math.round(scores.reduce(function (sum, v) {
        return sum + (Number(v) || 0);
      }, 0) / scores.length) : 0;
      var studentClass = classForStudent(s);
      return {
        name: s.name,
        no: s.no,
        cls: studentClass ? studentClass.name : (s.cls || "未分班"),
        rating: s.rating || "-",
        scores: scores,
        stars: studentStars(s)
      };
    }).filter(function (r) {
      return r.cls === cls.name;
    });
    var header = ["姓名", "学号", "班级", "评级", "星数"].concat(DIMS);
    downloadCsv("班级报告-" + cls.name + ".csv", [header].concat(rows.map(function (r) {
      return [r.name, r.no, r.cls, r.rating, r.stars].concat(r.scores);
    })));
    showToast("班级报告已导出：" + cls.name);
  }

  function renderProfile() {
    var select = document.getElementById("studentSelect");
    if (!STUDENTS.length) {
      select.innerHTML = '<option value="">暂无学生</option>';
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
    renderProfileDetail();
  }

  function currentStudent() {
    var id = document.getElementById("studentSelect").value;
    return STUDENTS.filter(function (s) {
      return s.id === id;
    })[0] || STUDENTS[0];
  }

  function shortText(value, length) {
    var text = String(value || "").replace(/\s+/g, " ").trim();
    return text.length > length ? text.slice(0, length - 1) + "…" : text;
  }

  function localPracticalFor(s) {
    try {
      var isLocalStudent = s.id === "local-student";
      var nickname = localStorage.getItem("ai-student-nickname");
      if (!isLocalStudent && nickname && s.name && nickname !== s.name) return null;
      var raw = localStorage.getItem("ai-student-practical-v2");
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!Array.isArray(data.versions) || !data.versions.length) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function profileDetails(s) {
    var scores = Array.isArray(s.scores) ? s.scores : DIMS.map(function () { return 0; });
    var local = s.id === "local-student" ? localProgressFor() : null;
    var localLevels = {};
    if (local) {
      local.levels.forEach(function (item) {
        localLevels[item.id] = item;
      });
    }
    var answers = LEVELS.map(function (level, index) {
      var keys = LEVEL_DIMENSIONS[level.id] || [];
      var values = keys.map(function (key) {
        return scores[DIMENSION_KEYS.indexOf(key)] || 0;
      });
      var status = ((Array.isArray(s.levels) && s.levels[index]) || "todo").toString();
      var score = localLevels[level.id] ? localLevels[level.id].score :
        values.length ? Math.round(values.reduce(function (a, b) { return a + b; }, 0) / values.length) : 0;
      var result = status === "todo" ? "未解锁" : score >= 85 ? "优秀" : score >= 70 ? "通过" : score >= 60 ? "待巩固" : "待复测";
      var note = status === "todo" ? "完成前一关后自动解锁"
        : score >= 85 ? "本关目标掌握稳固，可作为同伴示范"
        : score >= 70 ? "已达成本关核心目标，可挑战更高星数"
        : "建议结合守护者反馈重练关键题";
      return [level.name, "剧情闯关", result, score + " 分", note];
    });
    var dialogueScore = Number(scores[4]) || 0;
    var dialogue = [
      ["星核AI", "检测到三号氧气循环异常，建议立即关闭该模块。", s.name, dialogueScore >= 80 ? "请先给出异常依据、备选方案和风险等级，不能直接关闭。" : "这个建议会影响安全，我需要先确认依据。"],
      [s.name, "请对比两个方案的有效性、恢复时间和安全边界。", "周队长", dialogueScore >= 70 ? "追问到位，保留人工确认环节，协同决策合格。" : "已记录，建议继续练习依据追问。"]
    ];
    var practicalLog = localPracticalFor(s);
    var practical;
    var prompts;
    if (practicalLog) {
      practical = practicalLog.versions.map(function (item) {
        return ["第 " + item.version + " 版", shortText(item.prompt, 28), "生成", shortText(item.output, 42)];
      });
      prompts = practicalLog.versions.map(function (item) {
        return ["第 " + item.version + " 版", shortText(item.prompt, 46), "运行", "第 " + item.version + " 次产物已记录"];
      });
    } else {
      var toolScore = Number(scores[2]) || 0;
      practical = [
        ["任务", "AI 创意写作工具宣传文案", "得分", toolScore + " / 100"],
        ["要求", "50字内，专业亲切，突出创意伙伴", "迭代", "至少两版提示词"],
        ["提交产物", "让AI成为你的创意伙伴：输入灵感，获得选题、初稿与润色建议。", "评价", toolScore >= 80 ? "目标、语气与字数约束完整" : "需要继续补齐角色、语气和字数约束"]
      ];
      prompts = [
        ["第 1 版", "帮我写一个AI写作工具宣传文案。", "运行", "缺少角色、语气和字数约束"],
        ["第 2 版", "你是产品文案，请用专业亲切的语气写50字内宣传文案。", "运行", "要素基本完整，创意伙伴还不够突出"],
        ["第 3 版", "你是产品文案，请面向学生，用专业亲切语气写50字内文案，突出AI是创意伙伴。", "采纳", "目标、角色、语气、字数与卖点完整"]
      ];
    }
    return { answers: answers, dialogue: dialogue, practical: practical, prompts: prompts };
  }

  function renderProfileDetail() {
    var s = currentStudent();
    var scores = Array.isArray(s.scores) ? s.scores : DIMS.map(function () { return 0; });
    var classStudents = completedStudents().filter(function (item) {
      return classForStudent(item) === classForStudent(s);
    });
    var classAvg = dimensionAverages(classStudents).map(function (item) { return item.avg; });
    drawRadar("profileRadar", [
      { name: s.name, scores: scores, color: "#4f46e5" },
      { name: "班级均值", scores: classAvg, color: "#9b6cff" }
    ]);
    var profileChip = document.getElementById("profileMetaChip");
    if (profileChip) profileChip.textContent = "评级 " + (s.rating || "-") + " · " + studentStars(s) + " / 15 星";
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
    document.getElementById("profileDetail").innerHTML = "<table class='t-table'><thead><tr>" + head + "</tr></thead><tbody>" + rows + "</tbody></table>";
  }

  function renderAnalysis() {
    var measured = completedStudents();
    var stats = dimensionAverages(measured);
    var overall = measured.length ? Math.round(measured.reduce(function (sum, s) { return sum + studentAverage(s); }, 0) / measured.length) : 0;
    drawLine("growthLine", [
      { label: "当前均值", value: overall },
      { label: "学期目标", value: Math.max(overall, 85) }
    ]);
    renderCompare();
    var weakest = stats.map(function (item, i) {
      return { dim: DIMS[i], avg: item.avg };
    }).sort(function (a, b) { return a.avg - b.avg; }).slice(0, 3);
    document.getElementById("analysisAdvice").innerHTML = [
      [weakest[0].dim, TEACHING_TIPS[weakest[0].dim], "Lightbulb"],
      [weakest[1].dim, TEACHING_TIPS[weakest[1].dim], "Wrench"],
      [weakest[2].dim, TEACHING_TIPS[weakest[2].dim], "Search"]
    ].map(function (a) {
      return (
        '<div class="t-advice"><strong>' + icon(a[2]) + a[0] + "</strong><p>" + a[1] + "</p></div>"
      );
    }).join("");
  }

  function renderCompare() {
    var measured = completedStudents();
    var classBars = CLASSES.map(function (c, i) {
      var classStudents = measured.filter(function (s) {
        return classForStudent(s) === c;
      });
      var avg = classStudents.length ? Math.round(classStudents.reduce(function (sum, s) { return sum + studentAverage(s); }, 0) / classStudents.length) : 0;
      return { label: c.name.replace(/\s*/g, ""), value: avg, color: DIM_COLORS[i % DIM_COLORS.length] };
    });
    var schoolAvg = measured.length ? Math.round(measured.reduce(function (sum, s) { return sum + studentAverage(s); }, 0) / measured.length) : 0;
    var info;
    if (compareMode === "school") {
      info = {
        note: "各班级均分与全校均值对比，高于均值视为优势班级。",
        data: classBars.concat([{ label: "全校均值", value: schoolAvg, color: "#0f172a" }])
      };
    } else if (compareMode === "history") {
      info = {
        note: "当前完整测评均分与学期目标对比，用于确认下一阶段训练重点。",
        data: [
          { label: "当前均值", value: schoolAvg, color: "#4f46e5" },
          { label: "学期目标", value: Math.max(schoolAvg, 85), color: "#0ecf8e" }
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

  function exportRawCsv() {
    var header = ["学号", "姓名", "班级", "状态"].concat(DIMS).concat(["评级", "星数"]);
    var rows = STUDENTS.map(function (s) {
      var cls = classForStudent(s);
      var scores = Array.isArray(s.scores) ? s.scores : DIMS.map(function () { return 0; });
      var avg = scores.length ? scores.reduce(function (a, b) { return a + (Number(b) || 0); }, 0) / scores.length : 0;
      var stars = studentStars(s);
      return [maskNo(s.no), maskName(s.name), cls ? cls.name : (s.cls || "未分班"), s.status || "已完成"].concat(scores).concat([s.rating || "-", stars]);
    });
    downloadCsv("原始测评数据-脱敏.csv", [header].concat(rows));
    showToast("已按脱敏规则导出原始数据 CSV");
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
      '<polygon points="' + ring(0.33) + '" fill="#eef2f8" stroke="#dbe3ef"/>' +
      '<polygon points="' + ring(0.66) + '" fill="#f7f9fc" stroke="#dbe3ef"/>' +
      '<polygon points="' + ring(1) + '" fill="none" stroke="#cbd5e1"/>' +
      Array.from({ length: 6 }, function (_, i) {
        var p = pt(R, i);
        return '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '" stroke="#e2e8f0"/>';
      }).join("") +
      '<polygon points="' + data + '" fill="rgba(79,70,229,.14)" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/>' +
      scores.map(function (v, i) {
        var p = pt((R * v) / 100, i);
        return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4" fill="#ffffff" stroke="#4f46e5" stroke-width="2"/>';
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
    html += '<defs><linearGradient id="tHdr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f46e5"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient></defs>';
    html += '<style>text{font-family:' + font + ";} .t1{fill:#f8fafc;font-size:30px;font-weight:800;} .t2{fill:#e0e7ff;font-size:14px;} .lbl{fill:#64748b;font-size:14px;} .val{fill:#0f172a;font-size:16px;font-weight:700;} .mut{fill:#94a3b8;font-size:12px;}</style>";
    html += '<rect width="' + W + '" height="' + H + '" fill="#f8fafc"/>';
    html += '<rect width="' + W + '" height="240" fill="url(#tHdr)"/>';
    html += '<text x="56" y="90" class="t1">智核觉醒 · 学生画像报告</text>';
    html += '<text x="56" y="122" class="t2">五关闯关记录 · 六维能力测评</text>';
    html += '<text x="944" y="82" text-anchor="end" class="t2">生成日期：' + dateStr + "</text>";
    html += '<text x="944" y="106" text-anchor="end" class="t2">' + esc(s.name) + " · " + esc(s.no) + "</text>";
    html += '<circle cx="844" cy="180" r="44" fill="rgba(255,255,255,.18)"/>';
    html += '<text x="844" y="196" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">' + esc(s.rating) + "</text>";
    html += '<text x="844" y="214" text-anchor="middle" font-size="12" fill="#e0e7ff">综合评级</text>';
    html += '<text x="844" y="238" text-anchor="middle" font-size="12" fill="#e0e7ff">' + studentStars(s) + ' / 15 星</text>';

    html += '<g transform="translate(20,270)">' + teacherRadarMarkup(190, 190, 130, s.scores) + "</g>";

    html += '<text x="470" y="300" class="val">六维得分</text>';
    s.scores.forEach(function (score, i) {
      var y = 332 + i * 44;
      html += '<text x="470" y="' + y + '" class="lbl">' + DIMS[i] + "</text>";
      html += '<rect x="560" y="' + (y - 11) + '" width="310" height="12" rx="6" fill="#e2e8f0"/>';
      html += '<rect x="560" y="' + (y - 11) + '" width="' + Math.round(3.1 * score) + '" height="12" rx="6" fill="' + DIM_COLORS[i] + '"/>';
      html += '<text x="892" y="' + y + '" text-anchor="end" class="val">' + score + "</text>";
    });

    html += '<line x1="56" y1="620" x2="944" y2="620" stroke="#e2e8f0"/>';
    html += '<text x="56" y="668" class="val">测评明细</text>';
    var blocks = [
      ["答题明细", details.answers.map(function (r) { return r[0] + " · " + r[2] + " · " + r[3]; }).join("  |  ")],
      ["对话记录", details.dialogue.map(function (r) { return r[1] + " → " + r[3]; }).join("  |  ")],
      ["实操产物", details.practical.map(function (r) { return r[1] + "：" + r[3]; }).join("  |  ")],
      ["提示词迭代", details.prompts.map(function (r) { return r[0] + "：" + r[1]; }).join("  |  ")]
    ];
    blocks.forEach(function (block, i) {
      var y = 716 + i * 70;
      html += '<rect x="56" y="' + y + '" width="888" height="56" rx="8" fill="#ffffff" stroke="#e2e8f0"/>';
      html += '<text x="82" y="' + (y + 24) + '" class="val">' + block[0] + "</text>";
      html += '<text x="82" y="' + (y + 44) + '" class="lbl">' + esc(block[1]) + "</text>";
    });

    html += '<line x1="56" y1="1020" x2="944" y2="1020" stroke="#e2e8f0"/>';
    html += '<text x="56" y="1070" class="val">班级建议</text>';
    html += '<rect x="56" y="1094" width="888" height="120" rx="8" fill="#eef2ff" stroke="#c7d2fe"/>';
    var weak = DIMS[s.scores.indexOf(Math.min.apply(null, s.scores))];
    var strong = DIMS[s.scores.indexOf(Math.max.apply(null, s.scores))];
    html += '<text x="84" y="1132" class="val">' + esc(s.name) + "（" + esc(s.rating) + "）" + "</text>";
    html += '<text x="84" y="1164" class="lbl">建议：强化' + esc(weak) + "训练，保持" + esc(strong) + "优势。</text>";

    html += '<text x="56" y="1280" class="mut">数据说明：本报告由智核觉醒教师端生成，敏感字段已脱敏，仅用于教学分析。</text>';
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
    showToast("正在生成学生画像 PDF...");
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
      downloadBlob(new Blob([out], { type: "application/pdf" }), "学生画像-" + s.name + ".pdf");
      showToast("学生画像 PDF 已导出");
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
        (q.status === "待审核"
          ? '<button class="t-mini-btn" type="button" data-question-action="review" data-id="' + q.id + '">' + icon("BadgeCheck") + "审核</button>"
          : "") +
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
      '<polygon points="' + ring(0.33) + '" fill="#f7f9ff" stroke="#dde4f0"/>' +
      '<polygon points="' + ring(0.66) + '" fill="#fbfcff" stroke="#dde4f0"/>' +
      '<polygon points="' + ring(1) + '" fill="none" stroke="#cbd4e2"/>' +
      Array.from({ length: 6 }, function (_, i) {
        var p = pt(R, i);
        return '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '" stroke="#e3e8f0"/>';
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
      '<circle cx="100" cy="100" r="' + r + '" fill="none" stroke="#eef1f6" stroke-width="16"/>' +
      '<circle cx="100" cy="100" r="' + r + '" fill="none" stroke="#4f46e5" stroke-width="16" stroke-linecap="round" ' +
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
    html += '<line x1="' + pad + '" y1="' + (h - 36) + '" x2="' + (w - pad) + '" y2="' + (h - 36) + '" stroke="#e3e8f0"/>';
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
      '<line x1="' + pad + '" y1="' + (h - pad) + '" x2="' + (w - pad) + '" y2="' + (h - pad) + '" stroke="#e3e8f0"/>' +
      '<polyline points="' + points.join(" ") + '" fill="none" stroke="#4f46e5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
      series.map(function (s, i) {
        return (
          '<circle cx="' + px(i) + '" cy="' + py(s.value) + '" r="4.5" fill="#4f46e5" stroke="#ffffff" stroke-width="2"/>' +
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
      return '<option value="' + esc(c.name) + '">' + esc(c.name) + "</option>";
    }).join("");
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

  function saveClass() {
    var name = document.getElementById("classNameInput").value.trim();
    var grade = document.getElementById("classGradeInput").value;
    var teacher = document.getElementById("classTeacherInput").value.trim() || "待分配";
    if (!name) {
      showToast("请先填写班级名称");
      return;
    }
    if (CLASSES.some(function (c) {
      return c.name === name && c.id !== editingClassId;
    })) {
      showToast("班级名称已存在");
      return;
    }
    if (editingClassId) {
      var editing = CLASSES.filter(function (c) {
        return c.id === editingClassId;
      })[0];
      var oldName = editing.name;
      editing.name = name;
      editing.grade = grade;
      editing.teacher = teacher;
      STUDENTS.forEach(function (student) {
        if (student.classId === editing.id || student.cls === oldName) {
          student.classId = editing.id;
          student.cls = name;
        }
      });
    } else {
      CLASSES.push({
        id: nextId("c", CLASSES),
        name: name,
        grade: grade,
        teacher: teacher,
        students: 0,
        completed: 0,
        participation: "0%",
        rating: "-",
        weak: "待测评"
      });
    }
    saveWorkspace();
    closeModal("classModal");
    renderClasses();
    renderImportTargets();
    showToast(editingClassId ? "班级信息已更新" : "班级已创建，可继续导入名单");
  }

  function deleteClass(classId) {
    var cls = CLASSES.filter(function (c) {
      return c.id === classId;
    })[0];
    if (!cls) return;
    if (!window.confirm("确定删除“" + cls.name + "”？该班级导入的学生记录会一并删除。")) return;
    CLASSES = CLASSES.filter(function (c) {
      return c.id !== classId;
    });
    STUDENTS = STUDENTS.filter(function (s) {
      return s.classId !== classId && s.cls !== cls.name;
    });
    if (selectedStudentId && !STUDENTS.some(function (s) { return s.id === selectedStudentId; })) {
      selectedStudentId = STUDENTS[0] ? STUDENTS[0].id : null;
    }
    saveWorkspace();
    renderClasses();
    renderImportTargets();
    showToast("班级已删除");
  }

  function saveAssessment() {
    var name = document.getElementById("assessmentNameInput").value.trim();
    var className = document.getElementById("assessmentClassInput").value;
    var time = document.getElementById("assessmentTimeInput").value.replace("T", " ");
    var duration = Number(document.getElementById("assessmentDurationInput").value) || 30;
    var limited = document.getElementById("assessmentLimitInput").checked;
    var retest = document.getElementById("assessmentRetestInput").checked;
    if (!name || !time || !className) {
      showToast("请填写测评名称、目标班级和开放时间");
      return;
    }
    var now = new Date();
    var openTime = new Date(time.replace(" ", "T"));
    ASSESSMENTS.unshift({
      id: nextId("a", ASSESSMENTS),
      name: name,
      cls: className,
      time: time,
      limit: limited ? duration + " 分钟" : "不限时",
      retest: retest ? "是" : "否",
      status: openTime > now ? "未开始" : "进行中",
      progress: "0%"
    });
    saveWorkspace();
    closeModal("assessmentModal");
    renderAssessments();
    showToast("测评已发布，题目已融入 NPC 提问");
  }

  function openQuestionModal(questionId) {
    editingQuestionId = questionId || null;
    var q = QUESTIONS.filter(function (item) {
      return item.id === questionId;
    })[0];
    document.getElementById("questionModalTitle").textContent = q ? "编辑题目" : "新增题目";
    document.getElementById("questionTypeInput").value = q ? q.type : "单选";
    document.getElementById("questionDimInput").value = normalizeQuestionDim(q ? q.dim : DIMS[1]);
    document.getElementById("questionDifficultyInput").value = q ? q.difficulty : "基础";
    document.getElementById("questionTimeInput").value = q ? q.time : 2;
    document.getElementById("questionTextInput").value = q ? q.text : "";
    document.getElementById("questionKnowledgeInput").value = q ? q.knowledge : "";
    openModal("questionModal");
  }

  function saveQuestion() {
    var text = document.getElementById("questionTextInput").value.trim();
    var knowledge = document.getElementById("questionKnowledgeInput").value.trim();
    if (!text || !knowledge) {
      showToast("题干和知识点不能为空");
      return;
    }
    var values = {
      type: document.getElementById("questionTypeInput").value,
      dim: normalizeQuestionDim(document.getElementById("questionDimInput").value),
      difficulty: document.getElementById("questionDifficultyInput").value,
      time: Number(document.getElementById("questionTimeInput").value) || 2,
      knowledge: knowledge,
      text: text
    };
    if (editingQuestionId) {
      var editing = QUESTIONS.filter(function (q) {
        return q.id === editingQuestionId;
      })[0];
      if (editing) Object.keys(values).forEach(function (key) {
        editing[key] = values[key];
      });
    } else {
      values.id = nextId("q", QUESTIONS);
      values.status = "待审核";
      QUESTIONS.unshift(values);
    }
    saveWorkspace();
    closeModal("questionModal");
    renderQuestions();
    showToast("题目已保存");
  }

  function deleteQuestion(questionId) {
    var q = QUESTIONS.filter(function (item) {
      return item.id === questionId;
    })[0];
    if (!q) return;
    if (!window.confirm("确定删除这道题目？")) return;
    QUESTIONS = QUESTIONS.filter(function (item) {
      return item.id !== questionId;
    });
    saveWorkspace();
    renderQuestions();
    showToast("题目已删除");
  }

  function reviewQuestion(questionId) {
    var q = QUESTIONS.filter(function (item) {
      return item.id === questionId;
    })[0];
    if (!q) return;
    q.status = "已通过";
    saveWorkspace();
    renderQuestions();
    showToast("题目审核通过");
  }

  function downloadStudentTemplate() {
    downloadCsv("学生名单模板.csv", [
      ["姓名", "学号", "班级"],
      ["林晓", "20260421", "高一 (3) 班"]
    ]);
  }

  function downloadQuestionTemplate() {
    downloadCsv("题库导入模板.csv", [
      ["题型", "能力维度", "难度", "预计用时", "知识点", "状态", "题干"],
      ["单选", "提示词工程", "基础", "2", "提示词要素", "待审核", "高质量提示词通常需要写明角色、目标、约束和格式。"]
    ]);
  }

  function importStudents(file) {
    var reader = new FileReader();
    reader.onload = function () {
      var records = tableFromRows(csvRows(reader.result));
      var targetId = document.getElementById("importClassSelect").value;
      var target = CLASSES.filter(function (c) {
        return c.id === targetId;
      })[0] || CLASSES[0];
      if (!target) {
        showToast("请先创建班级");
        return;
      }
      var added = 0;
      records.forEach(function (record) {
        var name = record["姓名"] || record.name || "";
        var no = record["学号"] || record.no || record.studentno || "";
        if (!name || !no) return;
        if (STUDENTS.some(function (s) { return s.no === no; })) return;
        STUDENTS.push({
          id: nextId("s", STUDENTS),
          name: name,
          no: no,
          cls: target.name,
          classId: target.id,
          status: "未开始",
          rating: "-",
          stars: 0,
          scores: DIMS.map(function () { return 0; })
        });
        added++;
      });
      if (!added) {
        showToast("未导入新学生，请检查模板列名或学号重复");
        return;
      }
      target.students = (Number(target.students) || 0) + added;
      saveWorkspace();
      renderClasses();
      renderImportTargets();
      document.getElementById("importClassSelect").value = target.id;
      showToast("已导入 " + added + " 名学生到 " + target.name);
    };
    reader.readAsText(file, "utf-8");
  }

  function importQuestions(file) {
    var reader = new FileReader();
    reader.onload = function () {
      var records = tableFromRows(csvRows(reader.result));
      var added = 0;
      records.forEach(function (record) {
        var text = record["题干"] || record.text || "";
        var type = record["题型"] || record.type || "单选";
        var dim = normalizeQuestionDim(record["能力维度"] || record.dim || DIMS[1]);
        if (!text || QUESTIONS.some(function (q) { return q.text === text; })) return;
        QUESTIONS.unshift({
          id: nextId("q", QUESTIONS),
          type: type,
          dim: dim,
          difficulty: record["难度"] || record.difficulty || "基础",
          time: Number(record["预计用时"] || record.time) || 2,
          knowledge: record["知识点"] || record.knowledge || "通用能力",
          status: record["状态"] || record.status || "待审核",
          text: text
        });
        added++;
      });
      if (!added) {
        showToast("未导入新题目，请检查模板列名或重复题干");
        return;
      }
      saveWorkspace();
      renderQuestions();
      showToast("题库已导入 " + added + " 道题");
    };
    reader.readAsText(file, "utf-8");
  }

  function exportAllClassesReport() {
    if (!CLASSES.length) {
      showToast("暂无班级可导出");
      return;
    }
    var header = ["班级", "年级", "班主任", "学生数", "完成数", "参与率", "评级", "薄弱维度"];
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

    document.getElementById("addClassBtn").addEventListener("click", function () {
      openClassModal();
    });
    document.getElementById("saveClassBtn").addEventListener("click", saveClass);

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
      var name = document.getElementById("taskNameInput").value.trim() || "未命名测试任务";
      TASKS.unshift({
        id: "t" + Date.now(),
        name: name,
        type: document.getElementById("taskTypeInput").value,
        cls: document.getElementById("taskClassInput").value,
        deadline: document.getElementById("taskDeadlineInput").value.replace("T", " "),
        status: "待开始",
        progress: "0%"
      });
      saveWorkspace();
      closeModal("taskModal");
      renderTasks();
      showToast("测试任务已发布并通知学生");
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
        } else if (action === "delete") {
          deleteClass(classAction.getAttribute("data-id"));
        } else {
          exportClassReport(classAction.getAttribute("data-id"));
        }
      }
      var assessAction = e.target.closest("[data-assessment-action]");
      if (assessAction) {
        var a = assessAction.getAttribute("data-assessment-action");
        showToast(a === "monitor" ? "已切换到实时进度监控" : "测评结果导出任务已创建");
      }
      var taskAction = e.target.closest("[data-task-action]");
      if (taskAction) {
        var ta = taskAction.getAttribute("data-task-action");
        var taskId = taskAction.getAttribute("data-id");
        if (ta === "delete") {
          TASKS = TASKS.filter(function (t) {
            return t.id !== taskId;
          });
          renderTasks();
          showToast("测试任务已删除");
        } else if (ta === "stop") {
          var stopped = TASKS.filter(function (item) {
            return item.id === taskId;
          })[0];
          if (stopped) {
            stopped.status = "已停用";
            saveWorkspace();
            renderTasks();
          }
          showToast("任务已停用，学生端将不再显示");
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
        showToast("已打开学生画像：" + (profileBtn.getAttribute("data-profile-name") || ""));
      }
    });

    Array.prototype.forEach.call(document.querySelectorAll(".t-tab"), function (tab) {
      tab.addEventListener("click", function () {
        renderProfileTab(tab.getAttribute("data-profile-tab"));
      });
    });

    document.getElementById("teacherLogout").addEventListener("click", function () {
      window.location.href = "index.html";
    });
    document.getElementById("teacherProfileBtn").addEventListener("click", function () {
      showToast("教师账号：张老师 · 权限：管理员");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        var open = document.querySelector(".t-modal.open");
        if (open) closeModal(open.id);
      }
    });
  }

  loadWorkspace();
  syncLocalStudent();
  renderImportTargets();
  bindEvents();
  switchView("overview");
})();
