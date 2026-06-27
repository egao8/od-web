import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { FadeInSection } from "@/components/shared/fade-in-section";

const principles = [
  "A strategy is deployed only after out-of-sample validation under a protocol fixed in advance.",
  "Hypotheses are pre-registered; results are reported against pre-committed criteria regardless of outcome.",
  "Risk controls are engineered before capital is committed.",
  "Backtests reproduce to the exact value, or they are not treated as results.",
  "An edge is retired on evidence when it degrades.",
];

export default function About() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-10 sm:pb-14">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection delay={150}>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight leading-[1.15]">
              Who We Are
            </h1>
            <p className="mt-3 text-[15px] text-text-secondary max-w-xl leading-relaxed">
              Meet the founding team.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12">
              <p className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">Who we are</p>
              <div className="max-w-2xl space-y-3 text-[15px] text-text-secondary leading-relaxed">
                <p>
                  EGAlpha is an incredibly small team of Applied ML engineers and researchers with shared experience in independent algorithmic trading. We combine to extract edges for our own capital and provide services to our partners. 
                </p>
                <p>
                  It is currently led by Eddie Gao.
                </p>
                <p>
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <Link
              href="/contact"
              className="text-[13px] text-text-tertiary hover:text-text-secondary transition-colors underline decoration-text-quaternary underline-offset-3"
            >
              Contact
            </Link>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
