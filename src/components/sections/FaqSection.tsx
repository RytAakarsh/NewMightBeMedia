"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import { faqs } from "@/data/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faqs"
      className="py-24 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0A0A0A] border-b border-black/[0.08]"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="11" label="FREQUENT INQUIRIES" theme="light" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 lg:h-fit">
            <h2 className="font-display font-black section-headline uppercase text-[#0A0A0A] tracking-tighter leading-[0.98]">
              EVERYTHING YOU NEED
              <br />
              <span className="text-[#FF0000]">TO KNOW.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#0A0A0A]/70 mt-6 leading-relaxed font-normal">
              Clear answers regarding our development timelines, startup sprints, technical support, and commercial growth frameworks.
            </p>
            <div className="mt-8 pt-6 border-t border-black/[0.08] font-mono text-xs text-[#0A0A0A]/60 space-y-2">
              <span className="text-[#FF0000] font-bold block">[HAVE A BESPOKE QUESTION?]</span>
              <a
                href="/#contact"
                className="text-[#0A0A0A] hover:text-[#FF0000] font-bold underline inline-block"
              >
                Direct Message Our Team →
              </a>
            </div>
          </div>

          {/* Right Column: Monoline Editorial Accordion */}
          <div className="lg:col-span-8 divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={item.number} className="py-6 sm:py-8 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-start justify-between gap-6 text-left focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs text-[#FF0000] font-bold">
                        /{item.number}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-2xl text-[#0A0A0A] group-hover:text-[#FF0000] transition-colors uppercase tracking-tight">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-[#0A0A0A] group-hover:border-[#FF0000] group-hover:text-[#FF0000] transition-all duration-300 shrink-0 ${
                        isOpen ? "rotate-45 bg-[#FF0000] text-white border-[#FF0000]" : "rotate-0 bg-black/[0.02]"
                      }`}
                    >
                      <Plus className={`w-4 h-4 ${isOpen ? "text-white" : ""}`} />
                    </div>
                  </button>

                  {/* Smooth Collapsible Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-sans text-sm sm:text-base text-[#0A0A0A]/70 leading-relaxed pl-8 sm:pl-10 max-w-2xl font-normal">
                      {item.answer}
                    </p>
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
