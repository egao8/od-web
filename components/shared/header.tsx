"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: "/strategies", label: "Strategies" },
    { href: "/research", label: "Research" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            {mounted && resolvedTheme === "dark" ? (
              <Image src="/logoicon.png" alt="EGAlpha" width={20} height={20} className="w-5 h-auto" priority />
            ) : mounted && resolvedTheme === "light" ? (
              <Image src="/logoiconlight.png" alt="EGAlpha" width={20} height={20} className="w-5 h-auto" priority />
            ) : (
              <div className="w-5 h-5" />
            )}
            <span className="text-sm font-medium tracking-tight">EGAlpha</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] transition-colors ${
                  pathname === link.href
                    ? "text-foreground"
                    : "text-text-tertiary hover:text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="text-[13px] text-text-tertiary hover:text-text-secondary transition-colors ml-2"
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
              >
                {resolvedTheme === "dark" ? "Light" : "Dark"}
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-full bg-foreground transition-all duration-200 ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-full bg-foreground transition-all duration-200 ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-border bg-background">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-foreground"
                    : "text-text-tertiary hover:text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="text-sm text-text-tertiary hover:text-text-secondary transition-colors text-left"
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
              >
                {resolvedTheme === "dark" ? "Light" : "Dark"}
              </button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
