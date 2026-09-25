"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function WhySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const pillars = [
    {
      num: "01",
      title: "Business-First Approach",
      desc: "Before sketching wireframes, we analyze your unit economics, acquisition bottlenecks, and customer lifetime value. Everything we construct has a direct line to commercial performance.",
    },
    {
      num: "02",
      title: "Conversion-Focused Design",
      desc: "We eliminate aesthetic self-indulgence. Typography, layouts, whitespace, and micro-interactions are calibrated to reduce cognitive fatigue and accelerate the visitor's buying intent.",
    },
    {
      num: "03",
      title: "Scalable Systems",
      desc: "Built on modern Next.js and robust serverless architectures. Zero tech debt, sub-second global caching, and modular codebases that handle 10x traffic bursts effortlessly.",
    },
    {
      num: "04",
      title: "Long-Term Support",
      desc: "We do not ship a zip file and vanish. We act as your standing technical and conversion partner — auditing Core Web Vitals, testing new conversion levers, and safeguarding performance.",
    },
  ];

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const items = pillarsRef.current?.querySelectorAll(".why-pillar-card");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: "top 80%",
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0A0A0A] border-b border-black/[0.08]"
      aria-label="Partnership Thesis"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="09" label="THE PARTNERSHIP THESIS" theme="light" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-4 mb-16 sm:mb-20">
          <div className="lg:col-span-12">
            <h2 className="font-display font-black section-headline uppercase text-[#0A0A0A] tracking-tighter leading-[0.98]">
              WHY MIGHTBEMEDIA.
              <br />
              <span className="text-[#FF0000]">
                &ldquo;WE ARE NOT A SERVICE PROVIDER. WE&apos;RE YOUR REVENUE GROWTH PARTNER.&rdquo;
              </span>
            </h2>
          </div>
        </div>

        {/* 4 Editorial Manifesto Statements */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-10 border-t border-black/[0.08]"
        >
          {pillars.map((item) => (
            <div key={item.num} className="why-pillar-card p-8 rounded-xl bg-[#FAFAFA] border border-black/[0.08] hover:border-[#FF0000] transition-all space-y-3">
              <span className="font-mono text-xs text-[#FF0000] font-bold block">
                /{item.num}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0A0A0A] uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#0A0A0A]/70 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
