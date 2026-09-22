"use client";

import React from "react";

export default function MarqueeSection() {
  const clientsRow1 = [
    "SOMMIE",
    "BARISTAI",
    "VIVA SKIN CARE",
    "MODULUS CLASSES",
    "SEM FITNESS",
    "SHE & SOUL",
    "PRIME SPORTS",
    "PASSION CRAFTED",
  ];

  const clientsRow2 = [
    "SAAS PLATFORM",
    "AI PRODUCT",
    "CLINICAL SYSTEMS",
    "COURSE FUNNELS",
    "PERFORMANCE BRAND",
    "HEALTHCARE SPACE",
    "ATHLETIC ACADEMY",
    "E-COMMERCE ENGINE",
  ];

  return (
    <section
      id="clients"
      className="py-16 sm:py-24 bg-[#080808] border-b border-white/10 overflow-hidden select-none"
      aria-label="Client Roster & Project Marquee"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-8 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
          [01] SELECTED CLIENTELE & PLATFORMS
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-white/30 hidden sm:inline">
          PROVEN IN PRODUCTION
        </span>
      </div>

      {/* Row 1: Leftward moving Project Names */}
      <div className="marquee-container relative w-full overflow-hidden py-3 border-y border-white/5">
        <div className="animate-marquee-left flex items-center gap-12 sm:gap-20">
          {[...clientsRow1, ...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-12 sm:gap-20 shrink-0"
            >
              <span className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white/75 hover:text-white transition-colors duration-300 uppercase tracking-tighter cursor-default">
                {client}
              </span>
              <span className="font-mono text-xs sm:text-sm text-white/20 select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward moving System Categories */}
      <div className="marquee-container relative w-full overflow-hidden py-3 mt-4 border-b border-white/5">
        <div className="animate-marquee-right flex items-center gap-12 sm:gap-20">
          {[...clientsRow2, ...clientsRow2, ...clientsRow2, ...clientsRow2].map((category, idx) => (
            <div
              key={idx}
              className="flex items-center gap-12 sm:gap-20 shrink-0"
            >
              <span className="font-mono font-medium text-base sm:text-2xl lg:text-3xl text-white/40 hover:text-white/80 transition-colors duration-300 uppercase tracking-tight cursor-default">
                {category}
              </span>
              <span className="font-mono text-xs text-white/10 select-none">
                —
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
