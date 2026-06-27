import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology — EGAlpha",
  description: "Pre-registered research protocol, out-of-sample validation, multiple-hypothesis control, robustness battery, and risk architecture.",
  openGraph: {
    title: "Methodology — EGAlpha",
    description: "Pre-registered research protocol, out-of-sample validation, and risk architecture for systematic trading strategies.",
    url: "https://egalpha.com/methodology",
  },
  twitter: {
    title: "Methodology — EGAlpha",
    description: "Pre-registered research protocol, out-of-sample validation, and risk architecture for systematic trading strategies.",
  },
  alternates: {
    canonical: "https://egalpha.com/methodology",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
