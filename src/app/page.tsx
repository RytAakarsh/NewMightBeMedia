"use client";

import React, { useState } from "react";
import PageLoader from "@/components/common/PageLoader";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BlogRailSection from "@/components/sections/BlogRailSection";
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
      {/* 01. Initial Editorial Page Loader */}
      <PageLoader onComplete={() => setLoaderComplete(true)} />

      {/* 02. Persistent Minimalist Navigation */}
      <Navbar />

      {/* The 14-Chapter Continuous Storytelling Architecture */}
      <div className="flex flex-col w-full">
        {/* 03. Hero Headline & Split Mask Reveal */}
        <HeroSection />

        {/* 04. Hero Blog / Insights Infinite Visual Rail */}
        <BlogRailSection />

        {/* 05. Selected Clientele / Brands Marquee */}
        <MarqueeSection />

        {/* 06. About MightBeMedia + Foundation Principles (Integrated) */}
        <AboutSection />

        {/* 07. What We Do / Services (Radial Desktop Pin & Mobile Chapters) */}
        <ServicesSection />

        {/* 08. The MightBeMedia Standard (Digital Momentum) */}
        <MomentumSection />

        {/* 09. Specialized Verticals */}
        <IndustriesSection />

        {/* 10. 5-Stage Growth Methodology */}
        <ProcessSection />

        {/* 11. Verified Commercial Outcomes */}
        <OutcomesSection />

        {/* 12. Partnership Thesis (Why MightBeMedia) */}
        <WhySection />

        {/* 13. Insights / Perspectives Preview */}
        <BlogSection />

        {/* 14. Frequent Inquiries (FAQ Accordion) */}
        <FaqSection />

        {/* 15. Final CTA / Underline Revenue Inquiry Form */}
        <CtaSection />

        {/* 16. Monolithic Clamp Footer */}
        <Footer />
      </div>
    </main>
  );
}
