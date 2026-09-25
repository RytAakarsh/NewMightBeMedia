"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-300 select-none"
      role="dialog"
      aria-modal="true"
      aria-label={`Case study for ${project.name}`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] text-white border border-white/20 rounded-2xl overflow-y-auto shadow-2xl flex flex-col p-6 sm:p-10 lg:p-12 no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-white/50 uppercase tracking-widest">
            <span className="text-[#FF0000] font-bold">CASE STUDY //</span>
            <span>{project.number}</span>
            <span>•</span>
            <span>{project.tag}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close case study dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Live Link */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            {project.name}
          </h2>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF0000] hover:underline font-bold"
            >
              <span>VISIT LIVE PLATFORM</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed mb-8">
          {project.summary}
        </p>

        {/* Hero Image Showcase */}
        <div className="relative w-full aspect-16/9 rounded-xl overflow-hidden border border-white/15 bg-[#141414] mb-10 shadow-lg">
          <Image
            src={project.preview}
            alt={project.name}
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Quantified Metrics Strip */}
        <div className="grid grid-cols-3 gap-4 p-6 rounded-xl bg-white/[0.03] border border-white/10 mb-10 font-mono">
          {project.metrics.map((metric, i) => (
            <div key={i} className="space-y-1 text-center sm:text-left">
              <span className="text-white/40 uppercase block text-[10px] sm:text-xs">
                {metric.label}
              </span>
              <span className="font-display font-black text-xl sm:text-3xl text-[#FF0000]">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-1">
              [THE CHALLENGE]
            </span>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold block mb-1">
              [OUR SOLUTION]
            </span>
            <p className="font-sans text-sm text-white/90 leading-relaxed font-medium">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Quantifiable Results */}
        <div className="mb-10 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50 block font-bold">
            [VERIFIED COMMERCIAL RESULTS]
          </span>
          <div className="space-y-2.5">
            {project.results.map((res, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF0000] shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-white/80 leading-snug">
                  {res}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, i) => (
              <span
                key={i}
                className="font-mono text-[10px] uppercase tracking-wider text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-xs"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="/#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF0000] hover:underline font-bold"
          >
            <span>BUILD SIMILAR SYSTEM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
