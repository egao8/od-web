import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground flex items-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="font-serif text-3xl font-normal tracking-tight">404</h1>
        <p className="mt-2 text-sm text-text-secondary">Page not found.</p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm underline decoration-text-quaternary underline-offset-3 hover:decoration-text-secondary transition-colors"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
