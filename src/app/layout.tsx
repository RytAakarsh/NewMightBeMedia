import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";
import CustomCursor from "@/components/common/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mightbemedia.in"),
  title: "MightBeMedia | Revenue Growth Systems for Businesses",
  description:
    "MightBeMedia builds high-converting websites, digital products, AI-powered systems, and growth solutions designed to turn traffic into customers.",
  keywords: [
    "website development",
    "revenue systems",
    "growth partner",
    "conversion rate optimization",
    "MVP development",
    "local SEO clinics",
    "custom software",
    "MightBeMedia",
    "growth agency India",
  ],
  authors: [{ name: "MightBeMedia" }],
  creator: "MightBeMedia",
  publisher: "MightBeMedia",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logos/MightBeMedia_ICONNEW.png",
    shortcut: "/logos/MightBeMedia_ICONNEW.png",
    apple: "/logos/MightBeMedia_ICONNEW.png",
  },
  openGraph: {
    title: "MightBeMedia | Revenue Growth Systems for Businesses",
    description:
      "We don't build websites. We build revenue systems that convert traffic into paying clients.",
    url: "https://mightbemedia.in",
    siteName: "MightBeMedia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logos/MightBemedia_completeLOGO.png",
        width: 1200,
        height: 630,
        alt: "MightBeMedia — Revenue Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MightBeMedia | Revenue Growth Partner",
    description:
      "High-converting websites, MVPs & growth systems for coaches, clinics, fitness trainers, and startups.",
    images: ["/logos/MightBemedia_completeLOGO.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MightBeMedia",
    url: "https://mightbemedia.in",
    logo: "https://mightbemedia.in/logos/MightBeMedia_ICONNEW.png",
    description:
      "Revenue growth agency building high-converting websites, MVPs and growth systems for businesses, coaches, clinics, fitness trainers and startups.",
    email: "info@mightbemedia.in",
    telephone: "+91-8851872245",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: "Worldwide",
    sameAs: [],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#000000] text-[#FAFAFA] font-sans selection:bg-[#FFFFFF] selection:text-[#000000] overflow-x-hidden min-h-screen">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
