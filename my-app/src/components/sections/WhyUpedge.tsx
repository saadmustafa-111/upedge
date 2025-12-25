"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, Award, Users, HeadphonesIcon, Building2, ShoppingBag, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { DeckSlider } from "@/components/shared/DeckSlider";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { YEARS_EXPERIENCE, PROJECTS_COMPLETED } from "@/lib/constants";

const achievements = [
  {
    icon: Award,
    value: `${YEARS_EXPERIENCE}+`,
    label: "Years Experience",
    description: "Over 10 years of hands-on expertise",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: Target,
    value: `${PROJECTS_COMPLETED}+`,
    label: "Projects Completed",
    description: "Successfully delivered installations",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Users,
    value: "Trained",
    label: "Professional Team",
    description: "Certified and experienced technicians",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-500/10",
  },
  {
    icon: HeadphonesIcon,
    value: "24/7",
    label: "Support Available",
    description: "Reliable after-sales support",
    iconColor: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-500/10",
  },
];

const industries = [
  { icon: Building2, name: "Residential", color: "text-cyan-600 dark:text-cyan-400" },
  { icon: ShoppingBag, name: "Commercial & Retail", color: "text-blue-600 dark:text-blue-400" },
  { icon: Building2, name: "Offices & Institutions", color: "text-indigo-600 dark:text-indigo-400" },
  { icon: GraduationCap, name: "Educational", color: "text-purple-600 dark:text-purple-400" },
];

export function WhyUpedge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent dark:via-indigo-400/5 pointer-events-none"></div>

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
              UpEdge
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-foreground dark:text-white">Security, Surveillance & Networking</span> + <span className="font-semibold text-foreground dark:text-white">Solar Energy Solutions</span> — backed by over 10 years of experience and 500+ successful projects.
          </p>
        </motion.div>

        {/* Company Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <div className={cn(
            "relative overflow-hidden rounded-3xl backdrop-blur-2xl border-2 transition-all duration-300",
            "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
            "shadow-[0_8px_32px_rgba(0,194,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)]",
            "p-6 sm:p-8 lg:p-10"
          )}>
            {/* Top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent"></div>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-4 sm:mb-6">
              Company Profile
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-foreground/80 dark:text-slate-200 leading-relaxed">
              <p>
                <span className="font-semibold text-foreground dark:text-white">UpEdge Technologies</span> specializes in comprehensive security, surveillance, networking, and solar energy solutions. With over 10 years of hands-on experience and over 500 completed projects, we deliver reliable installations and scalable solutions tailored to your specific needs.
              </p>
              <p>
                Our focus extends beyond installation — we ensure <span className="font-semibold text-foreground dark:text-white">cost-effective planning</span>, <span className="font-semibold text-foreground dark:text-white">manufacturer-standard installations</span>, and <span className="font-semibold text-foreground dark:text-white">dependable after-sales support</span> to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <DeckSlider
          slides={achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
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
                  "relative h-full p-6 sm:p-8 text-center",
                  "rounded-3xl overflow-hidden",
                  "bg-white/90 dark:bg-slate-900/90",
                  "shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                  "hover:shadow-[0_12px_48px_rgba(0,194,255,0.15)] dark:hover:shadow-[0_12px_48px_rgba(0,194,255,0.2)]",
                  "hover:-translate-y-1",
                  "transition-all duration-500 ease-out group"
                )}>
                  {/* Icon */}
                  <div className={cn(
                    "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300",
                    achievement.iconBg,
                    "group-hover:scale-105"
                  )}>
                    <Icon className={cn("w-7 h-7 sm:w-8 sm:h-8", achievement.iconColor)} />
                  </div>

                  {/* Value */}
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary dark:text-cyan-400 mb-2">
                    {achievement.value}
                  </div>

                  {/* Label */}
                  <div className="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-2">
                    {achievement.label}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground dark:text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
          desktopGridClassName="grid lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        />

        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground dark:text-white mb-6 sm:mb-8">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.5,
                    delay: shouldReduceMotion ? 0 : idx * 0.1,
                  }}
                  className={cn(
                    "relative overflow-hidden rounded-2xl backdrop-blur-2xl border-2 transition-all duration-300",
                    "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                    "hover:bg-white/70 dark:hover:bg-slate-900/60 hover:border-cyan-500/30",
                    "shadow-[0_4px_16px_rgba(0,194,255,0.08)] hover:shadow-[0_6px_24px_rgba(0,194,255,0.15)]",
                    "p-4 sm:p-6 text-center"
                  )}
                >
                  <Icon className={cn("w-8 h-8 mx-auto mb-3", industry.color)} />
                  <p className="text-sm sm:text-base font-semibold text-foreground dark:text-white">
                    {industry.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Brands We Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <BrandStrip variant="default" showTitle={true} />
        </motion.div>
      </div>
    </section>
  );
}
