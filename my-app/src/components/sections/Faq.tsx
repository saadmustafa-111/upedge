"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/constants";

const faqItems = [
  {
    id: "1",
    question: "How many cameras do I actually need?",
    answer:
      "It depends on entry points, blind spots, and what you want to capture (faces, plates, or general monitoring). Our Blueprint gives a starting range, and the site survey finalizes exact placement.",
  },
  {
    id: "2",
    question: "Can I view cameras on my phone?",
    answer:
      "Yes. We set up mobile access during installation and guide you through live view, playback, and exporting clips.",
  },
  {
    id: "3",
    question: "Do you install for homes and shops?",
    answer:
      "Yes—homes, retail shops, small offices, and warehouses. We adjust camera type and placement based on lighting and layout.",
  },
  {
    id: "4",
    question: "What's the difference between DVR and NVR?",
    answer:
      "DVR is typically used with analog cameras, while NVR is used with IP cameras (often cleaner, higher quality, and more flexible). We recommend based on your space and budget.",
  },
  {
    id: "5",
    question: "How many days of recording storage will I get?",
    answer:
      "Storage depends on camera count, resolution, and whether you record 24/7 or on motion. We recommend a retention target (e.g., 7–14 or 14–30 days) and size the storage accordingly.",
  },
  {
    id: "6",
    question: "Will cameras work at night?",
    answer:
      "Yes, with the right camera and placement. Night performance depends on distance, ambient light, and angle. We plan coverage to avoid overexposure and dark corners.",
  },
  {
    id: "7",
    question: "Is Wi-Fi CCTV reliable or should I use PoE?",
    answer:
      "Wi-Fi can work for small setups, but PoE (wired) is usually more stable and cleaner for long-term reliability. We'll suggest the best option for your space.",
  },
  {
    id: "8",
    question: "Do you provide maintenance after installation?",
    answer:
      "Yes. We offer troubleshooting, health checks, and upgrade support. Maintenance options are available if you want ongoing coverage.",
  },
  {
    id: "9",
    question: "How long does installation take?",
    answer:
      "Most small setups can be completed in a day. Larger sites may take longer depending on wiring and complexity. We'll share a timeline after the survey.",
  },
  {
    id: "10",
    question: "Do you access or monitor my footage?",
    answer:
      "No. The system is for your control. We only configure access for the users you approve.",
  },
];

// Split into two columns for desktop
const leftColumn = faqItems.slice(0, 5);
const rightColumn = faqItems.slice(5, 10);

function FaqAccordion({ items }: { items: typeof faqItems }) {
  const shouldReduceMotion = useReducedMotion();
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <Accordion
      type="single"
      collapsible
      value={openItem}
      onValueChange={setOpenItem}
      className="space-y-4"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className={cn(
            "relative rounded-2xl backdrop-blur-2xl border-2 overflow-hidden transition-all duration-300",
            "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
            "shadow-[0_4px_16px_rgba(0,194,255,0.08)] hover:shadow-[0_8px_24px_rgba(0,194,255,0.12)]",
            openItem === item.id && "border-cyan-500/40 dark:border-cyan-500/30"
          )}
        >
          {/* Top highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

          <div className="relative">
            <AccordionTrigger className="px-5 py-4 hover:no-underline group">
              <div className="flex items-start gap-3 text-left w-full">
                <HelpCircle className="w-5 h-5 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-semibold text-foreground dark:text-white pr-2">
                  {item.question}
                </span>
              </div>
            </AccordionTrigger>

            {/* Underline sweep animation */}
            <AnimatePresence>
              {openItem === item.id && !shouldReduceMotion && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute left-5 right-5 bottom-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 origin-left"
                  style={{ transformOrigin: "left" }}
                />
              )}
            </AnimatePresence>
          </div>

          <AccordionContent
            className={cn(
              "px-5 pb-5 pt-0",
              "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
            )}
          >
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, filter: "blur(4px)" }
              }
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="pl-8 text-sm sm:text-base text-muted-foreground dark:text-slate-300 leading-relaxed"
            >
              {item.answer}
            </motion.div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function Faq() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent dark:via-cyan-400/5 pointer-events-none"></div>

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
            <span className="text-primary dark:text-white">Frequently Asked </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Quick answers before you request a site survey.
          </p>
        </motion.div>

        {/* FAQ Grid - Desktop 2 columns, Mobile 1 column */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          {/* Desktop: Two columns */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
            >
              <FaqAccordion items={leftColumn} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
            >
              <FaqAccordion items={rightColumn} />
            </motion.div>
          </div>

          {/* Mobile: Single column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
            className="lg:hidden"
          >
            <FaqAccordion items={faqItems} />
          </motion.div>
        </div>

        {/* Still Unsure Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className={cn(
              "relative rounded-3xl backdrop-blur-2xl border-2 p-8 sm:p-10 text-center transition-all duration-300",
              "bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-indigo-500/10",
              "border-cyan-500/30 dark:border-cyan-500/20",
              "shadow-[0_8px_32px_rgba(0,194,255,0.15)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.1)]"
            )}
          >
            {/* Top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 dark:via-cyan-400/30 to-transparent pointer-events-none"></div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-3">
                Still unsure?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground dark:text-slate-300 leading-relaxed">
                Send us your space details and we'll suggest the right setup.
              </p>
            </div>

            <Button
              asChild
              className={cn(
                "rounded-xl font-semibold",
                "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                "text-white shadow-[0_4px_24px_rgba(0,194,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,194,255,0.4)]",
                "transition-all duration-300"
              )}
              size="lg"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp for Quick Quote
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
