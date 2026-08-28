import {
  ArrowLeft,
  EnvelopeSimple,
  Eye,
  EyeSlash,
  GraduationCap,
  LockKey,
  DeviceMobile,
  ShieldCheck,
  WechatLogo,
} from "@phosphor-icons/react";
import { useState } from "react";

const ROLE_COPY = {
  student: {
    title: "学员端登录",
    registrationTitle: "学员端注册",
    accent: "student",
    Icon: GraduationCap,
  },
  admin: {
    title: "管理端登录",
    registrationTitle: "管理端注册",
    accent: "admin",
    Icon: ShieldCheck,
  },
};

export function RoleLoginPanel({ role = "student", onBack, layout }) {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const copy = ROLE_COPY[role] ?? ROLE_COPY.student;
  const RoleIcon = copy.Icon;
  const registering = mode === "register";

  const layoutStyle = (key) => ({
    "data-layout-key": key,
    style: {
      "--layout-x": `${layout?.[key]?.x ?? 0}%`,
      "--layout-y": `${layout?.[key]?.y ?? 0}%`,
      "--layout-scale": layout?.[key]?.scale ?? 1,
    },
  });

  const submit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    const form = new FormData(event.currentTarget);
    const account = String(form.get("identity") || "").trim();
    const password = String(form.get("password") || "");
    const endpoint = registering ? "/api/auth/register" : "/api/auth/login";
    const payload = registering
      ? {
          account,
          password,
          role: role === "admin" ? "teacher" : "student",
          scope: role,
        }
      : { account, password, scope: role };

    setSubmitting(true);
    setStatus(registering ? "正在创建账号…" : "正在验证身份…");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const remoteMessage = typeof data.error === "object" ? data.error?.message : data.error;
        throw new Error(remoteMessage || data.message || "请求失败，请稍后再试");
      }

      localStorage.setItem("ai-auth-token", data.token || "");
      localStorage.setItem("ai-auth-role", data.user?.role || "student");
      setStatus(registering ? "注册成功，正在进入…" : "登录成功，正在进入…");
      window.setTimeout(() => {
        window.location.href = role === "student" ? "/student.html" : "/teacher.html";
      }, 420);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "请求失败，请稍后再试");
    } finally {
      setSubmitting(false);
    }
  };

  const useAlternative = (provider) => {
    setStatus(`正在使用${provider}登录`);
  };

  return (
    <section
      {...layoutStyle("panel")}
      className={`role-login-panel role-login-panel--${copy.accent}`}
      aria-label={registering ? copy.registrationTitle : copy.title}
    >
      <button {...layoutStyle("back")} className="role-login-panel__back" type="button" onClick={onBack}>
        <ArrowLeft weight="bold" aria-hidden="true" />
        返回
      </button>

      <header {...layoutStyle("heading")} className="role-login-panel__heading">
        <span className="role-login-panel__badge" aria-hidden="true">
          <RoleIcon weight="fill" />
        </span>
        <h1>{registering ? copy.registrationTitle : copy.title}</h1>
      </header>

      <form className="role-login-panel__form" onSubmit={submit}>
        <label {...layoutStyle("identity")} className="role-login-field illustrated-control">
          <DeviceMobile weight="regular" aria-hidden="true" />
          <span className="sr-only">手机号或邮箱</span>
          <input name="identity" type="text" autoComplete="username" placeholder="账号或邮箱" required />
        </label>

        <label {...layoutStyle("password")} className="role-login-field illustrated-control">
          <LockKey weight="fill" aria-hidden="true" />
          <span className="sr-only">密码</span>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete={registering ? "new-password" : "current-password"}
            placeholder="密码"
            required
          />
          <button
            className="role-login-field__reveal"
            type="button"
            aria-label={showPassword ? "隐藏密码" : "显示密码"}
            onClick={() => setShowPassword((current) => !current)}
          >
            {showPassword ? <EyeSlash weight="bold" /> : <Eye weight="bold" />}
          </button>
        </label>

        <button {...layoutStyle("submit")} className="role-login-panel__submit illustrated-control" type="submit" disabled={submitting} aria-busy={submitting}>
          {submitting ? "请稍候…" : registering ? "注册" : "登录"}
        </button>
      </form>

      <button
        {...layoutStyle("switch")}
        className="role-login-panel__switch"
        type="button"
        onClick={() => {
          setMode(registering ? "login" : "register");
          setStatus("");
        }}
      >
        {registering ? "已有账号？" : "还没有账号？"}
        <strong>{registering ? "立即登录" : "立即注册"}</strong>
      </button>

      <div {...layoutStyle("divider")} className="role-login-panel__divider" aria-hidden="true"><span>或</span></div>

      <div className="role-login-panel__alternatives">
        <button {...layoutStyle("wechat")} className="role-login-alternative role-login-alternative--wechat illustrated-control" type="button" onClick={() => useAlternative("微信")}>
          <WechatLogo weight="fill" aria-hidden="true" />
          微信登录
        </button>
        <button {...layoutStyle("email")} className="role-login-alternative role-login-alternative--email illustrated-control" type="button" onClick={() => useAlternative("邮箱")}>
          <EnvelopeSimple weight="fill" aria-hidden="true" />
          邮箱登录
        </button>
      </div>

      <p className="role-login-panel__status" aria-live="polite">{status}</p>
    </section>
  );
}
