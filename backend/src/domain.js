import { DIMENSION_IDS, LEVELS, NPC_REACTIONS } from "./constants.js";

export const dimensionName = (id) => DIMENSION_IDS.includes(id) ? id : null;

export function publicUser(user) {
  if (!user) return null;
  const { passwordHash, passwordSalt, ...rest } = user;
  return rest;
}

export function ratingFor(score) {
  if (score >= 90) return "S";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "D";
}

export function starsFor(score) {
  if (score >= 85) return 3;
  if (score >= 65) return 2;
  return 1;
}

export function suggestionFor(scores) {
  const entries = Object.entries(scores).sort((a, b) => a[1] - b[1]);
  const names = {
    basics: "AI基础认知",
    prompting: "提示词工程",
    tools: "AI工具使用",
    evaluation: "AI结果评估",
    collaboration: "人机协同",
    ethics: "AI伦理合规"
  };
  return entries.slice(0, 2).map(([id, score]) => {
    const action = {
      basics: "梳理AI基本概念、典型模型能力边界与常见术语。",
      prompting: "练习角色、目标、上下文、输出格式和验收标准五要素提示词。",
      tools: "完成两个真实工具任务，并记录工具选择原因。",
      evaluation: "每次生成后检查事实、逻辑、格式与偏见，并写下修正意见。",
      collaboration: "在复杂任务中先拆解人与AI的分工，再验证AI结论。",
      ethics: "结合隐私、版权、公平与透明性分析三个真实AI应用案例。"
    }[id];
    return { dimensionId: id, dimension: names[id], score, action };
  });
}

export function publicQuestion(question) {
  const {
    answer, fillAnswers, gradingKeywords, dimensions, ...publicFields
  } = question;
  return {
    ...publicFields,
    dimensionIds: Object.keys(question.dimensions || {})
  };
}

function sameSet(actual, expected) {
  const left = new Set(actual.map(String));
  const right = new Set(expected.map(String));
  if (left.size !== right.size) return false;
  for (const value of right) {
    if (!left.has(value)) return false;
  }
  return true;
}

export function gradeAnswer(question, submission) {
  const type = question.type;
  let correctRatio = 0;

  if (["single", "judge", "scene"].includes(type)) {
    correctRatio = String(submission) === String(question.answer) ? 1 : 0;
  } else if (type === "multi") {
    const actual = Array.isArray(submission) ? submission : [];
    const expected = Array.isArray(question.answer) ? question.answer : [];
    const hits = actual.filter((item) => expected.includes(item)).length;
    const misses = expected.filter((item) => !actual.includes(item)).length;
    const extras = actual.filter((item) => !expected.includes(item)).length;
    correctRatio = expected.length ? Math.max(0, (hits - extras) / expected.length) : 0;
    if (misses === 0 && extras === 0) correctRatio = 1;
  } else if (type === "fill") {
    const value = String(submission || "").trim().toLowerCase();
    correctRatio = (question.fillAnswers || []).some((item) => value === String(item).toLowerCase()) ? 1 : 0;
  } else if (type === "sort") {
    const actual = Array.isArray(submission) ? submission.map(String) : [];
    const expected = (question.answer || []).map(String);
    const hits = actual.filter((item, index) => item === expected[index]).length;
    correctRatio = expected.length ? hits / expected.length : 0;
  } else if (type === "dialogue") {
    const messages = Array.isArray(submission) ? submission.map((item) => String(item || "")) : [];
    const text = messages.join("\n");
    const keywords = question.gradingKeywords || [];
    const hits = keywords.filter((word) => text.includes(word)).length;
    correctRatio = keywords.length ? Math.min(1, hits / Math.max(2, Math.ceil(keywords.length * 0.6))) : 0.6;
    correctRatio = Math.min(1, correctRatio + Math.min(0.2, messages.length * 0.05));
  } else if (type === "practical") {
    const prompts = Array.isArray(submission?.prompts) ? submission.prompts : [];
    const output = String(submission?.output || "");
    let ratio = 0.35;
    if (prompts.length >= 2) ratio += 0.2;
    if (/角色|规划师|设计师|专家/.test(prompts.join("\n"))) ratio += 0.15;
    if (/表格|列表|步骤|格式/.test(prompts.join("\n") + output)) ratio += 0.15;
    if (output.length >= 40) ratio += 0.15;
    correctRatio = Math.min(1, ratio);
  }

  const score = Math.round(correctRatio * 100);
  return {
    correctRatio,
    score,
    result: correctRatio >= 0.99 ? "correct" : correctRatio >= 0.5 ? "partial" : "wrong"
  };
}

export function scoreByDimensions(question, score) {
  const dimensions = question.dimensions || {};
  const weighted = Object.entries(dimensions);
  const totalWeight = weighted.reduce((sum, [, weight]) => sum + weight, 0) || 1;
  const result = {};
  for (const [id, weight] of weighted) {
    if (DIMENSION_IDS.includes(id)) result[id] = (score * weight) / totalWeight;
  }
  return result;
}

