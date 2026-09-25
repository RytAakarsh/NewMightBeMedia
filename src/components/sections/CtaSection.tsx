"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import SectionLabel from "../common/SectionLabel";

export default function CtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#0A0A0A] border-b border-black/[0.08]"
      aria-label="Initiate Project Inquiry"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="12" label="INITIATE PARTNERSHIP" theme="light" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column: Visual Climax Headline */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="font-display font-black section-headline uppercase text-[#0A0A0A] tracking-tighter leading-[0.94] mb-8">
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                <span className="text-[#FF0000]">THAT GROWS.</span>
              </h2>

              <p className="font-sans text-base sm:text-xl text-[#0A0A0A]/70 leading-relaxed max-w-lg mb-10 font-normal">
                Ready to turn traffic into predictable revenue? Tell us about your business and we&apos;ll formulate a structured conversion plan.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-8 border-t border-black/[0.08] font-mono text-xs text-[#0A0A0A]/60">
              <div>
                <span className="block text-[#FF0000] font-bold mb-1">[DIRECT INQUIRIES]</span>
                <a
                  href="mailto:info@mightbemedia.in"
                  className="text-[#0A0A0A] hover:text-[#FF0000] text-sm sm:text-base font-sans font-semibold transition-colors"
                >
                  info@mightbemedia.in
                </a>
              </div>

              <div>
                <span className="block text-[#FF0000] font-bold mb-1">[PHONE / WHATSAPP]</span>
                <a
                  href="tel:+918851872245"
                  className="text-[#0A0A0A] hover:text-[#FF0000] text-sm sm:text-base font-sans font-semibold transition-colors"
                >
                  +91 88518 72245
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[#0A0A0A]/50 block font-mono text-[11px]">[HEADQUARTERS]</span>
                <p className="text-[#0A0A0A]/80 font-sans text-sm font-medium">India • Operating Globally</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Underline Form */}
          <div className="lg:col-span-6">
            {submitted ? (
              <div className="p-10 sm:p-14 rounded-2xl bg-[#FAFAFA] border border-[#FF0000] text-center space-y-6 animate-in fade-in shadow-lg">
                <div className="w-16 h-16 rounded-full bg-[#FF0000]/10 text-[#FF0000] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-[#0A0A0A] tracking-tight">
                  INQUIRY RECEIVED.
                </h3>
                <p className="font-sans text-sm text-[#0A0A0A]/70 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A MightBeMedia growth architect will review your business model and respond with a structured blueprint within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-xs uppercase tracking-widest text-[#FF0000] hover:underline pt-4 font-bold cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                {/* Field 1: Name */}
                <div className="relative group">
                  <label
                    htmlFor="name"
                    className="block font-mono text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 mb-2 group-focus-within:text-[#FF0000] font-semibold transition-colors"
                  >
                    01 // YOUR NAME *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-[#0A0A0A] placeholder-black/20 font-sans text-base sm:text-lg focus:outline-none focus:border-[#FF0000] transition-colors"
                  />
                </div>

                {/* Field 2: Business Name */}
                <div className="relative group">
                  <label
                    htmlFor="businessName"
                    className="block font-mono text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 mb-2 group-focus-within:text-[#FF0000] font-semibold transition-colors"
                  >
                    02 // BUSINESS / STARTUP NAME *
                  </label>
                  <input
                    id="businessName"
                    required
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    placeholder="e.g. Acme Clinics or SaaS Inc."
                    className="w-full bg-transparent border-b border-black/20 py-3 text-[#0A0A0A] placeholder-black/20 font-sans text-base sm:text-lg focus:outline-none focus:border-[#FF0000] transition-colors"
                  />
                </div>

                {/* Field 3: Email */}
                <div className="relative group">
                  <label
                    htmlFor="email"
                    className="block font-mono text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 mb-2 group-focus-within:text-[#FF0000] font-semibold transition-colors"
                  >
                    03 // WORK EMAIL *
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-[#0A0A0A] placeholder-black/20 font-sans text-base sm:text-lg focus:outline-none focus:border-[#FF0000] transition-colors"
                  />
                </div>

                {/* Field 4: Phone */}
                <div className="relative group">
                  <label
                    htmlFor="phone"
                    className="block font-mono text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 mb-2 group-focus-within:text-[#FF0000] font-semibold transition-colors"
                  >
                    04 // PHONE / WHATSAPP NUMBER
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-[#0A0A0A] placeholder-black/20 font-sans text-base sm:text-lg focus:outline-none focus:border-[#FF0000] transition-colors"
                  />
                </div>

                {/* Field 5: Message */}
                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="block font-mono text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 mb-2 group-focus-within:text-[#FF0000] font-semibold transition-colors"
                  >
                    05 // TELL US ABOUT YOUR PROJECT & GOALS *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your current traffic, bottlenecks, and desired timeline..."
                    className="w-full bg-transparent border-b border-black/20 py-3 text-[#0A0A0A] placeholder-black/20 font-sans text-base sm:text-lg focus:outline-none focus:border-[#FF0000] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full min-h-[56px] bg-[#FF0000] text-white font-mono text-xs uppercase tracking-[0.25em] font-bold flex items-center justify-center gap-3 hover:bg-[#E00000] transition-colors shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <span>{loading ? "TRANSMITTING..." : "START GROWTH"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
