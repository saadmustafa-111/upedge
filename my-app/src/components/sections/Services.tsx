"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Camera,
  Network,
  Fingerprint,
  Wrench,
  Lightbulb,
  Sun,
  Check,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const serviceCategories = [
  {
    id: "surveillance",
    title: "Surveillance & CCTV Solutions",
    icon: Camera,
    color: "from-cyan-500 to-blue-500",
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
    icon: Network,
    color: "from-blue-500 to-indigo-500",
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
    color: "from-indigo-500 to-purple-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-pink-500 to-cyan-500",
    services: [
      "Security Risk Assessment",
      "IT & Network Consultancy",
      "Project Planning & Design",
      "Cost-effective Solution Design",
    ],
  },
  {
    id: "solar",
    title: "Solar Energy Solutions",
    icon: Sun,
    color: "from-amber-500 to-orange-500",
    image: "/Solar/installation.jpg",
    services: [
      "Sale & Supply (Panels, Inverters, Batteries)",
      "Installation (Grid / Off-grid / Hybrid)",
      "Design & Feasibility Studies",
      "System Sizing & ROI Analysis",
      "Maintenance & Support",
      "Integration with Security Systems",
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
    <section
      id="services"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background gradient */}
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
            <span className="text-primary dark:text-white">Our </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Comprehensive solutions from design to installation and ongoing support
          </p>
        </motion.div>

        {/* Service Categories - Desktop Tabs, Mobile Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Desktop Navigation */}
          <div className="hidden lg:block mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id === activeCategory ? null : category.id)}
                    className={cn(
                      "px-5 py-3 rounded-xl font-semibold backdrop-blur-xl border-2 transition-all duration-300 flex items-center gap-2",
                      activeCategory === category.id
                        ? "bg-cyan-500/20 dark:bg-cyan-500/20 border-cyan-500/50 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-300 shadow-[0_4px_16px_rgba(0,194,255,0.2)]"
                        : "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15 text-foreground dark:text-white hover:border-cyan-500/30"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Content */}
          <div className="hidden lg:block">
            {activeCategory && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative overflow-hidden rounded-3xl backdrop-blur-2xl border-2 transition-all duration-300",
                  "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                  "shadow-[0_8px_32px_rgba(0,194,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)]",
                  "p-8"
                )}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>
                
                {serviceCategories
                  .filter(cat => cat.id === activeCategory)
                  .map((category) => {
                    const Icon = category.icon;
                    const hasImage = category.image;
                    return (
                      <div key={category.id} className={cn(hasImage && "grid lg:grid-cols-2 gap-8 items-start")}>
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <div className={cn(
                              "w-12 h-12 rounded-xl flex items-center justify-center",
                              `bg-gradient-to-br ${category.color} text-white`
                            )}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground dark:text-white">
                              {category.title}
                            </h3>
                          </div>
                          
                          <div className={cn("grid gap-4", hasImage ? "grid-cols-1" : "sm:grid-cols-2")}>
                            {category.services.map((service, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm">
                                <Check className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-foreground dark:text-slate-200">
                                  {service}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Solar Image Panel (Desktop only) */}
                        {hasImage && (
                          <div className="relative h-full min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden border-2 border-white/40 dark:border-white/20 shadow-xl">
                            <Image
                              src={category.image}
                              alt={category.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              priority
                            />
                            {/* Gradient overlay for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            
                            {/* Optional badge */}
                            <div className="absolute bottom-6 left-6 right-6">
                              <Badge className={cn(
                                "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl text-base",
                                "text-foreground dark:text-white border-white/40 dark:border-white/20"
                              )}>
                                Professional Solar Installations
                              </Badge>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </motion.div>
            )}
            
            {!activeCategory && (
              <div className="text-center py-12 text-muted-foreground dark:text-slate-400">
                Select a service category to view details
              </div>
            )}
          </div>

          {/* Mobile Accordion */}
          <Accordion type="single" collapsible className="lg:hidden space-y-4">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <AccordionItem
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "relative overflow-hidden rounded-2xl backdrop-blur-2xl border-2 transition-all duration-300",
                    "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                    "shadow-[0_4px_16px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_16px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]",
                    "hover:shadow-[0_6px_24px_rgba(0,194,255,0.15)] dark:hover:shadow-[0_6px_24px_rgba(0,194,255,0.1)]"
                  )}
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center",
                        `bg-gradient-to-br ${category.color} text-white`
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-base font-bold text-foreground dark:text-white text-left">
                        {category.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    {/* Solar Image (Mobile) */}
                    {category.image && (
                      <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden mb-4 border-2 border-white/40 dark:border-white/20 shadow-lg">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <Badge className={cn(
                            "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl text-sm",
                            "text-foreground dark:text-white border-white/40 dark:border-white/20"
                          )}>
                            Professional Solar Installations
                          </Badge>
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-3 pt-2">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm">
                          <Check className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground dark:text-slate-200">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

        {/* CTA */}
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
              "rounded-xl font-semibold px-8 py-6",
              "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
              "text-white shadow-[0_4px_24px_rgba(0,194,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,194,255,0.4)]",
              "transition-all duration-300"
            )}
            size="lg"
          >
            Request a Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
