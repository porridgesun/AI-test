import { useEffect, useRef, useState } from "react";
import { useFullyBufferedVideo } from "./useFullyBufferedVideo.js";
import FIXED_LOGIN_VIDEO_PRESET from "./login-transition-preset.json";
import { RoleLoginPanel } from "./RoleLoginPanel.jsx";
import FIXED_LOGIN_LAYOUT from "./login-layout-preset.json";

const LOGIN_VIDEO = [
  {
    src: "/assets/studio/login-transition.mp4",
    type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    mimeType: "video/mp4",
  },
];

const BLACKOUT_SETTLE_MS = 560;
const FRAME_SECONDS = 1 / 30;
const ROLE_REVEAL_LEAD_SECONDS = 0.8;
const STAGE_WIDTH = 1672;
const STAGE_HEIGHT = STAGE_WIDTH * 9 / 16;

function resolveFixedBounds(duration) {
  const safeDuration = Number.isFinite(duration) && duration > 0 ? duration : 0;
  const start = Math.min(Math.max(0, FIXED_LOGIN_VIDEO_PRESET.trimStart), Math.max(0, safeDuration - FRAME_SECONDS));
  const end = Math.min(
    Math.max(start + FRAME_SECONDS, FIXED_LOGIN_VIDEO_PRESET.trimEnd ?? safeDuration),
    safeDuration,
  );
  return { start, end };
}

function skipDeletedFrames(time, end) {
  let playableTime = time;
  FIXED_LOGIN_VIDEO_PRESET.cuts.forEach((cut) => {
    if (playableTime >= cut.start && playableTime < cut.end) {
      playableTime = Math.min(cut.end, end);
    }
  });
  return playableTime;
}

