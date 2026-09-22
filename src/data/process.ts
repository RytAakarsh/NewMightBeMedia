export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  detailedAnalysis: string;
  deliverables: string[];
  keyQuestion: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand Business",
    shortDesc: "We deep-dive into your economics, customer acquisition bottlenecks, and unit margins before writing a single line of code.",
    detailedAnalysis: "Most design shops start with Figma colors. We start with your balance sheet. We map your average order value, customer lifetime value, inquiry-to-close ratios, and exact customer journey to identify where capital is being lost.",
    deliverables: ["Comprehensive Business Funnel Audit", "Target Buyer Persona Archetypes", "Conversion Bottleneck Diagnostic"],
    keyQuestion: "Where does your current customer attention originate, and exactly why does it fail to convert?"
  },
  {
    number: "02",
    title: "Identify Conversion Gaps",
    shortDesc: "We dissect where traffic leaks out of your current funnel and systematically architect the conversion bridge.",
    detailedAnalysis: "We analyze bounce points across devices, scan form submission dropoffs, evaluate search competition rankings, and inspect mobile checkout friction to prioritize solutions by highest revenue impact.",
    deliverables: ["Dropoff Heatmap & Friction Matrix", "Competitor Architecture Benchmarks", "High-Priority Fix Roadmap"],
    keyQuestion: "What is the single biggest friction barrier stopping high-intent visitors from taking action?"
  },
  {
    number: "03",
    title: "Build Growth System",
    shortDesc: "We engineer a bespoke, conversion-obsessed digital experience with sub-second speeds and flawless ergonomics.",
    detailedAnalysis: "Full-stack engineering combining Next.js, editorial typographic hierarchy, responsive layouts, automated CRM routing, and local SEO metadata. Every pixel serves a commercial objective.",
    deliverables: ["Custom Full-Stack Web Architecture", "Conversion Funnel & Lead Capture Engine", "Local SEO & Structured Schema Suite"],
    keyQuestion: "Does every section of this experience advance the prospect to a high-intent commercial decision?"
  },
  {
    number: "04",
    title: "Launch & Optimize",
    shortDesc: "We deploy with zero downtime, conduct rigorous live telemetry testing, and eliminate all post-launch bugs.",
    detailedAnalysis: "Going live is just day one. We monitor live user sessions, track conversion milestone funnels, stress-test database integrations under real traffic, and optimize performance parameters immediately.",
    deliverables: ["Production Cloud Deployment", "Event Telemetry & Analytics Dashboard", "Stress Testing & Core Web Vitals Audit"],
    keyQuestion: "Are conversions registering flawlessly across all mobile viewports, payment gateways, and forms?"
  },
  {
    number: "05",
    title: "Scale Revenue",
    shortDesc: "We double down on verified conversion winners, compound organic search rankings, and scale client acquisition.",
    detailedAnalysis: "With a proven conversion baseline established, we activate organic keyword expansion, automated review collection loops, and retargeting systems to systematically multiply your monthly client bookings.",
    deliverables: ["Monthly Funnel Optimization Reports", "Continuous SEO & Local Keyword Expansion", "Automated Reputation Review Engine"],
    keyQuestion: "How do we compound your customer acquisition efficiency month after month?"
  }
];
