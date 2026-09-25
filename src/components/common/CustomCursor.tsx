"use client";

import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<"normal" | "link" | "button" | "badge">("normal");
  const [cursorText, setCursorText] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Only enable on desktop with mouse
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024;

    if (isTouch || reducedMotion) return;

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

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      const isButton = target.closest("button, [role='button'], .btn, a.btn, a[class*='bg-']");
      const isLink = target.closest("a, input, textarea, select");

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setCursorState("badge");
      } else if (isButton) {
        setCursorText("");
        setCursorState("button");
      } else if (isLink) {
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
      // Smooth lerp (slightly lagging behind for a premium weight)
      posRef.current.x += (posRef.current.targetX - posRef.current.x) * 0.16;
      posRef.current.y += (posRef.current.targetY - posRef.current.y) * 0.16;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
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
  }, [isVisible, reducedMotion]);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999999] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-opacity duration-200 select-none ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ willChange: "transform" }}
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          cursorState === "badge"
            ? "w-24 h-24 bg-[#FF0000] text-white shadow-2xl scale-100 border border-white/20"
            : cursorState === "button"
            ? "w-10 h-10 bg-[#FF0000] opacity-90 scale-110 shadow-md"
            : cursorState === "link"
            ? "w-10 h-10 bg-black/10 backdrop-blur-xs border border-[#FF0000]/60 scale-105"
            : "w-3 h-3 bg-[#FF0000] shadow-xs"
        }`}
      >
        {cursorState === "badge" && cursorText && (
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-center px-1 text-white leading-tight">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
