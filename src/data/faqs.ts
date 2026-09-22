export interface FaqItem {
  number: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FaqItem[] = [
  {
    number: "01",
    question: "What services does MightBeMedia provide?",
    answer: "MightBeMedia is a growth-focused digital partner. We specialize in six core areas: High-Converting Website Development, Local and Organic SEO (Search Engine Optimization), Custom App Development, Scalable Software & Automation Systems, Rapid MVP Engineering for Startups, and Social Media Attention-to-Revenue Growth Systems.",
    category: "Services"
  },
  {
    number: "02",
    question: "How long does a website project take from start to finish?",
    answer: "A standard high-converting flagship website typically spans 2 to 4 weeks, encompassing business funnel audit, architectural design, full-stack Next.js development, SEO integration, and rigorous mobile testing. For lean MVPs, we offer accelerated 3-week sprints to get you to market rapidly.",
    category: "Timeline"
  },
  {
    number: "03",
    question: "Do you work with startups?",
    answer: "Yes, extensive startup work is in our DNA. We specialize in building functional, testable MVPs that allow founders to validate product-market fit, acquire initial users, and present working systems to angel and venture investors without burning months of runway.",
    category: "Startups"
  },
  {
    number: "04",
    question: "Do you build custom software and internal tools?",
    answer: "Absolutely. Beyond public-facing websites, we architect custom operational tools, automated client portals, appointment booking engines, and CRM integrations tailored to your specific business workflows.",
    category: "Software"
  },
  {
    number: "05",
    question: "Do you provide SEO alongside web development?",
    answer: "Yes. Every website we build is structured with technical SEO best practices, schema markup, semantic headings, and sub-second Core Web Vitals. We also provide dedicated ongoing local SEO campaigns and Google Maps domination systems.",
    category: "SEO"
  },
  {
    number: "06",
    question: "Do you provide ongoing technical support and maintenance?",
    answer: "Yes. We offer long-term technical care, security updates, hosting infrastructure management, and continuous conversion rate optimization (CRO) so your systems remain blazing fast and secure without internal technical overhead.",
    category: "Support"
  },
  {
    number: "07",
    question: "Can you work with international clients outside of India?",
    answer: "Yes. While our technical headquarters are in India, we work with ambitious founders, clinics, and businesses globally across North America, Europe, the Middle East, and Southeast Asia, managing projects seamlessly across time zones.",
    category: "Global"
  },
  {
    number: "08",
    question: "How is MightBeMedia different from a traditional design agency?",
    answer: "Traditional agencies focus on cosmetic deliverables — pretty color palettes and Figma templates that fail to move business metrics. MightBeMedia focuses on revenue architecture. We measure success by booked calls, reduced bounce rates, patient check-ins, and tangible commercial growth.",
    category: "Positioning"
  }
];
