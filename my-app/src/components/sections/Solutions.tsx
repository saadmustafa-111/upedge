"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Network, 
  Sun,
  ArrowRight 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DeckSlider } from "@/components/shared/DeckSlider";

const solutions = [
  {
    id: "security",
    icon: Shield,
    title: "Security & Surveillance",
    outcome: "Complete visibility and incident tracking for your property",
    features: [
      "CCTV Cameras (Analog / IP / Wireless)",
      "System Design & Coverage Planning",
      "Installation & Remote Viewing Setup",
    ],
    gradient: "from-cyan-500/10 to-blue-500/10 dark:from-cyan-400/10 dark:to-blue-400/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    iconBg: "bg-cyan-500/10",
    image: "/dvr.png",
  },
  {
    id: "networking",
    icon: Network,
    title: "Networking & Access Control",
    outcome: "Reliable connectivity and secure entry management",
    features: [
      "Structured Cabling (LAN/WAN) & Network Setup",
      "Switches, Routers & Secure Configuration",
      "Biometric Attendance & Door Access Control (RFID)",
    ],
    gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10",
    image: "/Solar/installation.jpg",
  },
  {
    id: "solar",
    icon: Sun,
    title: "Solar Energy Solutions",
    outcome: "Sustainable power with long-term savings and backup security",
    features: [
      "Sale & Supply (Panels, Inverters, Batteries)",
      "Installation (Grid / Off-grid / Hybrid Systems)",
      "Design, Sizing & ROI Consultancy",
    ],
    gradient: "from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-500/10",
    image: "/Solar/inverter.jpg",
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
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent dark:via-cyan-400/5 pointer-events-none"></div>

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
            <span className="text-primary dark:text-white">Complete </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Security, Networking & Solar Energy — tailored for homes, offices, retail & industrial spaces
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <DeckSlider
          slides={solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.id}
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
                  "bg-white/90 dark:bg-slate-900/90",
                  "shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                  "hover:shadow-[0_12px_48px_rgba(0,194,255,0.15)] dark:hover:shadow-[0_12px_48px_rgba(0,194,255,0.2)]",
                  "hover:-translate-y-1",
                  "transition-all duration-500 ease-out group"
                )}>
                  {/* Gradient background */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                    solution.gradient
                  )}></div>

                  <div className="relative flex flex-col h-full">
                    {/* Top Row: Icon + Image (if exists) */}
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      {/* Icon */}
                      <div className={cn(
                        "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300",
                        solution.iconBg,
                        "group-hover:scale-105"
                      )}>
                        <Icon className={cn("w-7 h-7 sm:w-8 sm:h-8", solution.iconColor)} />
                      </div>

                      {/* Image Thumbnail */}
                      {solution.image && (
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-md">
                          <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            className="object-cover"
                            sizes="128px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-2 sm:mb-3">
                      {solution.title}
                    </h3>

                    {/* Outcome */}
                    <p className="text-sm sm:text-base text-muted-foreground dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                      {solution.outcome}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0",
                            solution.iconColor
                          )}></div>
                          <span className="text-sm sm:text-base text-foreground/80 dark:text-slate-200 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={handleScrollToBlueprint}
                      className={cn(
                        "w-full group/btn relative overflow-hidden border-0",
                        "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                        "text-white font-semibold py-5 sm:py-6 rounded-xl",
                        "transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,194,255,0.4)]"
                      )}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Request Plan
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
          desktopGridClassName="grid lg:grid-cols-3 gap-6 lg:gap-8"
        />
      </div>
    </section>
  );
}
