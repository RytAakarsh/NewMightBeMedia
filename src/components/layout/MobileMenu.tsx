"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 bg-[#000000] flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between w-full pt-2">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-3"
          aria-label="MightBeMedia Homepage"
        >
          <div className="relative w-8 h-8">
            <Image
              src="/logos/MightBeMedia_ICONNEW.png"
              alt="MightBeMedia"
              fill
              className="object-contain invert brightness-100"
            />
          </div>
          <span className="font-display font-bold text-lg text-white">
            MightBeMedia
          </span>
        </Link>

        <button
          type="button"
          onClick={onClose}
          className="p-3 text-white/80 hover:text-white rounded-full bg-white/5 border border-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Large Navigation Links */}
      <nav className="flex flex-col gap-6 my-auto pt-6 pb-6" aria-label="Mobile Menu Links">
        {links.map((link, idx) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="group flex items-center justify-between py-2 border-b border-white/10"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-white/30">
                0{idx + 1}
              </span>
              <span className="font-display font-bold text-3xl sm:text-4xl text-white group-hover:text-white/80 transition-colors uppercase tracking-tight">
                {link.label}
              </span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        ))}

        <a
          href="#contact"
          onClick={onClose}
          className="group flex items-center justify-between py-2 border-b border-white/10"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-white/30">06</span>
            <span className="font-display font-bold text-3xl sm:text-4xl text-white group-hover:text-white/80 transition-colors uppercase tracking-tight">
              Contact
            </span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </a>
      </nav>

      {/* Bottom Footer Info & Fast CTA */}
      <div className="flex flex-col gap-5 pt-4 border-t border-white/10">
        <a
          href="#contact"
          onClick={onClose}
          className="w-full min-h-[52px] bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center rounded-sm hover:bg-neutral-200 transition-colors"
        >
          START A PROJECT
        </a>

        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-white/50">
          <a
            href="mailto:info@mightbemedia.in"
            className="hover:text-white transition-colors"
          >
            info@mightbemedia.in
          </a>
          <span>+91 88518 72245</span>
        </div>
      </div>
    </div>
  );
}
