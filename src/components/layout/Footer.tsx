"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-[#000000] text-white pt-24 sm:pt-32 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden select-none"
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
              <span className="font-display font-bold text-2xl tracking-tight">
                MightBeMedia
              </span>
            </Link>

            <p className="font-sans text-sm sm:text-base text-white/60 max-w-md leading-relaxed">
              We are not a service provider. We are your revenue growth partner.
              Designing, engineering, and scaling digital conversion ecosystems for
              high-growth clinics, coaches, and startups globally.
            </p>

            <div className="flex items-center gap-4 font-mono text-xs text-white/40 uppercase tracking-widest pt-2">
              <span>BUILD</span>
              <span>•</span>
              <span>CONVERT</span>
              <span>•</span>
              <span>SCALE</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              INDEX
            </span>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wider text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Agency
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  The Methodology
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Insights & Blog
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
              COMMUNICATIONS
            </span>
            <div className="space-y-2 font-mono text-xs text-white/80">
              <p>
                <a
                  href="mailto:info@mightbemedia.in"
                  className="hover:text-white transition-colors block text-sm font-sans"
                >
                  info@mightbemedia.in
                </a>
              </p>
              <p>
                <a
                  href="tel:+918851872245"
                  className="hover:text-white transition-colors block text-sm font-sans"
                >
                  +91 88518 72245
                </a>
              </p>
              <p className="text-white/40 pt-2">
                India · Operating Globally
              </p>
            </div>
          </div>
        </div>

        {/* Giant Monolithic Wordmark */}
        <div className="py-12 sm:py-16 overflow-hidden">
          <div className="font-display font-black text-[13vw] leading-none uppercase tracking-tighter text-white/10 select-none text-center whitespace-nowrap">
            MIGHTBEMEDIA
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 font-mono text-xs text-white/40">
          <p>© 2026 MightBeMedia. All rights reserved. Revenue Growth Systems.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
