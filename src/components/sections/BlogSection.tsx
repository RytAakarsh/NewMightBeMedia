"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import { blogPosts, BlogPost } from "@/data/blog";

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const featured = blogPosts[0];
  const secondary = blogPosts.slice(1);

  return (
    <section
      id="blog"
      className="py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#000000] border-b border-white/10"
      aria-label="Insights & Thoughts on Digital Systems"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="12" label="INSIGHTS & PERSPECTIVES" theme="dark" />

        <div className="mb-16 sm:mb-24">
          <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter">
            THOUGHTS ON
            <br />
            <span className="text-white/40">BUILDING DIGITAL SYSTEMS.</span>
          </h2>
        </div>

        {/* Featured Editorial Article */}
        <div
          onClick={() => setActiveArticle(featured)}
          className="group cursor-pointer pb-16 border-b border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
            <div className="lg:col-span-3">
              <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                FEATURED ESSAY
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-white/60">
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>
            </div>

            <div className="lg:col-span-9">
              <span className="font-mono text-xs uppercase tracking-widest text-white/60 block mb-3">
                [{featured.category}]
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-5xl text-white uppercase tracking-tight group-hover:text-white/80 transition-colors leading-[1.05] mb-6">
                {featured.title}
              </h3>
              <p className="font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mb-8">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white group-hover:underline">
                <span>READ COMPLETE ESSAY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Article List (Divided Horizontal Rows) */}
        <div className="divide-y divide-white/10">
          {secondary.map((post) => (
            <div
              key={post.slug}
              onClick={() => setActiveArticle(post)}
              className="group cursor-pointer py-10 sm:py-14 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                <div className="lg:col-span-3 flex items-center gap-4 font-mono text-xs text-white/40">
                  <span>{post.date}</span>
                  <span>/</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="lg:col-span-7">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-white/50 block mb-2">
                    {post.category}
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h4>
                  <p className="font-sans text-sm text-white/60 mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="lg:col-span-2 flex lg:justify-end items-center">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-6 sm:p-10 animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/15 p-8 sm:p-12 rounded-lg shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                {activeArticle.category} • {activeArticle.readTime}
              </span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="font-mono text-xs uppercase text-white/60 hover:text-white"
              >
                [CLOSE]
              </button>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-6">
              {activeArticle.title}
            </h3>

            <p className="font-sans text-base text-white/80 leading-relaxed mb-6">
              {activeArticle.excerpt}
            </p>

            <p className="font-sans text-sm text-white/60 leading-relaxed">
              In modern digital commerce, traffic is merely potential energy. Unless your platform is
              architected with zero-leakage funnels, high-trust clinical proof, and frictionless booking
              channels, increasing your marketing budget simply amplifies your bounce rate. MightBeMedia
              bridges that divide.
            </p>

            <div className="pt-8 mt-8 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="font-mono text-xs uppercase tracking-widest px-6 py-3 bg-white text-black font-semibold rounded-sm hover:bg-neutral-200"
              >
                RETURN TO INSIGHTS
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
