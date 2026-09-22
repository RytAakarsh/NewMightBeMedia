"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function MomentumSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const part1Ref = useRef<HTMLDivElement>(null);
  const part2Ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Part 1: WE DON'T BUILD DIGITAL PRESENCE (fades out as scrolled)
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

      // Part 2: WE BUILD DIGITAL MOMENTUM (scales up to full prominence)
      if (part2Ref.current) {
        gsap.fromTo(
          part2Ref.current,
          { scale: 0.9, opacity: 0.2, y: 40 },
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

      // Description reveal
      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: descRef.current,
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
      className="relative min-h-[85vh] flex flex-col justify-center py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#080808] border-b border-white/10 overflow-hidden"
      aria-label="Digital Momentum Manifesto"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionLabel number="05" label="THE MIGHTBEMEDIA STANDARD" theme="dark" />

        <div className="max-w-6xl mt-8">
          {/* Part 1: We Don't Build */}
          <div ref={part1Ref} className="mb-8 sm:mb-12">
            <span className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl uppercase text-white/40 tracking-tighter block mb-2">
              WE DON&apos;T BUILD
            </span>
            <span className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase text-white/25 tracking-tighter block line-through decoration-white/20">
              DIGITAL PRESENCE.
            </span>
          </div>

          {/* Part 2: We Build Digital Momentum */}
          <div ref={part2Ref} className="mb-12 sm:mb-16">
            <span className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl uppercase text-white tracking-tighter block mb-2">
              WE BUILD
            </span>
            <span className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase text-white tracking-tighter block leading-none">
              DIGITAL MOMENTUM.
            </span>
          </div>

          {/* Supporting Manifesto */}
          <div
            ref={descRef}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/10"
          >
            <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-white/40">
              [COMMERCIAL PURPOSE]
            </div>
            <div className="md:col-span-8">
              <p className="font-sans text-xl sm:text-2xl text-white/80 leading-relaxed font-light">
                Every digital touchpoint must perform an intentional commercial job.
                It should attract attention, solidify trust, trigger immediate action,
                and contribute directly to bottom-line revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
