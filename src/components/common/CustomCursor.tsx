"use client";

import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Only enable on desktop with mouse
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
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
      const isInteractive = target.closest("a, button, input, textarea, select, [role='button']");

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else if (isInteractive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleOver, { passive: true });

    let animationFrameId: number;
    const render = () => {
      // Smooth lerp
      posRef.current.x += (posRef.current.targetX - posRef.current.x) * 0.18;
      posRef.current.y += (posRef.current.targetY - posRef.current.y) * 0.18;

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
      className={`fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ willChange: "transform" }}
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          isHovered
            ? cursorText
              ? "w-20 h-20 bg-[#FF0000] text-white shadow-lg"
              : "w-10 h-10 bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/20 scale-110"
            : "w-3 h-3 bg-[#FF0000]"
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-center px-1">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
