"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type RevealAnimation =
  | "fade-up"
  | "fade-in"
  | "clip-up"
  | "clip-left"
  | "clip-right"
  | "slide-up"
  | "slide-left"
  | "slide-right"
  | "scale-in"
  | "rotate-in";

interface UseScrollRevealOptions {
  animation?: RevealAnimation;
  /** Trigger start position (default: "top 85%") */
  start?: string;
  /** Trigger end position (default: "top 40%") */
  end?: string;
  /** Scrub (true for scroll-linked, false for triggered) */
  scrub?: boolean | number;
  /** Duration for non-scrubbed animations */
  duration?: number;
  /** Stagger delay for child elements */
  stagger?: number;
  /** Custom selector for children to stagger */
  childSelector?: string;
  /** Delay before animation starts */
  delay?: number;
  /** Whether animation is disabled (e.g., reduced motion) */
  disabled?: boolean;
}

/**
 * Reusable scroll reveal hook with editorial-grade animations.
 * Uses gsap.context() for proper cleanup.
 */
export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: UseScrollRevealOptions = {}
): void {
  const {
    animation = "fade-up",
    start = "top 85%",
    end = "top 40%",
    scrub = 0.4,
    duration = 1,
    stagger = 0,
    childSelector,
    delay = 0,
    disabled = false,
  } = options;

  useEffect(() => {
    if (disabled || !ref.current) return;

    const ctx = gsap.context(() => {
      const target = childSelector
        ? ref.current!.querySelectorAll(childSelector)
        : ref.current!;

      const fromVars: gsap.TweenVars = {};
      const toVars: gsap.TweenVars = {
        scrollTrigger: {
          trigger: ref.current,
          start,
          end,
          scrub,
          invalidateOnRefresh: true,
        },
        duration: scrub ? undefined : duration,
        ease: scrub ? "none" : "power3.out",
        delay: scrub ? undefined : delay,
        stagger: stagger || undefined,
      };

      switch (animation) {
        case "fade-up":
          fromVars.opacity = 0;
          fromVars.y = 50;
          toVars.opacity = 1;
          toVars.y = 0;
          break;
        case "fade-in":
          fromVars.opacity = 0;
          toVars.opacity = 1;
          break;
        case "clip-up":
          fromVars.clipPath = "inset(100% 0 0 0)";
          toVars.clipPath = "inset(0% 0 0 0)";
          break;
        case "clip-left":
          fromVars.clipPath = "inset(0 100% 0 0)";
          toVars.clipPath = "inset(0 0% 0 0)";
          break;
        case "clip-right":
          fromVars.clipPath = "inset(0 0 0 100%)";
          toVars.clipPath = "inset(0 0 0 0%)";
          break;
        case "slide-up":
          fromVars.y = 80;
          fromVars.opacity = 0;
          toVars.y = 0;
          toVars.opacity = 1;
          break;
        case "slide-left":
          fromVars.x = 100;
          fromVars.opacity = 0;
          toVars.x = 0;
          toVars.opacity = 1;
          break;
        case "slide-right":
          fromVars.x = -100;
          fromVars.opacity = 0;
          toVars.x = 0;
          toVars.opacity = 1;
          break;
        case "scale-in":
          fromVars.scale = 0.85;
          fromVars.opacity = 0;
          toVars.scale = 1;
          toVars.opacity = 1;
          break;
        case "rotate-in":
          fromVars.rotateX = 15;
          fromVars.opacity = 0;
          fromVars.transformOrigin = "bottom center";
          toVars.rotateX = 0;
          toVars.opacity = 1;
          break;
      }

      gsap.fromTo(target, fromVars, toVars);
    }, ref);

    return () => ctx.revert();
  }, [ref, animation, start, end, scrub, duration, stagger, childSelector, delay, disabled]);
}
