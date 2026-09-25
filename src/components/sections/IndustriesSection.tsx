"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus, Minus, CheckCircle } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import { industries } from "@/data/industries";

export default function IndustriesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);

  const toggleMobile = (idx: number) => {
    setExpandedMobile(expandedMobile === idx ? null : idx);
  };

  return (
    <section
      id="industries"
      className="py-24 sm:py-32 lg:py-44 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0A0A0A] border-b border-black/[0.08]"
      aria-label="Specialized Verticals"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="06" label="SPECIALIZED VERTICALS" theme="light" />

        <div className="mb-14 sm:mb-20">
          <h2 className="font-display font-black section-headline uppercase text-[#0A0A0A] tracking-tighter">
            PROVEN SYSTEMS FOR
            <br />
            <span className="text-[#FF0000]">HIGH-GROWTH NICHES.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#0A0A0A]/70 mt-4 max-w-xl font-normal">
            We don&apos;t apply one generic template across every sector. We build bespoke funnel mechanisms tailored to specific customer acquisition loops.
          </p>
        </div>

        {/* Large Editorial Rows / Cards */}
        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {industries.map((ind, idx) => {
            const isHovered = hoveredIdx === idx;
            const isExpanded = expandedMobile === idx;

            return (
              <div
                key={ind.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`group py-8 sm:py-12 transition-all duration-300 ${
                  isHovered ? "bg-[#FAFAFA]" : ""
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleMobile(idx)}
                  className="flex items-center justify-between cursor-pointer py-1"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#FF0000]">
                      /{ind.number}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-[#0A0A0A] group-hover:text-[#FF0000] uppercase tracking-tight transition-colors">
                      {ind.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/60 border border-black/10 bg-white px-3 py-1 rounded-full font-medium">
                      {ind.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#0A0A0A] group-hover:border-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-all">
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
                <div className="hidden lg:grid grid-cols-12 gap-8 pt-8 mt-6 border-t border-black/[0.06] items-center">
                  <div className="col-span-4 pr-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold mb-2">
                      [THE FRICTION]
                    </p>
                    <p className="font-sans text-sm text-[#0A0A0A]/70 leading-relaxed">
                      {ind.problem}
                    </p>
                  </div>

                  <div className="col-span-5 pr-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A] font-bold mb-2">
                      [OUR REVENUE FIX]
                    </p>
                    <p className="font-sans text-sm text-[#0A0A0A]/90 leading-relaxed font-semibold">
                      {ind.solution}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {ind.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] uppercase tracking-wider text-[#0A0A0A]/70 bg-white border border-black/10 px-2.5 py-1 rounded-xs"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-3 flex flex-col items-end justify-between h-full">
                    <div className="text-right">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#0A0A0A]/40 font-bold block mb-1">
                        BENCHMARK IMPACT
                      </span>
                      <span className="font-display font-black text-3xl text-[#FF0000]">
                        {ind.proofMetric}
                      </span>
                    </div>

                    <Link
                      href="/#contact"
                      className="mt-6 font-mono text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF0000] inline-flex items-center gap-2 group-hover:underline font-bold"
                    >
                      <span>BUILD FOR {ind.name.split(" ")[0]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF0000]" />
                    </Link>
                  </div>
                </div>

                {/* Mobile Accordion Content (Controlled by tap) */}
                {isExpanded && (
                  <div className="lg:hidden pt-6 mt-4 space-y-4 border-t border-black/[0.06] animate-in fade-in slide-in-from-top-2 duration-300">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF0000] font-bold mb-1">
                        [THE FRICTION]
                      </p>
                      <p className="font-sans text-sm text-[#0A0A0A]/70 leading-relaxed">
                        {ind.problem}
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#0A0A0A] font-bold mb-1">
                        [THE SYSTEM FIX]
                      </p>
                      <p className="font-sans text-sm text-[#0A0A0A]/90 leading-relaxed font-semibold">
                        {ind.solution}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {ind.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="font-mono text-[9px] uppercase tracking-wider text-[#0A0A0A]/70 bg-white border border-black/10 px-2 py-0.5 rounded-xs"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-black/[0.06]">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#0A0A0A]/40 font-bold block">
                          BENCHMARK
                        </span>
                        <span className="font-display font-black text-xl text-[#FF0000]">
                          {ind.proofMetric}
                        </span>
                      </div>
                      <Link
                        href="/#contact"
                        className="font-mono text-xs uppercase tracking-wider text-[#FF0000] underline font-bold"
                      >
                        Start Project →
                      </Link>
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
