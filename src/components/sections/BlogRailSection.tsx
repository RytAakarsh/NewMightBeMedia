"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogRailSection() {
  const [isPaused, setIsPaused] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  // Duplicate list to create seamless infinite loop
  const railPosts = [...blogPosts, ...blogPosts, ...blogPosts];

  return (
    <section
      id="insights-rail"
      className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-black/[0.08] overflow-hidden select-none"
      aria-label="Editorial Insights & Perspectives Rail"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#FF0000] font-bold">[01]</span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0A0A0A]/60 font-semibold">
            INSIGHTS & STRATEGIC PERSPECTIVES
          </span>
        </div>
        <Link
          href="/blog"
          className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#FF0000] transition-colors"
        >
          <span>VIEW ALL 10 ESSAYS</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#FF0000]" />
        </Link>
      </div>

      {/* Infinite Horizontal Auto-Scrolling Track */}
      <div
        className="marquee-container relative w-full overflow-x-auto overflow-y-hidden py-3 no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
      >
        <div
          ref={railRef}
          className={`animate-marquee-left flex items-center gap-6 sm:gap-8 px-6 sm:px-10 ${
            isPaused ? "animation-play-state: paused;" : ""
          }`}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {railPosts.map((post, idx) => (
            <Link
              key={`${post.slug}-${idx}`}
              href={`/blog/${post.slug}`}
              data-cursor="READ"
              className="group relative w-[290px] sm:w-[360px] lg:w-[410px] shrink-0 rounded-xl bg-[#FAFAFA] border border-black/[0.08] hover:border-[#FF0000] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Colorful Editorial Image Frame */}
              <div className="relative w-full aspect-16/10 bg-[#161616] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 290px, (max-width: 1024px) 360px, 410px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest bg-[#FF0000] text-white px-2.5 py-1 rounded-sm shadow-xs">
                    {post.category}
                  </span>
                </div>

                {/* Read Time */}
                <div className="absolute bottom-3.5 right-3.5 font-mono text-[10px] text-white/90 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-sm">
                  {post.readTime}
                </div>
              </div>

              {/* Text & Content Block */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#0A0A0A]/40 uppercase tracking-wider mb-2.5">
                    <span>{post.date}</span>
                    <span className="text-[#FF0000]">0{(idx % blogPosts.length) + 1}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#0A0A0A] group-hover:text-[#FF0000] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/60 line-clamp-2 mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#0A0A0A]/70 group-hover:text-[#FF0000] transition-colors">
                  <span className="font-semibold">READ ESSAY</span>
                  <div className="w-7 h-7 rounded-full bg-black/[0.04] group-hover:bg-[#FF0000] group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
