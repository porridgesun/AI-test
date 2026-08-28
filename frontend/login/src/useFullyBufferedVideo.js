import { useEffect, useState } from "react";

export function useFullyBufferedVideo(candidates) {
  const [source, setSource] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const probe = document.createElement("video");
    const candidate = candidates.find(({ type }) => !type || probe.canPlayType(type)) ?? candidates[0];
    let objectUrl;

    async function bufferVideo() {
      try {
        const response = await fetch(candidate.src, {
          cache: "reload",
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Video request failed: ${response.status}`);
        const contentType = response.headers.get("content-type") || "";
        if (!contentType.startsWith("video/")) {
          throw new Error(`Invalid video content type: ${contentType || "unknown"}`);
        }

        const bytes = await response.arrayBuffer();
        const blob = new Blob([bytes], { type: candidate.mimeType || response.headers.get("content-type") || "video/mp4" });
        objectUrl = URL.createObjectURL(blob);
        setSource(objectUrl);
      } catch (error) {
        if (error.name !== "AbortError") setSource(candidate.src);
      }
    }

    bufferVideo();

    return () => {
      controller.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [candidates]);

  return source;
}
