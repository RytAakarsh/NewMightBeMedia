"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textProgressRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textProgressRef.current?.querySelectorAll(".scroll-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { color: "rgba(255, 255, 255, 0.18)" },
          {
            color: "rgba(255, 255, 255, 1)",
            stagger: 0.05,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const manifestoText = `MightBeMedia is a growth-focused digital agency that builds systems designed to generate leads, increase conversions, and scale businesses. Not just developers. Not just designers. We build integrated revenue systems that turn traffic into paying clients.`;

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#000000] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <SectionLabel number="02" label="ABOUT MIGHTBEMEDIA" theme="dark" />

        {/* Big Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8">
          <div className="lg:col-span-12">
            <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter leading-[0.98] mb-12 sm:mb-16">
              WE&apos;RE NOT A SERVICE PROVIDER.
              <br />
              <span className="text-white/40 hover:text-white transition-colors duration-300">
                WE&apos;RE YOUR GROWTH PARTNER.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40 space-y-4">
            <p>CORE PHILOSOPHY</p>
            <p className="text-white/80 leading-relaxed">
              BUILD • CONVERT • SCALE
            </p>
            <p className="text-white/50 text-[11px] leading-relaxed pt-2">
              Every digital interface must perform a quantifiable business job.
              If it does not convert, it is obsolete.
            </p>
          </div>

          <div className="lg:col-span-8">
            <p
              ref={textProgressRef}
              className="font-sans text-xl sm:text-2xl lg:text-3xl leading-relaxed sm:leading-relaxed font-normal"
            >
              {manifestoText.split(" ").map((word, idx) => (
                <span key={idx} className="scroll-word inline-block mr-[0.3em]">
                  {word}
                </span>
              ))}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/10">
              <div>
                <p className="font-mono text-xs uppercase text-white/40 mb-1">
                  01. THINKING
                </p>
                <p className="font-display font-medium text-lg text-white">
                  Business-First
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-white/40 mb-1">
                  02. ARCHITECTURE
                </p>
                <p className="font-display font-medium text-lg text-white">
                  Conversion-Focused
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-white/40 mb-1">
                  03. INFRASTRUCTURE
                </p>
                <p className="font-display font-medium text-lg text-white">
                  Scalable Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
