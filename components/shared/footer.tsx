import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <p className="text-[15px] text-text-secondary">EGAlpha</p>
            <p className="text-[11px] text-text-quaternary mt-1">&copy; {new Date().getFullYear()} EGAlpha. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-text-tertiary">
            <Link href="/strategies" className="hover:text-text-secondary transition-colors">Strategies</Link>
            <Link href="/methodology" className="hover:text-text-secondary transition-colors">Methodology</Link>
            <Link href="/about" className="hover:text-text-secondary transition-colors">About</Link>
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
