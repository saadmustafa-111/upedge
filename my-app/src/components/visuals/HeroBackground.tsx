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
      {/* Base Gradient Layer */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-[#0B1220] via-[#0F1535] to-[#0A1B3D]"
            : "bg-gradient-to-br from-[#F4F7FF] via-[#EBF2FF] to-[#E0EBFF]"
        }`}
      />

      {/* SVG Arcs Layer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for glossy highlights */}
          <linearGradient id="arcGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor={isDark ? "rgba(0,194,255,0.25)" : "rgba(10,27,61,0.20)"}
            />
            <stop
              offset="50%"
              stopColor={isDark ? "rgba(120,170,255,0.12)" : "rgba(10,27,61,0.12)"}
            />
            <stop
              offset="100%"
              stopColor={isDark ? "rgba(0,194,255,0.05)" : "rgba(10,27,61,0.06)"}
            />
          </linearGradient>

          <linearGradient id="arcGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={isDark ? "rgba(109,94,249,0.18)" : "rgba(10,27,61,0.15)"}
            />
            <stop
              offset="100%"
              stopColor={isDark ? "rgba(109,94,249,0.04)" : "rgba(10,27,61,0.05)"}
            />
          </linearGradient>

          {/* Mask for fading arcs */}
          <radialGradient id="fadeMask">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id="arcFade">
            <rect width="100%" height="100%" fill="url(#fadeMask)" />
          </mask>
        </defs>

        <g mask="url(#arcFade)">
          {/* Large arc 1 - Bottom right */}
          <circle
            cx="1600"
            cy="900"
            r="800"
            fill="none"
            stroke={isDark ? "rgba(120,170,255,0.14)" : "rgba(10,27,61,0.10)"}
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Large arc 2 - Right side (highlight) */}
          <circle
            cx="1700"
            cy="600"
            r="950"
            fill="none"
            stroke="url(#arcGradient1)"
            strokeWidth="2"
            opacity="1"
          />

          {/* Large arc 3 - Center right */}
          <circle
            cx="1500"
            cy="400"
            r="700"
            fill="none"
            stroke={isDark ? "rgba(0,194,255,0.10)" : "rgba(10,27,61,0.08)"}
            strokeWidth="1"
            opacity="0.9"
          />

          {/* Large arc 4 - Top right */}
          <circle
            cx="1400"
            cy="200"
            r="600"
            fill="none"
            stroke={isDark ? "rgba(120,170,255,0.08)" : "rgba(10,27,61,0.06)"}
            strokeWidth="1.5"
            opacity="0.7"
          />

          {/* Large arc 5 - Diagonal sweep */}
          <circle
            cx="1200"
            cy="800"
            r="1100"
            fill="none"
            stroke="url(#arcGradient2)"
            strokeWidth="1.5"
            opacity="0.9"
          />

          {/* Large arc 6 - Bottom sweep */}
          <circle
            cx="1800"
            cy="1200"
            r="1000"
            fill="none"
            stroke={isDark ? "rgba(109,94,249,0.12)" : "rgba(10,27,61,0.09)"}
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Large arc 7 - Upper diagonal */}
          <circle
            cx="1300"
            cy="-100"
            r="850"
            fill="none"
            stroke={isDark ? "rgba(0,194,255,0.07)" : "rgba(10,27,61,0.05)"}
            strokeWidth="1"
            opacity="0.8"
          />

          {/* Large arc 8 - Far right edge */}
          <circle
            cx="2000"
            cy="500"
            r="750"
            fill="none"
            stroke={isDark ? "rgba(120,170,255,0.10)" : "rgba(10,27,61,0.07)"}
            strokeWidth="1.5"
            opacity="0.7"
          />

          {/* Highlight arc - Glossy effect */}
          <circle
            cx="1650"
            cy="700"
            r="880"
            fill="none"
            stroke={isDark ? "rgba(0,194,255,0.20)" : "rgba(10,27,61,0.18)"}
            strokeWidth="2"
            opacity="0.9"
            strokeDasharray="4 8"
          />
        </g>
      </svg>

      {/* Vignette Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,18,32,0.6)_100%)]"
            : "bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(244,247,255,0.4)_100%)]"
        }`}
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Subtle glow spots for depth */}
      {isDark && (
        <>
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-indigo-500/4 rounded-full blur-[100px] pointer-events-none" />
        </>
      )}

      {!isDark && (
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-blue-400/3 rounded-full blur-[140px] pointer-events-none" />
      )}
    </div>
  );
}
