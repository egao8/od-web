import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { FadeInSection } from "@/components/shared/fade-in-section";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EGAlpha",
    url: "https://egalpha.com",
    description: "Independent quantitative trading research and execution. Systematic intraday strategies focused on US megacap equities.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "inquiries@egalpha.com",
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
      <section className="pt-28 sm:pt-36 pb-10 sm:pb-14">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection delay={150}>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal leading-[1.2] tracking-tight max-w-2xl">
              EGAlpha is an independent quantitative trading research and execution operation.
            </h1>
          </FadeInSection>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12">
              <p className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">What we do</p>
              <div className="max-w-2xl space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  We develop, validate, and deploy systematic intraday trading strategies
                  for US megacap equities. Our research process integrates market microstructure
                  analysis, statistical validation, and execution-aware design from the outset.
                </p>
                <p>
                  All strategies operate under strict out-of-sample testing, transaction cost
                  modeling, and regime robustness constraints. Execution is fully automated
                  with real-time risk monitoring and capacity management.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-border py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-5">
              {[
                { label: "Strategies", value: "6" },
                { label: "Universe", value: "US Megacap" },
                { label: "Frequency", value: "Intraday" },
                { label: "Validation", value: "Walk-forward + OOS" },
                { label: "Execution", value: "Fully automated" },
                { label: "Live since", value: "2026" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-text-quaternary mb-0.5">{m.label}</p>
                  <p className="text-sm text-text-secondary">{m.value}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12">
              <p className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">Inquiries</p>
              <p className="text-sm text-text-secondary">
                <a href="mailto:inquiries@egalpha.com" className="underline decoration-text-quaternary underline-offset-3 hover:decoration-text-secondary transition-colors">inquiries@egalpha.com</a>
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
