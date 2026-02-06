"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

interface TrainerCardProps {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  goal: string;
  background: string;
  approach: string;
  highlights: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function TrainerCard({
  name,
  title,
  image,
  imageAlt,
  intro,
  goal,
  background,
  approach,
  highlights,
  ctaText,
  ctaLink,
}: TrainerCardProps) {
  return (
    <section className="trainer-detail-section">
      {/* Hero Section */}
      <div className="trainer-detail-hero">
        <div className="trainer-detail-hero-bg">
          <div className="trainer-detail-hero-overlay"></div>
        </div>
        <div className="trainer-detail-hero-content">
          <FadeIn direction="up" delay={0.2}>
            <h1 className="trainer-detail-name">{name}</h1>
            <p className="trainer-detail-title">{title}</p>
            <p className="trainer-detail-intro">{intro}</p>
          </FadeIn>
        </div>
        <div className="trainer-detail-hero-image">
          <FadeIn direction="left" delay={0.4}>
            <div className="trainer-detail-image-wrapper">
              <Image
                src={image}
                alt={imageAlt}
                fill
                style={{objectFit: "cover", objectPosition: "center"}}
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <div className="trainer-detail-content">
        <div className="wrapper">
          {/* Goal Section */}
          <FadeIn direction="up" delay={0.1}>
            <div className="trainer-detail-block">
              <h2 className="trainer-detail-section-title">Dein Ziel ist sein Antrieb</h2>
              <p className="trainer-detail-text">{goal}</p>
            </div>
          </FadeIn>

          {/* Background Section */}
          <FadeIn direction="up" delay={0.2}>
            <div className="trainer-detail-block">
              <h2 className="trainer-detail-section-title">Ein Trainer mit echter sportlicher Vielfalt</h2>
              <p className="trainer-detail-text">{background}</p>
            </div>
          </FadeIn>

          {/* Approach Section */}
          <FadeIn direction="up" delay={0.3}>
            <div className="trainer-detail-block">
              <h2 className="trainer-detail-section-title">Mehr als Training – eine Zusammenarbeit auf Augenhöhe</h2>
              <p className="trainer-detail-text">{approach}</p>
            </div>
          </FadeIn>

          {/* Highlights Section */}
          <FadeIn direction="up" delay={0.4}>
            <div className="trainer-detail-block trainer-detail-highlights">
              <h2 className="trainer-detail-section-title">Warum Personal Training mit {name.split(' ')[0]}?</h2>
              <ul className="trainer-detail-highlights-list">
                {highlights.map((highlight, index) => (
                  <li key={index} className="trainer-detail-highlight-item">
                    <i className="fa-solid fa-check-circle"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* CTA Section */}
          {ctaText && (
            <FadeIn direction="up" delay={0.5}>
              <div className="trainer-detail-cta">
                <h3 className="trainer-detail-cta-title">Bereit, den nächsten Schritt zu gehen?</h3>
                <p className="trainer-detail-cta-text">
                  Starte jetzt mit deinem persönlichen Trainingsprogramm und entdecke, was du wirklich erreichen kannst.
                  <br />
                  <strong>{name}</strong> begleitet dich – mit Fachwissen, Leidenschaft und echter Begeisterung für deinen Erfolg.
                </p>
                <Link href={ctaLink || "#kontakt"} className="button key cta-large">
                  <span>{ctaText}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}


