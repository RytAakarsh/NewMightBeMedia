"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"stream" | "carousel">("stream");
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section
        id="work"
        className="py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#080808] border-b border-white/10 overflow-hidden"
        aria-label="Selected Client Work & Case Studies"
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel number="09" label="SELECTED WORK" theme="dark" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24">
            <div>
              <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter">
                SYSTEMS WE&apos;VE BUILT
                <br />
                <span className="text-white/40">THAT ACTUALLY CONVERT.</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-white/60 mt-6 max-w-2xl leading-relaxed">
                Real projects. Real systems. Each one designed around business outcomes,
                not just visuals.
              </p>
            </div>

            {/* View Mode Switcher (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 p-1 rounded-lg bg-white/5 border border-white/10 self-start lg:self-end">
              <button
                type="button"
                onClick={() => setViewMode("stream")}
                className={`px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === "stream"
                    ? "bg-white text-black font-bold"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Editorial Stream
              </button>
              <button
                type="button"
                onClick={() => setViewMode("carousel")}
                className={`px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === "carousel"
                    ? "bg-white text-black font-bold"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Infinite Showcase
              </button>
            </div>
          </div>

          {/* ═══════════════ MOBILE HORIZONTAL AUTO-SCROLLING SHOWCASE ═══════════════ */}
          <div className="lg:hidden -mx-6 sm:-mx-10 mb-12">
            <div className="px-6 sm:px-10 mb-4 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                SWIPE OR TAP TO EXPLORE
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                {projects.length} CASE STUDIES
              </span>
            </div>

            <div className="marquee-container relative w-full overflow-x-auto overflow-y-hidden pb-4 pt-2 no-scrollbar">
              <div className="animate-marquee-left flex items-center gap-6 px-6">
                {[...projects, ...projects].map((proj, idx) => (
                  <div
                    key={`${proj.id}-${idx}`}
                    onClick={() => setSelectedProject(proj)}
                    className="w-[280px] sm:w-[340px] shrink-0 rounded-xl bg-[#101010] border border-white/15 overflow-hidden group cursor-pointer"
                  >
                    <div className="relative w-full aspect-16/10 bg-[#161616] overflow-hidden">
                      <Image
                        src={proj.preview}
                        alt={proj.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-white/40">
                        <span>{proj.tag}</span>
                        <span>0{(idx % projects.length) + 1}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight">
                        {proj.name}
                      </h3>
                      <p className="font-sans text-xs text-white/60 line-clamp-2">
                        {proj.summary}
                      </p>
                      <div className="pt-2 flex items-center gap-1 font-mono text-[11px] text-white/80 uppercase tracking-wider">
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ═══════════════ DESKTOP INFINITE SHOWCASE MODE ═══════════════ */}
          {viewMode === "carousel" && (
            <div className="hidden lg:block -mx-10 xl:-mx-16 mb-12">
              <div className="marquee-container relative w-full overflow-hidden py-4">
                <div
                  ref={carouselTrackRef}
                  className="animate-marquee-left flex items-center gap-8 px-8"
                >
                  {[...projects, ...projects].map((proj, idx) => (
                    <div
                      key={`${proj.id}-${idx}`}
                      onClick={() => setSelectedProject(proj)}
                      data-cursor="VIEW"
                      className="w-[420px] shrink-0 rounded-xl bg-[#101010] border border-white/15 overflow-hidden group cursor-pointer hover:border-white/40 transition-all duration-300"
                    >
                      <div className="relative w-full aspect-16/10 bg-[#161616] overflow-hidden">
                        <Image
                          src={proj.preview}
                          alt={proj.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-white/40">
                          <span>{proj.tag}</span>
                          <span>0{(idx % projects.length) + 1}</span>
                        </div>
                        <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight group-hover:text-white/80 transition-colors">
                          {proj.name}
                        </h3>
                        <p className="font-sans text-sm text-white/60 line-clamp-2">
                          {proj.summary}
                        </p>
                        <div className="pt-2 flex items-center gap-2 font-mono text-xs text-white uppercase tracking-widest group-hover:underline">
                          <span>EXPLORE CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ EDITORIAL ASYMMETRIC STREAM MODE ═══════════════ */}
          {(viewMode === "stream" || true) && (
            <div className={`space-y-28 sm:space-y-40 ${viewMode === "carousel" ? "hidden lg:hidden" : ""}`}>
              {projects.map((proj, idx) => {
                // 3 Layout Variations for Editorial Rhythm
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
                          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                            <span>0{idx + 1}</span>
                            <span>•</span>
                            <span>{proj.tag}</span>
                            <span>•</span>
                            <span>{proj.category}</span>
                          </div>
                          <h3 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight group-hover:text-white/80 transition-colors">
                            {proj.name}
                          </h3>
                        </div>

                        <div className="flex items-center gap-6">
                          <p className="font-sans text-sm text-white/60 max-w-md hidden sm:block">
                            {proj.summary}
                          </p>
                          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>

                      {/* Full-width image frame */}
                      <div className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-lg overflow-hidden border border-white/10 bg-[#141414]">
                        <Image
                          src={proj.preview}
                          alt={proj.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
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
                          <span>0{idx + 1}</span>
                          <span>•</span>
                          <span>{proj.tag}</span>
                        </div>

                        <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-4 group-hover:text-white/80 transition-colors">
                          {proj.name}
                        </h3>

                        <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                          {proj.summary}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {proj.technologies.slice(0, 3).map((t, i) => (
                            <span
                              key={i}
                              className="font-mono text-[11px] uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white group-hover:underline">
                          <span>EXPLORE CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Image Column */}
                      <div
                        className={`lg:col-span-7 ${
                          isImageRight ? "order-2" : "order-2 lg:order-1"
                        }`}
                      >
                        <div className="relative w-full aspect-16/10 rounded-lg overflow-hidden border border-white/10 bg-[#141414]">
                          <Image
                            src={proj.preview}
                            alt={proj.name}
                            fill
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Case Study Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
