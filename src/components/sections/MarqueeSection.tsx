"use client";

import React from "react";
import SectionLabel from "../common/SectionLabel";

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
    "SAAS PLATFORMS",
    "AI PRODUCTS",
    "CLINICAL SYSTEMS",
    "COURSE FUNNELS",
    "PERFORMANCE BRANDS",
    "HEALTHCARE SPACES",
    "ATHLETIC ACADEMIES",
    "E-COMMERCE ENGINES",
  ];

  return (
    <section
      id="clients"
      className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-black/[0.08] overflow-hidden select-none"
      aria-label="Selected Clientele & Platforms"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-8 flex items-center justify-between">
        <SectionLabel number="02" label="SELECTED CLIENTELE & PLATFORMS" theme="light" className="mb-0" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/40 hidden sm:inline font-medium">
          PROVEN IN PRODUCTION
        </span>
      </div>

      {/* Row 1: Leftward moving Project Names */}
      <div className="marquee-container relative w-full overflow-hidden py-3 border-y border-black/[0.06]">
        <div className="animate-marquee-left flex items-center gap-12 sm:gap-20">
          {[...clientsRow1, ...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-12 sm:gap-20 shrink-0"
            >
              <span className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A]/80 hover:text-[#FF0000] transition-colors duration-300 uppercase tracking-tighter cursor-default">
                {client}
              </span>
              <span className="font-mono text-xs sm:text-sm text-[#FF0000] select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward moving System Categories */}
      <div className="marquee-container relative w-full overflow-hidden py-3 mt-4 border-b border-black/[0.06]">
        <div className="animate-marquee-right flex items-center gap-12 sm:gap-20">
          {[...clientsRow2, ...clientsRow2, ...clientsRow2, ...clientsRow2].map((category, idx) => (
            <div
              key={idx}
              className="flex items-center gap-12 sm:gap-20 shrink-0"
            >
              <span className="font-mono font-semibold text-base sm:text-2xl lg:text-3xl text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300 uppercase tracking-tight cursor-default">
                {category}
              </span>
              <span className="font-mono text-xs text-[#FF0000]/60 select-none">
                —
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
