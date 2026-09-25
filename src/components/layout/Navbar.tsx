"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "../common/MagneticButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/blog" },
    { label: "FAQ", href: "/#faqs" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 select-none ${
          scrolled
            ? "py-3.5 bg-white/90 backdrop-blur-md border-b border-black/[0.08] shadow-xs"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="MightBeMedia Homepage"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logos/MightBeMedia_ICONNEW.png"
                alt="MightBeMedia Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[#0A0A0A]">
              Might<span className="text-[#FF0000]">Be</span>Media
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/70 hover:text-[#FF0000] transition-colors duration-200 editorial-link py-1 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              href="/#contact"
              variant="red"
              cursorBadge="START"
              className="py-2.5 px-6 text-[11px]"
            >
              <span>START A PROJECT</span>
              <span className="ml-2 text-white">→</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center justify-center p-2 text-[#0A0A0A] hover:text-[#FF0000] focus:outline-none min-h-[44px] min-w-[44px]"
              aria-label="Open navigation menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <span className="w-full h-[2px] bg-[#0A0A0A] block transition-all" />
                <span className="w-4/5 h-[2px] bg-[#FF0000] block ml-auto transition-all" />
                <span className="w-full h-[2px] bg-[#0A0A0A] block transition-all" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
