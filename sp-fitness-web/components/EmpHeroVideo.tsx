"use client";

import { useEffect, useRef, useState } from "react";

interface EmpHeroVideoProps {
  src: string;
  poster: string;
  label?: string;
}

/**
 * Hintergrundvideo für das EMP-Hero.
 *
 * Warum eine Client-Komponente statt nur `<video autoPlay muted loop>`:
 * Reines Autoplay-Markup ist unzuverlässig. Browser verweigern oder
 * verzögern den Start je nach Autoplay-Policy, Energiesparmodus, Data
 * Saver oder weil der Tab beim Laden im Hintergrund war. Schlägt der
 * Start einmal fehl, bleibt das Video für immer stehen — genau der Fall,
 * der live aufgetreten ist. Deshalb fassen wir aktiv nach.
 *
 * Ladeverhalten: Das Video hängt zunächst NICHT im DOM-Ladepfad
 * (`preload="none"`, src erst nach dem Mount). So blockiert es den
 * First Paint nicht — sichtbar ist sofort das Poster, das ohnehin als
 * Hero-Bild ausgeliefert wird. Erst danach wird geladen und gestartet.
 */
export default function EmpHeroVideo({ src, poster, label }: EmpHeroVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Wer Bewegung reduziert haben will, bekommt das Poster.
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    setActive(true);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!active || !v) return;

    // Stumm ist Voraussetzung dafür, dass Autoplay überhaupt erlaubt ist.
    // Als Property setzen, nicht nur als Attribut – das ist die Variante,
    // die der Autoplay-Check des Browsers tatsächlich liest.
    v.muted = true;

    let cancelled = false;
    const tryPlay = () => {
      if (cancelled) return;
      // play() kann rejecten (Policy, Hintergrund-Tab). Kein Grund zur
      // Panik: Poster bleibt sichtbar, und die Events unten fassen nach.
      void v.play().catch(() => {});
    };

    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("canplay", tryPlay);

    // Tab war beim Laden im Hintergrund -> Browser pausiert stumme Videos.
    // Sobald die Seite sichtbar wird, erneut versuchen.
    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);

    // Letzter Rückfallweg: erste Nutzerinteraktion hebt jede Policy auf.
    const onInteract = () => tryPlay();
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("touchstart", onInteract, { once: true });

    return () => {
      cancelled = true;
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };
  }, [active]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={label}
      // src erst setzen, wenn der Mount durch ist: hält das Video aus
      // dem kritischen Ladepfad des ersten Renderings heraus.
      src={active ? src : undefined}
    />
  );
}
