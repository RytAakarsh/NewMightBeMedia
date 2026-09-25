"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "red";
  className?: string;
  cursorBadge?: string;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  cursorBadge,
  type = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.22;
    const y = (clientY - (top + height / 2)) * 0.22;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "red":
        return "bg-[#FF0000] text-white hover:bg-[#E00000] shadow-md hover:shadow-lg border border-[#FF0000]";
      case "primary":
        return "bg-[#0A0A0A] text-white hover:bg-[#FF0000] hover:border-[#FF0000] border border-[#0A0A0A]";
      case "secondary":
        return "bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white border border-[#E5E5E5]";
      case "outline":
        return "bg-transparent text-[#0A0A0A] hover:text-[#FF0000] border border-[#0A0A0A]/25 hover:border-[#FF0000]";
      default:
        return "bg-[#0A0A0A] text-white hover:bg-[#FF0000]";
    }
  };

  const baseStyles =
    "inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.2em] font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-none transition-colors duration-300 select-none cursor-pointer";

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
      }}
      data-cursor={cursorBadge}
      className="inline-block will-change-transform"
    >
      <div className={`${baseStyles} ${getVariantStyles()} ${className}`}>
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus:outline-none">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block focus:outline-none">
      {content}
    </button>
  );
}
