"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: "Jun '25", raw: 5.3, slippage: 4.1 },
  { month: "Jul '25", raw: 9.7, slippage: 7.3 },
  { month: "Aug '25", raw: 17.7, slippage: 14.1 },
  { month: "Sep '25", raw: 24.5, slippage: 19.7 },
  { month: "Oct '25", raw: 27.5, slippage: 21.5 },
  { month: "Nov '25", raw: 34.8, slippage: 27.6 },
  { month: "Dec '25", raw: 38.7, slippage: 30.3 },
  { month: "Jan '26", raw: 41.1, slippage: 31.5 },
  { month: "Feb '26", raw: 39.7, slippage: 28.9 },
  { month: "Mar '26", raw: 40.1, slippage: 28.1 },
];

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
          <Link href="/newsletter" className="text-foreground/60 hover:text-foreground transition-colors">
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

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed font-serif">
          Thanks for reaching out
        </h2>
        <p className="text-foreground/70 leading-relaxed text-base sm:text-lg font-sans">
          We'll take the time to review what you shared properly. If we think we can help, you'll hear from us within 2 working days.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed font-serif">
        Inquire directly for usage
      </h2>
      <p className="text-foreground/70 leading-relaxed text-base sm:text-lg font-sans">
        EGAlpha is currently open to selling and distributing algorithms and strategies to a limited list of partners.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-transparent border-b border-foreground/30 py-2 sm:py-3 text-base sm:text-lg placeholder:text-foreground/40 focus:outline-none focus:border-foreground/60 transition-colors font-sans"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any Specific Details?"
            rows={3}
            className="w-full bg-transparent border-b border-foreground/30 py-2 sm:py-3 text-base sm:text-lg placeholder:text-foreground/40 focus:outline-none focus:border-foreground/60 transition-colors resize-none font-sans"
          />
        </div>
        <button
          type="submit"
          className="group inline-flex items-center gap-2 text-base sm:text-lg hover:opacity-70 transition-opacity font-sans"
        >
          <span>Send</span>
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
        </button>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 pb-16 sm:pb-24 space-y-12 sm:space-y-16">
        {/* Hero */}
        <FadeInSection delay={400}>
          <section className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight font-serif">
              EGAlphᵅ Trading
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-foreground/80 font-sans">
              We are an algorithmic trading research lab
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              producing strategy products across equities and futures.
            </p>
          </section>
        </FadeInSection>

        {/* Divider with subtle header */}
        <FadeInSection delay={100}>
          <div className="flex items-center gap-4">
            <div className="w-12 sm:w-16 border-t border-foreground/20" />
            <span className="text-xs tracking-widest uppercase text-foreground/50 font-sans">
              Open Algorithms (1)
            </span>
            <div className="flex-1 border-t border-foreground/20" />
          </div>
        </FadeInSection>

        {/* Manifesto - Compact Single Block */}
        <FadeInSection delay={100}>
          <section className="space-y-6 sm:space-y-8">
            <div className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-foreground/90 font-sans">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  The Redwood Auto
                </h2>
                <button className="self-start sm:self-auto px-5 py-2 text-xs sm:text-sm font-medium tracking-wide bg-foreground text-background rounded-full hover:bg-foreground/80 transition-all duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_15px_var(--foreground)]">
                  Inquire
                </button>
              </div>
              <p className="mb-8 text-foreground/80 transition-all duration-500 hover:text-foreground hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Statistical arbitrage with optionality via exits for long megacaps. Entries are filtered in a mean-reversal regime and exits enforce nonlinear payoff shaping.
              </p>

              <div className="space-y-3 text-sm sm:text-base border-t border-foreground/20 pt-6">
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-foreground/70">Positive Rate</span>
                  <span className="font-medium text-right">89.6%</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-foreground/70">Target Instrument</span>
                  <span className="font-medium text-right">NVDA, TSLA, SPY, QQQ</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-foreground/70">Winrate</span>
                  <span className="font-medium text-right">54.6%</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-foreground/70">Mean/Median</span>
                  <span className="font-medium text-right">+0.4807%/+0.3677%</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-foreground/70">Max DD</span>
                  <span className="font-medium text-right">-0.4053</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-foreground/70">Profit Factor</span>
                  <span className="font-medium text-right">&gt; 2.8</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-foreground/70">Signal Retention</span>
                  <span className="font-medium text-right">&gt; 280%</span>
                </div>
                <div className="flex justify-between border-b border-foreground/10 pb-2">
                  <span className="text-foreground/70">Sharpe Ratio</span>
                  <span className="font-medium text-right">&gt; 4.53</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-foreground/70">Capacity</span>
                  <span className="font-medium text-right">$65k</span>
                </div>
              </div>

              <div className="mt-12 mb-4 h-[300px] sm:h-[400px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={performanceData}
                    margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <filter id="grain">
                        <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" in="turbulence" result="coloredNoise" />
                        <feBlend in="SourceGraphic" in2="coloredNoise" mode="screen" />
                      </filter>
                      <linearGradient id="gradientRaw" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="currentColor" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="currentColor" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="gradientSlippage" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="currentColor" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="currentColor" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" opacity={0.1} />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'currentColor', opacity: 0.5, fontSize: 12, fontFamily: 'var(--font-sans)' }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'currentColor', opacity: 0.5, fontSize: 12, fontFamily: 'var(--font-sans)' }}
                      tickFormatter={(val) => `${val}%`}
                      dx={10}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--foreground)',
                        opacity: 0.9,
                        borderRadius: '8px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '12px'
                      }}
                      itemStyle={{ color: 'var(--foreground)' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="raw"
                      stroke="currentColor"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#gradientRaw)"
                      style={{ filter: 'url(#grain)' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="slippage"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      fillOpacity={1}
                      fill="url(#gradientSlippage)"
                    />
                  </AreaChart>
                </ResponsiveContainer>

                {/* Custom Legend */}
                <div className="absolute top-0 left-8 sm:left-12 flex flex-col gap-1.5 bg-background/50 backdrop-blur-sm p-2 sm:p-2.5 rounded border border-foreground/10 text-[10px] sm:text-xs font-sans">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 bg-foreground"></div>
                    <span className="text-foreground/80">Raw Performance (+40.1%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 bg-foreground border-t-2 border-dashed border-background"></div>
                    <span className="text-foreground/80">Worst-Case Friction (+28.1%)</span>
                  </div>
                </div>

                <div className="mt-8 text-center space-y-2 font-sans tracking-wide">
                  <p className="text-[10px] sm:text-xs text-foreground/70">
                    <span className="font-semibold">Note:</span> Above curve represents worst-case friction for a single target instrument (NVDA).
                  </p>
                  <p className="text-[10px] sm:text-xs text-foreground/50">
                    Other target instruments range from ±7.3% in worst-case P&L variance over the same period. Full deployment of 4 instruments yields ~138% over 10 months.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={100}>
          <section className="space-y-4 sm:space-y-6">

            <div className="pt-2 sm:pt-4 text-foreground/60 text-sm sm:text-base font-sans">
              <p>— Led by Eddie Gao, Founder</p>
              <p className="text-xs sm:text-sm mt-1">2026</p>
            </div>
          </section>
        </FadeInSection>


        {/* Waitlist Section */}
        <FadeInSection delay={100}>
          <section className="space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm tracking-widest uppercase text-foreground/50 font-sans">
              Contact for Usage
            </p>
            <WaitlistForm />
          </section>
        </FadeInSection>
      </div>
    </main >
  );
}
