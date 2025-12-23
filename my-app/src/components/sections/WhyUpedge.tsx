"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, Wrench, Smartphone, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileSlider } from "@/components/shared/MobileSlider";

const pillars = [
  {
    icon: Target,
    title: "Coverage Planning",
    description: "Angles chosen to reduce blind spots.",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    iconBg: "bg-cyan-500/10 dark:bg-cyan-500/10",
  },
  {
    icon: Wrench,
    title: "Clean Installation",
    description: "Neat cabling, labeling, and testing.",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/10",
  },
  {
    icon: Smartphone,
    title: "Setup + Training",
    description: "Mobile app setup + quick walkthrough.",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-500/10 dark:bg-indigo-500/10",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Troubleshooting, upgrades, and maintenance options.",
    iconColor: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-500/10 dark:bg-purple-500/10",
  },
];

export function WhyUpedge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent dark:via-blue-400/5 pointer-events-none"></div>

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
            <span className="text-primary dark:text-white">Why </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Upedge
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-foreground dark:text-white">Clean installation.</span>{" "}
            <span className="font-semibold text-foreground dark:text-white">Correct angles.</span>{" "}
            <span className="font-semibold text-foreground dark:text-white">Support you can reach.</span>
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <MobileSlider
          items={pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
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
                className="relative group h-full"
              >
                {/* Glass Card */}
                <div className={cn(
                  "relative overflow-hidden rounded-3xl backdrop-blur-2xl border-2 transition-all duration-500 h-full",
                  "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                  "hover:bg-white/70 dark:hover:bg-slate-900/60 hover:border-cyan-500/50 dark:hover:border-cyan-500/30",
                  "shadow-[0_4px_24px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]",
                  "hover:shadow-[0_8px_32px_rgba(0,194,255,0.2),inset_0_1px_2px_rgba(255,255,255,0.6)] dark:hover:shadow-[0_8px_32px_rgba(0,194,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.15)]",
                  "p-6 sm:p-8"
                )}>
                  {/* Top highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:scale-110",
                      "border-2 border-white/40 dark:border-white/15",
                      pillar.iconBg
                    )}>
                      <Icon className={cn("w-8 h-8", pillar.iconColor)} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-3 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground dark:text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 dark:from-cyan-400/5 dark:to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                </div>
              </motion.div>
            );
          })}
          desktopGridClassName="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        />
      </div>
    </section>
  );
}
