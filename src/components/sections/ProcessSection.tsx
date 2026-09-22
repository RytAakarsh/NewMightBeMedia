"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";
import { processSteps } from "@/data/process";

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const stepElements = containerRef.current?.querySelectorAll(".process-step-item");
      if (stepElements && stepElements.length > 0) {
        stepElements.forEach((step, idx) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveStep(idx),
            onEnterBack: () => setActiveStep(idx),
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#080808] border-b border-white/10"
      aria-label="Growth System Process"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="07" label="THE METHODOLOGY" theme="dark" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Left Column (Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 lg:h-fit">
            <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter leading-[0.98]">
              HOW WE BUILD
              <br />
              <span className="text-white/40">GROWTH SYSTEMS.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-white/70 mt-6 leading-relaxed max-w-md">
              A disciplined, 5-stage engineering workflow designed to systematically
              eliminate conversion dropoffs and unlock compounding organic revenue.
            </p>

            {/* Desktop Active Step Indicator */}
            <div className="hidden lg:flex items-center gap-6 mt-12 pt-8 border-t border-white/10 font-mono text-xs text-white/50">
              <span className="text-white font-bold text-lg">
                0{activeStep + 1}
              </span>
              <span>/</span>
              <span>05 PHASES</span>
              <div className="h-px w-24 bg-white/10 relative overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / 5) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Process Timeline */}
          <div className="lg:col-span-7 relative pl-0 lg:pl-10">
            {/* Timeline Progress Line (Desktop) */}
            <div className="hidden lg:block absolute left-0 top-6 bottom-12 w-px bg-white/10">
              <div
                className="w-full bg-white transition-all duration-300"
                style={{
                  height: `${((activeStep + 1) / processSteps.length) * 100}%`,
                }}
              />
            </div>

            <div className="space-y-20 sm:space-y-28">
              {processSteps.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.number}
                    className={`process-step-item transition-all duration-500 ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-sm sm:text-base text-white/50">
                        STAGE {step.number}
                      </span>
                      <div className="h-px flex-1 max-w-[60px] bg-white/15" />
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                      {step.title}
                    </h3>

                    <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed mb-6 font-medium">
                      {step.shortDesc}
                    </p>

                    <p className="font-sans text-sm sm:text-base text-white/60 leading-relaxed mb-8">
                      {step.detailedAnalysis}
                    </p>

                    {/* Step Deliverables */}
                    <div className="p-5 rounded-lg bg-[#000000] border border-white/10 space-y-2">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">
                        STAGE OUTPUTS
                      </p>
                      {step.deliverables.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 font-mono text-xs text-white/70">
                          <span className="text-white/30">→</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
