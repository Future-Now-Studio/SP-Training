"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface EmpSlideshowProps {
  children: React.ReactNode;
  /** Beschriftungen für Screenreader und die Punkte-Buttons */
  labels: string[];
}

/**
 * Macht die Kartenreihe auf Mobil als Slideshow erkennbar: Punkte-Navigation
 * plus Zähler unter dem Slider.
 *
 * Das Wischen selbst macht CSS (scroll-snap, siehe #emp-ablauf .features-grid);
 * diese Komponente steuert nur die Anzeige bei. Oberhalb 768px blendet CSS
 * die Steuerung aus – dort ist es wieder ein normales 3-Spalten-Raster.
 */
export default function EmpSlideshow({ children, labels }: EmpSlideshowProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    // Aktive Karte = die, deren linke Kante der linken Innenkante des
    // Sliders am nächsten liegt.
    const padLeft = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    const base = el.getBoundingClientRect().left + padLeft;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const dist = Math.abs(child.getBoundingClientRect().left - base);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const goTo = (i: number) => {
    const el = ref.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (!el || !child) return;
    const padLeft = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    const left = child.offsetLeft - padLeft;
    el.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <>
      <div className="features-grid" ref={ref}>
        {children}
      </div>

      <div className="emp-slideshow-nav" aria-hidden={false}>
        <div className="emp-slideshow-dots" role="tablist" aria-label="Phasen des Trainings">
          {labels.map((label, i) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={label}
              className={`emp-slideshow-dot${i === active ? " is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <span className="emp-slideshow-count">
          {active + 1} / {labels.length}
        </span>
      </div>
    </>
  );
}
