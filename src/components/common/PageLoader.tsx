"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Module-level flag prevents double-render in React StrictMode (dev)
let loaderHasRun = false;

interface PageLoaderProps {
  onComplete?: () => void;
}

type LoaderStage = "BUILD" | "CONVERT" | "SCALE" | "EXIT" | "DONE";

export default function PageLoader({ onComplete }: PageLoaderProps) {
  // Guard: only run once per page load
  const [shouldRender] = useState(() => {
    if (loaderHasRun) return false;
    loaderHasRun = true;
    return true;
  });

  const [stage, setStage] = useState<LoaderStage>("BUILD");

  useEffect(() => {
    if (!shouldRender) {
      onComplete?.();
      return;
    }

    // Staggered word reveal: BUILD → CONVERT → SCALE → EXIT → DONE
    const t1 = setTimeout(() => setStage("CONVERT"), 350);
    const t2 = setTimeout(() => setStage("SCALE"), 700);
    const t3 = setTimeout(() => setStage("EXIT"), 1050);
    const t4 = setTimeout(() => {
      setStage("DONE");
      onComplete?.();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [shouldRender, onComplete]);

  if (!shouldRender || stage === "DONE") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        stage === "EXIT"
          ? "opacity-0 scale-[1.02] pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-8">
        {/* MBM Logo */}
        <div
          className={`relative w-14 h-14 sm:w-18 sm:h-18 transition-all duration-500 ${
            stage === "BUILD"
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

        {/* Sequential Words with staggered fade-scale */}
        <div className="h-9 overflow-hidden flex items-center justify-center">
          <div className="relative">
            {(["BUILD", "CONVERT", "SCALE"] as const).map((word) => {
              const isActive =
                stage === word ||
                (word === "SCALE" && stage === "EXIT");
              return (
                <span
                  key={word}
                  className={`absolute inset-0 flex items-center justify-center font-display font-bold text-lg sm:text-xl tracking-[0.3em] uppercase text-white transition-all duration-300 ease-out ${
                    isActive
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-90 translate-y-2"
                  }`}
                  style={{ position: word === "BUILD" ? "relative" : "absolute" }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>

        {/* Progress Line */}
        <div className="w-20 h-px bg-white/10 overflow-hidden relative">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{
              width:
                stage === "BUILD"
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
