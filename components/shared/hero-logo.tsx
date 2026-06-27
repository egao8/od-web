"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroLogo() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full aspect-square" aria-hidden="true" />;

  return (
    <Image
      src={resolvedTheme === "dark" ? "/egalpha_dither.png" : "/egalpha_logo_dither.png"}
      alt="EGAlpha"
      width={400}
      height={400}
      priority
      className="w-full h-auto"
    />
  );
}
