"use client";

import React, { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import { industries } from "@/data/industries";

export default function IndustriesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);

  const toggleMobile = (idx: number) => {
    setExpandedMobile(expandedMobile === idx ? null : idx);
  };

  return (
    <section
      id="industries"
      className="py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#000000] border-b border-white/10"
      aria-label="Industries We Specialize In"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="06" label="SPECIALIZED VERTICALS" theme="dark" />

        <div className="mb-14 sm:mb-20">
          <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter">
            PROVEN SYSTEMS FOR
            <br />
            <span className="text-white/40">HIGH-GROWTH NICHES.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/60 mt-4 max-w-xl">
            We don&apos;t apply one generic template across every sector. We build bespoke
            funnel mechanisms tailored to specific customer acquisition loops.
          </p>
        </div>

        {/* Large Editorial Rows */}
        <div className="divide-y divide-white/10 border-y border-white/10 relative">
          {industries.map((ind, idx) => {
            const isHovered = hoveredIdx === idx;
            const isExpanded = expandedMobile === idx;

            return (
              <div
                key={ind.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group py-8 sm:py-12 transition-all duration-300 ${
                  isHovered ? "bg-white/[0.02]" : ""
                }`}
              >
                {/* Desktop and Mobile Header (Tappable on mobile) */}
                <div
                  onClick={() => toggleMobile(idx)}
                  className="flex items-center justify-between cursor-pointer py-1"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base text-white/40 group-hover:text-white transition-colors">
                      /{ind.number}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white group-hover:text-white/90 uppercase tracking-tight transition-colors">
                      {ind.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block font-mono text-xs uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1 rounded-full">
                      {ind.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:border-white group-hover:text-white transition-all">
                      <div className="lg:hidden">
                        {isExpanded ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                      <ArrowUpRight className="hidden lg:block w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Desktop Expanded Layout (Always visible on lg) */}
                <div className="hidden lg:grid grid-cols-12 gap-8 pt-8 mt-6 border-t border-white/5 items-center">
                  <div className="col-span-4 pr-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                      THE PROBLEM
                    </p>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">
                      {ind.problem}
                    </p>
                  </div>

                  <div className="col-span-5 pr-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                      OUR REVENUE FIX
                    </p>
                    <p className="font-sans text-sm text-white/90 leading-relaxed font-medium">
                      {ind.solution}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {ind.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] uppercase tracking-wider text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-3 flex flex-col items-end justify-between h-full">
                    <div className="text-right">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-1">
                        BENCHMARK IMPACT
                      </span>
                      <span className="font-display font-bold text-3xl text-white">
                        {ind.proofMetric}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="mt-6 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white inline-flex items-center gap-2 group-hover:underline"
                    >
                      <span>BUILD FOR {ind.name.split(" ")[0]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Mobile Accordion Content (Controlled by tap) */}
                {isExpanded && (
                  <div className="lg:hidden pt-6 mt-4 space-y-4 border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1">
                        THE FRICTION
                      </p>
                      <p className="font-sans text-sm text-white/70 leading-relaxed">
                        {ind.problem}
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1">
                        THE SYSTEM
                      </p>
                      <p className="font-sans text-sm text-white/90 leading-relaxed font-medium">
                        {ind.solution}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {ind.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="font-mono text-[9px] uppercase tracking-wider text-white/50 bg-white/5 px-2 py-0.5 rounded"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 block">
                          BENCHMARK
                        </span>
                        <span className="font-display font-bold text-xl text-white">
                          {ind.proofMetric}
                        </span>
                      </div>
                      <a
                        href="#contact"
                        className="font-mono text-xs uppercase tracking-wider text-white underline"
                      >
                        Start Project →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
