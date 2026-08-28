(function () {
  const positionKey = "global-cursor-position";
  const cursor = document.createElement("div");
  cursor.className = "global-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L5.94 2.47a.5.5 0 0 0-.44.74Z"
        fill="#000000" stroke="#ffffff" stroke-width="1.1" stroke-linejoin="round"/>
    </svg>
  `;
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let hasPointer = false;
  let saveFrame = 0;

  function restorePosition() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(positionKey) || "null");
      if (!saved) return;
      if (!Number.isFinite(saved.x) || !Number.isFinite(saved.y)) return;
      x = saved.x;
      y = saved.y;
      hasPointer = true;
    } catch (error) {
      // Storage can be unavailable in restricted browser contexts.
    }
  }

  function writePosition() {
    try {
      sessionStorage.setItem(positionKey, JSON.stringify({ x, y }));
    } catch (error) {
      // Ignore storage failures; the cursor will still appear on first move.
    }
  }

  function savePosition(immediate) {
    if (immediate) {
      if (saveFrame) cancelAnimationFrame(saveFrame);
      saveFrame = 0;
      writePosition();
      return;
    }

    if (saveFrame) return;
    saveFrame = requestAnimationFrame(() => {
      saveFrame = 0;
      writePosition();
    });
  }

  restorePosition();
  cursor.style.transform = `translate(${x}px, ${y}px)`;
  if (hasPointer) cursor.classList.add("is-visible");

  // When loaded from <head>, body may not exist for a few parser steps.
  // Attach to <html> first so the custom pointer is visible on first paint.
  (document.body || document.documentElement).appendChild(cursor);
  document.addEventListener("DOMContentLoaded", () => {
    if (cursor.parentNode !== document.body) document.body.appendChild(cursor);
  });

  function updatePosition(event) {
    x = event.clientX;
    y = event.clientY;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    cursor.classList.add("is-visible");
  }

  window.addEventListener("pointermove", (event) => {
    updatePosition(event);
    savePosition();
  }, { passive: true });

  window.addEventListener("pointerdown", (event) => {
    updatePosition(event);
    savePosition(true);
  }, { passive: true });

  window.addEventListener("pagehide", () => savePosition(true));
})();
