"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "../common/MagneticButton";
import MobileMenu from "./MobileMenu";
import BrandLogo from "../common/BrandLogo";

interface NavbarProps {
  theme?: "light" | "dark";
}

export default function Navbar({ theme = "light" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDark = theme === "dark" || pathname.startsWith("/projects");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faqs" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 select-none ${
          scrolled
            ? isDark
              ? "py-3 bg-black/85 backdrop-blur-md border-b border-white/10 shadow-lg"
              : "py-3 bg-white/90 backdrop-blur-md border-b border-black/[0.08] shadow-xs"
            : "py-5 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Real Official Logo Image */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none"
            aria-label="MightBeMedia Homepage"
          >
            <BrandLogo
              variant={isDark ? "dark" : "light"}
              className="h-8 sm:h-9 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 editorial-link py-1 font-semibold ${
                    isActive
                      ? "text-[#FF0000]"
                      : isDark
                      ? "text-white/75 hover:text-[#FF0000]"
                      : "text-[#0A0A0A]/75 hover:text-[#FF0000]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              href="/#contact"
              variant="red"
              cursorBadge="START"
              className="py-2.5 px-6 text-[11px] font-bold"
            >
              <span>START A PROJECT</span>
              <span className="ml-2">→</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`flex items-center justify-center p-2 focus:outline-none min-h-[44px] min-w-[44px] ${
                isDark ? "text-white hover:text-[#FF0000]" : "text-[#0A0A0A] hover:text-[#FF0000]"
              }`}
              aria-label="Open navigation menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <span className={`w-full h-[2px] block transition-all ${isDark ? "bg-white" : "bg-[#0A0A0A]"}`} />
                <span className="w-4/5 h-[2px] bg-[#FF0000] block ml-auto transition-all" />
                <span className={`w-full h-[2px] block transition-all ${isDark ? "bg-white" : "bg-[#0A0A0A]"}`} />
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
        isDarkTheme={isDark}
      />
    </>
  );
}
