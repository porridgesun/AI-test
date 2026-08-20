import { createToken, hashPassword, verifyPassword } from "../security.js";
import { httpError } from "../server.js";
import { publicUser } from "../domain.js";

export function registerAuthRoutes(router, { store }) {
  router.post("/api/auth/register", (ctx) => {
    const { account, password, role = "student", name, classId } = ctx.body || {};
    const normalizedAccount = String(account || "").trim();
    if (normalizedAccount.length < 3) throw httpError(400, "账号至少3个字符");
    if (String(password || "").length < 6) throw httpError(400, "密码至少6位");
    if (!["student", "teacher"].includes(role)) throw httpError(400, "仅支持注册学生或教师账号");
    if (store.data.users.some((item) => item.account === normalizedAccount)) {
      throw httpError(409, "账号已存在");
    }

    return store.update((data) => {
      const userId = store.id("u");
      const credential = hashPassword(password);
      const user = {
        id: userId,
        account: normalizedAccount,
        role,
        name: String(name || normalizedAccount).trim(),
        createdAt: new Date().toISOString(),
        ...credential
      };
      data.users.push(user);
      if (role === "student") {
        data.students.push({
          id: store.id("s"),
          userId,
          studentNo: normalizedAccount,
          name: user.name,
          classId: classId && data.classes.some((item) => item.id === classId) ? classId : data.classes[0]?.id || null,
          avatarId: "sage"
        });
      } else {
        data.teachers.push({ id: store.id("t"), userId, teacherNo: normalizedAccount, name: user.name });
      }
      const token = issueToken(data, user);
      return { user: publicUser(user), token };
    });
  });

  router.post("/api/auth/login", (ctx) => {
    const account = String(ctx.body?.account || "").trim();
    const password = String(ctx.body?.password || "");
    const user = store.data.users.find((item) => item.account === account);
    if (!user || !verifyPassword(password, user.passwordSalt, user.passwordHash)) {
      throw httpError(401, "账号或密码不正确");
    }
    return store.update((data) => ({ user: publicUser(user), token: issueToken(data, user) }));
  });

  router.post("/api/auth/logout", (ctx) => {
    const token = String(ctx.req.headers.authorization || "").replace(/^Bearer\s+/, "");
    return store.update((data) => {
      data.tokens = data.tokens.filter((item) => item.token !== token);
      return { ok: true };
    });
  }, { auth: true });

  router.get("/api/auth/me", (ctx) => {
    const profile = ctx.user.role === "student"
      ? store.data.students.find((item) => item.userId === ctx.user.id)
      : store.data.teachers.find((item) => item.userId === ctx.user.id);
    return { user: publicUser(ctx.user), profile: profile || null };
  }, { auth: true });
}

function issueToken(data, user) {
  const hours = Number(process.env.TOKEN_TTL_HOURS || 48);
  const record = {
    token: createToken(),
    userId: user.id,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + hours * 60 * 60 * 1000).toISOString()
  };
  data.tokens.push(record);
  data.tokens = data.tokens.filter((item) => new Date(item.expiresAt) >= new Date());
  return record.token;
}
