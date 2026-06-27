import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { FadeInSection } from "@/components/shared/fade-in-section";
import { HeroLogo } from "@/components/shared/hero-logo";

const strategies = [
  { id: "H17", name: "Large-cap mean-reversion", status: "Live since 2025", color: "text-teal-700 dark:text-teal-400" },
  { id: "H21", name: "Cross-sectional momentum", status: "Live since 2026", color: "text-violet-700 dark:text-violet-400" },
  { id: "H20", name: "Small/mid-cap intraday momentum", status: "Live since 2025", color: "text-rose-700 dark:text-rose-400" },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EGAlpha",
    url: "https://egalpha.com",
    description: "Independent quantitative trading research and execution operation developing systematic US equity strategies under a pre-registered, out-of-sample research protocol.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "team@egalpha.com",
      contactType: "General inquiries",
    },
  };

  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-10 sm:pb-14 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection delay={150}>
            <div className="relative">
              <div className="max-w-2xl">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal leading-[1.2] tracking-tight">
                  EGAlpha applies ML-driven research to algorithmic trading.
                </h1>
                <p className="mt-5 text-[15px] text-text-secondary max-w-xl leading-relaxed">
                  We are an emerging fund that designs automated strategies for U.S equities. Our research, execution modelling, and risk infra. is built fully in-house and proprietary to us and our partners. We welcome you to be introduced.
                </p>
              </div>
              <div className="hidden md:block absolute right-0 lg:-right-8 -top-[180px] lg:-top-[297px] w-[400px] lg:w-[700px] opacity-15 translate-y-8 lg:translate-y-12">
                <HeroLogo />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Key metrics */}
      <section className="border-t border-border py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">3 / 46</p>
                <p className="mt-2 text-[15px] text-text-secondary leading-relaxed">Strategies deployed from 46 designed and validated.</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">Near-zero</p>
                <p className="mt-2 text-[15px] text-text-secondary leading-relaxed">Inter-strategy alpha correlation across live strategies.</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">12+ years</p>
                <p className="mt-2 text-[15px] text-text-secondary leading-relaxed">Combined experience in algorithmic trading across our founding team.</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Thesis */}
      <section className="border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12">
              <p className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">Philosophy</p>
              <div className="max-w-2xl">
                <p className="text-[15px] font-medium mb-3">Absolute Power in Risk Infrastructure and Strategy Simulation</p>
                <p className="text-[15px] text-text-secondary leading-relaxed">
                  We attribute the design and successful deployment of our strategies on the rigorous modelling and simulative testing that validates the underlying hypothesis.
                  Strategies are hypothesized from the intersection of in-house empiricism and diverse domain knowledge. Because we build every layer ourselves, we can account for how each strategy works, what would degrade it, and how our monitoring detects that first.{" "}
                  <Link
                    href="/methodology"
                    className="text-text-tertiary hover:text-text-secondary transition-colors underline decoration-text-quaternary underline-offset-3"
                  >
                    Full methodology →
                  </Link>
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Strategy snapshot */}
      <section className="border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12">
              <p className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">Strategies</p>
              <div>
                <div className="space-y-3">
                  {strategies.map((s) => (
                    <Link key={s.id} href="/strategies" className="flex items-baseline gap-4 group">
                      <span className={`text-[11px] font-mono w-12 shrink-0 ${s.color}`}>{s.id}</span>
                      <span className={`text-[15px] group-hover:text-foreground transition-colors ${s.color}`}>{s.name}</span>
                      <span className="hidden sm:inline text-[10px] uppercase tracking-[0.12em] text-text-quaternary ml-auto shrink-0">{s.status}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Engagement */}
      <section className="border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12">
              <p className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">Inquiries</p>
              <div>
                <a
                  href="mailto:team@egalpha.com"
                  className="text-[15px] underline decoration-text-quaternary underline-offset-3 hover:decoration-text-secondary transition-colors"
                >
                  team@egalpha.com
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
