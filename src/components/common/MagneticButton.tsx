"use client";

import React, { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  cursorBadge?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  target?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  cursorBadge,
  variant = "primary",
  target,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    // Don't apply magnetic effect on touch or small screens
    if (window.innerWidth < 1024) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Dampen movement to max 10px
    const maxOffset = 10;
    const moveX = (distanceX / (rect.width / 2)) * maxOffset;
    const moveY = (distanceY / (rect.height / 2)) * maxOffset;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-[#FFFFFF] text-[#000000] hover:bg-[#E5E5E5] border border-transparent",
    secondary:
      "bg-[#111111] text-[#FFFFFF] hover:bg-[#222222] border border-white/20",
    outline:
      "bg-transparent text-[#FFFFFF] hover:bg-white hover:text-black border border-white/30",
    white:
      "bg-[#000000] text-[#FFFFFF] hover:bg-[#1A1A1A] border border-black/10",
  };

  const baseStyle =
    "relative inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.2em] font-semibold px-7 py-4 transition-all duration-300 ease-out select-none min-h-[48px]";

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorBadge}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? "transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1)" : "none",
      }}
      className="inline-block will-change-transform"
    >
      <div className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent p-0 border-none cursor-pointer">
      {content}
    </button>
  );
}
