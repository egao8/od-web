import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — EGAlpha",
  description: "Quantitative research and methodology. Market structure, statistical validation, execution research, and regime analysis.",
  openGraph: {
    title: "Research — EGAlpha",
    description: "Quantitative research and methodology. Market structure, statistical validation, execution research, and regime analysis.",
    url: "https://egalpha.com/research",
  },
  twitter: {
    title: "Research — EGAlpha",
    description: "Quantitative research and methodology. Market structure, statistical validation, execution research, and regime analysis.",
  },
  alternates: {
    canonical: "https://egalpha.com/research",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
