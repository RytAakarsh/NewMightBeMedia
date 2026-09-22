export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-most-agency-redesigns-fail-to-increase-revenue",
    title: "Why Most Agency Redesigns Fail to Increase Revenue (And What Actually Moves the Needle)",
    date: "SEP 2026",
    readTime: "5 MIN READ",
    category: "CONVERSION ARCHITECTURE",
    excerpt: "Cosmetic redesigns often destroy organic rankings and confuse existing customers. Here is how to rebuild digital systems around funnel mechanics rather than aesthetic vanity.",
    author: "MightBeMedia Strategy Team"
  },
  {
    slug: "the-missing-conversion-bridge-turning-social-attention-into-patients",
    title: "The Missing Conversion Bridge: Turning Social Media Attention Into Paying Consultations",
    date: "AUG 2026",
    readTime: "7 MIN READ",
    category: "CLINIC & LOCAL GROWTH",
    excerpt: "Thousands of viewers watch your viral video content every month, but zero show up in your waiting room. A breakdown of the attention leak and how to engineer the conversion bridge.",
    author: "Growth Architecture Team"
  },
  {
    slug: "the-21-day-mvp-playbook-for-first-time-founders",
    title: "The 21-Day MVP Playbook: How Founders Validate Demand Without Burning Runway",
    date: "JUL 2026",
    readTime: "6 MIN READ",
    category: "STARTUPS & MVP",
    excerpt: "Why spending nine months building an unproven product is startup suicide. A disciplined blueprint for stripping scope to the core value mechanism and launching in three weeks.",
    author: "Product Engineering Team"
  },
  {
    slug: "google-maps-domination-for-clinics-and-high-ticket-local-services",
    title: "Google Maps Domination: How High-Ticket Local Services Capture Ready-To-Buy Clients",
    date: "JUN 2026",
    readTime: "8 MIN READ",
    category: "LOCAL SEO",
    excerpt: "The math behind local search queries. When a prospect searches for a clinic or coach near them, intent is already at 90%. How to structure your local entity and review loops.",
    author: "Search Systems Team"
  }
];
