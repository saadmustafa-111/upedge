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
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-zinc-900",
  },
  {
    icon: Target,
    value: `${PROJECTS_COMPLETED}+`,
    label: "Projects Completed",
    description: "Successfully delivered installations",
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-zinc-900",
  },
  {
    icon: Users,
    value: "Trained",
    label: "Professional Team",
    description: "Certified and experienced technicians",
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-zinc-900",
  },
  {
    icon: HeadphonesIcon,
    value: "24/7",
    label: "Support Available",
    description: "Reliable after-sales support",
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-zinc-900",
  },
];

const industries = [
  { icon: Building2, name: "Residential", color: "text-amber-600 dark:text-amber-400" },
  { icon: ShoppingBag, name: "Commercial & Retail", color: "text-amber-600 dark:text-amber-400" },
  { icon: Building2, name: "Offices & Institutions", color: "text-amber-600 dark:text-amber-400" },
  { icon: GraduationCap, name: "Educational", color: "text-amber-600 dark:text-amber-400" },
];

export function WhyUpedge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-20 dark:bg-black"
    >
      <div className="relative container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-zinc-950 dark:text-white">Why UpEdge</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-200 leading-relaxed">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Security, Surveillance, Networking & Access Control</span> — backed by over 10 years of experience and 500+ successful projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-[1.75rem] border transition-all duration-300",
              "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800",
              "shadow-[0_18px_40px_rgba(18,18,18,0.08)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]",
              "p-6 sm:p-8 lg:p-10"
            )}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">
              Company Profile
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-zinc-700 dark:text-zinc-200 leading-relaxed">
              <p>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">UpEdge Technologies</span> specializes in comprehensive security, surveillance, networking, and access control solutions. With over 10 years of hands-on experience and over 500 completed projects, we deliver reliable installations and scalable solutions tailored to your specific needs.
              </p>
              <p>
                Our focus extends beyond installation — we ensure <span className="font-semibold text-zinc-900 dark:text-zinc-100">cost-effective planning</span>, <span className="font-semibold text-zinc-900 dark:text-zinc-100">manufacturer-standard installations</span>, and <span className="font-semibold text-zinc-900 dark:text-zinc-100">dependable after-sales support</span> to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </motion.div>

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
                <div
                  className={cn(
                    "relative h-full p-6 sm:p-8 text-center",
                    "rounded-[1.75rem] overflow-hidden border border-zinc-200 dark:border-zinc-800",
                    "bg-white dark:bg-zinc-950",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                    "hover:shadow-[0_12px_28px_rgba(18,18,18,0.12)] dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.24)]",
                    "hover:-translate-y-1",
                    "transition-all duration-500 ease-out group"
                  )}
                >
                  <div
                    className={cn(
                      "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300",
                      achievement.iconBg,
                      "group-hover:scale-105"
                    )}
                  >
                    <Icon className={cn("w-7 h-7 sm:w-8 sm:h-8", achievement.iconColor)} />
                  </div>

                  <div className="mb-2 text-3xl font-bold text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
                    {achievement.value}
                  </div>

                  <div className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {achievement.label}
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
          desktopGridClassName="grid lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-6 sm:mb-8">
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
                    "relative overflow-hidden rounded-[1.5rem] border transition-all duration-300",
                    "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800",
                    "hover:bg-white dark:hover:bg-zinc-950 hover:border-amber-300 dark:hover:border-zinc-700",
                    "shadow-[0_4px_16px_rgba(18,18,18,0.05)] hover:shadow-[0_6px_24px_rgba(18,18,18,0.1)]",
                    "p-4 sm:p-6 text-center"
                  )}
                >
                  <Icon className={cn("w-8 h-8 mx-auto mb-3", industry.color)} />
                  <p className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {industry.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

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
