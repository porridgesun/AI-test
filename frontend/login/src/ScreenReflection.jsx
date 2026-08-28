import { useEffect, useRef } from "react";

const STAGE_WIDTH = 1672;
const STAGE_HEIGHT = 941;

export function ScreenReflection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    let animationFrame;
    const draw = () => {
      const source = document.querySelector(".newsroom-warp-canvas");
      context.clearRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);

      if (source?.width && source?.height) {
        context.save();
        context.beginPath();
        context.moveTo(166, 846);
        context.lineTo(1506, 846);
        context.lineTo(1642, 941);
        context.lineTo(30, 941);
        context.closePath();
        context.clip();
        context.globalAlpha = 0.15;
        context.filter = "blur(9px) saturate(1.18)";
        context.drawImage(source, 0, 478, STAGE_WIDTH, 228, 116, 936, 1440, -102);
        context.restore();

        context.save();
        context.globalCompositeOperation = "destination-in";
        const fade = context.createLinearGradient(0, 840, 0, 941);
        fade.addColorStop(0, "rgba(0, 0, 0, .78)");
        fade.addColorStop(1, "rgba(0, 0, 0, 0)");
        context.fillStyle = fade;
        context.fillRect(0, 830, STAGE_WIDTH, 111);
        context.restore();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    animationFrame = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="studio-floor-reflection"
      width={STAGE_WIDTH}
      height={STAGE_HEIGHT}
      aria-hidden="true"
    />
  );
}
