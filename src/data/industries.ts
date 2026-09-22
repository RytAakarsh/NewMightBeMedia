export interface Industry {
  number: string;
  name: string;
  badge: string;
  problem: string;
  solution: string;
  capabilities: string[];
  proofMetric: string;
  previewImage: string;
}

export const industries: Industry[] = [
  {
    number: "01",
    name: "Coaches & Course Sellers",
    badge: "Knowledge & Consulting",
    problem: "Losing high-value leads on Instagram bio links. Thousands of views on educational reels, but zero structured call bookings or automated course checkouts.",
    solution: "We build dedicated high-converting sales funnels with automated calendar qualification, video sales letter (VSL) architecture, and instant payment checkout.",
    capabilities: ["Automated Qualification Funnels", "High-Converting VSL Pages", "Seamless Calendar Booking Integration", "Course Checkout & Upsell Systems"],
    proofMetric: "3.2x Booking Rate",
    previewImage: "/projects/modulus.png"
  },
  {
    number: "02",
    name: "Clinics & Doctors",
    badge: "Healthcare & Aesthetics",
    problem: "High-intent local patients searching for skin, hair, and dental treatments cannot find your clinic on Google Maps and bounce to competitors.",
    solution: "SEO-dominated clinical platforms with automated WhatsApp consultation booking, localized Google Map ranking, and automated 5-star review collection engines.",
    capabilities: ["Local Google Map Pack Domination", "Automated WhatsApp Consultation Routing", "Clinical Treatment Detail Architecture", "QR Code Lobby Review Systems"],
    proofMetric: "+180% Inquiries",
    previewImage: "/projects/viva.png"
  },
  {
    number: "03",
    name: "Trainers, Gyms & Studios",
    badge: "Fitness & Wellness",
    problem: "Relying on chaotic direct messages and paper intake forms to sell gym memberships and personal training packages, causing massive dropoff.",
    solution: "Bold, high-intensity digital brand experiences that showcase transformations, offer instant 1-click trial passes, and automate monthly recurring membership payments.",
    capabilities: ["Instant Trial Pass Booking Flow", "Transformation Social Proof Sliders", "Automated Membership Recurring Billing", "Class Schedule & Trainer Rosters"],
    proofMetric: "45% Trial-to-Member",
    previewImage: "/projects/sem.png"
  },
  {
    number: "04",
    name: "Startup Founders",
    badge: "Tech & Products",
    problem: "Stuck in 6-month developer agency limbo with bloated estimates while cash burns and market validation remains completely unproven.",
    solution: "Rapid 3-to-4 week functional MVPs engineered using modern Next.js stacks. We build the exact core mechanics required to acquire first users and validate PMF.",
    capabilities: ["21-Day MVP Rapid Execution", "Clean Scalable TypeScript Architecture", "User Telemetry & Event Analytics", "Investor Demo Preparation"],
    proofMetric: "18-Day Launch",
    previewImage: "/projects/baristai.png"
  }
];
