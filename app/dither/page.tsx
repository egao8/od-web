"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function Dither() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
          {mounted && (
            <Image
              src={resolvedTheme === "dark" ? "/egalpha_dither.png" : "/egalpha_logo_dither.png"}
              alt="EGAlpha logo — dithered"
              width={512}
              height={512}
              priority
              className="w-full max-w-md sm:max-w-lg"
            />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
