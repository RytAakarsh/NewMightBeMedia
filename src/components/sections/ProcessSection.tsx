"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../common/SectionLabel";
import { processSteps } from "@/data/process";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const stepElements = containerRef.current?.querySelectorAll(".process-step-item");
      if (stepElements && stepElements.length > 0) {
        stepElements.forEach((step, idx) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top center",
            end: "bottom center",
            invalidateOnRefresh: true,
            onEnter: () => setActiveStep(idx),
            onEnterBack: () => setActiveStep(idx),
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-24 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0A0A0A] border-b border-black/[0.08]"
      aria-label="5-Stage Growth Methodology"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="07" label="THE METHODOLOGY" theme="light" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Left Column (Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 lg:h-fit">
            <h2 className="font-display font-black section-headline uppercase text-[#0A0A0A] tracking-tighter leading-[0.98]">
              HOW WE BUILD
              <br />
              <span className="text-[#FF0000]">GROWTH SYSTEMS.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#0A0A0A]/70 mt-6 leading-relaxed max-w-md font-normal">
              A disciplined, 5-stage engineering workflow designed to systematically eliminate conversion dropoffs and unlock compounding organic revenue.
            </p>

            {/* Active Step Indicator */}
            <div className="flex items-center gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-black/[0.08] font-mono text-xs text-[#0A0A0A]/60">
              <span className="text-[#FF0000] font-black text-xl">
                0{activeStep + 1}
              </span>
              <span>/</span>
              <span className="font-bold">05 PHASES</span>
              <div className="h-[2px] w-24 bg-black/10 relative overflow-hidden">
                <div
                  className="h-full bg-[#FF0000] transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Process Timeline */}
          <div className="lg:col-span-7 relative pl-0 lg:pl-10">
            {/* Timeline Progress Line (Desktop) */}
            <div className="hidden lg:block absolute left-0 top-6 bottom-12 w-px bg-black/10">
              <div
                className="w-full bg-[#FF0000] transition-all duration-300"
                style={{
                  height: `${((activeStep + 1) / processSteps.length) * 100}%`,
                }}
              />
            </div>

            <div className="space-y-16 sm:space-y-24">
              {processSteps.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.number}
                    className={`process-step-item p-6 sm:p-8 rounded-xl border transition-all duration-500 ${
                      isActive
                        ? "bg-[#FAFAFA] border-[#FF0000] shadow-md opacity-100"
                        : "bg-white border-black/[0.06] opacity-40 hover:opacity-70"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#FF0000]">
                        PHASE {step.number}
                      </span>
                      <div className="h-px flex-1 max-w-[60px] bg-black/15" />
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0A0A0A] uppercase tracking-tight mb-3">
                      {step.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-[#0A0A0A]/90 leading-relaxed mb-3 font-semibold">
                      {step.shortDesc}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/60 leading-relaxed mb-6">
                      {step.detailedAnalysis}
                    </p>

                    {/* Step Deliverables */}
                    <div className="p-4 rounded-lg bg-white border border-black/10 space-y-2">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF0000] font-bold mb-1">
                        STAGE OUTPUTS
                      </p>
                      {step.deliverables.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 font-mono text-xs text-[#0A0A0A]/80">
                          <span className="text-[#FF0000]">→</span>
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
