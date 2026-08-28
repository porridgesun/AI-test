(function () {
  const items = Array.from(document.querySelectorAll(".training-faq > .faq-item"));
  const duration = 460;
  const easeInOut = (t) => (
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
  );

  function innerHeight(item) {
    const inner = item.querySelector(".faq-answer");
    return inner ? inner.offsetHeight : 0;
  }

  function animate(item, open) {
    const wrap = item.querySelector(".faq-answer-wrap");
    if (!wrap) return;
    if (wrap._raf) cancelAnimationFrame(wrap._raf);

    const from = wrap.offsetHeight;
    const to = open ? innerHeight(item) : 0;
    const start = performance.now();

    function frame(now) {
      let progress = (now - start) / duration;
      if (progress > 1) progress = 1;
      const eased = easeInOut(progress);
      wrap.style.height = `${from + (to - from) * eased}px`;

      if (progress < 1) {
        wrap._raf = requestAnimationFrame(frame);
      } else {
        wrap._raf = 0;
        wrap.style.height = open ? "auto" : "0px";
      }
    }

    wrap._raf = requestAnimationFrame(frame);
  }

  items.forEach((item) => {
    const wrap = item.querySelector(".faq-answer-wrap");
    if (wrap) wrap.style.height = item.open ? "auto" : "0px";

    const summary = item.querySelector("summary");
    if (!summary) return;

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      const willOpen = !item.open;

      if (willOpen) {
        items.forEach((other) => {
          if (other !== item && other.open) {
            other.open = false;
            animate(other, false);
          }
        });
        item.open = true;
        animate(item, true);
      } else {
        item.open = false;
        animate(item, false);
      }
    });
  });
})();
