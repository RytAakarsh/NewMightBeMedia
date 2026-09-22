"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textProgressRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Headline clip reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { clipPath: "inset(100% 0 0 0)", opacity: 0.2, y: 30 },
          {
            clipPath: "inset(0% 0 0 0)",
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 85%",
              end: "top 50%",
              scrub: 0.4,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Word-by-word scroll highlight
      const words = textProgressRef.current?.querySelectorAll(".scroll-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { color: "rgba(255, 255, 255, 0.18)" },
          {
            color: "rgba(255, 255, 255, 1)",
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
              trigger: textProgressRef.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Pillar cards staggered slide up
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const manifestoText = `MightBeMedia is a growth-focused digital agency that builds systems designed to generate leads, increase conversions, and scale businesses. Not just developers. Not just designers. We build integrated revenue systems that turn traffic into paying clients.`;

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#000000] border-b border-white/10"
      aria-label="About MightBeMedia"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <SectionLabel number="02" label="ABOUT MIGHTBEMEDIA" theme="dark" />

        {/* Big Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8">
          <div className="lg:col-span-12">
            <h2
              ref={headlineRef}
              className="font-display font-bold section-headline uppercase text-white tracking-tighter leading-[0.98] mb-12 sm:mb-16"
            >
              WE&apos;RE NOT A SERVICE PROVIDER.
              <br />
              <span className="text-white/40 hover:text-white transition-colors duration-500">
                WE&apos;RE YOUR GROWTH PARTNER.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40 space-y-4">
            <p className="text-white/70 font-semibold">[CORE PHILOSOPHY]</p>
            <p className="text-white/90 text-sm leading-relaxed tracking-[0.25em]">
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
                <span key={idx} className="scroll-word inline-block mr-[0.3em] transition-colors">
                  {word}
                </span>
              ))}
            </p>

            <div
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/10"
            >
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <p className="font-mono text-xs uppercase text-white/40 mb-1">
                  01. THINKING
                </p>
                <p className="font-display font-medium text-lg text-white">
                  Business-First
                </p>
                <p className="font-sans text-xs text-white/50 mt-1">
                  Unit economics & CAC focus
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <p className="font-mono text-xs uppercase text-white/40 mb-1">
                  02. ARCHITECTURE
                </p>
                <p className="font-display font-medium text-lg text-white">
                  Conversion-Focused
                </p>
                <p className="font-sans text-xs text-white/50 mt-1">
                  Frictionless funnel UX
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <p className="font-mono text-xs uppercase text-white/40 mb-1">
                  03. INFRASTRUCTURE
                </p>
                <p className="font-display font-medium text-lg text-white">
                  Scalable Systems
                </p>
                <p className="font-sans text-xs text-white/50 mt-1">
                  Sub-second load times
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
