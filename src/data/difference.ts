export interface DifferenceItem {
  number: string;
  flawTitle: string;
  flawDescription: string;
  fixTitle: string;
  fixDescription: string;
}

export const differences: DifferenceItem[] = [
  {
    number: "01",
    flawTitle: "No Conversion System",
    flawDescription: "Traditional agencies build pretty digital brochures with zero conversion logic. Visitors browse aimlessly and bounce without taking meaningful commercial action.",
    fixTitle: "Conversion-Focused Architecture",
    fixDescription: "Every layout, headline, visual anchor, and interactive trigger is structured specifically to move visitors through an intentional decision funnel that converts traffic into booked appointments."
  },
  {
    number: "02",
    flawTitle: "No Structured Journey",
    flawDescription: "Chaotic pages stuffed with disjointed content blocks. Prospects hit cognitive overload, cannot find answers to critical objections, and abandon your site.",
    fixTitle: "Funnel-Based Flow",
    fixDescription: "We craft seamless narrative progression that anticipates objections, highlights proof metrics, demonstrates tangible value, and guides the prospect toward immediate contact."
  },
  {
    number: "03",
    flawTitle: "Passive / Vague CTAs",
    flawDescription: "Hidden 'Contact Us' buttons, broken contact forms, or passive links that force prospective clients to jump through unnecessary hurdles.",
    fixTitle: "High-Intent Direct Capture",
    fixDescription: "Frictionless direct capture mechanisms — whether instant WhatsApp routing, direct consultation schedulers, or 1-click checkout — operating 24 hours a day, 7 days a week."
  },
  {
    number: "04",
    flawTitle: "No Trust Building",
    flawDescription: "Stock photos, vague corporate buzzwords, and hidden reviews fail to reassure skeptical modern buyers, resulting in immediate hesitation.",
    fixTitle: "Scalable Growth & Authority Loops",
    fixDescription: "Integrated Google Reviews engines, verifiable client results, transparent deliverables, and local search authority that establishes undeniable market leadership."
  }
];
