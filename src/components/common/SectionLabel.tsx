import React from "react";

interface SectionLabelProps {
  number?: string;
  label: string;
  theme?: "dark" | "light";
}

export default function SectionLabel({
  number,
  label,
  theme = "dark",
}: SectionLabelProps) {
  const isLight = theme === "light";

  return (
    <div className="flex items-center gap-4 select-none mb-6">
      {number && (
        <span
          className={`font-mono text-xs tracking-wider ${
            isLight ? "text-neutral-400" : "text-white/40"
          }`}
        >
          [{number}]
        </span>
      )}
      <span
        className={`font-mono text-xs uppercase tracking-[0.25em] font-medium ${
          isLight ? "text-neutral-600" : "text-white/60"
        }`}
      >
        {label}
      </span>
      <div
        className={`h-px flex-1 max-w-[120px] ${
          isLight ? "bg-neutral-200" : "bg-white/10"
        }`}
      />
    </div>
  );
}
