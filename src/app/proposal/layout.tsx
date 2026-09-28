import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Growth System Proposal | MightBeMedia",
  description: "Confidential Revenue Growth System proposal prepared by MightBeMedia.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function ProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
