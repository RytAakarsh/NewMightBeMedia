export interface ProposalSectionItem {
  title: string;
  description: string;
  highlight?: string;
  badge?: string;
}

export interface ProposalSlide {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
  summary: string;
  keyPoints?: string[];
  items?: ProposalSectionItem[];
  highlightBox?: {
    title: string;
    description: string;
    metric?: string;
  };
  tableData?: {
    headers: string[];
    rows: { [key: string]: string }[];
  };
  metrics?: {
    value: string;
    label: string;
    sublabel?: string;
  }[];
}

export interface ProposalConfig {
  clientName: string;
  clientIndustry: string;
  projectTitle: string;
  projectGoal: string;
  tagline: string;
  timeline: string;
  setupInvestment: string;
  setupInvestmentNumeric: number;
  monthlyRetainer: string;
  monthlyRetainerNumeric: number;
  currency: string;
  supportDuration: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  slides: ProposalSlide[];
}

export const defaultProposalConfig: ProposalConfig = {
  clientName: "Valued Client",
  clientIndustry: "Growth Business",
  projectTitle: "Revenue Growth Ecosystem",
  projectGoal: "Build, Convert & Scale High-Value Customer Pipeline",
  tagline: "Build. Convert. Scale.",
  timeline: "14 Days Deployment",
  setupInvestment: "₹20,000",
  setupInvestmentNumeric: 20000,
  monthlyRetainer: "₹10,000 / month",
  monthlyRetainerNumeric: 10000,
  currency: "INR (₹)",
  supportDuration: "3 Years Included",
  contactEmail: "info@mightbemedia.in",
  contactPhone: "+91-8851872245",
  whatsappNumber: "918851872245",
  slides: [
    {
      number: "01",
      title: "The Opportunity",
      subtitle: "Capturing High-Intent Market Demand",
      category: "Market Analysis",
      summary: "Most modern businesses leave massive revenue on the table because their digital touchpoints fail to build instant trust, convert organic traffic, or automate customer intake.",
      metrics: [
        { value: "70%+", label: "Mobile Traffic Share", sublabel: "Requires sub-second speed" },
        { value: "3.2x", label: "Conversion Lift", sublabel: "When trust architecture is engineered" },
        { value: "< 5 Min", label: "Critical Response Window", sublabel: "Automated instant lead routing" }
      ],
      keyPoints: [
        "High-intent prospective clients search for top-tier providers daily across Google and social channels.",
        "A slow, generic, or poorly structured website creates immediate friction and leaks high-value opportunities to competitors.",
        "Integrating high-speed web architecture with automated intake and localized search visibility converts passive interest into confirmed bookings."
      ]
    },
    {
      number: "02",
      title: "Our Approach",
      subtitle: "The MightBeMedia Growth Philosophy",
      category: "Methodology",
      summary: "We don't build digital brochures. We engineer integrated revenue systems where design, software engineering, and performance marketing work synchronously to drive predictable business growth.",
      items: [
        {
          title: "01. Engineering-Grade Design",
          description: "Custom bespoke user interfaces tailored to your brand's authority, elevating market perception and eliminating bounce rates."
        },
        {
          title: "02. Frictionless Conversion Funnels",
          description: "Direct-to-action booking workflows, 1-tap WhatsApp consultation triggers, and smart intake forms that minimize user friction."
        },
        {
          title: "03. Compounding Organic Authority",
          description: "Dominating local map pack queries and high-intent industry searches through structured schema and technical SEO."
        },
        {
          title: "04. Automated Lead Nurturing",
          description: "AI-powered engagement and rapid automated notifications ensuring no inquiry goes cold."
        }
      ]
    },
    {
      number: "03",
      title: "Revenue Growth System",
      subtitle: "The 3 Pillars of Commercial Dominance",
      category: "Architecture",
      summary: "Our proven tripartite framework designed to capture demand, maximize visitor-to-client conversion, and compound long-term market authority.",
      items: [
        {
          title: "Pillar 1: Traffic Acquisition",
          description: "Attracting high-intent organic searchers via local SEO dominance and precision-targeted Meta ad campaigns.",
          badge: "Acquisition"
        },
        {
          title: "Pillar 2: Conversion Engine",
          description: "Sub-second Next.js web application with doctor/founder authority, treatment matrices, and instant booking handoffs.",
          badge: "Conversion"
        },
        {
          title: "Pillar 3: Retention & Reputation",
          description: "Automated Google review generation QR engine, 3-year uptime guarantee, and continuous optimization.",
          badge: "Retention"
        }
      ]
    },
    {
      number: "04",
      title: "Website & Conversion Design",
      subtitle: "High-Performance Digital Flagship",
      category: "Digital Flagship",
      summary: "A bespoke, lightning-fast digital flagship designed from the ground up to establish elite authority and guide visitors directly into consultation booking.",
      keyPoints: [
        "Tailored Visual Identity: High-end editorial typography, pristine contrast, and premium brand aesthetics.",
        "Interactive Service & Solution Matrix: Clear, transparent presentation of offerings, pricing tiers, and expected outcomes.",
        "Mobile-First Architecture: 100% responsive experience optimized for one-thumb mobile booking and navigation.",
        "Sub-Second Load Latency: Built on Next.js Turbopack with zero bloat for instant rendering on mobile networks."
      ],
      highlightBox: {
        title: "Conversion-Engineered UX",
        description: "Every section, heading, button, and visual asset is positioned to reduce anxiety and trigger immediate client action."
      }
    },
    {
      number: "05",
      title: "Technology & Software",
      subtitle: "Enterprise Engineering Without Technical Debt",
      category: "Engineering",
      summary: "We leverage modern web technologies to ensure your digital ecosystem is fast, secure, scalable, and effortless to maintain.",
      items: [
        {
          title: "Next.js & React 19",
          description: "Modern full-stack framework delivering static pre-rendering, edge deployment, and instant navigation."
        },
        {
          title: "Tailwind CSS & Motion",
          description: "Hardware-accelerated CSS animations and responsive design system tailored to your brand colors."
        },
        {
          title: "Serverless Edge Cloud",
          description: "Global CDN delivery with 99.99% uptime, enterprise SSL encryption, and automated backups."
        },
        {
          title: "Automated Form & CRM Sync",
          description: "Instant delivery of inquiries to your team's WhatsApp and email with zero data loss."
        }
      ]
    },
    {
      number: "06",
      title: "SEO & Organic Growth",
      subtitle: "Dominating Search Engines & AI Discovery",
      category: "Search Strategy",
      summary: "Structured technical SEO and local optimization designed to position your brand at the very top of Google Search and local map packs.",
      items: [
        {
          title: "Local Map Pack Optimization",
          description: "Google Business Profile synchronization, geo-tagged metadata, and localized keyword targeting."
        },
        {
          title: "Structured JSON-LD Schema",
          description: "Rich snippets for Organization, Services, Reviews, and FAQs for enhanced Google display and AI engine comprehension."
        },
        {
          title: "Core Web Vitals Excellence",
          description: "Perfect 95+ Google PageSpeed scores, zero layout shift (CLS), and sub-100ms interaction latency (INP)."
        }
      ]
    },
    {
      number: "07",
      title: "Social Media & Content",
      subtitle: "Brand Presence & Engagement",
      category: "Social Distribution",
      summary: "Professional social media profile optimization and structured content strategy to establish authoritative digital presence across Instagram and Meta platforms.",
      keyPoints: [
        "Complete bio optimization with tracked direct booking links and clear value proposition.",
        "Branded highlight covers and visual consistency matching your flagship website.",
        "Content framework for case studies, client results, and authority-building educational content.",
        "Seamless traffic routing from social discovery directly into your booking funnel."
      ]
    },
    {
      number: "08",
      title: "Performance Marketing",
      subtitle: "Meta Ads & Paid Acquisition Architecture",
      category: "Paid Acquisition",
      summary: "Turnkey Meta (Instagram & Facebook) advertising setup engineered to attract high-value clients and retarget warm visitors.",
      items: [
        {
          title: "Meta Pixel & CAPI Setup",
          description: "Conversion API integration with server-side event tracking for 100% accurate attribution."
        },
        {
          title: "High-Intent Audience Targeting",
          description: "Custom lookalikes, localized radius targeting, and interest-based demographics."
        },
        {
          title: "Dynamic Retargeting Funnels",
          description: "Re-engaging website visitors who did not complete consultation bookings with trust-building social proof."
        }
      ]
    },
    {
      number: "09",
      title: "AI & Automation",
      subtitle: "24/7 Intelligent Client Intake",
      category: "Automation",
      summary: "Automated intelligent inquiry systems and instant response pipelines that engage visitors and capture consultation leads around the clock.",
      items: [
        {
          title: "AI Patient / Client Chatbot",
          description: "Trained on your services, FAQs, and booking criteria to answer queries instantly and collect lead info."
        },
        {
          title: "Instant WhatsApp Routing",
          description: "Direct notifications to your front desk or sales team within 5 seconds of lead submission."
        },
        {
          title: "Automated Confirmation Workflows",
          description: "Instant booking acknowledgment via WhatsApp and email to minimize no-shows."
        }
      ]
    },
    {
      number: "10",
      title: "Growth Infrastructure",
      subtitle: "Reputation & Review Generation Engine",
      category: "Reputation Engine",
      summary: "A systematic in-person and digital review capture workflow that turns happy clients into 5-star Google reviews on autopilot.",
      items: [
        {
          title: "Smart QR Lobby Stands",
          description: "Custom branded tabletop acrylic QR stands that open your direct 5-star Google review screen in 1 tap."
        },
        {
          title: "Post-Service WhatsApp Triggers",
          description: "Automated post-appointment review request links sent at the moment of peak client satisfaction."
        },
        {
          title: "Review Aggregation Showcase",
          description: "Live verified Google reviews dynamically embedded on your website to build unbreakable social proof."
        }
      ]
    },
    {
      number: "11",
      title: "What We Build",
      subtitle: "Complete Digital Asset Inventory",
      category: "Scope of Work",
      summary: "A comprehensive breakdown of all physical and digital deliverables included in your MightBeMedia growth package.",
      items: [
        {
          title: "1. Bespoke Next.js Digital Flagship",
          description: "Custom designed, ultra-fast website with complete service pages, authority sections, and mobile booking."
        },
        {
          title: "2. Intelligent AI Lead Chatbot",
          description: "24/7 automated inquiry assistant with lead capture and WhatsApp integration."
        },
        {
          title: "3. Complete Meta Ads Campaign Setup",
          description: "Ad creative templates, audience architecture, pixel tracking, and conversion campaign structure."
        },
        {
          title: "4. Google Review Engine & QR Lobby Stands",
          description: "Custom designed physical QR stands + digital review funnel to multiply 5-star ratings."
        },
        {
          title: "5. Local Map Pack & Advanced SEO",
          description: "Structured schema, local citation alignment, and organic search optimization."
        },
        {
          title: "6. 3 Years Ongoing Support & Maintenance",
          description: "Hosting maintenance, security patches, uptime monitoring, and technical peace of mind."
        }
      ]
    },
    {
      number: "12",
      title: "Our Process",
      subtitle: "4-Phase Rapid Deployment Framework",
      category: "Execution Process",
      summary: "Our battle-tested sprint methodology guarantees delivery of your complete production system in 14 days without operational disruption.",
      items: [
        {
          title: "Phase 1: Discovery & Strategy (Days 1–3)",
          description: "Deep dive into your service offerings, competitive landscape, target audience, and brand positioning."
        },
        {
          title: "Phase 2: UI/UX & Copywriting (Days 4–7)",
          description: "Editorial design mockups, conversion-optimized copy, and brand asset refinement."
        },
        {
          title: "Phase 3: Engineering & Integrations (Days 8–11)",
          description: "Next.js codebase development, AI chatbot configuration, SEO schema, and WhatsApp automations."
        },
        {
          title: "Phase 4: QA, Launch & Handover (Days 12–14)",
          description: "Cross-device testing, Meta ads setup, QR stand deployment, and live production launch."
        }
      ]
    },
    {
      number: "13",
      title: "Investment",
      subtitle: "Transparent Commercial Structure",
      category: "Pricing & Retainer",
      summary: "Clear, predictable investment structure with zero hidden fees, comprehensive setup deliverables, and high-ROI monthly scaling.",
      metrics: [
        {
          value: "₹20,000",
          label: "One-Time Complete Setup",
          sublabel: "Full website, AI bot, Ads setup, QR stands & 3-yr support"
        },
        {
          value: "₹10,000",
          label: "Monthly Retainer",
          sublabel: "Social management, ad optimization, content & funnel scaling"
        }
      ],
      keyPoints: [
        "Complete Setup (₹20,000): Next.js Flagship Website + AI Chatbot + Meta Ads Setup + Google Review QR Engine + Local SEO + 3 Years Technical Support.",
        "Monthly Growth Retainer (₹10,000/mo): Ongoing social media maintenance, ad campaign scaling, conversion rate optimization, and monthly performance reviews.",
        "Guaranteed 14-Day Delivery: Production launch ready within 2 weeks of kickoff."
      ]
    },
    {
      number: "14",
      title: "Deliverables",
      subtitle: "Side-by-Side Scope Matrix",
      category: "Scope Breakdown",
      summary: "Complete transparency on what is delivered in the initial deployment versus ongoing monthly partnership.",
      tableData: {
        headers: ["Deliverable Item", "Initial Setup (₹20,000)", "Monthly Retainer (₹10,000/mo)"],
        rows: [
          { item: "Custom Next.js Digital Flagship", setup: "Included (Full Build)", ongoing: "Hosting & Uptime Maint." },
          { item: "AI Chatbot & Lead Intake", setup: "Configured & Trained", ongoing: "Continuous AI Prompt Tuning" },
          { item: "Meta Pixel & Ads Setup", setup: "Full Architecture", ongoing: "Campaign Optimization & Scaling" },
          { item: "Local SEO & Structured Schema", setup: "Complete Implementation", ongoing: "Rank Tracking & Updates" },
          { item: "Google Review QR Lobby Stands", setup: "Custom Designed & Delivered", ongoing: "Reputation Monitoring" },
          { item: "Social Media Strategy & Assets", setup: "Profile Optimization", ongoing: "Posts, Reels & Story Content" },
          { item: "Technical Support & Security", setup: "3 Years Included", ongoing: "Priority 24/7 SLA Response" }
        ]
      }
    },
    {
      number: "15",
      title: "Timeline",
      subtitle: "Guaranteed 14-Day Sprint Schedule",
      category: "Project Roadmap",
      summary: "A predictable, step-by-step roadmap from day one to live deployment and revenue generation.",
      items: [
        {
          title: "Days 1–3: Kickoff & Asset Collection",
          description: "Onboarding questionnaire, service list finalization, high-res photography handover, and domain setup."
        },
        {
          title: "Days 4–7: Design & Content Drafting",
          description: "Complete UI layout creation, persuasive copywriting, treatment descriptions, and doctor/team bios."
        },
        {
          title: "Days 8–11: Full-Stack Development",
          description: "Building responsive Next.js pages, integrating AI chatbot, setting up WhatsApp alerts, and schema."
        },
        {
          title: "Days 12–14: QA, Testing & Live Launch",
          description: "Speed optimization, mobile testing, Meta ads staging, and official DNS switch to live production."
        }
      ]
    },
    {
      number: "16",
      title: "Partnership",
      subtitle: "Why Visionary Businesses Choose MightBeMedia",
      category: "Why MightBeMedia",
      summary: "We operate as an extension of your leadership team—combining creative direction, deep software engineering, and quantifiable revenue growth.",
      items: [
        {
          title: "Complete Ownership & Zero Lock-In",
          description: "You own 100% of your domain, code, design assets, and ad accounts. No proprietary traps."
        },
        {
          title: "3 Years Comprehensive Support",
          description: "Never worry about broken plugins, server outages, or security vulnerabilities again."
        },
        {
          title: "Direct Access to Senior Builders",
          description: "Work directly with engineering leads and creative directors, not junior account coordinators."
        },
        {
          title: "Proven Revenue Track Record",
          description: "Over 9+ live production systems built across healthcare, commerce, education, and SaaS."
        }
      ]
    },
    {
      number: "17",
      title: "Let's Build",
      subtitle: "Ready to Scale Your Digital Revenue?",
      category: "Next Steps",
      summary: "Review this proposal and initiate your project kickoff with 1 tap via WhatsApp or direct phone consultation.",
      keyPoints: [
        "1. Tap 'Approve & Start on WhatsApp' to confirm your kickoff date.",
        "2. Complete the quick 10-minute onboarding brief.",
        "3. Your dedicated sprint begins immediately — live in 14 days."
      ],
      highlightBox: {
        title: "Kickoff Confirmation",
        description: "Initial Setup: ₹20,000 (One-Time) • Monthly Retainer: ₹10,000/mo • Delivery: 14 Days • 3-Year Support Included"
      }
    }
  ]
};
