"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MobileSlider } from "./MobileSlider";

const brands = [
  { name: "Hikvision", logo: "/brands/hikvision.png" },
  { name: "Dahua", logo: "/brands/dhuva.png" },
  { name: "UNV", logo: "/brands/UNV.png" },
  { name: "IMOU", logo: "/brands/IMOU.png" },
  { name: "EZVIZ", logo: "/brands/ezviz.jpg" },
  { name: "Tenda", logo: "/brands/tenda.png" },
  { name: "TP-Link", logo: "/brands/tplink.jpg" },
];

interface BrandStripProps {
  variant?: "default" | "compact";
  showTitle?: boolean;
}

export function BrandStrip({ variant = "default", showTitle = true }: BrandStripProps) {
  const shouldReduceMotion = useReducedMotion();
  const isCompact = variant === "compact";

  return (
    <div className={cn("w-full", isCompact ? "py-6 sm:py-8" : "")}>
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className={cn(
            "text-center mb-6 sm:mb-8",
            isCompact ? "max-w-2xl mx-auto" : "max-w-4xl mx-auto"
          )}
        >
          <h3
            className={cn(
              "font-bold text-foreground dark:text-white mb-2",
              isCompact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
            )}
          >
            Trusted Brands We Use
          </h3>
          <p
            className={cn(
              "text-muted-foreground dark:text-slate-300 leading-relaxed",
              isCompact ? "text-sm" : "text-sm sm:text-base"
            )}
          >
            We work with industry-leading brands for performance and long-term reliability.
          </p>
        </motion.div>
      )}

      {/* Desktop Grid */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-8 items-start justify-items-center max-w-6xl mx-auto">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.05,
              }}
              className="group relative flex flex-col items-center gap-3"
            >
              <div
                className={cn(
                  "relative transition-all duration-300",
                  "grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100",
                  isCompact ? "h-12 w-32" : "h-16 w-40"
                )}
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                  sizes={isCompact ? "128px" : "160px"}
                />
              </div>
              <span className={cn(
                "text-center font-medium transition-colors duration-300",
                "text-foreground/60 dark:text-slate-400 group-hover:text-foreground dark:group-hover:text-white",
                isCompact ? "text-xs" : "text-sm"
              )}>
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <MobileSlider
          items={brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.05,
              }}
              className="group flex flex-col items-center justify-center gap-3 px-4"
            >
              <div
                className={cn(
                  "relative transition-all duration-300",
                  "grayscale opacity-75 active:grayscale-0 active:opacity-100",
                  isCompact ? "h-12 w-32" : "h-16 w-40"
                )}
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                  sizes={isCompact ? "128px" : "160px"}
                />
              </div>
              <span className={cn(
                "text-center font-medium",
                "text-foreground/60 dark:text-slate-400",
                isCompact ? "text-xs" : "text-sm"
              )}>
                {brand.name}
              </span>
            </motion.div>
          ))}
          showDots={false}
          align="center"
          desktopGridClassName="grid grid-cols-3 gap-6"
        />
      </div>
    </div>
  );
}
