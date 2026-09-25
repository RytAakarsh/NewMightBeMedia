import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Research on Building Digital Systems | MightBeMedia",
  description:
    "In-depth research essays on conversion architecture, full-stack engineering, high-intent SEO, artificial intelligence solutions, and compounding commercial growth.",
  keywords: [
    "MightBeMedia blog",
    "growth marketing essays",
    "web engineering insights",
    "conversion architecture",
    "SEO Delhi",
    "software development India",
  ],
  alternates: {
    canonical: "https://mightbemedia.in/blog",
  },
  openGraph: {
    title: "Insights & Research on Building Digital Systems | MightBeMedia",
    description:
      "In-depth research essays on conversion architecture, full-stack engineering, high-intent SEO, and compounding growth.",
    url: "https://mightbemedia.in/blog",
    siteName: "MightBeMedia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logos/MightBemedia_completeLOGO.png",
        width: 1200,
        height: 630,
        alt: "MightBeMedia Insights & Perspectives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Research on Building Digital Systems | MightBeMedia",
    description:
      "In-depth research essays on conversion architecture, full-stack engineering, high-intent SEO, and compounding growth.",
    images: ["/logos/MightBemedia_completeLOGO.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogHubJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insights & Research on Building Digital Systems",
    url: "https://mightbemedia.in/blog",
    description:
      "In-depth research essays on conversion architecture, full-stack engineering, high-intent SEO, artificial intelligence solutions, and compounding commercial growth.",
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
          name: "Blog",
          item: "https://mightbemedia.in/blog",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogHubJsonLd) }}
      />
      {children}
    </>
  );
}
