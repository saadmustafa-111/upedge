"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight } from "lucide-react";
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
  },
];

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
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-20 dark:bg-black"
    >
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
            <span className="text-zinc-950 dark:text-white">Solution Packages</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-200 leading-relaxed">
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
                "relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 sm:p-8",
                "shadow-[0_18px_40px_rgba(18,18,18,0.08)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]",
                "hover:shadow-[0_20px_44px_rgba(18,18,18,0.12)] dark:hover:shadow-[0_20px_44px_rgba(0,0,0,0.26)]",
                "hover:-translate-y-1",
                "transition-all duration-500 ease-out"
              )}>
                {/* Recommended badge */}
                {pkg.recommended && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="border-zinc-200 bg-zinc-50 text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Recommended
                    </Badge>
                  </div>
                )}

                <div className="relative flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {pkg.title}
                  </h3>

                  {/* Best for */}
                  <p className="mb-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300 sm:text-base">
                    {pkg.bestFor}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Includes */}
                  <div className="space-y-3 mb-8 flex-grow">
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                      What's included:
                    </h4>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                        <span className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed">
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
                        "font-semibold py-5 sm:py-6 rounded-xl",
                        "transition-all duration-300 hover:shadow-[0_16px_30px_rgba(18,18,18,0.18)]",
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
                        "border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
                        "hover:border-amber-300 hover:bg-white dark:hover:border-zinc-700 dark:hover:bg-zinc-900",
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

      </div>
    </section>
  );
}
