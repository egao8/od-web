"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      {children}
    </div>
  );
}

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-6 md:px-12 bg-background/80 backdrop-blur-sm transition-all duration-1000 ease-out ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        <div className="flex items-center gap-6 text-xs sm:text-sm tracking-wide font-sans">
          <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
            {mounted && resolvedTheme === "dark" ? (
              <img src="/logoicon.png" alt="EGAlpha Trading" className="w-6 h-auto relative top-[2px]" />
            ) : mounted && resolvedTheme === "light" ? (
              <img src="/logoiconlight.png" alt="EGAlpha Trading" className="w-6 h-auto relative top-[2px]" />
            ) : (
              <div className="w-6 h-6" /> // Placeholder to prevent layout shift
            )}
          </Link>
          <div className="h-4 w-px bg-foreground/20"></div>
          <Link href="/newsletter" className="text-foreground/80 hover:text-foreground transition-colors">
            Newsletter
          </Link>
        </div>
        {mounted && (
          <button
            onClick={toggleTheme}
            className="text-xs sm:text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors font-sans"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? "Light" : "Dark"}
          </button>
        )}
      </div>
    </header>
  );
}

const blogs = [
  {
    date: "12 Oct 2026",
    title: "Market Microstructure & Order Flow Imbalance",
    snippet: "Exploring high-frequency trading signatures within fragmented dark-pool lit environments and understanding how aggregate order flow imbalance (OFI) can be modeled as a predictor for short-term price discovery."
  },
  {
    date: "28 Sep 2026",
    title: "The Anatomy of the Redwood System",
    snippet: "A deep dive into our flagship NVDA long strategy. We break down the mean-reversion gating process, explain our methodology for statistical arbitrage, and dissect the mathematical framework shaping nonlinear exits."
  },
  {
    date: "14 Sep 2026",
    title: "On Convexity and Fat Tails",
    snippet: "Why assuming Gaussian returns destroys portfolios during market stress. Here, we analyze power-law distributions in daily equities, structuring dynamic sizing logic to natively absorb tail-risk events."
  }
];

export default function Newsletter() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 pb-16 sm:pb-24 space-y-12 sm:space-y-16">
        {/* Header Block */}
        <FadeInSection delay={200}>
          <section className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight font-serif">
              Research
              <br/>
              & Journal
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-foreground/80 font-sans">
              Thoughts on microstructure, statistical arbitrage, and systematic edges.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="border-t border-foreground/20" />
        </FadeInSection>

        {/* Blog Posts */}
        <section className="space-y-12 sm:space-y-16">
          {blogs.map((blog, idx) => (
            <FadeInSection key={idx} delay={100 + idx * 100}>
              <article className="group cursor-pointer">
                <p className="text-xs tracking-widest uppercase text-foreground/50 font-sans mb-3 sm:mb-4">
                  {blog.date}
                </p>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4 group-hover:text-foreground/80 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-base sm:text-lg font-light leading-relaxed text-foreground/80 font-sans transition-all duration-500 group-hover:text-foreground group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  {blog.snippet}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-foreground/60 group-hover:text-foreground transition-colors font-mono">
                  Read more
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </article>
            </FadeInSection>
          ))}
        </section>

        {/* Footer */}
        <FadeInSection delay={100}>
          <div className="border-t border-foreground/20 pt-8 mt-16 sm:mt-24">
            <div className="text-foreground/60 text-sm sm:text-base font-sans">
              <p>— Written by Eddie Gao</p>
              <p className="text-xs sm:text-sm mt-1">2026</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
