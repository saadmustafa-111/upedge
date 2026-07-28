"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { HeroBackground } from "@/components/visuals/HeroBackground";
import { WHATSAPP_URL } from "@/lib/constants";

const trustPoints = [
  "Over 10 years experience · 500+ projects completed",
  "Security, Surveillance, Networking & Access Control solutions",
  "Manufacturer-standard installations · Reliable support",
];

const RevealText = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { clipPath: "inset(0 100% 0 0)" }}
      animate={shouldReduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0% 0 0)" }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 1.2,
        delay,
        ease: [0.65, 0, 0.35, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggerList = ({
  items,
  delay = 0,
}: {
  items: string[];
  delay?: number;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={
            shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, x: -20, rotate: -2 }
          }
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.6,
            delay: delay + index * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="flex items-start gap-3 rounded-2xl border border-border bg-white/82 px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-[2px] transition-all duration-300 dark:bg-zinc-950/85 dark:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
        >
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent border border-border">
            <Check className="w-3 h-3 text-primary" strokeWidth={3} />
          </div>
          <span className="text-sm md:text-base font-medium text-foreground dark:text-slate-200 leading-relaxed">
            {item}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

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
      id="home"
      className="relative min-h-[calc(100svh-5rem)] overflow-visible scroll-mt-20"
    >
      <HeroBackground />
      <div className="scanline" />
      <Header />

      <div className="relative z-10 container mx-auto flex min-h-[calc(100svh-5rem)] px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-32 md:pt-36 lg:items-center lg:py-28">
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="relative z-10 space-y-6 text-center sm:space-y-8">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30, filter: "blur(8px)" }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Badge
                  variant="outline"
                  className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-white/88 px-4 py-2 text-center text-[0.95rem] font-medium text-zinc-950 shadow-sm backdrop-blur-[2px] dark:bg-zinc-950/88 dark:text-white sm:text-base"
                >
                  Security · Surveillance · Networking · Access Control
                </Badge>
              </motion.div>

              <div className="space-y-2 sm:space-y-3">
                <RevealText delay={0.4}>
                  <h1 className="headline-display tracking-tight">
                    <span className="text-zinc-950 dark:text-white">
                      <span className="font-normal">Complete</span>{" "}
                      <span className="font-bold">Solutions</span>{" "}
                      <span className="font-normal">for</span>
                    </span>
                  </h1>
                </RevealText>

                <RevealText delay={0.6}>
                  <h1 className="headline-display tracking-tight">
                    <span className="text-zinc-950 dark:text-white">
                      <span className="font-bold">Security</span>{" "}
                      <span className="font-normal">&</span>{" "}
                      <span className="font-bold">Networking</span>
                    </span>
                  </h1>
                </RevealText>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.8,
                  delay: 0.9,
                  ease: "easeOut",
                }}
                className="mx-auto max-w-[42rem] text-[1.05rem] leading-[1.7] text-zinc-700 dark:text-zinc-300 sm:text-base md:text-lg"
              >
                UpEdge Technologies delivers expert CCTV, surveillance, networking, and access control solutions.
                Backed by over 10 years of experience and 500+ successful projects—we focus on reliable installation,
                cost-effective planning, and dependable support.
              </motion.p>

              <div className="mx-auto max-w-3xl text-left">
                <StaggerList items={trustPoints} delay={1.1} />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.6,
                  delay: 1.5,
                  ease: "easeOut",
                }}
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
              >
                <Button
                  onClick={handleScrollToContact}
                  size="lg"
                  className={cn(
                    "h-12 w-full rounded-[0.9rem] bg-primary px-6 text-sm text-primary-foreground sm:w-auto md:px-7 md:text-base",
                    "group transition-all duration-300"
                  )}
                >
                  Request Site Survey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className={cn(
                    "h-12 w-full rounded-[0.9rem] border border-border bg-background px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900 sm:w-auto md:px-7 md:text-base"
                  )}
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp for Quick Quote
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.6,
                  delay: 1.7,
                }}
                className="flex items-center gap-2 pt-1 text-[10px] leading-tight text-zinc-600 dark:text-zinc-400 sm:text-xs md:text-sm"
              >
                <div className="hidden h-px flex-1 bg-border sm:block" />
                <span className="px-1 text-center font-medium sm:px-2">
                  Fast turnaround • Transparent recommendations • No unnecessary upsell
                </span>
                <div className="hidden h-px flex-1 bg-border sm:block" />
              </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
