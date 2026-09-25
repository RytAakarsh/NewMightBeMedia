"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Session-level memory flag guaranteeing single execution across the entire browser session
let sessionPreloadExecuted = false;

interface AppPreloaderProps {
  onComplete?: () => void;
}

type LoaderStage = "INIT" | "BUILD" | "CONVERT" | "SCALE" | "EXIT" | "DONE";

export default function AppPreloader({ onComplete }: AppPreloaderProps) {
  // Check session storage synchronously on client
  const [shouldRun] = useState(() => {
    if (typeof window === "undefined") return true; // SSR initial HTML placeholder
    if (sessionPreloadExecuted) return false;
    try {
      if (sessionStorage.getItem("mbm_preloaded_v2") === "true") {
        sessionPreloadExecuted = true;
        return false;
      }
    } catch {
      // Ignore storage errors in private browsing modes
    }
    return true;
  });

  const [stage, setStage] = useState<LoaderStage>("INIT");
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    // If already preloaded or already started in Strict Mode, don't re-run
    if (!shouldRun || hasInitializedRef.current) {
      if (!hasInitializedRef.current && onComplete) onComplete();
      return;
    }

    hasInitializedRef.current = true;
    sessionPreloadExecuted = true;
    try {
      sessionStorage.setItem("mbm_preloaded_v2", "true");
    } catch {
      // Ignore storage errors
    }

    // High-precision sequence: Target ~1.4s total duration
    const t0 = setTimeout(() => setStage("BUILD"), 120);
    const t1 = setTimeout(() => setStage("CONVERT"), 450);
    const t2 = setTimeout(() => setStage("SCALE"), 800);
    const t3 = setTimeout(() => setStage("EXIT"), 1180);
    const t4 = setTimeout(() => {
      setStage("DONE");
      onComplete?.();
    }, 1550);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [shouldRun, onComplete]);

  if (!shouldRun || stage === "DONE") return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        stage === "EXIT"
          ? "opacity-0 -translate-y-8 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-7 max-w-sm px-6 text-center select-none">
        {/* MBM Icon */}
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 transition-all duration-500 ${
            stage === "INIT" ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
        >
          <Image
            src="/logos/MightBeMedia_ICONNEW.png"
            alt="MightBeMedia"
            fill
            priority
            className="object-contain invert brightness-100"
          />
        </div>

        {/* Wordmark with bright red #FF0000 "Be" */}
        <div className="flex items-center gap-1 font-display font-bold text-2xl sm:text-3xl tracking-tight text-white">
          <span>Might</span>
          <span className="text-[#FF0000]">Be</span>
          <span>Media</span>
        </div>

        {/* Sequential Words (BUILD -> CONVERT -> SCALE) */}
        <div className="h-8 overflow-hidden flex items-center justify-center">
          <div className="relative">
            {(["BUILD", "CONVERT", "SCALE"] as const).map((word) => {
              const isActive =
                stage === word || (word === "SCALE" && stage === "EXIT");
              return (
                <span
                  key={word}
                  className={`absolute inset-0 flex items-center justify-center font-mono text-xs sm:text-sm tracking-[0.35em] uppercase transition-all duration-300 ease-out ${
                    isActive
                      ? "opacity-100 scale-100 translate-y-0 text-white font-bold"
                      : "opacity-0 scale-90 translate-y-2 text-white/30"
                  }`}
                  style={{ position: word === "BUILD" ? "relative" : "absolute" }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>

        {/* Minimal Red Progress Line */}
        <div className="w-32 h-[2px] bg-white/10 overflow-hidden relative mt-1">
          <div
            className="h-full bg-[#FF0000] transition-all duration-300 ease-out"
            style={{
              width:
                stage === "INIT" || stage === "BUILD"
                  ? "33%"
                  : stage === "CONVERT"
                  ? "66%"
                  : "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
