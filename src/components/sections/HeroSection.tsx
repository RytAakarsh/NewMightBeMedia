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
          { y: "120%", opacity: 0, rotateX: 10 },
          {
            y: "0%",
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.09,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }

      // 2. Supporting copy reveal
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.7,
          }
        );
      }

      // 3. CTA group reveal with stagger
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
            delay: 0.9,
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
            delay: 1.1,
          }
        );
      }

      // 5. Scroll-linked Parallax Choreography
      if (containerRef.current) {
        // Headline scale 1 -> 0.94, opacity 1 -> 0.3, upward translation
        if (headlineRef.current) {
          gsap.to(headlineRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
            scale: 0.94,
            opacity: 0.3,
            y: -50,
            ease: "none",
          });
        }

        // Secondary copy moves at slightly different rate
        if (subtextRef.current) {
          gsap.to(subtextRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
            y: -30,
            opacity: 0.2,
            ease: "none",
          });
        }

        // Background typography subtle parallax shift
        if (bgWordsRef.current) {
          gsap.to(bgWordsRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
            x: -80,
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
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-10 sm:pb-14 px-6 sm:px-10 lg:px-16 overflow-hidden border-b border-white/5 bg-black select-none"
      aria-label="Hero Section"
    >
      {/* Background Subtle Moving Typography (BUILD • CONVERT • SCALE) */}
      <div
        ref={bgWordsRef}
        className="pointer-events-none absolute -bottom-10 left-0 right-0 whitespace-nowrap opacity-[0.035] font-display font-black text-[18vw] leading-none select-none text-white tracking-tighter"
        aria-hidden="true"
      >
        BUILD • CONVERT • SCALE • BUILD • CONVERT • SCALE
      </div>

      {/* Subtle Architectural Grid Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]" aria-hidden="true">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white" />
      </div>

      {/* Top Label & Status */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/70">
            Revenue Growth Partner
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/40">
          <span>Global Systems</span>
          <span>•</span>
          <span>India HQ</span>
        </div>
      </div>

      {/* Center Dominant Editorial Composition */}
      <div className="max-w-7xl w-full mx-auto my-auto py-8 sm:py-16 z-10">
        <h1
          ref={headlineRef}
          className="font-display font-bold hero-headline uppercase text-white mb-6 sm:mb-12 tracking-tighter will-change-transform"
        >
          <span className="block overflow-hidden pb-1">
            <span className="hero-line-inner block">WE BUILD REVENUE</span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="hero-line-inner block">SYSTEMS THAT TURN</span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="hero-line-inner block">TRAFFIC INTO PAYING</span>
          </span>
          <span className="block overflow-hidden pb-1 text-white/90">
            <span className="hero-line-inner block">CLIENTS.</span>
          </span>
        </h1>

        {/* 12-Column Asymmetric Grid for Supporting Content & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div
            ref={subtextRef}
            className="lg:col-span-7 xl:col-span-6 opacity-0 will-change-transform"
          >
            <p className="font-sans text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              Helping businesses and startups convert traffic into real customers
              using high-converting websites, MVPs, and structured growth systems —
              built around your funnel, not just your design.
            </p>
          </div>

          <div
            ref={ctaGroupRef}
            className="lg:col-span-5 xl:col-span-6 flex flex-wrap items-center gap-4 sm:gap-6 opacity-0"
          >
            <MagneticButton
              href="#contact"
              variant="primary"
              cursorBadge="START"
              className="w-full sm:w-auto"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </MagneticButton>

            <MagneticButton
              href="#work"
              variant="outline"
              cursorBadge="WORK"
              className="w-full sm:w-auto"
            >
              <span>VIEW OUR WORK</span>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Philosophy & Animated Scroll Cue */}
      <div
        ref={bottomBarRef}
        className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 opacity-0 z-10"
      >
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-white/60">
          <span>BUILD</span>
          <span className="text-white/20">•</span>
          <span>CONVERT</span>
          <span className="text-white/20">•</span>
          <span>SCALE</span>
        </div>

        <a
          href="#clients"
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-200 group py-1"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 animate-bounce transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
