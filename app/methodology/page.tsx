import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { SectionNav } from "@/components/shared/section-nav";

const sections = [
  { id: "pre-registration", label: "Pre-registration" },
  { id: "validation", label: "Validation & rigor" },
  { id: "risk-architecture", label: "Risk architecture" },
  { id: "lifecycle", label: "Lifecycle" },
  { id: "references", label: "References" },
  { id: "proprietary", label: "Proprietary" },
];

const lifecycleSteps = [
  { title: "Hypothesis", description: "A mechanistic thesis grounded in literature and first principles." },
  { title: "Pre-registration", description: "Methodology, statistics, thresholds, and partitions fixed before estimation." },
  { title: "Discovery and validation", description: "In-sample, independent validation, sealed out-of-sample, through the robustness battery." },
  { title: "Adversarial review", description: "Fresh-eyes audit against untested conditions." },
  { title: "Engineering and risk", description: "Production build with reproducibility guarantees, wrapped in the layered risk architecture." },
  { title: "Shadow", description: "Live signals, zero capital, validated against the backtest distribution (Kolmogorov–Smirnov)." },
  { title: "Staged deployment", description: "Capital-controlled, operator-supervised; scaled only on accumulated evidence." },
  { title: "Monitoring and retirement", description: "Continuous decay detection; retirement on evidence." },
];

const references = [
  { category: "Multiple-testing & false-discovery control", refs: [
    "Benjamini, Y. & Hochberg, Y. (1995). Controlling the false discovery rate. JRSS-B.",
    "Holm, S. (1979). A simple sequentially rejective multiple test procedure. Scand. J. Stat.",
    "White, H. (2000). A reality check for data snooping. Econometrica.",
    "Romano, J. P. & Wolf, M. (2005). Stepwise multiple testing as formalized data snooping. Econometrica.",
    "Harvey, C. R., Liu, Y. & Zhu, H. (2016). ...and the cross-section of expected returns. Review of Financial Studies.",
    "Harvey, C. R. & Liu, Y. (2020). Lucky factors. J. Financial Economics.",
    "Chen, A. Y. (2025). Most claimed statistical findings in cross-sectional return predictability are likely true. arXiv:2206.15365.",
  ]},
  { category: "Performance measurement & backtesting", refs: [
    "Bailey, D. H. & López de Prado, M. (2012). The Sharpe Ratio efficient frontier. J. Risk.",
    "Bailey, D. H. & López de Prado, M. (2014). The Deflated Sharpe Ratio. J. Portfolio Management.",
    "Bailey, D. H. et al. (2014). Pseudo-mathematics and financial charlatanism: the effects of backtest overfitting. AMS Notices.",
    "Arnott, R. D., Harvey, C. R. & Markowitz, H. (2019). A backtesting protocol in the era of machine learning. J. Financial Data Science.",
    "Pham, T. A., Nguyen, B. C. & Nguyen, N. T. (2026). AlgoXpert Alpha Research Framework: a rigorous IS-WFA-OOS protocol for mitigating overfitting. arXiv:2603.09219.",
    "Yin, D. et al. (2026). Implementation risk in portfolio backtesting: a previously unquantified source of error. arXiv:2603.20319.",
  ]},
  { category: "Momentum & cross-sectional strategies", refs: [
    "Jegadeesh, N. & Titman, S. (1993). Returns to buying winners and selling losers. J. Finance.",
    "Novy-Marx, R. (2012). Is momentum really momentum? J. Financial Economics.",
    "Asness, C. S., Moskowitz, T. J. & Pedersen, L. H. (2013). Value and momentum everywhere. J. Finance.",
    "Da, Z., Gurun, U. G. & Warachka, M. (2014). Frog in the pan: continuous information and momentum. Review of Financial Studies.",
    "Barroso, P. & Santa-Clara, P. (2015). Momentum has its moments. J. Financial Economics.",
    "Daniel, K. & Moskowitz, T. J. (2016). Momentum crashes. J. Financial Economics.",
  ]},
  { category: "Mean-reversion & microstructure", refs: [
    "Kyle, A. S. (1985). Continuous auctions and insider trading. Econometrica.",
    "Poterba, J. M. & Summers, L. H. (1988). Mean reversion in stock prices: evidence and implications. J. Financial Economics.",
    "Lo, A. W. & MacKinlay, A. C. (1990). When are contrarian profits due to stock market overreaction? Review of Financial Studies.",
    "Cont, R., Kukanov, A. & Stoianov, S. (2014). The price impact of order book events. J. Financial Econometrics.",
    "Anantha, A. N. & Jain, S. (2024). Forecasting high frequency order flow imbalance. arXiv:2408.03594.",
    "Epstein, E. L. et al. (2025). Attention factors for statistical arbitrage. arXiv:2510.11616.",
  ]},
  { category: "Risk, portfolio construction & statistical methods", refs: [
    "Wald, A. (1945). Sequential tests of statistical hypotheses. Ann. Math. Stat.",
    "Kelly, J. L. (1956). A new interpretation of information rate. Bell System Technical Journal.",
    "Hamilton, J. D. (1989). A new approach to the economic analysis of nonstationary time series and the business cycle. Econometrica.",
    "Künsch, H. R. (1989); Politis, D. N. & Romano, J. P. (1994). The block / stationary bootstrap.",
    "Ledoit, O. & Wolf, M. (2004). Honey, I shrunk the sample covariance matrix. J. Portfolio Management.",
    "Maillard, S., Roncalli, T. & Teiletche, J. (2010). The properties of equally weighted risk contribution portfolios. J. Portfolio Management.",
    "López de Prado, M. (2018). Advances in Financial Machine Learning. Wiley.",
    "Fischer, L. & Ramdas, A. (2024). Improving Wald's (approximate) sequential probability ratio test by avoiding overshoot. arXiv:2410.16076.",
    "Oliveira, D. C., Guzman, G. & Firoozye, N. (2025). (Non-parametric) bootstrap robust optimization for portfolios and trading strategies. arXiv:2510.12725.",
    "Parra-Diaz, M. & Castro-Iragorri, C. (2025). Deep declarative risk budgeting portfolios. arXiv:2504.19980.",
  ]},
  { category: "Crowding, short interest & regime conditioning", refs: [
    "Boehmer, E., Jones, C. M. & Zhang, X. (2008). Which shorts are informed? J. Finance.",
    "Rapach, D. E., Ringgenberg, M. C. & Zhou, G. (2016). Short interest and aggregate stock returns. J. Financial Economics.",
    "Lou, D. & Polk, C. (2022). Comomentum: inferring arbitrage activity from return correlations. Review of Financial Studies.",
    "Zhang, Y. et al. (2025). RegimeFolio: a regime aware ML system for sectoral portfolio optimization in dynamic markets. arXiv:2510.14986.",
    "Deep, G., Deep, A. & Lamptey, W. (2025). Interpretable hypothesis-driven trading: a rigorous walk-forward validation framework. arXiv:2512.12924.",
    "Sun, J. et al. (2026). Synthetic American option pricing via Jump-HMM-driven Heston implied volatility. arXiv:2605.13998.",
  ]},
];

