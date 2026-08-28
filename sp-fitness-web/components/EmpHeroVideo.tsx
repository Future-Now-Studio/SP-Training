"use client";

import { useRef, useEffect } from "react";

interface EmpHeroVideoProps {
  src: string;
  poster?: string;
  /** Second at which the video should start (and re-loop to). Defaults to 3. */
  startAt?: number;
}

/**
 * Background video for the EMP Chair Pro hero. Starts at `startAt` seconds
 * and loops back to that point instead of the beginning (we skip the first
 * few seconds of black/text intro).
 *
 * Native `loop` is off; we handle the loop ourselves via `onEnded` so the
 * seek lands on `startAt` instead of 0.
 */
export default function EmpHeroVideo({ src, poster, startAt = 3 }: EmpHeroVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const seekToStart = () => {
      try {
        v.currentTime = startAt;
      } catch {
        /* seek may throw if metadata not ready — retried by loadedmetadata */
      }
    };

    // Once we know the duration, jump to startAt (in case the media fragment
    // hint was ignored, e.g. on some Safari builds).
    v.addEventListener("loadedmetadata", seekToStart);

    // Loop guard: seek back to startAt just before natural end. If we let the
    // video fire `ended`, Chrome pauses muted background video to save power
    // and our follow-up play() gets rejected — so we jump BACK while the
    // video is still playing, and playback continues seamlessly.
    const onTimeUpdate = () => {
      if (v.duration && v.currentTime >= v.duration - 0.15) {
        v.currentTime = startAt;
      }
    };
    v.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      v.removeEventListener("loadedmetadata", seekToStart);
      v.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [startAt]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      playsInline
      poster={poster}
    >
      {/* #t=<seconds> is the standard Media Fragments hint for the initial
          seek. loadedmetadata + timeupdate handlers above are the reliable
          fallbacks and enforce the loop point. */}
      <source src={`${src}#t=${startAt}`} type="video/mp4" />
      Ihr Browser unterstützt das Video-Element nicht.
    </video>
  );
}
