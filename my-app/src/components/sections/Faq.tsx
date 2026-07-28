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
            "relative overflow-hidden rounded-[1.5rem] border transition-all duration-300",
            "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800",
            "shadow-[0_4px_16px_rgba(18,18,18,0.05)] hover:shadow-[0_8px_24px_rgba(18,18,18,0.08)]",
            openItem === item.id && "border-zinc-300 dark:border-zinc-700"
          )}
        >
          <div className="relative">
            <AccordionTrigger className="px-5 py-4 hover:no-underline group">
              <div className="flex items-start gap-3 text-left w-full">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-zinc-950 dark:text-white" />
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
                  className="absolute left-5 right-5 bottom-0 h-0.5 bg-zinc-900 origin-left dark:bg-white"
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
              className="pl-8 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
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
      className="relative overflow-hidden bg-zinc-50 py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-20 dark:bg-zinc-950"
    >
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
            <span className="text-zinc-950 dark:text-white">Frequently Asked Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
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
              "rounded-[1.75rem] border border-zinc-200 bg-white p-8 text-center transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900 sm:p-10",
              "shadow-[0_18px_40px_rgba(18,18,18,0.06)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
            )}
          >
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-3">
                Still unsure?
              </h3>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Send us your space details and we'll suggest the right setup.
              </p>
            </div>

            <Button
              asChild
              className={cn(
                "rounded-xl font-semibold",
                "bg-primary text-primary-foreground",
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
