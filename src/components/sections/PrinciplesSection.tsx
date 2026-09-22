"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function PrinciplesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  const principles = [
    {
      number: "01",
      title: "BUSINESS-FIRST THINKING",
      shortDesc: "We do not start in Figma; we start with your unit economics.",
      detail:
        "We analyze customer acquisition costs, average transaction values, and inquiry-to-close bottlenecks. Every interface decision must drive quantifiable ROI on your monthly balance sheet.",
    },
    {
      number: "02",
      title: "CONVERSION-FOCUSED DESIGN",
      shortDesc: "Aesthetic beauty is meaningless if visitors bounce without acting.",
      detail:
        "Every headline, CTA placement, trust badge, and form field is engineered around cognitive momentum, reducing hesitation and guiding high-intent visitors directly into your sales pipeline.",
    },
    {
      number: "03",
      title: "SCALABLE SYSTEMS",
      shortDesc: "Architectures engineered to handle 10x traffic without breaking.",
      detail:
        "Built on modern Next.js and high-resilience headless backends. Clean TypeScript, zero-bloat component design, and sub-second load times that scale smoothly as your business expands.",
    },
  ];

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const items = rowsRef.current?.querySelectorAll(".principle-row");
      if (items && items.length > 0) {
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "top 55%",
                scrub: 0.4,
                invalidateOnRefresh: true,
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 bg-[#080808] border-b border-white/10"
      aria-label="Core Principles"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="03" label="FOUNDATIONAL PRINCIPLES" theme="dark" />

        <div className="mb-14 sm:mb-20">
          <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter">
            HOW WE THINK.
            <br />
            <span className="text-white/40">HOW WE EXECUTE.</span>
          </h2>
        </div>

        {/* Large Horizontal Editorial Rows */}
        <div
          ref={rowsRef}
          className="divide-y divide-white/10 border-y border-white/10"
        >
          {principles.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={item.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`principle-row group py-10 sm:py-14 transition-all duration-500 ease-out cursor-pointer ${
                  isHovered ? "bg-white/[0.03] px-4 sm:px-6" : "px-0"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span className="font-mono text-sm sm:text-base text-white/40 group-hover:text-white transition-colors">
                      /{item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-5">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-white transition-colors uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-white/50 mt-2">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Expanded Detail */}
                  <div className="lg:col-span-5">
                    <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  {/* Interactive Arrow Indicator */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black text-white transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
