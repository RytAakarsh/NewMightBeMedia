"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowRight } from "lucide-react";

export default function MomentumSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const part1Ref = useRef<HTMLDivElement>(null);
  const part2Ref = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const momentumStages = [
    { step: "01", label: "ATTENTION", desc: "High-intent search & organic reach" },
    { step: "02", label: "TRUST", desc: "Clinical credentials & case proof" },
    { step: "03", label: "ACTION", desc: "Frictionless checkout & booking" },
    { step: "04", label: "REVENUE", desc: "Compounding bottom-line profit" },
  ];

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Part 1: We don't build digital presence
      if (part1Ref.current) {
        gsap.fromTo(
          part1Ref.current,
          { opacity: 0.2, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "top 45%",
              scrub: 0.4,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Part 2: We build digital momentum
      if (part2Ref.current) {
        gsap.fromTo(
          part2Ref.current,
          { scale: 0.94, opacity: 0.2, y: 35 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
              end: "center center",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Flow sequence reveal
      if (flowRef.current) {
        gsap.fromTo(
          flowRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: flowRef.current,
              start: "top 85%",
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
      className="relative py-24 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0A0A0A] border-b border-black/[0.08] overflow-hidden select-none"
      aria-label="Digital Momentum Standard"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionLabel number="05" label="THE MIGHTBEMEDIA STANDARD" theme="light" />

        <div className="max-w-6xl mt-4">
          {/* Part 1: We Don't Build */}
          <div ref={part1Ref} className="mb-6 sm:mb-10">
            <span className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl uppercase text-[#0A0A0A]/40 tracking-tighter block mb-2">
              WE DON&apos;T BUILD
            </span>
            <span className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase text-[#0A0A0A]/20 tracking-tighter block line-through decoration-[#FF0000]/60">
              DIGITAL PRESENCE.
            </span>
          </div>

          {/* Part 2: We Build Digital Momentum */}
          <div ref={part2Ref} className="mb-14 sm:mb-20">
            <span className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl uppercase text-[#0A0A0A] tracking-tighter block mb-2">
              WE BUILD
            </span>
            <span className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase text-[#0A0A0A] tracking-tighter block leading-none">
              DIGITAL <span className="text-[#FF0000]">MOMENTUM.</span>
            </span>
          </div>

          {/* 4-Stage Kinetic Momentum Pipeline */}
          <div
            ref={flowRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-black/[0.08]"
          >
            {momentumStages.map((item, idx) => (
              <div
                key={item.step}
                className="p-6 rounded-xl bg-[#FAFAFA] border border-black/[0.08] hover:border-[#FF0000] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
                    <span className="font-mono text-xs font-bold text-[#FF0000]">
                      STAGE {item.step}
                    </span>
                    {idx < 3 && (
                      <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-[#FF0000] group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#0A0A0A] uppercase tracking-tight mb-2">
                    {item.label}
                  </h3>
                  <p className="font-sans text-xs text-[#0A0A0A]/60 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 mt-10 border-t border-black/[0.08]">
            <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold">
              [COMMERCIAL PURPOSE]
            </div>
            <div className="md:col-span-8">
              <p className="font-sans text-lg sm:text-xl text-[#0A0A0A]/80 leading-relaxed font-normal">
                Every digital touchpoint must perform an intentional commercial job: attract attention, solidify trust, trigger immediate action, and contribute directly to bottom-line revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