export default function Methodology() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight leading-[1.15]">
            Methodology
          </h1>
          <p className="mt-3 text-[15px] text-text-secondary max-w-xl leading-relaxed">
            What distinguishes a research operation is the protocol that decides whether a backtest becomes a position. Ours is formal, versioned, and applied identically to every study.
          </p>
        </div>
      </section>

      {/* Content with sidebar TOC */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="lg:grid lg:grid-cols-[160px_1fr] lg:gap-12">
          <SectionNav sections={sections} />

          <div>
            {/* Pre-registration */}
            <section id="pre-registration" className="border-t border-border py-10 sm:py-12 scroll-mt-20">
              <h2 className="font-serif text-lg sm:text-xl font-normal tracking-tight mb-4">
                Research protocol and pre-registration
              </h2>
              <div className="space-y-3 text-[15px] text-text-secondary leading-relaxed max-w-2xl">
                <p>
                  Every study runs under a versioned program constitution. Before any estimation, the hypotheses, test statistics, decision thresholds, and data partitions are committed. Data is partitioned into discovery, validation, and sealed out-of-sample blocks; the integrity of the out-of-sample seal is enforced programmatically by lock-file timestamps, so the confirmatory block cannot be inspected before the in-sample stage is finalized.
                </p>
                <p>
                  Results are adjudicated against the pre-committed criteria irrespective of outcome. Studies that fail to reject the null are retained in the research record rather than discarded — directly controlling the selection bias (the file-drawer problem and specification search) that inflates apparent performance when only favorable backtests are reported. Multiple pre-registered hypotheses in our program have returned null; they are recorded as such, and the corresponding features or strategies were not deployed.
                </p>
              </div>
            </section>

            {/* Consolidated validation & rigor */}
            <section id="validation" className="border-t border-border py-10 sm:py-12 scroll-mt-20">
              <h2 className="font-serif text-lg sm:text-xl font-normal tracking-tight mb-4">
                Validation and statistical rigor
              </h2>
              <div className="space-y-3 text-[15px] text-text-secondary leading-relaxed max-w-2xl">
                <p>
                  Selecting strategies from a universe of candidates inflates the false-discovery rate. We correct for this at pre-registration using Bonferroni and Holm family-wise error control for confirmatory tests, and Benjamini–Hochberg FDR control for screening stages. Reported performance is then deflated for the number of trials and non-normality of returns via the Deflated Sharpe Ratio (Bailey & López de Prado, 2014), and live performance is tracked against the validated baseline using Wald's sequential probability ratio test for early decay detection.
                </p>
                <p>
                  No edge is accepted on a single test. Each candidate must survive a robustness battery — walk-forward out-of-sample validation, leave-one-out cross-validation, rolling-window stability checks, block-bootstrap confidence intervals excluding zero at 95% and 99%, and random-null permutation tests — before advancing. Edges are decomposed across market regimes so conditional performance is known rather than averaged away, and every estimate passes through a capacity-constrained simulator enforcing position limits, concurrent-exposure caps, and realistic transaction costs. The backtest-to-live pipeline reproduces historical results to the exact value, and adversarial reviews target untested conditions before each phase transition.
                </p>
              </div>
            </section>

            {/* Risk & execution architecture */}
            <section id="risk-architecture" className="border-t border-border py-10 sm:py-12 scroll-mt-20">
              <h2 className="font-serif text-lg sm:text-xl font-normal tracking-tight mb-4">
                Risk and execution architecture
              </h2>
              <ul className="space-y-3 text-[15px] text-text-secondary leading-relaxed max-w-2xl">
                <li className="flex gap-3">
                  <span className="text-text-quaternary shrink-0">&mdash;</span>
                  <span><span className="text-foreground font-medium">Layered monitoring</span> — independent automated monitors for position-, strategy-, portfolio-, and macro-event risk, aggregated into one composite deploy / no-deploy determination.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-quaternary shrink-0">&mdash;</span>
                  <span><span className="text-foreground font-medium">Hard kill-switches</span> at position, strategy, and portfolio level, with thresholds set in advance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-quaternary shrink-0">&mdash;</span>
                  <span><span className="text-foreground font-medium">Decay early warning</span> — live performance compared to each strategy's validated baseline; an alert is raised before any kill threshold is reached.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-text-quaternary shrink-0">&mdash;</span>
                  <span><span className="text-foreground font-medium">Position sizing</span> — fractional-Kelly under hard caps, with shrinkage-based covariance estimation (Ledoit & Wolf, 2004) for portfolio construction.</span>
                </li>
              </ul>
            </section>

            {/* Lifecycle */}
            <section id="lifecycle" className="border-t border-border py-10 sm:py-12 scroll-mt-20">
              <h2 className="font-serif text-lg sm:text-xl font-normal tracking-tight mb-6">
                From hypothesis to position
              </h2>
              <ol className="space-y-4 max-w-2xl">
                {lifecycleSteps.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[28px_1fr] gap-3 items-baseline">
                    <span className="text-[11px] font-mono text-text-quaternary">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[15px] text-text-secondary leading-relaxed">
                      <span className="text-foreground font-medium">{step.title}</span> — {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* References */}
            <section id="references" className="border-t border-border py-10 sm:py-12 scroll-mt-20">
              <h2 className="font-serif text-lg sm:text-xl font-normal tracking-tight mb-4">
                Selected references
              </h2>
              <p className="text-[13px] text-text-tertiary mb-6">Methods and literature in active use.</p>
              <div className="space-y-6 max-w-2xl">
                {references.map((group) => (
                  <div key={group.category}>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-text-quaternary mb-2">{group.category}</p>
                    <ul className="space-y-1.5">
                      {group.refs.map((ref) => (
                        <li key={ref} className="text-[13px] text-text-secondary leading-relaxed">{ref}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* What we keep proprietary */}
            <section id="proprietary" className="border-t border-border py-10 sm:py-12 scroll-mt-20">
              <h2 className="font-serif text-lg sm:text-xl font-normal tracking-tight mb-4">
                What we keep proprietary
              </h2>
              <div className="border-l-2 border-border pl-6 max-w-2xl">
                <p className="text-[15px] text-text-secondary leading-relaxed">
                  We describe our methodology in depth and report our results honestly. We do not publish the deployable parameters of our strategies — the universes, thresholds, sizing rules, and signal definitions that constitute the edge. A real edge is finite and is treated accordingly. We are transparent about how an edge is established and how the capital trading it is protected.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block mt-6 text-[13px] text-text-tertiary hover:text-text-secondary transition-colors underline decoration-text-quaternary underline-offset-3"
              >
                Contact
              </Link>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