export function nextDifficulty(current, result) {
  const delta = result === "correct" ? 1 : result === "wrong" ? -1 : 0;
  return Math.max(1, Math.min(5, current + delta));
}

export function pickQuestion(store, levelId, difficulty, usedIds, type = null) {
  const used = new Set(usedIds);
  let pool = store.data.questions.filter((item) =>
    item.levelId === levelId &&
    item.status === "approved" &&
    !used.has(item.id) &&
    (!type || item.type === type)
  );
  const near = pool.filter((item) => Math.abs(item.difficulty - difficulty) <= 1);
  pool = near.length ? near : pool;
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function sessionState(store, session) {
  const currentLevel = LEVELS[session.currentLevelIndex] || null;
  const question = session.currentQuestionId
    ? store.data.questions.find((item) => item.id === session.currentQuestionId)
    : null;
  const answerCount = Object.keys(session.answers || {}).length;
  return {
    id: session.id,
    assessmentId: session.assessmentId,
    status: session.status,
    startedAt: session.startedAt,
    expiresAt: session.expiresAt,
    savedAt: session.savedAt,
    currentLevel,
    levelProgress: session.levelStates?.map((state) => ({
      levelId: state.levelId,
      completed: state.completed,
      answerCount: state.answerIds.length,
      targetCount: state.targetCount,
      score: Math.round(state.score)
    })) || [],
    totalAnswerCount: answerCount,
    totalTargetCount: session.levelStates?.reduce((sum, item) => sum + item.targetCount, 0) || 0,
    currentQuestion: question ? publicQuestion(question) : null,
    practical: session.practical && session.practical.submittedAt ? session.practical : null
  };
}

export function npcFeedback(levelId, result) {
  const group = NPC_REACTIONS[levelId] || NPC_REACTIONS.academy;
  const list = result === "correct" ? group.correct : group.wrong;
  return list[Math.floor(Math.random() * list.length)];
}

export function buildReport(store, session, studentId) {
  const dimensions = {};
  const weights = {};
  for (const id of DIMENSION_IDS) {
    dimensions[id] = 0;
    weights[id] = 0;
  }

  for (const record of Object.values(session.answers || {})) {
    for (const [id, value] of Object.entries(record.dimensionScores)) {
      dimensions[id] += value;
      weights[id] += record.dimensionWeight;
    }
  }

  const scores = {};
  for (const id of DIMENSION_IDS) {
    scores[id] = weights[id] ? Math.round(dimensions[id] / weights[id]) : 0;
  }
  const measurable = Object.entries(scores).filter(([, score]) => score > 0);
  const overall = measurable.length
    ? Math.round(measurable.reduce((sum, [, score]) => sum + score, 0) / measurable.length)
    : 0;
  const completedLevels = session.levelStates?.filter((item) => item.completed) || [];
  const stars = Math.min(15, completedLevels.reduce((sum, item) => sum + starsFor(item.score), 0));
  const previous = store.data.reports
    .filter((item) => item.studentId === studentId)
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0];
  const growth = previous ? Object.fromEntries(DIMENSION_IDS.map((id) => [
    id,
    scores[id] - (previous.scores[id] || 0)
  ])) : null;

  return {
    scores,
    overall,
    rating: ratingFor(overall),
    stars,
    growth,
    suggestions: suggestionFor(scores),
    breakthroughs: previous
      ? DIMENSION_IDS.filter((id) => scores[id] > (previous.scores[id] || 0))
      : []
  };
}

export function classDashboard(store, classId) {
  const students = store.data.students.filter((item) => item.classId === classId);
  const byStudent = new Map(students.map((item) => [item.id, item]));
  const reports = store.data.reports.filter((item) => byStudent.has(item.studentId));
  const averages = {};
  const medians = {};
  for (const id of DIMENSION_IDS) {
    const values = reports.map((item) => item.scores[id] || 0).sort((a, b) => a - b);
    averages[id] = values.length ? Math.round(values.reduce((a, b) => a + b, 0) / values.length) : 0;
    const middle = Math.floor(values.length / 2);
    medians[id] = values.length
      ? values.length % 2 ? values[middle] : Math.round((values[middle - 1] + values[middle]) / 2)
      : 0;
  }
  const ratingDistribution = reports.reduce((acc, item) => {
    acc[item.rating] = (acc[item.rating] || 0) + 1;
    return acc;
  }, {});
  return {
    classId,
    studentCount: students.length,
    completedCount: new Set(reports.map((item) => item.studentId)).size,
    participationRate: students.length
      ? Math.round((new Set(reports.map((item) => item.studentId)).size / students.length) * 100)
      : 0,
    averages,
    medians,
    ratingDistribution,
    weakDimensions: DIMENSION_IDS.filter((id) => averages[id] > 0 && averages[id] < 60).map((id) => ({
      dimensionId: id,
      score: averages[id],
      advice: suggestionFor({ [id]: averages[id] })[0].action
    }))
  };
}
