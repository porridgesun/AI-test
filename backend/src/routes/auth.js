import { createToken, hashPassword, verifyPassword } from "../security.js";
import { httpError } from "../server.js";
import { publicUser } from "../domain.js";

export function registerAuthRoutes(router, { store }) {
  router.post("/api/auth/register", (ctx) => {
    const { account, password, role = "student", name, classId } = ctx.body || {};
    const normalizedAccount = String(account || "").trim();
    const normalizedRole = String(role || "").trim();
    if (normalizedAccount.length < 3) throw httpError(400, "账号至少3个字符");
    if (String(password || "").length < 6) throw httpError(400, "密码至少6位");
    if (!["student", "teacher", "admin"].includes(normalizedRole)) {
      throw httpError(400, "仅支持注册学员或管理员账号");
    }
    const portal = portalForRole(normalizedRole);
    if (store.data.users.some((item) => portalForRole(item.role) === portal && item.account === normalizedAccount)) {
      throw httpError(409, `该账号在${portal === "student" ? "学员端" : "管理端"}已存在`);
    }

    return store.update((data) => {
      const userId = store.id("u");
      const { salt: passwordSalt, hash: passwordHash } = hashPassword(password);
      const user = {
        id: userId,
        account: normalizedAccount,
        role: normalizedRole,
        name: String(name || normalizedAccount).trim(),
        createdAt: new Date().toISOString(),
        passwordSalt,
        passwordHash
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
    const portal = normalizePortal(ctx.body?.scope || ctx.body?.portal);
    const candidates = store.data.users
      .filter((item) => item.account === account)
      .filter((item) => !portal || portalForRole(item.role) === portal);
    if (!candidates.length && !portal) {
      throw httpError(400, "请选择学员端或管理端");
    }
    const user = candidates.find((item) => {
      const salt = item.passwordSalt ?? item.salt;
      const hash = item.passwordHash ?? item.hash;
      return verifyPassword(password, salt, hash);
    });
    if (!user) {
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

  router.put("/api/auth/account", (ctx) => {
    const payload = ctx.body || {};
    const currentPassword = String(payload.currentPassword || "");
    const nextAccount = String(payload.account ?? "").trim();
    const nextPassword = typeof payload.newPassword === "string" ? payload.newPassword : "";
    const changesAccount = nextAccount && nextAccount !== ctx.user.account;
    const changesPassword = nextPassword.length > 0;
    if (!changesAccount && !changesPassword) throw httpError(400, "请输入新账号或新密码");
    if (changesAccount && nextAccount.length < 3) throw httpError(400, "账号至少3个字符");
    if (changesPassword && nextPassword.length < 6) throw httpError(400, "新密码至少6位");
    if (changesPassword && nextPassword.length > 64) throw httpError(400, "新密码最长64位");

    const credential = {
      salt: ctx.user.passwordSalt ?? ctx.user.salt,
      hash: ctx.user.passwordHash ?? ctx.user.hash
    };
    if (!verifyPassword(currentPassword, credential.salt, credential.hash)) {
      throw httpError(401, "当前密码不正确");
    }

    const portal = portalForRole(ctx.user.role);
    if (changesAccount && store.data.users.some((item) =>
      item.id !== ctx.user.id &&
      portalForRole(item.role) === portal &&
      item.account === nextAccount
    )) {
      throw httpError(409, `该账号在${portal === "student" ? "学员端" : "管理端"}已存在`);
    }

    return store.update((data) => {
      const user = data.users.find((item) => item.id === ctx.user.id);
      if (!user) throw httpError(404, "账号不存在");
      if (changesAccount) {
        user.account = nextAccount;
        const profiles = portal === "student" ? data.students : data.teachers;
        const profile = profiles.find((item) => item.userId === user.id);
        if (profile) {
          if (portal === "student") profile.studentNo = nextAccount;
          else profile.teacherNo = nextAccount;
        }
      }
      if (changesPassword) {
        const credentials = hashPassword(nextPassword);
        delete user.salt;
        delete user.hash;
        user.passwordSalt = credentials.salt;
        user.passwordHash = credentials.hash;
      }
      return { user: publicUser(user), accountChanged: changesAccount, passwordChanged: changesPassword };
    });
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

function normalizePortal(value) {
  const portal = String(value || "").trim().toLowerCase();
  if (!portal) return null;
  if (["student", "学员端", "学员端"].includes(portal)) return "student";
  if (["admin", "teacher", "管理端", "管理端"].includes(portal)) return "admin";
  throw httpError(400, "登录入口无效");
}

function portalForRole(role) {
  return role === "student" ? "student" : "admin";
}
