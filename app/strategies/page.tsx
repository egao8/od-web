import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { FadeInSection } from "@/components/shared/fade-in-section";

const strategies = [
  {
    id: "H17",
    name: "Large-Cap Mean-Reversion",
    status: "Live since 2025",
    qualifier: null,
    fields: [
      { label: "Universe", value: "Curated US large-cap and megacap equities." },
      { label: "Mechanism", value: "Enters on statistically characterized short-term weakness, exits on a fixed multi-day horizon. Harvests partial reversion following transient selling pressure in highly liquid names." },
      { label: "Empirical basis", value: "Regime-agnostic: per-trade edge holds across calm and stressed markets, strongest in stress. Established by stratified analysis, not assumed." },
    ],
    note: "The most extensively validated strategy in the portfolio, supported by 700+ pre-registered hypothesis tests.",
  },
  {
    id: "H21",
    name: "Cross-Sectional Momentum",
    status: "Live since 2026",
    qualifier: null,
    fields: [
      { label: "Universe", value: "Broad liquid US equities, systematically ranked daily into a concentrated long-only portfolio." },
      { label: "Mechanism", value: "12-minus-1 cross-sectional momentum with information-discreteness selection, volatility-managed sizing, and crowding exclusion via short-interest data." },
      { label: "Empirical basis", value: "Each lever verified independently on held-out data. Robust across formation periods, holding periods, costs, and universe breadth. Block-bootstrap CI excludes zero." },
    ],
    note: null,
  },
  {
    id: "H20",
    name: "Small/Mid-Cap Intraday Momentum",
    status: "Live since 2025",
    qualifier: null,
    fields: [
      { label: "Universe", value: "Small- and mid-cap equities exhibiting strong intraday momentum." },
      { label: "Mechanism", value: "Continuation of qualifying intraday directional moves with a structured stop-and-breakeven risk framework and hard concurrent-position limits." },
      { label: "Empirical basis", value: "Validated through a multi-phase research program covering signal construction, exit architecture, and regime conditioning. Fully isolated system — separate account, no shared code or universe overlap." },
    ],
    note: null,
  },
];

export default function Strategies() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection delay={150}>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight leading-[1.15]">
              EGAlpha Active Strategies
            </h1>
            <p className="mt-3 text-[15px] text-text-secondary max-w-xl leading-relaxed">
              Three systematic strategies with independent alpha generation. Deployable specifications are proprietary.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Strategy cards */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {strategies.map((strategy) => (
            <FadeInSection key={strategy.id}>
              <div className="border-t border-border py-8 sm:py-10">
                {/* Header row */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-6">
                  <span className="text-[11px] font-mono text-text-quaternary">{strategy.id}</span>
                  <h2 className="text-lg sm:text-xl font-serif font-normal tracking-tight">{strategy.name}</h2>
                  <div className="flex items-baseline gap-2 sm:ml-auto shrink-0">
                    {strategy.qualifier && (
                      <span className="text-[10px] uppercase tracking-[0.12em] text-text-quaternary">{strategy.qualifier}</span>
                    )}
                    <span className="text-[10px] uppercase tracking-[0.12em] text-text-quaternary border border-border px-2 py-0.5">{strategy.status}</span>
                  </div>
                </div>

                {/* Detail fields */}
                <div className="space-y-4 max-w-2xl">
                  {strategy.fields.map((field) => (
                    <div key={field.label} className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-6">
                      <p className="text-[11px] uppercase tracking-[0.12em] text-text-quaternary sm:pt-0.5">{field.label}</p>
                      <p className="text-[15px] text-text-secondary leading-relaxed">{field.value}</p>
                    </div>
                  ))}
                </div>

                {/* Note */}
                {strategy.note && (
                  <p className="mt-5 text-[13px] text-text-tertiary leading-relaxed max-w-2xl">
                    {strategy.note}
                  </p>
                )}
              </div>
            </FadeInSection>
          ))}

          {/* Close */}
          <div className="border-t border-border pt-8">
            <FadeInSection>
              <p className="text-[15px] text-text-secondary max-w-lg">
                Each strategy reached production through the same protocol. That protocol is what we stand behind.
              </p>
              <Link
                href="/methodology"
                className="inline-block mt-3 text-[13px] text-text-tertiary hover:text-text-secondary transition-colors underline decoration-text-quaternary underline-offset-3"
              >
                Methodology
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
