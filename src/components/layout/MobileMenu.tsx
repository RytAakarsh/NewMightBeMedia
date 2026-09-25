"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import BrandLogo from "../common/BrandLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  isDarkTheme?: boolean;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  isDarkTheme = false,
}: MobileMenuProps) {
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
      className={`fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-300 ${
        isDarkTheme
          ? "bg-[#0A0A0A] text-white"
          : "bg-[#FFFFFF] text-[#0A0A0A]"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between w-full pt-2">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center"
          aria-label="MightBeMedia Homepage"
        >
          <BrandLogo
            variant={isDarkTheme ? "dark" : "light"}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <button
          type="button"
          onClick={onClose}
          className={`p-3 rounded-full border min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors cursor-pointer ${
            isDarkTheme
              ? "text-white hover:text-[#FF0000] bg-white/5 border-white/10"
              : "text-[#0A0A0A] hover:text-[#FF0000] bg-black/[0.04] border-black/10"
          }`}
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Large Editorial Navigation Links */}
      <nav className="flex flex-col gap-5 my-auto pt-6 pb-6" aria-label="Mobile Menu Links">
        {links.map((link, idx) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className={`group flex items-center justify-between py-2.5 border-b ${
              isDarkTheme ? "border-white/10" : "border-black/10"
            }`}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-[#FF0000] font-bold">
                0{idx + 1}
              </span>
              <span
                className={`font-display font-bold text-3xl sm:text-4xl group-hover:text-[#FF0000] transition-colors uppercase tracking-tight ${
                  isDarkTheme ? "text-white" : "text-[#0A0A0A]"
                }`}
              >
                {link.label}
              </span>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:text-[#FF0000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </Link>
        ))}

        <Link
          href="/#contact"
          onClick={onClose}
          className={`group flex items-center justify-between py-2.5 border-b ${
            isDarkTheme ? "border-white/10" : "border-black/10"
          }`}
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[#FF0000] font-bold">06</span>
            <span
              className={`font-display font-bold text-3xl sm:text-4xl group-hover:text-[#FF0000] transition-colors uppercase tracking-tight ${
                isDarkTheme ? "text-white" : "text-[#0A0A0A]"
              }`}
            >
              Contact
            </span>
          </div>
          <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:text-[#FF0000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </Link>
      </nav>

      {/* Bottom Footer Info & Fast CTA */}
      <div
        className={`flex flex-col gap-4 pt-4 border-t ${
          isDarkTheme ? "border-white/10" : "border-black/10"
        }`}
      >
        <Link
          href="/#contact"
          onClick={onClose}
          className="w-full min-h-[52px] bg-[#FF0000] text-white font-mono text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center hover:bg-[#E00000] transition-colors shadow-md"
        >
          START A PROJECT →
        </Link>

        <div
          className={`flex flex-wrap items-center justify-between gap-2 font-mono text-xs pt-1 ${
            isDarkTheme ? "text-white/60" : "text-black/60"
          }`}
        >
          <a
            href="mailto:info@mightbemedia.in"
            className="hover:text-[#FF0000] transition-colors"
          >
            info@mightbemedia.in
          </a>
          <a
            href="tel:+918851872245"
            className="hover:text-[#FF0000] transition-colors"
          >
            +91 88518 72245
          </a>
        </div>
      </div>
    </div>
  );
}
