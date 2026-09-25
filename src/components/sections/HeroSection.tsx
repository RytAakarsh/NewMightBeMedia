"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import MagneticButton from "../common/MagneticButton";
import { blogPosts } from "@/data/blog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const railContainerRef = useRef<HTMLDivElement>(null);
  const [isRailPaused, setIsRailPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  // Duplicate posts for infinite seamless loop
  const heroRailPosts = [...blogPosts, ...blogPosts, ...blogPosts];

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
            duration: 1.1,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.15,
          }
        );
      }

      // 2. Supporting copy reveal
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.55,
          }
        );
      }

      // 3. CTA group reveal
      if (ctaGroupRef.current) {
        gsap.fromTo(
          ctaGroupRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.7,
          }
        );
      }

      // 4. Blog rail entrance animation (staggered scale/slide in)
      if (railContainerRef.current) {
        gsap.fromTo(
          railContainerRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.85,
          }
        );
      }

      // 5. Subtle scroll-linked Parallax
      if (containerRef.current) {
        if (headlineRef.current) {
          gsap.to(headlineRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
            y: -30,
            opacity: 0.4,
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
      className="relative w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden border-b border-black/[0.08] bg-[#FFFFFF] text-[#0A0A0A] select-none"
      aria-label="MightBeMedia Hero Experience"
    >
      {/* Subtle Hairline Background Grid & Technical Coordinates */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute top-28 right-8 font-mono text-[9px] text-black/20 tracking-widest hidden lg:block">
        SYS.LOC [28.6139° N, 77.2090° E] • NCR
      </div>
      <div className="pointer-events-none absolute bottom-4 left-8 font-mono text-[9px] text-black/20 tracking-widest hidden lg:block">
        MBM_REVENUE_FRAMEWORK v2.0
      </div>

      <div className="max-w-7xl w-full mx-auto z-10 flex flex-col justify-between">
        {/* Top Eyebrow & System Status */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#0A0A0A]/70 font-bold">
              MIGHTBEMEDIA <span className="text-[#FF0000] mx-1">•</span> REVENUE GROWTH PARTNER
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/40 font-medium">
            <span>BUILD</span>
            <span className="text-[#FF0000]">•</span>
            <span>CONVERT</span>
            <span className="text-[#FF0000]">•</span>
            <span>SCALE</span>
          </div>
        </div>

        {/* Huge Editorial Headline (Tight, Bold, Clamped ~70-110px) */}
        <div className="my-2 sm:my-4">
          <h1
            ref={headlineRef}
            className="font-display font-black uppercase text-[#0A0A0A] tracking-tighter will-change-transform"
            style={{
              fontSize: "clamp(2.4rem, 6.2vw, 7.8rem)",
              lineHeight: 0.94,
              letterSpacing: "-0.04em",
            }}
          >
            <span className="block overflow-hidden pb-1">
              <span className="hero-line-inner block">WE BUILD REVENUE</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-line-inner block">SYSTEMS THAT CONVERT</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-line-inner block">
                TRAFFIC INTO <span className="text-[#FF0000]">HIGH-PAYING</span>
              </span>
            </span>
            <span className="block overflow-hidden pb-1 text-[#0A0A0A]">
              <span className="hero-line-inner block">CLIENTS.</span>
            </span>
          </h1>
        </div>

        {/* Supporting Copy & Action CTAs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pt-4 sm:pt-6 mb-8 sm:mb-10 border-t border-black/[0.06]">
          <div
            ref={subtextRef}
            className="lg:col-span-7 xl:col-span-6 opacity-0 will-change-transform"
          >
            <p className="font-sans text-sm sm:text-base lg:text-lg text-[#0A0A0A]/70 leading-relaxed font-normal max-w-xl">
              Marketing, technology and conversion systems designed to turn digital attention into measurable business growth.
            </p>
          </div>

          <div
            ref={ctaGroupRef}
            className="lg:col-span-5 xl:col-span-6 flex flex-wrap items-center gap-3 sm:gap-5 opacity-0"
          >
            <MagneticButton
              href="/#contact"
              variant="red"
              cursorBadge="START"
              className="w-full sm:w-auto py-3 px-7 text-xs font-bold shadow-md"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </MagneticButton>

            <MagneticButton
              href="/projects"
              variant="outline"
              cursorBadge="WORK"
              className="w-full sm:w-auto py-3 px-6 text-xs font-bold"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowDown className="w-3.5 h-3.5 ml-2 text-[#FF0000]" />
            </MagneticButton>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            INTEGRATED HERO BLOG VISUAL RAIL (Visible in Hero Composition!)
        ════════════════════════════════════════════════════════════════════ */}
        <div
          ref={railContainerRef}
          className="relative w-full pt-4 sm:pt-6 border-t border-black/[0.08] opacity-0"
        >
          {/* Header Bar of Rail */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#0A0A0A]/60 font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-[#FF0000] font-bold">[01]</span>
              <span>INSIGHTS & STRATEGIC ESSAYS</span>
            </div>
            <Link
              href="/blog"
              className="hover:text-[#FF0000] transition-colors flex items-center gap-1"
            >
              <span>VIEW ALL 10</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF0000]" />
            </Link>
          </div>

          {/* Infinite Auto-Scrolling Visual Track */}
          <div
            className="marquee-container relative w-full overflow-x-auto overflow-y-hidden py-2 no-scrollbar cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsRailPaused(true)}
            onMouseLeave={() => setIsRailPaused(false)}
            onTouchStart={() => setIsRailPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsRailPaused(false), 1500)}
          >
            <div
              className={`animate-marquee-left flex items-center gap-4 sm:gap-6 ${
                isRailPaused ? "animation-play-state: paused;" : ""
              }`}
              style={{ animationPlayState: isRailPaused ? "paused" : "running" }}
            >
              {heroRailPosts.map((post, idx) => {
                // Alternating card sizes for rhythmic editorial exhibition:
                // idx % 3 === 0 -> Large featured (340px-400px)
                // idx % 3 === 1 -> Medium (280px-330px)
                // idx % 3 === 2 -> Compact (260px-300px)
                const isFeatured = idx % 3 === 0;

                return (
                  <Link
                    key={`${post.slug}-${idx}`}
                    href={`/blog/${post.slug}`}
                    data-cursor="READ"
                    className={`group relative shrink-0 rounded-xl bg-[#FAFAFA] border border-black/[0.08] hover:border-[#FF0000] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                      isFeatured
                        ? "w-[280px] sm:w-[350px] lg:w-[380px]"
                        : "w-[240px] sm:w-[300px] lg:w-[330px]"
                    }`}
                  >
                    {/* Rich Colorful Artwork Cover */}
                    <div className="relative w-full aspect-16/10 bg-[#141414] overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 380px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                      {/* Category Pill */}
                      <div className="absolute top-2.5 left-2.5">
                        <span className="font-mono text-[9px] uppercase font-bold tracking-wider bg-[#FF0000] text-white px-2 py-0.5 rounded-xs shadow-xs">
                          {post.category}
                        </span>
                      </div>

                      {/* Read Time Tag */}
                      <div className="absolute bottom-2.5 right-2.5 font-mono text-[9px] text-white/90 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                        {post.readTime}
                      </div>
                    </div>

                    {/* Metadata & Editorial Headline */}
                    <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between font-mono text-[10px] text-[#0A0A0A]/40 uppercase tracking-wider mb-1.5">
                          <span>{post.date}</span>
                          <span className="text-[#FF0000] font-bold">0{(idx % blogPosts.length) + 1}</span>
                        </div>

                        <h3 className="font-display font-bold text-sm sm:text-base text-[#0A0A0A] group-hover:text-[#FF0000] transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                      </div>

                      <div className="pt-2.5 mt-2.5 border-t border-black/[0.05] flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#0A0A0A]/70 group-hover:text-[#FF0000] transition-colors font-bold">
                        <span>EXPLORE ESSAY</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#FF0000]" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
