export interface Industry {
  number: string;
  name: string;
  badge: string;
  problem: string;
  solution: string;
  capabilities: string[];
  proofMetric: string;
  accent: string;
}

export const industries: Industry[] = [
  {
    number: "01",
    name: "Coaches & Course Sellers",
    badge: "HIGH-CONVERTING FUNNELS",
    problem: "High ad spend driving traffic to generic landing pages with low trust, high drop-off rates, and manual, messy follow-ups.",
    solution: "Bespoke high-converting sales funnels, high-trust visual proof, automated WhatsApp lead nurture sequences, and 1-click checkout architectures.",
    capabilities: ["Automated WhatsApp Nurture", "High-Converting Sales Pages", "Video Sales Letter (VSL) Frameworks", "Dynamic Checkout Systems"],
    proofMetric: "3.4x Conversion Lift",
    accent: "#FF0000"
  },
  {
    number: "02",
    name: "Clinics & Doctors",
    badge: "LOCAL PATIENT ENGINES",
    problem: "Losing high-intent local patients to competitors because of poor Google map rankings and confusing appointment booking processes.",
    solution: "Local Map Pack dominance, verified clinical credentials, treatment-specific landing pages, and instant 1-tap WhatsApp consultation scheduling.",
    capabilities: ["Google Map 3-Pack Dominance", "Instant Patient WhatsApp Routing", "Doctor Authority Credentialing", "Treatment Funnel Architecture"],
    proofMetric: "180% More Monthly Bookings",
    accent: "#FF0000"
  },
  {
    number: "03",
    name: "Trainers, Gyms & Studios",
    badge: "MEMBERSHIP SCALE",
    problem: "Relying purely on unpredictable walk-ins, messy DM conversations, and high monthly member churn.",
    solution: "High-energy brand flagships, automated free trial & day-pass funnels, client transformation showcases, and structured recurring membership flows.",
    capabilities: ["Trial Pass Booking Funnels", "Trainer Spotlight Showcases", "Automated SMS/DM Follow-Up", "Recurring Membership Portals"],
    proofMetric: "+210% Trial Registrations",
    accent: "#FF0000"
  },
  {
    number: "04",
    name: "Startup Founders",
    badge: "RAPID 0→1 MVP",
    problem: "Spending 9 months building bloated software in the dark without market validation or investor-ready metrics.",
    solution: "Rapid 0-to-1 prototype and functional MVP built in 3–6 weeks, complete with analytics tracking, onboarding flows, and investor demonstration decks.",
    capabilities: ["3-6 Week MVP Sprints", "Full-Stack Web & Mobile Codebases", "User Telemetry & Event Analytics", "Investor Demo Architecture"],
    proofMetric: "0 to Live in 28 Days",
    accent: "#FF0000"
  }
];
