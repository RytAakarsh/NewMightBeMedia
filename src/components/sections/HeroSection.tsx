"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import MagneticButton from "../common/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const bgWordsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Line-by-line headline reveal with cubic-bezier ease
      const lines = headlineRef.current?.querySelectorAll(".hero-line-inner");
      if (lines && lines.length > 0) {
        gsap.fromTo(
          lines,
          { y: "115%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.15,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }

      // 2. Supporting copy reveal
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.65,
          }
        );
      }

      // 3. CTA group reveal
      if (ctaGroupRef.current) {
        gsap.fromTo(
          ctaGroupRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.85,
          }
        );
      }

      // 4. Bottom bar reveal
      if (bottomBarRef.current) {
        gsap.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 1.05,
          }
        );
      }

      // 5. Scroll-linked Parallax Choreography
      if (containerRef.current) {
        if (headlineRef.current) {
          gsap.to(headlineRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
            scale: 0.96,
            opacity: 0.25,
            y: -40,
            ease: "none",
          });
        }

        if (subtextRef.current) {
          gsap.to(subtextRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
            y: -25,
            opacity: 0.2,
            ease: "none",
          });
        }

        if (bgWordsRef.current) {
          gsap.to(bgWordsRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
            x: -100,
            ease: "none",
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={containerRef}
      data-cursor="EXPLORE"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden border-b border-black/[0.08] bg-[#FFFFFF] text-[#0A0A0A] select-none"
      aria-label="Hero Section"
    >
      {/* Background Subtle Moving Architectural Typography */}
      <div
        ref={bgWordsRef}
        className="pointer-events-none absolute -bottom-8 left-0 right-0 whitespace-nowrap opacity-[0.03] font-display font-black text-[18vw] leading-none select-none text-black tracking-tighter"
        aria-hidden="true"
      >
        BUILD • CONVERT • SCALE • BUILD • CONVERT • SCALE
      </div>

      {/* Subtle Hairline Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" aria-hidden="true" />

      {/* Top Label & Status */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#0A0A0A]/70 font-semibold">
            MIGHTBEMEDIA <span className="text-[#FF0000] mx-1.5">•</span> REVENUE GROWTH PARTNER
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/40 font-medium">
          <span>Global Systems</span>
          <span className="text-[#FF0000]">•</span>
          <span>India HQ</span>
        </div>
      </div>

      {/* Center Dominant Editorial Composition */}
      <div className="max-w-7xl w-full mx-auto my-auto py-8 sm:py-16 z-10">
        <h1
          ref={headlineRef}
          className="font-display font-black hero-headline uppercase text-[#0A0A0A] mb-8 sm:mb-12 tracking-tighter will-change-transform"
        >
          <span className="block overflow-hidden pb-1">
            <span className="hero-line-inner block">WE BUILD REVENUE</span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="hero-line-inner block">SYSTEMS THAT CONVERT</span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="hero-line-inner block">TRAFFIC INTO</span>
          </span>
          <span className="block overflow-hidden pb-1 text-[#0A0A0A]">
            <span className="hero-line-inner block">
              HIGH-PAYING <span className="text-[#FF0000]">CLIENTS.</span>
            </span>
          </span>
        </h1>

        {/* 12-Column Asymmetric Grid for Supporting Content & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div
            ref={subtextRef}
            className="lg:col-span-7 xl:col-span-6 opacity-0 will-change-transform"
          >
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#0A0A0A]/70 leading-relaxed max-w-2xl font-normal">
              We combine marketing, technology, conversion design and scalable software to turn digital attention into measurable business growth.
            </p>
          </div>

          <div
            ref={ctaGroupRef}
            className="lg:col-span-5 xl:col-span-6 flex flex-wrap items-center gap-4 sm:gap-6 opacity-0"
          >
            <MagneticButton
              href="/#contact"
              variant="red"
              cursorBadge="START"
              className="w-full sm:w-auto"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </MagneticButton>

            <MagneticButton
              href="/#about"
              variant="outline"
              cursorBadge="EXPLORE"
              className="w-full sm:w-auto"
            >
              <span>EXPLORE MIGHTBEMEDIA</span>
              <ArrowDown className="w-3.5 h-3.5 ml-2 text-[#FF0000]" />
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Philosophy & Animated Scroll Cue */}
      <div
        ref={bottomBarRef}
        className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/[0.08] opacity-0 z-10"
      >
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-[#0A0A0A]/60 font-semibold">
          <span className="text-[#0A0A0A]">BUILD</span>
          <span className="text-[#FF0000]">•</span>
          <span className="text-[#0A0A0A]">CONVERT</span>
          <span className="text-[#FF0000]">•</span>
          <span className="text-[#0A0A0A]">SCALE</span>
        </div>

        <a
          href="/#insights-rail"
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A]/50 hover:text-[#FF0000] transition-colors duration-200 group py-1"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 animate-bounce transition-transform duration-300 text-[#FF0000]" />
        </a>
      </div>
    </section>
  );
}
