/* =========================================================
   qframe.js — 训练页共享引擎（与 level.html 作答体验一致）
   依赖：页面先定义 window.TRAIN_POOL（题目数组）
   题目结构：
   { q, type:'single'|'multi'|'judge'|'dialogue'|'task',
     typeLabel?, options:[{key,text}], answer:[keys], analysis, dims:[...] }
   ========================================================= */
(function () {
  "use strict";

  var STORE_KEY = "aiquos_trained_total";

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function getTrained() {
    var n = parseInt(localStorage.getItem(STORE_KEY) || "0", 10);
    return isNaN(n) ? 0 : n;
  }
  function addTrained(delta) {
    var n = getTrained() + delta;
    localStorage.setItem(STORE_KEY, String(n));
    var el = $("trainedCount");
    if (el) el.textContent = n;
    return n;
  }
  function reportPractice(correct, question, selected) {
    var token = "";
    try { token = localStorage.getItem("ai-auth-token") || ""; } catch (e) { token = ""; }
    if (!token) return;
    fetch("/api/quiz/practice/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        correct: Boolean(correct),
        questionId: question.id || null,
        source: "training",
        sourceLabel: "能力训练",
        question: {
          id: question.id || null,
          q: question.q,
          type: question.type,
          typeLabel: question.typeLabel || TYPE_LABEL[question.type] || "题目",
          options: question.options,
          answer: question.answer,
          analysis: question.analysis,
          dims: question.dims
        },
        selected: [...selected]
      })
    }).catch(function () { /* 练习统计离线时可静默补记，不阻断作答 */ });
  }

  var TYPE_LABEL = {
    single: "单选题", multi: "多选题", judge: "判断题",
    dialogue: "对话训练", task: "实操任务"
  };

  var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // 8-bit 音效
  var audioCtx = null;
  function beep(kind) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      var o = audioCtx.createOscillator();
      var g = audioCtx.createGain();
      o.connect(g); g.connect(audioCtx.destination);
      var t = audioCtx.currentTime;
      if (kind === "correct") {
        o.type = "square";
        o.frequency.setValueAtTime(660, t);
        o.frequency.setValueAtTime(880, t + 0.09);
        o.frequency.setValueAtTime(1046, t + 0.18);
        g.gain.setValueAtTime(0.09, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
        o.start(t); o.stop(t + 0.34);
      } else {
        o.type = "sawtooth";
        o.frequency.setValueAtTime(170, t);
        o.frequency.setValueAtTime(120, t + 0.12);
        g.gain.setValueAtTime(0.09, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
        o.start(t); o.stop(t + 0.32);
      }
    } catch (e) { /* 静默 */ }
  }

  function applyFeedbackFx(qcard, isCorrect, dimsBox) {
    qcard.classList.add(isCorrect ? "fx-correct" : "fx-wrong");
    beep(isCorrect ? "correct" : "wrong");
    if (isCorrect) {
      var star = document.createElement("div");
      star.className = "star-pop";
      star.textContent = "★";
      (dimsBox || qcard).appendChild(star);
      setTimeout(function () { if (star.parentNode) star.remove(); }, 2800);
    }
  }

  function init() {
    var pool = (window.TRAIN_POOL || []).slice();
    var quizInner = $("quizInner");
    var quizPane = $("quizPane");
    var countEl = $("trainedCount");
    if (!quizInner) return;
    if (countEl) countEl.textContent = getTrained();
    if (!pool.length) {
      quizInner.innerHTML = '<div class="qcard"><div class="qstem">题库为空。</div></div>';
      return;
    }

    var order = shuffle(pool);
    var total = order.length;
    var qi = 0;
    var answeredMap = new Map();

    function questionKey(q) {
      return String(q.id || q.q || "");
    }

    function revealAnswer(q, selected, isCorrect, animate) {
      var optEls = quizInner.querySelectorAll(".opt");
      var qcard = quizInner.querySelector(".qcard");
      var fb = quizInner.querySelector(".feedback");
      var ans = new Set(q.answer.map(String));
      if (animate) applyFeedbackFx(qcard, isCorrect, fb.querySelector(".fb-dims"));

      optEls.forEach(function (b) {
        var k = b.dataset.key;
        b.classList.add("locked");
        if (ans.has(k)) b.classList.add("correct");
        else if (selected.has(k)) b.classList.add("wrong");
      });
      fb.querySelector(".fb-analysis").innerHTML = "<b>解析：</b>" + esc(q.analysis);
      fb.querySelector(".fb-answer").textContent = "正确答案：" + q.options
        .filter(function (o) { return ans.has(o.key); })
        .map(function (o) { return o.key + ". " + o.text; }).join("；");
      fb.classList.add("show");
    }

    function showQuestion() {
      if (qi >= total) { renderDone(); return; }
      var q = order[qi];
      var typeLabel = q.typeLabel || TYPE_LABEL[q.type] || "题目";
      var opts = q.options.map(function (o) {
        return '<button class="opt" data-key="' + esc(o.key) + '"><span class="key">' + esc(o.key) + '</span><span class="otext">' + esc(o.text) + '</span></button>';
      }).join("");
      var dimTags = (q.dims || []).map(function (d) { return '<span class="dim">' + esc(d) + "</span>"; }).join("");

      quizInner.innerHTML =
        '<div class="qcard">' +
          '<div class="qhead"><span>题目 ' + (qi + 1) + " / " + total + '</span><span class="qtype">' + esc(typeLabel) + "</span></div>" +
          '<div class="qstem">' + esc(q.q) + "</div>" +
          '<div class="opts">' + opts + "</div>" +
          '<div class="feedback">' +
            '<div class="fb-analysis"></div>' +
            '<div class="fb-answer"></div>' +
          '<div class="fb-dims"><span>能力维度：</span>' + dimTags + "</div>" +
          "</div>" +
          '<div class="qnext">' +
            '<button class="btn white" id="prevBtn"' + (qi === 0 ? " disabled" : "") + '>上一题</button>' +
            '<div class="qnext-right"><button class="btn" id="nextBtn"' +
              (answeredMap.has(questionKey(q)) ? "" : " disabled") + '>' +
              (qi === total - 1 ? "本轮完成" : "下一题") + ARROW + "</button></div>" +
          "</div>" +
        "</div>";
      quizPane.scrollTop = 0;

      var optEls = quizInner.querySelectorAll(".opt");
      var fb = quizInner.querySelector(".feedback");
      var qnext = quizInner.querySelector(".qnext");
      var nextBtn = $("nextBtn");
      var prevBtn = $("prevBtn");
      var answered = false;
      var ans = new Set(q.answer.map(String));
      var existing = answeredMap.get(questionKey(q));

      prevBtn.addEventListener("click", function () {
        if (qi > 0) { qi -= 1; showQuestion(); }
      });
      nextBtn.addEventListener("click", function () {
        qi += 1;
        showQuestion();
      });

      if (existing) {
        revealAnswer(q, new Set(existing.selected), existing.correct, false);
        answered = true;
        quizPane.scrollTop = 0;
      }

      function judge(selected) {
        answered = true;
        var isCorrect = q.type === "multi"
          ? (selected.size === ans.size && [...ans].every(function (k) { return selected.has(k); }))
          : ans.has([...selected][0]);
        answeredMap.set(questionKey(q), { selected: [...selected], correct: isCorrect });
        revealAnswer(q, selected, isCorrect, true);

        addTrained(1); // 每作答一题累计
        reportPractice(isCorrect, q, selected);

        nextBtn.disabled = false;
        qnext.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      if (q.type === "multi") {
        var selected = new Set();
        if (!answered) {
          var submitBtn = document.createElement("button");
          submitBtn.className = "btn";
          submitBtn.textContent = "提交答案";
          submitBtn.disabled = true;
          nextBtn.parentNode.insertBefore(submitBtn, nextBtn);
          optEls.forEach(function (btn) {
            btn.addEventListener("click", function () {
              if (answered) return;
              var k = btn.dataset.key;
              if (selected.has(k)) { selected.delete(k); btn.classList.remove("sel"); }
              else { selected.add(k); btn.classList.add("sel"); }
              submitBtn.disabled = selected.size === 0;
            });
          });
          submitBtn.addEventListener("click", function () {
            if (answered || selected.size === 0) return;
            judge(selected);
          });
        }
      } else {
        if (!answered) {
          optEls.forEach(function (btn) {
            btn.addEventListener("click", function () {
              if (answered) return;
              judge(new Set([btn.dataset.key]));
            });
          });
        }
      }
    }

    function renderDone() {
      var n = getTrained();
      quizInner.innerHTML =
        '<div class="qcard">' +
          '<div class="qhead"><span>训练完成</span><span class="qtype">本轮 ' + total + " 题</span></div>" +
          '<div class="qstem">本轮 ' + total + " 题已全部完成！累计已训练 <b>" + n + "</b> 题。</div>" +
          '<div class="qnext"><button class="btn" id="restartBtn">再来一轮 ' + ARROW + "</button></div>" +
        "</div>";
      quizPane.scrollTop = 0;
      var rb = $("restartBtn");
      if (rb) rb.addEventListener("click", function () { order = shuffle(pool); qi = 0; showQuestion(); });
    }

    showQuestion();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
