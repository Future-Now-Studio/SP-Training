"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

/**
 * FadeIn renders children fully visible by default (SSR + first client
 * render), then — once mounted — plays a short reveal animation for
 * content that is currently in view or scrolls into view.
 *
 * Correctness first, animation second: the previous implementation could
 * leave content stuck at opacity:0 because framer-motion baked the
 * `initial` prop into the SSR inline style and never removed it (the hero
 * invisibility bug). Here the SSR/first render is always visible, so the
 * worst case is "no animation", never "no content".
 */
export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [mounted, setMounted] = useState(false);
  const [play, setPlay] = useState(false);

  const directionOffset = { up: 50, down: -50, left: 50, right: -50 };

  useEffect(() => {
    setMounted(true);

    // If the element is already on-screen at mount, kick off the reveal.
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < wh && rect.bottom > 0) {
        // brief delay so framer-motion can register the hidden state first
        requestAnimationFrame(() => setPlay(true));
      }
    }
  }, []);

  useEffect(() => {
    if (isInView) setPlay(true);
  }, [isInView]);

  const hidden = {
    opacity: 0,
    y: direction === "up" || direction === "down" ? directionOffset[direction] : 0,
    x: direction === "left" || direction === "right" ? directionOffset[direction] : 0,
  };
  const shown = { opacity: 1, y: 0, x: 0 };

  // SSR + first client render: no `initial` prop → element renders visible.
  // After mount: use `initial={hidden}` and animate to `shown` when triggered.
  return (
    <motion.div
      ref={ref}
      initial={mounted ? hidden : false}
      animate={!mounted || play ? shown : hidden}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
