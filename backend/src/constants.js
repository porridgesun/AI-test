export const DIMENSIONS = [
  { id: "basics", name: "AI基础认知", color: "#0ecf8e" },
  { id: "prompting", name: "提示词工程", color: "#22d3ee" },
  { id: "tools", name: "AI工具使用", color: "#ff9f43" },
  { id: "evaluation", name: "AI结果评估", color: "#9b6cff" },
  { id: "collaboration", name: "人机协同", color: "#5b6cf6" },
  { id: "ethics", name: "AI伦理合规", color: "#ff6b7a" }
];

export const DIMENSION_IDS = DIMENSIONS.map((item) => item.id);

export const LEVELS = [
  {
    id: "academy",
    order: 1,
    name: "智核学院",
    guardian: "林教授",
    color: "#0ecf8e",
    focus: ["basics", "prompting", "tools", "ethics"],
    opening: "欢迎来到智核学院。我今天要举办一场面向新生的AI科普讲座，需要你协助解答这些问题。",
    ending: "谢谢你的帮助！这些问题同时涉及基础认知、提示词、工具使用和伦理规范。"
  },
  {
    id: "labyrinth",
    order: 2,
    name: "信息迷城",
    guardian: "苏记者",
    color: "#ff9f43",
    focus: ["evaluation", "ethics", "basics", "prompting"],
    opening: "我正在调查一起AI生成假新闻配图事件，需要你帮助辨别信息真伪。",
    ending: "调查报告里会提到你的贡献。你展现了辨别AI内容和负责任传播信息的能力。"
  },
  {
    id: "workshop",
    order: 3,
    name: "创客工坊",
    guardian: "陈创客",
    color: "#9b6cff",
    focus: ["tools", "prompting", "evaluation", "ethics", "collaboration"],
    opening: "产品明天发布，但宣传文案还没准备好。请使用AI终端完成它，并至少迭代两次提示词。",
    ending: "你会写提示词、会评估AI输出、知道不断迭代，这就是真正会用AI的关键。"
  },
  {
    id: "station",
    order: 4,
    name: "协同空间站",
    guardian: "周队长",
    color: "#5b6cf6",
    focus: ["collaboration", "tools", "prompting", "evaluation", "ethics"],
    opening: "空间站AI系统检测到氧气循环异常。请与星核协作分析方案，但不要盲从AI。",
    ending: "危机解除。你在压力下冷静地与AI协作，也保留了人的判断。"
  },
  {
    id: "court",
    order: 5,
    name: "伦理殿堂",
    guardian: "方法官",
    color: "#ff6b7a",
    focus: ["ethics", "collaboration", "evaluation", "basics"],
    opening: "今天有三起AI相关案件需要你担任人民陪审员。别急着下结论，先把问题看清楚。",
    ending: "你在学术诚信、AI偏见和隐私保护中的判断，展现了AI时代公民应有的素养。"
  }
];

export const NPC_REACTIONS = {
  academy: {
    correct: ["不错，看来你对这个知识点掌握得不错。", "很好！你的理解到位了。", "看来你已经准备好了。"],
    wrong: ["这个问题确实有难度，让我说明一下。", "别灰心，我们一起梳理这个概念。", "需要再修炼一下这个知识点。"]
  },
  labyrinth: {
    correct: ["犀利的眼光！你发现了关键。", "不错，你的判断力很强。", "就是这样！你的洞察力很棒。"],
    wrong: ["这个细节你漏掉了，看看解析吧。", "注意这个线索，别被表面现象迷惑。", "这个地方确实容易迷惑人。"]
  },
  workshop: {
    correct: ["太棒了！你这个思路很到位。", "看来你是个懂行的人。", "完美！我喜欢你的思路。"],
    wrong: ["这个方向似乎不太对，看看解析。", "没关系，多试几次就好了。", "这个地方不少人踩过坑，别紧张。"]
  },
  station: {
    correct: ["干得漂亮！就是这个方向。", "很好，你的判断是正确的。", "果断！你展现了冷静的头脑。"],
    wrong: ["这个判断不够准确，注意看解析。", "在压力下出错很正常，看看问题在哪。", "记住，AI的建议需要人来验证。"]
  },
  court: {
    correct: ["判断准确，你的伦理意识很强。", "你的见解很到位。", "公正的判断。"],
    wrong: ["这个判断需要更深入的思考。", "这个问题值得反复思量，看看解析。", "伦理问题往往没有简单答案。"]
  }
};

export const QUESTION_TYPES = ["single", "multi", "judge", "fill", "scene", "sort", "dialogue", "practical"];
export const SESSION_TTL_MS = 48 * 60 * 60 * 1000;
