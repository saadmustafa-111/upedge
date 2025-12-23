"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Camera,
  Server,
  Smartphone,
  Network,
  Wrench,
  Check,
  ArrowRight,
  CircleDot,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "installation",
    title: "CCTV Installation (Indoor/Outdoor)",
    icon: Camera,
    color: "from-cyan-500 to-blue-500",
    short: "Clean installation with correct angles and coverage planning.",
    includes: [
      "Placement plan + blind-spot reduction",
      "Mounting + cabling + termination",
      "Full testing + recording verification",
    ],
  },
  {
    id: "nvr-setup",
    title: "NVR/DVR Setup + Storage Planning",
    icon: Server,
    color: "from-blue-500 to-indigo-500",
    short: "Stable recording, retention guidance, and fast playback.",
    includes: [
      "Storage days recommendation",
      "Motion recording optimization",
      "Playback + export walkthrough",
    ],
  },
  {
    id: "mobile-app",
    title: "Mobile App Setup + User Training",
    icon: Smartphone,
    color: "from-indigo-500 to-purple-500",
    short: "View live and playback securely from your phone.",
    includes: [
      "Remote access setup",
      "Multiple user access (if needed)",
      "Quick training at handover",
    ],
  },
  {
    id: "networking",
    title: "Networking & Structured Cabling (PoE)",
    icon: Network,
    color: "from-purple-500 to-pink-500",
    short: "Proper switches, PoE, racks, and neat wiring for reliability.",
    includes: [
      "PoE switch setup",
      "Cable management + labeling",
      "Network stability checks",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance, Troubleshooting & Upgrades",
    icon: Wrench,
    color: "from-pink-500 to-rose-500",
    short: "Ongoing support to keep your system running smoothly.",
    includes: [
      "Camera/NVR health checks",
      "Replacement/upgrade guidance",
      "Annual maintenance options",
    ],
  },
];

const everyInstallationIncludes = [
  "Coverage planning",
  "Neat wiring & finishing",
  "Mobile access setup",
  "Testing + handover checklist",
];

