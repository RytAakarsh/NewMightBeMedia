"use client";

import React from "react";

interface SectionLabelProps {
  number: string;
  label: string;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionLabel({
  number,
  label,
  theme = "light",
  className = "",
}: SectionLabelProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`inline-flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] mb-6 sm:mb-8 select-none ${
        isDark ? "text-white/60" : "text-black/60"
      } ${className}`}
    >
      <span className="text-[#FF0000] font-bold">[{number}]</span>
      <span className={`w-6 h-px ${isDark ? "bg-white/20" : "bg-black/20"}`} />
      <span className={`font-semibold ${isDark ? "text-white/90" : "text-black/90"}`}>
        {label}
      </span>
    </div>
  );
}
