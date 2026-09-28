"use client";

import React, { useState, useEffect } from "react";
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
  Clock,
  Briefcase
} from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";
import { defaultProposalConfig, ProposalConfig, ProposalSlide } from "@/data/proposal";

export default function ProposalPage() {
  const [config] = useState<ProposalConfig>(defaultProposalConfig);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [viewMode, setViewMode] = useState<"deck" | "scroll">("deck");
  const [copied, setCopied] = useState(false);
  const totalSlides = config.slides.length;

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
  }, [viewMode, totalSlides]);

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

  const activeSlideData = config.slides[currentSlide - 1];

  const whatsappMessage = encodeURIComponent(
    `Hi MightBeMedia team, I reviewed the Digital Growth Proposal (${config.setupInvestment} setup + ${config.monthlyRetainer}) and would like to proceed with the next steps.`
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
              {config.projectTitle} • {config.tagline}
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
            <span>Print / PDF</span>
          </button>

          {/* Quick CTA */}
          <a
            href={`https://wa.me/${config.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF0000] hover:bg-[#CC0000] text-white px-3 sm:px-4 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Approve on WhatsApp</span>
            <span className="sm:hidden">Approve</span>
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════
          VIEW 1: Interactive Slide Deck
      ════════════════════════════════════════════════════════════════════ */}
      {viewMode === "deck" && (
        <div className="flex-1 flex flex-col justify-between max-w-6xl w-full mx-auto p-4 sm:p-8 md:p-12">
          {/* Slide Stage Card */}
          <div className="bg-[#FAFAFA] border border-black/[0.08] rounded-2xl p-6 sm:p-10 md:p-14 shadow-sm min-h-[580px] flex flex-col justify-between relative overflow-hidden">
            {/* Top Slide Meta */}
            <div>
              <div className="flex items-center justify-between border-b border-black/[0.08] pb-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#FF0000] tracking-wider">
                    {activeSlideData.number} / {totalSlides.toString().padStart(2, "0")}
                  </span>
                  <span className="text-black/30 font-mono">|</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-black/60 font-semibold">
                    {activeSlideData.category}
                  </span>
                </div>
                <span className="font-mono text-xs text-black/40 hidden sm:inline">
                  MightBeMedia Proposal System
                </span>
              </div>

              {/* Slide Heading */}
              <div className="max-w-3xl mb-6 sm:mb-8">
                <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] mb-2 leading-tight">
                  {activeSlideData.title}
                </h1>
                <p className="font-mono text-xs sm:text-sm text-[#FF0000] uppercase tracking-wider font-semibold">
                  {activeSlideData.subtitle}
                </p>
                <p className="text-sm sm:text-base text-black/70 mt-3 sm:mt-4 leading-relaxed">
                  {activeSlideData.summary}
                </p>
              </div>

              {/* Dynamic Slide Body Elements */}
              {/* 1. Metrics Grid */}
              {activeSlideData.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  {activeSlideData.metrics.map((m, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-black/[0.06] shadow-2xs">
                      <div className="font-display text-2xl sm:text-3xl font-bold text-[#0A0A0A] tracking-tight">
                        {m.value}
                      </div>
                      <div className="font-mono text-xs uppercase tracking-wider font-bold text-[#FF0000] mt-1">
                        {m.label}
                      </div>
                      {m.sublabel && (
                        <div className="text-xs text-black/60 mt-1">{m.sublabel}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* 2. Key Points List */}
              {activeSlideData.keyPoints && (
                <div className="space-y-3 my-6">
                  {activeSlideData.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-black/[0.06]">
                      <CheckCircle2 className="w-5 h-5 text-[#FF0000] shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-black/80 font-medium">{pt}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* 3. Items Cards */}
              {activeSlideData.items && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  {activeSlideData.items.map((it, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-black/[0.06] hover:border-black/20 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-base font-bold text-[#0A0A0A]">
                          {it.title}
                        </h3>
                        {it.badge && (
                          <span className="font-mono text-[10px] uppercase font-bold text-[#FF0000] bg-[#FF0000]/10 px-2 py-0.5 rounded-xs">
                            {it.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                        {it.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* 4. Table Data */}
              {activeSlideData.tableData && (
                <div className="overflow-x-auto my-6 bg-white rounded-xl border border-black/[0.08]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-black/[0.08] bg-black/[0.02]">
                        {activeSlideData.tableData.headers.map((h, i) => (
                          <th key={i} className="p-3.5 sm:p-4 font-mono text-xs uppercase tracking-wider font-bold text-black/80">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/[0.06] text-xs sm:text-sm">
                      {activeSlideData.tableData.rows.map((r, i) => (
                        <tr key={i} className="hover:bg-black/[0.01]">
                          <td className="p-3.5 sm:p-4 font-medium text-black">{r.item}</td>
                          <td className="p-3.5 sm:p-4 text-black/80 font-mono">{r.setup}</td>
                          <td className="p-3.5 sm:p-4 text-black/80 font-mono">{r.ongoing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* 5. Highlight Box */}
              {activeSlideData.highlightBox && (
                <div className="bg-[#0A0A0A] text-white p-5 sm:p-6 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#FF0000]">
                      {activeSlideData.highlightBox.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl">
                      {activeSlideData.highlightBox.description}
                    </p>
                  </div>
                  {activeSlideData.highlightBox.metric && (
                    <div className="font-mono text-xs uppercase font-bold text-[#FF0000] border border-[#FF0000]/40 px-3 py-1.5 rounded-md whitespace-nowrap">
                      {activeSlideData.highlightBox.metric}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Slide Navigation Controls */}
            <div className="border-t border-black/[0.08] pt-4 mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => Math.max(1, prev - 1))}
                disabled={currentSlide === 1}
                className="px-4 py-2 rounded-lg border border-black/10 hover:border-black/30 font-mono text-xs uppercase tracking-wider font-bold text-black/80 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-2 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-none px-2">
                {config.slides.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx + 1)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx + 1
                        ? "w-8 bg-[#FF0000]"
                        : "w-2 bg-black/20 hover:bg-black/40"
                    }`}
                    title={`Slide ${idx + 1}: ${s.title}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => Math.min(totalSlides, prev + 1))}
                disabled={currentSlide === totalSlides}
                className="px-4 py-2 rounded-lg bg-[#0A0A0A] hover:bg-[#222222] font-mono text-xs uppercase tracking-wider font-bold text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-center font-mono text-[11px] text-black/40 mt-4">
            Tip: Use Keyboard Arrow Keys [← / →] to navigate slides
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          VIEW 2: Full Continuous Scroll Overview
      ════════════════════════════════════════════════════════════════════ */}
      {viewMode === "scroll" && (
        <div className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-8 space-y-10 my-6">
          {/* Header Summary */}
          <div className="bg-[#0A0A0A] text-white p-8 sm:p-12 rounded-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold mb-2">
              MASTER PROPOSAL OVERVIEW
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              {config.projectTitle}
            </h1>
            <p className="text-white/70 mt-3 text-base sm:text-lg max-w-2xl">
              {config.projectGoal}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 font-mono text-xs">
              <div>
                <div className="text-white/40 uppercase">Setup Fee</div>
                <div className="text-white font-bold text-base mt-0.5">{config.setupInvestment}</div>
              </div>
              <div>
                <div className="text-white/40 uppercase">Monthly Retainer</div>
                <div className="text-white font-bold text-base mt-0.5">{config.monthlyRetainer}</div>
              </div>
              <div>
                <div className="text-white/40 uppercase">Timeline</div>
                <div className="text-white font-bold text-base mt-0.5">{config.timeline}</div>
              </div>
              <div>
                <div className="text-white/40 uppercase">Support SLA</div>
                <div className="text-white font-bold text-base mt-0.5">{config.supportDuration}</div>
              </div>
            </div>
          </div>

          {/* Sequential 17 Slides in Document Format */}
          <div className="space-y-8">
            {config.slides.map((s, idx) => (
              <section
                key={idx}
                id={`slide-${s.number}`}
                className="bg-[#FAFAFA] border border-black/[0.08] rounded-2xl p-6 sm:p-10 shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 mb-6">
                  <span className="font-mono text-xs font-bold text-[#FF0000] tracking-wider">
                    SECTION {s.number} / {totalSlides.toString().padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs uppercase text-black/50 font-semibold">
                    {s.category}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-1">
                  {s.title}
                </h2>
                <p className="font-mono text-xs text-[#FF0000] uppercase tracking-wider font-semibold mb-3">
                  {s.subtitle}
                </p>
                <p className="text-sm sm:text-base text-black/70 mb-6 leading-relaxed">
                  {s.summary}
                </p>

                {/* Metrics */}
                {s.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                    {s.metrics.map((m, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-black/[0.06]">
                        <div className="font-display text-2xl font-bold text-[#0A0A0A]">{m.value}</div>
                        <div className="font-mono text-xs font-bold text-[#FF0000] mt-0.5">{m.label}</div>
                        {m.sublabel && <div className="text-xs text-black/60 mt-0.5">{m.sublabel}</div>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Points */}
                {s.keyPoints && (
                  <div className="space-y-2.5 my-4">
                    {s.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-lg border border-black/[0.06]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF0000] shrink-0 mt-0.5" />
                        <span className="text-sm text-black/80 font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Items */}
                {s.items && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                    {s.items.map((it, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-black/[0.06]">
                        <h3 className="font-display text-sm font-bold text-[#0A0A0A] mb-1">{it.title}</h3>
                        <p className="text-xs text-black/70 leading-relaxed">{it.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Table */}
                {s.tableData && (
                  <div className="overflow-x-auto my-4 bg-white rounded-xl border border-black/[0.08]">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-black/[0.08] bg-black/[0.02]">
                          {s.tableData.headers.map((h, i) => (
                            <th key={i} className="p-3 font-mono text-xs uppercase font-bold text-black/80">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/[0.06]">
                        {s.tableData.rows.map((r, i) => (
                          <tr key={i}>
                            <td className="p-3 font-medium text-black">{r.item}</td>
                            <td className="p-3 text-black/80 font-mono">{r.setup}</td>
                            <td className="p-3 text-black/80 font-mono">{r.ongoing}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Highlight */}
                {s.highlightBox && (
                  <div className="bg-[#0A0A0A] text-white p-5 rounded-xl my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-display text-base font-bold text-[#FF0000]">{s.highlightBox.title}</h4>
                      <p className="text-xs text-white/80 mt-0.5">{s.highlightBox.description}</p>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          Bottom Approval Action Deck
      ════════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-black/[0.08] bg-[#FAFAFA] px-4 sm:px-8 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-display text-lg font-bold text-[#0A0A0A]">
              Ready to execute your growth system?
            </div>
            <div className="text-xs text-black/60 font-mono">
              Setup: {config.setupInvestment} • Retainer: {config.monthlyRetainer} • Delivery: {config.timeline}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${config.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-[#FF0000] hover:bg-[#CC0000] text-white px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Approve & Start on WhatsApp</span>
            </a>
            <a
              href={`tel:${config.contactPhone.replace(/[^0-9+]/g, "")}`}
              className="p-3 rounded-xl border border-black/10 hover:border-black/30 font-mono text-xs text-black/80 hover:text-black transition-colors hidden sm:flex items-center gap-1.5"
              title="Call MightBeMedia"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
