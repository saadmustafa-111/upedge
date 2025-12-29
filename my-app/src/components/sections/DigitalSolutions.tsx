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
    title: "Smart POS & Billing System",
    oneLiner: "Transform your checkout with intelligent billing that tracks every sale, generates professional invoices, and provides real-time business insights.",
    gradient: "from-blue-500 to-cyan-500",
    tag: "Most Popular",
    features: [
      "Multi-user access with role-based permissions (cashier, manager, admin)",
      "Barcode scanning, thermal printing, and digital receipt via SMS/Email",
      "Daily/weekly/monthly sales reports with profit/loss analytics",
      "Customer purchase history and loyalty tracking",
    ],
  },
  {
    id: "inventory",
    icon: Package,
    title: "Inventory & Stock Control",
    oneLiner: "Never run out of stock or overstock again. Automated inventory tracking with intelligent alerts and supplier management.",
    gradient: "from-violet-500 to-purple-500",
    tag: "Essential",
    features: [
      "Real-time stock monitoring with low-stock and reorder alerts",
      "Purchase order management and supplier database",
      "Multi-location inventory support for chain stores",
      "Barcode-based stock in/out with complete audit trails",
    ],
  },
  {
    id: "pharmacy",
    icon: Pill,
    title: "Pharmacy Management Suite",
    oneLiner: "Complete pharmacy solution with batch tracking, expiry management, and regulatory compliance for medical stores.",
    gradient: "from-emerald-500 to-teal-500",
    tag: "Specialized",
    features: [
      "Batch-wise tracking with expiry date alerts (15/30/60 days)",
      "Drug database with salt composition and alternatives",
      "Prescription management and patient records (HIPAA-ready)",
      "Supplier-wise purchase history and price comparison",
    ],
  },
  {
    id: "ecommerce",
    icon: Monitor,
    title: "eCommerce & Online Ordering",
    oneLiner: "Sell online through your own platform. Accept orders, manage deliveries, and grow your business beyond your physical store.",
    gradient: "from-amber-500 to-orange-500",
    tag: "Growth Ready",
    features: [
      "Mobile-optimized catalog with product images and descriptions",
      "WhatsApp/SMS order notifications and customer communication",
      "COD, online payment, and delivery tracking integration",
      "Customer accounts, order history, and reviews management",
    ],
  },
  {
    id: "website",
    icon: Globe,
    title: "Business Website (SEO-Ready)",
    oneLiner: "Get found on Google by local customers. Professional website with local SEO optimization to drive foot traffic to your store.",
    gradient: "from-pink-500 to-rose-500",
    tag: "Local Reach",
    features: [
      "Google Business Profile integration and local SEO optimization",
      "Mobile-first responsive design with fast loading",
      "Direct WhatsApp/call buttons, Google Maps integration",
      "Product/service showcase with gallery and testimonials",
    ],
  },
  {
    id: "support",
    icon: Headphones,
    title: "Ongoing Support & Training",
    oneLiner: "We don't just build and leave. Get continuous support, staff training, updates, and technical assistance whenever needed.",
    gradient: "from-indigo-500 to-blue-500",
    tag: "Peace of Mind",
    features: [
      "Free staff training (on-site or remote) for smooth adoption",
      "Regular software updates and security patches",
      "Priority technical support via phone/WhatsApp/remote access",
      "Data backup, recovery assistance, and system health monitoring",
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
  "Point of Sale (POS)",
  "Inventory Systems",
  "Pharmacy Software",
  "Business Websites",
  "eCommerce Platforms",
  "Admin Dashboards",
  "Mobile Apps",
  "API Integrations",
];

export function DigitalSolutions() {
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi UpEdge Technologies,

I'm interested in your Digital Solutions for my retail business.

Business Details:
• Type: (Retail Shop / Medical Store / Grocery / Restaurant / Other)
• Current System: (Manual / Excel / Basic POS / None)
• Main Challenges: (Inventory tracking / Billing / Staff management / Online presence)

I need assistance with:
☐ Smart POS & Billing
☐ Inventory Management
☐ Pharmacy System
☐ eCommerce/Online Ordering
☐ Business Website
☐ Complete Package

Location: ___________
Best time to discuss: ___________

Please guide me with the best solution for my business.`
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
            Empower your retail business with professional software solutions. From smart POS systems to online ordering—we build custom tools that streamline operations, reduce manual work, and help you serve customers better.
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
                  {/* Tag Badge */}
                  {service.tag && (
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={cn(
                          "text-[10px] sm:text-xs font-semibold px-2 py-0.5",
                          `bg-gradient-to-r ${service.gradient} text-white border-0`
                        )}
                      >
                        {service.tag}
                      </Badge>
                    </div>
                  )}

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
                  <p className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                    {service.oneLiner}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80 dark:text-slate-200"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0">✓</span>
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
          <p className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-3 font-medium">Our Technology Stack</p>
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

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.35 }}
          className="max-w-4xl mx-auto mb-6 sm:mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-purple-500/5 to-violet-500/5 dark:from-purple-500/10 dark:to-violet-500/10">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400">Custom Built</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground/80 dark:text-slate-500 mt-1">Tailored to your business</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400">Support Available</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground/80 dark:text-slate-500 mt-1">We're here when you need us</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">Free</div>
              <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400">Training Included</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground/80 dark:text-slate-500 mt-1">Your team gets full training</div>
            </div>
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
          className="text-center text-xs sm:text-sm text-muted-foreground dark:text-slate-400"
        >
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">Security & Surveillance</span> is our primary expertise. Digital solutions are offered as complementary services for our business clients seeking comprehensive technology integration.
        </motion.p>
      </div>
    </section>
  );
}
