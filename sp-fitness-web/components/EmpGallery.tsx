"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

const IMAGES: GalleryImage[] = [
  { src: "/images/emp-chair/gallery/emp-09.jpg", alt: "Frau beim Beckenbodentraining auf dem EMP Chair Pro" },
  { src: "/images/emp-chair/gallery/emp-03.jpg", alt: "Persönliche Beratung zum EMP Chair Pro" },
  { src: "/images/emp-chair/gallery/emp-19.jpg", alt: "Entspannt zurücklehnen während des Trainings" },
  { src: "/images/emp-chair/gallery/emp-43.jpg", alt: "Der EMP Chair Pro im Detail" },
  { src: "/images/emp-chair/gallery/emp-16.jpg", alt: "Individuelle Betreuung während der Sitzung" },
  { src: "/images/emp-chair/gallery/emp-07.jpg", alt: "Entspanntes Training auf dem EMP Chair Pro" },
  { src: "/images/emp-chair/gallery/emp-32.jpg", alt: "Training in entspannter Atmosphäre" },
];

export default function EmpGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % IMAGES.length)),
    []
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  return (
    <>
      <div className="emp-gallery-grid">
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="emp-gallery-tile"
            onClick={() => setOpenIndex(i)}
            aria-label={`Bild öffnen: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              style={{ objectFit: "cover" }}
              quality={75}
            />
            <span className="emp-gallery-zoom">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="emp-lightbox" onClick={close} role="dialog" aria-modal="true">
          <button type="button" className="emp-lightbox-close" onClick={close} aria-label="Schließen">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button
            type="button"
            className="emp-lightbox-nav emp-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Vorheriges Bild"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="emp-lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <Image
              src={IMAGES[openIndex].src}
              alt={IMAGES[openIndex].alt}
              width={1600}
              height={1067}
              style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "85vh", objectFit: "contain" }}
              quality={85}
              priority
            />
            <p className="emp-lightbox-caption">{IMAGES[openIndex].alt}</p>
          </div>
          <button
            type="button"
            className="emp-lightbox-nav emp-lightbox-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Nächstes Bild"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </>
  );
}
