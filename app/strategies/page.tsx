import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { FadeInSection } from "@/components/shared/fade-in-section";

const strategies = [
  {
    id: "EG-MR",
    name: "Mean Reversion",
    description: "Short-horizon mean reversion designed for liquid US megacap equities. Exploits transient price dislocations with strict regime filtering and execution-aware position sizing.",
    details: ["Intraday", "US Megacap", "Mean Reversion", "Moderate capacity"],
  },
  {
    id: "EG-LIQ",
    name: "Liquidity Dislocation",
    description: "Identifies and captures temporary supply-demand asymmetries in high-volume names. Focused on execution imbalance signals and order flow dynamics.",
    details: ["Intraday", "US Megacap", "Microstructure", "High capacity"],
  },
  {
    id: "EG-RV",
    name: "Relative Value",
    description: "Intraday relative value portfolio framework. Extracts alpha from transient mispricings across correlated instruments within the megacap universe.",
    details: ["Intraday", "US Megacap Pairs", "Stat Arb", "Moderate capacity"],
  },
  {
    id: "EG-VOL",
    name: "Volatility Regime",
    description: "Adaptive strategy adjusting exposure and signal parameters based on detected volatility regimes. Consistent risk-adjusted returns across market environments.",
    details: ["Intraday", "US Megacap", "Adaptive", "High capacity"],
  },
  {
    id: "EG-MOM",
    name: "Intraday Momentum",
    description: "Captures short-lived momentum signals in liquid equities using microstructure-informed entry timing and volatility-scaled exits.",
    details: ["Intraday", "US Megacap", "Momentum", "Moderate capacity"],
  },
  {
    id: "EG-EXE",
    name: "Execution Alpha",
    description: "Minimizes market impact through intelligent order routing, timing optimization, and adaptive execution algorithms. Standalone alpha and execution overlay.",
    details: ["Sub-minute", "US Megacap", "Execution", "Very high capacity"],
  },
];

export default function Strategies() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-28 sm:pt-36 pb-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection delay={150}>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight leading-[1.15]">
              Strategy Families
            </h1>
            <p className="mt-3 text-sm text-text-secondary max-w-lg">
              Six systematic strategy families operating across complementary market
              inefficiencies. Common research infrastructure and risk framework.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-0">
            {strategies.map((strategy) => (
              <FadeInSection key={strategy.id}>
                <div className="border-t border-border py-6">
                  <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[80px_140px_1fr] gap-x-6 gap-y-2 items-baseline">
                    <p className="text-[11px] font-mono text-text-quaternary">{strategy.id}</p>
                    <p className="text-sm font-medium sm:block hidden">{strategy.name}</p>
                    <p className="text-sm font-medium sm:hidden">{strategy.name}</p>
                    <div className="col-start-2 sm:col-start-3">
                      <p className="text-xs text-text-secondary leading-relaxed">{strategy.description}</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 text-[10px] text-text-quaternary">
                        {strategy.details.map((d) => (
                          <span key={d}>{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
