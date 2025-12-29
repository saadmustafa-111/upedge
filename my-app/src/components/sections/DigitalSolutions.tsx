"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, LayoutDashboard, Receipt, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DeckSlider } from "@/components/shared/DeckSlider";
import { WHATSAPP_URL } from "@/lib/constants";

const digitalServices = [
  {
    id: "websites",
    icon: Globe,
    title: "Business Websites",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Modern, mobile-first websites",
      "SEO-ready + WhatsApp/contact integration",
    ],
  },
  {
    id: "pos",
    icon: Receipt,
    title: "POS & Billing",
    gradient: "from-violet-500 to-purple-500",
    features: [
      "Sales, invoices, stock & reports",
      "Multi-user access (optional)",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "eCommerce Stores",
    gradient: "from-amber-500 to-orange-500",
    features: [
      "Catalog, orders, payments",
      "Delivery/COD workflows",
    ],
  },
  {
    id: "dashboards",
    icon: LayoutDashboard,
    title: "Custom Business Dashboards",
    gradient: "from-emerald-500 to-teal-500",
    features: [
      "Admin panels & automation",
      "Integrations when needed",
    ],
  },
];

export function DigitalSolutions() {
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi UpEdge Technologies, I need a digital solution (Website/POS/eCommerce). My business type is __. Please guide me."
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
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            <span className="text-primary dark:text-white">Digital Solutions </span>
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 dark:from-purple-400 dark:via-violet-400 dark:to-blue-400 bg-clip-text text-transparent">
              for Businesses
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-slate-300 leading-relaxed">
            For shops and offices that want a modern website, POS, or eCommerce—built clean and supported.
          </p>
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
                    "relative h-full p-6 sm:p-8 rounded-3xl overflow-hidden",
                    "bg-white/90 dark:bg-slate-900/90",
                    "shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]",
                    "hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]",
                    "transition-all duration-300 group"
                  )}
                >
                  {/* Icon */}
                  <div className={cn(
                    "w-14 h-14 rounded-2xl mb-4 flex items-center justify-center transition-all duration-300",
                    `bg-gradient-to-br ${service.gradient} text-white`,
                    "group-hover:scale-110"
                  )}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm sm:text-base text-foreground/80 dark:text-slate-200"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
          desktopGridClassName="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10"
        />

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
