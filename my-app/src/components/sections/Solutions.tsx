"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Network, ArrowRight } from "lucide-react";
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
    iconColor: "text-zinc-950 dark:text-white",
    iconBg: "bg-zinc-50 dark:bg-zinc-900",
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
    iconColor: "text-zinc-950 dark:text-white",
    iconBg: "bg-zinc-50 dark:bg-zinc-900",
    image: "/dvr.png",
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
    <section id="solutions" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20">
      <div className="relative container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-zinc-950 dark:text-white">Complete Solutions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Security, networking, and access control tailored for homes, offices, retail, and industrial spaces
          </p>
        </motion.div>

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
                <div
                  className={cn(
                    "relative h-full overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 sm:p-8",
                    "shadow-[0_8px_28px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_28px_rgba(0,0,0,0.24)]",
                    "hover:shadow-[0_12px_32px_rgba(18,18,18,0.08)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.22)]",
                    "hover:-translate-y-1 transition-all duration-500 ease-out group"
                  )}
                >
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className={cn("w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300", solution.iconBg, "group-hover:scale-105")}>
                        <Icon className={cn("w-7 h-7 sm:w-8 sm:h-8", solution.iconColor)} />
                      </div>

                      {solution.image && (
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                          <Image src={solution.image} alt={solution.title} fill className="object-cover" sizes="128px" />
                          <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-2 sm:mb-3">
                      {solution.title}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:mb-6 sm:text-base">
                      {solution.outcome}
                    </p>

                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className={cn("w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0", solution.iconColor)}></div>
                          <span className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={handleScrollToBlueprint}
                      className={cn(
                        "w-full group/btn relative overflow-hidden border-0",
                        "bg-primary text-primary-foreground font-semibold py-5 sm:py-6 rounded-xl",
                        "transition-all duration-300"
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
          desktopGridClassName="grid lg:grid-cols-2 gap-6 lg:gap-8"
        />
      </div>
    </section>
  );
}
