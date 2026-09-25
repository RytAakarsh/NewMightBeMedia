"use client";

import React, { useState } from "react";
import PageLoader from "@/components/common/PageLoader";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MomentumSection from "@/components/sections/MomentumSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import WhySection from "@/components/sections/WhySection";
import BlogSection from "@/components/sections/BlogSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <main className="relative bg-[#FFFFFF] text-[#0A0A0A] min-h-screen selection:bg-[#FF0000] selection:text-white">
      {/* 01. Initial Editorial Page Loader (Guaranteed single-session execution) */}
      <PageLoader onComplete={() => setLoaderComplete(true)} />

      {/* 02. Minimalist Navigation with real BrandLogo */}
      <Navbar />

      {/* The Continuous Storytelling Architecture */}
      <div className="flex flex-col w-full">
        {/* 03. Unified Hero Composition (Eyebrow + Large Headline + Copy + Integrated Blog Rail) */}
        <HeroSection />

        {/* 04. Selected Clientele & Platforms Marquee */}
        <MarqueeSection />

        {/* 05. About MightBeMedia + Foundation Principles (Integrated) */}
        <AboutSection />

        {/* 06. What We Do / Services (Radial Selector & Pinned Chapters) */}
        <ServicesSection />

        {/* 07. The MightBeMedia Standard (Digital Momentum) */}
        <MomentumSection />

        {/* 08. Specialized Verticals */}
        <IndustriesSection />

        {/* 09. 5-Stage Growth Methodology */}
        <ProcessSection />

        {/* 10. Verified Commercial Outcomes (with Counting Numbers) */}
        <OutcomesSection />

        {/* 11. Partnership Thesis (Why MightBeMedia) */}
        <WhySection />

        {/* 12. Insights / Perspectives Preview */}
        <BlogSection />

        {/* 13. Frequent Inquiries (FAQ Accordion) */}
        <FaqSection />

        {/* 14. Final CTA / Underline Revenue Inquiry Form */}
        <CtaSection />

        {/* 15. Responsive Clamp Footer */}
        <Footer />
      </div>
    </main>
  );
}
