export interface Service {
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  ticker: string[];
  visualType: "browser" | "analytics" | "mobile" | "system" | "mvp" | "social";
  deliverables: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Website Development",
    shortDescription: "High-converting digital flagship platforms engineered for maximum conversion velocity, brand prestige, and technical resilience.",
    fullDescription: "We do not build generic digital brochures. We build conversion engines structured meticulously around your customer's decision journey. Every heading, interaction, and checkout touchpoint is engineered to minimize friction and maximize completed actions.",
    capabilities: [
      "Custom Next.js & React Architecture",
      "Conversion Funnel UX/UI",
      "Sub-Second Page Load Optimization",
      "E-Commerce & Headless Commerce",
      "CMS & Dynamic Content Engineering",
      "Conversion Tracking & Analytics Instrumentation"
    ],
    ticker: ["HIGH-CONVERTING DESIGN", "FUNNEL ARCHITECTURE", "SUB-SECOND LOAD", "CUSTOM CMS", "CONVERSION OPTIMIZED"],
    visualType: "browser",
    deliverables: ["Custom Full-Stack Codebase", "Mobile-Perfect Responsive Layouts", "Automated Form Routing", "Full Analytics Setup"]
  },
  {
    number: "02",
    title: "SEO — Search Engine Optimization",
    shortDescription: "Capturing active, high-intent prospects precisely when they search for your exact solution on Google search and maps.",
    fullDescription: "Unlike passive social media viewers, Google searchers possess urgent buying intent. Our data-driven search architecture captures local map packs, organic keyword dominance, and structured schema, turning search intent into inbound revenue.",
    capabilities: [
      "High-Intent Organic Keyword Domination",
      "Google Business Profile & Map Pack Ranking",
      "Technical SEO & Core Web Vitals Auditing",
      "Programmatic Content Systems",
      "Local Map Optimization & Localized Schema",
      "Competitor Keyword Gap Analysis"
    ],
    ticker: ["LOCAL MAP DOMINANCE", "HIGH-INTENT TRAFFIC", "STRUCTURED SCHEMA", "CORE WEB VITALS", "ORGANIC REVENUE"],
    visualType: "analytics",
    deliverables: ["Comprehensive Keyword Strategy", "Google Map Optimization", "Structured Data Integration", "Monthly Growth Tracking"]
  },
  {
    number: "03",
    title: "App Development",
    shortDescription: "Intuitive, high-performance mobile and tablet applications designed for daily engagement, frictionless retention, and scalable architectures.",
    fullDescription: "Native and cross-platform mobile solutions built to become indispensable daily habits. We pair uncompromising visual craftsmanship with bulletproof backend integrations to deliver native performance and seamless transactions.",
    capabilities: [
      "Cross-Platform iOS & Android Engineering",
      "High-Retention Mobile UX/UI",
      "Frictionless Onboarding & In-App Payments",
      "Real-Time Push Notification Funnels",
      "Offline Synchronization & Local Storage",
      "App Store Optimization (ASO)"
    ],
    ticker: ["NATIVE PERFORMANCE", "CROSS-PLATFORM", "RETENTION LOOPS", "FRICTIONLESS PAYMENTS", "PUSH NOTIFICATIONS"],
    visualType: "mobile",
    deliverables: ["App Store & Play Store Builds", "Complete Source Code", "Scalable API Architecture", "Retention Dashboard"]
  },
  {
    number: "04",
    title: "Software Development",
    shortDescription: "Bespoke business automation engines, custom internal dashboards, and scalable backends that eliminate operational bottlenecks.",
    fullDescription: "When off-the-shelf software hinders your growth, we build bespoke systems tailored to your unique operational workflow. From custom client portals to automated lead-routing pipelines, our software scales effortlessly with your bottom line.",
    capabilities: [
      "Custom Client Portals & Dashboards",
      "Automated Workflow & Lead Routing Engines",
      "Complex Database Architecture & SQL/NoSQL",
      "Third-Party API & Webhook Integrations",
      "Role-Based Access Control & Security Auditing",
      "Cloud Infrastructure & Microservices"
    ],
    ticker: ["CUSTOM DASHBOARDS", "WORKFLOW AUTOMATION", "ROBUST APIS", "SECURE DATA PIPELINES", "ZERO-BOTTLENECK"],
    visualType: "system",
    deliverables: ["Production-Ready Software System", "Database Migration Suite", "Admin Control Center", "Full Architecture Documentation"]
  },
  {
    number: "05",
    title: "MVP for Startups",
    shortDescription: "From raw concept to functional, testable product in 3 to 6 weeks. Proof of concept engineered to acquire users and secure investment.",
    fullDescription: "Startups fail when they spend 9 months building in the dark. We accelerate your 0-to-1 trajectory by isolating core user value, stripping out bloated non-essentials, and launching a bulletproof MVP designed for immediate user feedback and rapid iteration.",
    capabilities: [
      "Rapid 0-to-1 Scope Definition",
      "3–6 Week Full-Stack Product Build",
      "Lean User Journey & Retention Funnels",
      "Early Adopter Analytics & Feedback Loops",
      "Investor-Ready Technical Architecture",
      "Post-Launch Iteration Roadmaps"
    ],
    ticker: ["0 TO 1 IN 21 DAYS", "INVESTOR-READY", "FEEDBACK-DRIVEN", "LEAN VALUE CORE", "RAPID ITERATION"],
    visualType: "mvp",
    deliverables: ["Functional Live MVP", "User Onboarding Funnel", "Telemetry & Event Tracking", "Investor Pitch Deck Demo"]
  },
  {
    number: "06",
    title: "Social Media Growth",
    shortDescription: "Authority-building content distribution systems that convert fleeting views and reels into qualified inbound leads and paying clients.",
    fullDescription: "Views without conversions are vanity. We build full-funnel content ecosystems that connect viral reach, high-relevance bio funnels, and automated direct message / WhatsApp nurturing systems to create predictable customer acquisition.",
    capabilities: [
      "High-Retention Scriptwriting & Content Formats",
      "Editorial Video Direction & Post-Production",
      "Attention-to-Inquiry Bio Funnel Engineering",
      "Automated DM & WhatsApp Conversation Nurturing",
      "Multi-Platform Distribution Infrastructure",
      "Paid Retargeting & Lookalike Audience Amplification"
    ],
    ticker: ["ATTENTION TO REVENUE", "RETENTION SCRIPTS", "AUTOMATED DM FUNNELS", "VIRAL AUTHORITY", "LEAD CAPTURE"],
    visualType: "social",
    deliverables: ["Monthly Content Calender & Scripts", "High-End Edited Video Assets", "Direct Message Lead Funnels", "Audience Conversion Analytics"]
  }
];
