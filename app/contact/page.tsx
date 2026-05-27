import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { FadeInSection } from "@/components/shared/fade-in-section";

export default function Contact() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-28 sm:pt-36 pb-10 sm:pb-14">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection delay={150}>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight leading-[1.15]">
              Contact
            </h1>
          </FadeInSection>
        </div>
      </section>

      <section className="border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12">
              <p className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">General</p>
              <div className="space-y-3">
                <p className="text-sm text-text-secondary">
                  For research access, strategy licensing, partnership discussions, or general inquiries.
                </p>
                <p className="text-sm">
                  <a href="mailto:inquiries@egalpha.com" className="underline decoration-text-quaternary underline-offset-3 hover:decoration-text-secondary transition-colors">
                    inquiries@egalpha.com
                  </a>
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
