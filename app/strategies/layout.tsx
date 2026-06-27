import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategies — EGAlpha",
  description: "Three core systematic strategies — megacap mean-reversion, small/mid-cap momentum, and order-flow-imbalance — mechanistically distinct and near-uncorrelated.",
  openGraph: {
    title: "Strategies — EGAlpha",
    description: "Three core systematic strategies — mechanistically distinct, near-uncorrelated, each validated under a pre-registered out-of-sample protocol.",
    url: "https://egalpha.com/strategies",
  },
  twitter: {
    title: "Strategies — EGAlpha",
    description: "Three core systematic strategies — mechanistically distinct, near-uncorrelated, each validated under a pre-registered out-of-sample protocol.",
  },
  alternates: {
    canonical: "https://egalpha.com/strategies",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
