"use client";

import React from "react";
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
  return (
    <main className="relative bg-[#FFFFFF] text-[#0A0A0A] min-h-screen selection:bg-[#FF0000] selection:text-white">
      {/* Minimalist Navigation with real BrandLogo */}
      <Navbar />

      {/* The Continuous Storytelling Architecture */}
      <div className="flex flex-col w-full">
        {/* 01. Unified Hero Composition (Eyebrow + Large Headline + Copy + Integrated Blog Rail) */}
        <HeroSection />

        {/* 02. Selected Clientele & Platforms Marquee */}
        <MarqueeSection />

        {/* 03. About MightBeMedia + Foundation Principles (Integrated) */}
        <AboutSection />

        {/* 04. What We Do / Services (Radial Selector & Pinned Chapters) */}
        <ServicesSection />

        {/* 05. The MightBeMedia Standard (Digital Momentum) */}
        <MomentumSection />

        {/* 06. Specialized Verticals */}
        <IndustriesSection />

        {/* 07. 5-Stage Growth Methodology */}
        <ProcessSection />

        {/* 08. Verified Commercial Outcomes (with Counting Numbers) */}
        <OutcomesSection />

        {/* 09. Partnership Thesis (Why MightBeMedia) */}
        <WhySection />

        {/* 10. Insights / Perspectives Preview */}
        <BlogSection />

        {/* 11. Frequent Inquiries (FAQ Accordion) */}
        <FaqSection />

        {/* 12. Final CTA / Underline Revenue Inquiry Form */}
        <CtaSection />

        {/* 13. Responsive Clamp Footer */}
        <Footer />
      </div>
    </main>
  );
}
