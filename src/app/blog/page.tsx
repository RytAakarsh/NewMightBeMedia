"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/common/SectionLabel";
import { blogPosts } from "@/data/blog";

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "Growth Systems", "Web Engineering", "Software & AI", "SEO & Marketing"];

  const filteredPosts =
    selectedCategory === "ALL"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featured = filteredPosts[0] || blogPosts[0];
  const others = filteredPosts.slice(1);

  return (
    <main className="relative bg-[#FFFFFF] text-[#0A0A0A] min-h-screen selection:bg-[#FF0000] selection:text-white">
      {/* Persistent Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-16 sm:pb-20 px-6 sm:px-10 lg:px-16 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto">
          <SectionLabel number="01" label="INSIGHTS & PERSPECTIVES" theme="light" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-4">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tighter text-[#0A0A0A] leading-[0.95]">
                THOUGHTS ON
                <br />
                <span className="text-[#FF0000]">BUILDING DIGITAL SYSTEMS.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#0A0A0A]/70 mt-6 max-w-2xl leading-relaxed font-normal">
                Essays on conversion architecture, full-stack engineering, high-intent SEO, artificial intelligence, and compounding business growth.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#0A0A0A]/60">
              <span className="text-[#FF0000] font-bold">10</span>
              <span>IN-DEPTH RESEARCH ESSAYS</span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-10 mt-10 border-t border-black/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#FF0000] text-white font-bold shadow-xs"
                    : "bg-black/[0.04] text-[#0A0A0A]/70 hover:bg-black/10 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Editorial Post */}
      {featured && (
        <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-16 border-b border-black/[0.08]">
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block p-6 sm:p-10 rounded-2xl bg-[#FAFAFA] border border-black/[0.08] hover:border-[#FF0000] hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-6 relative aspect-16/10 rounded-xl overflow-hidden bg-black/5 shadow-md">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest bg-[#FF0000] text-white px-3 py-1 rounded-xs">
                      {featured.category}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#0A0A0A]/50">
                    <span>{featured.date}</span>
                    <span className="text-[#FF0000]">•</span>
                    <span>{featured.readTime}</span>
                  </div>

                  <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#0A0A0A] group-hover:text-[#FF0000] transition-colors leading-tight uppercase tracking-tight">
                    {featured.title}
                  </h2>

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
          </div>
        </section>
      )}

      {/* Grid of All Other Articles */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-6 rounded-2xl bg-[#FAFAFA] border border-black/[0.08] hover:border-[#FF0000] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-black/5 mb-5 shadow-xs">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[9px] uppercase font-bold tracking-wider bg-black text-white px-2.5 py-0.5 rounded-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[11px] text-[#0A0A0A]/40 mb-2.5">
                    <span>{post.date}</span>
                    <span className="text-[#FF0000] font-bold">0{idx + 2}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#0A0A0A] group-hover:text-[#FF0000] transition-colors line-clamp-2 uppercase tracking-tight mb-2.5 leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/60 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-black/[0.06] flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#FF0000] font-bold">
                  <span>{post.readTime}</span>
                  <div className="w-8 h-8 rounded-full bg-black/[0.04] group-hover:bg-[#FF0000] group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
