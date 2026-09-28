"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  Copy,
  Check,
  Printer,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Search,
  QrCode,
  Video,
  Target,
  Maximize2,
  LayoutList,
  Layers,
  ChevronRight,
  ChevronLeft,
  X
} from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";

export default function ProposalPage() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [viewMode, setViewMode] = useState<"deck" | "scroll">("deck");
  const [copied, setCopied] = useState(false);
  const totalSlides = 17;

  // Keyboard navigation for slide deck
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "deck") return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(totalSlides, prev + 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(1, prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hi MightBeMedia team, I reviewed the Clear Skin Clinic Revenue Growth Proposal (₹20k setup + ₹10k/mo retainer) and would like to proceed with the next steps."
  );

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A] selection:bg-[#FF0000] selection:text-white flex flex-col justify-between font-sans">
      {/* ═══════════════════════════════════════════════════════════════════
          Top Utility Bar (Direct Client Controls)
      ════════════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.08] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <BrandLogo variant="light" className="w-[125px] sm:w-[145px] h-auto" priority />
          <div className="hidden md:flex items-center gap-2 pl-4 border-l border-black/10">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2 py-0.5 rounded-xs">
              CONFIDENTIAL PROPOSAL
            </span>
            <span className="font-mono text-[11px] text-black/60">
              Clear Skin Clinic (Dr. Nikita Baid)
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mode Switcher */}
          <div className="bg-black/5 p-1 rounded-lg flex items-center gap-1">
            <button
              type="button"
              onClick={() => setViewMode("deck")}
              className={`px-3 py-1.5 rounded-md font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "deck"
                  ? "bg-[#0A0A0A] text-white shadow-xs"
                  : "text-black/60 hover:text-black"
              }`}
              title="Interactive Slide Deck View"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Deck View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("scroll")}
              className={`px-3 py-1.5 rounded-md font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "scroll"
                  ? "bg-[#0A0A0A] text-white shadow-xs"
                  : "text-black/60 hover:text-black"
              }`}
              title="Full Scroll Overview"
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Full Overview</span>
            </button>
          </div>

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-black/10 hover:border-black/30 font-mono text-xs text-black/70 hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Copy Direct Link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline text-emerald-600 font-bold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Share</span>
              </>
            )}
          </button>

          {/* Print */}
          <button
            type="button"
            onClick={handlePrint}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-black/10 hover:border-black/30 font-mono text-xs text-black/70 hover:text-black transition-colors hidden md:flex items-center gap-1.5 cursor-pointer"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print PDF</span>
          </button>

          {/* Direct WhatsApp CTA */}
          <a
            href={`https://wa.me/918851872245?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF0000] hover:bg-[#E00000] text-white px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Accept Proposal</span>
            <span className="sm:hidden">Accept</span>
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN PROPOSAL CONTENT
      ════════════════════════════════════════════════════════════════════ */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8 lg:p-12">
        {viewMode === "deck" ? (
          /* ───────────── SLIDE DECK VIEW ───────────── */
          <div className="flex flex-col gap-6">
            {/* Progress Bar & Slide Counter */}
            <div className="flex items-center justify-between font-mono text-xs text-black/50 border-b border-black/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#FF0000]">
                  SLIDE {String(currentSlide).padStart(2, "0")}
                </span>
                <span>/</span>
                <span>{String(totalSlides).padStart(2, "0")}</span>
              </div>

              {/* Progress Line */}
              <div className="w-36 sm:w-64 h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF0000] transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                />
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[11px] text-black/40">
                <span>Use [←] / [→] keys to navigate</span>
              </div>
            </div>

            {/* Active Slide Container */}
            <div className="min-h-[520px] sm:min-h-[580px] rounded-2xl border border-black/10 bg-[#FAFAFA] p-6 sm:p-12 flex flex-col justify-between shadow-lg relative overflow-hidden">
              {renderSlideContent(currentSlide)}
            </div>

            {/* Bottom Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setCurrentSlide((p) => Math.max(1, p - 1))}
                disabled={currentSlide === 1}
                className="px-5 py-2.5 rounded-xl border border-black/10 hover:border-black/30 font-mono text-xs uppercase tracking-wider font-bold disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-2 bg-white cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Slide Dots */}
              <div className="hidden md:flex items-center gap-1.5 overflow-x-auto max-w-md px-2">
                {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setCurrentSlide(num)}
                    className={`w-7 h-7 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                      currentSlide === num
                        ? "bg-[#0A0A0A] text-white scale-110 shadow-xs"
                        : "bg-white border border-black/10 text-black/60 hover:bg-black/5"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {currentSlide < totalSlides ? (
                <button
                  type="button"
                  onClick={() => setCurrentSlide((p) => Math.min(totalSlides, p + 1))}
                  className="px-6 py-2.5 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#FF0000] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Next Slide</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href={`https://wa.me/918851872245?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-[#FF0000] text-white hover:bg-[#E00000] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Confirm Setup →</span>
                </a>
              )}
            </div>
          </div>
        ) : (
          /* ───────────── FULL CONTINUOUS SCROLL VIEW ───────────── */
          <div className="space-y-16 sm:space-y-24">
            {Array.from({ length: totalSlides }, (_, i) => i + 1).map((slideNum) => (
              <section
                key={slideNum}
                id={`slide-${slideNum}`}
                className="rounded-2xl border border-black/10 bg-[#FAFAFA] p-6 sm:p-12 shadow-md relative overflow-hidden"
              >
                <div className="font-mono text-xs text-black/40 mb-4 pb-2 border-b border-black/[0.06] flex items-center justify-between">
                  <span className="text-[#FF0000] font-bold">CHAPTER {String(slideNum).padStart(2, "0")} / {totalSlides}</span>
                  <span>MIGHTBEMEDIA REVENUE PROPOSAL</span>
                </div>
                {renderSlideContent(slideNum)}
              </section>
            ))}
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          Bottom Proposal Footer
      ════════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#0A0A0A] text-white py-12 px-6 sm:px-12 mt-16 border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <BrandLogo variant="dark" className="w-[140px] h-auto" />
            <p className="font-sans text-xs text-white/60">
              We Don&apos;t Build Websites. We Build Revenue Systems That Convert Traffic Into Paying Clients.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-white/80">
            <a href="mailto:info@mightbemedia.in" className="hover:text-[#FF0000] transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#FF0000]" />
              info@mightbemedia.in
            </a>
            <a href="tel:+918851872245" className="hover:text-[#FF0000] transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#FF0000]" />
              +91 88518 72245
            </a>
          </div>

          <a
            href={`https://wa.me/918851872245?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF0000] hover:bg-[#E00000] text-white px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Accept Proposal on WhatsApp</span>
          </a>
        </div>
      </footer>
    </main>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SLIDE CONTENT RENDERER (ALL 17 EXACT ORIGINAL SECTIONS)
// ═══════════════════════════════════════════════════════════════════
function renderSlideContent(slideNum: number) {
  switch (slideNum) {
    case 1:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-3 py-1 rounded-xs font-bold">
              <span>PROPOSAL SPECIFICATION • CLEAR SKIN CLINIC</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0A0A0A] leading-[1.02]">
              WE DON&apos;T BUILD MARKETING SYSTEMS.
              <br />
              <span className="text-[#FF0000]">WE BUILD REVENUE SYSTEMS.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-black/70 max-w-xl leading-relaxed">
              A customized premium conversion infrastructure to transform clinic attention into predictable revenue flow.
            </p>
            <div className="flex items-center gap-4 pt-2 font-mono text-xs text-black/60">
              <span className="text-[#0A0A0A] font-bold">CLIENT:</span>
              <span>Clear Skin Clinic (Dr. Nikita Baid)</span>
              <span>•</span>
              <span className="text-[#0A0A0A] font-bold">PARTNER:</span>
              <span>MightBeMedia</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-black/10 shadow-xl bg-black">
              <Image
                src="/projects/clearskin.png"
                alt="Clear Skin Clinic Proposal"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="font-mono text-[10px] text-[#FF0000] uppercase font-bold tracking-widest block">
                    STATUS: ACTIVE SPECIFICATION
                  </span>
                  <h3 className="font-display font-bold text-lg text-white uppercase">
                    Clear Skin Clinic Growth Architecture
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [WHO WE ARE]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              CONVERSION-FIRST GROWTH PARTNER
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-black/75 leading-relaxed">
            At MightBeMedia, we help clinics, doctors, healthcare brands, and local businesses transform their social media attention into predictable patient bookings. Most agencies focus entirely on cosmetic metrics like views. We focus single-mindedly on conversions and revenue.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF0000]/10 text-[#FF0000] flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-display font-bold text-lg text-[#0A0A0A]">Generate Consultations</h4>
              <p className="font-sans text-xs sm:text-sm text-black/60">
                Turning casual lookers into verified booked appointments.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF0000]/10 text-[#FF0000] flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-display font-bold text-lg text-[#0A0A0A]">Generate Trust</h4>
              <p className="font-sans text-xs sm:text-sm text-black/60">
                Structuring high-authority social proof and system loops.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF0000]/10 text-[#FF0000] flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-display font-bold text-lg text-[#0A0A0A]">Generate Revenue</h4>
              <p className="font-sans text-xs sm:text-sm text-black/60">
                Direct, measurable impact on the clinic&apos;s monthly balance sheet.
              </p>
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [THE SYSTEM BOTTLENECK]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              THE REAL PROBLEM WITH VIRALITY
            </h2>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-black/10 space-y-4">
            <p className="font-sans text-base sm:text-lg text-black/80 leading-relaxed">
              Clinics routinely exhaust resources creating and editing video content, thinking that virality solves customer acquisition. Thousands of views, but zero consultations.
            </p>
            <p className="font-sans text-base sm:text-lg font-medium text-[#FF0000] leading-relaxed">
              The actual barrier isn&apos;t content reach. The real issue is the complete lack of a Conversion System behind your social media attention.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#0A0A0A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase text-[#FF0000] tracking-widest block font-bold">
                THE VIRALITY TRAP
              </span>
              <p className="font-display font-bold text-base text-white/90">
                Misleading Metric: More Views ≠ More Patients
              </p>
            </div>
            <div className="font-mono text-xs uppercase font-bold bg-[#FF0000] text-white px-4 py-2 rounded-lg">
              0% REVENUE ACCELERATION WITHOUT FUNNEL
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [FRICTION TUNNEL ANALYSIS]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              THE CURRENT FRICTION FLOW
            </h2>
            <p className="font-sans text-sm sm:text-base text-black/70 mt-2">
              Your audience hits massive friction points on their way from discovery to clinic check-in.
            </p>
          </div>

          {/* 5-Phase Friction Funnel */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 font-mono text-center">
            <div className="p-4 rounded-xl bg-white border border-black/10">
              <span className="text-[10px] text-black/40 block">PHASE 01</span>
              <span className="font-display font-bold text-lg sm:text-xl text-[#0A0A0A] block my-1">10k Views</span>
              <span className="text-xs text-black/60">Discovery</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-black/10">
              <span className="text-[10px] text-black/40 block">PHASE 02</span>
              <span className="font-display font-bold text-lg sm:text-xl text-[#0A0A0A] block my-1">200 Likes</span>
              <span className="text-xs text-black/60">Interest</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-black/10">
              <span className="text-[10px] text-black/40 block">PHASE 03</span>
              <span className="font-display font-bold text-lg sm:text-xl text-[#0A0A0A] block my-1">50 Visits</span>
              <span className="text-xs text-black/60">Intention</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-black/10">
              <span className="text-[10px] text-black/40 block">PHASE 04</span>
              <span className="font-display font-bold text-lg sm:text-xl text-[#0A0A0A] block my-1">15 DMs</span>
              <span className="text-xs text-black/60">Inquiry</span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-[#0A0A0A] text-white border border-black">
              <span className="text-[10px] text-[#FF0000] font-bold block">FINAL GOAL</span>
              <span className="font-display font-bold text-lg sm:text-xl text-white block my-1">1–2 Patients</span>
              <span className="text-xs text-white/60">Check-In</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/20 text-xs sm:text-sm text-black/80 font-medium">
            ⚠️ <span className="font-bold text-[#FF0000]">Massive Attention Decay:</span> Without an automated conversion bridge, 99.8% of interested local prospects leak before booking.
          </div>
        </div>
      );

    case 5:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [REVENUE AUDIT REPORT]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              THE HIDDEN REVENUE LEAK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-black/10 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 font-bold block">
                WHAT PATIENTS ACTUALLY DO:
              </span>
              <ul className="space-y-3 font-sans text-sm text-black/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Watch your highly-engaging reel video</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Visit your clinic&apos;s social media profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Become actively interested in procedures</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#FF0000]/30 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF0000] font-bold block">
                WHERE THE PROCESS BREAKS DOWN:
              </span>
              <ul className="space-y-3 font-sans text-sm text-black/80">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#FF0000] shrink-0 mt-0.5" />
                  <span>No proper optimized clinic landing page</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#FF0000] shrink-0 mt-0.5" />
                  <span>No instant guidance or response on profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#FF0000] shrink-0 mt-0.5" />
                  <span>No streamlined, 24/7 appointment system</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-[#FF0000] shrink-0 mt-0.5" />
                  <span>No automated trust-building or follow-ups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );

    case 6:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [ATTENTION ANALYSIS]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              ATTENTION IS NOT THE PROBLEM
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-black/80 leading-relaxed">
            Every month, thousands of local prospective patients with active skin conditions are watching your content, finding your clinic profile, and then drifting away.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-center">
            <div className="p-6 rounded-xl bg-white border border-black/10">
              <span className="text-xs text-black/40 block mb-1">STEP 01</span>
              <h4 className="font-display font-bold text-xl text-[#0A0A0A]">Raw Audience</h4>
              <p className="font-sans text-xs text-black/60 mt-2">Local skincare viewers</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10">
              <span className="text-xs text-black/40 block mb-1">STEP 02</span>
              <h4 className="font-display font-bold text-xl text-[#0A0A0A]">Active Interest</h4>
              <p className="font-sans text-xs text-black/60 mt-2">Looking for treatment</p>
            </div>
            <div className="p-6 rounded-xl bg-[#0A0A0A] text-white border border-black">
              <span className="text-xs text-[#FF0000] font-bold block mb-1">STEP 03</span>
              <h4 className="font-display font-bold text-xl text-white">Booked Consultation</h4>
              <p className="font-sans text-xs text-white/60 mt-2">Patient in Clinic</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#0A0A0A] text-white text-center font-mono text-xs">
            <span className="text-[#FF0000] font-bold">THE MISSING BRIDGE:</span> MightBeMedia engineers the automated infrastructure between Step 02 and Step 03.
          </div>
        </div>
      );

    case 7:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [INFRASTRUCTURE BLUEPRINT]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              THE MIGHTBEMEDIA REVENUE SYSTEM™
            </h2>
            <p className="font-sans text-base sm:text-lg text-black/70 mt-2">
              Instead of simply drafting content and hoping for views, we build an entire revenue ecosystem. A streamlined patient acquisition machine operating 24 hours a day, 7 days a week, continuously nurturing clinic interest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            <div className="p-6 rounded-2xl bg-white border border-black/10 space-y-3">
              <span className="font-mono text-xs text-[#FF0000] font-bold block">MODULE 01</span>
              <h4 className="font-display font-bold text-lg text-[#0A0A0A]">Convert Viewers</h4>
              <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                → Directly into qualified skincare inquiries via smart landing pages.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/10 space-y-3">
              <span className="font-mono text-xs text-[#FF0000] font-bold block">MODULE 02</span>
              <h4 className="font-display font-bold text-lg text-[#0A0A0A]">Nurture Inquiries</h4>
              <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                → Directly into booked clinic consultations via automated triage & WhatsApp.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/10 space-y-3">
              <span className="font-mono text-xs text-[#FF0000] font-bold block">MODULE 03</span>
              <h4 className="font-display font-bold text-lg text-[#0A0A0A]">Deliver & Retain</h4>
              <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                → Systematic feedback loops, Google reviews & long-term patient loyalty.
              </p>
            </div>
          </div>
        </div>
      );

    case 8:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block">
              [PRODUCT SUITE]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              PERSONALISED PREMIUM CLINIC WEBSITE
            </h2>
            <p className="font-sans text-base text-black/75 leading-relaxed">
              A highly optimized premium-tier skincare website structured from the ground up to rank on search engines and convert visitors into booked consultations.
            </p>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs text-black/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>Premium Aesthetics UI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>1-Tap WhatsApp Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>Dedicated Treatment Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>Core Web Vitals 95+</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>Before/After Visual Slider</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>Local Medical Schema</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-black">
              <Image
                src="/projects/clearskin.png"
                alt="Clear Skin Clinic Website"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      );

    case 9:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [GUARANTEED CONTINUITY]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              3 YEARS TECHNICAL SUPPORT INCLUDED
            </h2>
            <p className="font-sans text-lg font-medium text-[#FF0000] mt-2">
              Zero Technical Worry for Clear Skin Clinic.
            </p>
          </div>
          <p className="font-sans text-base sm:text-lg text-black/75 leading-relaxed">
            Websites require updates, backups, security patches, and periodic optimization to avoid traffic crashes. We handle everything behind the scenes so you can focus entirely on patients. Complete peace of mind. No hidden retainer fees.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-center">
            <div className="p-6 rounded-xl bg-white border border-black/10">
              <span className="font-bold text-[#FF0000] block text-sm">MAINTENANCE</span>
              <span className="text-xs text-black/60 mt-1 block">Continuous Fixes</span>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10">
              <span className="font-bold text-[#FF0000] block text-sm">HOSTING CARE</span>
              <span className="text-xs text-black/60 mt-1 block">99.9% Uptime</span>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10">
              <span className="font-bold text-[#FF0000] block text-sm">SECURITY</span>
              <span className="text-xs text-black/60 mt-1 block">SSL & Backups</span>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10">
              <span className="font-bold text-[#FF0000] block text-sm">PERFORMANCE</span>
              <span className="text-xs text-black/60 mt-1 block">Sub-Second Speed</span>
            </div>
          </div>
        </div>
      );

    case 10:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [TRAFFIC SYSTEM]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              SEO & GOOGLE DISCOVERY SYSTEM
            </h2>
            <p className="font-sans text-base text-black/70 mt-2">
              Attracting Active High-Intent Patients Searching in Your Locality.
            </p>
          </div>
          <p className="font-sans text-base text-black/80 leading-relaxed">
            Unlike social media viewers who might just be browsing skin routines, Google searchers are looking for a dermatologist clinic today to solve their problem immediately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">Discovery Suite Setup</h4>
              <p className="text-xs sm:text-sm text-black/70">
                Optimized for searches like &quot;Skincare specialist clinic near me&quot; and &quot;Best dermatologist&quot;.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">Google Business Profile Tuning</h4>
              <p className="text-xs sm:text-sm text-black/70">
                Claim top organic positions on local map listings with verified clinic info.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">Skincare Treatments SEO</h4>
              <p className="text-xs sm:text-sm text-black/70">
                Targeted keyword ranking for acne scars, pigmentation, skin lightening, and laser procedures.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">High Trust Search Presentation</h4>
              <p className="text-xs sm:text-sm text-black/70">
                Show clear clinic location, doctor credentials, timings, and reviews directly in search snippets.
              </p>
            </div>
          </div>
        </div>
      );

    case 11:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [PATIENT FEEDBACK SYSTEM]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              GOOGLE REVIEW GROWTH ENGINE
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-black/80 leading-relaxed">
            Patient reviews build ultimate medical authority. Before scheduling an appointment, over 80% of skincare patients cross-reference the clinic&apos;s Google rating and feedback. A silent clinic profile loses customers instantly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-5 rounded-xl bg-white border border-black/10 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FF0000] shrink-0" />
              <span>Automatic post-visit review request flows</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-black/10 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FF0000] shrink-0" />
              <span>Direct 1-click review page redirection</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-black/10 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FF0000] shrink-0" />
              <span>Negative feedback filter & routing</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-black/10 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FF0000] shrink-0" />
              <span>Reputation tracking & response dashboard</span>
            </div>
          </div>
        </div>
      );

    case 12:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [LOBBY AUTOMATION]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              INSTANT QR REVIEW SYSTEM
            </h2>
            <p className="font-sans text-base text-black/70 mt-2">
              Make review collection effortless inside the Clear Skin Clinic reception area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-center">
            <div className="p-6 rounded-2xl bg-white border border-black/10 space-y-2">
              <QrCode className="w-8 h-8 text-[#FF0000] mx-auto" />
              <h4 className="font-bold text-sm text-[#0A0A0A]">01. SCAN</h4>
              <p className="font-sans text-xs text-black/60">
                Patient scans custom clinic QR code with their mobile.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/10 space-y-2">
              <ArrowRight className="w-8 h-8 text-[#FF0000] mx-auto" />
              <h4 className="font-bold text-sm text-[#0A0A0A]">02. DIRECT</h4>
              <p className="font-sans text-xs text-black/60">
                Automatically opens the Google Review modal with 5 stars pre-selected.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/10 space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#FF0000] mx-auto" />
              <h4 className="font-bold text-sm text-[#0A0A0A]">03. FEEDBACK</h4>
              <p className="font-sans text-xs text-black/60">
                Authentic positive rating logged on clinic profile in seconds.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] text-white text-center font-mono text-xs">
            <span className="text-[#FF0000] font-bold">LOBBY TERMINAL BENEFIT:</span> Reduces review collection friction to under 15 seconds per patient.
          </div>
        </div>
      );

    case 13:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [ORGANIC GROWTH ACCELERATOR]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              SOCIAL MEDIA BOOST SYSTEM
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-black/80 leading-relaxed">
            You treat patients. We handle growth. Our comprehensive content engine is meticulously designed to optimize your time and scale your medical authority across all social channels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
            <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">Content Outlines & Hooks</h4>
              <p className="text-xs sm:text-sm text-black/70">
                High-retention video scripts structured for consultation call-to-actions.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">Professional Editing</h4>
              <p className="text-xs sm:text-sm text-black/70">
                Sleek, minimal, medical-authority visual pacing with crisp subtitles.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">Trend & Search Research</h4>
              <p className="text-xs sm:text-sm text-black/70">
                Capturing organic momentum on fast-growing clinical and aesthetic topics.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-black/10 space-y-2">
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">Automated Scheduling Engine</h4>
              <p className="text-xs sm:text-sm text-black/70">
                Consistent multi-platform publication across Instagram and YouTube without daily friction.
              </p>
            </div>
          </div>
        </div>
      );

    case 14:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [PAID TRAFFIC MATRIX]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              META ADS GROWTH SYSTEM
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-black/80 leading-relaxed">
            Scale reliably beyond organic reach. Organic video reach is subject to algorithmic mood swings. Local Facebook and Instagram ads allow us to target high-intent prospects within a 5-10km radius of Clear Skin Clinic with complete mathematical certainty.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
              <span className="font-mono text-xs text-[#FF0000] font-bold block">01. GEO-FENCING</span>
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">Local Proximity Ads</h4>
              <p className="text-xs text-black/70">
                Laser-targeted within 5–10km of Clear Skin Clinic to capture local residents.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
              <span className="font-mono text-xs text-[#FF0000] font-bold block">02. DIRECT FUNNELS</span>
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">Consultation Campaigns</h4>
              <p className="text-xs text-black/70">
                High-converting ads driving directly into WhatsApp and instant appointment booking.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-2">
              <span className="font-mono text-xs text-[#FF0000] font-bold block">03. RETARGETING</span>
              <h4 className="font-display font-bold text-base text-[#0A0A0A]">Trust Retargeting</h4>
              <p className="text-xs text-black/70">
                Displaying patient transformations and credentials to warm prospects.
              </p>
            </div>
          </div>
        </div>
      );

    case 15:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [CAPITAL INFRASTRUCTURE]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              ONE-TIME SETUP INVESTMENT
            </h2>
            <p className="font-sans text-base text-black/70 mt-2">
              Establish your complete digital framework with our primary setup suite. Pure architecture built for continuous clinic conversion.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="p-8 rounded-3xl bg-[#0A0A0A] text-white border border-black shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block">
                  COMPLETE ECOSYSTEM SUITE
                </span>
                <h3 className="font-display font-bold text-2xl text-white">Full Revenue System Setup</h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="font-display font-black text-4xl sm:text-5xl text-white">₹20,000</span>
                <span className="font-mono text-xs text-white/50 block mt-1">One-Time Setup Investment</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-white/90">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000] shrink-0" />
                <span>AI Skincare Website</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>Meta Ads Growth Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>AI Patient Chatbot</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>Social Media Engine Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>Advanced Local Google SEO</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>3 Years Complete Technical Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>Google Review Growth Engine</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000]" />
                <span>QR Lobby Review System</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-xs text-white/50">
                No Hidden Charges • Fixed Scale Agreement
              </span>
              <span className="font-mono text-xs text-[#FF0000] font-bold">
                GUARANTEED DEPLOYMENT TIMELINE: 14 DAYS
              </span>
            </div>
          </div>
        </div>
      );

    case 16:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
              [ONGOING MAINTENANCE]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              MONTHLY GROWTH MANAGEMENT
            </h2>
            <p className="font-sans text-base text-black/70 mt-2">
              Continuous optimization, creative scaling, ad updates, and algorithmic tuning for Clear Skin Clinic.
            </p>
          </div>

          {/* Monthly Retainer Card */}
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/[0.08] gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block">
                  MONTHLY EXPANSION RETAINER
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0A0A0A]">Active Growth Execution</h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="font-display font-black text-4xl sm:text-5xl text-[#0A0A0A]">₹10,000</span>
                <span className="font-mono text-xs text-black/50 block mt-1">Per Month Retainer</span>
              </div>
            </div>

            <div className="space-y-4 font-sans">
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-black/[0.06] space-y-1">
                <h4 className="font-display font-bold text-base text-[#0A0A0A]">Social Media Maintenance & Production</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Done-For-You planning, high-retention reel video editing, scripts, and multi-channel publication.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-black/[0.06] space-y-1">
                <h4 className="font-display font-bold text-base text-[#0A0A0A]">Meta Ads Management & Scaling</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Continuous creative updates, audience targeting tuning, local geo-fencing, and lead pipeline optimization.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-black/[0.06] space-y-1">
                <h4 className="font-display font-bold text-base text-[#0A0A0A]">Funnel Nurturing & Performance Oversight</h4>
                <p className="text-xs sm:text-sm text-black/70">
                  Constant chatbot refinement, conversion rate monitoring, and monthly ROI strategy reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case 17:
      return (
        <div className="space-y-8 my-auto max-w-4xl mx-auto text-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-3">
              [PARTNERSHIP ENGAGEMENT]
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A]">
              THANK YOU.
            </h2>
            <p className="font-sans text-lg sm:text-xl text-black/80 max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
              We would be deeply honored to act as your digital growth and revenue partner.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0A0A0A] text-white max-w-2xl mx-auto space-y-6 shadow-2xl">
            <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight">
              WE ARE NOT A SERVICE PROVIDER.
              <br />
              <span className="text-[#FF0000]">WE ARE YOUR REVENUE GROWTH PARTNER.</span>
            </h3>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/918851872245?text=Hi%20MightBeMedia%2C%20I%20reviewed%20the%20Clear%20Skin%20Clinic%20proposal%20and%20would%20like%20to%20proceed.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#FF0000] hover:bg-[#E00000] text-white px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Accept Proposal & Start Setup</span>
              </a>

              <a
                href="tel:+918851872245"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 88518 72245</span>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-black/50 pt-4">
            <span>www.mightbemedia.in</span>
            <span>•</span>
            <span>info@mightbemedia.in</span>
            <span>•</span>
            <span>Build • Convert • Scale</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
