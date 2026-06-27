import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — EGAlpha",
  description: "Software engineers and systematic traders applying institutional research rigor to systematic US equity strategies. Full stack built in-house.",
  openGraph: {
    title: "About — EGAlpha",
    description: "Software engineers and systematic traders applying institutional research rigor to systematic US equity strategies. Full stack built in-house.",
    url: "https://egalpha.com/about",
  },
  twitter: {
    title: "About — EGAlpha",
    description: "Software engineers and systematic traders applying institutional research rigor to systematic US equity strategies. Full stack built in-house.",
  },
  alternates: {
    canonical: "https://egalpha.com/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
