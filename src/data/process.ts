export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  detailedAnalysis: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand Business & Economics",
    shortDesc: "We do not start in Figma; we start with your unit economics, acquisition costs, and customer lifetime value.",
    detailedAnalysis: "We analyze your exact profit margins, sales cycle length, traffic acquisition channels, and high-value customer segments to define quantifiable revenue benchmarks.",
    deliverables: ["Commercial Unit Economics Audit", "Competitor Keyword & Positioning Gap Map", "Customer Acquisition Blueprint"]
  },
  {
    number: "02",
    title: "Identify Conversion Gaps",
    shortDesc: "Diagnosing where high-intent traffic leaks from your current website and communication touchpoints.",
    detailedAnalysis: "We dissect your existing site architecture, mobile responsiveness, Core Web Vitals, form submission drop-offs, and trust deficits preventing visitors from taking immediate action.",
    deliverables: ["Friction Bottleneck Matrix", "Core Web Vitals Speed Diagnostic", "Cognitive UX Audit"]
  },
  {
    number: "03",
    title: "Build Growth System",
    shortDesc: "Engineering the custom digital flagship, conversion funnels, and automated backend infrastructure.",
    detailedAnalysis: "Our full-stack team builds your platform on Next.js, crafts benefit-first editorial copy, and instruments instant WhatsApp / CRM routing engines for seamless conversion.",
    deliverables: ["Custom Full-Stack Next.js Platform", "Conversion Funnel & Wireframe System", "Automated Lead Routing Infrastructure"]
  },
  {
    number: "04",
    title: "Launch & Optimize",
    shortDesc: "Deploying to global edge networks, verifying telemetry tracking, and running multi-variant conversion tests.",
    detailedAnalysis: "We launch with sub-second page performance, verify event-level analytics attribution across all traffic sources, and initiate continuous headline and CTA optimization sprints.",
    deliverables: ["Global Cloudflare / Vercel Edge Deployment", "End-to-End Analytics Attribution Setup", "Live Conversion Optimization Audit"]
  },
  {
    number: "05",
    title: "Scale Revenue",
    shortDesc: "Expanding high-intent search rankings, localized map dominance, and compounding inbound acquisition.",
    detailedAnalysis: "We systematically execute transactional SEO strategies, programmatic authority content, and automated nurturing to continually lower customer acquisition costs and scale top-line revenue.",
    deliverables: ["High-Intent SEO Ranking Dominance", "Quarterly Conversion Rate Enhancements", "Standing Technical & Growth Partnership"]
  }
];