export function LoginTransition() {
  const hostRef = useRef(null);
  const videoRef = useRef(null);
  const requestedAtRef = useRef(0);
  const source = useFullyBufferedVideo(LOGIN_VIDEO);
  const [requested, setRequested] = useState(false);
  const [ready, setReady] = useState(false);
  const [phase, setPhase] = useState("preloading");
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [roleFlowPhase, setRoleFlowPhase] = useState("roles");
  const [stageScale, setStageScale] = useState(1);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const resize = () => setStageScale(Math.max(
      host.clientWidth / STAGE_WIDTH,
      host.clientHeight / STAGE_HEIGHT,
    ));

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const requestPlayback = () => {
      requestedAtRef.current = performance.now();
      setShowRoleSelection(false);
      setSelectedRole(null);
      setRoleFlowPhase("roles");
      setRequested(true);
      setPhase((current) => current === "preloading" ? "waiting" : current);
    };

    window.addEventListener("studio-login-request", requestPlayback);
    return () => window.removeEventListener("studio-login-request", requestPlayback);
  }, []);

  useEffect(() => {
    if (!requested || !ready) return undefined;

    const remainingBlackout = Math.max(
      0,
      BLACKOUT_SETTLE_MS - (performance.now() - requestedAtRef.current),
    );

    const timer = window.setTimeout(async () => {
      const video = videoRef.current;
      if (!video) return;

      const bounds = resolveFixedBounds(video.duration);
      video.currentTime = skipDeletedFrames(bounds.start, bounds.end);
      video.playbackRate = FIXED_LOGIN_VIDEO_PRESET.playbackRate;
      setPhase("starting");
      try {
        await video.play();
      } catch {
        setPhase("waiting");
      }
    }, remainingBlackout);

    return () => window.clearTimeout(timer);
  }, [ready, requested]);

  const freezeLastFrame = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      if (Number.isFinite(video.duration) && video.duration > 0) {
        const bounds = resolveFixedBounds(video.duration);
        video.currentTime = Math.max(bounds.start, bounds.end - FRAME_SECONDS);
      }
    }
    setShowRoleSelection(true);
    setPhase("frozen");
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || video.paused || !Number.isFinite(video.duration)) return;
    const bounds = resolveFixedBounds(video.duration);
    const cut = FIXED_LOGIN_VIDEO_PRESET.cuts.find((item) => video.currentTime >= item.start && video.currentTime < item.end);
    if (cut) video.currentTime = Math.min(cut.end, bounds.end);
    const revealLeadInVideoTime = ROLE_REVEAL_LEAD_SECONDS * video.playbackRate;
    if (video.currentTime >= bounds.end - revealLeadInVideoTime) {
      setShowRoleSelection(true);
    }
    if (video.currentTime >= bounds.end - FRAME_SECONDS / 2) freezeLastFrame();
  };

  const visible = phase === "playing" || phase === "frozen";

  const selectRole = (role) => {
    setSelectedRole(role);
    setRoleFlowPhase("leaving");
    window.dispatchEvent(new CustomEvent("studio-role-selected", {
      detail: { role },
    }));
    window.setTimeout(() => setRoleFlowPhase("form"), 250);
  };

  return (
    <section
      ref={hostRef}
      className={`login-transition ${visible ? "login-transition--visible" : ""}`}
      data-transition-phase={phase}
      data-has-role-selection={showRoleSelection ? "true" : "false"}
      aria-hidden={!showRoleSelection}
    >
      <div
        className="login-transition__stage"
        style={{ transform: `translate(-50%, -50%) scale(${stageScale})` }}
      >
        {source && (
          <video
            ref={videoRef}
            className="login-transition__video"
            src={source}
            preload="auto"
            muted
            playsInline
            disablePictureInPicture
            style={{
              filter: `brightness(${FIXED_LOGIN_VIDEO_PRESET.brightness})`,
              transform: `translate(${FIXED_LOGIN_VIDEO_PRESET.offsetX}%, ${FIXED_LOGIN_VIDEO_PRESET.offsetY}%) scale(${FIXED_LOGIN_VIDEO_PRESET.scale})`,
            }}
            onLoadedData={() => {
              const video = videoRef.current;
              video?.pause();
              if (video) {
                const bounds = resolveFixedBounds(video.duration);
                video.currentTime = skipDeletedFrames(bounds.start, bounds.end);
                video.playbackRate = FIXED_LOGIN_VIDEO_PRESET.playbackRate;
              }
              setReady(true);
              setPhase((current) => current === "preloading" ? "ready" : current);
            }}
            onTimeUpdate={handleTimeUpdate}
            onPlaying={() => setPhase("playing")}
            onEnded={freezeLastFrame}
            onError={() => setPhase(requested ? "waiting" : "preloading")}
          />
        )}

        {showRoleSelection && roleFlowPhase !== "form" && (
          <div
            className={`role-selection-scene ${roleFlowPhase === "leaving" ? "role-selection-scene--leaving" : ""}`}
            data-selected-role={selectedRole ?? ""}
            aria-label="选择登录入口"
          >
            <img
              className="role-selection-scene__bubble"
              src="/assets/studio/role-question-bubble.png"
              alt=""
              aria-hidden="true"
              draggable="false"
            />
            <div className="role-selection-scene__accessible-copy">
              <h1>你是什么身份？</h1>
              <p>请选择学员端或管理端</p>
            </div>
            <button
              className={`role-selection-hotspot role-selection-hotspot--student ${selectedRole === "student" ? "is-selected" : ""}`}
              type="button"
              aria-label="学员端，进入学习中心"
              aria-pressed={selectedRole === "student"}
              onClick={() => selectRole("student")}
            >
              <img
                src="/assets/studio/role-student-button.png"
                alt=""
                aria-hidden="true"
                draggable="false"
              />
            </button>
            <button
              className={`role-selection-hotspot role-selection-hotspot--admin ${selectedRole === "admin" ? "is-selected" : ""}`}
              type="button"
              aria-label="管理端，进入管理后台"
              aria-pressed={selectedRole === "admin"}
              onClick={() => selectRole("admin")}
            >
              <img
                src="/assets/studio/role-admin-button.png"
                alt=""
                aria-hidden="true"
                draggable="false"
              />
            </button>
            <p className="role-selection-scene__status" aria-live="polite">
              {selectedRole === "student" && "已选择学员端"}
              {selectedRole === "admin" && "已选择管理端"}
            </p>
          </div>
        )}

        {showRoleSelection && roleFlowPhase === "form" && (
          <RoleLoginPanel
            role={selectedRole}
            layout={FIXED_LOGIN_LAYOUT}
            onBack={() => {
              setSelectedRole(null);
              setRoleFlowPhase("roles");
            }}
          />
        )}
      </div>
    </section>
  );
}
