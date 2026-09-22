"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="work"
        className="py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#080808] border-b border-white/10"
        aria-label="Selected Client Work & Case Studies"
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel number="09" label="SELECTED WORK" theme="dark" />

          <div className="mb-20 sm:mb-28">
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

          {/* Editorial Asymmetric Projects Stream */}
          <div className="space-y-28 sm:space-y-40">
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
