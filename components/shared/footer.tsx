import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <p className="text-sm text-text-secondary">EGAlpha</p>
            <p className="text-[11px] text-text-quaternary mt-1">&copy; {new Date().getFullYear()} EGAlpha. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-[11px] text-text-tertiary">
            <Link href="/strategies" className="hover:text-text-secondary transition-colors">Strategies</Link>
            <Link href="/research" className="hover:text-text-secondary transition-colors">Research</Link>
            <Link href="/contact" className="hover:text-text-secondary transition-colors">Contact</Link>
          </div>
        </div>
        <p className="mt-6 text-[10px] text-text-quaternary max-w-lg leading-relaxed">
          For informational purposes only. Not investment advice. Past performance does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}
