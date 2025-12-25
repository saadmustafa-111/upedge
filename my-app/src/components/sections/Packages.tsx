"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { DeckSlider } from "@/components/shared/DeckSlider";

const packages = [
  {
    id: "essential",
    title: "Essential",
    bestFor: "Homes / Small Shops",
    description: "Perfect for basic security and monitoring needs",
    includes: [
      "2-4 Camera setup guidance",
      "Entry + Key indoor areas coverage",
      "Mobile viewing setup",
      "Basic recording configuration",
      "Installation & training",
    ],
    gradient: "from-cyan-500 to-blue-500",
    borderGlow: "shadow-[0_0_20px_rgba(0,194,255,0.3)]",
  },
  {
    id: "standard",
    title: "Standard",
    bestFor: "Retail / Offices",
    description: "Comprehensive coverage for growing businesses",
    includes: [
      "4-8 Camera planning range",
      "Cash counter + Entry/Exit + Perimeter",
      "Better night visibility guidance",
      "Storage planning (14-30 days)",
      "Clean cabling + labeling",
      "Network/Access control ready",
    ],
    recommended: true,
    gradient: "from-indigo-500 to-purple-500",
    borderGlow: "shadow-[0_0_24px_rgba(99,102,241,0.4)]",
  },
  {
    id: "advanced",
    title: "Advanced",
    bestFor: "Warehouses / Institutions",
    description: "Enterprise-grade security and monitoring",
    includes: [
      "8-16+ Camera planning range",
      "Gates + Loading bay + Perimeter + Storage zones",
      "PoE network-ready guidance",
      "Longer storage strategy (30-60 days)",
      "Biometric attendance integration",
      "Maintenance-ready setup",
    ],
    gradient: "from-purple-500 to-pink-500",
    borderGlow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
];

const solarAddon = {
  title: "Solar Backup Integration",
  description: "Add sustainable power backup to any security package",
  features: [
    "Uninterrupted surveillance during power cuts",
    "Reduced electricity costs",
    "Grid-tied or off-grid options",
    "3-5 year ROI on solar investment",
  ],
};

export function Packages() {
  const shouldReduceMotion = useReducedMotion();

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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent dark:via-purple-400/5 pointer-events-none"></div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-primary dark:text-white">Solution </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Choose a starting point. We finalize the exact setup after a quick site survey.
          </p>
        </motion.div>

        {/* Package Cards */}
        <DeckSlider
          slides={packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="h-full"
            >
              {/* Premium Card - No Borders */}
              <div className={cn(
                "relative h-full p-6 sm:p-8 flex flex-col",
                "rounded-3xl overflow-hidden",
                // Clean background with subtle transparency
                "bg-white/90 dark:bg-slate-900/90",
                // Enhanced shadow
                "shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                // Hover state with lift
                "hover:shadow-[0_12px_48px_rgba(0,194,255,0.15)] dark:hover:shadow-[0_12px_48px_rgba(0,194,255,0.2)]",
                "hover:-translate-y-1",
                "transition-all duration-500 ease-out"
              )}>
                {/* Recommended badge */}
                {pkg.recommended && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-cyan-500/15 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-0 shadow-sm">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Recommended
                    </Badge>
                  </div>
                )}

                <div className="relative flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-2">
                    {pkg.title}
                  </h3>

                  {/* Best for */}
                  <p className="text-sm sm:text-base text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                    {pkg.bestFor}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground dark:text-slate-300 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Includes */}
                  <div className="space-y-3 mb-8 flex-grow">
                    <h4 className="text-sm font-semibold text-foreground dark:text-white mb-3">
                      What's included:
                    </h4>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-foreground/80 dark:text-slate-200 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleScrollToBlueprint}
                      className={cn(
                        "w-full group/btn relative overflow-hidden",
                        "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                        "text-white font-semibold py-5 sm:py-6 rounded-xl",
                        "transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,194,255,0.4)]",
                        "border-0"
                      )}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Blueprint
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                    <Button
                      onClick={handleScrollToContact}
                      variant="outline"
                      className={cn(
                        "w-full rounded-xl",
                        "bg-white/50 dark:bg-slate-800/50 border border-foreground/10",
                        "hover:bg-white/80 dark:hover:bg-slate-800/80",
                        "transition-all duration-300"
                      )}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          desktopGridClassName="grid lg:grid-cols-3 gap-6 lg:gap-8"
        />

        {/* Solar Addon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.7, delay: shouldReduceMotion ? 0 : 0.4 }}
          className="mt-12 sm:mt-16 lg:mt-20 max-w-4xl mx-auto"
        >
          <div className={cn(
            "relative overflow-hidden rounded-3xl backdrop-blur-2xl border-2 transition-all duration-500",
            "bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-500/10 dark:from-amber-400/10 dark:via-orange-400/10 dark:to-amber-400/10",
            "border-amber-500/40 dark:border-amber-500/30",
            "hover:border-amber-500/60 dark:hover:border-amber-500/50",
            "shadow-[0_8px_32px_rgba(251,191,36,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_8px_32px_rgba(251,191,36,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)]",
            "p-6 sm:p-8 lg:p-10"
          )}>
            {/* Top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 dark:via-amber-300/20 to-transparent"></div>

            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Sun className="w-8 h-8 text-white" />
              </div>

              <div className="flex-grow">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-2">
                  {solarAddon.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground dark:text-slate-300 mb-6 leading-relaxed">
                  {solarAddon.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {solarAddon.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/80 dark:text-slate-200 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={handleScrollToContact}
                  className={cn(
                    "rounded-xl font-semibold",
                    "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
                    "text-white shadow-[0_4px_24px_rgba(251,191,36,0.3)] hover:shadow-[0_8px_32px_rgba(251,191,36,0.4)]",
                    "transition-all duration-300"
                  )}
                >
                  Add Solar to Your Package
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
