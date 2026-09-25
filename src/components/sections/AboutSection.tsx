"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ShieldCheck, Cpu, Zap, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textProgressRef = useRef<HTMLParagraphElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const reducedMotion = useReducedMotion();

  const principles = [
    {
      number: "01",
      title: "BUSINESS-FIRST THINKING",
      shortDesc: "We do not start in Figma; we start with your unit economics.",
      detail:
        "We analyze customer acquisition costs, average order value, and conversion bottlenecks. Every interface decision must drive quantifiable return on investment.",
      pillars: ["Unit Economics Audit", "CAC & LTV Analysis", "Commercial Intent Mapping"],
      action: "THINK",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "CONVERSION-FOCUSED DESIGN",
      shortDesc: "Aesthetic beauty is meaningless if visitors bounce without acting.",
      detail:
        "Every headline, CTA placement, trust anchor, and interaction is engineered around cognitive momentum, removing hesitation and guiding high-intent prospects straight into your sales pipeline.",
      pillars: ["Cognitive UX Architecture", "Frictionless Checkout & Forms", "Instant WhatsApp Funnels"],
      action: "CONVERT",
      icon: Zap,
    },
    {
      number: "03",
      title: "SCALABLE SYSTEMS",
      shortDesc: "Digital systems engineered to handle 10x traffic bursts effortlessly.",
      detail:
        "Built on modern Next.js and high-resilience serverless backends. Clean TypeScript, zero-bloat code, and sub-second global response times that compound as your company grows.",
      pillars: ["Sub-Second Core Web Vitals", "Next.js Serverless Edge", "Automated CRM & Lead Routing"],
      action: "SCALE",
      icon: Cpu,
    },
  ];

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Headline clip reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { clipPath: "inset(100% 0 0 0)", opacity: 0.2, y: 30 },
          {
            clipPath: "inset(0% 0 0 0)",
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 85%",
              end: "top 50%",
              scrub: 0.4,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Word-by-word scroll highlight
      const words = textProgressRef.current?.querySelectorAll(".scroll-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { color: "rgba(10, 10, 10, 0.2)" },
          {
            color: "rgba(10, 10, 10, 1)",
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
              trigger: textProgressRef.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Principles cards animation
      if (principlesRef.current) {
        gsap.fromTo(
          principlesRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: principlesRef.current,
              start: "top 85%",
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const manifestoText = `MightBeMedia is a revenue growth agency that builds systems designed to generate leads, increase conversions, and scale businesses. Not just developers. Not just designers. We build integrated revenue systems that turn traffic into high-paying clients.`;

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 sm:py-32 lg:py-44 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0A0A0A] border-b border-black/[0.08]"
      aria-label="About MightBeMedia & Foundation Principles"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="03" label="ABOUT MIGHTBEMEDIA" theme="light" />

        {/* Big Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-4 mb-16 sm:mb-24">
          <div className="lg:col-span-12">
            <h2
              ref={headlineRef}
              className="font-display font-black section-headline uppercase text-[#0A0A0A] tracking-tighter leading-[0.98] mb-8"
            >
              WE&apos;RE NOT A SERVICE PROVIDER.
              <br />
              <span className="text-[#FF0000]">
                WE&apos;RE YOUR GROWTH PARTNER.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 font-mono text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50 space-y-4 border-l-2 border-[#FF0000] pl-4">
            <p className="text-[#0A0A0A] font-bold">[OPERATING THESIS]</p>
            <p className="text-[#FF0000] font-bold text-sm tracking-[0.25em]">
              BUILD • CONVERT • SCALE
            </p>
            <p className="text-[#0A0A0A]/70 text-xs leading-relaxed lowercase font-sans pt-1">
              Every digital interface must perform a quantifiable business job. If it does not convert, it is obsolete.
            </p>
          </div>

          <div className="lg:col-span-8">
            <p
              ref={textProgressRef}
              className="font-sans text-xl sm:text-2xl lg:text-3xl leading-relaxed font-normal text-[#0A0A0A]/90"
            >
              {manifestoText.split(" ").map((word, idx) => (
                <span key={idx} className="scroll-word inline-block mr-[0.3em] transition-colors">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Integrated Foundation Principles System */}
        <div className="pt-12 border-t border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs text-[#FF0000] uppercase tracking-widest font-bold block mb-1">
                [FOUNDATION PRINCIPLES]
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-[#0A0A0A]">
                HOW WE THINK. HOW WE EXECUTE.
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#0A0A0A]/50">
              <span>THINK</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF0000]" />
              <span>BUILD</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF0000]" />
              <span>GROW</span>
            </div>
          </div>

          {/* 3 Interactive Architecture Nodes */}
          <div
            ref={principlesRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {principles.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = activeTab === idx;

              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`group relative p-8 sm:p-10 rounded-xl bg-[#FAFAFA] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isHovered
                      ? "border-[#FF0000] shadow-xl bg-white"
                      : "border-black/[0.08] hover:border-black/20"
                  }`}
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-black/[0.06] mb-6">
                      <span className="font-mono text-xs font-bold text-[#FF0000] tracking-widest">
                        0{idx + 1} // {item.action}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-black/[0.04] group-hover:bg-[#FF0000] group-hover:text-white flex items-center justify-center text-[#0A0A0A] transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-xl sm:text-2xl text-[#0A0A0A] group-hover:text-[#FF0000] transition-colors uppercase tracking-tight mb-3">
                      {item.title}
                    </h4>

                    <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/70 leading-relaxed mb-6 font-medium">
                      {item.shortDesc}
                    </p>

                    <p className="font-sans text-xs text-[#0A0A0A]/60 leading-relaxed mb-6">
                      {item.detail}
                    </p>
                  </div>

                  {/* Pillars Nodes */}
                  <div className="pt-4 border-t border-black/[0.06] space-y-2">
                    {item.pillars.map((p, i) => (
                      <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-[#0A0A0A]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000]" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
