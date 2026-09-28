"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Clock,
  Briefcase,
  AlertTriangle,
  Flame,
  Send,
  Wand2,
  X,
  Star,
  Globe
} from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";

export default function ProposalPage() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [viewMode, setViewMode] = useState<"deck" | "scroll">("deck");
  const [isAiLabOpen, setIsAiLabOpen] = useState(false);
  const [aiTab, setAiTab] = useState<"chatbot" | "script" | "proposal">("chatbot");
  const [copied, setCopied] = useState(false);

  // AI Chat states
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm ClearSkin AI, your automated reception assistant. How can I help you find medical skincare support today?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatThinking, setIsChatThinking] = useState(false);

  // Script Generator states
  const [scriptTopic, setScriptTopic] = useState("");
  const [generatedScript, setGeneratedScript] = useState("");
  const [isScriptGenerating, setIsScriptGenerating] = useState(false);

  // Proposal Advisor states
  const [proposalMessages, setProposalMessages] = useState([
    {
      role: "assistant",
      content:
        'Ask me anything about our deliverables, pricing structure, or support coverage! For instance: "What does the ₹20,000 package include?" or "Explain the retainer fee."',
    },
  ]);
  const [proposalInput, setProposalInput] = useState("");
  const [isProposalThinking, setIsProposalThinking] = useState(false);

  const totalSlides = 17;

  // Keyboard navigation for slide deck
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "deck" || isAiLabOpen) return;
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
  }, [viewMode, isAiLabOpen]);

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

  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    const userMsg = { role: "user", content: chatInput };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setIsChatThinking(true);
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Thank you for inquiring! At Clear Skin Clinic, Dr. Nikita Baid provides customized dermatological assessments for acne scars, pigmentation, and anti-aging treatments. Would you like to schedule an in-person consultation via WhatsApp?",
        },
      ]);
      setIsChatThinking(false);
    }, 600);
  };

  const handleSendProposal = () => {
    if (!proposalInput.trim()) return;
    const userMsg = { role: "user", content: proposalInput };
    setProposalMessages((prev) => [...prev, userMsg]);
    setProposalInput("");
    setIsProposalThinking(true);
    setTimeout(() => {
      setProposalMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "The MightBeMedia proposal includes a one-time ₹20,000 complete setup (AI Skincare Website, Meta Ads Setup, Patient Chatbot, Social Setup, Local SEO, 3 Years Technical Support, and Google Review QR Engine) plus an optional ₹10,000/mo growth retainer.",
        },
      ]);
      setIsProposalThinking(false);
    }, 600);
  };

  const handleGenerateScript = () => {
    if (!scriptTopic.trim()) return;
    setIsScriptGenerating(true);
    setTimeout(() => {
      setGeneratedScript(
        `HOOK: "Stop treating acne scars like active breakouts! Here is what your dermatologist actually wants you to know..."\n\nVISUAL FLOW: Showcase clinical laser care & before/after results with Dr. Nikita Baid at Clear Skin Clinic.\n\nCALL-TO-ACTION: "Tap the link in our bio to book your consultation at Clear Skin Clinic today!"`
      );
      setIsScriptGenerating(false);
    }, 700);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi MightBeMedia team, I reviewed the Clear Skin Clinic Revenue Growth Proposal (₹20,000 setup + ₹10,000/mo retainer) for Dr. Nikita Baid and would like to proceed with the next steps."
  );

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A] selection:bg-[#FF0000] selection:text-white flex flex-col justify-between font-sans overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════════
          Top Utility Bar (MightBeMedia V2 Header)
      ════════════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.08] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <BrandLogo variant="light" className="w-[125px] sm:w-[145px] h-auto" priority />
          <div className="hidden md:flex items-center gap-2 pl-4 border-l border-black/10">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2 py-0.5 rounded-xs">
              CONFIDENTIAL PROPOSAL
            </span>
            <span className="font-mono text-[11px] text-black/60">
              Clear Skin Clinic • Dr. Nikita Baid
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* View Mode Switcher */}
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
              title="Full Executive Document Scroll"
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Full Overview</span>
            </button>
          </div>

          {/* AI Lab Trigger */}
          <button
            type="button"
            onClick={() => setIsAiLabOpen(true)}
            className="bg-[#0A0A0A] hover:bg-[#222222] text-white px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            title="Open Interactive AI Demonstration"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF0000]" />
            <span className="hidden sm:inline">AI Lab</span>
          </button>

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

          {/* Print / Save PDF */}
          <button
            type="button"
            onClick={handlePrint}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-black/10 hover:border-black/30 font-mono text-xs text-black/70 hover:text-black transition-colors hidden md:flex items-center gap-1.5 cursor-pointer"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>

          {/* Direct Approval */}
          <a
            href={`https://wa.me/918851872245?text=${whatsappMessage}`}
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
          VIEW 1: Interactive Slide Deck (MightBeMedia V2 Editorial)
      ════════════════════════════════════════════════════════════════════ */}
      {viewMode === "deck" && (
        <div className="flex-1 flex flex-col justify-between max-w-6xl w-full mx-auto p-4 sm:p-8 md:p-12">
          {/* Main Presentation Stage */}
          <div className="bg-[#FAFAFA] border border-black/[0.08] rounded-2xl p-6 sm:p-10 md:p-14 shadow-sm min-h-[580px] flex flex-col justify-between relative overflow-hidden">
            {/* Top Slide Meta */}
            <div>
              <div className="flex items-center justify-between border-b border-black/[0.08] pb-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#FF0000] tracking-wider">
                    {currentSlide.toString().padStart(2, "0")} / {totalSlides.toString().padStart(2, "0")}
                  </span>
                  <span className="text-black/30 font-mono">|</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-black/60 font-semibold">
                    {getSlideCategory(currentSlide)}
                  </span>
                </div>
                <span className="font-mono text-xs text-black/40 hidden sm:inline">
                  Clear Skin Clinic • MightBeMedia Proposal
                </span>
              </div>

              {/* Render Slide Content by Index */}
              {renderSlideContent(currentSlide, () => setIsAiLabOpen(true))}
            </div>

            {/* Bottom Deck Navigation Controls */}
            <div className="border-t border-black/[0.08] pt-4 mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => Math.max(1, prev - 1))}
                disabled={currentSlide === 1}
                className="px-4 py-2 rounded-lg border border-black/10 hover:border-black/30 font-mono text-xs uppercase tracking-wider font-bold text-black/80 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-2 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-none px-2">
                {Array.from({ length: totalSlides }, (_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx + 1)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx + 1
                        ? "w-8 bg-[#FF0000]"
                        : "w-2 bg-black/20 hover:bg-black/40"
                    }`}
                    title={`Go to slide ${idx + 1}`}
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
            Tip: Use keyboard [← / →] arrow keys to navigate slides
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          VIEW 2: Full Continuous Scroll Overview (Executive Document)
      ════════════════════════════════════════════════════════════════════ */}
      {viewMode === "scroll" && (
        <div className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-8 space-y-10 my-6">
          {/* Executive Overview Banner */}
          <div className="bg-[#0A0A0A] text-white p-8 sm:p-12 rounded-2xl relative overflow-hidden">
            <div className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold mb-2">
              EXECUTIVE PROPOSAL • CLEAR SKIN CLINIC
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              We Don&apos;t Build Marketing Systems.
              <br />
              <span className="text-[#FF0000]">We Build Revenue Systems.</span>
            </h1>
            <p className="text-white/70 mt-3 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              A customized, premium conversion infrastructure engineered for Dr. Nikita Baid and Clear Skin Clinic to transform social media attention into predictable patient bookings.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 font-mono text-xs">
              <div>
                <div className="text-white/40 uppercase">Setup Investment</div>
                <div className="text-[#FF0000] font-bold text-lg mt-0.5">₹20,000</div>
              </div>
              <div>
                <div className="text-white/40 uppercase">Monthly Retainer</div>
                <div className="text-white font-bold text-lg mt-0.5">₹10,000 / mo</div>
              </div>
              <div>
                <div className="text-white/40 uppercase">Deployment Timeline</div>
                <div className="text-white font-bold text-lg mt-0.5">14 Days</div>
              </div>
              <div>
                <div className="text-white/40 uppercase">Technical Support</div>
                <div className="text-white font-bold text-lg mt-0.5">3 Years Included</div>
              </div>
            </div>
          </div>

          {/* Sequential 17 Slides Rendered */}
          <div className="space-y-8">
            {Array.from({ length: totalSlides }, (_, idx) => (
              <section
                key={idx}
                id={`section-${idx + 1}`}
                className="bg-[#FAFAFA] border border-black/[0.08] rounded-2xl p-6 sm:p-10 shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 mb-6">
                  <span className="font-mono text-xs font-bold text-[#FF0000] tracking-wider">
                    SECTION { (idx + 1).toString().padStart(2, "0") } / {totalSlides.toString().padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs uppercase text-black/50 font-semibold">
                    {getSlideCategory(idx + 1)}
                  </span>
                </div>
                {renderSlideContent(idx + 1, () => setIsAiLabOpen(true))}
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
              Ready to deploy Clear Skin Clinic&apos;s Revenue System?
            </div>
            <div className="text-xs text-black/60 font-mono">
              Setup: ₹20,000 (One-Time) • Growth Retainer: ₹10,000/mo • Delivery: 14 Days • 3-Year Support Included
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/918851872245?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-[#FF0000] hover:bg-[#CC0000] text-white px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Approve & Start on WhatsApp</span>
            </a>
            <a
              href="tel:+918851872245"
              className="p-3 rounded-xl border border-black/10 hover:border-black/30 font-mono text-xs text-black/80 hover:text-black transition-colors hidden sm:flex items-center gap-1.5"
              title="Call MightBeMedia"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════════════════════════════
          Interactive AI Lab Drawer (Patient Bot, Reel Script, Advisor)
      ════════════════════════════════════════════════════════════════════ */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[500px] bg-[#FFFFFF] border-l border-black/10 shadow-2xl z-50 transform transition-transform duration-500 flex flex-col ${
          isAiLabOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-none transition-opacity duration-500 ${
            isAiLabOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsAiLabOpen(false)}
          style={{ zIndex: -1 }}
        />

        {/* Drawer Header */}
        <div className="p-4 border-b border-black/10 flex items-center justify-between bg-[#FAFAFA] flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF0000] animate-pulse" />
            <div>
              <h3 className="font-display font-bold text-sm tracking-tight text-[#0A0A0A] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF0000]" /> MightBeMedia AI Engine
              </h3>
              <p className="text-[9px] font-mono uppercase tracking-wider text-black/50">
                Live Interactive Skincare & Proposal Intelligence
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsAiLabOpen(false)}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-black flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="px-3 py-2 border-b border-black/10 bg-white flex gap-1.5 flex-shrink-0 font-mono text-xs">
          {[
            { id: "chatbot", label: "Patient Bot" },
            { id: "script", label: "Reel Script" },
            { id: "proposal", label: "Advisor" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setAiTab(tab.id as any)}
              className={`flex-1 py-1.5 px-2 rounded-lg font-bold uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                aiTab === tab.id
                  ? "bg-[#0A0A0A] text-white shadow-xs"
                  : "text-black/60 hover:text-black bg-black/5"
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAFA] min-h-0">
          {aiTab === "chatbot" && (
            <div className="flex flex-col h-full space-y-3">
              <div className="bg-white border border-black/10 p-3 rounded-xl shadow-2xs">
                <h4 className="font-display font-bold text-xs text-[#FF0000] mb-0.5">
                  Live Patient Reception Bot Demo
                </h4>
                <p className="text-[11px] text-black/70 leading-relaxed">
                  Ask any skincare or treatment question to our AI assistant configured for Clear Skin Clinic.
                </p>
              </div>

              <div className="bg-white border border-black/10 rounded-xl flex-1 flex flex-col overflow-hidden min-h-[180px] shadow-2xs">
                <div className="flex-1 p-3 overflow-y-auto space-y-2.5">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 ${
                        msg.role === "user" ? "justify-end" : ""
                      }`}
                    >
                      <div
                        className={`px-3 py-2 rounded-xl max-w-[85%] text-xs leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#0A0A0A] text-white rounded-br-xs font-medium"
                            : "bg-black/5 text-[#0A0A0A] border border-black/[0.06] rounded-bl-xs font-medium"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isChatThinking && (
                    <div className="text-xs text-black/50 font-mono italic animate-pulse">
                      ClearSkin AI is analyzing...
                    </div>
                  )}
                </div>

                {/* Quick Prompts */}
                <div className="p-2 border-t border-black/[0.08] bg-[#FAFAFA] flex gap-1.5 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setChatInput("What treatment is best for acne scars?");
                    }}
                    className="text-[10px] font-mono bg-white hover:bg-black/5 border border-black/10 px-2.5 py-1 rounded-full text-black/80 whitespace-nowrap cursor-pointer"
                  >
                    Acne Scars
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setChatInput("Is laser safe for hyperpigmentation?");
                    }}
                    className="text-[10px] font-mono bg-white hover:bg-black/5 border border-black/10 px-2.5 py-1 rounded-full text-black/80 whitespace-nowrap cursor-pointer"
                  >
                    Hyperpigmentation
                  </button>
                </div>
              </div>

              <div className="flex gap-2 flex-shrink-0">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendChat()}
                  placeholder="Ask a skincare question..."
                  className="flex-1 bg-white border border-black/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#FF0000] text-black"
                />
                <button
                  type="button"
                  onClick={handleSendChat}
                  className="bg-[#FF0000] hover:bg-[#CC0000] text-white px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {aiTab === "script" && (
            <div className="flex flex-col h-full space-y-3">
              <div className="bg-white border border-black/10 p-3 rounded-xl shadow-2xs">
                <h4 className="font-display font-bold text-xs text-[#FF0000] mb-0.5">
                  High-Retention Reel Script Builder
                </h4>
                <p className="text-[11px] text-black/70 leading-relaxed">
                  Generate high-conversion 30-second reel scripts driving patients directly to Clear Skin Clinic.
                </p>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  value={scriptTopic}
                  onChange={(e) => setScriptTopic(e.target.value)}
                  placeholder="e.g. Chemical Peel vs Hydrafacial"
                  className="w-full bg-white border border-black/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#FF0000] text-black"
                />
                <button
                  type="button"
                  onClick={handleGenerateScript}
                  disabled={isScriptGenerating}
                  className="w-full bg-[#0A0A0A] hover:bg-[#222222] text-white py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Wand2 className="w-3.5 h-3.5 text-[#FF0000]" />
                  {isScriptGenerating ? "Generating..." : "Generate Reel Outline"}
                </button>
              </div>

              {generatedScript && (
                <div className="bg-white border border-black/10 rounded-xl p-3.5 text-xs text-black/80 font-mono whitespace-pre-wrap leading-relaxed shadow-2xs">
                  {generatedScript}
                </div>
              )}
            </div>
          )}

          {aiTab === "proposal" && (
            <div className="flex flex-col h-full space-y-3">
              <div className="bg-white border border-black/10 p-3 rounded-xl shadow-2xs">
                <h4 className="font-display font-bold text-xs text-[#FF0000] mb-0.5">
                  Proposal Advisor & Commercial Assistant
                </h4>
                <p className="text-[11px] text-black/70 leading-relaxed">
                  Ask any question regarding setup pricing, 3-year support SLA, deliverables, or monthly scaling.
                </p>
              </div>

              <div className="bg-white border border-black/10 rounded-xl flex-1 flex flex-col overflow-hidden min-h-[180px] shadow-2xs">
                <div className="flex-1 p-3 overflow-y-auto space-y-2.5">
                  {proposalMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 ${
                        msg.role === "user" ? "justify-end" : ""
                      }`}
                    >
                      <div
                        className={`px-3 py-2 rounded-xl max-w-[85%] text-xs leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#0A0A0A] text-white rounded-br-xs font-medium"
                            : "bg-black/5 text-[#0A0A0A] border border-black/[0.06] rounded-bl-xs font-medium"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isProposalThinking && (
                    <div className="text-xs text-black/50 font-mono italic animate-pulse">
                      Advisor is answering...
                    </div>
                  )}
                </div>

                <div className="p-2 border-t border-black/[0.08] bg-[#FAFAFA] flex gap-1.5 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setProposalInput("What does the ₹20,000 package include?");
                    }}
                    className="text-[10px] font-mono bg-white hover:bg-black/5 border border-black/10 px-2.5 py-1 rounded-full text-black/80 whitespace-nowrap cursor-pointer"
                  >
                    ₹20k Setup Details
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProposalInput("Tell me about the 3-year support SLA.");
                    }}
                    className="text-[10px] font-mono bg-white hover:bg-black/5 border border-black/10 px-2.5 py-1 rounded-full text-black/80 whitespace-nowrap cursor-pointer"
                  >
                    3-Year Support
                  </button>
                </div>
              </div>

              <div className="flex gap-2 flex-shrink-0">
                <input
                  type="text"
                  value={proposalInput}
                  onChange={(e) => setProposalInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendProposal()}
                  placeholder="Ask a proposal question..."
                  className="flex-1 bg-white border border-black/15 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#FF0000] text-black"
                />
                <button
                  type="button"
                  onClick={handleSendProposal}
                  className="bg-[#FF0000] hover:bg-[#CC0000] text-white px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SLIDE CATEGORY HELPER
