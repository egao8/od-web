import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { FadeInSection } from "@/components/shared/fade-in-section";

const engagementCategories = [
  { title: "Strategy services", description: "Parties seeking full access or licensing to strategies." },
  { title: "Managed exposure", description: "Allocators interested in exposure to their portfolio." },
];

export default function Contact() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-10 sm:pb-14">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection delay={150}>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight leading-[1.15]">
              Contact
            </h1>
            <p className="mt-3 text-[15px] text-text-secondary max-w-xl leading-relaxed">
              If our approach is relevant to you, we would be glad to hear from you.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Engagement categories */}
      <section className="border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12">
              <p className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">Who we work with</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                {engagementCategories.map((cat) => (
                  <div key={cat.title}>
                    <p className="text-[15px] font-medium mb-1">{cat.title}</p>
                    <p className="text-[15px] text-text-secondary leading-relaxed">{cat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Email */}
      <section className="border-t border-border py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12">
              <p className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">General</p>
              <p className="text-[15px]">
                <a
                  href="mailto:team@egalpha.com"
                  className="underline decoration-text-quaternary underline-offset-3 hover:decoration-text-secondary transition-colors"
                >
                  team@egalpha.com
                </a>
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
