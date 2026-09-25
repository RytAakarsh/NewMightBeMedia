"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/common/SectionLabel";
import { projects, Project } from "@/data/projects";
import ProjectModal from "@/components/sections/ProjectModal";
import MagneticButton from "@/components/common/MagneticButton";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="relative bg-[#080808] text-[#FAFAFA] min-h-screen selection:bg-[#FF0000] selection:text-white">
      {/* Persistent Navigation */}
      <Navbar />

      {/* Project Exhibition Hero */}
      <section className="pt-36 sm:pt-44 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionLabel number="01" label="SELECTED WORK & SYSTEMS" theme="dark" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-4">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tighter text-white leading-[0.95]">
                SYSTEMS WE&apos;VE BUILT.
                <br />
                <span className="text-[#FF0000]">THAT ACTUALLY CONVERT.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-white/60 mt-6 max-w-2xl leading-relaxed">
                A curated exhibition of conversion flagships, SaaS platforms, MVPs, and automated digital growth systems engineered for high-growth enterprises globally.
              </p>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs text-white/50 pb-2">
              <div>
                <span className="text-white font-bold text-lg block">08</span>
                <span>PRODUCTION CASE STUDIES</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <span className="text-[#FF0000] font-bold text-lg block">100%</span>
                <span>REAL CLIENT RESULTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Exhibition Gallery */}
      <section className="py-20 sm:py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-28 sm:space-y-40">
          {projects.map((proj, idx) => {
            const layoutType = idx % 3; // 0 = right image, 1 = left image, 2 = full-width showcase

            if (layoutType === 2) {
              // Layout 2: Full-Width Cinematic Showcase
              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  data-cursor="VIEW"
                  className="group cursor-pointer pt-12 border-t border-white/10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                        <span className="text-[#FF0000] font-bold">0{idx + 1}</span>
                        <span>•</span>
                        <span>{proj.tag}</span>
                        <span>•</span>
                        <span>{proj.category}</span>
                      </div>
                      <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight group-hover:text-[#FF0000] transition-colors">
                        {proj.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-6">
                      <p className="font-sans text-sm text-white/60 max-w-md hidden sm:block">
                        {proj.summary}
                      </p>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[#FF0000] group-hover:bg-[#FF0000] transition-all">
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Full-width image frame */}
                  <div className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-xl overflow-hidden border border-white/15 bg-[#141414] shadow-2xl">
                    <Image
                      src={proj.preview}
                      alt={proj.name}
                      fill
                      sizes="100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Metrics strip */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-6 font-mono text-xs">
                    {proj.metrics.map((m, i) => (
                      <div key={i} className="space-y-1">
                        <span className="text-white/40 uppercase block text-[10px]">{m.label}</span>
                        <span className="text-[#FF0000] font-bold text-base sm:text-lg">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            const isImageRight = layoutType === 0;

            return (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                data-cursor="VIEW"
                className="group cursor-pointer pt-12 border-t border-white/10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isImageRight ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isImageRight ? "order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white/40 mb-3">
                      <span className="text-[#FF0000] font-bold">0{idx + 1}</span>
                      <span>•</span>
                      <span>{proj.tag}</span>
                    </div>

                    <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-4 group-hover:text-[#FF0000] transition-colors">
                      {proj.name}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-6 font-normal">
                      {proj.summary}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/10 mb-6">
                      {proj.metrics.map((m, i) => (
                        <div key={i}>
                          <span className="font-mono text-[9px] text-white/40 uppercase block">{m.label}</span>
                          <span className="font-mono text-sm sm:text-base font-bold text-[#FF0000]">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {proj.technologies.slice(0, 4).map((t, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] uppercase tracking-wider text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest font-bold">
                      <span className="text-white group-hover:text-[#FF0000] transition-colors">EXPLORE CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 text-[#FF0000]" />
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="ml-auto flex items-center gap-1.5 text-white/40 hover:text-white transition-colors"
                        >
                          <span className="text-[10px]">LIVE SITE</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 ${
                      isImageRight ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden border border-white/15 bg-[#141414] shadow-2xl">
                      <Image
                        src={proj.preview}
                        alt={proj.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project Page Bottom CTA */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-white/10 bg-[#000000] text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF0000] font-bold block">
            [READY FOR YOUR REVENUE SYSTEM?]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
            LET&apos;S ENGINEER YOUR DIGITAL FLAGSHIP.
          </h2>
          <p className="font-sans text-base text-white/70 max-w-xl mx-auto">
            From SaaS onboarding to clinical map pack dominance, we build platforms that perform.
          </p>
          <div className="pt-4">
            <MagneticButton
              href="/#contact"
              variant="red"
              cursorBadge="TALK"
              className="py-4 px-8 text-xs font-bold"
            >
              <span>INITIATE PROJECT INQUIRY</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Deep Dive Case Study Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
