// @ts-nocheck
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./proposal.css";

// React element helpers
const u = {
  jsx: (type, props) => {
    if (!props) return React.createElement(type);
    const { children, ...rest } = props;
    return React.createElement(type, rest, children);
  },
  jsxs: (type, props) => {
    if (!props) return React.createElement(type);
    const { children, ...rest } = props;
    if (Array.isArray(children)) {
      return React.createElement(type, rest, ...children);
    }
    return React.createElement(type, rest, children);
  },
  Fragment: React.Fragment,
};

const _ = React;
const a4 = "/projects/MBM_ICON.png";

export default function ProposalPage() {
  const [e, t] = useState(0); // currentSlide
  const [n, r] = useState(false); // isPresenting
  const [o, i] = useState(false); // isAiLabOpen
  const [s, l] = useState("chatbot"); // aiTab
  const [d, f] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm ClearSkin AI, your automated reception assistant. How can I help you find medical skincare support today?",
    },
  ]);
  const [p, m] = useState([
    {
      role: "assistant",
      content:
        'Ask me anything about our deliverables, pricing structure, or support coverage! For instance: "What does the ₹20,000 package include?" or "Explain the retainer fee."',
    },
  ]);
  const [h, g] = useState("");
  const [w, y] = useState("");
  const [T, v] = useState("");
  const [x, E] = useState("");
  const [b, C] = useState(false);
  const [N, A] = useState(false);
  const [k, I] = useState(false);
  const P = useRef([]);
  const O = 17;

  const U = () => {
    e < O - 1 && t(e + 1);
  };
  const q = () => {
    e > 0 && t(e - 1);
  };

  useEffect(() => {
    const handleKey = (K) => {
      if (n) {
        if (K.key === "ArrowRight" || K.key === " ") {
          K.preventDefault();
          U();
        } else if (K.key === "ArrowLeft") {
          K.preventDefault();
          q();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [n, e]);

  useEffect(() => {
    if (n) t(0);
  }, [n]);

  const S = async ($, K) => {
    return "Thank you for asking! MightBeMedia engineers dedicated AI chatbots and revenue growth systems for Clear Skin Clinic with direct WhatsApp appointment booking.";
  };

  const F = async () => {
    if (!h.trim()) return;
    const userMsg = { role: "user", content: h };
    f((prev) => [...prev, userMsg]);
    g("");
    I(true);
    setTimeout(() => {
      f((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Thank you for inquiring! At Clear Skin Clinic, Dr. Nikita Baid provides customized dermatological assessments. Would you like to schedule a consultation via WhatsApp?",
        },
      ]);
      I(false);
    }, 600);
  };

  const V = async () => {
    if (!w.trim()) return;
    const userMsg = { role: "user", content: w };
    m((prev) => [...prev, userMsg]);
    y("");
    I(true);
    setTimeout(() => {
      m((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "The MightBeMedia proposal includes a one-time ₹20,000 setup (AI Skincare Website, Meta Ads Setup, Patient Chatbot, Local SEO, 3 Years Technical Support, and Google Review QR Engine) plus an optional ₹10,000/mo growth retainer.",
        },
      ]);
      I(false);
    }, 600);
  };

  const z = async () => {
    if (T.trim()) {
      C(true);
      A(true);
      E("Generating outline...");
      setTimeout(() => {
        E(
          "HOOK: Struggling with persistent skin concerns? Here is what dermatologists actually recommend...\n\nVISUAL: Highlighting clinical care and genuine before/after transformations with Dr. Nikita Baid.\n\nCTA: Tap the link in bio to book your clinical consultation at Clear Skin Clinic!"
        );
        C(false);
      }, 700);
    }
  };

  const R = (text) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(text);
      const K = document.createElement("div");
      K.className =
        "fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#E8FF1C] text-black font-mono text-xs font-bold px-4 py-2 rounded-full shadow-2xl z-50 animate-bounce";
      K.textContent = "COPIED TO CLIPBOARD!";
      document.body.appendChild(K);
      setTimeout(() => K.remove(), 2000);
    }
  };

  const po = [
    // Slide 1
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"neon-glow-primary -top-0 -right-40 w-[600px] h-[200px]"}),u.jsx("div",{className:"neon-glow-violet -bottom-32 -left-32 w-[500px] h-[200px]"}),u.jsx("div",{className:"dot-matrix"}),u.jsx("div",{className:"grid-blueprint"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-white/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("img",{src:a4,alt:"MightBeMedia Logo",className:"w-8 h-8 flex-shrink-0"}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-white",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-neonLime font-bold bg-neonLime/10 px-3 py-1 rounded-full border border-neonLime/20",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-7 flex flex-col justify-center",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[u.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-neonLime animate-pulse"}),u.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.5em] text-neonLime/90",children:"We Don't Build Marketing System"})]}),u.jsxs("h1",{className:"font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white mb-5",children:["We Build ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-neonLime via-emerald-400 to-teal-400",children:"Revenue System"}),"."]}),u.jsx("p",{className:"text-white/60 text-sm sm:text-base max-w-[500px] leading-relaxed font-light mb-6",children:"A customized premium conversion infrastructure to transform clinic attention into predictable revenue flow."}),u.jsx("div",{className:"flex items-center gap-4",children:u.jsxs("div",{className:"bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl flex items-center gap-3",children:[u.jsx("i",{className:"fa-solid fa-shield-halved text-neonLime"}),u.jsx("span",{className:"text-xs text-white/80 font-mono",children:"Your Revenue Growth Proposal"})]})})]}),u.jsxs("div",{className:"col-span-12 lg:col-span-5 relative flex justify-center",children:[u.jsx("div",{className:"absolute w-[300px] h-[300px] bg-neonLime/15 rounded-full filter blur-[40px] -z-10 animate-pulse"}),u.jsxs("div",{className:"glass-card-dark neon-card-highlight p-6 rounded-[24px] w-full max-w-[340px] relative overflow-hidden transition-all duration-300 hover:shadow-neonGlow",children:[u.jsx("div",{className:"absolute top-3 right-3 text-[9px] text-neonLime/60 font-mono px-2 py-0.5 bg-neonLime/10 rounded-full",children:"SYSTEM: ACTIVE"}),u.jsx("img",{src:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80",alt:"Premium abstract glass sculpture",className:"w-full h-[180px] object-cover rounded-xl mb-4 border border-white/10 shadow-inner",onError:$=>{$.currentTarget.style.display="none"}}),u.jsx("div",{className:"flex justify-between items-center",children:u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-white/40 block tracking-wider uppercase",children:"CLIENT SPECIFICATION"}),u.jsx("span",{className:"text-xs font-semibold text-white tracking-wide",children:"MightBeMedia Proposal"})]})})]})]})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-white/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono hover:text-neonLime transition-colors cursor-pointer",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"01 / 17"})]})]}),

    // Slide 2
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-black font-bold bg-neonLime px-3 py-1 rounded-full",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-7",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-black bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block",children:"WHO WE ARE"}),u.jsx("h2",{className:"font-display font-bold text-3xl lg:text-4xl tracking-tight mb-3",children:"Who We Are"}),u.jsx("p",{className:"text-brandDark/80 text-sm leading-relaxed mb-4 font-normal",children:"At MightBeMedia, we help clinics, doctors, healthcare brands, and local businesses transform their social media attention into predictable patient bookings. Most agencies focus entirely on cosmetic metrics like views. We focus single-mindedly on conversions and revenue."}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5",children:[u.jsxs("div",{className:"glass-card-light p-3.5 border-t-2 border-black/85 hover:border-neonLime transition-all duration-300",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-black/50",children:"01"}),u.jsx("h4",{className:"font-display font-bold text-xs mt-1 mb-1 text-black",children:"Generate Consultations"}),u.jsx("p",{className:"text-[10px] text-black/75 leading-normal font-medium",children:"Turning casual lookers into verified booked appointments."})]}),u.jsxs("div",{className:"glass-card-light p-3.5 border-t-2 border-black/85 hover:border-neonLime transition-all duration-300",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-black/50",children:"02"}),u.jsx("h4",{className:"font-display font-bold text-xs mt-1 mb-1 text-black",children:"Generate Trust"}),u.jsx("p",{className:"text-[10px] text-black/75 leading-normal font-medium",children:"Structuring high-authority social proof and system loops."})]}),u.jsxs("div",{className:"glass-card-light p-3.5 border-t-2 border-black/85 hover:border-neonLime transition-all duration-300",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-black/50",children:"03"}),u.jsx("h4",{className:"font-display font-bold text-xs mt-1 mb-1 text-black",children:"Generate Revenue"}),u.jsx("p",{className:"text-[10px] text-black/75 leading-normal font-medium",children:"Direct, measurable impact on the clinic's monthly balance sheet."})]})]})]}),u.jsx("div",{className:"col-span-12 lg:col-span-5",children:u.jsxs("div",{className:"rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative h-[200px] sm:h-[250px] lg:h-[300px]",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80",alt:"Luxury clinic lobby interior",className:"w-full h-full object-cover",onError:$=>{$.currentTarget.style.display="none"}}),u.jsxs("div",{className:"absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-white flex items-center gap-2",children:[u.jsx("i",{className:"fa-solid fa-hospital-user text-neonLime text-xs"}),u.jsx("span",{className:"text-[9px] font-mono tracking-wide uppercase",children:"Dermatology Standard"})]})]})})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"02 / 17"})]})]}),

    // Slide 3
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"neon-glow-red -bottom-40 -left-40 w-[500px] h-[500px]"}),u.jsx("div",{className:"dot-matrix"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-white/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-neonLime flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-white",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-6",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-red-500 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-md mb-3 inline-block",children:"THE SYSTEM BOTTLENECK"}),u.jsx("h2",{className:"font-display font-bold text-3xl lg:text-4xl tracking-tight mb-3",children:"The Real Problem"}),u.jsx("p",{className:"text-white/60 text-sm leading-relaxed mb-4 font-light",children:"Clinics routinely exhaust resources creating and editing video content, thinking that virality solves customer acquisition. Thousands of views, but zero consultations."}),u.jsx("div",{className:"bg-red-500/5 border-l-4 border-red-500 p-4 rounded-r-xl",children:u.jsx("p",{className:"text-white/80 text-xs leading-relaxed",children:"The actual barrier isn't content reach. The real issue is the complete lack of a Conversion System behind your social media attention."})})]}),u.jsx("div",{className:"col-span-12 lg:col-span-6 flex justify-end w-full",children:u.jsxs("div",{className:"glass-card-dark p-6 rounded-2xl border border-red-500/30 w-full max-w-[400px] shadow-2xl relative overflow-hidden",children:[u.jsx("div",{className:"absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"}),u.jsxs("div",{className:"flex items-center gap-4 mb-5",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 text-base border border-red-500/30",children:u.jsx("i",{className:"fa-solid fa-triangle-exclamation"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] tracking-widest text-red-400 font-mono block uppercase font-bold",children:"THE VIRALITY TRAP"}),u.jsx("h3",{className:"text-sm font-bold",children:"Misleading Metric Correlation"})]})]}),u.jsx("blockquote",{className:"text-lg font-display font-light italic text-white/90 leading-snug mb-5 border-l-2 border-neonLime pl-3",children:'"More Views automatically equals More Patients"'}),u.jsxs("div",{className:"flex items-center justify-between text-[10px] text-white/40 font-mono pt-3 border-t border-white/5",children:[u.jsx("span",{children:"REVENUE CONVERSION"}),u.jsx("span",{className:"text-red-500 font-bold",children:"0% ACCELERATION"})]})]})})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-white/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"03 / 17"})]})]}),

    // Slide 4
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-5",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block",children:"FRICTION TUNNEL ANALYSIS"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight mb-3",children:"The Current Friction Flow"}),u.jsx("p",{className:"text-brandDark/80 text-sm leading-relaxed mb-4",children:"Your audience hits massive friction points on their way from discovery to clinic check-in."}),u.jsxs("div",{className:"glass-card-light p-4 border border-red-200 bg-red-50/40 rounded-xl flex items-start gap-3",children:[u.jsx("div",{className:"w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center text-red-500 text-base flex-shrink-0",children:u.jsx("i",{className:"fa-solid fa-chart-line-down"})}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-display font-bold text-xs text-red-900 mb-0.5",children:"Massive Attention Decay"}),u.jsx("p",{className:"text-[10px] text-red-700 leading-relaxed",children:"With a raw conversion rate, the vast majority of interested viewers completely drop off before ever booking."})]})]})]}),u.jsxs("div",{className:"col-span-12 lg:col-span-7 flex flex-col gap-2.5 pl-0 lg:pl-6 w-full",children:[u.jsxs("div",{className:"flex items-center gap-3 w-full",children:[u.jsx("div",{className:"w-20 text-right font-mono text-[9px] text-brandDark/40 uppercase tracking-widest flex-shrink-0",children:"Phase 01"}),u.jsxs("div",{className:"flex-1 bg-brandDark text-white px-4 sm:px-5 py-2 rounded-full flex justify-between items-center transition-all duration-300 hover:scale-[1.015] shadow-sm",children:[u.jsx("span",{className:"text-xs font-semibold tracking-wider",children:"10k Views"}),u.jsx("span",{className:"text-[9px] font-mono text-neonLime bg-white/10 px-2 py-0.5 rounded",children:"Discovery"})]})]}),u.jsxs("div",{className:"flex items-center gap-3 w-full",children:[u.jsx("div",{className:"w-20 text-right font-mono text-[9px] text-brandDark/40 uppercase tracking-widest flex-shrink-0",children:"Phase 02"}),u.jsxs("div",{className:"flex-1 max-w-[85%] bg-brandDark/90 text-white px-4 sm:px-5 py-2 rounded-full flex justify-between items-center transition-all duration-300 hover:scale-[1.015] shadow-sm",children:[u.jsx("span",{className:"text-xs font-semibold tracking-wider",children:"200 Likes"}),u.jsx("span",{className:"text-[9px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded",children:"Interest"})]})]}),u.jsxs("div",{className:"flex items-center gap-3 w-full",children:[u.jsx("div",{className:"w-20 text-right font-mono text-[9px] text-brandDark/40 uppercase tracking-widest flex-shrink-0",children:"Phase 03"}),u.jsxs("div",{className:"flex-1 max-w-[70%] bg-brandDark/80 text-white px-4 sm:px-5 py-2 rounded-full flex justify-between items-center transition-all duration-300 hover:scale-[1.015] shadow-sm",children:[u.jsx("span",{className:"text-xs font-semibold tracking-wider",children:"50 Visits"}),u.jsx("span",{className:"text-[9px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded",children:"Intention"})]})]}),u.jsxs("div",{className:"flex items-center gap-3 w-full",children:[u.jsx("div",{className:"w-20 text-right font-mono text-[9px] text-brandDark/40 uppercase tracking-widest flex-shrink-0",children:"Phase 04"}),u.jsxs("div",{className:"flex-1 max-w-[55%] bg-brandDark/70 text-white px-4 sm:px-5 py-2 rounded-full flex justify-between items-center transition-all duration-300 hover:scale-[1.015] shadow-sm",children:[u.jsx("span",{className:"text-xs font-semibold tracking-wider",children:"15 DMs"}),u.jsx("span",{className:"text-[9px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded",children:"Inquiry"})]})]}),u.jsxs("div",{className:"flex items-center gap-3 w-full",children:[u.jsx("div",{className:"w-20 text-right font-mono text-[9px] text-brandDark/40 uppercase tracking-widest flex-shrink-0",children:"Final Goal"}),u.jsxs("div",{className:"flex-1 max-w-[40%] bg-red-600 text-white px-4 sm:px-5 py-2 rounded-full flex justify-between items-center shadow-md transition-all duration-300 hover:scale-[1.015]",children:[u.jsx("span",{className:"text-xs font-bold tracking-wider",children:"1-2 Patients"}),u.jsx("span",{className:"text-[9px] font-mono bg-black/20 px-2 py-0.5 rounded",children:"Check-In"})]})]})]})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"04 / 17"})]})]}),

    // Slide 5
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 w-full",children:[u.jsxs("div",{className:"text-center mb-4",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-red-500 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-md inline-block mb-1.5",children:"REVENUE AUDIT REPORT"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight text-brandDark",children:"The Hidden Revenue Leak"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch w-full",children:[u.jsx("div",{className:"glass-card-light p-5 border-t-4 border-emerald-500 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow",children:u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-3",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500",children:u.jsx("i",{className:"fa-solid fa-circle-check text-sm"})}),u.jsx("h3",{className:"font-display font-bold text-sm text-brandDark",children:"What patients actually do:"})]}),u.jsx("p",{className:"text-[10px] uppercase tracking-wider font-semibold text-emerald-600 mb-3",children:"They are ready for skincare help, but..."}),u.jsxs("ul",{className:"space-y-2.5",children:[u.jsxs("li",{className:"flex items-center gap-2.5 text-xs text-brandDark/70",children:[u.jsx("i",{className:"fa-solid fa-check text-emerald-500"})," Watch your highly-engaging reel video"]}),u.jsxs("li",{className:"flex items-center gap-2.5 text-xs text-brandDark/70",children:[u.jsx("i",{className:"fa-solid fa-check text-emerald-500"})," Visit your clinic's social media profile"]}),u.jsxs("li",{className:"flex items-center gap-2.5 text-xs text-brandDark/70",children:[u.jsx("i",{className:"fa-solid fa-check text-emerald-500"})," Become actively interested in procedures"]})]})]})}),u.jsx("div",{className:"glass-card-light p-5 border-t-4 border-red-500 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow",children:u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-3",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500",children:u.jsx("i",{className:"fa-solid fa-circle-xmark text-sm"})}),u.jsx("h3",{className:"font-display font-bold text-sm text-brandDark",children:"Where the process breaks down:"})]}),u.jsx("p",{className:"text-[10px] uppercase tracking-wider font-semibold text-red-600 mb-3",children:"Critical structural friction points"}),u.jsxs("ul",{className:"space-y-2.5",children:[u.jsxs("li",{className:"flex items-center gap-2.5 text-xs text-brandDark/70",children:[u.jsx("i",{className:"fa-solid fa-xmark text-red-500 font-bold"})," No proper optimized clinic landing page"]}),u.jsxs("li",{className:"flex items-center gap-2.5 text-xs text-brandDark/70",children:[u.jsx("i",{className:"fa-solid fa-xmark text-red-500 font-bold"})," No instant guidance or response on profile"]}),u.jsxs("li",{className:"flex items-center gap-2.5 text-xs text-brandDark/70",children:[u.jsx("i",{className:"fa-solid fa-xmark text-red-500 font-bold"})," No streamlined, 24/7 appointment system"]}),u.jsxs("li",{className:"flex items-center gap-2.5 text-xs text-brandDark/70",children:[u.jsx("i",{className:"fa-solid fa-xmark text-red-500 font-bold"})," No automated trust-building or follow-ups"]})]})]})})]})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"05 / 17"})]})]}),

    // Slide 6
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsx("div",{className:"content-area my-auto z-10 w-full",children:u.jsxs("div",{className:"grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-5",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block",children:"ATTENTION ANALYSIS"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight mb-3",children:"Attention Is Not The Problem"}),u.jsx("p",{className:"text-brandDark/70 text-sm leading-relaxed mb-4 font-light",children:"Every month, thousands of local prospective patients with active skin conditions are watching your content, finding your clinic profile, and then drifting away."})]}),u.jsxs("div",{className:"col-span-12 lg:col-span-7 flex flex-col justify-center w-full",children:[u.jsx("div",{className:"relative bg-brandDark/5 p-4 sm:p-5 rounded-2xl border border-brandDark/10 w-full",children:u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-center relative z-10",children:[u.jsxs("div",{className:"bg-white p-3 rounded-xl shadow border border-brandDark/5",children:[u.jsx("span",{className:"text-[9px] font-mono text-brandDark/40",children:"STEP 01"}),u.jsx("h4",{className:"font-display font-bold text-xs mt-0.5 mb-0.5 text-brandDark",children:"Raw Audience"}),u.jsx("div",{className:"w-5 h-5 rounded-full bg-brandDark/10 mx-auto mt-1 flex items-center justify-center text-[9px]",children:u.jsx("i",{className:"fa-solid fa-users text-brandDark"})})]}),u.jsxs("div",{className:"bg-white p-3 rounded-xl shadow border border-brandDark/5",children:[u.jsx("span",{className:"text-[9px] font-mono text-brandDark/40",children:"STEP 02"}),u.jsx("h4",{className:"font-display font-bold text-xs mt-0.5 mb-0.5 text-brandDark",children:"Active Interest"}),u.jsx("div",{className:"w-5 h-5 rounded-full bg-brandDark/10 mx-auto mt-1 flex items-center justify-center text-[9px]",children:u.jsx("i",{className:"fa-solid fa-heart text-brandDark"})})]}),u.jsxs("div",{className:"bg-red-500 text-white p-3 rounded-xl shadow border border-red-600",children:[u.jsx("span",{className:"text-[8px] font-mono tracking-wider block text-white/80 font-bold",children:"CRITICAL GAP"}),u.jsx("h4",{className:"font-display font-bold text-[9px] mt-0.5 leading-tight mb-0.5",children:"MISSING BRIDGE"}),u.jsx("div",{className:"w-5 h-5 rounded-full bg-white/20 mx-auto mt-1 flex items-center justify-center text-[9px]",children:u.jsx("i",{className:"fa-solid fa-bolt text-white"})})]}),u.jsxs("div",{className:"bg-brandDark text-white p-3 rounded-xl shadow border border-brandDark",children:[u.jsx("span",{className:"text-[9px] font-mono text-white/50",children:"STEP 03"}),u.jsx("h4",{className:"font-display font-bold text-xs mt-0.5 mb-0.5 text-white",children:"Booked"}),u.jsx("div",{className:"w-5 h-5 rounded-full bg-neonLime text-brandDark mx-auto mt-1 flex items-center justify-center text-[9px]",children:u.jsx("i",{className:"fa-solid fa-calendar-check"})})]})]})}),u.jsx("div",{className:"text-center mt-3",children:u.jsxs("span",{className:"text-[10px] font-mono tracking-wider text-brandDark/50 uppercase",children:[u.jsx("i",{className:"fa-solid fa-circle-chevron-right text-neonLime mr-1"})," Your End-Goal is directly linked to the bridge"]})})]})]})}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"06 / 17"})]})]}),

    // Slide 7
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 w-full",children:[u.jsxs("div",{className:"text-center mb-5",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md inline-block mb-1.5",children:"INFRASTRUCTURE BLUEPRINT"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight text-brandDark",children:"The MightBeMedia Revenue System™"}),u.jsx("p",{className:"text-brandDark/70 text-xs max-w-[650px] mx-auto mt-1 leading-relaxed",children:"Instead of simply drafting content and hoping for views, we build an entire revenue ecosystem. A streamlined patient acquisition machine operating 24 hours a day, 7 days a week, continuously nurturing clinic interest."})]}),u.jsxs("div",{className:"w-full",children:[u.jsx("span",{className:"text-[9px] uppercase tracking-[0.2em] font-mono text-brandDark/50 block text-center mb-2.5",children:"The Flow Optimization System"}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 w-full",children:[u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-md border border-brandDark/5 flex flex-col justify-between hover:border-neonLime transition-all duration-300 cursor-pointer",onClick:()=>{i(!0),l("chatbot")},children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-start",children:[u.jsx("span",{className:"text-[10px] font-mono text-brandDark/35 block",children:"MODULE 01"}),u.jsx("span",{className:"text-[9px] font-bold bg-neonLime/30 text-black px-1.5 py-0.5 rounded animate-pulse",children:"LIVE DEMO"})]}),u.jsx("h4",{className:"font-display font-bold text-sm mt-1.5 mb-1.5 text-brandDark",children:"Convert Viewers"})]}),u.jsx("div",{className:"bg-brandDark/5 rounded-lg p-2 text-center text-[11px] font-semibold text-brandDark/70",children:"→ Into Inquiries"})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-md border border-brandDark/5 flex flex-col justify-between hover:border-neonLime transition-all duration-300",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono text-brandDark/35 block",children:"MODULE 02"}),u.jsx("h4",{className:"font-display font-bold text-sm mt-1.5 mb-1.5 text-brandDark",children:"Nurture Inquiries"})]}),u.jsx("div",{className:"bg-brandDark/5 rounded-lg p-2 text-center text-[11px] font-semibold text-brandDark/70",children:"→ Into Booked Consultations"})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-md border border-brandDark/5 flex flex-col justify-between hover:border-neonLime transition-all duration-300",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-mono text-brandDark/35 block",children:"MODULE 03"}),u.jsx("h4",{className:"font-display font-bold text-sm mt-1.5 mb-1.5 text-brandDark",children:"Deliver Services"})]}),u.jsx("div",{className:"bg-brandDark/5 rounded-lg p-2 text-center text-[11px] font-semibold text-brandDark/70",children:"System Loop Integration Completed"})]})]})]})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"07 / 17"})]})]}),

    // Slide 8
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-6",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block",children:"PRODUCT SUITE"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight mb-3",children:"Personalised Premium Website"}),u.jsx("p",{className:"text-brandDark/70 text-sm leading-relaxed mb-4 font-light",children:"A highly optimized premium-tier skincare website structured from the ground up to rank and convert visitors into patients."}),u.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2.5",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs text-brandDark/80 font-medium",children:[u.jsx("i",{className:"fa-solid fa-square-check text-emerald-500"})," Premium Design"]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs text-brandDark/80 font-medium",children:[u.jsx("i",{className:"fa-solid fa-square-check text-emerald-500"})," WhatsApp System"]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs text-brandDark/80 font-medium",children:[u.jsx("i",{className:"fa-solid fa-square-check text-emerald-500"})," Treatment Pages"]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs text-brandDark/80 font-medium",children:[u.jsx("i",{className:"fa-solid fa-square-check text-emerald-500"})," SEO Optimization"]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs text-brandDark/80 font-medium",children:[u.jsx("i",{className:"fa-solid fa-square-check text-emerald-500"})," Before/After Slider"]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs text-brandDark/80 font-medium",children:[u.jsx("i",{className:"fa-solid fa-square-check text-emerald-500"})," Fast & Responsive"]})]})]}),u.jsx("div",{className:"col-span-12 lg:col-span-6 w-full",children:u.jsxs("div",{className:"glass-card-light overflow-hidden rounded-xl shadow-2xl border border-brandDark/10 h-[260px] flex flex-col w-full",children:[u.jsxs("div",{className:"bg-brandDark/5 px-3 py-2 border-b border-brandDark/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex gap-1",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-red-400"}),u.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),u.jsx("div",{className:"bg-white px-6 py-0.5 rounded text-[8px] text-brandDark/40 font-mono tracking-wide",children:"https://clearskinclinic.com"}),u.jsx("div",{className:"w-8"})]}),u.jsxs("div",{className:"flex-1 p-4 bg-white relative overflow-hidden flex flex-col justify-between",children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsx("span",{className:"font-display font-bold text-xs tracking-tight text-black",children:"Clear Skin Clinic"}),u.jsx("span",{className:"text-[8px] bg-brandDark text-white px-2 py-0.5 rounded font-bold uppercase",children:"Book Appointment"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-1 flex-1",children:[u.jsxs("div",{className:"flex flex-col justify-center",children:[u.jsx("h3",{className:"font-display font-bold text-xs leading-tight mb-1 text-black",children:"Premium Skincare"}),u.jsx("p",{className:"text-[8px] text-brandDark/55 leading-normal",children:"Schedule professional dermatological check-ups."}),u.jsx("div",{className:"mt-2 flex gap-1",children:u.jsxs("div",{className:"bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[8px] font-bold text-emerald-700 flex items-center gap-1",children:[u.jsx("i",{className:"fa-brands fa-whatsapp"})," WhatsApp"]})})]}),u.jsxs("div",{className:"bg-brandDark/5 rounded-lg border border-brandDark/5 p-2 flex flex-col justify-center items-center text-center",children:[u.jsx("div",{className:"text-[8px] font-mono text-brandDark/40",children:"Dermatologist Rating"}),u.jsx("div",{className:"text-xs font-display font-bold text-black mt-0.5",children:"4.9 ★★★★★"}),u.jsx("div",{className:"text-[7px] text-emerald-600 font-bold mt-0.5",children:"Verified Clinical Trust"})]})]})]})]})})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono text-brandDark/50 font-semibold uppercase",children:"The MightBeMedia Revenue System™"}),u.jsx("span",{className:"font-mono",children:"08 / 17"})]})]}),

    // Slide 9
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-7",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block",children:"GUARANTEED CONTINUITY"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight mb-1 text-brandDark",children:"3 Years Technical Support"}),u.jsx("p",{className:"text-brandDark/90 font-semibold text-sm mb-3",children:"Zero Technical Worry for Clear Skin Clinic."}),u.jsx("p",{className:"text-brandDark/70 text-xs leading-relaxed mb-4 font-light",children:"Websites require updates, backups, security patches, and periodic optimization to avoid traffic crashes. We handle everything behind the scenes so you can focus entirely on patients. Complete peace of mind. No hidden retainer fees."}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[u.jsxs("div",{className:"bg-white p-3 rounded-lg border border-brandDark/5 text-center shadow-sm",children:[u.jsx("i",{className:"fa-solid fa-wrench text-brandDark text-sm mb-1"}),u.jsx("h4",{className:"font-display font-bold text-[10px] text-brandDark",children:"Maintenance"})]}),u.jsxs("div",{className:"bg-white p-3 rounded-lg border border-brandDark/5 text-center shadow-sm",children:[u.jsx("i",{className:"fa-solid fa-server text-brandDark text-sm mb-1"}),u.jsx("h4",{className:"font-display font-bold text-[10px] text-brandDark",children:"Hosting Care"})]}),u.jsxs("div",{className:"bg-white p-3 rounded-lg border border-brandDark/5 text-center shadow-sm",children:[u.jsx("i",{className:"fa-solid fa-shield-halved text-brandDark text-sm mb-1"}),u.jsx("h4",{className:"font-display font-bold text-[10px] text-brandDark",children:"Security"})]}),u.jsxs("div",{className:"bg-white p-3 rounded-lg border border-brandDark/5 text-center shadow-sm",children:[u.jsx("i",{className:"fa-solid fa-gauge-high text-brandDark text-sm mb-1"}),u.jsx("h4",{className:"font-display font-bold text-[10px] text-brandDark",children:"Performance"})]})]})]}),u.jsx("div",{className:"col-span-12 lg:col-span-5 flex justify-end w-full",children:u.jsxs("div",{className:"bg-brandDark text-white p-6 rounded-2xl w-full max-w-[300px] relative overflow-hidden shadow-xl mx-auto lg:mr-0",children:[u.jsx("div",{className:"absolute -bottom-10 -left-10 w-32 h-32 bg-neonLime/10 rounded-full blur-2xl"}),u.jsxs("div",{className:"flex flex-col items-center text-center",children:[u.jsx("div",{className:"w-12 h-12 rounded-full bg-neonLime text-brandDark flex items-center justify-center text-lg font-bold mb-3 shadow-md",children:u.jsx("i",{className:"fa-solid fa-shield-heart"})}),u.jsx("span",{className:"text-[8px] tracking-widest text-white/40 font-mono block uppercase",children:"CONTRACT INCLUSION"}),u.jsx("h3",{className:"text-lg font-display font-bold mt-0.5 text-white mb-1",children:"3 Years Support"}),u.jsx("p",{className:"text-white/60 text-[10px] leading-relaxed font-light",children:"Fully covered within your direct system setup. Absolute continuity."})]})]})})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"09 / 17"})]})]}),

    // Slide 10
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-6",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block",children:"TRAFFIC SYSTEM"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight mb-1",children:"SEO & Google Discovery System"}),u.jsx("h4",{className:"font-display font-bold text-sm text-brandDark/80 mb-3",children:"Attracting Active High-Intent Patients"}),u.jsx("p",{className:"text-brandDark/70 text-xs leading-relaxed mb-4 font-light",children:"Unlike social media viewers who might just be looking for skin routines, Google searchers are looking for a dermatologist clinic today to solve their problem immediately."}),u.jsxs("div",{className:"space-y-2 text-brandDark",children:[u.jsxs("div",{className:"flex gap-2 text-xs text-brandDark/85",children:[u.jsx("i",{className:"fa-solid fa-arrow-right mt-0.5 text-brandDark text-[10px]"})," ",u.jsxs("span",{children:[u.jsx("strong",{children:"Discovery Suite Setup:"}),' Directly matches patients actively typing "Skincare specialist clinic near me".']})]}),u.jsxs("div",{className:"flex gap-2 text-xs text-brandDark/85",children:[u.jsx("i",{className:"fa-solid fa-arrow-right mt-0.5 text-brandDark text-[10px]"})," ",u.jsxs("span",{children:[u.jsx("strong",{children:"Google Business Profile Tuning:"})," Claim top organic slots on map listings."]})]}),u.jsxs("div",{className:"flex gap-2 text-xs text-brandDark/85",children:[u.jsx("i",{className:"fa-solid fa-arrow-right mt-0.5 text-brandDark text-[10px]"})," ",u.jsxs("span",{children:[u.jsx("strong",{children:"Skincare Treatments SEO:"})," Targeted keyword ranking for acne, pigment treatments, skin whitening, and lasers."]})]}),u.jsxs("div",{className:"flex gap-2 text-xs text-brandDark/85",children:[u.jsx("i",{className:"fa-solid fa-arrow-right mt-0.5 text-brandDark text-[10px]"})," ",u.jsxs("span",{children:[u.jsx("strong",{children:"High Trust Optimization:"})," Show clear clinic location, timings, and credentials directly in search results."]})]})]})]}),u.jsx("div",{className:"col-span-12 lg:col-span-6 w-full",children:u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-xl border border-brandDark/10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2 border-b border-brandDark/5 pb-2 mb-3",children:[u.jsx("div",{className:"w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold font-mono",children:"G"}),u.jsx("span",{className:"text-[9px] font-mono tracking-wider text-brandDark/40",children:"SECURE DISCOVERY NODE"})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"bg-brandLight/50 p-3 rounded-lg border border-brandDark/5",children:[u.jsx("span",{className:"text-[8px] text-brandDark/40 block",children:"https://www.clearskinclinic.com"}),u.jsx("h3",{className:"font-display font-bold text-xs text-blue-600 hover:underline cursor-pointer",children:"Clear Skin Clinic - Skincare Dermatologist"}),u.jsxs("div",{className:"flex items-center gap-0.5 text-amber-500 text-[10px] mt-0.5",children:[u.jsx("span",{children:"4.9"})," ",u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("i",{className:"fa-solid fa-star"}),u.jsx("span",{className:"text-brandDark/40 text-[8px] font-mono ml-1",children:"(120+ patient ratings)"})]}),u.jsx("p",{className:"text-[9px] text-brandDark/60 mt-1",children:"Dermatology clinical specialists in laser skincare treatments, acne scar removals, and skin lighteners."})]}),u.jsxs("div",{className:"flex justify-between items-center bg-brandDark text-white px-3 py-1.5 rounded-lg text-xs font-semibold",children:[u.jsx("span",{className:"font-mono tracking-wide text-[10px]",children:'"Skincare clinic near me"'}),u.jsx("span",{className:"text-neonLime text-[9px] font-mono",children:"RANKED #1"})]})]})]})})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"10 / 17"})]})]}),

    // Slide 11
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 w-full",children:[u.jsxs("div",{className:"text-center mb-4",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md inline-block mb-1.5",children:"PATIENT FEEDBACK SYSTEM"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight text-brandDark",children:"Google Review Growth Engine"}),u.jsx("p",{className:"text-brandDark/70 text-xs max-w-[700px] mx-auto mt-1 leading-relaxed",children:"Patient reviews build ultimate medical authority. Before scheduling an appointment, over 80% of skincare patients cross-reference the clinic's Google rating and feedback. A silent clinic profile loses customers instantly."})]}),u.jsxs("div",{className:"w-full",children:[u.jsx("span",{className:"text-[9px] uppercase tracking-[0.2em] font-mono text-brandDark/50 block text-center mb-3",children:"The Operational Funnel"}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 w-full",children:[u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300",children:[u.jsx("div",{className:"w-7 h-7 rounded-lg bg-brandDark/5 flex items-center justify-center text-xs font-bold text-brandDark mb-2",children:"01"}),u.jsx("p",{className:"text-[11px] font-semibold text-brandDark/80",children:"Automatic review request flow"})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300",children:[u.jsx("div",{className:"w-7 h-7 rounded-lg bg-brandDark/5 flex items-center justify-center text-xs font-bold text-brandDark mb-2",children:"02"}),u.jsx("p",{className:"text-[11px] font-semibold text-brandDark/80",children:"Review page direct redirection"})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300",children:[u.jsx("div",{className:"w-7 h-7 rounded-lg bg-brandDark/5 flex items-center justify-center text-xs font-bold text-brandDark mb-2",children:"03"}),u.jsx("p",{className:"text-[11px] font-semibold text-brandDark/80",children:"Spam rating protection filter"})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300",children:[u.jsx("div",{className:"w-7 h-7 rounded-lg bg-brandDark/5 flex items-center justify-center text-xs font-bold text-brandDark mb-2",children:"04"}),u.jsx("p",{className:"text-[11px] font-semibold text-brandDark/80",children:"Reputation tracking dashboard"})]})]})]})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"11 / 17"})]})]}),

    // Slide 12
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-6",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block",children:"LOBBY AUTOMATION"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight mb-3",children:"Instant QR Review System"}),u.jsx("p",{className:"text-brandDark/70 text-sm leading-relaxed mb-4 font-light",children:"Make review collection incredibly simple and low friction inside Clear Skin Clinic lobby."}),u.jsxs("div",{className:"space-y-3.5",children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("span",{className:"font-display font-bold text-xs bg-brandDark text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",children:"1"}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-display font-bold text-xs text-brandDark",children:"Scan"}),u.jsx("p",{className:"text-[11px] text-brandDark/60",children:"Patient scans clinic QR code with their mobile."})]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("span",{className:"font-display font-bold text-xs bg-brandDark text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",children:"2"}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-display font-bold text-xs text-brandDark",children:"Direct"}),u.jsx("p",{className:"text-[11px] text-brandDark/60",children:"Review input redirects automatically to correct page."})]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("span",{className:"font-display font-bold text-xs bg-brandDark text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",children:"3"}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-display font-bold text-xs text-brandDark",children:"Feedback"}),u.jsx("p",{className:"text-[11px] text-brandDark/60",children:"Authentic high-rating logged on clinic profile."})]})]})]})]}),u.jsx("div",{className:"col-span-12 lg:col-span-6 w-full flex justify-center",children:u.jsxs("div",{className:"relative bg-white p-5 rounded-2xl shadow-xl border border-brandDark/10 flex flex-col items-center w-full max-w-[280px]",children:[u.jsx("div",{className:"absolute top-2 left-2 text-[7px] font-mono tracking-wider text-brandDark/30",children:"LOBBY TERMINAL"}),u.jsx("i",{className:"fa-solid fa-qrcode text-6xl mb-3 text-brandDark"}),u.jsx("h4",{className:"font-display font-bold text-xs mb-0.5 text-brandDark",children:"Clear Skin Review Hub"}),u.jsx("span",{className:"text-[8px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200 font-bold",children:"SCAN TO REVIEW"}),u.jsx("div",{className:"mt-3 border-t border-brandDark/5 pt-3 text-center text-[9px] text-brandDark/40 leading-relaxed",children:"Reduces review time friction to under 15 seconds"})]})})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"12 / 17"})]})]}),

    // Slide 13
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 w-full",children:[u.jsxs("div",{className:"text-center mb-4",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md inline-block mb-1.5",children:"ORGANIC GROWTH ACCELERATOR"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight text-brandDark",children:"Social Media Boost System"}),u.jsx("p",{className:"text-brandDark/70 text-xs max-w-[700px] mx-auto mt-1 leading-relaxed",children:"You treat patients. We handle growth. Our comprehensive content engine is meticulously designed to optimize your time and scale your medical authority across all social channels."})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-3 w-full",children:[u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer",onClick:()=>{i(!0),l("script")},children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-start",children:[u.jsx("i",{className:"fa-solid fa-feather text-brandDark text-lg mb-2"}),u.jsx("span",{className:"text-[8px] font-bold bg-neonLime text-black px-1.5 py-0.5 rounded",children:"AI DEMO"})]}),u.jsx("h4",{className:"font-display font-bold text-xs text-brandDark",children:"Content Outlines"})]}),u.jsx("p",{className:"text-[10px] text-brandDark/60 leading-normal mt-1.5",children:"Scripts structured for retention and appointment call-to-actions."})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow",children:[u.jsxs("div",{children:[u.jsx("i",{className:"fa-solid fa-clapperboard text-brandDark text-lg mb-2"}),u.jsx("h4",{className:"font-display font-bold text-xs text-brandDark",children:"Professional Editing"})]}),u.jsx("p",{className:"text-[10px] text-brandDark/60 leading-normal mt-1.5",children:"Sleek, minimal, medical-authority visual pacing."})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow",children:[u.jsxs("div",{children:[u.jsx("i",{className:"fa-solid fa-chart-line text-brandDark text-lg mb-2"}),u.jsx("h4",{className:"font-display font-bold text-xs text-brandDark",children:"Trend Research"})]}),u.jsx("p",{className:"text-[10px] text-brandDark/60 leading-normal mt-1.5",children:"Capturing organic momentum on fast growing clinic topics."})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow",children:[u.jsxs("div",{children:[u.jsx("i",{className:"fa-solid fa-calendar-days text-brandDark text-lg mb-2"}),u.jsx("h4",{className:"font-display font-bold text-xs text-brandDark",children:"Scheduling Engine"})]}),u.jsx("p",{className:"text-[10px] text-brandDark/60 leading-normal mt-1.5",children:"Consistent multi-platform publication without friction."})]})]})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"13 / 17"})]})]}),

    // Slide 14
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"dot-matrix-light"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-black flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-brandDark",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-6",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block font-sans",children:"PAID TRAFFIC MATRIX"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight mb-3",children:"Meta Ads Growth System"}),u.jsx("p",{className:"text-brandDark/70 text-xs leading-relaxed mb-4 font-light",children:"Scale reliably beyond organic reach. Organic video reach is subject to algorithmic mood swings. Local Facebook and Instagram ads allow us to target high-intent prospects within a 5-10km radius of Clear Skin Clinic with complete mathematical certainty."}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex gap-2 text-xs text-brandDark/85",children:[u.jsx("i",{className:"fa-solid fa-circle-dot mt-0.5 text-brandDark text-[10px]"})," ",u.jsxs("span",{children:[u.jsx("strong",{children:"Geo-Fenced Targeting:"})," Connect purely with local prospects near you."]})]}),u.jsxs("div",{className:"flex gap-2 text-xs text-brandDark/85",children:[u.jsx("i",{className:"fa-solid fa-circle-dot mt-0.5 text-brandDark text-[10px]"})," ",u.jsxs("span",{children:[u.jsx("strong",{children:"Laser Direct Campaigns:"})," Lead generation directly for skincare consultations."]})]}),u.jsxs("div",{className:"flex gap-2 text-xs text-brandDark/85",children:[u.jsx("i",{className:"fa-solid fa-circle-dot mt-0.5 text-brandDark text-[10px]"})," ",u.jsxs("span",{children:[u.jsx("strong",{children:"Retargeting funnels:"})," Show before/afters to warm, interested leads."]})]})]})]}),u.jsx("div",{className:"col-span-12 lg:col-span-6 w-full",children:u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-xl border border-brandDark/10 relative overflow-hidden h-[240px] w-full",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80",alt:"Map grid representation",className:"absolute inset-0 w-full h-full object-cover opacity-30",onError:$=>{$.currentTarget.style.display="none"}}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"}),u.jsxs("div",{className:"absolute bottom-3 left-3 right-3 bg-brandDark text-white p-3 rounded-xl border border-white/10 shadow-2xl",children:[u.jsx("span",{className:"text-[8px] font-mono tracking-widest block text-white/50 uppercase",children:"TARGET RADIAL GRID"}),u.jsxs("div",{className:"flex justify-between items-center mt-0.5",children:[u.jsx("span",{className:"font-display font-bold text-xs",children:"Radius: 5-10km Clear Skin"}),u.jsx("span",{className:"text-neonLime text-[10px] font-mono font-bold",children:"ACTIVE SCAN"})]})]})]})})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"14 / 17"})]})]}),

    // Slide 15
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"neon-glow-primary -top-40 -right-40 w-[600px] h-[600px]"}),u.jsx("div",{className:"dot-matrix"}),u.jsx("div",{className:"grid-blueprint"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-white/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-neonLime flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-white",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-5",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-neonLime bg-neonLime/10 border border-neonLime/20 px-2.5 py-1 rounded-md mb-3 inline-block",children:"CAPITAL INFRASTRUCTURE"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight mb-3",children:"One-Time Setup Investment"}),u.jsx("p",{className:"text-white/60 text-xs leading-relaxed mb-4 font-light",children:"Establish your digital framework with our primary setup suite. Pure architecture built for continuous clinic conversion."}),u.jsx("div",{className:"bg-white/5 border-l-4 border-neonLime p-3 rounded-r-xl flex justify-between items-center",children:u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] font-mono uppercase tracking-widest text-white/40 block",children:"CONTRACT INCLUSION"}),u.jsx("h4",{className:"font-display font-semibold text-[10px] text-white",children:"No Hidden Charges • Fixed Scale Agreement"})]})})]}),u.jsx("div",{className:"col-span-12 lg:col-span-7 flex justify-end w-full",children:u.jsxs("div",{className:"glass-card-dark neon-card-highlight p-6 rounded-2xl w-full max-w-[440px] relative overflow-hidden shadow-2xl",children:[u.jsxs("div",{className:"flex flex-wrap justify-between items-start mb-4 border-b border-white/10 pb-3 gap-2",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] font-mono tracking-widest text-white/40 block",children:"PLAN SPECIFICATION"}),u.jsx("h3",{className:"font-display font-bold text-base text-white",children:"COMPLETE ECOSYSTEM SUITE"})]}),u.jsxs("div",{className:"text-right",children:[u.jsx("span",{className:"text-2xl font-display font-bold text-neonLime",children:"₹20,000"}),u.jsx("span",{className:"text-[9px] font-mono block text-white/40",children:"One-Time Setup"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-3 text-xs mb-1",children:[u.jsxs("div",{className:"flex items-center gap-2 text-white/80",children:[u.jsx("i",{className:"fa-solid fa-circle-check text-neonLime text-[10px]"})," AI Skincare Website"]}),u.jsxs("div",{className:"flex items-center gap-2 text-white/80",children:[u.jsx("i",{className:"fa-solid fa-circle-check text-neonLime text-[10px]"})," Meta Ads Setup"]}),u.jsxs("div",{className:"flex items-center gap-2 text-white/80 cursor-pointer hover:text-neonLime",onClick:()=>{i(!0),l("chatbot")},children:[u.jsx("i",{className:"fa-solid fa-circle-check text-neonLime text-[10px] animate-pulse"})," AI Patient Chatbot ",u.jsx("span",{className:"text-[8px] bg-neonLime/20 text-neonLime px-1 rounded",children:"Try"})]}),u.jsxs("div",{className:"flex items-center gap-2 text-white/80",children:[u.jsx("i",{className:"fa-solid fa-circle-check text-neonLime text-[10px]"})," Social Media Setup"]}),u.jsxs("div",{className:"flex items-center gap-2 text-white/80",children:[u.jsx("i",{className:"fa-solid fa-circle-check text-neonLime text-[10px]"})," Advanced Local SEO"]}),u.jsxs("div",{className:"flex items-center gap-2 text-white/80",children:[u.jsx("i",{className:"fa-solid fa-circle-check text-neonLime text-[10px]"})," 3 Years Complete Support"]}),u.jsxs("div",{className:"flex items-center gap-2 text-white/80",children:[u.jsx("i",{className:"fa-solid fa-circle-check text-neonLime text-[10px]"})," Google Review Engine"]}),u.jsxs("div",{className:"flex items-center gap-2 text-white/80",children:[u.jsx("i",{className:"fa-solid fa-circle-check text-neonLime text-[10px]"})," QR lobby review system"]})]})]})})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-white/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"15 / 17"})]})]}),

    // Slide 16
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"neon-glow-primary -bottom-40 -right-40 w-[600px] h-[600px]"}),u.jsx("div",{className:"dot-matrix"}),u.jsx("div",{className:"grid-blueprint"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-white/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-neonLime flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-white",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full",children:[u.jsxs("div",{className:"col-span-12 lg:col-span-5",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-neonLime bg-neonLime/10 border border-neonLime/20 px-2.5 py-1 rounded-md mb-3 inline-block",children:"ONGOING MAINTENANCE"}),u.jsx("h2",{className:"font-display font-bold text-3xl tracking-tight mb-3",children:"Monthly Growth Management"}),u.jsx("p",{className:"text-white/60 text-xs leading-relaxed mb-4 font-light",children:"Ongoing maintenance, constant creative scaling, ad updates, and algorithmic tuning for Clear Skin Clinic."}),u.jsxs("div",{className:"bg-white/5 border-l-4 border-neonLime p-3 rounded-r-xl",children:[u.jsx("span",{className:"text-[8px] font-mono uppercase tracking-widest text-white/40 block",children:"CONTRACT FREQUENCY"}),u.jsx("h4",{className:"font-display font-semibold text-[10px] text-white",children:"Continuous Expansion Retainer"})]})]}),u.jsx("div",{className:"col-span-12 lg:col-span-7 flex justify-end w-full",children:u.jsxs("div",{className:"glass-card-dark neon-card-highlight p-6 rounded-2xl w-full max-w-[440px] relative overflow-hidden shadow-2xl",children:[u.jsxs("div",{className:"flex flex-wrap justify-between items-start mb-4 border-b border-white/10 pb-3 gap-2",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] font-mono tracking-widest text-white/40 block",children:"GROWTH ENGAGEMENT"}),u.jsx("h3",{className:"font-display font-bold text-base text-white",children:"MONTHLY OPTIMIZATION"})]}),u.jsxs("div",{className:"text-right",children:[u.jsx("span",{className:"text-2xl font-display font-bold text-neonLime",children:"₹10,000"}),u.jsx("span",{className:"text-[9px] font-mono block text-white/40",children:"Per Month Retainer"})]})]}),u.jsxs("div",{className:"space-y-2.5 text-xs",children:[u.jsxs("div",{className:"bg-white/5 p-2.5 rounded-lg border border-white/5",children:[u.jsx("strong",{className:"text-neonLime block mb-0.5 text-[11px]",children:"Social Media Maintenance:"}),u.jsx("span",{className:"text-white/75 leading-relaxed text-[11px]",children:"Done-For-You planning, reels editing, & scripts."})]}),u.jsxs("div",{className:"bg-white/5 p-2.5 rounded-lg border border-white/5",children:[u.jsx("strong",{className:"text-neonLime block mb-0.5 text-[11px]",children:"Meta Ads Scaling:"}),u.jsx("span",{className:"text-white/75 leading-relaxed text-[11px]",children:"Creative updates, audience targeting tuning, and lead analytics optimization."})]}),u.jsxs("div",{className:"bg-white/5 p-2.5 rounded-lg border border-white/5",children:[u.jsx("strong",{className:"text-neonLime block mb-0.5 text-[11px]",children:"Funnel Nurturing:"}),u.jsx("span",{className:"text-white/75 leading-relaxed text-[11px]",children:"Constant chatbot refinement and performance analytics oversight."})]})]})]})})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-white/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"www.mightbemedia.in"}),u.jsx("span",{className:"font-mono",children:"16 / 17"})]})]}),

    // Slide 17
    ()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"neon-glow-primary -top-40 -right-40 w-[700px] h-[700px]"}),u.jsx("div",{className:"dot-matrix"}),u.jsx("div",{className:"grid-blueprint"}),u.jsxs("div",{className:"brand-header flex justify-between items-center border-b border-white/5 pb-4 z-10 w-full",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("svg",{width:"24",height:"24",className:"w-6 h-6 text-neonLime flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),u.jsx("span",{className:"font-display font-bold text-lg tracking-tight text-white",children:"MightBeMedia"})]}),u.jsx("span",{className:"text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10",children:"Build • Convert • Scale"})]}),u.jsxs("div",{className:"content-area my-auto z-10 text-center flex flex-col items-center justify-center w-full",children:[u.jsx("span",{className:"text-[9px] font-bold uppercase tracking-[0.2em] text-neonLime bg-neonLime/10 border border-neonLime/20 px-3 py-1 rounded-full mb-3 inline-block",children:"PARTNERSHIP ENGAGEMENT"}),u.jsx("h1",{className:"font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-3",children:"Thank You"}),u.jsx("p",{className:"text-white/70 text-sm max-w-[550px] leading-relaxed mb-4 font-light px-4",children:"We would be deeply honored to act as your digital growth and revenue partner."}),u.jsx("div",{className:"bg-white/5 border border-white/10 rounded-xl p-3.5 max-w-[480px] shadow-xl mb-4 mx-4",children:u.jsxs("p",{className:"text-xs font-semibold tracking-wide italic text-white/90",children:['"We Are Not A Service Provider. ',u.jsx("span",{className:"text-neonLime underline underline-offset-4 decoration-2",children:"We Are Your Revenue Growth Partner."}),'"']})}),u.jsxs("div",{className:"flex flex-wrap gap-4 sm:gap-6 border-t border-white/10 pt-4 mt-2 w-full max-w-[400px] justify-center text-[11px] px-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-white/70",children:[u.jsx("i",{className:"fa-solid fa-globe text-neonLime text-sm"}),u.jsx("span",{children:"www.mightbemedia.in"})]}),u.jsxs("div",{className:"flex items-center gap-2 text-white/70",children:[u.jsx("i",{className:"fa-solid fa-envelope text-neonLime text-sm"}),u.jsx("span",{children:"info@mightbemedia.in"})]})]})]}),u.jsxs("div",{className:"brand-footer flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-white/40 z-10 w-full",children:[u.jsx("span",{className:"font-mono",children:"MightBeMedia • Build • Convert • Scale"}),u.jsx("span",{className:"font-mono",children:"17 / 17"})]})]})
  ];

  const Ni = (idx) => {
    if (po[idx]) return po[idx]();
    return null;
  };

  // Outer render
  return (
    <div className="proposal-container min-h-screen bg-[#050507] text-white antialiased">
      {/* Utility Bar */}
      <div className="fixed bottom-4 sm:top-4 sm:bottom-auto left-1/2 -translate-x-1/2 z-50 bg-[#070709]/95 backdrop-blur-md border border-white/10 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center justify-between gap-3 sm:gap-5 shadow-2xl transition-all duration-300 w-[94%] sm:w-auto max-w-[480px] sm:max-w-none">
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <svg
            width="18"
            height="18"
            className="w-[18px] h-[18px] text-[#E8FF1C] flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="font-display font-bold text-[9px] sm:text-xs tracking-widest text-white hidden xs:inline-block">
            MIGHTBEMEDIA
          </span>
        </div>
        <div className="h-4 w-px bg-white/20" />
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            type="button"
            onClick={() => r(false)}
            className={`text-[9px] sm:text-xs bg-white/10 hover:bg-white/20 text-white font-mono px-2 py-1 sm:px-3 rounded-full transition-colors flex items-center gap-1 ${
              !n ? "bg-white/20" : ""
            }`}
          >
            <i className="fa-solid fa-list-ul" />{" "}
            <span className="hidden xs:inline">Scroll</span>
          </button>
          <button
            type="button"
            onClick={() => r(true)}
            className={`text-[9px] sm:text-xs font-mono px-2 py-1 sm:px-3 rounded-full transition-all flex items-center gap-1 ${
              n
                ? "bg-[#E8FF1C] text-black font-bold"
                : "bg-white/5 hover:bg-[#E8FF1C] hover:text-black text-white"
            }`}
          >
            <i className="fa-solid fa-play" />{" "}
            <span className="hidden xs:inline">Present</span>
          </button>
        </div>
        {n && (
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="h-4 w-px bg-white/20" />
            <button
              type="button"
              onClick={q}
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-chevron-left text-[10px]" />
            </button>
            <span className="font-mono text-[10px] sm:text-xs text-[#E8FF1C] min-w-[32px] text-center font-bold">
              {e + 1}/{O}
            </span>
            <button
              type="button"
              onClick={U}
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-chevron-right text-[10px]" />
            </button>
          </div>
        )}
        <div className="h-4 w-px bg-white/20" />
        <button
          type="button"
          onClick={() => i(true)}
          className="relative group overflow-hidden bg-gradient-to-r from-[#E8FF1C] to-emerald-400 text-black text-[9px] sm:text-xs font-bold font-mono px-2.5 py-1 sm:px-4 rounded-full flex items-center gap-1 transition-all duration-300 hover:scale-105 flex-shrink-0"
        >
          <i className="fa-solid fa-wand-magic-sparkles" /> <span>AI Lab</span>
        </button>
      </div>

      {/* Deck Container */}
      <div className={`deck-wrapper ${n ? "presenting-mode" : ""}`}>
        {Array.from({ length: O }, (_, idx) => (
          <div
            key={idx}
            ref={(el) => (P.current[idx] = el)}
            className={`slide-container ${
              idx === 0 || idx === 2 || idx >= 14
                ? "bg-obsidian text-white"
                : "bg-brandLight text-brandDark"
            } ${n && idx === e ? "current-active" : ""}`}
            style={{ display: n && idx !== e ? "none" : "flex" }}
          >
            {Ni(idx)}
          </div>
        ))}
      </div>

      {/* AI Lab Sidebar Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[500px] bg-[#0c0c10] border-l border-white/15 shadow-2xl z-50 transform transition-transform duration-500 flex flex-col ${
          o ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-none transition-opacity duration-500 ${
            o ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => i(false)}
          style={{ zIndex: -1 }}
        />
        <div className="p-3 sm:p-4 border-b border-white/10 flex items-center justify-between bg-[#0b0b0f] relative z-10 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E8FF1C] animate-ping" />
            <div>
              <h3 className="font-display font-bold text-xs sm:text-sm tracking-tight text-white flex items-center gap-1.5">
                <i className="fa-solid fa-wand-magic-sparkles text-[#E8FF1C] text-xs" />{" "}
                MBM AI Engine
              </h3>
              <p className="text-[7px] sm:text-[8px] font-mono uppercase tracking-wider text-white/50">
                Live Interactive Skincare & Proposal Intelligence
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => i(false)}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
          >
            <i className="fa-solid fa-xmark text-sm" />
          </button>
        </div>

        <div className="px-2 py-1.5 sm:py-2 border-b border-white/10 bg-[#08080c] flex gap-1 flex-shrink-0">
          {["chatbot", "script", "proposal"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => l(tab)}
              className={`flex-1 py-1.5 px-1 rounded-lg text-[8px] sm:text-[9px] font-mono font-bold uppercase transition-all duration-300 flex items-center justify-center gap-1 ${
                s === tab
                  ? "bg-[#E8FF1C] text-black"
                  : "text-white/70 hover:text-white bg-white/10 hover:bg-white/15"
              }`}
            >
              <i
                className={`fa-solid ${
                  tab === "chatbot"
                    ? "fa-comments"
                    : tab === "script"
                    ? "fa-video"
                    : "fa-file-contract"
                } text-[10px] sm:text-xs`}
              />
              <span className="hidden xs:inline">{tab}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 bg-[#0c0c10] min-h-0">
          {s === "chatbot" && (
            <div className="flex flex-col h-full space-y-3">
              <div className="bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                <h4 className="font-display font-bold text-[10px] sm:text-xs text-[#E8FF1C] mb-0.5">
                  Live Patient Bot Demo
                </h4>
                <p className="text-[8px] sm:text-[9px] text-white/60 leading-relaxed">
                  Ask any skincare question to our AI receptionist.
                </p>
              </div>
              <div className="bg-[#121218] border border-white/10 rounded-xl flex-1 flex flex-col overflow-hidden min-h-[150px]">
                <div className="flex-1 p-2 sm:p-3 overflow-y-auto space-y-2">
                  {d.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2 ${
                        msg.role === "user" ? "justify-end" : ""
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[7px] sm:text-[8px] flex-shrink-0 ${
                          msg.role === "user"
                            ? "bg-white/15 text-white order-2"
                            : "bg-[#E8FF1C] text-black"
                        }`}
                      >
                        <i
                          className={`fa-solid ${
                            msg.role === "user" ? "fa-user" : "fa-user-doctor"
                          } text-[8px] sm:text-[10px]`}
                        />
                      </div>
                      <div
                        className={`px-2 py-1.5 rounded-xl max-w-[80%] leading-relaxed text-[10px] sm:text-xs ${
                          msg.role === "user"
                            ? "bg-[#E8FF1C]/15 border border-[#E8FF1C]/30 text-white rounded-l-xl rounded-br-xl font-medium"
                            : "bg-[#1c1c24] border border-white/10 text-white rounded-r-xl rounded-bl-xl font-medium"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {k && (
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#E8FF1C] text-black flex items-center justify-center font-bold text-[7px] sm:text-[8px] flex-shrink-0">
                        <i className="fa-solid fa-user-doctor text-[8px] sm:text-[10px]" />
                      </div>
                      <div className="bg-[#1c1c24] border border-white/10 px-2 py-1.5 rounded-r-xl rounded-bl-xl max-w-[80%] text-white text-[10px] sm:text-xs">
                        <i className="fa-solid fa-spinner animate-spin" /> Thinking...
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-2 py-1.5 border-t border-white/10 bg-[#09090d] flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-none flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      g("What treatment do you have for dark acne scars?");
                      F();
                    }}
                    className="text-[7px] sm:text-[8px] bg-[#1a1a24] hover:bg-[#252533] border border-white/15 px-2 py-0.5 rounded-full transition-all text-white font-medium"
                  >
                    Acne scars
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      g("Is laser safe for hyperpigmentation?");
                      F();
                    }}
                    className="text-[7px] sm:text-[8px] bg-[#1a1a24] hover:bg-[#252533] border border-white/15 px-2 py-0.5 rounded-full transition-all text-white font-medium"
                  >
                    Hyperpigmentation
                  </button>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <input
                  type="text"
                  value={h}
                  onChange={(e) => g(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && F()}
                  placeholder="Type your question..."
                  className="flex-1 bg-[#161622] border border-white/20 rounded-xl px-3 py-2 text-[10px] sm:text-xs focus:outline-none focus:border-[#E8FF1C] text-white placeholder-white/40 min-h-[36px]"
                />
                <button
                  type="button"
                  onClick={F}
                  className="bg-[#E8FF1C] text-black px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold hover:scale-102 transition-all flex items-center justify-center gap-1 flex-shrink-0 min-h-[36px]"
                >
                  Send <i className="fa-regular fa-paper-plane" />
                </button>
              </div>
            </div>
          )}

          {s === "script" && (
            <div className="flex flex-col h-full space-y-3">
              <div className="bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                <h4 className="font-display font-bold text-[10px] sm:text-xs text-[#E8FF1C] mb-0.5">
                  High-Retention Outline Builder
                </h4>
                <p className="text-[8px] sm:text-[9px] text-white/60 leading-relaxed">
                  Input a skincare topic to generate a 30-second script outline.
                </p>
              </div>
              <div className="space-y-2 flex-shrink-0">
                <div>
                  <label className="block text-[8px] sm:text-[9px] uppercase tracking-wider font-mono text-white/50 mb-0.5 font-bold">
                    Skincare Topic
                  </label>
                  <input
                    type="text"
                    value={T}
                    onChange={(e) => v(e.target.value)}
                    placeholder="e.g., Hydrafacial vs Chemical Peel"
                    className="w-full bg-[#161622] border border-white/20 rounded-xl px-3 py-2 text-[10px] sm:text-xs focus:outline-none focus:border-[#E8FF1C] text-white placeholder-white/40"
                  />
                </div>
                <button
                  type="button"
                  onClick={z}
                  disabled={b}
                  className="w-full bg-gradient-to-r from-[#E8FF1C] to-emerald-400 text-black py-2 rounded-xl text-[10px] sm:text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  <i className={`fa-solid fa-cube ${b ? "animate-spin" : ""}`} />
                  {b ? "Generating..." : "Generate Reel Outline"}
                </button>
              </div>
              {N && (
                <div className="flex-1 flex flex-col space-y-2 min-h-0">
                  <label className="block text-[8px] sm:text-[9px] uppercase tracking-wider font-mono text-white/50 font-bold flex-shrink-0">
                    Generated outline
                  </label>
                  <div className="bg-[#121218] border border-white/10 rounded-xl p-3 text-[10px] sm:text-xs font-medium text-white leading-relaxed overflow-y-auto flex-1 min-h-[100px] whitespace-pre-wrap font-sans">
                    {x}
                  </div>
                  <button
                    type="button"
                    onClick={() => R(x)}
                    className="w-full bg-white/10 hover:bg-white/15 border border-white/15 text-white py-1.5 rounded-xl text-[10px] sm:text-xs transition-all flex items-center justify-center gap-2 flex-shrink-0"
                  >
                    <i className="fa-solid fa-copy" /> Copy Script
                  </button>
                </div>
              )}
            </div>
          )}

          {s === "proposal" && (
            <div className="flex flex-col h-full space-y-3">
              <div className="bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                <h4 className="font-display font-bold text-[10px] sm:text-xs text-[#E8FF1C] mb-0.5">
                  Proposal Advisor
                </h4>
                <p className="text-[8px] sm:text-[9px] text-white/60 leading-relaxed">
                  Ask about our packages, pricing, or support coverage.
                </p>
              </div>
              <div className="bg-[#121218] border border-white/10 rounded-xl flex-1 flex flex-col overflow-hidden min-h-[150px]">
                <div className="flex-1 p-2 sm:p-3 overflow-y-auto space-y-2">
                  {p.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2 ${
                        msg.role === "user" ? "justify-end" : ""
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[7px] sm:text-[8px] flex-shrink-0 ${
                          msg.role === "user"
                            ? "bg-white/15 text-white order-2"
                            : "bg-[#E8FF1C] text-black"
                        }`}
                      >
                        <i
                          className={`fa-solid ${
                            msg.role === "user" ? "fa-user" : "fa-file-contract"
                          } text-[8px] sm:text-[10px]`}
                        />
                      </div>
                      <div
                        className={`px-2 py-1.5 rounded-xl max-w-[80%] leading-relaxed text-[10px] sm:text-xs ${
                          msg.role === "user"
                            ? "bg-[#E8FF1C]/15 border border-[#E8FF1C]/30 text-white rounded-l-xl rounded-br-xl font-medium"
                            : "bg-[#1c1c24] border border-white/10 text-white rounded-r-xl rounded-bl-xl font-medium"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {k && (
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#E8FF1C] text-black flex items-center justify-center font-bold text-[7px] sm:text-[8px] flex-shrink-0">
                        <i className="fa-solid fa-file-contract text-[8px] sm:text-[10px]" />
                      </div>
                      <div className="bg-[#1c1c24] border border-white/10 px-2 py-1.5 rounded-r-xl rounded-bl-xl max-w-[80%] text-white text-[10px] sm:text-xs">
                        <i className="fa-solid fa-spinner animate-spin" /> Thinking...
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-2 py-1.5 border-t border-white/10 bg-[#09090d] flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-none flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      y("What does the ₹20,000 setup include?");
                      V();
                    }}
                    className="text-[7px] sm:text-[8px] bg-[#1a1a24] hover:bg-[#252533] border border-white/15 px-2 py-0.5 rounded-full transition-all text-white font-medium"
                  >
                    Setup cost
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      y("Tell me about the 3-year support.");
                      V();
                    }}
                    className="text-[7px] sm:text-[8px] bg-[#1a1a24] hover:bg-[#252533] border border-white/15 px-2 py-0.5 rounded-full transition-all text-white font-medium"
                  >
                    3-Year support
                  </button>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <input
                  type="text"
                  value={w}
                  onChange={(e) => y(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && V()}
                  placeholder="Type proposal question..."
                  className="flex-1 bg-[#161622] border border-white/20 rounded-xl px-3 py-2 text-[10px] sm:text-xs focus:outline-none focus:border-[#E8FF1C] text-white placeholder-white/40 min-h-[36px]"
                />
                <button
                  type="button"
                  onClick={V}
                  className="bg-[#E8FF1C] text-black px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold hover:scale-102 transition-all flex items-center justify-center gap-1 flex-shrink-0 min-h-[36px]"
                >
                  Ask <i className="fa-regular fa-paper-plane" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
