"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  variant = "light",
  className = "w-[135px] sm:w-[155px] md:w-[170px] lg:w-[185px] h-auto",
  priority = false,
}: BrandLogoProps) {
  const logoSrc =
    variant === "dark"
      ? "/logos/MightBeMedia_LOGO_TRANSPARENT_DARK.png"
      : "/logos/MightBeMedia_LOGO_TRANSPARENT_LIGHT.png";

  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <Image
        src={logoSrc}
        alt="MightBeMedia"
        width={865}
        height={289}
        priority={priority}
        className="w-full h-auto object-contain pointer-events-none"
      />
    </div>
  );
}
