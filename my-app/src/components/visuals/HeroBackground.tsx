"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-black" />
          <div
            className="absolute inset-x-0 bottom-0 top-22 hidden bg-cover bg-top bg-no-repeat opacity-90 sm:block"
            style={{ backgroundImage: "url('/darkbg.png')" }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95 sm:hidden"
            style={{ backgroundImage: "url('/heromobiledark.png')" }}
          />
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/95 to-transparent" />
          <div className="absolute inset-0 bg-black/28 sm:bg-black/18" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-white" />
          <div
            className="absolute inset-x-0 bottom-0 top-22 hidden bg-cover bg-top bg-no-repeat sm:block"
            style={{ backgroundImage: "url('/HeroBackground.png')" }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
            style={{ backgroundImage: "url('/heromobileLight.png')" }}
          />
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white via-white/95 to-transparent" />
          <div className="absolute inset-0 bg-white/55 sm:bg-white/30" />
        </>
      )}
    </div>
  );
}
