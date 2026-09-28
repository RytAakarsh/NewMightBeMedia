export interface Project {
  id: string;
  number: string;
  name: string;
  tag: string;
  category: string;
  summary: string;
  preview: string;
  url: string;
  liveUrl?: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  results: string[];
  deliverables: string[];
}

export const projects: Project[] = [
  {
    id: "sommie",
    number: "01",
    name: "Sommie",
    tag: "SaaS Platform",
    category: "Web Application & Funnel",
    summary: "AI-powered digital beverage platform engineered with high-conversion checkout flows, sub-second latency, and intuitive subscription workflows.",
    preview: "/projects/sommie.png",
    url: "https://pro.sommie.io/",
    liveUrl: "https://pro.sommie.io/",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Stripe Connect", "Node.js", "PostgreSQL"],
    metrics: [
      { label: "Checkout Completion", value: "+34%" },
      { label: "Page Load Speed", value: "0.6s" },
      { label: "Monthly Active Users", value: "15k+" }
    ],
    challenge: "High subscriber drop-off on legacy onboarding and sluggish mobile interaction speeds.",
    solution: "Engineered a custom headless Next.js digital flagship with multi-tier subscription onboarding and zero-latency state sync.",
    results: [
      "Increased checkout progression by 34% within 60 days.",
      "Reduced mobile page load latency from 2.8s to 0.6s.",
      "Automated user retention and automated churn prevention workflows."
    ],
    deliverables: ["Full-Stack Next.js Codebase", "Stripe Billing Infrastructure", "Mobile-Perfect Responsive Architecture", "Event-Driven Telemetry Dashboard"]
  },
  {
    id: "baristai",
    number: "02",
    name: "BaristaI",
    tag: "AI Product",
    category: "AI Web Application & MVP",
    summary: "Intelligent AI-powered beverage recommendation engine built from 0-to-1 in 4 weeks for early investor demonstration and rapid user acquisition.",
    preview: "/projects/baristai.png",
    url: "https://mvp.baristai.online/",
    liveUrl: "https://mvp.baristai.online/",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Serverless Vercel Edge", "Prisma"],
    metrics: [
      { label: "Time to Launch", value: "28 Days" },
      { label: "Daily Active Users", value: "4.2k" },
      { label: "User Engagement Lift", value: "3.2x" }
    ],
    challenge: "Founder needed a functional, investor-ready AI product ready for demonstration within 30 days.",
    solution: "Designed a lean, high-momentum full-stack MVP with real-time streaming LLM responses and intuitive tasting preference sliders.",
    results: [
      "Delivered production-ready live build in under 28 days.",
      "Facilitated successful seed-stage angel investment backing.",
      "Achieved 72% repeat usage rate among early beverage enthusiasts."
    ],
    deliverables: ["Functional Live AI MVP", "Custom AI Prompt & Token Pipeline", "Frictionless Guest Onboarding", "Investor Demo Analytics Suite"]
  },
  {
    id: "viva-skin-care",
    number: "03",
    name: "Viva Skin Care",
    tag: "Skin & Hair Clinic",
    category: "Healthcare Conversion Flagship",
    summary: "High-trust clinical conversion system engineered for a premier dermatology clinic, capturing urgent local search traffic and driving direct patient bookings.",
    preview: "/projects/viva.png",
    url: "https://vivaskincare.in/",
    liveUrl: "https://vivaskincare.in/",
    technologies: ["Next.js", "Local Map Pack Schema", "WhatsApp Direct Routing", "Tailwind CSS", "SEO Infrastructure"],
    metrics: [
      { label: "Inbound Consultation Inquiries", value: "+180%" },
      { label: "Local Map Pack Ranking", value: "Top 3" },
      { label: "Mobile Appointment Bookings", value: "+45%" }
    ],
    challenge: "Clinic was losing high-intent local patients to competitors due to low organic search visibility and a slow, cluttered site.",
    solution: "Constructed an authoritative clinical conversion flagship with localized doctor credentials, treatment guides, and 1-tap WhatsApp consultation scheduling.",
    results: [
      "Dominated Top 3 local search map pack for 18+ high-intent clinical search queries.",
      "Lifted monthly patient consultation bookings by 180% in 90 days.",
      "Reduced average appointment inquiry response time to under 3 minutes via automated routing."
    ],
    deliverables: ["Next.js Medical Flagship", "Local Clinical Schema Optimization", "WhatsApp Direct Lead Routing", "Treatment Funnel Architecture"]
  },
  {
    id: "modulus-classes",
    number: "04",
    name: "Modulus Classes",
    tag: "Course Funnel",
    category: "Education & Enrollment Engine",
    summary: "High-intent education portal and student enrollment funnel engineered to turn passive student traffic into enrolled batch applicants.",
    preview: "/projects/modulus.png",
    url: "https://modulusclasses.in/",
    liveUrl: "https://modulusclasses.in/",
    technologies: ["React", "Next.js", "Formspree Automation", "Tailwind CSS", "Cloudflare CDN"],
    metrics: [
      { label: "Enrollment Inquiries", value: "2.4x" },
      { label: "Bounce Rate Reduction", value: "-42%" },
      { label: "Batch Fill Velocity", value: "2 Weeks" }
    ],
    challenge: "Education academy struggled with manual admissions handling, leading to lost student follow-ups and unfilled classroom batches.",
    solution: "Engineered an interactive course selection and scholarship exam registration funnel with automated SMS/WhatsApp alerts.",
    results: [
      "Filled upcoming academic batches 2 weeks ahead of historical target deadlines.",
      "Cut admission inquiry drop-off by 42% on mobile devices.",
      "Streamlined candidate tracking with automated CRM handoffs."
    ],
    deliverables: ["Course Enrollment Portal", "Interactive Fee & Scholarship Calculator", "Batch Timing Scheduler", "Automated Lead Notifications"]
  },
  {
    id: "sem-fitness",
    number: "05",
    name: "SEM Fitness",
    tag: "Brand Website",
    category: "Fitness Ecosystem & Membership Engine",
    summary: "Bold, high-energy digital brand flagship engineered for a high-performance fitness studio to drive trial memberships and personal training signups.",
    preview: "/projects/sem.png",
    url: "https://sem-fitness.vercel.app/",
    liveUrl: "https://sem-fitness.vercel.app/",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel Edge", "WhatsApp API"],
    metrics: [
      { label: "Trial Pass Registrations", value: "+210%" },
      { label: "Average Session Duration", value: "3m 40s" },
      { label: "Mobile Engagement", value: "88%" }
    ],
    challenge: "Generic gym website failed to convey premium athletic prestige and converted poorly from Instagram ads.",
    solution: "Crafted a high-contrast, editorial fitness showcase with trainer video spotlights and an instant 1-day pass booking system.",
    results: [
      "Lifted paid trial gym pass bookings by 210% in the first quarter.",
      "Achieved an exceptional 3m 40s average session duration from paid social traffic.",
      "Established brand as the top premium fitness hub in the local territory."
    ],
    deliverables: ["Performance Fitness Flagship", "Interactive Class Schedule Matrix", "Trainer Profile Funnels", "Trial Booking Automation"]
  },
  {
    id: "clear-skin-clinic",
    number: "06",
    name: "Clear Skin Clinic",
    tag: "Aesthetic Healthcare",
    category: "Skin & Aesthetic Clinic",
    summary: "Clear Skin Clinic is a premium skin and aesthetic healthcare brand led by Dr. Nikita Baid. MightBeMedia is building its digital presence around doctor authority, treatment discovery, patient trust, and seamless consultation conversion.",
    preview: "/projects/clearskin.png",
    url: "https://theclearskinclinic.com/",
    liveUrl: "https://theclearskinclinic.com/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "SEO Architecture"],
    metrics: [
      { label: "Brand Leadership", value: "Dr. Nikita Baid" },
      { label: "Focus", value: "Consultation Growth" },
      { label: "Architecture", value: "High-Speed Next.js" }
    ],
    challenge: "Establishing a premium digital flagship that communicates medical authority, showcases treatments cleanly, and converts local search interest into booked consultations.",
    solution: "Engineered a high-performance aesthetic medical experience with structured treatment pathways, doctor credentials, and 1-tap consultation scheduling.",
    results: [
      "Positioned brand as a premier aesthetic clinic destination.",
      "Structured seamless consultation intake workflows.",
      "Engineered sub-second mobile performance and local SEO architecture."
    ],
    deliverables: ["Aesthetic Healthcare Flagship", "Treatment Discovery Architecture", "Doctor Authority & Credentials Matrix", "Consultation Intake System"]
  },
  {
    id: "prime-sports",
    number: "07",
    name: "Prime Sports Academy",
    tag: "Sports Academy",
    category: "Athletics & Training Portal",
    summary: "Comprehensive multi-sport academy platform built for court reservations, youth training program registrations, and tournament scheduling.",
    preview: "/projects/primesports.png",
    url: "https://prime-sports-academy.vercel.app/",
    liveUrl: "https://prime-sports-academy.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Calendar Sync", "Vercel"],
    metrics: [
      { label: "Court Slot Bookings", value: "+95%" },
      { label: "Youth Academy Registrations", value: "+75%" },
      { label: "Administrative Overhead", value: "-60%" }
    ],
    challenge: "Academy was overwhelmed by chaotic manual WhatsApp bookings and double-booked training sessions.",
    solution: "Engineered an automated real-time facility scheduler with instant slot confirmation and coach assignment.",
    results: [
      "Eliminated booking errors completely while growing slot revenue by 95%.",
      "Cut administrative coordination workload by 60% within 30 days.",
      "Expanded youth athletic training program enrollment by 75%."
    ],
    deliverables: ["Facility Booking Architecture", "Youth Training Intake Funnel", "Coach & Arena Schedule Engine", "Automated Slot Confirmation"]
  },
  {
    id: "passion-crafted",
    number: "08",
    name: "Passion Crafted",
    tag: "E-Commerce",
    category: "Artisanal Commerce Engine",
    summary: "Bespoke e-commerce digital flagship crafted for high-end lifestyle products, featuring seamless product curation and friction-free mobile checkout.",
    preview: "/projects/passioncrafted.png",
    url: "https://passioncrafted.com/",
    liveUrl: "https://passioncrafted.com/",
    technologies: ["Next.js", "Tailwind CSS", "Headless Cart", "Payment Gateways", "Dynamic CMS"],
    metrics: [
      { label: "Average Order Value", value: "+28%" },
      { label: "Mobile Checkout Velocity", value: "1.2s" },
      { label: "Return Customer Rate", value: "38%" }
    ],
    challenge: "Slow third-party template caused high cart abandonment on high-ticket artisanal purchases.",
    solution: "Rebuilt from the ground up with custom Next.js storefront, high-resolution visual storytelling, and 1-tap checkout.",
    results: [
      "Boosted Average Order Value (AOV) by 28% through intelligent cart upsells.",
      "Reduced mobile checkout drop-off by 35% with streamlined payment routing.",
      "Delivered an editorial shopping experience matching luxury retail standards."
    ],
    deliverables: ["Custom Headless E-Commerce Codebase", "High-Performance Product Gallery", "1-Tap Checkout Optimization", "Dynamic Inventory Integration"]
  },
  {
    id: "the-celebration-store",
    number: "09",
    name: "The Celebration Store",
    tag: "E-Commerce Engine",
    category: "B2B + B2C E-Commerce",
    summary: "The Celebration Store is a new celebration and party essentials brand being built from scratch by MightBeMedia, designed to serve both B2C customers and B2B buyers across India.",
    preview: "/projects/thecelebrationstore.png",
    url: "https://thecelebrationstore.in/",
    liveUrl: "https://thecelebrationstore.in/",
    technologies: ["Next.js", "E-Commerce Architecture", "Tailwind CSS", "TypeScript", "Catalog & Search Engine"],
    metrics: [
      { label: "Business Model", value: "B2B + B2C" },
      { label: "Market", value: "All-India Scope" },
      { label: "Brand Positioning", value: "Make Every Moment Special" }
    ],
    challenge: "Building a brand-new digital commerce presence from scratch that caters to individual celebration shoppers as well as bulk B2B event organizers.",
    solution: "Architecting a unified, scalable e-commerce platform with categorized party essentials discovery, return gifts, German silver collections, and streamlined ordering.",
    results: [
      "Engineered modern 0-to-1 e-commerce foundation for nationwide reach.",
      "Structured dual B2B bulk inquiry and B2C direct cart pathways.",
      "Crafted vibrant, celebratory visual brand identity system."
    ],
    deliverables: ["Full-Stack E-Commerce Storefront", "Multi-Category Product Directory", "B2B Bulk Inquiry System", "Fast Mobile Checkout Flow"]
  }
];
