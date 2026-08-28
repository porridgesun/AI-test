import { httpError } from "../server.js";

const ROLE_LABELS = {
  student: "学员",
  teacher: "管理",
  admin: "管理员"
};

function profileFor(store, user) {
  if (user.role === "student") {
    return store.data.students.find((item) => item.userId === user.id) || null;
  }
  if (user.role === "teacher" || user.role === "admin") {
    return store.data.teachers.find((item) => item.userId === user.id) || null;
  }
  return null;
}

function authorFor(store, user) {
  const profile = profileFor(store, user);
  return {
    authorId: user.id,
    authorName: profile?.name || user.name || user.account,
    authorRole: user.role,
    authorRoleLabel: ROLE_LABELS[user.role] || "成员"
  };
}

function publicPost(post, { withComments = false } = {}) {
  const result = {
    id: post.id,
    tag: post.tag,
    title: post.title,
    summary: post.summary,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    authorId: post.authorId,
    authorName: post.authorName,
    authorRole: post.authorRole,
    authorRoleLabel: post.authorRoleLabel,
    viewCount: post.viewCount || 0,
    commentCount: post.commentCount || 0
  };
  if (withComments) result.comments = post.comments || [];
  return result;
}

function postSummary(post) {
  return publicPost(post);
}

function text(value, label, maxLength) {
  const result = String(value ?? "").trim().replace(/\s+/g, " ");
  if (!result) throw httpError(400, `${label}不能为空`);
  if (result.length > maxLength) throw httpError(400, `${label}不能超过${maxLength}个字符`);
  return result;
}

export function registerForumRoutes(router, { store }) {
  router.get("/api/forum/posts", () => {
    const posts = (store.data.forumPosts || [])
      .slice()
      .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt))
      .map(postSummary);
    return { posts };
  });

  router.post("/api/forum/posts", (ctx) => {
    const tag = text(ctx.body?.tag, "标签", 18);
    const title = text(ctx.body?.title, "标题", 60);
    const summary = String(ctx.body?.summary ?? "").trim().replace(/\s+/g, " ");
    if (!summary) throw httpError(400, "概括不能为空");
    if (summary.length > 400) throw httpError(400, "概括不能超过400个字符");
    const content = String(ctx.body?.content ?? "").trim().replace(/\s+/g, " ");

    return store.update((data) => {
      if (!Array.isArray(data.forumPosts)) data.forumPosts = [];
      const now = new Date().toISOString();
      const post = {
        id: store.id("fp"),
        tag,
        title,
        summary,
        content,
        createdAt: now,
        updatedAt: now,
        ...authorFor(store, ctx.user),
        viewCount: 0,
        commentCount: 0,
        comments: []
      };
      data.forumPosts.push(post);
      return { post: publicPost(post, { withComments: true }) };
    });
  }, { auth: true });

  router.get("/api/forum/posts/:id", (ctx) => {
    return store.update((data) => {
      const post = (data.forumPosts || []).find((item) => item.id === ctx.params.id);
      if (!post) throw httpError(404, "帖子不存在");
      post.viewCount = (post.viewCount || 0) + 1;
      return { post: publicPost(post, { withComments: true }) };
    });
  });

  router.post("/api/forum/posts/:id/comments", (ctx) => {
    const content = text(ctx.body?.content, "评论内容", 200);
    return store.update((data) => {
      const post = (data.forumPosts || []).find((item) => item.id === ctx.params.id);
      if (!post) throw httpError(404, "帖子不存在");
      if (!Array.isArray(post.comments)) post.comments = [];
      const comment = {
        id: store.id("fc"),
        content,
        createdAt: new Date().toISOString(),
        ...authorFor(store, ctx.user)
      };
      post.comments.push(comment);
      post.commentCount = post.comments.length;
      return { comment, post: publicPost(post, { withComments: true }) };
    });
  }, { auth: true });
}
