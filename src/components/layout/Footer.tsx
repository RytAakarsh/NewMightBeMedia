"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Footer() {
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      if (wordmarkRef.current) {
        gsap.fromTo(
          wordmarkRef.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 0.3 },
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            scrollTrigger: {
              trigger: wordmarkRef.current,
              start: "top 92%",
              end: "top 60%",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#0A0A0A] text-white pt-24 sm:pt-32 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden select-none border-t border-black/10"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Segment: Logo & Global Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-9 h-9">
                <Image
                  src="/logos/MightBeMedia_ICONNEW.png"
                  alt="MightBeMedia Logo"
                  fill
                  className="object-contain invert brightness-100"
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Might<span className="text-[#FF0000]">Be</span>Media
              </span>
            </Link>

            <p className="font-sans text-sm sm:text-base text-white/60 max-w-md leading-relaxed">
              We are not a service provider. We are your revenue growth partner.
              Designing, engineering, and scaling digital conversion ecosystems for
              high-growth clinics, coaches, and startups globally.
            </p>

            <div className="flex items-center gap-3 font-mono text-xs text-white/50 uppercase tracking-widest pt-2">
              <span className="text-white font-semibold">BUILD</span>
              <span className="text-[#FF0000]">•</span>
              <span className="text-white font-semibold">CONVERT</span>
              <span className="text-[#FF0000]">•</span>
              <span className="text-white font-semibold">SCALE</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] block mb-2 font-bold">
              [INDEX]
            </span>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wider text-white/70">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors editorial-link">
                  About Agency
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors editorial-link">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors editorial-link">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors editorial-link">
                  The Methodology
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors editorial-link">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-white transition-colors editorial-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] block mb-2 font-bold">
              [COMMUNICATIONS]
            </span>
            <div className="space-y-2 font-mono text-xs text-white/80">
              <p>
                <a
                  href="mailto:info@mightbemedia.in"
                  className="hover:text-[#FF0000] transition-colors block text-sm font-sans editorial-link text-white"
                >
                  info@mightbemedia.in
                </a>
              </p>
              <p>
                <a
                  href="tel:+918851872245"
                  className="hover:text-[#FF0000] transition-colors block text-sm font-sans editorial-link text-white"
                >
                  +91 88518 72245
                </a>
              </p>
              <p className="text-white/40 pt-2 font-mono text-xs">
                India · Operating Globally
              </p>
            </div>
          </div>
        </div>

        {/* Giant Monolithic Wordmark — responsive clamp with zero overflow */}
        <div ref={wordmarkRef} className="py-12 sm:py-16 overflow-hidden select-none">
          <div
            className="font-display font-black uppercase text-white/[0.08] select-none text-center whitespace-nowrap tracking-tighter"
            style={{
              fontSize: "clamp(1.75rem, 8.8vw, 11rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            MIGHTBEMEDIA
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 font-mono text-xs text-white/40">
          <p>© 2026 MightBeMedia. All rights reserved. Revenue Growth Systems.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#FF0000] transition-colors group cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-[#FF0000]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
