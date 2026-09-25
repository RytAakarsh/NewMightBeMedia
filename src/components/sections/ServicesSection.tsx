"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CheckCircle2, Globe, Search, Smartphone, Cpu, Rocket, Share2 } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import { services } from "@/data/services";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const contentPanelRef = useRef<HTMLDivElement>(null);
  const radialRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const reducedMotion = useReducedMotion();

  const service = services[activeService];

  // Screen width detector
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop pinned scroll experience
  useEffect(() => {
    if (isMobile || reducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${services.length * 100}vh`,
        pin: pinWrapperRef.current,
        pinSpacing: true,
        scrub: 0.4,
        invalidateOnRefresh: true,
        id: "services-pin",
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            services.length - 1,
            Math.floor(progress * services.length)
          );
          setActiveService(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, reducedMotion]);

  // Animate content panel & radial on service change
  useEffect(() => {
    if (isMobile || reducedMotion || !contentPanelRef.current) return;

    const ctx = gsap.context(() => {
      const number = contentPanelRef.current!.querySelector(".service-number");
      const title = contentPanelRef.current!.querySelector(".service-title");
      const desc = contentPanelRef.current!.querySelector(".service-desc");
      const box = contentPanelRef.current!.querySelector(".service-deliverables");
      const caps = contentPanelRef.current!.querySelectorAll(".service-cap");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (number) {
        tl.fromTo(number, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 }, 0);
      }
      if (title) {
        tl.fromTo(title, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.45 }, 0.05);
      }
      if (desc) {
        tl.fromTo(desc, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 }, 0.15);
      }
      if (box) {
        tl.fromTo(box, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.2);
      }
      if (caps.length > 0) {
        tl.fromTo(caps, { x: -8, opacity: 0 }, { x: 0, opacity: 1, duration: 0.25, stagger: 0.03 }, 0.25);
      }
    }, contentPanelRef);

    return () => ctx.revert();
  }, [activeService, isMobile, reducedMotion]);

  // Helper icons for service types
  const getServiceIcon = (type: string) => {
    const iconClass = "w-6 h-6 text-[#FF0000]";
    switch (type) {
      case "browser": return <Globe className={iconClass} />;
      case "analytics": return <Search className={iconClass} />;
      case "mobile": return <Smartphone className={iconClass} />;
      case "system": return <Cpu className={iconClass} />;
      case "mvp": return <Rocket className={iconClass} />;
      case "social": return <Share2 className={iconClass} />;
      default: return <Globe className={iconClass} />;
    }
  };

  // Abstract Geometric Visual Components for each service
  const renderServiceGeometry = (idx: number) => {
    switch (idx) {
      case 0: // Website
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-black/[0.03] rounded-lg border border-black/10">
            <div className="flex items-center gap-1.5 pb-3 border-b border-black/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF0000]" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
              <span className="ml-auto font-mono text-[9px] text-black/40 uppercase">next.js flagship</span>
            </div>
            <div className="space-y-2 py-2">
              <div className="h-4 bg-black/10 rounded-xs w-3/4" />
              <div className="h-3 bg-[#FF0000]/20 rounded-xs w-1/2" />
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <div className="h-8 bg-black/5 rounded-xs border border-black/10 flex items-center justify-center font-mono text-[8px] text-black/50">HERO</div>
                <div className="h-8 bg-black/5 rounded-xs border border-black/10 flex items-center justify-center font-mono text-[8px] text-black/50">FUNNEL</div>
                <div className="h-8 bg-[#FF0000]/10 rounded-xs border border-[#FF0000]/30 flex items-center justify-center font-mono text-[8px] text-[#FF0000] font-bold">CONVERT</div>
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-[9px] text-black/50 pt-2 border-t border-black/10">
              <span>LATENCY: 0.6s</span>
              <span className="text-[#FF0000] font-bold">100/100 CWV</span>
            </div>
          </div>
        );
      case 1: // SEO
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-black/[0.03] rounded-lg border border-black/10">
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <span className="font-mono text-[9px] text-black/60 uppercase">google map 3-pack</span>
              <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
            </div>
            <div className="space-y-2 py-2">
              <div className="flex items-center gap-2 p-2 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-xs">
                <span className="font-mono text-xs font-bold text-[#FF0000]">#1</span>
                <span className="font-sans text-[11px] font-bold text-black">Clinic / Brand Keyword Dominance</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-black/5 rounded-xs">
                <span className="font-mono text-[10px] text-black/40">#2</span>
                <span className="font-sans text-[10px] text-black/60">Competitor Gap Captured</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-[9px] text-black/50 pt-2 border-t border-black/10">
              <span>INTENT: TRANSACTIONAL</span>
              <span className="text-[#FF0000] font-bold">LOCAL 3-PACK</span>
            </div>
          </div>
        );
      case 2: // App Development
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-black/[0.03] rounded-lg border border-black/10">
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <span className="font-mono text-[9px] text-black/60 uppercase">ios / android engine</span>
              <span className="font-mono text-[9px] text-[#FF0000] font-bold">NATIVE 60FPS</span>
            </div>
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="w-16 h-20 rounded-md border-2 border-black/80 p-1 flex flex-col justify-between bg-white shadow-sm">
                <div className="w-6 h-1 bg-black/40 rounded-full mx-auto" />
                <div className="w-full h-8 bg-[#FF0000]/10 rounded-xs flex items-center justify-center font-mono text-[7px] text-[#FF0000] font-bold">APP UX</div>
                <div className="w-2 h-2 rounded-full bg-black/20 mx-auto" />
              </div>
              <div className="space-y-1 font-mono text-[9px] text-black/70">
                <div>• Push Nurture</div>
                <div>• Offline Sync</div>
                <div className="text-[#FF0000] font-bold">• 1-Tap Pay</div>
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-[9px] text-black/50 pt-2 border-t border-black/10">
              <span>RETENTION LOOP</span>
              <span className="text-[#FF0000] font-bold">CROSS-PLATFORM</span>
            </div>
          </div>
        );
      case 3: // Software Development
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-black/[0.03] rounded-lg border border-black/10">
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <span className="font-mono text-[9px] text-black/60 uppercase">custom business engine</span>
              <span className="font-mono text-[9px] text-[#FF0000] font-bold">ZERO-BOTTLENECK</span>
            </div>
            <div className="grid grid-cols-2 gap-2 py-2">
              <div className="p-2 bg-white rounded-xs border border-black/10 shadow-xs">
                <div className="font-mono text-[8px] text-black/40 uppercase">LEADS ROUTED</div>
                <div className="font-display font-bold text-sm text-[#0A0A0A]">100% AUTO</div>
              </div>
              <div className="p-2 bg-[#FF0000]/10 rounded-xs border border-[#FF0000]/30">
                <div className="font-mono text-[8px] text-[#FF0000] uppercase font-bold">DATABASE</div>
                <div className="font-display font-bold text-sm text-[#FF0000]">POSTGRES</div>
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-[9px] text-black/50 pt-2 border-t border-black/10">
              <span>RBAC SECURITY</span>
              <span className="text-[#FF0000] font-bold">API PIPELINES</span>
            </div>
          </div>
        );
      case 4: // MVP for Startups
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-black/[0.03] rounded-lg border border-black/10">
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <span className="font-mono text-[9px] text-black/60 uppercase">0 → 1 startup sprint</span>
              <span className="font-mono text-[9px] text-[#FF0000] font-bold">28 DAYS</span>
            </div>
            <div className="space-y-1.5 py-2">
              <div className="flex items-center justify-between text-[9px] font-mono">
                <span className="text-black/60">DISCOVERY & SCOPE</span>
                <span className="text-[#FF0000] font-bold">WEEK 1</span>
              </div>
              <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF0000] w-full" />
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono pt-1">
                <span className="text-black/60">FULL-STACK BUILD</span>
                <span className="text-[#FF0000] font-bold">WEEK 2-3</span>
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono pt-1">
                <span className="text-black/60">LIVE & INVESTOR DEMO</span>
                <span className="text-[#FF0000] font-bold">WEEK 4</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-[9px] text-black/50 pt-2 border-t border-black/10">
              <span>VALIDATION READY</span>
              <span className="text-[#FF0000] font-bold">INVESTOR DECK</span>
            </div>
          </div>
        );
      case 5: // Social Media Growth
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-black/[0.03] rounded-lg border border-black/10">
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <span className="font-mono text-[9px] text-black/60 uppercase">attention-to-revenue funnel</span>
              <span className="font-mono text-[9px] text-[#FF0000] font-bold">WHATSAPP DM</span>
            </div>
            <div className="space-y-2 py-2">
              <div className="flex items-center justify-between p-2 bg-white rounded-xs border border-black/10 shadow-xs">
                <span className="font-mono text-[9px] text-black/70">REEL / VIDEO VIEW</span>
                <span className="text-black/30">→</span>
                <span className="font-mono text-[9px] text-[#FF0000] font-bold">BIO FUNNEL</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-[#FF0000]/10 rounded-xs border border-[#FF0000]/30">
                <span className="font-mono text-[9px] text-[#FF0000] font-bold">WHATSAPP INQUIRY</span>
                <span className="text-[#FF0000]">→</span>
                <span className="font-mono text-[9px] text-[#0A0A0A] font-bold">CLOSED DEAL</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-[9px] text-black/50 pt-2 border-t border-black/10">
              <span>ATTENTION CAPTURE</span>
              <span className="text-[#FF0000] font-bold">HIGH LTV</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#FFFFFF] text-[#0A0A0A] border-b border-black/[0.08] select-none"
      aria-label="Core Capabilities & Services"
    >
      {/* ═══════════════ DESKTOP PINNED EXPERIENCE (lg:block) ═══════════════ */}
      <div ref={pinWrapperRef} className="hidden lg:block">
        <div className="min-h-screen w-full flex flex-col justify-between py-16 px-10 xl:px-16 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-8 border-b border-black/[0.08]">
            <SectionLabel number="04" label="WHAT WE DO" theme="light" className="mb-0" />
            <div className="font-mono text-xs text-[#0A0A0A]/50 font-semibold">
              CHAPTER <span className="text-[#FF0000]">{service.number}</span> OF 06
            </div>
          </div>

          {/* Center Stage: Left Radial Selector & Right Service Narrative */}
          <div className="grid grid-cols-12 gap-12 my-auto items-center py-8">
            {/* Left Column: Radial Circle Visual Selector & Service Nav */}
            <div className="col-span-5 flex flex-col justify-between h-full pr-8 border-r border-black/[0.08]">
              <div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="service-number font-display font-black text-7xl xl:text-8xl text-[#0A0A0A] tracking-tighter">
                    {service.number}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF0000] font-bold">
                    [CORE CAPABILITY]
                  </span>
                </div>

                {/* Radial Visual Element */}
                <div
                  ref={radialRef}
                  className="relative w-48 h-48 my-6 mx-auto flex items-center justify-center"
                >
                  {/* Outer Orbit Ring */}
                  <div className="absolute inset-0 rounded-full border border-black/15 flex items-center justify-center animate-spin" style={{ animationDuration: "60s" }}>
                    <div className="absolute top-0 w-3 h-3 rounded-full bg-[#FF0000] -translate-y-1.5 shadow-xs" />
                  </div>

                  {/* Inner Dashed Ring */}
                  <div className="absolute inset-4 rounded-full border border-dashed border-[#FF0000]/40 flex items-center justify-center" />

                  {/* Central Node displaying Current Active Service Number */}
                  <div className="relative w-24 h-24 rounded-full bg-[#0A0A0A] text-white flex flex-col items-center justify-center shadow-lg">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF0000] font-bold">
                      SYSTEM
                    </span>
                    <span className="font-display font-black text-2xl text-white">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Service List Tracker */}
                <div className="space-y-2 pt-2">
                  {services.map((item, idx) => (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActiveService(idx)}
                      className={`block w-full text-left font-mono text-xs uppercase tracking-wider transition-all duration-300 py-1.5 focus:outline-none cursor-pointer ${
                        activeService === idx
                          ? "text-[#FF0000] font-bold pl-3 border-l-2 border-[#FF0000]"
                          : "text-[#0A0A0A]/40 hover:text-[#0A0A0A] pl-0"
                      }`}
                    >
                      {item.number}. {item.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF0000] transition-colors group font-bold"
                >
                  <span>INITIATE SERVICE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF0000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Active Service Narrative & Bespoke Schema */}
            <div ref={contentPanelRef} className="col-span-7 pl-4 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-md bg-black/[0.04] border border-black/10">
                    {getServiceIcon(service.visualType)}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold">
                    {service.ticker[0]}
                  </span>
                </div>

                <h3 className="service-title font-display font-black text-3xl xl:text-4xl text-[#0A0A0A] uppercase tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="service-desc font-sans text-base text-[#0A0A0A]/70 mt-3 leading-relaxed max-w-xl">
                  {service.fullDescription}
                </p>
              </div>

              {/* Dynamic Abstract Visual Schema */}
              <div className="w-full h-40">
                {renderServiceGeometry(activeService)}
              </div>

              {/* Deliverable Architecture Box */}
              <div className="service-deliverables p-6 rounded-xl bg-[#FAFAFA] border border-black/[0.08] relative overflow-hidden">
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-black/[0.06]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#0A0A0A]/60 font-bold">
                    DELIVERABLE ARCHITECTURE
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF0000]" />
                    <span className="w-2 h-2 rounded-full bg-black/20" />
                    <span className="w-2 h-2 rounded-full bg-black/40" />
                  </div>
                </div>

                {/* Capabilities 2-Column Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="service-cap flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0000] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-[#0A0A0A]/80 leading-snug font-medium">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mini Ticker */}
                <div className="pt-3 border-t border-black/[0.06] flex items-center gap-3 overflow-hidden select-none">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF0000] font-bold shrink-0">
                    FOCUS:
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#0A0A0A]/60 overflow-hidden whitespace-nowrap">
                    {service.ticker.map((item, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <span>{item}</span>
                        <span className="text-[#FF0000]">•</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="pt-6 border-t border-black/[0.08] flex items-center justify-between font-mono text-xs text-[#0A0A0A]/50 font-medium">
            <span>SCROLL DOWN TO PROGRESS CHAPTERS</span>
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-6 h-1 transition-all duration-300 ${
                    activeService === idx ? "bg-[#FF0000]" : "bg-black/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ MOBILE EDITORIAL CHAPTERS (lg:hidden) ═══════════════ */}
      <div className="lg:hidden py-20 px-6 sm:px-10 space-y-20">
        <div>
          <SectionLabel number="04" label="WHAT WE DO" theme="light" />
          <h2 className="font-display font-black section-headline uppercase text-[#0A0A0A] tracking-tighter mt-4">
            SERVICES THAT DRIVE GROWTH.
            <br />
            <span className="text-[#FF0000]">NOT JUST DELIVERABLES.</span>
          </h2>
        </div>

        {services.map((item, idx) => (
          <div
            key={item.number}
            className="pt-8 border-t border-black/10 space-y-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-black text-5xl text-[#0A0A0A]">
                {item.number}
              </span>
              <div className="p-2.5 rounded-md bg-black/[0.04] border border-black/10">
                {getServiceIcon(item.visualType)}
              </div>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-1">
                {item.ticker[0]}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0A0A0A] uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-[#0A0A0A]/70 mt-3 leading-relaxed">
                {item.shortDescription}
              </p>
            </div>

            {/* Mobile Visual Geometry */}
            <div className="w-full h-36">
              {renderServiceGeometry(idx)}
            </div>

            {/* Mobile Capabilities */}
            <div className="p-5 rounded-xl bg-[#FAFAFA] border border-black/10 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 font-bold mb-2">
                KEY DELIVERABLES
              </p>
              {item.capabilities.slice(0, 4).map((cap, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0000] shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-[#0A0A0A]/80 font-medium">
                    {cap}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF0000] font-bold"
            >
              <span>INQUIRE ABOUT {item.title}</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF0000]" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
