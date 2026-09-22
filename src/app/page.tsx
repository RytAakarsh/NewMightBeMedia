"use client";

import React, { useState } from "react";
import PageLoader from "@/components/common/PageLoader";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MomentumSection from "@/components/sections/MomentumSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import WorkSection from "@/components/sections/WorkSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import WhySection from "@/components/sections/WhySection";
import BlogSection from "@/components/sections/BlogSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <main className="relative bg-[#000000] text-[#FAFAFA] min-h-screen">
      {/* Editorial Initial Page Loader */}
      <PageLoader onComplete={() => setLoaderComplete(true)} />

      {/* Persistent Minimalist Navigation */}
      <Navbar />

      {/* The 20-Chapter Continuous Storytelling Architecture */}
      <div className="flex flex-col w-full">
        {/* Chapter 01: Hero Headline & Split Mask Reveal */}
        <HeroSection />

        {/* Chapter 02: Client Roster & Project Marquee */}
        <MarqueeSection />

        {/* Chapter 03: About / Growth Partner Manifesto (Word Scroll Contrast) */}
        <AboutSection />

        {/* Chapter 04: Three Core Principles (Horizontal Editorial Rows) */}
        <PrinciplesSection />

        {/* Chapter 05: Services (Desktop Pinned Chapter Morph & Mobile Verticals) */}
        <ServicesSection />

        {/* Chapter 06: Digital Momentum Manifesto */}
        <MomentumSection />

        {/* Chapter 07: Targeted Industry Verticals (Hover Previews & Accordion) */}
        <IndustriesSection />

        {/* Chapter 08: 5-Stage Growth Methodology (Pinned Progress Timeline) */}
        <ProcessSection />

        {/* Chapter 09: The Real Difference (Why Most Websites Fail vs Our Fix) */}
        <DifferenceSection />

        {/* Chapter 10: Selected Work (Asymmetric Showcases & Case Studies) */}
        <WorkSection />

        {/* Chapter 11: Quantifiable Commercial Outcomes (50+, 10x, 27%) */}
        <OutcomesSection />

        {/* Chapter 12: Why MightBeMedia Manifesto */}
        <WhySection />

        {/* Chapter 13: Editorial Insights & Blog Essays */}
        <BlogSection />

        {/* Chapter 14: Architectural Minimal FAQ Accordion */}
        <FaqSection />

        {/* Chapter 15: Final Visual Climax CTA & Underline Revenue Form */}
        <CtaSection />

        {/* Chapter 16: Monolithic Footer */}
        <Footer />
      </div>
    </main>
  );
}
