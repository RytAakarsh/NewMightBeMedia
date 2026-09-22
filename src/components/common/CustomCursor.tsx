"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on non-touch desktop devices
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setIsEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check hovered elements for custom cursor triggers
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
        if (cursorTarget) {
          const text = cursorTarget.getAttribute("data-cursor") || "";
          setCursorText(text);
          setIsHovered(true);
        } else if (
          target.closest("a, button, input, textarea, select, [role='button']")
        ) {
          setCursorText("");
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(false);
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const render = () => {
      // Smooth lerp (0.18 factor)
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isEnabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-999 transition-opacity duration-300 will-change-transform ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transform: "translate3d(-100px, -100px, 0)" }}
    >
      <div
        className={`flex items-center justify-center rounded-full border transition-all duration-300 ${
          cursorText
            ? "w-20 h-20 bg-[#FAFAFA] text-[#000000] border-transparent scale-100"
            : isHovered
            ? "w-12 h-12 bg-white/15 backdrop-blur-sm border-white/60 scale-100"
            : "w-3 h-3 bg-white border-transparent"
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#000000]">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