export function Services() {
  const shouldReduceMotion = useReducedMotion();
  const [activeService, setActiveService] = useState(services[0].id);

  const currentService = services.find((s) => s.id === activeService)!;
  const activeIndex = services.findIndex((s) => s.id === activeService);

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
      id="services"
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
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-primary dark:text-white">Services that cover </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              planning, installation, and support
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            From camera placement to clean cabling and mobile setup—we deliver a complete CCTV experience, not just hardware.
          </p>
        </motion.div>

        {/* Desktop Layout - Service Navigator + Detail Card */}
        <div className="hidden lg:grid lg:grid-cols-[320px,1fr] gap-8 max-w-7xl mx-auto">
          
          {/* Left - Service Navigator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
            className="relative"
          >
            <div className={cn(
              "sticky top-24 rounded-3xl backdrop-blur-2xl border-2 p-2 transition-all duration-300",
              "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
              "shadow-[0_8px_32px_rgba(0,194,255,0.12),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]"
            )}>
              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

              <div className="relative space-y-1">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = activeService === service.id;

                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={cn(
                        "relative w-full text-left px-4 py-3.5 rounded-2xl transition-all duration-300 group",
                        isActive
                          ? "bg-white/90 dark:bg-slate-800/80 shadow-[0_4px_16px_rgba(0,194,255,0.15)]"
                          : "hover:bg-white/50 dark:hover:bg-slate-800/40"
                      )}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className={cn(
                            "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-r-full",
                            "bg-gradient-to-b", service.color,
                            "shadow-[0_0_12px_rgba(0,194,255,0.5)]"
                          )}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Hover dot indicator */}
                      {!isActive && (
                        <CircleDot
                          className={cn(
                            "absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                            "text-cyan-500 dark:text-cyan-400"
                          )}
                        />
                      )}

                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "p-2 rounded-xl transition-all duration-300",
                            isActive
                              ? `bg-gradient-to-br ${service.color} text-white shadow-lg`
                              : "bg-white/50 dark:bg-slate-800/50 text-muted-foreground group-hover:text-foreground"
                          )}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={cn(
                              "text-sm font-semibold transition-colors duration-300 line-clamp-2",
                              isActive
                                ? "text-primary dark:text-cyan-400"
                                : "text-foreground dark:text-white group-hover:text-primary dark:group-hover:text-cyan-400"
                            )}
                          >
                            {service.title}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right - Detail Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.7, x: 12, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.7, x: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                  "rounded-3xl backdrop-blur-2xl border-2 p-8 sm:p-10 transition-all duration-300",
                  "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                  "shadow-[0_8px_32px_rgba(0,194,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)]"
                )}
              >
                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

                {/* Service Header */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={cn(
                      "p-3 rounded-2xl bg-gradient-to-br",
                      currentService.color,
                      "text-white shadow-lg"
                    )}>
                      <currentService.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-2">
                        {currentService.title}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground dark:text-slate-300">
                        {currentService.short}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Includes List */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-foreground dark:text-white mb-4 uppercase tracking-wider">
                    What's included
                  </h4>
                  <div className="space-y-3">
                    {currentService.includes.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <div className={cn(
                          "p-1 rounded-lg bg-gradient-to-br",
                          currentService.color,
                          "text-white shrink-0"
                        )}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-sm sm:text-base text-foreground dark:text-slate-200 leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Every Installation Includes */}
                <div className={cn(
                  "p-6 rounded-2xl backdrop-blur-xl border-2 mb-8",
                  "bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-indigo-500/10",
                  "border-cyan-500/30 dark:border-cyan-500/20"
                )}>
                  <h4 className="text-sm font-bold text-cyan-700 dark:text-cyan-300 mb-3 uppercase tracking-wider">
                    Every installation includes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {everyInstallationIncludes.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span className="text-sm text-foreground dark:text-slate-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  onClick={handleScrollToContact}
                  className={cn(
                    "w-full rounded-xl font-semibold",
                    "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                    "text-white shadow-[0_4px_24px_rgba(0,194,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,194,255,0.4)]",
                    "transition-all duration-300"
                  )}
                  size="lg"
                >
                  Request Site Survey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout - Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="lg:hidden max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible defaultValue={services[0].id}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className={cn(
                    "mb-4 rounded-3xl backdrop-blur-2xl border-2 overflow-hidden transition-all duration-300",
                    "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                    "shadow-[0_4px_24px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]"
                  )}
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline group">
                    <div className="flex items-center gap-3 text-left">
                      <div className={cn(
                        "p-2.5 rounded-xl bg-gradient-to-br",
                        service.color,
                        "text-white shadow-md group-hover:shadow-lg transition-shadow duration-300"
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-base font-bold text-foreground dark:text-white">
                        {service.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground dark:text-slate-300 mb-4 leading-relaxed">
                      {service.short}
                    </p>

                    {/* Includes */}
                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-foreground dark:text-white mb-3 uppercase tracking-wider">
                        What's included
                      </h4>
                      <div className="space-y-2.5">
                        {service.includes.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <div className={cn(
                              "p-0.5 rounded-md bg-gradient-to-br",
                              service.color,
                              "text-white shrink-0"
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

                    {/* Every Installation Includes */}
                    <div className={cn(
                      "p-4 rounded-xl backdrop-blur-xl border-2 mb-4",
                      "bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-indigo-500/10",
                      "border-cyan-500/30 dark:border-cyan-500/20"
                    )}>
                      <h4 className="text-xs font-bold text-cyan-700 dark:text-cyan-300 mb-2.5 uppercase tracking-wider">
                        Every installation includes
                      </h4>
                      <div className="space-y-1.5">
                        {everyInstallationIncludes.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Check className="w-3 h-3 text-cyan-600 dark:text-cyan-400 shrink-0" />
                            <span className="text-xs text-foreground dark:text-slate-200">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      onClick={handleScrollToContact}
                      className={cn(
                        "w-full rounded-xl font-semibold",
                        "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                        "text-white shadow-[0_4px_24px_rgba(0,194,255,0.3)]",
                        "transition-all duration-300"
                      )}
                      size="lg"
                    >
                      Request Site Survey
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
