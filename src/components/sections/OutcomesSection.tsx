"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function OutcomesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const metricBoxes = numbersRef.current?.querySelectorAll(".outcome-number");
      if (metricBoxes && metricBoxes.length > 0) {
        gsap.fromTo(
          metricBoxes,
          { scale: 0.85, opacity: 0, y: 35 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const outcomes = [
    {
      metric: "50+",
      label: "PROJECTS DELIVERED",
      description: "Proven across SaaS platforms, medical clinics, fitness hubs, and funded tech startups.",
    },
    {
      metric: "10x",
      label: "LEAD GROWTH",
      description: "Multiplied qualified inbound inquiries by replacing leaky bios with high-intent funnels.",
    },
    {
      metric: "27%",
      label: "AVG. CONVERSION LIFT",
      description: "Elevating visitor-to-customer checkout progression through friction-free architectures.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#000000] border-b border-white/10"
      aria-label="Verified Commercial Outcomes"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="10" label="VERIFIED OUTCOMES" theme="dark" />

        <div className="mb-20 sm:mb-28">
          <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter">
            PROVEN METRICS.
            <br />
            <span className="text-white/40">REAL REVENUE IMPACT.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/60 mt-4 max-w-xl">
            We measure our success purely through client balance sheets, reduced customer
            acquisition friction, and compounding organic velocity.
          </p>
        </div>

        {/* 3 Monumental Metric Columns */}
        <div
          ref={numbersRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-12 border-t border-white/10"
        >
          {outcomes.map((item, idx) => (
            <div key={idx} className="outcome-number space-y-4">
              <span className="font-mono text-xs text-white/30 block">
                0{idx + 1} //
              </span>
              <div className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tighter leading-none">
                {item.metric}
              </div>
              <h3 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-white font-semibold pt-2">
                {item.label}
              </h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
