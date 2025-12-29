"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package, Pill, Globe, Headphones, Monitor, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DeckSlider } from "@/components/shared/DeckSlider";
import { WHATSAPP_URL } from "@/lib/constants";

const digitalServices = [
  {
    id: "pos",
    icon: ShoppingCart,
    title: "POS & Billing (Retail)",
    oneLiner: "Fast checkout, invoices, and daily sales reporting.",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Barcode + receipt support",
      "Cashier & admin roles",
    ],
  },
  {
    id: "inventory",
    icon: Package,
    title: "Inventory & Stock Management",
    oneLiner: "Track stock in/out and avoid missing items.",
    gradient: "from-violet-500 to-purple-500",
    features: [
      "Low-stock alerts",
      "Purchase & stock logs",
    ],
  },
  {
    id: "pharmacy",
    icon: Pill,
    title: "Medical Store / Pharmacy System",
    oneLiner: "Batch/expiry-ready tracking for medical inventory.",
    gradient: "from-emerald-500 to-teal-500",
    features: [
      "Expiry reminders",
      "Supplier & purchase records",
    ],
  },
  {
    id: "ecommerce",
    icon: Monitor,
    title: "eCommerce / WhatsApp Ordering",
    oneLiner: "Accept orders online and manage deliveries easily.",
    gradient: "from-amber-500 to-orange-500",
    features: [
      "Catalog + order tracking",
      "COD-friendly workflows",
    ],
  },
  {
    id: "website",
    icon: Globe,
    title: "Business Website (Local SEO)",
    oneLiner: "A modern website that brings local customers.",
    gradient: "from-pink-500 to-rose-500",
    features: [
      "Google-friendly pages",
      "WhatsApp/call CTA built-in",
    ],
  },
  {
    id: "support",
    icon: Headphones,
    title: "Maintenance & Support",
    oneLiner: "Updates, backups, and ongoing support when needed.",
    gradient: "from-indigo-500 to-blue-500",
    features: [
      "Bug fixes & improvements",
      "After-sales support",
    ],
  },
];

const perfectFor = [
  "Retail Shops",
  "Medical Stores",
  "Grocery/Mini Mart",
  "Electronics",
  "Small Clinics",
];

const whatWeBuild = [
  "POS",
  "Inventory",
  "Pharmacy",
  "Websites",
  "eCommerce",
  "Admin Panels",
  "Integrations",
];

export function DigitalSolutions() {
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi UpEdge Technologies, I need a digital solution for my business.
Business type: (Shop/Medical Store/Grocery/Other)
I need: (POS/Inventory/Pharmacy/eCommerce/Website)
Location/City: __
Please guide me with the best setup.`
    );
    window.open(`${WHATSAPP_URL}?text=${message}`, "_blank");
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="digital"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden scroll-mt-20"
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
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            <span className="text-primary dark:text-white">Digital Solutions </span>
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 dark:from-purple-400 dark:via-violet-400 dark:to-blue-400 bg-clip-text text-transparent">
              for Retail Businesses
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-slate-300 leading-relaxed mb-4">
            Websites, POS, and inventory-ready systems for shops and medical stores—built to run daily operations smoothly.
          </p>
          
          {/* Perfect For badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 font-medium">Perfect for:</span>
            {perfectFor.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="text-xs bg-white/50 dark:bg-slate-800/50 border-purple-500/30 text-foreground dark:text-slate-300"
              >
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Digital Services Cards */}
        <DeckSlider
          slides={digitalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                className="h-full"
              >
                <div
                  className={cn(
                    "relative h-full p-5 sm:p-6 rounded-3xl overflow-hidden",
                    "bg-white/90 dark:bg-slate-900/90",
                    "shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]",
                    "hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]",
                    "transition-all duration-300 group"
                  )}
                >
                  {/* Icon */}
                  <div className={cn(
                    "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300",
                    `bg-gradient-to-br ${service.gradient} text-white`,
                    "group-hover:scale-110"
                  )}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-2">
                    {service.title}
                  </h3>

                  {/* One-liner */}
                  <p className="text-sm text-muted-foreground dark:text-slate-400 mb-3 sm:mb-4">
                    {service.oneLiner}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-foreground/80 dark:text-slate-200"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
          desktopGridClassName="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
        />

        {/* What We Build Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
          className="text-center mb-6 sm:mb-8"
        >
          <p className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-3">What we build</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {whatWeBuild.map((item) => (
              <Badge
                key={item}
                className="text-xs sm:text-sm bg-purple-500/10 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30 dark:border-purple-500/30"
              >
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
        >
          <Button
            onClick={handleWhatsAppClick}
            className={cn(
              "w-full sm:w-auto rounded-xl font-semibold text-sm sm:text-base",
              "bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600",
              "text-white shadow-[0_4px_24px_rgba(168,85,247,0.3)] hover:shadow-[0_8px_32px_rgba(168,85,247,0.4)]",
              "transition-all duration-300"
            )}
            size="lg"
          >
            Discuss Your Requirement
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            onClick={handleScrollToContact}
            variant="outline"
            className={cn(
              "w-full sm:w-auto rounded-xl font-semibold text-sm sm:text-base",
              "bg-white/50 dark:bg-slate-800/50 border-2 border-white/40 dark:border-white/20",
              "hover:bg-white/70 dark:hover:bg-slate-800/70 hover:border-purple-500/40",
              "transition-all duration-300"
            )}
            size="lg"
          >
            Request Site Survey
          </Button>
        </motion.div>

        {/* Small Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.5 }}
          className="text-center text-xs sm:text-sm text-muted-foreground dark:text-slate-400 italic"
        >
          Security is our core. Digital solutions are offered for business clients who need both.
        </motion.p>
      </div>
    </section>
  );
}
