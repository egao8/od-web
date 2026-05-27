import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { FadeInSection } from "@/components/shared/fade-in-section";

const categories = [
  {
    name: "Market Structure",
    articles: [
      { title: "Meta-order decay in megacap equities", date: "Oct 2026" },
      { title: "Intraday liquidity fragmentation patterns", date: "Sep 2026" },
      { title: "Spread dynamics under volatility clustering", date: "Aug 2026" },
    ],
  },
  {
    name: "Statistical Validation",
    articles: [
      { title: "Walk-forward testing: avoiding lookahead bias", date: "Oct 2026" },
      { title: "Bootstrap significance in small-sample backtests", date: "Sep 2026" },
      { title: "Overfitting controls for intraday strategies", date: "Jul 2026" },
    ],
  },
  {
    name: "Execution Research",
    articles: [
      { title: "Slippage modeling in high-liquidity names", date: "Sep 2026" },
      { title: "Fill quality under varying volatility regimes", date: "Aug 2026" },
      { title: "Execution timing and market impact decay", date: "Jul 2026" },
    ],
  },
  {
    name: "Regime Analysis",
    articles: [
      { title: "Regime-sensitive mean reversion parameters", date: "Oct 2026" },
      { title: "Volatility clustering and strategy adaptation", date: "Aug 2026" },
      { title: "Market stress response in systematic portfolios", date: "Jun 2026" },
    ],
  },
];

export default function Research() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-28 sm:pt-36 pb-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection delay={150}>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight leading-[1.15]">
              Research & Methodology
            </h1>
            <p className="mt-3 text-sm text-text-secondary max-w-lg">
              Published studies, methodology articles, and research notes. Technical depth for practitioners.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-10">
            {categories.map((category) => (
              <FadeInSection key={category.name}>
                <div className="border-t border-border pt-6">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-text-quaternary mb-4">
                    {category.name}
                  </p>
                  <div className="space-y-1">
                    {category.articles.map((article) => (
                      <div
                        key={article.title}
                        className="group flex items-baseline justify-between gap-4 cursor-pointer py-2"
                      >
                        <p className="text-sm text-text-secondary group-hover:text-foreground transition-colors">
                          {article.title}
                        </p>
                        <span className="text-[11px] text-text-quaternary shrink-0">{article.date}</span>
                      </div>
                    ))}
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
