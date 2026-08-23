import { useCallback, useEffect, useRef, useState } from "react";
import { useFullyBufferedVideo } from "./useFullyBufferedVideo.js";

const EXIT_DURATION_MS = 420;
const FAILSAFE_DURATION_MS = 30000;

const INTRO_VIDEOS = [
  {
    src: "/assets/studio/brand-intro-alpha.webm",
    type: 'video/webm; codecs="vp9"',
    mimeType: "video/webm",
  },
  {
    src: "/assets/studio/brand-intro-alpha.mov",
    type: 'video/quicktime; codecs="hvc1"',
    mimeType: "video/quicktime",
  },
];

export function BrandIntro() {
  const videoRef = useRef(null);
  const exitTimerRef = useRef(null);
  const playStartedRef = useRef(false);
  const source = useFullyBufferedVideo(INTRO_VIDEOS);
  const [phase, setPhase] = useState("loading");
  const [visible, setVisible] = useState(true);

  const dismiss = useCallback(() => {
    setPhase((current) => {
      if (current === "exiting") return current;
      exitTimerRef.current = window.setTimeout(() => setVisible(false), EXIT_DURATION_MS);
      return "exiting";
    });
  }, []);

  useEffect(() => {
    const failsafe = window.setTimeout(dismiss, FAILSAFE_DURATION_MS);
    return () => {
      window.clearTimeout(failsafe);
      window.clearTimeout(exitTimerRef.current);
    };
  }, [dismiss]);

  if (!visible) return null;

  return (
    <section
      className={`brand-intro brand-intro--${phase}`}
      aria-label="品牌开场动画"
      data-intro-phase={phase}
    >
      <video
        ref={videoRef}
        className="brand-intro__video"
        src={source ?? undefined}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        onLoadedData={async () => {
          if (playStartedRef.current) return;
          playStartedRef.current = true;
          setPhase("starting");
          try {
            await videoRef.current?.play();
          } catch {
            dismiss();
          }
        }}
        onPlaying={() => setPhase("playing")}
        onEnded={dismiss}
        onError={dismiss}
        aria-hidden="true"
      />

    </section>
  );
}
