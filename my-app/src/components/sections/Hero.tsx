"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  "Security, Surveillance, Networking & Solar solutions",
  "Manufacturer-standard installations · Reliable support",
];

// Reusable RevealText component with wipe effect
const RevealText = ({ 
  children, 
  delay = 0,
  className = "" 
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

// Reusable StaggerList component with spring settle and micro-rotation
const StaggerList = ({ 
  items, 
  delay = 0 
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
          initial={shouldReduceMotion ? { opacity: 0, y: 0 } : { 
            opacity: 0, 
            x: -20, 
            rotate: -2 
          }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { 
            opacity: 1, 
            x: 0, 
            rotate: 0 
          }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.6,
            delay: delay + index * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="flex items-start gap-3 group px-4 py-3 rounded-2xl bg-white/50 dark:bg-slate-800/40 backdrop-blur-xl border-2 border-white/40 dark:border-white/15 hover:bg-white/70 dark:hover:bg-slate-700/50 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-300 shadow-[0_4px_16px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_16px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]"
        >
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/30 dark:bg-cyan-500/25 border-2 border-cyan-500/50 dark:border-cyan-500/40 shrink-0 mt-0.5 group-hover:bg-cyan-500/40 dark:group-hover:bg-cyan-500/35 transition-colors backdrop-blur-sm shadow-[0_2px_8px_rgba(0,194,255,0.2)]">
            <Check className="w-3 h-3 text-cyan-600 dark:text-cyan-400" strokeWidth={3} />
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
      className="relative min-h-screen overflow-hidden scroll-mt-20"
    >
      {/* Premium Arc Background */}
      <HeroBackground />

      {/* Subtle Scanline Effect */}
      <div className="scanline" />

      {/* Header inside Hero - no wrapper needed for fixed positioning */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-28 md:pt-32 lg:pt-36 sm:pb-20 md:pb-32">
        {/* Glassmorphism Container */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-white/30 dark:border-white/15 bg-white/60 dark:bg-slate-900/50 backdrop-blur-3xl shadow-[0_8px_40px_0_rgba(0,194,255,0.2),0_0_80px_0_rgba(0,194,255,0.08)] dark:shadow-[0_8px_40px_0_rgba(0,194,255,0.15),0_0_80px_0_rgba(0,194,255,0.05)] p-6 sm:p-8 md:p-12 lg:p-16">
          
          {/* Mirror reflection effect - top highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-blue-500/8 dark:from-cyan-400/6 dark:to-indigo-500/6 pointer-events-none"></div>
          
          {/* Inner glow effect - stronger */}
          <div className="absolute inset-0 rounded-3xl sm:rounded-[2.5rem] shadow-[inset_0_0_80px_rgba(0,194,255,0.12),inset_0_2px_4px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_0_80px_rgba(0,194,255,0.08),inset_0_2px_4px_rgba(255,255,255,0.1)] pointer-events-none"></div>
          
          {/* Glass shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 dark:via-white/5 to-transparent pointer-events-none"></div>

          <div className="relative grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Mobile Camera - Show first on mobile, hidden on desktop */}
          <div className="relative flex justify-center items-start lg:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 1.2,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative w-full max-w-lg"
            >
              {/* Accent rings behind camera */}
              <div className="absolute inset-0 -z-10 scale-125">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full opacity-20 dark:opacity-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="rgba(0, 194, 255, 0.15)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="rgba(0, 194, 255, 0.2)"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* Camera Image Container */}
              <div className="relative w-full mx-auto mt-8">
                {/* Glow effect */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-cyan-500/20 dark:bg-cyan-400/10 rounded-full blur-3xl" />
                </div>

                {/* Camera Image */}
                <motion.div
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 1.4,
                    delay: 0.6,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="relative w-full h-[350px] sm:h-[420px]"
                >
                  <Image
                    src="/logod-removebg-preview.png"
                    alt="UpEdge Technologies - Professional Security & Tech Solutions"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Floating Badge - Mobile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.8,
                    delay: 0.9,
                    ease: "backOut",
                  }}
                  className="absolute bottom-6 sm:bottom-8 -right-2 sm:-right-4 bg-white/85 dark:bg-slate-800/85 backdrop-blur-2xl border-2 border-cyan-500/50 dark:border-cyan-500/40 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_8px_32px_rgba(0,194,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.2),inset_0_1px_2px_rgba(255,255,255,0.15)]"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-foreground dark:text-white whitespace-nowrap">
                      24/7 Monitoring
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Left Column - Content */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8 relative z-10">
            
            {/* Trust Badge with slide-in animation */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { 
                opacity: 0, 
                x: -30, 
                filter: "blur(8px)" 
              }}
              animate={shouldReduceMotion ? { opacity: 1 } : { 
                opacity: 1, 
                x: 0, 
                filter: "blur(0px)" 
              }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Badge 
                variant="outline" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-cyan-500/40 dark:border-cyan-500/40 bg-white/50 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 font-medium backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,194,255,0.25),inset_0_1px_2px_rgba(255,255,255,0.5)] dark:shadow-[0_4px_20px_rgba(0,194,255,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:bg-white/70 dark:hover:bg-cyan-500/20 transition-all border-2"
              >
                Security · Surveillance · Networking · Solar
              </Badge>
            </motion.div>

            {/* Headline with wipe reveal */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <RevealText delay={0.4}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1]">
                  <span className="text-primary dark:text-white">
                    <span className="font-light">Complete</span>{" "}
                    <span className="font-bold">Solutions</span>{" "}
                    <span className="font-light">for</span>
                  </span>
                </h1>
              </RevealText>
              
              <RevealText delay={0.6}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1]">
                  <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    <span className="font-bold">Security</span>{" "}
                    <span className="font-light">&</span>{" "}
                    <span className="font-bold">Energy</span>
                  </span>
                </h1>
              </RevealText>
            </div>

            {/* Paragraph with fade-in */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.8,
                delay: 0.9,
                ease: "easeOut",
              }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              UpEdge Technologies delivers expert CCTV, surveillance, networking, and solar energy solutions. 
              Backed by over 10 years of experience and 500+ successful projects—we focus on reliable installation, 
              cost-effective planning, and dependable support.
            </motion.p>

            {/* Trust Bullets with stagger animation */}
            <StaggerList items={trustPoints} delay={1.1} />

            {/* CTA Buttons with fade-in */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.6,
                delay: 1.5,
                ease: "easeOut",
              }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                onClick={handleScrollToContact}
                size="lg"
                className={cn(
                  "w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                  "text-white font-semibold shadow-[0_0_30px_rgba(0,194,255,0.3)] hover:shadow-[0_0_40px_rgba(0,194,255,0.4)]",
                  "text-sm md:text-base px-6 md:px-8 h-11 md:h-12 rounded-full group transition-all duration-300"
                )}
              >
                Request Site Survey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className={cn(
                  "w-full sm:w-auto border-2 border-border dark:border-slate-600 bg-background/50 dark:bg-slate-800/30 backdrop-blur-sm hover:bg-muted dark:hover:bg-slate-700/50",
                  "text-foreground dark:text-white font-semibold text-sm md:text-base px-6 md:px-8 h-11 md:h-12 rounded-full",
                  "hover:border-primary dark:hover:border-slate-500 transition-all duration-300"
                )}
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp for Quick Quote
                </a>
              </Button>
            </motion.div>

            {/* Micro trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.6,
                delay: 1.7,
              }}
              className="flex items-center gap-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground dark:text-slate-400 pt-1"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border dark:via-slate-600 to-transparent hidden sm:block" />
              <span className="px-1 sm:px-2 font-medium text-center leading-tight">
                Fast turnaround • Transparent recommendations • No unnecessary upsell
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border dark:via-slate-600 to-transparent hidden sm:block" />
            </motion.div>
          </div>

          {/* Right Column - Camera Visual (Desktop Only) */}
          <div className="relative hidden lg:flex justify-center items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 1.2,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative w-full max-w-2xl"
            >
              {/* Accent rings behind camera */}
              <div className="absolute inset-0 -z-10 scale-125">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full opacity-20 dark:opacity-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="rgba(0, 194, 255, 0.15)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="rgba(0, 194, 255, 0.2)"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* Camera Image Container */}
              <div className="relative w-full mx-auto mt-12">
                {/* Glow effect */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-cyan-500/20 dark:bg-cyan-400/10 rounded-full blur-3xl" />
                </div>

                {/* Camera Image */}
                <motion.div
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 1.4,
                    delay: 1,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="relative w-full h-[480px]"
                >
                  <Image
                    src="/logod-removebg-preview.png"
                    alt="UpEdge Technologies - Professional Security & Tech Solutions"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Floating Badge - Desktop */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.8,
                    delay: 1.3,
                    ease: "backOut",
                  }}
                  className="absolute bottom-8 -right-4 bg-white/85 dark:bg-slate-800/85 backdrop-blur-2xl border-2 border-cyan-500/50 dark:border-cyan-500/40 rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,194,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.2),inset_0_1px_2px_rgba(255,255,255,0.15)]"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </div>
                    <span className="text-sm font-semibold text-foreground dark:text-white whitespace-nowrap">
                      24/7 Monitoring
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
