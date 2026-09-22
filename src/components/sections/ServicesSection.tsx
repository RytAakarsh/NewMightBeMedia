"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CheckCircle2, Globe, Search, Smartphone, Cpu, Rocket, Share2 } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import { services } from "@/data/services";

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    // Only set up pinned desktop experience if screen is wide enough
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const pinTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${services.length * 90}%`,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const index = Math.min(
            services.length - 1,
            Math.floor(self.progress * services.length)
          );
          setActiveService(index);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const service = services[activeService];

  // Helper icons for service types
  const getServiceIcon = (type: string) => {
    switch (type) {
      case "browser":
        return <Globe className="w-6 h-6 text-white" />;
      case "analytics":
        return <Search className="w-6 h-6 text-white" />;
      case "mobile":
        return <Smartphone className="w-6 h-6 text-white" />;
      case "system":
        return <Cpu className="w-6 h-6 text-white" />;
      case "mvp":
        return <Rocket className="w-6 h-6 text-white" />;
      case "social":
        return <Share2 className="w-6 h-6 text-white" />;
      default:
        return <Globe className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-[#000000] border-b border-white/10 overflow-hidden"
    >
      {/* DESKTOP PINNED EXPERIENCE (lg:flex) */}
      <div className="hidden lg:flex min-h-screen w-full flex-col justify-between py-16 px-10 xl:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10">
          <SectionLabel number="04" label="WHAT WE DO" theme="dark" />
          <div className="font-mono text-xs text-white/40">
            CHAPTER {service.number} OF 06
          </div>
        </div>

        {/* Content Body: Left Index & Right Dynamic Canvas */}
        <div className="grid grid-cols-12 gap-12 my-auto items-center py-8">
          {/* Left Column: Number & Service Selector */}
          <div className="col-span-4 flex flex-col justify-between h-full pr-6 border-r border-white/10">
            <div>
              <span className="font-display font-bold text-7xl xl:text-8xl text-white tracking-tighter">
                {service.number}
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40 mt-2 mb-8">
                CORE CAPABILITY
              </p>

              {/* Service list tracker */}
              <div className="space-y-3">
                {services.map((item, idx) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveService(idx)}
                    className={`block w-full text-left font-mono text-xs uppercase tracking-wider transition-all duration-300 py-1.5 focus:outline-none ${
                      activeService === idx
                        ? "text-white font-bold pl-3 border-l-2 border-white"
                        : "text-white/30 hover:text-white/60 pl-0"
                    }`}
                  >
                    {item.number}. {item.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors group"
              >
                <span>INITIATE SERVICE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Active Service Narrative & Bespoke UI Visual Composition */}
          <div className="col-span-8 pl-4 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-white/5 border border-white/10">
                  {getServiceIcon(service.visualType)}
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                  {service.ticker[0]}
                </span>
              </div>

              <h3 className="font-display font-bold chapter-headline text-white uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="font-sans text-lg text-white/70 mt-4 leading-relaxed max-w-2xl">
                {service.fullDescription}
              </p>
            </div>

            {/* Visual Schema Box */}
            <div className="p-6 rounded-lg bg-[#080808] border border-white/15 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">
                  DELIVERABLE ARCHITECTURE
                </span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Capabilities 2-Column Grid */}
              <div className="grid grid-cols-2 gap-3.5 mb-6">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-white/80 leading-snug">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mini Capability Ticker Strip */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-4 overflow-hidden select-none">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 shrink-0">
                  FOCUS:
                </span>
                <div className="flex items-center gap-4 text-xs font-mono text-white/70 overflow-hidden whitespace-nowrap">
                  {service.ticker.map((item, i) => (
                    <span key={i} className="flex items-center gap-3">
                      <span>{item}</span>
                      <span className="text-white/20">•</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pinned Footer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
          <span>SCROLL DOWN TO PROGRESS SERVICES</span>
          <div className="flex gap-2">
            {services.map((_, idx) => (
              <span
                key={idx}
                className={`w-6 h-1 transition-all duration-300 ${
                  activeService === idx ? "bg-white" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE VERTICAL EDITORIAL CHAPTERS (lg:hidden) */}
      <div className="lg:hidden py-20 px-6 sm:px-10 space-y-24">
        <div>
          <SectionLabel number="04" label="WHAT WE DO" theme="dark" />
          <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter mt-4">
            SERVICES THAT DRIVE GROWTH.
            <br />
            <span className="text-white/40">NOT JUST DELIVERABLES.</span>
          </h2>
        </div>

        {services.map((item) => (
          <div
            key={item.number}
            className="pt-8 border-t border-white/15 space-y-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-5xl text-white">
                {item.number}
              </span>
              <div className="p-2 rounded-md bg-white/5 border border-white/10">
                {getServiceIcon(item.visualType)}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
                {item.shortDescription}
              </p>
            </div>

            {/* Mobile Capabilities List */}
            <div className="p-5 rounded-lg bg-[#080808] border border-white/10 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">
                KEY CAPABILITIES
              </p>
              {item.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-white/80">
                    {cap}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white"
            >
              <span>INQUIRE ABOUT {item.title}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
