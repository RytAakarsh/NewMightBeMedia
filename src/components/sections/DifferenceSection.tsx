"use client";

import React from "react";
import SectionLabel from "../common/SectionLabel";
import { differences } from "@/data/difference";
import { X, Check } from "lucide-react";

export default function DifferenceSection() {
  return (
    <section
      className="py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#000000] border-b border-white/10"
      aria-label="Why Most Websites Fail And How We Fix It"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="08" label="THE OPERATIONAL GAP" theme="dark" />

        <div className="mb-14 sm:mb-20">
          <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter">
            WHY MOST WEBSITES FAIL —
            <br />
            <span className="text-white/40">AND HOW WE FIX IT.</span>
          </h2>
        </div>

        {/* 2-Side Comparative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Flawed Traditional Approach */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#080808] border border-white/10 space-y-10">
            <div className="flex items-center gap-3 pb-6 border-b border-white/10">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <X className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                TRADITIONAL AGENCY FLAWS
              </span>
            </div>

            <div className="space-y-8">
              {differences.map((diff) => (
                <div key={diff.number} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/30">
                      {diff.number}.
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white/80 line-through decoration-white/30 uppercase tracking-tight">
                      {diff.flawTitle}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-white/50 leading-relaxed pl-7">
                    {diff.flawDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The MightBeMedia Revenue Fix */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#0d0d0d] border border-white/20 space-y-10 shadow-2xl">
            <div className="flex items-center gap-3 pb-6 border-b border-white/10">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white">
                <Check className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-white">
                THE MIGHTBEMEDIA SYSTEM
              </span>
            </div>

            <div className="space-y-8">
              {differences.map((diff) => (
                <div key={diff.number} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/60">
                      {diff.number}.
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-tight">
                      {diff.fixTitle}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-white/80 leading-relaxed pl-7 font-normal">
                    {diff.fixDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
