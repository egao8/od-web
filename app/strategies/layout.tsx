import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategies — EGAlpha",
  description: "Six systematic intraday strategy families for US megacap equities. Mean reversion, liquidity dislocation, relative value, and more.",
  openGraph: {
    title: "Strategies — EGAlpha",
    description: "Six systematic intraday strategy families for US megacap equities.",
    url: "https://egalpha.com/strategies",
  },
  twitter: {
    title: "Strategies — EGAlpha",
    description: "Six systematic intraday strategy families for US megacap equities.",
  },
  alternates: {
    canonical: "https://egalpha.com/strategies",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
