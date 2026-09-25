"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import { blogPosts } from "@/data/blog";

export default function BlogSection() {
  const featured = blogPosts[0];
  const secondary = blogPosts.slice(1, 4);

  return (
    <section
      id="blog"
      className="py-24 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0A0A0A] border-b border-black/[0.08]"
      aria-label="Insights & Perspectives"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <SectionLabel number="10" label="INSIGHTS & PERSPECTIVES" theme="light" />
            <h2 className="font-display font-black section-headline uppercase text-[#0A0A0A] tracking-tighter">
              THOUGHTS ON
              <br />
              <span className="text-[#FF0000]">BUILDING DIGITAL SYSTEMS.</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF0000] font-bold border-b border-[#FF0000] pb-1 self-start sm:self-auto"
          >
            <span>VIEW ALL 10 ESSAYS</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF0000]" />
          </Link>
        </div>

        {/* Featured Editorial Article */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block p-6 sm:p-10 rounded-2xl bg-[#FAFAFA] border border-black/[0.08] hover:border-[#FF0000] hover:shadow-xl transition-all duration-300 mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-16/10 rounded-xl overflow-hidden bg-black/5">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest bg-[#FF0000] text-white px-3 py-1 rounded-xs">
                  FEATURED ESSAY
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs text-[#0A0A0A]/50">
                <span>{featured.date}</span>
                <span className="text-[#FF0000]">•</span>
                <span>{featured.readTime}</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] group-hover:text-[#FF0000] transition-colors leading-tight uppercase tracking-tight">
                {featured.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#0A0A0A]/70 leading-relaxed font-normal">
                {featured.excerpt}
              </p>

              <div className="pt-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold">
                <span>READ COMPLETE ESSAY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        {/* 3 Secondary Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {secondary.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-xl bg-[#FAFAFA] border border-black/[0.08] hover:border-[#FF0000] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-black/5 mb-4">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="font-mono text-[9px] uppercase font-bold tracking-wider bg-black text-white px-2 py-0.5 rounded-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-[#0A0A0A]/40 mb-2">
                  <span>{post.date}</span>
                  <span>/</span>
                  <span>{post.readTime}</span>
                </div>

                <h4 className="font-display font-bold text-lg text-[#0A0A0A] group-hover:text-[#FF0000] transition-colors line-clamp-2 uppercase tracking-tight mb-2">
                  {post.title}
                </h4>

                <p className="font-sans text-xs text-[#0A0A0A]/60 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF0000] font-semibold">
                <span>READ ARTICLE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
