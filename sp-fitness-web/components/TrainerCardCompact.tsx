"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

interface TrainerCardCompactProps {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  specialties: string[];
  experience: string;
  highlights: string[];
  ctaText?: string;
  ctaLink?: string;
  galleryImages?: string[];
}

export default function TrainerCardCompact({
  name,
  title,
  image,
  imageAlt,
  intro,
  specialties,
  experience,
  highlights,
  ctaText,
  ctaLink,
  galleryImages = [],
}: TrainerCardCompactProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasGallery = galleryImages.length > 0;
  const currentImageSrc = hasGallery ? galleryImages[currentImageIndex] : image;

  const showPrevImage = () => {
    if (!hasGallery) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNextImage = () => {
    if (!hasGallery) return;
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <FadeIn className="trainer-card-compact" direction="up">
      <div className="trainer-card-compact-inner">
        {/* Image Section */}
        <div className="trainer-card-compact-image">
          <Image
            src={currentImageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover", objectPosition: "center center" }}
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="trainer-card-compact-overlay"></div>

          {hasGallery && galleryImages.length > 1 && (
            <>
              <button
                type="button"
                className="button flat trainer-card-compact-slider-button prev"
                onClick={showPrevImage}
                aria-label="Vorheriges Bild"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                type="button"
                className="button flat trainer-card-compact-slider-button next"
                onClick={showNextImage}
                aria-label="Nächstes Bild"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="trainer-card-compact-content">
          <div className="trainer-card-compact-header">
            <h3 className="trainer-card-compact-name">{name}</h3>
            <p className="trainer-card-compact-title">{title}</p>
          </div>

          <p className="trainer-card-compact-intro">{intro}</p>

          {/* Specialties */}
          {specialties.length > 0 && (
            <div className="trainer-card-compact-specialties">
              <h4 className="trainer-card-compact-label">Spezialitäten:</h4>
              <div className="trainer-card-compact-tags">
                {specialties.map((specialty, index) => (
                  <span 
                    key={index} 
                    className="trainer-card-compact-tag"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {experience && (
            <div className="trainer-card-compact-experience">
              <h4 className="trainer-card-compact-label">Erfahrung:</h4>
              <p className="trainer-card-compact-text">{experience}</p>
            </div>
          )}

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="trainer-card-compact-highlights">
              <h4 className="trainer-card-compact-label">Highlights:</h4>
              <ul className="trainer-card-compact-highlights-list">
                {highlights.slice(0, 4).map((highlight, index) => (
                  <li 
                    key={index} 
                    className="trainer-card-compact-highlight-item"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <i className="fa-solid fa-check"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          {ctaText && (
            <div className="trainer-card-compact-cta">
              <Link href={ctaLink || "#kontakt"} className="button key">
                <span>{ctaText}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

