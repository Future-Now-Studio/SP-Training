"use client";

import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

/**
 * FadeIn – previously wrapped children in framer-motion + IntersectionObserver
 * for a subtle reveal animation. That combination proved fragile across the
 * site: SSR baked the initial `opacity: 0` into inline styles and the
 * observer sometimes never fired to remove it, leaving entire sections
 * invisible (hero, mid-page grids after anchor jumps, etc.).
 *
 * Content correctness beats decorative motion, so this now simply passes
 * children through as a plain `<div>`. The API (delay/direction) is kept so
 * every call site continues to compile; those props are intentionally
 * ignored. If we bring the animation back, do it CSS-only via
 * `@starting-style` or `animation` so there is no observer to strand.
 */
export default function FadeIn({
  children,
  className = "",
}: FadeInProps) {
  return <div className={className}>{children}</div>;
}