════════════════════════════════════════════════════════════════════ */
function getSlideCategory(slide: number): string {
  switch (slide) {
    case 1:
      return "Executive Introduction";
    case 2:
      return "Who We Are";
    case 3:
      return "The System Bottleneck";
    case 4:
      return "Friction Flow Analysis";
    case 5:
      return "Revenue Leak Audit";
    case 6:
      return "Attention Analysis";
    case 7:
      return "Infrastructure Blueprint";
    case 8:
      return "Personalised Skincare Flagship";
    case 9:
      return "Guaranteed Continuity";
    case 10:
      return "Google Review QR Engine";
    case 11:
      return "AI Patient Receptionist";
    case 12:
      return "Social Media & Scripting";
    case 13:
      return "Performance Marketing";
    case 14:
      return "Local SEO Dominance";
    case 15:
      return "Investment & Pricing";
    case 16:
      return "Deliverables Matrix";
    case 17:
      return "Partnership Engagement";
    default:
      return "Proposal";
  }
}

/* ═══════════════════════════════════════════════════════════════════
   SLIDE CONTENT RENDERER (V2 Editorial Aesthetic + Original Data)
════════════════════════════════════════════════════════════════════ */
function renderSlideContent(slide: number, openAiLab: () => void) {
  switch (slide) {
    /* ─── SLIDE 01: WELCOME & EXECUTIVE TITLE ─── */
    case 1:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF0000] animate-pulse" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#FF0000]">
                We Don&apos;t Build Marketing Systems
              </span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0A] leading-[1.05]">
              We Build
              <br />
              <span className="text-[#FF0000]">Revenue Systems.</span>
            </h1>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal max-w-xl">
              A customized premium conversion infrastructure engineered for Clear Skin Clinic and Dr. Nikita Baid to transform clinic social media attention into predictable patient bookings.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="bg-black/5 border border-black/10 px-4 py-2 rounded-xl flex items-center gap-2.5 font-mono text-xs text-black/80 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#FF0000]" />
                <span>Confidential Growth Proposal</span>
              </div>
              <div className="bg-[#FF0000]/10 border border-[#FF0000]/20 px-4 py-2 rounded-xl font-mono text-xs text-[#FF0000] font-bold">
                SYSTEM: READY FOR DEPLOYMENT
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white border border-black/10 p-6 rounded-2xl shadow-md w-full max-w-[360px] relative overflow-hidden">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-black/5 mb-4 border border-black/[0.06]">
                <Image
                  src="/projects/clearskin.png"
                  alt="Clear Skin Clinic Digital Flagship"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-black/[0.08]">
                <div>
                  <span className="text-[9px] text-black/40 block font-mono uppercase tracking-wider">
                    TARGET CLIENT
                  </span>
                  <span className="text-xs font-bold text-[#0A0A0A]">
                    Clear Skin Clinic (Dr. Nikita Baid)
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#FF0000] font-bold">
                  2026 ARCHITECTURE
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 02: WHO WE ARE ─── */
    case 2:
      return (
        <div className="space-y-6 py-2">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block mb-3">
              WHO WE ARE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              Transforming Attention into Booked Patients
            </h2>
            <p className="text-sm sm:text-base text-black/70 mt-2 leading-relaxed">
              At MightBeMedia, we help clinics, doctors, healthcare brands, and local businesses transform their social media attention into predictable patient bookings. Most agencies focus entirely on cosmetic metrics like views. We focus single-mindedly on conversions and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs border-t-2 border-t-[#0A0A0A] hover:border-t-[#FF0000] transition-colors">
              <span className="font-mono text-xs font-bold text-[#FF0000]">01</span>
              <h4 className="font-display font-bold text-sm text-[#0A0A0A] mt-1 mb-1.5">
                Generate Consultations
              </h4>
              <p className="text-xs text-black/70 leading-relaxed font-normal">
                Turning casual social media viewers into verified booked appointments.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs border-t-2 border-t-[#0A0A0A] hover:border-t-[#FF0000] transition-colors">
              <span className="font-mono text-xs font-bold text-[#FF0000]">02</span>
              <h4 className="font-display font-bold text-sm text-[#0A0A0A] mt-1 mb-1.5">
                Generate Clinical Trust
              </h4>
              <p className="text-xs text-black/70 leading-relaxed font-normal">
                Structuring high-authority doctor credentials, verified reviews, and system proof loops.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs border-t-2 border-t-[#0A0A0A] hover:border-t-[#FF0000] transition-colors">
              <span className="font-mono text-xs font-bold text-[#FF0000]">03</span>
              <h4 className="font-display font-bold text-sm text-[#0A0A0A] mt-1 mb-1.5">
                Generate Measurable Revenue
              </h4>
              <p className="text-xs text-black/70 leading-relaxed font-normal">
                Direct, quantifiable impact on the clinic&apos;s monthly patient intake and balance sheet.
              </p>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 03: THE REAL PROBLEM ─── */
    case 3:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block">
              THE SYSTEM BOTTLENECK
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              The Real Problem: The Virality Trap
            </h2>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed">
              Clinics routinely exhaust resources creating and editing video content, thinking that virality solves patient acquisition. Thousands of views, but zero consultations.
            </p>
            <div className="bg-red-50 border-l-4 border-[#FF0000] p-4 rounded-r-xl">
              <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                The actual barrier isn&apos;t content reach. The real issue is the complete lack of an engineered Conversion System behind your social media attention.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#0A0A0A] text-white p-6 sm:p-8 rounded-2xl w-full max-w-[380px] shadow-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF0000]/20 flex items-center justify-center text-[#FF0000] border border-[#FF0000]/30">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-[#FF0000] uppercase font-bold tracking-widest block">
                    THE VIRALITY TRAP
                  </span>
                  <h3 className="font-display text-sm font-bold">Misleading Metric Correlation</h3>
                </div>
              </div>
              <blockquote className="font-display text-lg italic text-white/90 leading-snug border-l-2 border-[#FF0000] pl-3 my-4">
                &ldquo;More Views automatically equals More Patients&rdquo;
              </blockquote>
              <div className="flex justify-between items-center text-[10px] font-mono text-white/50 pt-4 border-t border-white/10">
                <span>REVENUE CONVERSION</span>
                <span className="text-[#FF0000] font-bold">0% ACCELERATION</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 04: FRICTION FLOW ─── */
    case 4:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block">
              FRICTION TUNNEL ANALYSIS
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              The Current Friction Flow
            </h2>
            <p className="text-sm text-black/70 leading-relaxed">
              Your audience hits massive friction points on their way from discovery to clinic check-in. Without an automated bridge, prospective patients disappear.
            </p>
            <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-[#FF0000] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-xs font-bold text-red-900">Massive Attention Decay</h4>
                <p className="text-[11px] text-red-700 mt-0.5 leading-relaxed">
                  With unoptimized pathways, over 98% of interested viewers drop off before ever booking an appointment.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-2.5">
            {[
              { phase: "Phase 01", count: "10k Views", label: "Discovery", width: "w-full", bg: "bg-[#0A0A0A] text-white" },
              { phase: "Phase 02", count: "200 Likes", label: "Interest", width: "w-[85%]", bg: "bg-[#0A0A0A]/85 text-white" },
              { phase: "Phase 03", count: "50 Visits", label: "Intention", width: "w-[70%]", bg: "bg-[#0A0A0A]/70 text-white" },
              { phase: "Phase 04", count: "15 DMs", label: "Inquiry", width: "w-[55%]", bg: "bg-[#0A0A0A]/55 text-white" },
              { phase: "Final Goal", count: "1-2 Patients", label: "Check-In", width: "w-[40%]", bg: "bg-[#FF0000] text-white font-bold" },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-20 text-right font-mono text-[10px] text-black/40 uppercase tracking-widest shrink-0">
                  {step.phase}
                </span>
                <div className={`h-10 px-4 rounded-full flex justify-between items-center text-xs font-mono shadow-xs ${step.width} ${step.bg}`}>
                  <span>{step.count}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider">{step.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    /* ─── SLIDE 05: HIDDEN REVENUE LEAK ─── */
    case 5:
      return (
        <div className="space-y-6 py-2">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block mb-3">
              REVENUE AUDIT REPORT
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              The Hidden Revenue Leak
            </h2>
            <p className="text-sm sm:text-base text-black/70 mt-1 leading-relaxed">
              Why patient interest fails to translate into clinic appointments without an engineered bridge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-black/[0.08] shadow-xs border-t-4 border-t-emerald-500">
              <h3 className="font-display font-bold text-base text-[#0A0A0A] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> What Patients Actually Do:
              </h3>
              <p className="text-xs font-mono uppercase text-emerald-700 font-bold mb-4">
                They are ready for clinical skincare help, but...
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-black/70">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Watch your highly-engaging reel videos
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Visit Dr. Nikita Baid&apos;s clinic social profile
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Become actively interested in dermatological procedures
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/[0.08] shadow-xs border-t-4 border-t-[#FF0000]">
              <h3 className="font-display font-bold text-base text-[#0A0A0A] mb-2 flex items-center gap-2">
                <X className="w-5 h-5 text-[#FF0000]" /> Where the Process Breaks Down:
              </h3>
              <p className="text-xs font-mono uppercase text-[#FF0000] font-bold mb-4">
                Critical structural friction points
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-black/70">
                <li className="flex items-center gap-2.5">
                  <X className="w-4 h-4 text-[#FF0000] shrink-0" /> No dedicated, high-speed clinic landing page
                </li>
                <li className="flex items-center gap-2.5">
                  <X className="w-4 h-4 text-[#FF0000] shrink-0" /> No instant automated guidance or response on profile
                </li>
                <li className="flex items-center gap-2.5">
                  <X className="w-4 h-4 text-[#FF0000] shrink-0" /> No streamlined 24/7 WhatsApp consultation intake
                </li>
                <li className="flex items-center gap-2.5">
                  <X className="w-4 h-4 text-[#FF0000] shrink-0" /> No automated trust-building reviews or follow-ups
                </li>
              </ul>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 06: ATTENTION IS NOT THE PROBLEM ─── */
    case 6:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block">
              ATTENTION ANALYSIS
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              Attention Is Not The Problem
            </h2>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
              Every month, thousands of local prospective patients with active skin conditions are watching your content, finding your clinic profile, and then drifting away because the bridge to booking is missing.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-black/[0.08] shadow-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
              <div className="bg-[#FAFAFA] p-4 rounded-xl border border-black/[0.06]">
                <span className="text-[10px] text-black/40">STEP 01</span>
                <h4 className="font-display font-bold text-xs text-[#0A0A0A] mt-1">Raw Audience</h4>
                <div className="text-[10px] text-black/60 mt-1">Reels & Views</div>
              </div>
              <div className="bg-[#FAFAFA] p-4 rounded-xl border border-black/[0.06]">
                <span className="text-[10px] text-black/40">STEP 02</span>
                <h4 className="font-display font-bold text-xs text-[#0A0A0A] mt-1">Active Interest</h4>
                <div className="text-[10px] text-black/60 mt-1">Profile Visits</div>
              </div>
              <div className="bg-[#FF0000] text-white p-4 rounded-xl shadow-xs">
                <span className="text-[9px] text-white/80 font-bold block uppercase">CRITICAL GAP</span>
                <h4 className="font-display font-bold text-xs text-white mt-1">MISSING BRIDGE</h4>
                <div className="text-[10px] text-white/80 mt-1">No System</div>
              </div>
              <div className="bg-[#0A0A0A] text-white p-4 rounded-xl">
                <span className="text-[10px] text-white/50">STEP 03</span>
                <h4 className="font-display font-bold text-xs text-[#FF0000] mt-1">Booked Patient</h4>
                <div className="text-[10px] text-white/70 mt-1">Clinic Check-In</div>
              </div>
            </div>
            <div className="text-center font-mono text-[11px] text-black/50 mt-4">
              → Your End-Goal is directly solved by deploying the MightBeMedia Revenue Bridge
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 07: REVENUE SYSTEM BLUEPRINT ─── */
    case 7:
      return (
        <div className="space-y-6 py-2">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block mb-3">
              INFRASTRUCTURE BLUEPRINT
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              The MightBeMedia Revenue System™
            </h2>
            <p className="text-sm sm:text-base text-black/70 mt-2 leading-relaxed">
              Instead of simply posting content and hoping for patient visits, we build a continuous 24/7 acquisition machine that systematically converts attention into booked clinic appointments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <div
              onClick={openAiLab}
              className="bg-white p-6 rounded-2xl border border-black/[0.08] shadow-xs hover:border-[#FF0000] transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono text-xs text-black/40">MODULE 01</span>
                <span className="font-mono text-[10px] font-bold bg-[#FF0000] text-white px-2 py-0.5 rounded-xs animate-pulse">
                  TEST LIVE DEMO
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-[#0A0A0A] mb-1 group-hover:text-[#FF0000] transition-colors">
                Convert Viewers
              </h4>
              <p className="text-xs text-black/70 leading-relaxed mb-4">
                Instant interactive AI intake turning passive viewers into qualified inquiries.
              </p>
              <div className="bg-black/5 p-2 rounded-lg text-center font-mono text-xs text-black/80 font-semibold">
                → Into Inquiries
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/[0.08] shadow-xs hover:border-black/30 transition-all">
              <span className="font-mono text-xs text-black/40 block mb-3">MODULE 02</span>
              <h4 className="font-display font-bold text-base text-[#0A0A0A] mb-1">
                Nurture Inquiries
              </h4>
              <p className="text-xs text-black/70 leading-relaxed mb-4">
                Automated WhatsApp follow-up & doctor trust proof converting inquiries into consultations.
              </p>
              <div className="bg-black/5 p-2 rounded-lg text-center font-mono text-xs text-black/80 font-semibold">
                → Into Booked Consultations
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/[0.08] shadow-xs hover:border-black/30 transition-all">
              <span className="font-mono text-xs text-black/40 block mb-3">MODULE 03</span>
              <h4 className="font-display font-bold text-base text-[#0A0A0A] mb-1">
                Deliver Services
              </h4>
              <p className="text-xs text-black/70 leading-relaxed mb-4">
                In-clinic QR Google review stands multiplying social proof for compounding acquisition.
              </p>
              <div className="bg-black/5 p-2 rounded-lg text-center font-mono text-xs text-black/80 font-semibold">
                → Complete Loop Integration
              </div>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 08: PERSONALISED PREMIUM WEBSITE ─── */
    case 8:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block">
              PRODUCT SUITE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              Personalised Premium Website
            </h2>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
              A bespoke, high-performance skincare website for Clear Skin Clinic (Dr. Nikita Baid) structured from the ground up to rank on Google and convert visitors into booked patients.
            </p>
            <div className="grid grid-cols-2 gap-2.5 pt-2 font-mono text-xs">
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-black/[0.06]">
                <Check className="w-4 h-4 text-[#FF0000]" /> Premium Medical Design
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-black/[0.06]">
                <Check className="w-4 h-4 text-[#FF0000]" /> 1-Tap WhatsApp System
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-black/[0.06]">
                <Check className="w-4 h-4 text-[#FF0000]" /> Clinical Treatment Pages
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-black/[0.06]">
                <Check className="w-4 h-4 text-[#FF0000]" /> Local SEO Architecture
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-black/[0.06]">
                <Check className="w-4 h-4 text-[#FF0000]" /> Before/After Showcase
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-black/[0.06]">
                <Check className="w-4 h-4 text-[#FF0000]" /> Sub-Second Speed
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#0A0A0A] p-4 rounded-2xl shadow-xl border border-white/10">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono text-white/50">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#FF0000]" /> https://theclearskinclinic.com
                </span>
                <span className="text-[#FF0000] font-bold">DR. NIKITA BAID</span>
              </div>
              <div className="relative aspect-16/10 rounded-xl overflow-hidden mt-3 bg-white">
                <Image
                  src="/projects/clearskin.png"
                  alt="Clear Skin Clinic Interface"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 09: 3 YEARS SUPPORT ─── */
    case 9:
      return (
        <div className="space-y-6 py-2">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block mb-3">
              GUARANTEED CONTINUITY
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              3 Years Technical Support Included
            </h2>
            <p className="text-sm sm:text-base text-black/70 mt-2 leading-relaxed">
              Zero technical worry for Clear Skin Clinic. Websites require continuous updates, security patches, performance tuning, and server backups to avoid downtime. MightBeMedia manages the entire technical infrastructure behind the scenes so your team can focus 100% on clinical care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs">
              <ShieldCheck className="w-6 h-6 text-[#FF0000] mb-2" />
              <h4 className="font-display font-bold text-sm text-[#0A0A0A]">Uptime & Hosting Maintenance</h4>
              <p className="text-xs text-black/70 mt-1 leading-relaxed">
                99.99% cloud uptime guarantee with automated daily encrypted backups.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs">
              <Clock className="w-6 h-6 text-[#FF0000] mb-2" />
              <h4 className="font-display font-bold text-sm text-[#0A0A0A]">Priority SLA Support</h4>
              <p className="text-xs text-black/70 mt-1 leading-relaxed">
                Direct WhatsApp access to engineering leads for rapid modifications.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs">
              <TrendingUp className="w-6 h-6 text-[#FF0000] mb-2" />
              <h4 className="font-display font-bold text-sm text-[#0A0A0A]">Continuous Performance Optimization</h4>
              <p className="text-xs text-black/70 mt-1 leading-relaxed">
                Maintaining sub-second mobile speeds and Core Web Vitals rankings.
              </p>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 10: GOOGLE REVIEW QR ENGINE ─── */
    case 10:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block">
              REPUTATION ENGINE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              Google Review Engine & QR Lobby Stands
            </h2>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
              Turn satisfied in-clinic patients into 5-star Google reviews on autopilot. We design and deliver custom acrylic tabletop QR stands for the Clear Skin Clinic reception desk that open your direct 5-star review page in 1 single tap.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-black/[0.06]">
                <Star className="w-4 h-4 text-[#FF0000] fill-[#FF0000]" />
                <span className="text-xs sm:text-sm text-black/80 font-medium">Multiplies Google Map 5-star ratings exponentially</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-black/[0.06]">
                <QrCode className="w-4 h-4 text-[#FF0000]" />
                <span className="text-xs sm:text-sm text-black/80 font-medium">Zero-friction 1-tap QR scanning for patients in lobby</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#0A0A0A] text-white p-8 rounded-2xl text-center w-full max-w-[340px] border border-white/10 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-white/10 mx-auto flex items-center justify-center text-[#FF0000] mb-4">
                <QrCode className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-base">Acrylic Lobby Stand</h4>
              <p className="text-xs text-white/60 mt-1 font-mono">Custom Clear Skin Clinic Branding</p>
              <div className="mt-4 pt-4 border-t border-white/10 font-mono text-xs text-[#FF0000] font-bold">
                100% Turnkey Delivery
              </div>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 11: AI PATIENT CHATBOT ─── */
    case 11:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block">
              INTELLIGENT RECEPTION
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              AI Patient Receptionist (24/7)
            </h2>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
              An intelligent, clinically trained AI assistant built specifically for Clear Skin Clinic. Engages website visitors 24 hours a day, answers treatment questions, pre-qualifies concerns, and books appointments straight to WhatsApp.
            </p>
            <button
              type="button"
              onClick={openAiLab}
              className="bg-[#0A0A0A] hover:bg-[#222222] text-white px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#FF0000]" />
              <span>Launch Live Interactive Demo</span>
            </button>
          </div>

          <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-black/[0.08] shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 pb-3 border-b border-black/[0.08]">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-mono text-xs font-bold text-[#0A0A0A]">ClearSkin AI Receptionist</span>
            </div>
            <div className="bg-black/5 p-3 rounded-xl text-xs text-black/80 font-medium">
              &ldquo;Hello! I&apos;m ClearSkin AI. Dr. Nikita Baid specializes in personalized clinical treatments for acne, pigmentation, and anti-aging. How can I assist you today?&rdquo;
            </div>
            <div className="bg-[#0A0A0A] text-white p-3 rounded-xl text-xs text-right font-medium">
              &ldquo;I have dark acne scars on my cheeks. What treatment is recommended?&rdquo;
            </div>
            <div className="bg-black/5 p-3 rounded-xl text-xs text-black/80 font-medium">
              &ldquo;For persistent acne scars, Dr. Nikita offers Fractional Microneedling and chemical rejuvenation. Would you like to schedule an assessment via WhatsApp?&rdquo;
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 12: SOCIAL MEDIA & SCRIPTING ─── */
    case 12:
      return (
        <div className="space-y-6 py-2">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block mb-3">
              ORGANIC ACQUISITION
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              Social Media Content & Scripting Engine
            </h2>
            <p className="text-sm sm:text-base text-black/70 mt-2 leading-relaxed">
              Done-For-You reel scripts, high-retention hook architecture, and visual content systems engineered to position Dr. Nikita Baid as the top clinical skincare authority in Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs">
              <span className="font-mono text-xs font-bold text-[#FF0000]">01</span>
              <h4 className="font-display font-bold text-sm text-[#0A0A0A] mt-1">High-Retention Hooks</h4>
              <p className="text-xs text-black/70 mt-1 leading-relaxed">
                First 3-second psychological triggers stopping the scroll on Instagram.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs">
              <span className="font-mono text-xs font-bold text-[#FF0000]">02</span>
              <h4 className="font-display font-bold text-sm text-[#0A0A0A] mt-1">Clinical Authority Framing</h4>
              <p className="text-xs text-black/70 mt-1 leading-relaxed">
                Educational breakdowns establishing deep medical credibility.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs">
              <span className="font-mono text-xs font-bold text-[#FF0000]">03</span>
              <h4 className="font-display font-bold text-sm text-[#0A0A0A] mt-1">Direct Bio Funnels</h4>
              <p className="text-xs text-black/70 mt-1 leading-relaxed">
                Strategic call-to-actions routing viewers directly to WhatsApp booking.
              </p>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 13: PERFORMANCE MARKETING / META ADS ─── */
    case 13:
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block">
              PAID ACQUISITION
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              Meta Ads & Patient Acquisition Funnel
            </h2>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
              High-ROI targeted advertising across Instagram and Facebook engineered to reach affluent local patients in target Delhi NCR localities searching for advanced aesthetic skincare.
            </p>
            <div className="space-y-2 pt-2 font-mono text-xs">
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-black/[0.06]">
                <Target className="w-4 h-4 text-[#FF0000]" />
                <span>Hyper-localized demographic radius targeting</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-black/[0.06]">
                <ShieldCheck className="w-4 h-4 text-[#FF0000]" />
                <span>Meta Pixel & Conversions API (CAPI) server-side tracking</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#0A0A0A] text-white p-6 rounded-2xl w-full max-w-[340px] border border-white/10 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-white/50 uppercase">TARGET AUDIENCE</span>
                <span className="text-[#FF0000] font-bold">Delhi NCR High-Intent</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-white/50 uppercase">TRACKING</span>
                <span className="text-white font-bold">Server-Side CAPI</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50 uppercase">OBJECTIVE</span>
                <span className="text-emerald-400 font-bold">Consultation Bookings</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 14: LOCAL SEO DOMINANCE ─── */
    case 14:
      return (
        <div className="space-y-6 py-2">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block mb-3">
              ORGANIC DOMINANCE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              Local SEO & Google Map Pack Dominance
            </h2>
            <p className="text-sm sm:text-base text-black/70 mt-2 leading-relaxed">
              When patients search &ldquo;dermatologist near me&rdquo; or &ldquo;best skin clinic in Delhi&rdquo;, your practice must appear in the top 3 Google map pack results. We implement structured medical schema and local citations to capture high-intent organic search volume.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs">
              <Search className="w-5 h-5 text-[#FF0000] mb-2" />
              <h4 className="font-display font-bold text-sm text-[#0A0A0A]">Google Business Profile Sync</h4>
              <p className="text-xs text-black/70 mt-1 leading-relaxed">
                Category optimization, geo-tagged photography, and patient Q&A management.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-[#FF0000] mb-2" />
              <h4 className="font-display font-bold text-sm text-[#0A0A0A]">Medical JSON-LD Schema</h4>
              <p className="text-xs text-black/70 mt-1 leading-relaxed">
                Physician credentials, clinic services, and verified patient reviews schema.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-black/[0.08] shadow-2xs">
              <TrendingUp className="w-5 h-5 text-[#FF0000] mb-2" />
              <h4 className="font-display font-bold text-sm text-[#0A0A0A]">Zero Layout Shift Performance</h4>
              <p className="text-xs text-black/70 mt-1 leading-relaxed">
                95+ Core Web Vitals score maximizing search algorithm favoritism.
              </p>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 15: INVESTMENT & PRICING ─── */
    case 15:
      return (
        <div className="space-y-6 py-2">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block mb-3">
              COMMERCIAL INVESTMENT
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              Transparent Investment Structure
            </h2>
            <p className="text-sm sm:text-base text-black/70 mt-1 leading-relaxed">
              Predictable, high-ROI commercial agreement with zero hidden fees and guaranteed 14-day delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Setup Card */}
            <div className="bg-[#0A0A0A] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                    ONE-TIME COMPLETE SETUP
                  </span>
                  <span className="font-mono text-xs text-[#FF0000] font-bold bg-[#FF0000]/10 px-2 py-0.5 rounded">
                    14 DAYS DELIVERY
                  </span>
                </div>
                <div className="font-display text-4xl sm:text-5xl font-black text-white mb-2">
                  ₹20,000
                </div>
                <p className="text-xs text-white/70 font-mono mb-6">
                  Complete digital flagship + AI chatbot + Meta ads setup + QR review stands + 3 Years Technical Support.
                </p>
                <ul className="space-y-2.5 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF0000]" /> Full Next.js Skincare Flagship Website
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF0000]" /> 24/7 AI Patient Chatbot Configured
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF0000]" /> Meta Ads Campaign & Pixel Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF0000]" /> Google Review Engine & Physical QR Lobby Stands
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF0000]" /> 3 Years Full Technical Support & Hosting Maintenance
                  </li>
                </ul>
              </div>
            </div>

            {/* Retainer Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-black/10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-black/50 font-bold">
                    MONTHLY GROWTH RETAINER
                  </span>
                  <span className="font-mono text-xs text-black/60 bg-black/5 px-2 py-0.5 rounded font-bold">
                    EXPANSION
                  </span>
                </div>
                <div className="font-display text-4xl sm:text-5xl font-black text-[#0A0A0A] mb-2">
                  ₹10,000 <span className="text-sm font-normal text-black/50 font-mono">/ month</span>
                </div>
                <p className="text-xs text-black/70 font-mono mb-6">
                  Ongoing social media maintenance, reels editing, script creation, Meta ads scaling, and funnel nurturing.
                </p>
                <ul className="space-y-2.5 text-xs text-black/80">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" /> Done-For-You Reel Planning & Scripts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" /> Meta Ads Audience Tuning & Creative Refinement
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" /> AI Chatbot Continuous Prompt Training
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" /> Monthly Consultation Analytics & Pipeline Review
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );

    /* ─── SLIDE 16: COMPLETE DELIVERABLES MATRIX ─── */
    case 16:
      return (
        <div className="space-y-6 py-2">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-xs inline-block mb-3">
              SCOPE SPECIFICATION
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#0A0A0A]">
              Complete Deliverables Matrix
            </h2>
            <p className="text-sm sm:text-base text-black/70 mt-1 leading-relaxed">
              Side-by-side scope breakdown between initial deployment and ongoing monthly growth partnership.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-black/[0.08] shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-black/[0.08] bg-black/[0.02]">
                  <th className="p-4 font-mono text-xs uppercase font-bold text-black/80">Deliverable Item</th>
                  <th className="p-4 font-mono text-xs uppercase font-bold text-[#FF0000]">Initial Setup (₹20,000)</th>
                  <th className="p-4 font-mono text-xs uppercase font-bold text-black/80">Monthly Retainer (₹10,000/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06] text-xs">
                <tr>
                  <td className="p-4 font-medium text-black">Bespoke Skincare Web Flagship</td>
                  <td className="p-4 font-mono text-[#FF0000] font-bold">Included (Full Build)</td>
                  <td className="p-4 font-mono text-black/70">Hosting & Uptime Maint.</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-black">AI Patient Chatbot Engine</td>
                  <td className="p-4 font-mono text-[#FF0000] font-bold">Trained & Integrated</td>
                  <td className="p-4 font-mono text-black/70">Continuous Prompt Tuning</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-black">Meta Pixel & CAPI Ad Setup</td>
                  <td className="p-4 font-mono text-[#FF0000] font-bold">Full Campaign Build</td>
                  <td className="p-4 font-mono text-black/70">Audience & Creative Scaling</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-black">Google Review QR Lobby Stands</td>
                  <td className="p-4 font-mono text-[#FF0000] font-bold">Designed & Delivered</td>
                  <td className="p-4 font-mono text-black/70">Reputation Monitoring</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-black">Local SEO & Map Pack Schema</td>
                  <td className="p-4 font-mono text-[#FF0000] font-bold">Complete Setup</td>
                  <td className="p-4 font-mono text-black/70">Rank Tracking & Updates</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-black">Technical Support & Peace of Mind</td>
                  <td className="p-4 font-mono text-[#FF0000] font-bold">3 Years Included</td>
                  <td className="p-4 font-mono text-black/70">Priority 24/7 SLA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    /* ─── SLIDE 17: PARTNERSHIP ENGAGEMENT & APPROVAL ─── */
    case 17:
      return (
        <div className="space-y-6 py-2 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-3 py-1 rounded-full inline-block">
            PARTNERSHIP ENGAGEMENT
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0A]">
            Thank You
          </h1>
          <p className="text-sm sm:text-base text-black/70 leading-relaxed font-light">
            We would be deeply honored to act as your digital growth and revenue partner for Clear Skin Clinic.
          </p>

          <div className="bg-[#0A0A0A] text-white p-6 rounded-2xl shadow-xl my-4">
            <p className="text-xs sm:text-sm font-semibold tracking-wide italic text-white/90">
              &ldquo;We Are Not A Service Provider.{" "}
              <span className="text-[#FF0000] underline underline-offset-4 decoration-2">
                We Are Your Revenue Growth Partner.
              </span>&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
            <div className="bg-white p-4 rounded-xl border border-black/[0.08] flex items-center justify-center gap-2 text-black/80">
              <Globe className="w-4 h-4 text-[#FF0000]" />
              <span>www.mightbemedia.in</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-black/[0.08] flex items-center justify-center gap-2 text-black/80">
              <Mail className="w-4 h-4 text-[#FF0000]" />
              <span>info@mightbemedia.in</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
