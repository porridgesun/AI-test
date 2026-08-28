import { useEffect, useRef } from "react";
import * as THREE from "three";

const STAGE_WIDTH = 1672;
const STAGE_HEIGHT = 941;
const ITEM_WIDTH = 520;
const ITEM_GAP = 12;
const X_SEGMENTS = 24;
const Y_SEGMENTS = 8;

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

function sampleCurve(points, samplesPerSegment = 96) {
  const sampled = [];
  for (let segment = 0; segment < 2; segment += 1) {
    const offset = segment * 3;
    for (let index = 0; index <= samplesPerSegment; index += 1) {
      if (segment > 0 && index === 0) continue;
      sampled.push(cubicPoint(
        points[offset], points[offset + 1], points[offset + 2], points[offset + 3],
        index / samplesPerSegment,
      ));
    }
  }
  return sampled;
}

function curveYAtX(samples, rawX) {
  const x = Math.min(1, Math.max(0, rawX));
  let low = 0;
  let high = samples.length - 1;
  while (low < high - 1) {
    const middle = Math.floor((low + high) / 2);
    if (samples[middle].x <= x) low = middle;
    else high = middle;
  }
  const start = samples[low];
  const end = samples[high];
  const width = Math.max(0.000001, end.x - start.x);
  const progress = Math.min(1, Math.max(0, (x - start.x) / width));
  return start.y + (end.y - start.y) * progress;
}

function createWarpGeometry() {
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let xIndex = 0; xIndex <= X_SEGMENTS; xIndex += 1) {
    const u = xIndex / X_SEGMENTS;
    for (let yIndex = 0; yIndex <= Y_SEGMENTS; yIndex += 1) {
      const v = yIndex / Y_SEGMENTS;
      positions.push(u * ITEM_WIDTH, v * STAGE_HEIGHT, 0);
      uvs.push(u, 1 - v);
    }
  }

  const stride = Y_SEGMENTS + 1;
  for (let xIndex = 0; xIndex < X_SEGMENTS; xIndex += 1) {
    for (let yIndex = 0; yIndex < Y_SEGMENTS; yIndex += 1) {
      const a = xIndex * stride + yIndex;
      const b = (xIndex + 1) * stride + yIndex;
      indices.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  return geometry;
}

function applyCover(texture, sourceWidth, sourceHeight, targetHeight) {
  const sourceAspect = Math.max(0.01, sourceWidth / sourceHeight);
  const targetAspect = ITEM_WIDTH / Math.max(1, targetHeight);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1, 1);
  texture.offset.set(0, 0);
  if (sourceAspect > targetAspect) {
    texture.repeat.x = targetAspect / sourceAspect;
    texture.offset.x = (1 - texture.repeat.x) / 2;
  } else {
    texture.repeat.y = sourceAspect / targetAspect;
    texture.offset.y = (1 - texture.repeat.y) / 2;
  }
  texture.needsUpdate = true;
}

async function createTexture(item, targetHeight) {
  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = "auto";
    await video.play().catch(() => undefined);
    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    const fitWhenReady = () => applyCover(
      texture,
      video.videoWidth || ITEM_WIDTH,
      video.videoHeight || targetHeight,
      targetHeight,
    );
    video.addEventListener("loadedmetadata", fitWhenReady, { once: true });
    fitWhenReady();
    return { texture, video };
  }

  const texture = await new THREE.TextureLoader().loadAsync(item.src);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  applyCover(texture, texture.image.naturalWidth || texture.image.width, texture.image.naturalHeight || texture.image.height, targetHeight);
  return { texture, video: null };
}

