"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface PageLoaderProps {
  onComplete?: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [stage, setStage] = useState<"BUILD" | "CONVERT" | "SCALE" | "EXIT" | "DONE">("BUILD");

  useEffect(() => {
    // Stage 1: BUILD (starts immediately)
    const t1 = setTimeout(() => {
      setStage("CONVERT");
    }, 320);

    // Stage 2: CONVERT
    const t2 = setTimeout(() => {
      setStage("SCALE");
    }, 650);

    // Stage 3: EXIT curtain
    const t3 = setTimeout(() => {
      setStage("EXIT");
    }, 980);

    // Stage 4: DONE
    const t4 = setTimeout(() => {
      setStage("DONE");
      if (onComplete) onComplete();
    }, 1450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (stage === "DONE") return null;

  return (
    <div
      className={`fixed inset-0 z-1000 bg-[#000000] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        stage === "EXIT"
          ? "-translate-y-full opacity-90 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        {/* MBM Authentic Icon */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 transform hover:scale-105">
          <Image
            src="/logos/MightBeMedia_ICONNEW.png"
            alt="MightBeMedia"
            fill
            priority
            className="object-contain invert brightness-100"
          />
        </div>

        {/* Sequential Words: BUILD • CONVERT • SCALE */}
        <div className="h-8 overflow-hidden flex items-center justify-center">
          <div className="font-display font-bold text-lg sm:text-xl tracking-[0.3em] uppercase text-white transition-all duration-300">
            {stage === "BUILD" && (
              <span className="inline-block animate-pulse">BUILD</span>
            )}
            {stage === "CONVERT" && (
              <span className="inline-block tracking-[0.35em] text-white">CONVERT</span>
            )}
            {(stage === "SCALE" || stage === "EXIT") && (
              <span className="inline-block tracking-[0.4em] text-white">SCALE</span>
            )}
          </div>
        </div>

        {/* Minimal Progress Line */}
        <div className="w-24 h-[1px] bg-white/10 overflow-hidden relative mt-1">
          <div
            className="h-full bg-white transition-all duration-350 ease-out"
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
