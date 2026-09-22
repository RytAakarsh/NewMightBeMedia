"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import MagneticButton from "../common/MagneticButton";

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

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 bg-[#000000] border-b border-white/10"
      aria-label="Initiate Project Inquiry"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="14" label="INITIATE PARTNERSHIP" theme="dark" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column: Visual Climax Headline */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="font-display font-bold section-headline uppercase text-white tracking-tighter leading-[0.94] mb-8">
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                <span className="text-white/40">THAT GROWS.</span>
              </h2>

              <p className="font-sans text-base sm:text-xl text-white/70 leading-relaxed max-w-lg mb-10">
                Ready to turn traffic into predictable revenue? Tell us about your
                business and we&apos;ll formulate a structured conversion plan.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-8 border-t border-white/10 font-mono text-xs text-white/50">
              <div>
                <span className="block text-white/30 mb-1">DIRECT INQUIRIES:</span>
                <a
                  href="mailto:info@mightbemedia.in"
                  className="text-white hover:underline text-sm sm:text-base font-sans font-medium"
                >
                  info@mightbemedia.in
                </a>
              </div>

              <div>
                <span className="block text-white/30 mb-1">PHONE / WHATSAPP:</span>
                <a
                  href="tel:+918851872245"
                  className="text-white hover:underline text-sm sm:text-base font-sans font-medium"
                >
                  +91 88518 72245
                </a>
              </div>

              <div className="pt-2">
                <span className="text-white/40">HEADQUARTERS:</span>
                <p className="text-white/70 font-sans text-sm">India • Operating Globally</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Underline Form */}
          <div className="lg:col-span-6">
            {submitted ? (
              <div className="p-10 sm:p-16 rounded-xl bg-[#080808] border border-white/20 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white tracking-tight">
                  INQUIRY RECEIVED.
                </h3>
                <p className="font-sans text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A MightBeMedia growth architect will review
                  your business model and respond with a structured blueprint within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white underline pt-4"
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
                    className="block font-mono text-[11px] uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-white transition-colors"
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
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 font-sans text-base sm:text-lg focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Field 2: Business Name */}
                <div className="relative group">
                  <label
                    htmlFor="businessName"
                    className="block font-mono text-[11px] uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-white transition-colors"
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
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 font-sans text-base sm:text-lg focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Field 3: Email */}
                <div className="relative group">
                  <label
                    htmlFor="email"
                    className="block font-mono text-[11px] uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-white transition-colors"
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
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 font-sans text-base sm:text-lg focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Field 4: Phone */}
                <div className="relative group">
                  <label
                    htmlFor="phone"
                    className="block font-mono text-[11px] uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-white transition-colors"
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
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 font-sans text-base sm:text-lg focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Field 5: Message */}
                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="block font-mono text-[11px] uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-white transition-colors"
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
                    placeholder="Describe your current traffic, friction bottlenecks, and desired timeline..."
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 font-sans text-base sm:text-lg focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full min-h-[56px] bg-white text-black font-mono text-xs uppercase tracking-[0.25em] font-bold flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors rounded-sm cursor-pointer disabled:opacity-50"
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
