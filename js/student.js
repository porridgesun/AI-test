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

  var STATIONS = [
    {
      id: "prompt",
      level: 1,
      shift: 0,
      tilt: -2,
      name: "提示词工坊",
      en: "Prompt Craft",
      icon: "WandSparkles",
      color: "#0ecf8e",
      status: "done",
      stars: 2,
      score: 86,
      difficulty: "入门",
      desc: "用角色、目标与格式约束写出清晰可执行的提示词。",
      objective: "本关目标：掌握角色、目标与输出格式三件套。",
      humor: "记住：明确角色、目标和格式，比“给我写点东西”有用一百倍。",
      opening: "第一关先轻松热热身。你猜 AI 最怕哪种人？怕只会说“写点东西”的人。"
    },
    {
      id: "search",
      level: 2,
      shift: 30,
      tilt: 2,
      name: "智能检索",
      en: "Smart Search",
      icon: "Search",
      color: "#ff9f43",
      status: "active",
      stars: 1,
      score: 72,
      difficulty: "基础",
      desc: "练习把模糊问题转化为可检索的关键词与限定条件。",
      objective: "本关目标：把模糊问题拆成关键词、来源和时间范围。",
      humor: "AI 猜不到你心里想什么，但你能用关键词把它框得明明白白。",
      opening: "第二关，咱们练习把问题“说人话”。关键词给得越准，AI 越像你肚子里的蛔虫。"
    },
    {
      id: "dialogue",
      level: 3,
      shift: 10,
      tilt: -1.5,
      name: "对话演练",
      en: "Dialogue Lab",
      icon: "MessagesSquare",
      color: "#22d3ee",
      status: "done",
      stars: 2,
      score: 88,
      difficulty: "进阶",
      desc: "练习在问答中把需求说清楚，并用追问让回答更具体。",
      objective: "本关目标：识别好提示词要素，学会高质量追问。",
      humor: "回答太笼统？别客气，直接要求它“举例子、给格式、列步骤”。",
      opening: "第三关开始上强度。记住：好答案往往是被追问出来的。"
    },
    {
      id: "create",
      level: 4,
      shift: 38,
      tilt: 2.5,
      name: "内容创作",
      en: "Content Studio",
      icon: "PenLine",
      color: "#9b6cff",
      status: "done",
      stars: 3,
      score: 93,
      difficulty: "熟练",
      desc: "综合运用提示词技巧生成结构完整、有亮点的内容。",
      objective: "本关目标：组合角色、示例与格式，产出完整内容。",
      humor: "你已不是新手村的人，AI 看了你的提示词都想鼓掌。",
      opening: "第四关，把前面的技巧组装起来。这一关打完，你的提示词已经有“体系感”了。"
    },
    {
      id: "data",
      level: 5,
      shift: 6,
      tilt: -2.5,
      name: "数据分析",
      en: "Data Insight",
      icon: "ChartColumn",
      color: "#5b6cf6",
      status: "active",
      stars: 1,
      score: 75,
      difficulty: "挑战",
      desc: "把业务问题拆成指标、比较维度与可视化思路。",
      objective: "本关目标：用指标、对比和趋势把“分析一下”升级成专业问题。",
      humor: "把“分析一下”换成“对比、占比、趋势”，分数会自己涨上来。",
      opening: "第五关，数据不会说谎，但提示词会。写清楚指标，AI 才敢给你靠谱结论。"
    },
    {
      id: "tools",
      level: 6,
      shift: 26,
      tilt: 1.5,
      name: "工具工坊",
      en: "Tool Workshop",
      icon: "Wrench",
      color: "#ff6b7a",
      status: "todo",
      stars: 0,
      score: 0,
      difficulty: "巅峰",
      desc: "综合运用全部技巧，完成一份可直接执行的方案。",
      objective: "本关目标：给出完整、结构化、可直接执行的方案提示词。",
      humor: "先深呼吸，再写提示词。写完记得检查：角色、目标、格式都齐了吗？",
      opening: "最后一关，通关之后你就是六边形战士。我会在终点等你，别让我等太久。"
    }
  ];

  var REPORT_NAMES = ["提示词", "检索", "对话", "创作", "数据", "工具"];
  var REPORT_COLORS = ["#0ecf8e", "#ff9f43", "#22d3ee", "#9b6cff", "#5b6cf6", "#ff6b7a"];
  var QUESTION_DIFFICULTY = {
    q1: 1, q2: 2, q3: 1, q4: 2, q5: 1, q6: 2,
    q7: 1, q8: 2, q9: 2, q10: 2, q11: 2, q12: 2,
    q13: 3, q14: 3, q15: 3, q16: 3, q17: 3, q18: 3,
    q19: 1, q20: 2, q21: 1, q22: 2, q23: 2, q24: 3
  };

  var HISTORY_SEED = [
    {
      id: "h1",
      date: "2026-05-18",
      title: "AI 能力测评 · 第一轮",
      rating: "B",
      stars: 9,
      scores: [66, 64, 70, 68, 60, 62],
      note: "首次测评整体偏基础，数据分析与工具工坊是主要短板。"
    },
    {
      id: "h2",
      date: "2026-06-12",
      title: "AI 能力测评 · 第二轮",
      rating: "B+",
      stars: 12,
      scores: [72, 68, 76, 74, 66, 70],
      note: "提示词与内容创作提升明显，继续巩固检索和数据表达。"
    },
    {
      id: "h3",
      date: "2026-07-08",
      title: "AI 能力测评 · 第三轮",
      rating: "B+",
      stars: 14,
      scores: [80, 74, 82, 86, 72, 76],
      note: "六维能力更均衡，距离 A 级还差数据分析和工具工坊的持续突破。"
    }
  ];

  var SELF_ASSESS = [
    {
      text: "你之前使用过哪些 AI 工具？",
      options: ["几乎没接触过", "用过 1-2 个，会基础提问", "经常使用，能写出较完整的提示词"],
      weights: [0, 1, 2]
    },
    {
      text: "面对一项不熟悉的任务，你通常会？",
      options: ["直接交给 AI 随便生成", "简单描述需求后看结果", "先拆目标、给角色、定格式再让 AI 生成"],
      weights: [0, 1, 2]
    },
    {
      text: "你更希望本次测评从什么难度开始？",
      options: ["从最简单开始", "正常难度即可", "直接挑战更高难度"],
      weights: [0, 1, 2]
    }
  ];

  var SAFETY_WORDS = ["赌博", "暴力", "违法", "诈骗", "色情", "自杀", "毒品", "黑客攻击"];

  function safetyCheck(text) {
    var value = String(text || "").toLowerCase();
    return SAFETY_WORDS.some(function (w) {
      return value.indexOf(w) >= 0;
    });
  }

  var AVATARS = [
    { id: "sage", hair: "#241d52", skin: "#f6cfae", shirt: "#5b6cf6", accent: "#22d3ee" },
    { id: "ember", hair: "#4b2a1d", skin: "#f0c8a0", shirt: "#ff6b7a", accent: "#ffd166" },
    { id: "mint", hair: "#123c3a", skin: "#f6cfae", shirt: "#0ecf8e", accent: "#b9f5de" },
    { id: "violet", hair: "#3a1d56", skin: "#f3d3b8", shirt: "#9b6cff", accent: "#ffd166" }
  ];

  var QUESTIONS = [
    {
      id: "q1",
      levelId: "prompt",
      type: "single",
      text: "以下哪个提示词更容易获得稳定、结构化的输出？",
      options: ["给我写点东西", "写一篇关于 AI 的短文，先给结论，再分 3 个要点", "随便写写"],
      answer: 1,
      explanation: "限定结构与要点数量，能让输出更可控、更符合预期。"
    },
    {
      id: "q2",
      levelId: "prompt",
      type: "multi",
      text: "下列哪些是高质量提示词的常见要素？",
      options: ["明确角色", "给出示例", "限定输出格式", "字数越少越好"],
      answer: [0, 1, 2],
      explanation: "角色、示例与格式都能提升生成质量；简单粗暴地压缩字数并不等于高效。"
    },
    {
      id: "q3",
      levelId: "search",
      type: "judge",
      text: "提示词越长，生成结果一定越好。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "信息冗余和模糊描述反而可能降低输出质量，关键是清晰与相关。"
    },
    {
      id: "q4",
      levelId: "search",
      type: "fill",
      text: "请补全：把复杂任务拆解为多个______的小步骤，有助于提升生成质量。",
      fillAnswers: ["简单", "清晰", "具体", "明确", "小"],
      explanation: "拆解为清晰、可执行的小步骤，是提示词工程的重要方法。"
    },
    {
      id: "q5",
      levelId: "dialogue",
      type: "single",
      text: "要生成一份学习计划，最合理的开场是？",
      options: ["给我一个计划", "你是一名学习规划师，帮我制定一周计划，包含每天 2 个任务", "计划随便就行"],
      answer: 1,
      explanation: "赋予角色并说明目标、周期与任务数量，输出会更贴合需求。"
    },
    {
      id: "q6",
      levelId: "dialogue",
      type: "multi",
      text: "当 AI 回答过泛时，适合用哪些方式追问？",
      options: ["要求举具体例子", "限定输出为表格", "增加背景信息", "不做任何修改重复提问"],
      answer: [0, 1, 2],
      explanation: "补充背景、限定格式、要求示例，都能让回答更具体。"
    },
    {
      id: "q7",
      levelId: "create",
      type: "judge",
      text: "在对话式测评中，先说明自己的身份和需求，会让 AI 更理解你。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "清晰的上下文能帮助 AI 理解立场与目标。"
    },
    {
      id: "q8",
      levelId: "create",
      type: "fill",
      text: "请补全：使用“请用______的方式输出”可以约束回答结构。",
      fillAnswers: ["表格", "列表", "分点", "结构化", "步骤"],
      explanation: "格式约束是提示词工程里的常用技巧，能显著提升可用性。"
    },
    {
      id: "q9",
      levelId: "data",
      type: "single",
      text: "要比较两个 AI 方案，最合适的提示词是？",
      options: ["哪个更好", "请从成本、效果、上手难度三个维度对比，并给出适用场景", "随便选一个"],
      answer: 1,
      explanation: "给出比较维度与适用场景，AI 才能给出可决策的分析。"
    },
    {
      id: "q10",
      levelId: "data",
      type: "multi",
      text: "分析数据时，适合让 AI 输出的内容包括？",
      options: ["关键指标", "趋势变化", "异常原因假设", "只给一个结论"],
      answer: [0, 1, 2],
      explanation: "指标、趋势和原因假设能帮助形成完整分析，单一结论往往缺少证据。"
    },
    {
      id: "q11",
      levelId: "tools",
      type: "judge",
      text: "实操任务中，记录提示词迭代过程能提高产物质量。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "迭代记录能帮你发现哪些修改有效，是提高产物质量的关键习惯。"
    },
    {
      id: "q12",
      levelId: "tools",
      type: "fill",
      text: "请补全：提交实操产物前，应确认输出符合______要求。",
      fillAnswers: ["格式", "任务", "评分", "质量", "要求"],
      explanation: "提交前对照任务与格式要求检查，是实操任务的最后一道工序。"
    },
    {
      id: "q13",
      levelId: "prompt",
      type: "scene",
      scenario: "班主任请你用 AI 设计一节 40 分钟班会的开场环节。",
      text: "结合情景选择最能获得可执行方案的提问：",
      options: ["给我设计一个班会开场", "你是一名有经验的班主任，请为 40 分钟班会设计开场环节，并给出时间安排", "写个班会开场白"],
      answer: 1,
      explanation: "给出角色、时长与内容边界后，AI 才能输出可执行的方案。"
    },
    {
      id: "q14",
      levelId: "search",
      type: "sort",
      text: "请把“检索一份近三年的 AI 教育研究论文”拆成合理步骤，按顺序排列：",
      options: ["限定来源与时间范围", "提取核心关键词", "整理成摘要与结论", "先明确信息用途"],
      answer: [3, 1, 0, 2],
      explanation: "先明确用途，再提取关键词，限定来源与时间，最后整理输出。"
    },
    {
      id: "q15",
      levelId: "dialogue",
      type: "scene",
      scenario: "小组讨论结束后，大家想请 AI 帮忙梳理观点。",
      text: "选择最能引导 AI 给出结构化讨论纪要的提问：",
      options: ["帮我把讨论整理一下", "请把讨论按观点、依据、待定问题三类整理，并标出分歧点", "随便总结下"],
      answer: 1,
      explanation: "给 AI 明确的分类维度，输出才适合直接用于讨论复盘。"
    },
    {
      id: "q16",
      levelId: "create",
      type: "sort",
      text: "用 AI 创作一篇公众号推文，合理的流程顺序是：",
      options: ["补充示例与语气要求", "确定主题和读者", "列出大纲并完善细节", "检查开头和结尾"],
      answer: [1, 2, 0, 3],
      explanation: "先定主题读者，再列大纲，补充示例，最后检查关键位置。"
    },
    {
      id: "q17",
      levelId: "data",
      type: "scene",
      scenario: "你拿到一份全班成绩表，想请 AI 分析。",
      text: "以下哪种提问最有助于获得可解释的分析？",
      options: ["看看哪里有问题", "请从平均分、及格率、分数段分布三个角度分析，并用表格输出结论与建议", "分析一下"],
      answer: 1,
      explanation: "明确指标与输出格式，AI 的分析才具有可比性和可执行性。"
    },
    {
      id: "q18",
      levelId: "tools",
      type: "sort",
      text: "完成实操任务时，把下面的步骤按正确顺序排列：",
      options: ["提交最终产物", "运行并检查生成结果", "写下角色、目标与格式", "根据反馈迭代提示词"],
      answer: [2, 1, 3, 0],
      explanation: "先写清提示词要素，再运行检查，迭代优化后提交，形成完整闭环。"
    },
    {
      id: "q19",
      levelId: "prompt",
      type: "fill",
      text: "请补全：高质量提示词通常包含角色、目标和______。",
      fillAnswers: ["格式", "要求", "边界", "输出", "背景"],
      explanation: "明确输出格式能让结果更稳定，也方便后续检查。"
    },
    {
      id: "q20",
      levelId: "search",
      type: "judge",
      text: "检索资料时，先明确信息用途再提取关键词会更高效。",
      options: ["正确", "错误"],
      answer: 0,
      explanation: "用途决定关键词、来源和筛选标准，能减少无效结果。"
    },
    {
      id: "q21",
      levelId: "dialogue",
      type: "single",
      text: "AI 给出的回答缺少关键背景时，最好的做法是？",
      options: ["原样重复问题", "补充上下文并说明需要的结论形式", "直接放弃提问"],
      answer: 1,
      explanation: "补充上下文并说明用途，AI 才能生成更贴合需求的回答。"
    },
    {
      id: "q22",
      levelId: "create",
      type: "fill",
      text: "请补全：创作类提示词应先说明读者、主题和______。",
      fillAnswers: ["语气", "风格", "用途", "结构", "要求"],
      explanation: "读者、主题和语气一致时，生成内容更容易直接使用。"
    },
    {
      id: "q23",
      levelId: "data",
      type: "judge",
      text: "让 AI 分析数据时，只要求“看看”也能得到可靠结论。",
      options: ["正确", "错误"],
      answer: 1,
      explanation: "应先指定指标、对比维度和输出格式，结论才有依据。"
    },
    {
      id: "q24",
      levelId: "tools",
      type: "single",
      text: "实操提示词第一次运行效果不佳，下一步应该？",
      options: ["直接提交", "记录问题并补充角色、格式与验收标准", "换个完全无关的任务"],
      answer: 1,
      explanation: "基于运行结果做针对性迭代，才能形成可复用的提示词经验。"
    }
  ];

  var CHAT_SCRIPT = [
    {
      ask: "你好，我是灵犀。今天我们聊聊如何让 AI 帮你学习。你最想先提升哪项能力？",
      replies: ["提示词工程", "数据分析", "内容创作", "学习规划"],
      keywords: null
    },
    {
      ask: "很好。如果让你把这件事交给 AI，你会怎么开口？试试说清角色、目标和输出格式。",
      replies: ["你是一名学习规划师，帮我制定一周计划", "帮我整理资料，输出成表格", "随便给我点建议"],
      keywords: ["角色", "规划", "表格", "目标", "一周", "整理"]
    },
    {
      ask: "不错，需求已经清晰很多。如果 AI 的回答太笼统，你会怎么追问？",
      replies: ["请再具体一点，给出例子", "请按步骤列出", "请用表格对比"],
      keywords: ["具体", "例子", "步骤", "表格", "细化", "详细"]
    },
    {
      ask: "最后一步：你愿意每天花多少时间练习 AI 技能？",
      replies: ["15 分钟", "30 分钟", "60 分钟"],
      keywords: null
    },
    {
      ask: "收到！你的表达清晰、会追问、也愿意投入时间。本轮对话测评完成，给你 2 颗星，继续加油！",
      replies: ["好的，完成对话"],
      keywords: null,
      final: true
    }
  ];

  var TUTORIAL = [
    {
      icon: "Compass",
      color: "#5b6cf6",
      title: "欢迎来到闯关之旅",
      text: "六道关卡难度逐级上升，从入门一路打到巅峰，全部通关后解锁完整能力报告。",
      points: ["六关覆盖提示词、检索、对话、创作、数据与工具", "难度从入门、基础、进阶一路提升到挑战、巅峰", "进度实时保存，随时可以回来继续闯关"]
    },
    {
      icon: "ListChecks",
      color: "#0ecf8e",
      title: "闯关玩法：客观题测评",
      text: "每一关就是一次客观题测评，是闯关的核心玩法。",
      points: ["题型覆盖单选、多选、判断、填空、情景选择与排序", "每关 3-4 道题，答完立即结算星星", "答对继续、答错下降，动态定位你的能力水平"]
    },
    {
      icon: "MessageCircle",
      color: "#22d3ee",
      title: "对话式测评",
      text: "除了闯关，你还可以在聊天窗口里与 NPC 灵犀对话，练习把需求说清楚。",
      points: ["完成 2-4 轮自然对话", "支持快捷回复与关键词回应", "重点练习表达需求和追问技巧"]
    },
    {
      icon: "Terminal",
      color: "#ff6b7a",
      title: "实操任务",
      text: "在 AI 生成终端中完成真实感任务：写提示词、运行生成、迭代并提交产物。",
      points: ["输入提示词并运行 AI 生成", "记录每一次迭代修改", "提交产物后获得评分与反馈"]
    },
    {
      icon: "Star",
      color: "#ffd166",
      title: "星星与能力报告",
      text: "每关最高 3 颗星，六关共 18 颗星。完成后生成属于你的六维能力报告。",
      points: ["六维雷达图与综合评级", "各维度得分与个性化学习建议", "报告支持导出为图片或 PDF"]
    },
    {
      icon: "TrendingUp",
      color: "#ff9f43",
      title: "成长对比，突破自己",
      text: "复测后你会看到与上次结果的对比，突破历史最高分还会触发鼓励动效。",
      points: ["维度得分变化与评级变化", "多次测评成长曲线", "新解锁成就与突破提示"]
    }
  ];

  var NPC_ENDING =
    "六关全部通关，掌声先给你！你已经从“提示词新手”进化成了六边形战士。休息一下，记得去学习分析看看你的专属报告，下次回来我们冲击满星。";

  var state = {
    view: "stations",
    nickname: "",
    avatarId: "sage",
    tutorialDone: false,
    history: [],
    selfAssess: {
      done: false,
      level: "",
      answers: {}
    },
    quiz: {
      current: 0,
      questionIds: [],
      answers: {},
      selected: {},
      seconds: 120,
      timerId: null,
      started: false,
      currentLevel: null,
      flags: [],
      leaveCount: 0,
      startedAt: 0,
      diff: 2
    },
    chat: {
      round: 0,
      busy: false,
      hits: 0
    },
    practical: {
      runs: 0,
      submitted: false,
      lastOutput: "",
      versions: []
    }
  };

  var toastTimer = null;
  var pendingLevelId = null;
  var SESSION_TTL = 48 * 60 * 60 * 1000;

  function loadSaved() {
    try {
      state.nickname = localStorage.getItem("ai-student-nickname") || "探险者";
      state.avatarId = localStorage.getItem("ai-student-avatar") || "sage";
      state.tutorialDone = localStorage.getItem("ai-student-tutorial") === "1";
    } catch (e) {
      state.nickname = "探险者";
    }
    loadProgress();
    loadHistory();
    loadSelfAssess();
    loadPractical();
  }

  function saveProfile() {
    try {
      localStorage.setItem("ai-student-nickname", state.nickname);
      localStorage.setItem("ai-student-avatar", state.avatarId);
    } catch (e) {
      /* ignore */
    }
  }

  function ratingFor(avg) {
    return avg >= 90 ? "A" : avg >= 80 ? "A-" : avg >= 70 ? "B+" : avg >= 60 ? "B" : "C";
  }

  function loadProgress() {
    try {
      var raw = localStorage.getItem("ai-student-progress");
      if (raw) {
        var saved = JSON.parse(raw);
        STATIONS.forEach(function (s) {
          var item = saved[s.id];
          if (item) {
            s.status = item.status || s.status;
            s.stars = Number(item.stars) || s.stars;
            s.score = Number(item.score) || s.score;
          }
        });
      }
    } catch (e) {
      /* ignore */
    }
  }

  function saveProgress() {
    try {
      var data = {};
      STATIONS.forEach(function (s) {
        data[s.id] = { status: s.status, stars: s.stars, score: s.score };
      });
      localStorage.setItem("ai-student-progress", JSON.stringify(data));
    } catch (e) {
      /* ignore */
    }
  }

  function loadPractical() {
    try {
      var raw = localStorage.getItem("ai-student-practical");
      if (!raw) return;
      var saved = JSON.parse(raw);
      state.practical.runs = Number(saved.runs) || 0;
      state.practical.submitted = !!saved.submitted;
      state.practical.lastOutput = saved.lastOutput || "";
      state.practical.versions = Array.isArray(saved.versions) ? saved.versions : [];
    } catch (e) {
      /* keep the in-memory default */
    }
  }

  function savePractical() {
    try {
      localStorage.setItem("ai-student-practical", JSON.stringify(state.practical));
    } catch (e) {
      /* ignore */
    }
  }

  function saveQuizSession() {
    if (!state.quiz.currentLevel || !state.quiz.started) return;
    try {
      localStorage.setItem("ai-student-quiz-session", JSON.stringify({
        currentLevel: state.quiz.currentLevel,
        current: state.quiz.current,
        questionIds: state.quiz.questionIds,
        answers: state.quiz.answers,
        selected: state.quiz.selected,
        seconds: state.quiz.seconds,
        leaveCount: state.quiz.leaveCount,
        flags: state.quiz.flags,
        startedAt: state.quiz.startedAt,
        diff: state.quiz.diff,
        savedAt: Date.now()
      }));
    } catch (e) {
      /* ignore */
    }
  }

  function loadQuizSession() {
    try {
      var raw = localStorage.getItem("ai-student-quiz-session");
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data.currentLevel || !data.answers || !data.selected || !Array.isArray(data.questionIds)) return null;
      if (Date.now() - (Number(data.savedAt) || 0) > SESSION_TTL) {
        clearQuizSession();
        return null;
      }
      return data;
    } catch (e) {
      return null;
    }
  }

  function clearQuizSession() {
    try {
      localStorage.removeItem("ai-student-quiz-session");
    } catch (e) {
      /* ignore */
    }
  }

  function loadHistory() {
    try {
      var raw = localStorage.getItem("ai-student-history");
      if (raw) state.history = JSON.parse(raw);
    } catch (e) {
      /* ignore */
    }
    if (!Array.isArray(state.history) || !state.history.length) {
      state.history = HISTORY_SEED.slice();
    }
  }

  function saveHistory() {
    try {
      localStorage.setItem("ai-student-history", JSON.stringify(state.history));
    } catch (e) {
      /* ignore */
    }
  }

  function addHistory(title, scores, stars, note) {
    var now = new Date();
    var pad = function (n) {
      return String(n).padStart(2, "0");
    };
    var avg = Math.round(scores.reduce(function (sum, v) {
      return sum + v;
    }, 0) / Math.max(scores.length, 1));
    state.history.unshift({
      id: "h" + Date.now(),
      date: now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate()),
      title: title,
      rating: ratingFor(avg),
      stars: stars,
      scores: scores.slice(),
      note: note || "本轮测评完成，六维能力详情见下方雷达图。"
    });
    saveHistory();
  }

  function loadSelfAssess() {
    try {
      var raw = localStorage.getItem("ai-student-selfassess");
      if (raw) {
        var data = JSON.parse(raw);
        state.selfAssess = { done: !!data.done, level: data.level || "" };
      }
    } catch (e) {
      /* ignore */
    }
  }

  function saveSelfAssess() {
    try {
      localStorage.setItem("ai-student-selfassess", JSON.stringify(state.selfAssess));
    } catch (e) {
      /* ignore */
    }
  }

  function avatarSvg(id) {
    var a = AVATARS.filter(function (item) {
      return item.id === id;
    })[0] || AVATARS[0];
    return (
      '<svg viewBox="0 0 80 80" role="img" aria-label="头像">' +
      '<rect width="80" height="80" fill="' + a.shirt + '"/>' +
      '<circle cx="40" cy="58" r="16" fill="' + a.shirt + '"/>' +
      '<circle cx="40" cy="30" r="17" fill="' + a.skin + '"/>' +
      '<path d="M23 28c0-10 7-16 17-16s17 6 17 16v-3c0-9-7-14-17-14s-17 5-17 14z" fill="' + a.hair + '"/>' +
      '<path d="M40 13l-3-8" stroke="' + a.hair + '" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="38" cy="4" r="3" fill="' + a.accent + '"/>' +
      '<circle cx="34" cy="31" r="2.4" fill="#211b4a"/>' +
      '<circle cx="46" cy="31" r="2.4" fill="#211b4a"/>' +
      '<circle cx="35" cy="30" r="0.9" fill="#ffffff"/>' +
      '<circle cx="47" cy="30" r="0.9" fill="#ffffff"/>' +
      '<path d="M36 38c2.5 2.5 5.5 2.5 8 0" stroke="#8a5136" stroke-width="1.8" stroke-linecap="round" fill="none"/>' +
      '<circle cx="40" cy="58" r="3" fill="' + a.accent + '"/>' +
      '<path d="M26 50l-8 2M54 50l8 2" stroke="' + a.accent + '" stroke-width="3" stroke-linecap="round"/>' +
      "</svg>"
    );
  }

  function setAvatarInto(holder) {
    holder.innerHTML = avatarSvg(state.avatarId);
  }

  function applyProfile() {
    document.getElementById("headerNickname").textContent = state.nickname;
    setAvatarInto(document.getElementById("headerAvatar"));
  }

  function statusText(status) {
    return status === "done" ? "已完成" : status === "active" ? "进行中" : "未开始";
  }

  function starsMarkup(earned, total) {
    var html = "";
    for (var i = 0; i < total; i++) {
      html += '<span class="' + (i < earned ? "" : "off ") + 'star">' + icon("Star") + "</span>";
    }
    return html;
  }

  function renderStations() {
    var grid = document.getElementById("stationGrid");
    grid.innerHTML = STATIONS.map(function (s) {
      return (
        '<button class="station-card ' + s.status + (s.status === "active" ? " is-active" : "") + '" type="button" data-station="' + s.id + '" style="--station:' + s.color + ';--shift:' + (s.shift || 0) + 'px;--tilt:' + (s.tilt || 0) + 'deg">' +
        '<div class="station-top">' +
        '<span class="station-icon">' + icon(s.icon) + "</span>" +
        '<span class="station-status ' + s.status + '">' + statusText(s.status) + "</span>" +
        "</div>" +
        '<span class="station-level">' +
        '<span class="level-num">第 ' + s.level + " 关</span>" +
        '<span class="difficulty-badge">' + s.difficulty + "</span>" +
        "</span>" +
        '<span class="station-name">' + s.name + "</span>" +
        '<span class="station-en">' + s.en + "</span>" +
        '<div class="station-foot">' +
        '<span class="station-stars">' + starsMarkup(s.stars, 3) + "</span>" +
        '<span class="station-score">' + (s.score ? "<b>" + s.score + "</b> 分" : "待测评") + "</span>" +
        "</div>" +
        "</button>"
      );
    }).join("");
    updateHeaderStars();
    renderLevelStartBar();
    renderRetestGoal();
  }

  function renderLevelStartBar() {
    var badge = document.getElementById("nextLevelBadge");
    var name = document.getElementById("nextLevelName");
    var meta = document.getElementById("nextLevelMeta");
    var bar = document.getElementById("levelStartBar");
    var btnLabel = document.querySelector("#bottomStartLevelBtn span:last-child");
    var next = STATIONS.filter(function (s) {
      return s.status !== "done";
    })[0];
    if (!next) {
      badge.textContent = "全部通关";
      badge.style.background = "rgba(255,209,102,.18)";
      badge.style.color = "#ffe2a8";
      name.textContent = "六关全部通关";
      meta.textContent = "去看看学习分析吧";
      btnLabel.textContent = "查看报告";
      bar.dataset.allDone = "1";
    } else {
      badge.textContent = "下一关";
      badge.style.background = "";
      badge.style.color = "";
      name.textContent = next.name;
      meta.textContent = "第 " + next.level + " 关 · " + next.difficulty;
      btnLabel.textContent = "开始闯关";
      bar.dataset.allDone = "";
    }
  }

  function renderRetestGoal() {
    var el = document.getElementById("retestGoal");
    if (!el) return;
    if (!state.history.length) {
      el.hidden = true;
      return;
    }
    var last = state.history[0];
    var goal = last.rating === "A" ? "保持 A 级" : last.rating === "A-" ? "冲击 A 级" : last.rating === "B+" ? "冲击 A-" : "冲击 B+";
    var weakest = last.scores.map(function (score, i) {
      return { score: score, name: REPORT_NAMES[i] || "" };
    }).sort(function (a, b) {
      return a.score - b.score;
    }).slice(0, 2).map(function (d) {
      return d.name;
    });
    el.hidden = false;
    document.getElementById("retestGoalTitle").textContent = "上次测评：" + last.rating + " · " + last.stars + " 星";
    document.getElementById("retestGoalText").textContent = "本次目标：" + goal + "，重点突破" + weakest.join("与") + "。";
  }

  function updateHeaderStars() {
    var total = 0;
    STATIONS.forEach(function (s) {
      total += s.stars;
    });
    document.getElementById("headerStars").textContent = total + " / 18";
    document.getElementById("sideProgressText").textContent = total + " / 18";
    document.getElementById("sideProgressBar").style.width = Math.round((total / 18) * 100) + "%";
    var report = currentReport();
    document.querySelector(".overall-rating").textContent = "综合评级 " + ratingFor(reportAverage(report));
    document.getElementById("sideLevelDots").innerHTML = STATIONS.map(function (s) {
      return '<span class="side-level-dot ' + (s.status === "done" ? "done" : s.status === "active" ? "active" : "") + '"></span>';
    }).join("");
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
    if (id === "quizModal") {
      stopQuizTimer();
      saveQuizSession();
    }
    el.classList.remove("open");
    setTimeout(function () {
      el.hidden = true;
    }, 380);
  }

  function showToast(message) {
    var el = document.getElementById("toast");
    el.textContent = message;
    el.classList.add("open");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("open");
    }, 2600);
  }

  function openStationModal(id) {
    var s = STATIONS.filter(function (item) {
      return item.id === id;
    })[0];
    if (!s) return;
    var body = document.getElementById("stationModalBody");
    body.innerHTML =
      '<div class="station-modal-body">' +
      '<div class="station-modal-head">' +
      '<span class="station-modal-icon" style="--station:' + s.color + '">' + icon(s.icon) + "</span>" +
      "<div>" +
      "<h3>第 " + s.level + " 关 · " + s.name + "</h3>" +
      "<p>" + s.en + " · " + statusText(s.status) + " · <span class='difficulty-badge'>" + s.difficulty + "</span></p>" +
      "</div>" +
      "</div>" +
      '<p class="station-modal-desc">' + s.desc + "</p>" +
      '<p class="station-humor">' + icon("Sparkles") + " " + s.humor + "</p>" +
      '<p class="station-objective">' + s.objective + "</p>" +
      '<div class="score-grid">' +
      '<div class="score-cell"><b>' + (s.score ? s.score : "-") + "</b><span>当前得分</span></div>" +
      '<div class="score-cell"><b>' + s.stars + " / 3</b><span>获得星星</span></div>" +
      '<div class="score-cell"><b>' + (s.status === "done" ? "2 次" : s.status === "active" ? "1 次" : "0 次") + "</b><span>挑战次数</span></div>" +
      "</div>" +
      '<div class="station-modal-stars">' + starsMarkup(s.stars, 3) + "</div>" +
      '<button class="btn ghost full" type="button" id="stationModalKnowBtn">' +
      icon("CircleCheck") + "<span>知道了</span>" +
      "</button>" +
      "</div>";
    openModal("stationModal");
    document.getElementById("stationModalKnowBtn").addEventListener("click", function () {
      closeModal("stationModal");
    });
  }

  function startLevel(id) {
    var s = STATIONS.filter(function (item) {
      return item.id === id;
    })[0];
    if (!s) return;
    if (!state.selfAssess.done) {
      pendingLevelId = id;
      openSelfAssess();
      return;
    }
    state.quiz.currentLevel = id;
    document.getElementById("npcModalAvatar").innerHTML = icon("Bot");
    document.getElementById("npcBubbleText").textContent = s.opening;
    document.getElementById("npcModalMeta").innerHTML =
      "第 " + s.level + " 关 · " + s.name + " · 难度 " + s.difficulty + "<br>" + s.objective;
    document.getElementById("quizModalTitle").textContent = "第 " + s.level + " 关 · " + s.name;
    document.getElementById("quizIntro").hidden = false;
    document.getElementById("quizContent").hidden = true;
    openModal("quizModal");
  }

  function beginLevelQuiz() {
    state.quiz.current = 0;
    state.quiz.questionIds = [];
    state.quiz.answers = {};
    state.quiz.selected = {};
    state.quiz.seconds = 120;
    state.quiz.flags = [];
    state.quiz.leaveCount = 0;
    state.quiz.startedAt = Date.now();
    state.quiz.diff = state.selfAssess.level === "入门" ? 1 : state.selfAssess.level === "进阶" ? 3 : 2;
    state.quiz.started = true;
    var first = selectQuestion(state.quiz.currentLevel, state.quiz.diff, []);
    if (!first) {
      showToast("本关题库暂未配置，请联系教师补充题目");
      return;
    }
    state.quiz.questionIds = [first.id];
    clearQuizSession();
    document.getElementById("quizIntro").hidden = true;
    document.getElementById("quizContent").hidden = false;
    renderQuestion();
    startQuizTimer();
    saveQuizSession();
  }

  function openQuizModal() {
    var station = currentLevelStation();
    document.getElementById("quizModalTitle").textContent = "第 " + station.level + " 关 · " + station.name;
    document.getElementById("quizIntro").hidden = false;
    document.getElementById("quizContent").hidden = true;
    openModal("quizModal");
  }

  function startNextLevel() {
    var next = STATIONS.filter(function (s) {
      return s.status !== "done";
    })[0];
    if (!next) {
      showToast("六关已全部通关，去看看学习分析吧");
      var ending = document.getElementById("npcEnding");
      ending.hidden = false;
      document.getElementById("npcEndingText").textContent = NPC_ENDING;
      openResult("全部通关", "六关全部完成，你的能力报告已经刷新。", 3);
      return;
    }
    startLevel(next.id);
  }

  function switchView(view) {
    state.view = view;
    var titles = {
      stations: ["六关挑战 · 难度递增", "闯关"],
      quiz: ["客观题测评 · 关卡进行中", "闯关关卡"],
      dialogue: ["对话式测评", "对话式测评"],
      practical: ["实操任务", "实操任务"],
      analysis: ["学习分析", "学习分析"],
      history: ["成长中心", "测评历史"]
    };
    var info = titles[view] || titles.stations;
    document.getElementById("pageKicker").textContent = info[0];
    document.getElementById("pageTitle").textContent = info[1];

    var navs = document.querySelectorAll(".nav-item");
    Array.prototype.forEach.call(navs, function (nav) {
      nav.classList.toggle("active", nav.getAttribute("data-view") === view);
    });

    var views = document.querySelectorAll(".view");
    Array.prototype.forEach.call(views, function (v) {
      v.classList.toggle("active", v.id === "view-" + view);
    });

    if (view === "quiz") {
      if (!state.quiz.currentLevel) {
        startNextLevel();
        return;
      }
      openQuizModal();
      return;
    } else {
      stopQuizTimer();
    }
    if (view === "stations") {
      renderLevelStartBar();
    }
    if (view === "dialogue" && state.chat.round === 0) {
      startChat();
    }
    if (view === "practical") {
      renderTerminalStart();
    }
    if (view === "analysis") {
      renderAnalysis();
    }
    if (view === "history") {
      renderHistory();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderTutorial() {
    var slides = document.getElementById("tutorialSlides");
    slides.innerHTML = TUTORIAL.map(function (t, i) {
      return (
        '<div class="tut-slide' + (i === 0 ? " active" : "") + '" style="--tut-color:' + t.color + '">' +
        '<div class="tut-slide-icon">' + icon(t.icon) + "</div>" +
        "<h3>" + t.title + "</h3>" +
        "<p>" + t.text + "</p>" +
        "<ul class='tut-points'>" +
        t.points.map(function (p) {
          return "<li>" + icon("CheckCircle2") + "<span>" + p + "</span></li>";
        }).join("") +
        "</ul>" +
        "</div>"
      );
    }).join("");
    renderTutorialDots(0);
  }

  function renderTutorialDots(index) {
    document.getElementById("tutDots").innerHTML = TUTORIAL.map(function (_, i) {
      return '<span class="tut-dot' + (i === index ? " active" : "") + '"></span>';
    }).join("");
    var slides = document.querySelectorAll(".tut-slide");
    Array.prototype.forEach.call(slides, function (slide, i) {
      slide.classList.toggle("active", i === index);
    });
    var next = document.getElementById("tutNext");
    next.querySelector("span").textContent = index === TUTORIAL.length - 1 ? "开始探索" : "下一步";
  }

  var tutorialIndex = 0;

  function openTutorial() {
    tutorialIndex = 0;
    renderTutorialDots(0);
    openModal("tutorialModal");
  }

  function finishTutorial() {
    state.tutorialDone = true;
    try {
      localStorage.setItem("ai-student-tutorial", "1");
    } catch (e) {
      /* ignore */
    }
    closeModal("tutorialModal");
    showToast("引导已完成，选择关卡开始闯关吧");
  }

  function openSelfAssess() {
    state.selfAssess.answers = {};
    renderSelfAssess();
    openModal("selfAssessModal");
  }

  function renderSelfAssess() {
    var body = document.getElementById("selfAssessBody");
    body.innerHTML = SELF_ASSESS.map(function (q, qi) {
      return (
        '<div class="self-question">' +
        '<p class="self-q-title">' + (qi + 1) + ". " + q.text + "</p>" +
        '<div class="self-options">' +
        q.options.map(function (opt, oi) {
          return '<button class="self-option" type="button" data-self="' + qi + "-" + oi + '"><span class="self-marker"></span><span>' + opt + "</span></button>";
        }).join("") +
        "</div></div>"
      );
    }).join("");
    Array.prototype.forEach.call(body.querySelectorAll(".self-option"), function (btn) {
      btn.addEventListener("click", function () {
        var parts = btn.getAttribute("data-self").split("-");
        var qi = Number(parts[0]);
        var oi = Number(parts[1]);
        state.selfAssess.answers[qi] = oi;
        Array.prototype.forEach.call(body.querySelectorAll('.self-option[data-self^="' + qi + '-"]'), function (opt) {
          opt.classList.toggle("selected", opt === btn);
        });
        var missing = SELF_ASSESS.some(function (_, i) {
          return state.selfAssess.answers[i] === undefined;
        });
        document.getElementById("selfAssessNext").disabled = missing;
      });
    });
    document.getElementById("selfAssessNext").disabled = true;
  }

  function submitSelfAssess() {
    var total = 0;
    SELF_ASSESS.forEach(function (q, i) {
      var oi = state.selfAssess.answers[i];
      if (oi !== undefined) total += q.weights[oi];
    });
    state.selfAssess.done = true;
    state.selfAssess.level = total <= 1 ? "入门" : total <= 3 ? "基础" : "进阶";
    saveSelfAssess();
    closeModal("selfAssessModal");
    showToast("自评完成，初始难度定位为" + state.selfAssess.level);
    if (pendingLevelId) {
      var id = pendingLevelId;
      pendingLevelId = null;
      startLevel(id);
    }
  }

  function skipSelfAssess() {
    state.selfAssess.done = true;
    state.selfAssess.level = "标准";
    saveSelfAssess();
    closeModal("selfAssessModal");
    if (pendingLevelId) {
      var id = pendingLevelId;
      pendingLevelId = null;
      startLevel(id);
    }
  }

  var QUIZ_LENGTH = 3;

  function questionDifficulty(q) {
    if (q.difficulty) return Number(q.difficulty) || 2;
    return QUESTION_DIFFICULTY[q.id] || 2;
  }

  function selectQuestion(levelId, difficulty, excludeIds) {
    var used = excludeIds || state.quiz.questionIds || [];
    return QUESTIONS.filter(function (q) {
      return q.levelId === levelId && used.indexOf(q.id) < 0;
    }).sort(function (a, b) {
      var da = Math.abs(questionDifficulty(a) - difficulty);
      var db = Math.abs(questionDifficulty(b) - difficulty);
      return da - db || questionDifficulty(a) - questionDifficulty(b);
    })[0];
  }

  function levelQuestions() {
    var ids = state.quiz.questionIds || [];
    return ids.map(function (id) {
      return QUESTIONS.filter(function (q) {
        return q.id === id;
      })[0];
    }).filter(Boolean);
  }

  function currentLevelStation() {
    return STATIONS.filter(function (s) {
      return s.id === state.quiz.currentLevel;
    })[0] || STATIONS[0];
  }

  function renderQuizSide() {
    var qs = levelQuestions();
    var station = currentLevelStation();
    document.getElementById("quizModalTitle").textContent = "第 " + station.level + " 关 · " + station.name;
    document.getElementById("quizProgressText").textContent = "第 " + station.level + " 关 · " + (state.quiz.current + 1) + " / " + QUIZ_LENGTH + " 题";
    document.getElementById("quizProgressBar").style.width = ((state.quiz.current + 1) / QUIZ_LENGTH) * 100 + "%";
    var diffLabels = ["入门", "基础", "进阶"];
    var diffEl = document.getElementById("quizDiffValue");
    if (diffEl) diffEl.textContent = "难度 Lv." + state.quiz.diff + " · " + diffLabels[state.quiz.diff - 1];
  }

  function renderQuestion() {
    var q = levelQuestions()[state.quiz.current];
    var station = currentLevelStation();
    var saved = state.quiz.answers[q.id];
    var selected = state.quiz.selected[q.id] || [];
    var html = "";

    var typeName = {
      single: "单选题",
      multi: "多选题",
      judge: "判断题",
      fill: "填空题",
      scene: "情景选择",
      sort: "排序题"
    }[q.type];

    html += '<div class="question-meta">';
    html += '<span class="question-type-badge ' + q.type + '">' + typeName + "</span>";
    html += '<span class="question-points">' + icon("Star") + " " + station.name + " · " + station.difficulty + "</span>";
    html += "</div>";
    if (q.type === "scene") {
      html += '<div class="scenario-box"><span class="scenario-icon">' + icon("Sparkles") + "</span><div><strong>情景</strong><p>" + q.scenario + "</p></div></div>";
    }
    html += '<p class="question-text">' + q.text + "</p>";

    if (q.type === "sort") {
      var sortOrder = selected.length === q.options.length ? selected.slice() : q.options.map(function (_, i) {
        return i;
      });
      html += '<div class="sort-board">';
      sortOrder.forEach(function (idx, pos) {
        var locked = saved && saved.status !== undefined;
        html +=
          '<div class="sort-item' + (locked ? " locked" : "") + '">' +
          '<span class="sort-pos">' + (pos + 1) + "</span>" +
          "<span>" + q.options[idx] + "</span>" +
          (locked
            ? ""
            : '<span class="sort-moves"><button type="button" data-sort-action="up" data-idx="' + pos + '" aria-label="上移">上移</button><button type="button" data-sort-action="down" data-idx="' + pos + '" aria-label="下移">下移</button></span>') +
          "</div>";
      });
      html += "</div>";
    } else if (q.type === "fill") {
      html +=
        '<input class="fill-input" id="fillAnswer" type="text" maxlength="30" placeholder="请输入答案"' +
        (saved && saved.status !== undefined ? " disabled" : "") + ' value="' + (saved ? esc(saved.value || "") : "") + '">';
    } else {
      html += '<div class="options">';
      html += q.options.map(function (opt, i) {
        var cls = "option";
        if (selected.indexOf(i) >= 0) cls += " selected";
        if (saved && saved.status !== undefined) {
          if (saved.correct) {
            if (selected.indexOf(i) >= 0) cls += " correct";
          } else if (i === q.answer || (Array.isArray(q.answer) && q.answer.indexOf(i) >= 0)) {
            cls += " correct";
          } else if (selected.indexOf(i) >= 0) {
            cls += " wrong";
          }
        }
        if (saved && saved.status !== undefined) cls += " locked";
        return (
          '<button class="' + cls + '" type="button" data-option="' + i + '"' +
          (saved && saved.status !== undefined ? " disabled" : "") + ">" +
          '<span class="option-marker">' + String.fromCharCode(65 + i) + "</span>" +
          "<span>" + opt + "</span>" +
          "</button>"
        );
      }).join("");
      html += "</div>";
    }

    if (saved && saved.status !== undefined) {
      html +=
        '<div class="feedback-box' + (saved.correct ? "" : " wrong") + '">' +
        '<div class="fb-label">' + icon(saved.correct ? "CircleCheck" : "AlertCircle") +
        "<span>" + (saved.correct ? "回答正确" : "回答错误") + "</span></div>" +
        "<span>" + q.explanation + "</span>" +
        "</div>";
      if (q.type === "sort" && !saved.correct) {
        html += '<div class="sort-correct">正确顺序：' + q.answer.map(function (i) {
          return String.fromCharCode(65 + i);
        }).join(" → ") + "</div>";
      }
    }

    document.getElementById("quizCard").innerHTML = html;
    renderQuizSide();
    bindQuestionEvents(q, saved);
  }

  function bindQuestionEvents(q, saved) {
    if (q.type === "fill") {
      return;
    }
    if (q.type === "sort") {
      var board = document.querySelector("#quizCard .sort-board");
      if (!board || (saved && saved.status !== undefined)) return;
      board.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-sort-action]");
        if (!btn) return;
        var pos = Number(btn.getAttribute("data-idx"));
        var action = btn.getAttribute("data-sort-action");
        var order = (state.quiz.selected[q.id] || []).slice();
        if (order.length !== q.options.length) {
          order = q.options.map(function (_, i) {
            return i;
          });
        }
        var target = action === "up" ? pos - 1 : pos + 1;
        if (target < 0 || target >= order.length) return;
        var tmp = order[pos];
        order[pos] = order[target];
        order[target] = tmp;
        state.quiz.selected[q.id] = order;
        renderQuestion();
      });
      return;
    }
    var options = document.querySelectorAll("#quizCard .option");
    Array.prototype.forEach.call(options, function (opt) {
      opt.addEventListener("click", function () {
        if (saved && saved.status !== undefined) return;
        var index = Number(opt.getAttribute("data-option"));
        if (q.type === "multi") {
          var selected = state.quiz.selected[q.id] || [];
          var pos = selected.indexOf(index);
          if (pos >= 0) {
            selected.splice(pos, 1);
          } else {
            selected.push(index);
          }
          state.quiz.selected[q.id] = selected;
          renderQuestion();
        } else {
          state.quiz.selected[q.id] = [index];
          submitAnswer(q, [index]);
        }
      });
    });
  }

  function submitAnswer(q, indexes) {
    var correct = false;
    if (q.type === "multi") {
      correct =
        indexes.length === q.answer.length &&
        q.answer.every(function (a) {
          return indexes.indexOf(a) >= 0;
        });
    } else if (q.type === "sort") {
      correct =
        indexes.length === q.answer.length &&
        q.answer.every(function (a, i) {
          return a === indexes[i];
        });
    } else {
      correct = indexes[0] === q.answer;
    }
    state.quiz.diff = Math.max(1, Math.min(3, state.quiz.diff + (correct ? 1 : -1)));
    state.quiz.answers[q.id] = {
      status: "done",
      correct: correct,
      value: q.type === "fill" ? indexes[0] : indexes,
      selected: indexes
    };
    saveQuizSession();
    renderQuestion();
  }

  function nextQuestion() {
    var qs = levelQuestions();
    var q = qs[state.quiz.current];
    if (!state.quiz.answers[q.id]) {
      if (q.type === "fill") {
        var input = document.getElementById("fillAnswer");
        var value = (input && input.value.trim()) || "";
        if (!value) {
          showToast("请先填写答案");
          return;
        }
        var correct = q.fillAnswers.some(function (key) {
          return value.indexOf(key) >= 0;
        });
        state.quiz.diff = Math.max(1, Math.min(3, state.quiz.diff + (correct ? 1 : -1)));
        state.quiz.answers[q.id] = {
          status: "done",
          correct: correct,
          value: value
        };
        renderQuestion();
      } else if (q.type === "sort") {
        var order = (state.quiz.selected[q.id] || []).slice();
        if (order.length !== q.options.length) {
          order = q.options.map(function (_, i) {
            return i;
          });
        }
        submitAnswer(q, order);
      } else if (q.type === "multi") {
        var selected = state.quiz.selected[q.id] || [];
        if (!selected.length) {
          showToast("请先选择答案");
          return;
        }
        submitAnswer(q, selected);
      } else {
        showToast("请先选择答案");
        return;
      }
    }
    if (state.quiz.current < qs.length - 1) {
      state.quiz.current += 1;
      renderQuestion();
    } else {
      var next = selectQuestion(state.quiz.currentLevel, state.quiz.diff);
      if (next && state.quiz.questionIds.length < QUIZ_LENGTH) {
        state.quiz.questionIds.push(next.id);
        state.quiz.current += 1;
        renderQuestion();
        saveQuizSession();
        return;
      }
      finishQuiz();
    }
  }

  function prevQuestion() {
    var qs = levelQuestions();
    if (state.quiz.current > 0 && qs.length) {
      state.quiz.current -= 1;
      renderQuestion();
    }
  }

  function startQuizTimer() {
    stopQuizTimer();
    if (state.quiz.seconds <= 0) state.quiz.seconds = 120;
    updateQuizTimer();
    state.quiz.timerId = setInterval(function () {
      state.quiz.seconds -= 1;
      updateQuizTimer();
      if (state.quiz.seconds <= 0) {
        stopQuizTimer();
        finishQuiz();
      }
    }, 1000);
  }

  function stopQuizTimer() {
    if (state.quiz.timerId) {
      clearInterval(state.quiz.timerId);
      state.quiz.timerId = null;
    }
  }

  function updateQuizTimer() {
    var m = Math.floor(state.quiz.seconds / 60);
    var s = state.quiz.seconds % 60;
    document.getElementById("quizTimerValue").textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function finishQuiz() {
    stopQuizTimer();
    state.quiz.started = false;
    closeModal("quizModal");
    var station = currentLevelStation();
    var qs = levelQuestions();
    var correct = 0;
    qs.forEach(function (q) {
      if (state.quiz.answers[q.id] && state.quiz.answers[q.id].correct) correct += 1;
    });
    var questionTotal = Math.max(Math.min(QUIZ_LENGTH, QUESTIONS.filter(function (q) {
      return q.levelId === station.id;
    }).length), 1);
    var score = Math.round((correct / questionTotal) * 100);
    var stars = score >= 90 ? 3 : score >= 70 ? 2 : score >= 50 ? 1 : 0;
    station.status = score >= 60 ? "done" : "active";
    station.score = Math.max(station.score, score);
    station.stars = Math.max(station.stars, stars);
    renderStations();
    saveProgress();
    clearQuizSession();
    var allDone = STATIONS.every(function (s) {
      return s.status === "done";
    });
    var totalStars = STATIONS.reduce(function (sum, s) {
      return sum + s.stars;
    }, 0);
    var title = allDone ? "AI 能力测评 · 完整通关" : "第 " + station.level + " 关完成";
    var note = allDone ? "六关全部完成，本轮完整能力报告已生成。" : "本关得分 " + score + " 分，获得 " + stars + " 颗星。";
    if (allDone) {
      addHistory("AI 能力测评 · 完整通关", STATIONS.map(function (s) {
        return s.score;
      }), totalStars, note);
    }
    var elapsed = (Date.now() - (state.quiz.startedAt || Date.now())) / 1000;
    if (elapsed < 8) {
      state.quiz.flags.push("作答用时过短");
    }
    var singleQuestions = qs.filter(function (q) {
      return q.type === "single" || q.type === "scene" || q.type === "judge";
    });
    var firstAnswers = singleQuestions.map(function (q) {
      var a = state.quiz.answers[q.id];
      return a && a.selected && a.selected.length ? a.selected[0] : null;
    });
    if (firstAnswers.length >= 3 && firstAnswers.every(function (v) {
      return v === firstAnswers[0];
    })) {
      state.quiz.flags.push("选项分布异常");
    }
    var resultText = "本关得分 " + score + " 分，" + station.name + " 的星星与状态已更新。";
    if (state.quiz.flags.length) {
      resultText += " 注意：系统检测到 " + state.quiz.flags.length + " 项异常记录，本关结果可能被标记。";
      showToast("检测到异常操作，本关结果已标记");
    }
    state.quiz.flags = [];
    state.quiz.leaveCount = 0;
    openResult(title, resultText, stars);
    if (allDone) {
      var ending = document.getElementById("npcEnding");
      ending.hidden = false;
      document.getElementById("npcEndingText").textContent = NPC_ENDING;
    }
  }

  function addBubble(role, text) {
    var body = document.getElementById("chatBody");
    var div = document.createElement("div");
    div.className = "bubble " + role;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
  }

  function renderQuick(replies) {
    var wrap = document.getElementById("quickReplies");
    if (!replies.length) {
      wrap.innerHTML = "";
      return;
    }
    wrap.innerHTML = replies.map(function (r, i) {
      return '<button class="quick-reply" type="button" data-reply="' + i + '">' + r + "</button>";
    }).join("");
    var buttons = wrap.querySelectorAll(".quick-reply");
    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener("click", function () {
        sendChat(btn.textContent);
      });
    });
  }

  function showTyping() {
    var body = document.getElementById("chatBody");
    var div = document.createElement("div");
    div.className = "typing-bubble";
    div.innerHTML = "<i></i><i></i><i></i>";
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
  }

  function startChat() {
    var body = document.getElementById("chatBody");
    body.innerHTML = "";
    state.chat.round = 0;
    state.chat.busy = false;
    state.chat.hits = 0;
    document.getElementById("roundBadge").textContent = "第 1 轮";
    addBubble("npc", CHAT_SCRIPT[0].ask);
    renderQuick(CHAT_SCRIPT[0].replies);
  }

  function chatReplyFor(round, text) {
    var script = CHAT_SCRIPT[round];
    if (script.keywords) {
      var hit = script.keywords.filter(function (k) {
        return text.indexOf(k) >= 0;
      });
      if (hit.length) {
        state.chat.hits += 1;
        return "关键词命中：“" + hit[0] + "”。你已经能把需求说具体，继续保持这种表达方式。";
      }
      return "我听到你的想法了。试试把角色、目标和输出格式一起说清楚，AI 会更容易给出可执行的方案。";
    }
    return "收到，我会记录你的选择。";
  }

  function sendChat(text) {
    if (!text.trim() || state.chat.busy) return;
    if (safetyCheck(text)) {
      showToast("内容安全过滤未通过，请修改后重试");
      return;
    }
    state.chat.busy = true;
    renderQuick([]);
    addBubble("user", text.trim());
    document.getElementById("chatInput").value = "";
    var round = state.chat.round;
    var typing = showTyping();
    setTimeout(function () {
      typing.remove();
      addBubble("npc", chatReplyFor(round, text.trim()));
      state.chat.round += 1;
      if (state.chat.round < CHAT_SCRIPT.length) {
        addBubble("npc", CHAT_SCRIPT[state.chat.round].ask);
        renderQuick(CHAT_SCRIPT[state.chat.round].replies);
        document.getElementById("roundBadge").textContent = "第 " + (state.chat.round + 1) + " 轮";
      } else {
        document.getElementById("roundBadge").textContent = "对话完成";
        var score = Math.min(94, 72 + state.chat.hits * 7);
        var stars = score >= 90 ? 3 : score >= 70 ? 2 : 1;
        var wasNew = stationWasNew("dialogue");
        var allDone = completeStationOutcome("dialogue", score, stars, wasNew);
        openResult(
          "对话式测评完成",
          "灵犀记录到 " + state.chat.hits + " 次有效表达，本站得分 " + score + " 分，获得 " + stars + " 颗星。" + (allDone ? "六站已完成，完整报告已刷新。" : ""),
          stars
        );
      }
      state.chat.busy = false;
    }, 850);
  }

  function renderTerminalStart() {
    var body = document.getElementById("terminalBody");
    if (!body.querySelector(".terminal-log")) {
      body.innerHTML = "";
      if (state.practical.versions.length) {
        appendTerminal("已恢复上次实操记录，可继续迭代提示词。", "terminal-log");
        state.practical.versions.forEach(function (item) {
          appendTerminal("> " + item.prompt, "terminal-prompt");
          appendTerminal(item.output, "terminal-out");
        });
      } else {
        appendTerminal("已连接到 AI 生成终端，请输入提示词开始实操任务。", "terminal-log");
      }
      document.getElementById("runCount").textContent = state.practical.runs + " 次运行";
    }
    if (state.practical.submitted) {
      document.getElementById("practicalResult").hidden = false;
      document.getElementById("practicalResultText").textContent = state.practical.lastOutput.split("\n\n质量评估")[0];
    }
  }

  function appendTerminal(text, cls) {
    var body = document.getElementById("terminalBody");
    var div = document.createElement("div");
    div.className = cls || "terminal-log";
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
  }

  function generateOutput(prompt) {
    var hasRole = /角色|策划|规划师|设计师|专家|班主任/.test(prompt);
    var hasFormat = /表格|列表|分点|步骤|格式|序号/.test(prompt);
    var hasGoal = /分享会|班会|活动|目标/.test(prompt);
    var base =
      "【班级 AI 工具分享会方案】\n" +
      "主题：让 AI 成为你的学习搭子\n" +
      "环节 1：开场演示，10 分钟，负责人：学习委员\n" +
      "环节 2：分组实操，25 分钟，负责人：各组组长\n" +
      "环节 3：成果快闪，10 分钟，负责人：班主任\n" +
      "准备：提前准备 3 个常用 AI 工具，打印操作提示卡。";
    var marks = [];
    if (hasGoal) marks.push("目标明确");
    if (hasRole) marks.push("角色清晰");
    if (hasFormat) marks.push("格式完整");
    var markText = marks.length ? marks.join("、") : "基础方案";
    return base + "\n\n质量评估：" + markText + "，建议补充每环节的具体产出物。";
  }

  function remoteGeneratorConfigured() {
    return Boolean(window.BAIBAOXIAO_API_URL);
  }

  async function requestGeneratedOutput(prompt) {
    if (!remoteGeneratorConfigured()) return generateOutput(prompt);
    var response = await fetch(window.BAIBAOXIAO_API_URL, {
      method: "POST",
      headers: Object.assign(
        { "Content-Type": "application/json" },
        window.BAIBAOXIAO_API_TOKEN ? { Authorization: "Bearer " + window.BAIBAOXIAO_API_TOKEN } : {}
      ),
      body: JSON.stringify({ prompt: prompt })
    });
    if (!response.ok) throw new Error("generator request failed");
    var data = await response.json();
    var output = data.output || (data.data && data.data.output) || data.result || data.text || "";
    output = String(output || "").trim();
    if (!output || safetyCheck(output)) throw new Error("invalid generator output");
    return output;
  }

  function stationWasNew(id) {
    var station = STATIONS.filter(function (s) {
      return s.id === id;
    })[0];
    return !station || station.status !== "done";
  }

  function completeStationOutcome(id, score, stars, allowHistory) {
    var station = STATIONS.filter(function (s) {
      return s.id === id;
    })[0];
    if (!station) return false;
    station.score = Math.max(station.score || 0, Math.round(score));
    station.stars = Math.min(3, Math.max(station.stars || 0, stars));
    station.status = station.score >= 60 ? "done" : "active";
    renderStations();
    saveProgress();
    var allDone = STATIONS.every(function (s) {
      return s.status === "done";
    });
    if (allDone && allowHistory) {
      addHistory("AI 能力测评 · 完整通关", STATIONS.map(function (s) {
        return s.score;
      }), STATIONS.reduce(function (sum, s) { return sum + s.stars; }, 0), "六站全部完成，完整能力报告已生成。");
    }
    return allDone;
  }

  function runPrompt() {
    var input = document.getElementById("promptInput");
    var prompt = input.value.trim();
    if (!prompt) {
      showToast("请先输入提示词");
      return;
    }
    if (safetyCheck(prompt)) {
      appendTerminal("内容安全过滤未通过，输入已拦截。", "terminal-log");
      showToast("内容安全过滤未通过，请修改后重试");
      return;
    }
    var runBtn = document.getElementById("promptRun");
    appendTerminal("> " + prompt, "terminal-prompt");
    runBtn.disabled = true;
    var typing = appendTerminal("AI 思考中...", "terminal-log");
    setTimeout(function () {
      requestGeneratedOutput(prompt).then(function (output) {
        typing.textContent = "生成完成";
        appendTerminal(output, "terminal-out");
        recordPracticalRun(prompt, output);
      }).catch(function () {
        typing.textContent = remoteGeneratorConfigured() ? "远端生成失败，已改用本地演示引擎" : "生成完成";
        var output = generateOutput(prompt);
        appendTerminal(output, "terminal-out");
        recordPracticalRun(prompt, output);
      }).then(function () {
        runBtn.disabled = false;
        input.select();
      });
    }, 950);
  }

  function recordPracticalRun(prompt, output) {
    state.practical.runs += 1;
    state.practical.lastOutput = output;
    state.practical.versions.push({
      version: state.practical.runs,
      prompt: prompt,
      output: output,
      createdAt: Date.now()
    });
    savePractical();
    document.getElementById("runCount").textContent = state.practical.runs + " 次运行";
  }

  function submitPractical() {
    if (!state.practical.lastOutput) {
      showToast("请先运行提示词生成内容");
      return;
    }
    state.practical.submitted = true;
    var lastVersion = state.practical.versions[state.practical.versions.length - 1];
    var prompt = lastVersion ? lastVersion.prompt : "";
    var quality = 62;
    if (/角色|策划|规划师|设计师|专家|班主任/.test(prompt)) quality += 8;
    if (/表格|列表|分点|步骤|格式|序号/.test(prompt)) quality += 8;
    if (/分享会|班会|活动|目标/.test(prompt)) quality += 8;
    if (state.practical.runs > 1) quality += 8;
    var score = Math.min(96, quality);
    var stars = score >= 90 ? 3 : score >= 70 ? 2 : 1;
    var wasNew = stationWasNew("tools");
    savePractical();
    var box = document.getElementById("practicalResult");
    box.hidden = false;
    document.getElementById("practicalResultText").textContent = state.practical.lastOutput.split("\n\n质量评估")[0];
    var allDone = completeStationOutcome("tools", score, stars, wasNew);
    showToast("产物已提交，工具工坊得分 " + score + " 分");
    openResult("实操任务完成", "你的产物已提交，本轮迭代 " + state.practical.runs + " 次，得分 " + score + " 分。" + (allDone ? "六站已完成，完整报告已刷新。" : ""), stars);
  }

  function openResult(title, text, stars) {
    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultText").textContent = text;
    document.getElementById("resultIcon").innerHTML = icon("BadgeCheck");
    document.getElementById("resultStars").innerHTML = starsMarkup(stars, 3);
    document.getElementById("npcEnding").hidden = true;
    openModal("resultModal");
  }

  function currentReport() {
    return STATIONS.map(function (s, i) {
      return {
        name: REPORT_NAMES[i] || s.name,
        score: Math.max(0, Math.min(100, Number(s.score) || 0)),
        color: REPORT_COLORS[i] || s.color
      };
    });
  }

  function reportAverage(report) {
    return Math.round(report.reduce(function (sum, d) {
      return sum + d.score;
    }, 0) / report.length);
  }

  function normalizeScores(scores) {
    return REPORT_NAMES.map(function (_, i) {
      return Math.max(0, Math.min(100, Number(scores && scores[i]) || 0));
    });
  }

  function growthSeries(report) {
    var series = state.history.slice(0, 5).reverse().map(function (h, i) {
      var scores = normalizeScores(h.scores);
      return {
        label: h.date ? h.date.slice(5) : "第 " + (i + 1) + " 次",
        value: scores.reduce(function (sum, v) { return sum + v; }, 0)
      };
    });
    var currentValue = report.reduce(function (sum, d) { return sum + d.score; }, 0);
    if (!series.length || series[series.length - 1].value !== currentValue) {
      series.push({ label: "本次", value: currentValue });
    }
    return series;
  }

  function reportAdvice(report) {
    var tips = {
      "提示词": "每次提问前检查角色、目标和输出格式三要素。",
      "检索": "练习用“关键词 + 来源限定 + 时间范围”提高检索准确率。",
      "对话": "回答后主动补充背景，并把需要的结论形式说清楚。",
      "创作": "先用一句话确定读者和语气，再让 AI 展开结构化内容。",
      "数据": "把问题拆成指标、对比维度和可视化建议再提问。",
      "工具": "保留每次提示词修改记录，标注哪一版效果更好。"
    };
    return report.slice().sort(function (a, b) {
      return a.score - b.score;
    }).slice(0, 3).map(function (d) {
      return { text: d.name + "：" + tips[d.name], color: d.color };
    });
  }

  function reportInsight(report) {
    var last = state.history[0];
    var lastScores = last ? normalizeScores(last.scores) : null;
    var breakthrough = [];
    var changes = report.map(function (d, i) {
      var delta = lastScores ? d.score - lastScores[i] : 0;
      if (delta > 0) breakthrough.push(d.name);
      return delta;
    });
    var totalChange = lastScores ? report.reduce(function (sum, d) { return sum + d.score; }, 0) - lastScores.reduce(function (sum, v) { return sum + v; }, 0) : 0;
    return {
      changes: changes,
      breakthrough: breakthrough,
      totalChange: totalChange
    };
  }

  function radarMarkup(cx, cy, R, scores) {
    var labels = REPORT_NAMES;
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
      '<polygon points="' + ring(0.33) + '" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.14)"/>' +
      '<polygon points="' + ring(0.66) + '" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.16)"/>' +
      '<polygon points="' + ring(1) + '" fill="none" stroke="rgba(255,255,255,.22)"/>' +
      Array.from({ length: 6 }, function (_, i) {
        var p = pt(R, i);
        return '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '" stroke="rgba(255,255,255,.12)"/>';
      }).join("") +
      '<polygon points="' + data + '" fill="rgba(34,211,238,.28)" stroke="#22d3ee" stroke-width="2.5" stroke-linejoin="round"/>' +
      scores.map(function (v, i) {
        var p = pt((R * v) / 100, i);
        return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4" fill="#ffffff" stroke="#22d3ee" stroke-width="2"/>';
      }).join("") +
      labels.map(function (label, i) {
        var p = pt(R + 26, i);
        return '<text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 4).toFixed(1) + '" text-anchor="middle" class="radar-label">' + label + "</text>";
      }).join("") +
      ""
    );
  }

  function radarSvg(scores) {
    return (
      '<svg viewBox="0 0 340 340" role="img" aria-label="六维能力雷达图">' +
      radarMarkup(170, 170, 118, scores) +
      "</svg>"
    );
  }

  function growthMarkup(w, h, series) {
    var pad = 28;
    var values = series.map(function (s) { return s.value; });
    var min = Math.max(0, Math.floor(Math.min.apply(null, values) * 0.9));
    var max = Math.min(600, Math.ceil(Math.max.apply(null, values) * 1.1));
    if (max - min < 20) max = Math.min(600, min + 20);
    function px(i) {
      return pad + (i * (w - pad * 2)) / Math.max(series.length - 1, 1);
    }
    function py(v) {
      return h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    }
    var points = series.map(function (s, i) {
      return px(i) + "," + py(s.value);
    });
    var area = "M" + px(0) + "," + (h - pad) + " L" + points.join(" L") + " L" + px(series.length - 1) + "," + (h - pad) + " Z";
    return (
      '<path d="' + area + '" fill="rgba(255,159,67,.14)"/>' +
      '<polyline points="' + points.join(" ") + '" fill="none" stroke="#ff9f43" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
      series.map(function (s, i) {
        return (
          '<circle cx="' + px(i) + '" cy="' + py(s.value) + '" r="4.5" fill="#ff9f43" stroke="#ffffff" stroke-width="2"/>' +
          '<text x="' + px(i) + '" y="' + (py(s.value) - 12) + '" text-anchor="middle" class="radar-label">' + s.value + "</text>" +
          '<text x="' + px(i) + '" y="' + (h - 8) + '" text-anchor="middle" class="radar-label">' + s.label + "</text>"
        );
      }).join("") +
      ""
    );
  }

  function growthSvg() {
    return (
      '<svg viewBox="0 0 340 170" class="chart" role="img" aria-label="成长曲线">' +
      growthMarkup(340, 170, growthSeries(currentReport())) +
      "</svg>"
    );
  }

  function renderAnalysis() {
    var report = currentReport();
    var series = growthSeries(report);
    var insight = reportInsight(report);
    document.getElementById("radarChart").innerHTML = radarSvg(report.map(function (d) {
      return d.score;
    }));
    document.getElementById("growthChart").innerHTML =
      '<svg viewBox="0 0 340 170" class="chart" role="img" aria-label="成长曲线">' +
      growthMarkup(340, 170, series) +
      "</svg>";

    var avg = reportAverage(report);
    document.getElementById("ratingBadge").textContent = ratingFor(avg);
    document.querySelector(".overall-rating").textContent = "综合评级 " + ratingFor(avg);

    document.getElementById("dimensionScores").innerHTML = report.map(function (d, i) {
      var delta = insight.changes[i];
      var deltaText = delta > 0 ? "+" + delta : String(delta);
      return (
        '<div class="dimension-row" style="--station:' + d.color + '">' +
        '<div class="dimension-row-head"><span>' + d.name + "</span><b>" + d.score +
        '<small class="dimension-delta ' + (delta > 0 ? "up" : delta < 0 ? "down" : "") + '">' + deltaText + "</small></b></div>" +
        '<div class="dimension-bar"><span style="width:' + d.score + '%"></span></div>' +
        "</div>"
      );
    }).join("");

    var advice = reportAdvice(report);
    document.getElementById("adviceList").innerHTML = advice.map(function (a) {
      return "<li style='--station:" + a.color + "'>" + icon("Lightbulb") + "<span>" + a.text + "</span></li>";
    }).join("");

    var growthTitle = document.getElementById("growthTitle");
    var growthText = document.getElementById("growthText");
    if (insight.breakthrough.length) {
      growthTitle.textContent = insight.breakthrough.slice(0, 2).join("、") + "突破上次记录！";
      growthText.textContent = "六维总分较上次" + (insight.totalChange >= 0 ? "提升 " : "下降 ") + Math.abs(insight.totalChange) + " 分，继续保持。";
    } else {
      growthTitle.textContent = "稳住节奏，向薄弱维度发起冲击";
      growthText.textContent = state.history[0]
        ? "上次评级 " + state.history[0].rating + "，本次建议优先提升" + report.slice().sort(function (a, b) { return a.score - b.score; })[0].name + "。"
        : "完成六站后，这里会生成你的成长对比。";
    }
    var achievements = document.querySelectorAll(".growth-card .achievement");
    achievements[0].classList.toggle("new", insight.breakthrough.length > 0);
    if (achievements[1]) achievements[1].textContent = "";
    if (achievements[1]) achievements[1].innerHTML = icon("Star") + " 累计 " + STATIONS.reduce(function (sum, s) { return sum + s.stars; }, 0) + " 星";
  }

  function esc(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderHistory() {
    var list = document.getElementById("historyList");
    var report = currentReport();
    if (!state.history.length) {
      list.innerHTML = '<div class="history-empty">' + icon("History") + "<p>还没有测评记录，完成任一关卡后会自动保存。</p></div>";
      return;
    }
    list.innerHTML = state.history.map(function (h) {
      return (
        '<article class="history-card">' +
        '<div class="history-head">' +
        '<div class="history-title">' +
        '<span class="history-icon">' + icon("ClipboardList") + "</span>" +
        "<div><strong>" + esc(h.title) + "</strong><span>" + h.date + "</span></div>" +
        "</div>" +
        '<div class="history-badges">' +
        '<span class="history-rating">' + esc(h.rating) + "</span>" +
        '<span class="history-stars">' + icon("Star") + " " + h.stars + " 星</span>" +
        "</div>" +
        "</div>" +
        '<div class="history-dims">' +
        h.scores.map(function (score, i) {
          var dim = report[i] || { name: "", color: "#5b6cf6" };
          return (
            '<div class="history-dim">' +
            "<span>" + dim.name + "</span>" +
            '<div class="history-dim-bar"><span style="width:' + score + "%;background:" + dim.color + '"></span></div>' +
            "<b>" + score + "</b>" +
            "</div>"
          );
        }).join("") +
        "</div>" +
        '<div class="history-note">' + esc(h.note || "") + "</div>" +
        '<div class="history-actions">' +
        '<button class="btn ghost small" type="button" data-history-open="' + h.id + '">' + icon("Eye") + "<span>查看详情</span></button>" +
        "</div>" +
        "</article>"
      );
    }).join("");
  }

  function openHistoryDetail(id) {
    var h = state.history.filter(function (item) {
      return item.id === id;
    })[0];
    if (!h) return;
    var body = document.getElementById("historyModalBody");
    var report = currentReport();
    body.innerHTML =
      '<div class="history-detail-head">' +
      "<div>" +
      '<p class="card-eyebrow">测评详情</p>' +
      "<h2>" + esc(h.title) + "</h2>" +
      "<span>" + h.date + " · 评级 " + esc(h.rating) + " · " + h.stars + " 星</span>" +
      "</div>" +
      "</div>" +
      '<div class="history-detail-grid">' +
      '<div class="history-radar">' + radarSvg(h.scores) + "</div>" +
      '<div class="history-score-list">' +
      h.scores.map(function (score, i) {
        var dim = report[i] || { name: "", color: "#5b6cf6" };
        return (
          '<div class="history-score-row" style="--station:' + dim.color + '">' +
          "<span>" + dim.name + "</span>" +
          '<div class="dimension-bar"><span style="width:' + score + '%"></span></div>' +
          "<b>" + score + "</b>" +
          "</div>"
        );
      }).join("") +
      "</div>" +
      "</div>" +
      '<div class="history-detail-note">' + icon("Lightbulb") + "<div><strong>测评小结</strong><p>" + esc(h.note || "") + "</p></div></div>";
    openModal("historyModal");
  }

  var REPORT_W = 1000;
  var REPORT_H = 1440;

  function escapeXml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function reportSvgString() {
    var report = currentReport();
    var series = growthSeries(report);
    var insight = reportInsight(report);
    var avg = reportAverage(report);
    var rating = ratingFor(avg);
    var now = new Date();
    var dateStr = now.getFullYear() + "." + String(now.getMonth() + 1).padStart(2, "0") + "." + String(now.getDate()).padStart(2, "0");
    var font = '"PingFang SC","Microsoft YaHei","Source Han Sans SC",sans-serif';
    var html = "";

    html += '<svg xmlns="http://www.w3.org/2000/svg" width="' + REPORT_W + '" height="' + REPORT_H + '" viewBox="0 0 ' + REPORT_W + " " + REPORT_H + '">';
    html += "<defs>";
    html += '<linearGradient id="ratingGrad" x1="0" y1="0" x2="1" y2="1">';
    html += '<stop offset="0" stop-color="#0ecf8e"/><stop offset="0.5" stop-color="#22d3ee"/><stop offset="1" stop-color="#5b6cf6"/>';
    html += "</linearGradient>";
    html += "</defs>";
    html += '<style>text{font-family:' + font + ";} .radar-label{fill:rgba(224,220,255,.8);font-size:12px;}</style>";
    html += '<rect width="' + REPORT_W + '" height="' + REPORT_H + '" fill="#171143"/>';

    html += '<text x="56" y="82" font-size="34" font-weight="800" fill="#f7f6ff">AI 能力报告</text>';
    html += '<text x="56" y="118" font-size="15" fill="#a9a4d8">AI Capability Assessment Report · 六维能力测评</text>';
    html += '<text x="944" y="82" text-anchor="end" font-size="14" fill="#a9a4d8">昵称：' + escapeXml(state.nickname) + "</text>";
    html += '<text x="944" y="106" text-anchor="end" font-size="14" fill="#a9a4d8">日期：' + dateStr + "</text>";
    html += '<line x1="56" y1="142" x2="944" y2="142" stroke="rgba(255,255,255,.14)"/>';

    html += '<text x="56" y="196" font-size="20" font-weight="700" fill="#f7f6ff">六维能力雷达</text>';
    html += '<g transform="translate(56,206)">' + radarMarkup(170, 170, 118, report.map(function (d) {
      return d.score;
    })) + "</g>";

    html += '<circle cx="610" cy="330" r="60" fill="url(#ratingGrad)"/>';
    html += '<text x="610" y="346" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff">' + rating + "</text>";
    html += '<text x="610" y="410" text-anchor="middle" font-size="14" fill="rgba(224,220,255,.7)">综合评级</text>';

    report.forEach(function (d, i) {
      var y = 470 + i * 46;
      html += '<text x="540" y="' + y + '" font-size="15" fill="rgba(244,242,255,.86)">' + d.name + "</text>";
      html += '<rect x="600" y="' + (y - 11) + '" width="264" height="12" rx="6" fill="rgba(255,255,255,.12)"/>';
      html += '<rect x="600" y="' + (y - 11) + '" width="' + Math.round(2.64 * d.score) + '" height="12" rx="6" fill="' + d.color + '"/>';
      html += '<text x="884" y="' + y + '" text-anchor="end" font-size="15" font-weight="700" fill="#f7f6ff">' + d.score + "</text>";
    });

    html += '<line x1="56" y1="760" x2="944" y2="760" stroke="rgba(255,255,255,.1)"/>';
    html += '<text x="56" y="810" font-size="20" font-weight="700" fill="#f7f6ff">个性化学习建议</text>';
    var advice = reportAdvice(report);
    advice.forEach(function (a, i) {
      var y = 856 + i * 58;
      html += '<rect x="56" y="' + y + '" width="888" height="46" rx="8" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.12)"/>';
      html += '<circle cx="84" cy="' + (y + 23) + '" r="5" fill="' + a.color + '"/>';
      html += '<text x="106" y="' + (y + 29) + '" font-size="15" fill="rgba(244,242,255,.88)">' + escapeXml(a.text) + "</text>";
    });

    html += '<rect x="56" y="1050" width="888" height="64" rx="8" fill="rgba(255,209,102,.08)" stroke="rgba(255,209,102,.24)"/>';
    html += '<text x="84" y="1088" font-size="16" font-weight="700" fill="#ffe2a8">推荐练习</text>';
    html += '<text x="250" y="1088" font-size="14" fill="rgba(244,242,255,.82)">提示词改写训练 5 题 · 8 分钟      需求表达对话 2 轮 · 5 分钟</text>';

    html += '<line x1="56" y1="1170" x2="944" y2="1170" stroke="rgba(255,255,255,.1)"/>';
    html += '<text x="56" y="1220" font-size="20" font-weight="700" fill="#f7f6ff">成长对比</text>';
    html += '<text x="56" y="1256" font-size="16" font-weight="700" fill="#ffe2a8">' + escapeXml(insight.breakthrough.length ? insight.breakthrough.slice(0, 2).join("、") + "突破上次记录！" : "成长对比") + "</text>";
    html += '<text x="56" y="1282" font-size="14" fill="rgba(244,242,255,.78)">六维总分较上次' + escapeXml(insight.totalChange >= 0 ? "提升 " : "下降 ") + Math.abs(insight.totalChange) + " 分。</text>";
    html += '<g transform="translate(56,1320)">' + growthMarkup(888, 230, series) + "</g>";

    html += '<rect x="56" y="1396" width="128" height="30" rx="15" fill="rgba(255,209,102,.14)" stroke="rgba(255,209,102,.36)"/>';
    html += '<text x="120" y="1416" text-anchor="middle" font-size="13" font-weight="700" fill="#ffe2a8">突破王</text>';
    html += '<rect x="196" y="1396" width="120" height="30" rx="15" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.14)"/>';
    html += '<text x="256" y="1416" text-anchor="middle" font-size="13" font-weight="700" fill="rgba(244,242,255,.86)">累计 ' + STATIONS.reduce(function (sum, s) { return sum + s.stars; }, 0) + " 星</text>";

    html += "</svg>";
    return html;
  }

  async function reportImageBlob() {
    var blob = new Blob([reportSvgString()], { type: "image/svg+xml;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var img = new Image();
    await new Promise(function (resolve, reject) {
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
    var canvas = document.createElement("canvas");
    canvas.width = REPORT_W * 2;
    canvas.height = REPORT_H * 2;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    URL.revokeObjectURL(url);
    return new Promise(function (resolve, reject) {
      canvas.toBlob(function (blob) {
        if (blob) resolve(blob);
        else reject(new Error("canvas export failed"));
      }, "image/png");
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
    }, 120);
  }

  async function exportReport(kind) {
    try {
      await document.fonts.ready;
      showToast(kind === "pdf" ? "正在生成 PDF..." : "正在导出图片...");
      var pngBlob = await reportImageBlob();
      if (kind === "png") {
        downloadBlob(pngBlob, "AI能力报告.png");
        showToast("报告图片已导出");
        return;
      }
      if (!window.PDFLib) {
        throw new Error("PDF 库未加载");
      }
      var bytes = await pngBlob.arrayBuffer();
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
      var pdfBytes = await pdfDoc.save();
      downloadBlob(new Blob([pdfBytes], { type: "application/pdf" }), "AI能力报告.pdf");
      showToast("报告 PDF 已导出");
    } catch (e) {
      console.error("export error", e);
      showToast("导出失败，请尝试重新打开页面");
    }
  }

  function openProfile() {
    document.getElementById("nicknameInput").value = state.nickname;
    renderAvatarGrid();
    openModal("profileModal");
  }

  function renderAvatarGrid() {
    var grid = document.getElementById("avatarGrid");
    grid.innerHTML = AVATARS.map(function (a) {
      return (
        '<button class="avatar-option' + (a.id === state.avatarId ? " selected" : "") + '" type="button" data-avatar="' + a.id + '">' +
        '<span class="avatar">' + avatarSvg(a.id) + "</span>" +
        "</button>"
      );
    }).join("");
    Array.prototype.forEach.call(grid.querySelectorAll(".avatar-option"), function (btn) {
      btn.addEventListener("click", function () {
        state.avatarId = btn.getAttribute("data-avatar");
        renderAvatarGrid();
      });
    });
  }

  function checkResumeSession() {
    var data = loadQuizSession();
    if (!data) return;
    var station = STATIONS.filter(function (s) {
      return s.id === data.currentLevel;
    })[0];
    if (!station || station.status === "done") {
      clearQuizSession();
      return;
    }
    state.quiz.currentLevel = data.currentLevel;
    state.quiz.current = Number(data.current) || 0;
    state.quiz.questionIds = (data.questionIds || []).filter(function (id) {
      return QUESTIONS.some(function (q) {
        return q.id === id && q.levelId === data.currentLevel;
      });
    });
    if (!state.quiz.questionIds.length) {
      var first = selectQuestion(data.currentLevel, Number(data.diff) || 2, []);
      if (first) state.quiz.questionIds = [first.id];
    }
    state.quiz.answers = data.answers || {};
    state.quiz.selected = data.selected || {};
    state.quiz.seconds = Number(data.seconds) || 120;
    state.quiz.leaveCount = Number(data.leaveCount) || 0;
    state.quiz.flags = Array.isArray(data.flags) ? data.flags.slice() : [];
    state.quiz.startedAt = Number(data.startedAt) || Date.now();
    state.quiz.diff = Number(data.diff) || 2;
    state.quiz.started = true;
    var banner = document.getElementById("resumeBanner");
    banner.hidden = false;
    document.getElementById("resumeText").textContent = "上次进行到第 " + station.level + " 关 · " + station.name + "，可继续作答，进度保留 48 小时。";
  }

  function resumeQuiz() {
    var station = currentLevelStation();
    if (!state.quiz.started || !station || station.status === "done") {
      hideResumeBanner();
      clearQuizSession();
      return;
    }
    document.getElementById("quizIntro").hidden = true;
    document.getElementById("quizContent").hidden = false;
    renderQuestion();
    startQuizTimer();
    openModal("quizModal");
  }

  function hideResumeBanner() {
    var banner = document.getElementById("resumeBanner");
    if (banner) banner.hidden = true;
  }

  function saveProfile() {
    var value = document.getElementById("nicknameInput").value.trim();
    state.nickname = value || "探险者";
    try {
      localStorage.setItem("ai-student-nickname", state.nickname);
      localStorage.setItem("ai-student-avatar", state.avatarId);
    } catch (e) {
      /* ignore */
    }
    applyProfile();
    closeModal("profileModal");
    showToast("个人资料已更新");
  }

  function bindEvents() {
    var navs = document.querySelectorAll(".nav-item");
    Array.prototype.forEach.call(navs, function (nav) {
      nav.addEventListener("click", function () {
        switchView(nav.getAttribute("data-view"));
      });
    });

    document.getElementById("stationGrid").addEventListener("click", function (e) {
      var card = e.target.closest(".station-card");
      if (card) openStationModal(card.getAttribute("data-station"));
    });

    document.querySelectorAll("[data-go]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = btn.getAttribute("data-go");
        if (target === "quiz") {
          startNextLevel();
        } else {
          switchView(target);
        }
      });
    });

    document.getElementById("startLevelBtn").addEventListener("click", startNextLevel);
    document.getElementById("bottomStartLevelBtn").addEventListener("click", function () {
      if (document.getElementById("levelStartBar").dataset.allDone === "1") {
        switchView("analysis");
      } else {
        startNextLevel();
      }
    });
    document.getElementById("npcStartBtn").addEventListener("click", beginLevelQuiz);

    document.getElementById("reopenGuide").addEventListener("click", openTutorial);
    document.getElementById("tutClose").addEventListener("click", function () {
      closeModal("tutorialModal");
    });
    document.getElementById("tutSkip").addEventListener("click", finishTutorial);
    document.getElementById("tutNext").addEventListener("click", function () {
      if (tutorialIndex < TUTORIAL.length - 1) {
        tutorialIndex += 1;
        renderTutorialDots(tutorialIndex);
      } else {
        finishTutorial();
      }
    });
    document.getElementById("tutPrev").addEventListener("click", function () {
      if (tutorialIndex > 0) {
        tutorialIndex -= 1;
        renderTutorialDots(tutorialIndex);
      }
    });

    document.getElementById("stationModalClose").addEventListener("click", function () {
      closeModal("stationModal");
    });
    document.getElementById("profileClose").addEventListener("click", function () {
      closeModal("profileModal");
    });
    document.getElementById("profileSave").addEventListener("click", saveProfile);
    document.getElementById("userCard").addEventListener("click", openProfile);
    document.getElementById("selfAssessNext").addEventListener("click", submitSelfAssess);
    document.getElementById("selfAssessSkip").addEventListener("click", skipSelfAssess);
    document.getElementById("selfAssessClose").addEventListener("click", skipSelfAssess);
    document.getElementById("historyModalClose").addEventListener("click", function () {
      closeModal("historyModal");
    });
    document.getElementById("resumeContinue").addEventListener("click", resumeQuiz);
    document.getElementById("resumeDiscard").addEventListener("click", function () {
      clearQuizSession();
      hideResumeBanner();
      showToast("已放弃上次测评，进度已清除");
    });
    document.getElementById("retestGoalBtn").addEventListener("click", function () {
      switchView("analysis");
    });
    document.getElementById("clearHistoryBtn").addEventListener("click", function () {
      state.history = [];
      saveHistory();
      renderHistory();
      showToast("测评历史已清空");
    });
    document.getElementById("historyList").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-history-open]");
      if (btn) openHistoryDetail(btn.getAttribute("data-history-open"));
    });

    document.getElementById("logoutBtn").addEventListener("click", function () {
      window.location.href = "index.html";
    });

    document.getElementById("quizPrev").addEventListener("click", prevQuestion);
    document.getElementById("quizNext").addEventListener("click", nextQuestion);
    document.getElementById("quizSubmit").addEventListener("click", finishQuiz);
    document.getElementById("quizModalClose").addEventListener("click", function () {
      closeModal("quizModal");
    });

    document.getElementById("chatSend").addEventListener("click", function () {
      sendChat(document.getElementById("chatInput").value);
    });
    document.getElementById("chatInput").addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        sendChat(document.getElementById("chatInput").value);
      }
    });
    document.getElementById("chatReset").addEventListener("click", startChat);

    document.getElementById("promptRun").addEventListener("click", runPrompt);
    document.getElementById("promptSubmit").addEventListener("click", submitPractical);
    document.getElementById("promptInput").addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        runPrompt();
      }
    });

    document.getElementById("exportPng").addEventListener("click", function () {
      exportReport("png");
    });
    document.getElementById("exportPdf").addEventListener("click", function () {
      exportReport("pdf");
    });

    document.getElementById("resultBack").addEventListener("click", function () {
      closeModal("resultModal");
      switchView("stations");
    });
    document.getElementById("resultAnalysis").addEventListener("click", function () {
      closeModal("resultModal");
      switchView("analysis");
    });

    var overlays = document.querySelectorAll(".modal-overlay");
    Array.prototype.forEach.call(overlays, function (overlay) {
      overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
          closeModal(overlay.id);
        }
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        var open = document.querySelector(".modal-overlay.open");
        if (open) closeModal(open.id);
      }
    });

    document.addEventListener("visibilitychange", function () {
      var quizEl = document.getElementById("quizModal");
      var content = document.getElementById("quizContent");
      if (document.hidden && state.quiz.started && quizEl.classList.contains("open") && content && !content.hidden) {
        state.quiz.leaveCount += 1;
        if (state.quiz.leaveCount === 1) {
          showToast("检测到页面切换，已记录 1 次异常");
        } else {
          state.quiz.flags.push("页面切换 " + state.quiz.leaveCount + " 次");
          showToast("检测到再次页面切换，结果将被标记");
        }
        saveQuizSession();
      }
    });
    window.addEventListener("pagehide", function () {
      saveQuizSession();
      saveProgress();
    });
    window.addEventListener("beforeunload", function () {
      saveQuizSession();
      saveProgress();
    });
  }

  loadSaved();
  applyProfile();
  renderStations();
  renderTutorial();
  bindEvents();
  switchView("stations");
  checkResumeSession();

  if (!state.tutorialDone) {
    setTimeout(openTutorial, 500);
  }
})();
