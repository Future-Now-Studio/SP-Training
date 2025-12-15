"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  const directionOffset = {
    up: 50,
    down: -50,
    left: 50,
    right: -50,
  };

  // Check if element is in viewport on mount
  useEffect(() => {
    const checkVisibility = () => {
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top < windowHeight + 100 && rect.bottom > -100;
      
      if (isVisible) {
        setShouldAnimate(true);
      }
    };

    // Check immediately
    checkVisibility();
    
    // Also check after a short delay to catch any layout shifts
    const timeout = setTimeout(checkVisibility, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  // Update shouldAnimate when isInView changes
  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  const initial = { 
    opacity: 0, 
    y: direction === "up" || direction === "down" ? directionOffset[direction] : 0,
    x: direction === "left" || direction === "right" ? directionOffset[direction] : 0 
  };

  const animate = { 
    opacity: 1, 
    y: 0, 
    x: 0 
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={shouldAnimate || isInView ? animate : initial}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

