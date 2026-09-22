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
      className="py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#080808] border-b border-white/10"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="13" label="FREQUENT INQUIRIES" theme="dark" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 lg:h-fit">
            <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter leading-[0.98]">
              EVERYTHING YOU NEED
              <br />
              <span className="text-white/40">TO KNOW.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/60 mt-6 leading-relaxed">
              Clear answers regarding our development timelines, startup sprints, technical
              support, and commercial growth frameworks.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10 font-mono text-xs text-white/40">
              HAVE A BESPOKE QUESTION?
              <br />
              <a
                href="#contact"
                className="text-white hover:underline mt-1 inline-block"
              >
                Direct Message Our Team →
              </a>
            </div>
          </div>

          {/* Right Column: Monoline Editorial Accordion */}
          <div className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={item.number} className="py-6 sm:py-8 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-start justify-between gap-6 text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs text-white/40 group-hover:text-white transition-colors">
                        /{item.number}
                      </span>
                      <h3 className="font-display font-medium text-lg sm:text-2xl text-white group-hover:text-white/80 transition-colors uppercase tracking-tight">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/60 group-hover:border-white group-hover:text-white transition-all duration-300 shrink-0 ${
                        isOpen ? "rotate-45 bg-white/10 text-white" : "rotate-0"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Smooth Collapsible Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed pl-8 sm:pl-10 max-w-2xl">
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
