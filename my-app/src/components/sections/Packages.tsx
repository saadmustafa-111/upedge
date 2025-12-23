"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileSlider } from "@/components/shared/MobileSlider";

const packages = [
  {
    id: "starter",
    title: "Starter Coverage",
    bestFor: "Small home / small shop",
    typicalUse: "Entry + key indoor areas",
    cameraRange: "2–4 camera planning range",
    includes: [
      "2–4 camera planning range",
      "Indoor/outdoor mix (as needed)",
      "Mobile viewing setup",
      "Basic recording configuration",
    ],
    gradient: "from-cyan-500 to-blue-500",
    borderGlow: "shadow-[0_0_20px_rgba(0,194,255,0.3)]",
  },
  {
    id: "standard",
    title: "Standard Coverage",
    bestFor: "Home + driveway / mid-size retail",
    typicalUse: "Entry + cash counter + perimeter",
    cameraRange: "4–8 camera planning range",
    includes: [
      "4–8 camera planning range",
      "Better night visibility guidance",
      "Storage planning (days recommendation)",
      "Clean cabling + labeling",
    ],
    recommended: true,
    gradient: "from-indigo-500 to-purple-500",
    borderGlow: "shadow-[0_0_24px_rgba(99,102,241,0.4)]",
  },
  {
    id: "pro",
    title: "Pro Coverage",
    bestFor: "Warehouse / factory / larger spaces",
    typicalUse: "Gates + loading bay + aisles + perimeter",
    cameraRange: "8–16 camera planning range",
    includes: [
      "8–16 camera planning range",
      "PoE network-ready guidance",
      "Longer storage strategy",
      "Maintenance-ready setup",
    ],
    gradient: "from-purple-500 to-pink-500",
    borderGlow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
];

const compareFeatures = [
  { feature: "Mobile Access", starter: true as const, standard: true as const, pro: true as const },
  { feature: "Coverage Planning", starter: true as const, standard: true as const, pro: true as const },
  { feature: "Storage Guidance", starter: false as const, standard: true as const, pro: true as const },
  { feature: "PoE / Structured cabling", starter: false as const, standard: "optional" as const, pro: true as const },
];

export function Packages() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedPackage, setSelectedPackage] = useState<string | null>("standard");

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId);
    // Scroll to blueprint
    const element = document.getElementById("blueprint");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToBlueprint = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("blueprint");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="packages"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent dark:via-indigo-400/5 pointer-events-none"></div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-primary dark:text-white">Packages designed for </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              real coverage
            </span>
            <span className="text-primary dark:text-white"> (not guesswork)</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Choose a starting point. We finalize the exact camera count and placement after a quick site survey.
          </p>
        </motion.div>

        {/* Package Cards */}
        <MobileSlider
          items={packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
              className="relative group"
            >
              {/* Animated edge light on hover */}
              {!shouldReduceMotion && (
                <div
                  className={cn(
                    "absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    "bg-gradient-to-r", pkg.gradient,
                    "blur-sm",
                    pkg.borderGlow
                  )}
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%, transparent 100%)`,
                    backgroundSize: "200% 200%",
                    animation: "edgeLight 3s linear infinite",
                  }}
                />
              )}

              <Card
                className={cn(
                  "relative h-full rounded-3xl backdrop-blur-2xl border-2 p-6 sm:p-8 transition-all duration-300",
                  "bg-white/60 dark:bg-slate-900/50",
                  selectedPackage === pkg.id || pkg.recommended
                    ? `border-transparent bg-gradient-to-br ${pkg.gradient} bg-clip-padding`
                    : "border-white/40 dark:border-white/15",
                  selectedPackage === pkg.id || pkg.recommended
                    ? pkg.borderGlow
                    : "shadow-[0_4px_24px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]",
                  "hover:shadow-[0_8px_32px_rgba(0,194,255,0.15)]"
                )}
              >
                {/* Inner card with glass effect */}
                <div className={cn(
                  "relative h-full rounded-2xl p-6 sm:p-8",
                  selectedPackage === pkg.id || pkg.recommended
                    ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl"
                    : ""
                )}>
                  {/* Top highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

                  {/* Recommended badge */}
                  {pkg.recommended && (
                    <Badge
                      className={cn(
                        "absolute -top-3 left-1/2 -translate-x-1/2",
                        "bg-gradient-to-r", pkg.gradient,
                        "text-white border-0 shadow-lg px-4 py-1"
                      )}
                    >
                      <Star className="w-3 h-3 mr-1 fill-white" />
                      Recommended
                    </Badge>
                  )}

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-6">
                    {pkg.title}
                  </h3>

                  {/* Meta info */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground dark:text-slate-400 uppercase tracking-wider mb-1">
                        Best for
                      </div>
                      <div className="text-sm text-foreground dark:text-white font-medium">
                        {pkg.bestFor}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground dark:text-slate-400 uppercase tracking-wider mb-1">
                        Typical use
                      </div>
                      <div className="text-sm text-foreground dark:text-white font-medium">
                        {pkg.typicalUse}
                      </div>
                    </div>
                  </div>

                  {/* Camera range highlight */}
                  <div className={cn(
                    "p-4 rounded-xl mb-6",
                    "bg-gradient-to-br", pkg.gradient,
                    "bg-opacity-10 backdrop-blur-sm border border-white/20"
                  )}>
                    <div className="text-sm font-bold text-foreground dark:text-white">
                      {pkg.cameraRange}
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-foreground dark:text-white mb-4 uppercase tracking-wider">
                      Includes
                    </h4>
                    <div className="space-y-3">
                      {pkg.includes.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <div className={cn(
                            "p-0.5 rounded-md bg-gradient-to-br shrink-0",
                            pkg.gradient,
                            "text-white"
                          )}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-sm text-foreground dark:text-slate-200">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Select button */}
                  <Button
                    onClick={() => handleSelectPackage(pkg.id)}
                    className={cn(
                      "w-full rounded-xl font-semibold transition-all duration-300",
                      selectedPackage === pkg.id
                        ? `bg-gradient-to-r ${pkg.gradient} text-white shadow-lg`
                        : "bg-white/50 dark:bg-slate-800/50 border-2 border-white/40 dark:border-white/20 text-foreground dark:text-white hover:border-opacity-60"
                    )}
                    size="lg"
                  >
                    {selectedPackage === pkg.id ? (
                      <>
                        <Check className="mr-2 w-4 h-4" />
                        Selected
                      </>
                    ) : (
                      <>
                        Select
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
          desktopGridClassName="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          className="mb-12 sm:mb-16"
        />

        {/* Compare at a glance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="max-w-5xl mx-auto mb-12 sm:mb-16"
        >
          <div className={cn(
            "rounded-3xl backdrop-blur-2xl border-2 p-6 sm:p-8",
            "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
            "shadow-[0_4px_24px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]"
          )}>
            {/* Top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-6">
              Compare at a glance
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border dark:border-slate-700">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-foreground dark:text-white">
                      Feature
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground dark:text-white">
                      Starter
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground dark:text-white">
                      Standard
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground dark:text-white">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareFeatures.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={cn(
                        index !== compareFeatures.length - 1 && "border-b border-border/50 dark:border-slate-700/50"
                      )}
                    >
                      <td className="py-4 px-2 text-sm text-foreground dark:text-slate-200">
                        {row.feature}
                      </td>
                      <td className="py-4 px-2 text-center">
                        {typeof row.starter === 'boolean' && row.starter ? (
                          <Check className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mx-auto" />
                        ) : typeof row.starter === 'string' ? (
                          <span className="text-xs text-muted-foreground dark:text-slate-400">Optional</span>
                        ) : (
                          <span className="text-muted-foreground dark:text-slate-600">—</span>
                        )}
                      </td>
                      <td className="py-4 px-2 text-center">
                        {typeof row.standard === 'boolean' && row.standard ? (
                          <Check className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mx-auto" />
                        ) : typeof row.standard === 'string' ? (
                          <span className="text-xs text-muted-foreground dark:text-slate-400">Optional</span>
                        ) : (
                          <span className="text-muted-foreground dark:text-slate-600">—</span>
                        )}
                      </td>
                      <td className="py-4 px-2 text-center">
                        {typeof row.pro === 'boolean' && row.pro ? (
                          <Check className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto" />
                        ) : typeof row.pro === 'string' ? (
                          <span className="text-xs text-muted-foreground dark:text-slate-400">Optional</span>
                        ) : (
                          <span className="text-muted-foreground dark:text-slate-600">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              onClick={handleScrollToBlueprint}
              className={cn(
                "rounded-xl font-semibold",
                "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                "text-white shadow-[0_4px_24px_rgba(0,194,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,194,255,0.4)]",
                "transition-all duration-300"
              )}
              size="lg"
            >
              <Zap className="mr-2 w-4 h-4" />
              Run 30-Second Blueprint
            </Button>
            <Button
              onClick={handleScrollToContact}
              variant="outline"
              className={cn(
                "rounded-xl font-semibold backdrop-blur-xl",
                "bg-white/50 dark:bg-slate-800/50 border-2 border-white/40 dark:border-white/20",
                "hover:bg-white/70 dark:hover:bg-slate-800/70 hover:border-indigo-500/40",
                "transition-all duration-300"
              )}
              size="lg"
            >
              Request Site Survey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
            No pricing online—every site is different. We recommend what you actually need.
          </p>
        </motion.div>
      </div>

      {/* CSS for edge light animation */}
      <style jsx>{`
        @keyframes edgeLight {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 200%;
          }
        }
      `}</style>
    </section>
  );
}
