"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CursorState = "normal" | "link" | "button" | "badge";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>("normal");
  const [cursorText, setCursorText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const pathname = usePathname();
  const isDarkPage = pathname.startsWith("/projects");

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({
    targetX: -100,
    targetY: -100,
    dotX: -100,
    dotY: -100,
    ringX: -100,
    ringY: -100,
  });

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Strictly disable on touch / coarse pointer / tablet & mobile screens
    if (typeof window === "undefined") return;

    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024;

    if (isTouch || reducedMotion) {
      setMounted(false);
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Dark background / theme detection for contrast
      const darkContainer = target.closest(
        "[data-theme='dark'], footer, .bg-black, [class*='bg-[#0A0A0A]'], [class*='bg-[#080808]']"
      );
      setIsDarkTheme(Boolean(darkContainer) || isDarkPage);

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      const isBtn = target.closest(
        "button, [role='button'], .btn, a.btn, a[class*='bg-[#FF0000]'], a[class*='bg-black'], a[class*='bg-white']"
      );
      const isLnk = target.closest("a, input, textarea, select, label");

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setCursorState("badge");
      } else if (isBtn) {
        setCursorText("");
        setCursorState("button");
      } else if (isLnk) {
        setCursorText("");
        setCursorState("link");
      } else {
        setCursorText("");
        setCursorState("normal");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleOver, { passive: true });

    let animationFrameId: number;

    const render = () => {
      // Fluid lerp: Dot follows tightly, Ring follows with smooth delay for magnetic feel
      const { targetX, targetY } = posRef.current;
      posRef.current.dotX += (targetX - posRef.current.dotX) * 0.45;
      posRef.current.dotY += (targetY - posRef.current.dotY) * 0.45;

      posRef.current.ringX += (targetX - posRef.current.ringX) * 0.15;
      posRef.current.ringY += (targetY - posRef.current.ringY) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${posRef.current.dotX}px, ${posRef.current.dotY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${posRef.current.ringX}px, ${posRef.current.ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isDarkPage, reducedMotion]);

  if (!mounted) return null;

  const activeDark = isDarkTheme || isDarkPage;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999999] select-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* 1. Fast Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-150 ease-out will-change-transform ${
          cursorState === "badge" || cursorState === "button"
            ? "opacity-0 scale-0"
            : cursorState === "link"
            ? "w-1.5 h-1.5 bg-[#FF0000] scale-100"
            : `w-2 h-2 ${activeDark ? "bg-white" : "bg-[#0A0A0A]"} scale-100`
        }`}
        style={{ willChange: "transform" }}
      />

      {/* 2. Fluid Outer Ring / Interactive Morphing Pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none flex items-center justify-center transition-all duration-300 ease-out will-change-transform ${
          cursorState === "badge"
            ? "w-24 h-24 bg-[#FF0000] text-white shadow-2xl scale-100 border border-white/20"
            : cursorState === "button"
            ? "w-11 h-11 bg-[#FF0000] text-white shadow-lg scale-100 border border-white/20"
            : cursorState === "link"
            ? "w-10 h-10 bg-[#FF0000]/10 border border-[#FF0000]/60 scale-100 backdrop-blur-xs"
            : `w-8 h-8 bg-transparent ${
                activeDark ? "border border-white/30" : "border border-black/25"
              } scale-100`
        }`}
        style={{ willChange: "transform" }}
      >
        {cursorState === "badge" && cursorText && (
          <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-center px-2 text-white leading-tight">
            {cursorText}
          </span>
        )}
        {cursorState === "button" && (
          <span className="font-mono text-xs font-bold text-white leading-none">
            →
          </span>
        )}
      </div>
    </div>
  );
}
