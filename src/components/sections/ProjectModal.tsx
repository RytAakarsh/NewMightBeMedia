"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
      className="fixed inset-0 z-100 flex items-center justify-end bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Case Study: ${project.name}`}
    >
      {/* Backdrop tap to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Drawer */}
      <div className="relative z-10 w-full max-w-3xl h-full bg-[#0a0a0a] border-l border-white/15 overflow-y-auto p-6 sm:p-10 lg:p-12 flex flex-col justify-between shadow-2xl">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">
              EDITORIAL CASE STUDY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mt-1">
              {project.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-8 space-y-8">
          {/* Main Visual Image */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-[#111111]">
            <Image
              src={project.preview}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-lg bg-[#000000] border border-white/10">
            <div>
              <span className="font-mono text-[10px] uppercase text-white/40 block">
                CATEGORY
              </span>
              <span className="font-sans font-medium text-sm text-white">
                {project.category}
              </span>
            </div>
            {project.metrics.map((m, i) => (
              <div key={i}>
                <span className="font-mono text-[10px] uppercase text-white/40 block">
                  {m.label}
                </span>
                <span className="font-display font-bold text-lg text-white">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Detailed Storytelling: Challenge, Approach, Solution */}
          <div className="space-y-6">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                01. THE CHALLENGE
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                02. STRATEGY & APPROACH
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                {project.approach}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                03. TECHNICAL SOLUTION
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                TECHNOLOGIES DEPLOYED
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs uppercase tracking-wider text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[48px] bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors rounded-sm"
          >
            <span>VISIT LIVE PLATFORM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