export function WarpedMediaCanvas({ curves, media, paused, speed }) {
  const canvasRef = useRef(null);
  const latestRef = useRef({ curves, paused, speed });

  useEffect(() => {
    latestRef.current = { curves, paused, speed };
  }, [curves, paused, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || media.length === 0) return undefined;

    let stopped = false;
    let animationFrame;
    let previousTime;
    let scrollOffset = 0;
    const resources = [];
    const meshes = [];
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    canvas.dataset.warpMode = `uv-mesh-${X_SEGMENTS}x${Y_SEGMENTS}`;
    canvas.dataset.scrollOffset = "0.000";
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(STAGE_WIDTH, STAGE_HEIGHT, false);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, STAGE_WIDTH, 0, STAGE_HEIGHT, -10, 10);
    camera.position.z = 1;
    const loopWidth = media.length * (ITEM_WIDTH + ITEM_GAP);
    const representativeHeight = Math.max(
      100,
      (curveYAtX(sampleCurve(curves.bottom), 0.5) - curveYAtX(sampleCurve(curves.top), 0.5)) * STAGE_HEIGHT,
    );

    const setup = async () => {
      const loaded = await Promise.all(media.map((item) => createTexture(item, representativeHeight)));
      if (stopped) {
        loaded.forEach(({ texture, video }) => {
          texture.dispose();
          video?.pause();
        });
        return;
      }

      loaded.forEach((resource, itemIndex) => {
        resources.push(resource);
        const material = new THREE.MeshBasicMaterial({
          map: resource.texture,
          side: THREE.DoubleSide,
          toneMapped: false,
        });
        resources.push({ material });
        for (let cycle = -1; cycle <= 2; cycle += 1) {
          const geometry = createWarpGeometry();
          const mesh = new THREE.Mesh(geometry, material);
          mesh.frustumCulled = false;
          mesh.userData.baseX = cycle * loopWidth + itemIndex * (ITEM_WIDTH + ITEM_GAP);
          mesh.userData.itemIndex = itemIndex;
          scene.add(mesh);
          meshes.push(mesh);
        }
      });

      const render = (time) => {
        const latest = latestRef.current;
        if (previousTime !== undefined && !latest.paused) {
          scrollOffset = (scrollOffset + latest.speed * Math.min(64, time - previousTime) / 1000) % loopWidth;
        }
        canvas.dataset.scrollOffset = scrollOffset.toFixed(3);
        previousTime = time;

        const topSamples = sampleCurve(latest.curves.top);
        const bottomSamples = sampleCurve(latest.curves.bottom);
        const stride = Y_SEGMENTS + 1;

        meshes.forEach((mesh) => {
          const x = mesh.userData.baseX - scrollOffset;
          mesh.position.x = x;
          const positions = mesh.geometry.attributes.position.array;
          for (let xIndex = 0; xIndex <= X_SEGMENTS; xIndex += 1) {
            const localX = (xIndex / X_SEGMENTS) * ITEM_WIDTH;
            const normalizedX = (x + localX) / STAGE_WIDTH;
            const topY = curveYAtX(topSamples, normalizedX) * STAGE_HEIGHT;
            const bottomY = curveYAtX(bottomSamples, normalizedX) * STAGE_HEIGHT;
            for (let yIndex = 0; yIndex <= Y_SEGMENTS; yIndex += 1) {
              const vertexIndex = (xIndex * stride + yIndex) * 3;
              positions[vertexIndex + 1] = topY + (yIndex / Y_SEGMENTS) * (bottomY - topY);
            }
          }
          mesh.geometry.attributes.position.needsUpdate = true;
        });

        renderer.render(scene, camera);
        animationFrame = requestAnimationFrame(render);
      };

      animationFrame = requestAnimationFrame(render);
    };

    setup();

    return () => {
      stopped = true;
      cancelAnimationFrame(animationFrame);
      meshes.forEach((mesh) => mesh.geometry.dispose());
      resources.forEach((resource) => {
        resource.texture?.dispose();
        resource.video?.pause();
        resource.material?.dispose();
      });
      renderer.dispose();
    };
  }, [media]);

  return <canvas className="newsroom-warp-canvas" ref={canvasRef} aria-hidden="true" />;
}
