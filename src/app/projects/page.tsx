"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink, ArrowDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/common/SectionLabel";
import { projects, Project } from "@/data/projects";
import ProjectModal from "@/components/sections/ProjectModal";
import MagneticButton from "@/components/common/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const redLineRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Cinematic entrance for Projects Hero
      const lines = headlineRef.current?.querySelectorAll(".project-line-inner");
      if (lines && lines.length > 0) {
        gsap.fromTo(
          lines,
          { y: "115%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.1,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      }

      // 2. Animated red drawing line
      if (redLineRef.current) {
        gsap.fromTo(
          redLineRef.current,
          { width: "0%" },
          { width: "100%", duration: 1.2, ease: "power2.inOut", delay: 0.4 }
        );
      }

      // 3. Project Chapters scroll-linked choreography
      const chapters = galleryRef.current?.querySelectorAll(".project-chapter");
      if (chapters && chapters.length > 0) {
        chapters.forEach((chapter) => {
          const img = chapter.querySelector(".project-img-frame");
          const info = chapter.querySelector(".project-info");

          if (img) {
            gsap.fromTo(
              img,
              { clipPath: "inset(8% 0 8% 0)", scale: 0.95, opacity: 0.6 },
              {
                clipPath: "inset(0% 0 0% 0)",
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: chapter,
                  start: "top 80%",
                  end: "top 35%",
                  scrub: 0.4,
                  invalidateOnRefresh: true,
                },
              }
            );
          }

          if (info) {
            gsap.fromTo(
              info,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: chapter,
                  start: "top 75%",
                  invalidateOnRefresh: true,
                },
              }
            );
          }
        });
      }
    }, galleryRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <main className="relative bg-[#080808] text-[#FAFAFA] min-h-screen selection:bg-[#FF0000] selection:text-white">
      {/* Dark Themed Persistent Navbar with White+Red Logo */}
      <Navbar theme="dark" />

      {/* Cinematic Project Exhibition Hero */}
      <section
        ref={heroRef}
        className="pt-32 sm:pt-40 pb-14 sm:pb-20 px-6 sm:px-10 lg:px-16 border-b border-white/10 select-none"
      >
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <SectionLabel number="01" label="SELECTED WORK / 2026" theme="dark" />

          {/* Heading with Mask Reveal */}
          <div className="mt-2">
            <h1
              ref={headlineRef}
              className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tighter text-white leading-[0.94]"
            >
              <span className="block overflow-hidden pb-1">
                <span className="project-line-inner block">SYSTEMS</span>
              </span>
              <span className="block overflow-hidden pb-1 text-[#FF0000]">
                <span className="project-line-inner block">WE&apos;VE BUILT.</span>
              </span>
            </h1>
          </div>

          {/* Animated Red Line */}
          <div className="w-full h-[2px] bg-white/10 my-6 sm:my-8 overflow-hidden">
            <div ref={redLineRef} className="h-full bg-[#FF0000]" />
          </div>

          {/* Subtext Statement */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <p className="font-sans text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-normal">
              Digital products, growth systems and experiences built around real business problems.
            </p>

            <div className="flex items-center gap-6 font-mono text-xs text-white/50">
              <div>
                <span className="text-white font-bold text-lg block">08</span>
                <span>PRODUCTION CASE STUDIES</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <span className="text-[#FF0000] font-bold text-lg block">100%</span>
                <span>REAL CLIENT SYSTEMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          EDITORIAL PROJECT EXHIBITION (Chapter by Chapter)
      ════════════════════════════════════════════════════════════════════ */}
      <section ref={galleryRef} className="py-20 sm:py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-28 sm:space-y-36">
          {projects.map((proj, idx) => {
            const isImageRight = idx % 2 === 0;

            return (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                data-cursor="EXPLORE →"
                className="project-chapter group cursor-pointer pt-10 sm:pt-14 border-t border-white/15"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isImageRight ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Info Column */}
                  <div
                    className={`project-info lg:col-span-5 ${
                      isImageRight ? "order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    {/* Index & Tag */}
                    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white/40 mb-3">
                      <span className="text-[#FF0000] font-bold text-sm">/{proj.number}</span>
                      <span>•</span>
                      <span>{proj.tag}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-4 group-hover:text-[#FF0000] transition-colors leading-[1.02]">
                      {proj.name}
                    </h2>

                    {/* Summary */}
                    <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-6 font-normal">
                      {proj.summary}
                    </p>

                    {/* Metrics Box */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6 font-mono">
                      {proj.metrics.map((m, i) => (
                        <div key={i}>
                          <span className="text-[9px] text-white/40 uppercase block">{m.label}</span>
                          <span className="text-base sm:text-lg font-bold text-[#FF0000]">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Tag Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.technologies.slice(0, 4).map((t, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] uppercase tracking-wider text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest font-bold">
                      <span className="text-white group-hover:text-[#FF0000] transition-colors">
                        VIEW CASE STUDY
                      </span>
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
                    <div className="project-img-frame relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-white/20 bg-[#141414] shadow-2xl">
                      <Image
                        src={proj.preview}
                        alt={proj.name}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project Bottom CTA */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-white/10 bg-[#040404] text-center select-none">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF0000] font-bold block">
            [READY FOR YOUR REVENUE SYSTEM?]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
            LET&apos;S ENGINEER YOUR DIGITAL FLAGSHIP.
          </h2>
          <p className="font-sans text-base text-white/70 max-w-xl mx-auto font-normal">
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
