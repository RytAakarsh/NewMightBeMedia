"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function OutcomesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({ p50: 0, x10: 0, c27: 0 });
  const hasAnimatedRef = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setCounts({ p50: 50, x10: 10, c27: 27 });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 75%",
        onEnter: () => {
          if (hasAnimatedRef.current) return;
          hasAnimatedRef.current = true;

          const obj = { v50: 0, v10: 0, v27: 0 };
          gsap.to(obj, {
            v50: 50,
            v10: 10,
            v27: 27,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              setCounts({
                p50: Math.floor(obj.v50),
                x10: Math.floor(obj.v10),
                c27: Math.floor(obj.v27),
              });
            },
            onComplete: () => {
              setCounts({ p50: 50, x10: 10, c27: 27 });
            },
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const outcomes = [
    {
      displayVal: `${counts.p50}+`,
      targetVal: 50,
      currentVal: counts.p50,
      suffix: "+",
      label: "PROJECTS DELIVERED",
      description: "Proven across SaaS platforms, medical clinics, fitness hubs, and funded tech startups.",
      metricTag: "PRODUCTION VOLUME",
    },
    {
      displayVal: `${counts.x10}x`,
      targetVal: 10,
      currentVal: counts.x10,
      suffix: "x",
      label: "LEAD GROWTH",
      description: "Multiplied qualified inbound inquiries by replacing leaky bios with high-intent funnels.",
      metricTag: "PIPELINE VELOCITY",
    },
    {
      displayVal: `${counts.c27}%`,
      targetVal: 27,
      currentVal: counts.c27,
      suffix: "%",
      label: "AVG. CONVERSION LIFT",
      description: "Elevating visitor-to-customer checkout progression through friction-free architectures.",
      metricTag: "COMMERCIAL YIELD",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0A0A0A] border-b border-black/[0.08]"
      aria-label="Verified Commercial Outcomes"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="08" label="VERIFIED OUTCOMES" theme="light" />

        <div className="mb-16 sm:mb-24">
          <h2 className="font-display font-black section-headline uppercase text-[#0A0A0A] tracking-tighter">
            PROVEN METRICS.
            <br />
            <span className="text-[#FF0000]">REAL REVENUE IMPACT.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#0A0A0A]/70 mt-4 max-w-xl font-normal">
            We measure our success purely through client balance sheets, reduced customer acquisition friction, and compounding organic velocity.
          </p>
        </div>

        {/* 3 Monumental Metric Columns with Numerical Counting Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-10 border-t border-black/[0.08]">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-xl bg-[#FAFAFA] border border-black/[0.08] hover:border-[#FF0000] hover:shadow-xl transition-all duration-300 space-y-4 relative overflow-hidden group"
            >
              {/* Micro Tech Tag & Index */}
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#0A0A0A]/40 pb-2 border-b border-black/[0.06]">
                <span className="text-[#FF0000] font-bold">0{idx + 1} //</span>
                <span>{item.metricTag}</span>
              </div>

              {/* Counting Number Display */}
              <div className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#0A0A0A] tracking-tighter leading-none py-2">
                <span>{item.currentVal}</span>
                <span className="text-[#FF0000]">{item.suffix}</span>
              </div>

              {/* Animated Progress Bar Indicator */}
              <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF0000] transition-all duration-500 ease-out"
                  style={{
                    width: `${(item.currentVal / item.targetVal) * 100}%`,
                  }}
                />
              </div>

              <h3 className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#0A0A0A] font-bold pt-1">
                {item.label}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/70 leading-relaxed max-w-xs font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
