import { useEffect, useMemo, useRef, useState } from "react";
import { SignIn } from "@phosphor-icons/react";
import { ScreenReflection } from "./ScreenReflection.jsx";
import { WarpedMediaCanvas } from "./WarpedMediaCanvas.jsx";

const STAGE_WIDTH = 1672;
const STAGE_HEIGHT = 941;
const SPEED = 42;

const PRESET_SCREEN_CURVES = {
  version: 1,
  top: [
    { x: 0, y: 0.049389567147613764 },
    { x: 0.29172468254646355, y: 0.11493941326530613 },
    { x: 0.38132211800152943, y: 0.10266370699223086 },
    { x: 0.5727263922539709, y: 0.10473533163265306 },
    { x: 0.7293296527642158, y: 0.10269451530612245 },
    { x: 0.8729008372188588, y: 0.08024553571428572 },
    { x: 1, y: 0.039400665926748055 },
  ],
  bottom: [
    { x: 0, y: 0.7068027210884353 },
    { x: 0.1527045267021226, y: 0.6670366259711432 },
    { x: 0.267950279693217, y: 0.6770255271920089 },
    { x: 0.47314393745784855, y: 0.6703662597114317 },
    { x: 0.6925754295438271, y: 0.6700414540816326 },
    { x: 0.8582334047695543, y: 0.6770255271920089 },
    { x: 1, y: 0.7149659863945578 },
  ],
};

const DEFAULT_MEDIA = Array.from({ length: 7 }, (_, index) => ({
  id: `demo-${index + 1}`,
  type: "image",
  src: `/assets/adaptive-carousel/card_image${index + 1}.jpg`,
}));

function cubicPoint(start, control1, control2, end, progress) {
  const inverse = 1 - progress;
  return {
    x: inverse ** 3 * start.x
      + 3 * inverse ** 2 * progress * control1.x
      + 3 * inverse * progress ** 2 * control2.x
      + progress ** 3 * end.x,
    y: inverse ** 3 * start.y
      + 3 * inverse ** 2 * progress * control1.y
      + 3 * inverse * progress ** 2 * control2.y
      + progress ** 3 * end.y,
  };
}

function sampleCurve(points, samplesPerSegment = 72) {
  const sampled = [];
  for (let segment = 0; segment < 2; segment += 1) {
    const offset = segment * 3;
    for (let index = 0; index <= samplesPerSegment; index += 1) {
      if (segment > 0 && index === 0) continue;
      sampled.push(cubicPoint(
        points[offset],
        points[offset + 1],
        points[offset + 2],
        points[offset + 3],
        index / samplesPerSegment,
      ));
    }
  }
  return sampled;
}

function createClipPath(curves) {
  const top = sampleCurve(curves.top);
  const bottom = sampleCurve(curves.bottom);
  return `polygon(${[...top, ...[...bottom].reverse()]
    .map((point) => `${(point.x * 100).toFixed(3)}% ${(point.y * 100).toFixed(3)}%`)
    .join(",")})`;
}

export function AdaptiveCarousel() {
  const shellRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [loginRequested, setLoginRequested] = useState(false);
  const clipPath = useMemo(() => createClipPath(PRESET_SCREEN_CURVES), []);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return undefined;
    const resize = () => setScale(Math.max(
      shell.clientWidth / STAGE_WIDTH,
      shell.clientHeight / STAGE_HEIGHT,
    ));
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(shell);
    return () => observer.disconnect();
  }, []);

  const requestLogin = () => {
    if (loginRequested) return;
    window.dispatchEvent(new CustomEvent("studio-login-request"));
    setLoginRequested(true);
  };

  return (
    <section className="newsroom-shell" ref={shellRef} aria-label="狐狸演播室媒体轮播">
      <div className="newsroom-stage-frame" style={{ width: STAGE_WIDTH * scale, height: STAGE_HEIGHT * scale }}>
        <div
          className={`newsroom-stage ${loginRequested ? "is-login-blackout" : ""}`}
          style={{ transform: `scale(${scale})` }}
        >
          <div className="newsroom-screen" style={{ clipPath }} aria-label="自动滚动曲面屏">
            <div className="newsroom-screen-glass" aria-hidden="true" />
            <WarpedMediaCanvas
              curves={PRESET_SCREEN_CURVES}
              media={DEFAULT_MEDIA}
              paused={false}
              speed={SPEED}
            />
            <div className="newsroom-screen-shade" aria-hidden="true" />
          </div>

          <ScreenReflection />

          <img
            className="studio-lighting-atmosphere"
            src="/assets/studio/studio-lighting-atmosphere.png"
            alt=""
            aria-hidden="true"
            draggable="false"
          />
          <div className="studio-depth-overlay" aria-hidden="true" />

          <img
            className="newsroom-fox-foreground"
            src="/assets/studio/fox-presenter-foreground.png"
            alt=""
            aria-hidden="true"
            draggable="false"
          />

          <div className="studio-blackout-overlay" aria-hidden="true" />

          {!loginRequested && (
            <button
              className="studio-login-button"
              type="button"
              onClick={requestLogin}
              aria-label="登录"
            >
              <SignIn weight="bold" />
              <span>登录</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
