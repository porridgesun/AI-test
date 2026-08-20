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

  var body = document.body;
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-role]"));
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var usernameField = document.getElementById("usernameField");
  var passwordField = document.getElementById("passwordField");
  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");
  var submitButton = document.getElementById("submitButton");
  var overlay = document.getElementById("successOverlay");
  var toastEl = document.getElementById("toast");
  var toastTimer = null;

  var copy = {
    student: {
      eyebrow: "欢迎回来",
      title: "开始探索 AI 能力",
      sub: "登录后进入学生端",
      placeholder: "学号 / 邮箱",
      button: "进入学生端",
      successTitle: "欢迎回来，探险者",
      successText: "身份验证成功，正在进入学生端。"
    },
    teacher: {
      eyebrow: "欢迎回来，老师",
      title: "进入教学数据中心",
      sub: "登录后进入教师端",
      placeholder: "工号 / 邮箱",
      button: "进入教师端",
      successTitle: "欢迎回来，老师",
      successText: "身份验证成功，正在进入教师端。"
    }
  };

  function setRole(role) {
    var isTeacher = role === "teacher";
    body.classList.toggle("mode-teacher", isTeacher);
    body.classList.toggle("mode-student", !isTeacher);

    tabs.forEach(function (tab) {
      var active = tab.getAttribute("data-role") === role;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.setAttribute("tabindex", active ? "0" : "-1");
    });

    var text = copy[role];
    document.getElementById("authEyebrow").textContent = text.eyebrow;
    document.getElementById("authTitle").textContent = text.title;
    document.getElementById("authSub").textContent = text.sub;
    usernameInput.placeholder = text.placeholder;
    usernameInput.setAttribute("aria-label", isTeacher ? "教师账号" : "学生账号");
    submitButton.querySelector(".btn-label").textContent = text.button;
    document.title = isTeacher ? "AI能力测评智能体 · 教师登录" : "AI能力测评智能体 · 登录";
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      setRole(tab.getAttribute("data-role"));
      clearFieldError(usernameInput, usernameField, usernameError);
      clearFieldError(passwordInput, passwordField, passwordError);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (!document.activeElement || !document.activeElement.getAttribute("data-role")) {
      return;
    }
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }
    event.preventDefault();
    var index = tabs.indexOf(document.activeElement);
    var next = event.key === "ArrowRight" ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    tabs[next].focus();
    tabs[next].click();
  });

  var passwordToggle = document.querySelector(".password-toggle");
  passwordToggle.addEventListener("click", function () {
    var showing = passwordInput.type === "text";
    passwordInput.type = showing ? "password" : "text";
    passwordToggle.innerHTML = icon(showing ? "Eye" : "EyeOff");
    passwordToggle.setAttribute("aria-label", showing ? "显示密码" : "隐藏密码");
  });

  document.querySelectorAll(".demo-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      var role = button.getAttribute("data-fill");
      setRole(role);
      usernameInput.value = role === "teacher" ? "teacher" : "student";
      passwordInput.value = "123456";
      clearFieldError(usernameInput, usernameField, usernameError);
      clearFieldError(passwordInput, passwordField, passwordError);
      usernameInput.focus();
    });
  });

  function setFieldError(input, field, errorEl, message) {
    errorEl.textContent = message;
    field.classList.remove("shake");
    void field.offsetWidth;
    field.classList.add("shake");
    input.setAttribute("aria-invalid", "true");
  }

  function clearFieldError(input, field, errorEl) {
    errorEl.textContent = "";
    field.classList.remove("shake");
    input.removeAttribute("aria-invalid");
  }

  usernameInput.addEventListener("input", function () {
    clearFieldError(usernameInput, usernameField, usernameError);
  });

  passwordInput.addEventListener("input", function () {
    clearFieldError(passwordInput, passwordField, passwordError);
  });

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.hidden = false;
    requestAnimationFrame(function () {
      toastEl.classList.add("open");
    });
    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("open");
      setTimeout(function () {
        toastEl.hidden = true;
      }, 350);
    }, 2600);
  }

  document.getElementById("ssoButton").addEventListener("click", function () {
    showToast("演示环境暂未接入校园统一认证");
  });

  document.getElementById("ssoTopButton").addEventListener("click", function () {
    showToast("演示环境暂未接入校园统一认证");
  });

  var registerOverlay = document.getElementById("registerOverlay");
  var regTabs = Array.prototype.slice.call(document.querySelectorAll("[data-reg-role]"));
  var regAccountInput = document.getElementById("regAccount");
  var regPasswordInput = document.getElementById("regPassword");
  var regConfirmInput = document.getElementById("regConfirm");
  var regAccountField = document.getElementById("regAccountField");
  var regPasswordField = document.getElementById("regPasswordField");
  var regConfirmField = document.getElementById("regConfirmField");
  var regAccountError = document.getElementById("regAccountError");
  var regPasswordError = document.getElementById("regPasswordError");
  var regConfirmError = document.getElementById("regConfirmError");
  var regRole = "student";

  function setRegisterRole(role) {
    regRole = role;
    regTabs.forEach(function (tab) {
      var active = tab.getAttribute("data-reg-role") === role;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.setAttribute("tabindex", active ? "0" : "-1");
    });
    regAccountInput.placeholder = role === "teacher" ? "工号 / 邮箱" : "学号 / 邮箱";
    regAccountInput.setAttribute("aria-label", role === "teacher" ? "教师账号" : "学生账号");
  }

  function clearRegFieldError(input, field, errorEl) {
    clearFieldError(input, field, errorEl);
  }

  function openRegister() {
    setRegisterRole(body.classList.contains("mode-teacher") ? "teacher" : "student");
    registerOverlay.hidden = false;
    requestAnimationFrame(function () {
      registerOverlay.classList.add("open");
    });
  }

  function closeRegister() {
    registerOverlay.classList.remove("open");
    setTimeout(function () {
      registerOverlay.hidden = true;
    }, 380);
  }

  regTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      setRegisterRole(tab.getAttribute("data-reg-role"));
      clearRegFieldError(regAccountInput, regAccountField, regAccountError);
      clearRegFieldError(regPasswordInput, regPasswordField, regPasswordError);
      clearRegFieldError(regConfirmInput, regConfirmField, regConfirmError);
    });
  });

  document.getElementById("registerLink").addEventListener("click", openRegister);
  document.getElementById("registerClose").addEventListener("click", closeRegister);
  registerOverlay.addEventListener("click", function (event) {
    if (event.target === registerOverlay) {
      closeRegister();
    }
  });

  regAccountInput.addEventListener("input", function () {
    clearRegFieldError(regAccountInput, regAccountField, regAccountError);
  });
  regPasswordInput.addEventListener("input", function () {
    clearRegFieldError(regPasswordInput, regPasswordField, regPasswordError);
  });
  regConfirmInput.addEventListener("input", function () {
    clearRegFieldError(regConfirmInput, regConfirmField, regConfirmError);
  });

  document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var valid = true;
    var account = regAccountInput.value.trim();
    var password = regPasswordInput.value;
    var confirm = regConfirmInput.value;

    if (!account) {
      setFieldError(regAccountInput, regAccountField, regAccountError, "请输入账号");
      valid = false;
    } else if (account.length < 3) {
      setFieldError(regAccountInput, regAccountField, regAccountError, "账号至少 3 个字符");
      valid = false;
    }

    if (!password) {
      setFieldError(regPasswordInput, regPasswordField, regPasswordError, "请设置密码");
      valid = false;
    } else if (password.length < 6) {
      setFieldError(regPasswordInput, regPasswordField, regPasswordError, "密码至少 6 位");
      valid = false;
    }

    if (!confirm) {
      setFieldError(regConfirmInput, regConfirmField, regConfirmError, "请再次输入密码");
      valid = false;
    } else if (confirm !== password) {
      setFieldError(regConfirmInput, regConfirmField, regConfirmError, "两次输入的密码不一致");
      valid = false;
    }

    if (!valid) return;

    var submit = document.getElementById("registerSubmit");
    submit.classList.add("loading");
    submit.disabled = true;
    submit.querySelector(".spinner").hidden = false;

    setTimeout(function () {
      submit.classList.remove("loading");
      submit.disabled = false;
      submit.querySelector(".spinner").hidden = true;
      closeRegister();
      setRole(regRole);
      usernameInput.value = account;
      passwordInput.value = password;
      clearFieldError(usernameInput, usernameField, usernameError);
      clearFieldError(passwordInput, passwordField, passwordError);
      showToast(regRole === "teacher" ? "教师账号注册成功" : "学生账号注册成功");
      setTimeout(showSuccess, 500);
    }, 850);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !registerOverlay.hidden) {
      closeRegister();
    }
  });

  function showSuccess() {
    var isTeacher = body.classList.contains("mode-teacher");
    var text = copy[isTeacher ? "teacher" : "student"];
    var redirectTarget = isTeacher ? "teacher.html" : "student.html";
    document.getElementById("successTitle").textContent = text.successTitle;
    document.getElementById("successText").textContent = text.successText;
    var closeBtn = document.getElementById("successClose");
    closeBtn.querySelector("span").textContent = isTeacher ? "进入教师端" : "进入学生端";
    overlay.hidden = false;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add("open");
      });
    });
    setTimeout(function () {
      window.location.href = redirectTarget;
    }, 2000);
  }

  function hideSuccess() {
    overlay.classList.remove("open");
    setTimeout(function () {
      overlay.hidden = true;
    }, 380);
  }

  document.getElementById("successClose").addEventListener("click", function () {
    var target = body.classList.contains("mode-teacher") ? "teacher.html" : "student.html";
    window.location.href = target;
  });
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      hideSuccess();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !overlay.hidden) {
      hideSuccess();
    }
  });

    document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    var valid = true;
    var usernameValue = usernameInput.value.trim();
    var passwordValue = passwordInput.value;

    if (!usernameValue) {
      setFieldError(usernameInput, usernameField, usernameError, "请输入账号");
      valid = false;
    } else if (usernameValue.length < 3) {
      setFieldError(usernameInput, usernameField, usernameError, "账号至少 3 个字符");
      valid = false;
    } else {
      clearFieldError(usernameInput, usernameField, usernameError);
    }

    if (!passwordValue) {
      setFieldError(passwordInput, passwordField, passwordError, "请输入密码");
      valid = false;
    } else if (passwordValue.length < 6) {
      setFieldError(passwordInput, passwordField, passwordError, "密码至少 6 位");
      valid = false;
    } else {
      clearFieldError(passwordInput, passwordField, passwordError);
    }

    if (!valid) {
      return;
    }

    if (document.getElementById("remember").checked) {
      try {
        localStorage.setItem("ai-portal-username", usernameValue);
      } catch (e) {
        /* private mode: ignore */
      }
    }

    submitButton.classList.add("loading");
    submitButton.disabled = true;
    submitButton.querySelector(".spinner").hidden = false;

      try {
        var response = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ account: usernameValue, password: passwordValue })
        });
        var data = await response.json().catch(function () { return {}; });
        if (!response.ok || !data.token) {
          var remoteError = data.error && typeof data.error === "object" ? data.error.message : data.error;
          throw new Error(remoteError || data.message || "账号或密码不正确");
        }
        localStorage.setItem("ai-auth-token", data.token);
        localStorage.setItem("ai-auth-role", data.user && data.user.role ? data.user.role : "student");
        setRole(data.user && data.user.role === "teacher" ? "teacher" : "student");
        showSuccess();
      } catch (error) {
        showToast(error.message || "登录失败，请稍后重试");
      } finally {
        submitButton.classList.remove("loading");
        submitButton.disabled = false;
        submitButton.querySelector(".spinner").hidden = true;
      }
    });

  var remembered = null;
  try {
    remembered = localStorage.getItem("ai-portal-username");
  } catch (e) {
    /* ignore */
  }
  if (remembered) {
    usernameInput.value = remembered;
  }

  setRole("student");
})();
