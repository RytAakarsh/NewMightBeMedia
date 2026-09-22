"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";

export default function MomentumSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0.15, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "center center",
              scrub: 0.5,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex flex-col justify-center py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#080808] border-b border-white/10"
      aria-label="Digital Momentum Manifesto"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionLabel number="05" label="THE MIGHTBEMEDIA STANDARD" theme="dark" />

        <div className="max-w-6xl">
          <h2
            ref={headlineRef}
            className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] uppercase text-white tracking-tighter leading-[0.95] mb-12 sm:mb-16"
          >
            WE DON&apos;T BUILD
            <br />
            <span className="text-white/30">DIGITAL PRESENCE.</span>
            <br />
            <br />
            WE BUILD
            <br />
            <span className="text-white">DIGITAL MOMENTUM.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/10">
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
