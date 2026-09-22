export interface Project {
  id: string;
  name: string;
  tag: string;
  category: string;
  url: string;
  preview: string;
  summary: string;
  client: string;
  year: string;
  challenge: string;
  approach: string;
  solution: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "sommie",
    name: "Sommie",
    tag: "SaaS Platform",
    category: "Product & Web App",
    url: "https://pro.sommie.io/",
    preview: "/projects/sommie.png",
    summary: "High-performance SaaS platform engineered for seamless operational workflows and instantaneous user onboarding.",
    client: "Sommie Technologies",
    year: "2025",
    challenge: "Complex product capabilities required an ultra-clean, intuitive interface to prevent trial abandonments and elevate conversion to paid tiers.",
    approach: "Eliminated visual clutter in favor of an authoritative monochrome dashboard architecture with laser-focused conversion paths.",
    solution: "Built a responsive Next.js application with zero-friction onboarding, real-time feedback mechanisms, and optimized checkout funnels.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API Integrations", "Analytics"],
    metrics: [
      { label: "Onboarding Completion", value: "+38%" },
      { label: "Churn Reduction", value: "-22%" }
    ]
  },
  {
    id: "baristai",
    name: "BaristaI",
    tag: "AI Product",
    category: "AI MVP & Experience",
    url: "https://mvp.baristai.online/",
    preview: "/projects/baristai.png",
    summary: "Autonomous AI-powered coffee intelligence platform translating user taste profiles into tailored coffee experiences.",
    client: "BaristaI AI Labs",
    year: "2025",
    challenge: "Developing an engaging MVP that proves consumer demand rapidly without technical bloat or excessive development runway.",
    approach: "Designed a lean, hyper-focused interaction model centered around dynamic natural language prompts and instant sensory recommendation loops.",
    solution: "Rapid MVP engineered in under 3 weeks, driving immediate early adopter traction and investor validation.",
    technologies: ["React", "TypeScript", "LLM APIs", "Tailwind CSS", "Vercel"],
    metrics: [
      { label: "Validation Time", value: "18 Days" },
      { label: "Daily Active Users", value: "4.2k" }
    ]
  },
  {
    id: "viva-skin-care",
    name: "Viva Skin Care",
    tag: "Skin & Hair Clinic",
    category: "Clinical Growth System",
    url: "https://vivaskincare.in",
    preview: "/projects/viva.png",
    summary: "Premier clinical dermatology growth ecosystem transforming casual local searches into verified, booked patient appointments.",
    client: "Viva Skin & Hair Clinic",
    year: "2025",
    challenge: "High social media reel engagement was failing to convert into clinical consultations due to friction-heavy manual inquiry loops.",
    approach: "Constructed an omnichannel patient bridge connecting local Google Discovery, clinical treatment validation, and an automated WhatsApp booking flow.",
    solution: "High-converting clinical portal with dedicated treatment pages, interactive before/after showcases, and direct appointment scheduling.",
    technologies: ["React", "Local SEO Suite", "WhatsApp API", "Tailwind CSS", "Google Reviews Engine"],
    metrics: [
      { label: "Booked Consultations", value: "3.4x" },
      { label: "Google Rank Position", value: "#1 Local" }
    ]
  },
  {
    id: "modulus-classes",
    name: "Modulus Classes",
    tag: "Course Funnel",
    category: "EdTech & Education",
    url: "https://www.modulusclasses.in/",
    preview: "/projects/modulus.png",
    summary: "High-converting educational funnel and enrollment engine capturing ambitious students for competitive academic programs.",
    client: "Modulus Academy",
    year: "2025",
    challenge: "Students and parents were dropping off standard information pages without submitting inquiry forms or booking diagnostic tests.",
    approach: "Engineered a persuasive educational funnel focusing on student outcomes, verified faculty proof, and instant scholarship test registration.",
    solution: "Custom multi-step enrollment funnel with automated SMS/email reminders and localized course curriculum breakdowns.",
    technologies: ["Next.js", "Enrollment CRM", "Tailwind CSS", "Form Automation", "Analytics"],
    metrics: [
      { label: "Inquiry Velocity", value: "+140%" },
      { label: "Test Registrations", value: "1,200+" }
    ]
  },
  {
    id: "sem-fitness",
    name: "SEM Fitness",
    tag: "Brand Website",
    category: "Fitness & Performance",
    url: "https://sem-fitness.vercel.app/",
    preview: "/projects/sem.png",
    summary: "Bold, high-octane fitness brand website engineered to convert casual fitness enthusiasts into committed gym members.",
    client: "SEM Fitness Club",
    year: "2025",
    challenge: "Generic gym landing pages failed to communicate the intensity, community, and transformative coaching offered by SEM.",
    approach: "Designed a visceral, high-contrast dark aesthetic with micro-interactions, trainer highlights, and immediate trial booking triggers.",
    solution: "Ultra-fast Next.js website featuring membership tier comparisons, class schedule calendars, and automated lead routing.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe Checkout", "Vercel"],
    metrics: [
      { label: "Trial Pass Signups", value: "+85%" },
      { label: "Mobile Bounce Rate", value: "-34%" }
    ]
  },
  {
    id: "she-soul",
    name: "She & Soul",
    tag: "Women Healthcare",
    category: "Healthcare & Wellness",
    url: "https://www.sheandsoul.co.in/",
    preview: "/projects/she&soul.png",
    summary: "Compassionate, high-trust digital healthcare space engineered for women seeking confidential, specialized health consultations.",
    client: "She & Soul Medical",
    year: "2025",
    challenge: "Patients required exceptional reassurance, discretion, and clinical credibility before committing to personal consultations.",
    approach: "Created a calm, reassuring editorial layout prioritizing medical accreditations, clear practitioner bios, and friction-free private booking.",
    solution: "Secure, accessible healthcare portal integrated with private tele-consultation scheduling and automated follow-up sequences.",
    technologies: ["React", "HIPAA-Compliant Booking", "Tailwind CSS", "SEO Suite", "TypeScript"],
    metrics: [
      { label: "Private Appointments", value: "+115%" },
      { label: "Patient Trust Rating", value: "4.9/5" }
    ]
  },
  {
    id: "prime-sports",
    name: "Prime Sports Academy",
    tag: "Sports Academy",
    category: "Sports & Athletics",
    url: "https://prime-sports-academy.vercel.app/",
    preview: "/projects/primesports.png",
    summary: "Dynamic athletic academy ecosystem highlighting youth talent development programs, tournament schedules, and batch admissions.",
    client: "Prime Sports Group",
    year: "2025",
    challenge: "Fragmented communication across phone calls and WhatsApp chats led to missed admissions and scheduling chaos.",
    approach: "Centralized all program information, age-category curriculums, and batch availability into an energetic, responsive platform.",
    solution: "Interactive sports portal with court booking, tryout registrations, and transparent fee schedules.",
    technologies: ["Next.js", "Tailwind CSS", "Calendar Integration", "Responsive Forms"],
    metrics: [
      { label: "Seasonal Admissions", value: "2.8x" },
      { label: "Admin Overhead", value: "-60%" }
    ]
  },
  {
    id: "passion-crafted",
    name: "Passion Crafted",
    tag: "E-commerce",
    category: "Luxury E-commerce",
    url: "https://www.passioncrafted.com/",
    preview: "/projects/passioncrafted.png",
    summary: "Artisanal luxury e-commerce experience celebrating bespoke craftsmanship with editorial product storytelling and frictionless checkout.",
    client: "Passion Crafted Goods",
    year: "2025",
    challenge: "High-ticket bespoke items suffered from high cart abandonment due to lack of material detail and inadequate storytelling.",
    approach: "Curated an editorial luxury magazine aesthetic with full-bleed product zoom, material transparency, and multi-currency checkout.",
    solution: "Headless commerce architecture with blazing fast transitions, personalized recommendations, and dynamic cart triggers.",
    technologies: ["Shopify Headless", "Next.js", "Tailwind CSS", "Stripe", "Analytics"],
    metrics: [
      { label: "Average Order Value", value: "+42%" },
      { label: "Checkout Conversion", value: "4.1%" }
    ]
  }
];
