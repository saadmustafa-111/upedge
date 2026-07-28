"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Camera,
  Wifi,
  Fingerprint,
  Wrench,
  Lightbulb,
  Check,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCategory = {
  id: string;
  title: string;
  icon: typeof Camera;
  image?: string;
  services: string[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: "surveillance",
    title: "Surveillance & CCTV Solutions",
    icon: Camera,
    services: [
      "Security Cameras (Analog / IP / Wireless)",
      "System Design & Coverage Planning",
      "Professional Installation & Configuration",
      "Remote Viewing Setup (Mobile & PC)",
      "Troubleshooting & Repairs",
      "Annual Maintenance Contracts (AMC)",
    ],
  },
  {
    id: "networking",
    title: "Networking Solutions",
    icon: Wifi,
    services: [
      "Structured Cabling (LAN/WAN)",
      "Network Design & Planning",
      "Switch & Router Configuration",
      "Network Optimization",
      "Secure Networking Solutions",
    ],
  },
  {
    id: "access-control",
    title: "Biometric & Access Control",
    icon: Fingerprint,
    services: [
      "Biometric Attendance Machines",
      "Door Access Control Systems",
      "RFID / Card / Fingerprint Solutions",
      "User Management & Reports",
    ],
  },
  {
    id: "maintenance",
    title: "Technical Support & Maintenance",
    icon: Wrench,
    services: [
      "Preventive & Corrective Maintenance",
      "On-site & Remote Support",
      "System Health Checks",
      "Upgrades & Expansions",
    ],
  },
  {
    id: "consultancy",
    title: "Consultancy",
    icon: Lightbulb,
    services: [
      "Security Risk Assessment",
      "IT & Network Consultancy",
      "Project Planning & Design",
      "Cost-effective Solution Design",
    ],
  },
];

export function Services() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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
    <section id="services" className="relative overflow-hidden bg-zinc-950 py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-20 dark:bg-zinc-900">
      <div className="relative container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-white dark:text-white">Our Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 dark:text-zinc-300 leading-relaxed">
            Comprehensive solutions from design to installation and ongoing support
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="hidden lg:block mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id === activeCategory ? null : category.id)}
                    className={cn(
                      "flex min-h-12 items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition-all duration-300",
                      activeCategory === category.id
                        ? "border-white bg-white text-black shadow-[0_12px_24px_rgba(18,18,18,0.14)]"
                        : "border-zinc-700 bg-zinc-900 text-white hover:border-zinc-500 hover:bg-zinc-800 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
                    )}
                  >
                    <Icon className={cn("h-4 w-4", activeCategory === category.id ? "text-black" : "text-zinc-300 group-hover:text-white")} />
                    <span className="text-sm">{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block">
            {activeCategory && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative overflow-hidden rounded-[1.75rem] border transition-all duration-300",
                  "bg-white dark:bg-black border-zinc-200 dark:border-zinc-800",
                  "shadow-[0_18px_40px_rgba(18,18,18,0.08)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]",
                  "p-8"
                )}
              >
                {serviceCategories
                  .filter((cat) => cat.id === activeCategory)
                  .map((category) => {
                    const Icon = category.icon;
                    const hasImage = category.image;
                    return (
                      <div key={category.id} className={cn(hasImage && "grid lg:grid-cols-2 gap-8 items-start")}>
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                              <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">{category.title}</h3>
                          </div>

                          <div className={cn("grid gap-4", hasImage ? "grid-cols-1" : "sm:grid-cols-2")}>
                            {category.services.map((service, idx) => (
                              <div key={idx} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-zinc-700 dark:text-zinc-300" />
                                <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {hasImage && category.image && (
                          <div className="relative h-full min-h-[500px] overflow-hidden rounded-[1.5rem] border border-zinc-200 shadow-[0_18px_40px_rgba(18,18,18,0.1)] dark:border-zinc-800 dark:shadow-[0_18px_40px_rgba(0,0,0,0.24)] lg:min-h-[600px]">
                            <Image src={category.image} alt={category.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                            <div className="absolute inset-0 bg-black/25"></div>

                            <div className="absolute bottom-6 left-6 right-6">
                              <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/95 px-3 py-1.5 text-base text-zinc-950 dark:border-zinc-700 dark:bg-black/95 dark:text-white">
                                Professional System Installations
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </motion.div>
            )}

            {!activeCategory && (
              <div className="py-12 text-center text-zinc-400 dark:text-zinc-400">
                Select a service category to view details
              </div>
            )}
          </div>

          <Accordion type="single" collapsible className="lg:hidden space-y-4">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <AccordionItem
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "relative overflow-hidden rounded-[1.5rem] border transition-all duration-300",
                    "bg-white dark:bg-black border-zinc-200 dark:border-zinc-800",
                    "shadow-[0_10px_24px_rgba(18,18,18,0.06)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
                    "hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-[0_14px_30px_rgba(18,18,18,0.1)] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.22)]"
                  )}
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-base font-bold text-zinc-950 dark:text-white text-left">{category.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    {category.image && (
                      <div className="relative mb-4 h-56 overflow-hidden rounded-xl border border-zinc-200 shadow-[0_14px_28px_rgba(18,18,18,0.1)] dark:border-zinc-800 dark:shadow-[0_14px_28px_rgba(0,0,0,0.22)] sm:h-64">
                        <Image src={category.image} alt={category.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                        <div className="absolute inset-0 bg-black/25"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/95 px-3 py-1.5 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-black/95 dark:text-white">
                            Professional System Installations
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-3 pt-2">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900">
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-zinc-700 dark:text-zinc-300" />
                          <span className="text-sm text-zinc-600 dark:text-zinc-300">{service}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <Button
            onClick={handleScrollToContact}
            className={cn(
              "rounded-xl border border-white bg-white px-8 py-6 font-semibold text-black",
              "hover:bg-zinc-200 hover:text-black",
              "shadow-[0_12px_24px_rgba(18,18,18,0.14)] hover:shadow-[0_16px_30px_rgba(18,18,18,0.18)]",
              "transition-all duration-300"
            )}
            size="lg"
          >
            Request a Consultation
            <ArrowRight className="ml-2 h-4 w-4 text-black" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
