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
    id: "she-and-soul",
    number: "06",
    name: "She & Soul",
    tag: "Women Healthcare",
    category: "Wellness & Clinical Telehealth",
    summary: "Empathetic, privacy-focused digital wellness platform designed for specialized women's health consultations and recurring wellness programs.",
    preview: "/projects/she&soul.png",
    url: "https://sheandsoul.co.in/",
    liveUrl: "https://sheandsoul.co.in/",
    technologies: ["Next.js", "Tailwind CSS", "HIPAA-Compliant Form Pipelines", "Razorpay", "TypeScript"],
    metrics: [
      { label: "Telehealth Inquiries", value: "+145%" },
      { label: "Patient Trust Score", value: "98%" },
      { label: "Repeat Program Retention", value: "62%" }
    ],
    challenge: "Sensitive medical topics required an extraordinarily reassuring, accessible, and confidential user interface.",
    solution: "Designed a soothing editorial medical experience with anonymous symptom-checking flows and direct private physician booking.",
    results: [
      "Increased remote telehealth consultation inquiries by 145%.",
      "Achieved a 98% patient satisfaction and trust rating on initial onboarding.",
      "Maintained 62% quarterly program retention through automated wellness check-ins."
    ],
    deliverables: ["Confidential Telehealth Flagship", "Symptom Self-Assessment Funnel", "Integrated Payment Gateway", "Automated Patient Onboarding"]
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
  }
];
