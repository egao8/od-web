import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — EGAlpha",
  description: "Research access, strategy licensing, partnership discussions, and general inquiries.",
  openGraph: {
    title: "Contact — EGAlpha",
    description: "Research access, strategy licensing, partnership discussions, and general inquiries.",
    url: "https://egalpha.com/contact",
  },
  twitter: {
    title: "Contact — EGAlpha",
    description: "Research access, strategy licensing, partnership discussions, and general inquiries.",
  },
  alternates: {
    canonical: "https://egalpha.com/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
