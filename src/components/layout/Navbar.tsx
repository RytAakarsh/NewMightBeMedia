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
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Insights", href: "#blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-black/80 backdrop-blur-md border-b border-white/10"
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
            <div className="relative w-8 h-8 sm:w-9 sm:h-9">
              <Image
                src="/logos/MightBeMedia_ICONNEW.png"
                alt="MightBeMedia"
                fill
                priority
                className="object-contain invert brightness-100 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:opacity-90 transition-opacity">
              MightBeMedia
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors duration-200 editorial-link py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              href="#contact"
              variant="primary"
              cursorBadge="TALK"
              className="py-3 px-6 text-[11px]"
            >
              Let&apos;s Talk
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center justify-center p-2 text-white/90 hover:text-white focus:outline-none min-h-[44px] min-w-[44px]"
              aria-label="Open navigation menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <span className="w-full h-[1.5px] bg-white block" />
                <span className="w-4/5 h-[1.5px] bg-white block ml-auto" />
                <span className="w-full h-[1.5px] bg-white block" />
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
