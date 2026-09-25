import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | MightBeMedia",
  description:
    "Explore 8 production case studies from MightBeMedia. Custom web applications, conversion funnels, and revenue systems engineered for high-growth businesses globally.",
  keywords: [
    "MightBeMedia projects",
    "case studies",
    "web development portfolio",
    "conversion rate optimization case studies",
    "SaaS MVP development",
  ],
  alternates: {
    canonical: "https://mightbemedia.in/projects",
  },
  openGraph: {
    title: "Selected Work & Case Studies | MightBeMedia",
    description:
      "Explore 8 production case studies from MightBeMedia. Custom web applications, conversion funnels, and revenue systems.",
    url: "https://mightbemedia.in/projects",
    siteName: "MightBeMedia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logos/MightBemedia_completeLOGO.png",
        width: 1200,
        height: 630,
        alt: "MightBeMedia Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work & Case Studies | MightBeMedia",
    description:
      "Explore 8 production case studies from MightBeMedia. Custom web applications, conversion funnels, and revenue systems.",
    images: ["/logos/MightBemedia_completeLOGO.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Selected Work & Case Studies",
    url: "https://mightbemedia.in/projects",
    description:
      "Explore 8 production case studies from MightBeMedia. Custom web applications, conversion funnels, and revenue systems.",
    publisher: {
      "@type": "Organization",
      name: "MightBeMedia",
      url: "https://mightbemedia.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://mightbemedia.in/logos/MightBeMedia_ICONNEW.png",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://mightbemedia.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: "https://mightbemedia.in/projects",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {children}
    </>
  );
}
