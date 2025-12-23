"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, ShoppingBag, Building2, Warehouse } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileSlider } from "@/components/shared/MobileSlider";

const solutions = [
  {
    icon: Home,
    title: "Home Security",
    description: "Entry points, driveway, and indoor coverage with clear night view.",
    chips: ["Night Vision", "Mobile View", "24/7 Recording"],
    gradient: "from-cyan-500/10 to-blue-500/10 dark:from-cyan-400/10 dark:to-blue-400/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: ShoppingBag,
    title: "Retail / Shop",
    description: "Cash counter + entry/exit visibility to reduce theft and track incidents.",
    chips: ["Wide Angle", "Motion Alerts", "Playback"],
    gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Building2,
    title: "Office / Reception",
    description: "Reception and corridors for controlled access and incident tracking.",
    chips: ["Indoor", "Parking", "Timelines"],
    gradient: "from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Warehouse,
    title: "Warehouse / Factory",
    description: "Gates and loading bays with stable PoE networking and longer storage.",
    chips: ["Outdoor", "PoE", "Longer Storage"],
    gradient: "from-purple-500/10 to-cyan-500/10 dark:from-purple-400/10 dark:to-cyan-400/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

export function Solutions() {
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

  return (
    <section
      id="solutions"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent dark:via-cyan-400/5 pointer-events-none"></div>

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
            <span className="text-primary dark:text-white">Solutions built </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              around your space
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            We plan coverage first—then select the right cameras and recording setup.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <MobileSlider
          items={solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
              >
                <Card className={cn(
                  "relative overflow-hidden h-full backdrop-blur-2xl border-2 transition-all duration-300 group cursor-pointer",
                  "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                  "hover:bg-white/70 dark:hover:bg-slate-900/60 hover:border-cyan-500/50 dark:hover:border-cyan-500/30",
                  "shadow-[0_4px_24px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]",
                  "hover:shadow-[0_8px_32px_rgba(0,194,255,0.2),inset_0_1px_2px_rgba(255,255,255,0.6)] dark:hover:shadow-[0_8px_32px_rgba(0,194,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.15)]"
                )}>
                  {/* Gradient overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                    solution.gradient
                  )}></div>

                  <div className="relative p-6">
                    {/* Icon */}
                    <div className={cn(
                      "w-12 h-12 rounded-2xl mb-4 flex items-center justify-center backdrop-blur-sm transition-all duration-300",
                      "bg-white/50 dark:bg-slate-800/50 border-2 border-white/40 dark:border-white/15",
                      "group-hover:bg-white/70 dark:group-hover:bg-slate-800/70 group-hover:scale-110"
                    )}>
                      <Icon className={cn("w-6 h-6", solution.iconColor)} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-3">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground dark:text-slate-300 leading-relaxed mb-4">
                      {solution.description}
                    </p>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {solution.chips.map((chip) => (
                        <Badge
                          key={chip}
                          variant="outline"
                          className="text-xs px-2.5 py-0.5 border-cyan-500/30 dark:border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 backdrop-blur-sm"
                        >
                          {chip}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={handleScrollToBlueprint}
                      variant="ghost"
                      size="sm"
                      className="w-full rounded-xl group/btn hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 text-foreground dark:text-white transition-all"
                    >
                      Get a plan
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Top highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>
                </Card>
              </motion.div>
            );
          })}
          desktopGridClassName="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          className="mb-12 sm:mb-16"
        />

        {/* Bottom Callout Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
        >
          <div
            onClick={handleScrollToBlueprint}
            className={cn(
              "relative overflow-hidden rounded-2xl sm:rounded-3xl backdrop-blur-2xl border-2 transition-all duration-300 cursor-pointer group max-w-4xl mx-auto",
              "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 dark:from-cyan-400/15 dark:via-blue-400/15 dark:to-indigo-400/15",
              "border-cyan-500/40 dark:border-cyan-500/30",
              "hover:border-cyan-500/60 dark:hover:border-cyan-500/50",
              "shadow-[0_4px_24px_rgba(0,194,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)]",
              "hover:shadow-[0_8px_32px_rgba(0,194,255,0.25),inset_0_1px_2px_rgba(255,255,255,0.6)] dark:hover:shadow-[0_8px_32px_rgba(0,194,255,0.2),inset_0_1px_2px_rgba(255,255,255,0.15)]"
            )}
          >
            {/* Top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

            <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground dark:text-white mb-1">
                  Not sure what you need?
                </p>
                <p className="text-sm sm:text-base text-muted-foreground dark:text-slate-300">
                  Try our 30-second Blueprint
                </p>
              </div>
              <Button
                className={cn(
                  "rounded-full font-semibold whitespace-nowrap shrink-0",
                  "bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl",
                  "text-primary dark:text-cyan-400",
                  "hover:bg-white dark:hover:bg-slate-800",
                  "shadow-lg hover:shadow-xl transition-all duration-300",
                  "border-2 border-cyan-500/30 dark:border-cyan-500/30",
                  "group-hover:scale-105"
                )}
                size="lg"
              >
                Start Blueprint
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
