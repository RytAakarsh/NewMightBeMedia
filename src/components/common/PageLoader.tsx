"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Session-level flag prevents replay across route changes & StrictMode mounts
let globalLoaderHasRun = false;

interface PageLoaderProps {
  onComplete?: () => void;
}

type LoaderStage = "INIT" | "BUILD" | "CONVERT" | "SCALE" | "EXIT" | "DONE";

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [shouldRender] = useState(() => {
    if (globalLoaderHasRun) return false;
    globalLoaderHasRun = true;
    return true;
  });

  const [stage, setStage] = useState<LoaderStage>("INIT");

  useEffect(() => {
    if (!shouldRender) {
      onComplete?.();
      return;
    }

    // Sequence: INIT → BUILD → CONVERT → SCALE → EXIT → DONE
    const t0 = setTimeout(() => setStage("BUILD"), 100);
    const t1 = setTimeout(() => setStage("CONVERT"), 400);
    const t2 = setTimeout(() => setStage("SCALE"), 750);
    const t3 = setTimeout(() => setStage("EXIT"), 1100);
    const t4 = setTimeout(() => {
      setStage("DONE");
      onComplete?.();
    }, 1500);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [shouldRender, onComplete]);

  if (!shouldRender || stage === "DONE") return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        stage === "EXIT"
          ? "opacity-0 -translate-y-6 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-8 max-w-sm px-6 text-center">
        {/* MBM Icon */}
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 transition-all duration-500 ${
            stage === "INIT"
              ? "opacity-0 scale-75"
              : "opacity-100 scale-100"
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

        {/* Wordmark */}
        <div className="flex items-center gap-1 font-display font-bold text-xl sm:text-2xl tracking-tight text-white">
          <span>Might</span>
          <span className="text-[#FF0000]">Be</span>
          <span>Media</span>
        </div>

        {/* Sequential Words with Staggered Transition */}
        <div className="h-8 overflow-hidden flex items-center justify-center">
          <div className="relative">
            {(["BUILD", "CONVERT", "SCALE"] as const).map((word) => {
              const isActive =
                stage === word || (word === "SCALE" && stage === "EXIT");
              return (
                <span
                  key={word}
                  className={`absolute inset-0 flex items-center justify-center font-mono text-xs sm:text-sm tracking-[0.35em] uppercase text-white/90 transition-all duration-300 ease-out ${
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
        <div className="w-28 h-[2px] bg-white/10 overflow-hidden relative mt-1">
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
