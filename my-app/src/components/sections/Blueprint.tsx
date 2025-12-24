"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Send, Shield, Network, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/constants";

// Solution tracks
const solutionTracks = [
  { id: "security" as const, label: "Security", icon: Shield },
  { id: "networking" as const, label: "Networking", icon: Network },
  { id: "solar" as const, label: "Solar", icon: Sun },
];

type SolutionTrack = "security" | "networking" | "solar";

const spaceTypes = [
  { id: "home", label: "Home" },
  { id: "retail", label: "Retail" },
  { id: "office", label: "Office" },
  { id: "warehouse", label: "Warehouse" },
  { id: "educational", label: "Educational" },
];

const sizes = [
  { id: "small", label: "Small" },
  { id: "medium", label: "Medium" },
  { id: "large", label: "Large" },
];

// Priority options by solution track
const prioritiesBySolution: Record<SolutionTrack, Array<{ id: string; label: string }>> = {
  security: [
    { id: "night", label: "Night Clarity" },
    { id: "face", label: "Face Capture" },
    { id: "entry", label: "Entry Coverage" },
    { id: "budget", label: "Budget" },
  ],
  networking: [
    { id: "stability", label: "Stability" },
    { id: "coverage", label: "Coverage" },
    { id: "speed", label: "Speed" },
    { id: "budget", label: "Budget" },
  ],
  solar: [
    { id: "backup", label: "Backup Hours" },
    { id: "savings", label: "Monthly Savings" },
    { id: "roof", label: "Roof Space" },
    { id: "budget", label: "Budget" },
  ],
};

// Count-up animation component
function CountUp({ end, duration = 500 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(end);
      return;
    }

    setCount(0);
    const increment = end / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, shouldReduceMotion]);

  return <>{count}</>;
}

export function Blueprint() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedTrack, setSelectedTrack] = useState<SolutionTrack>("security");
  const [selectedSpace, setSelectedSpace] = useState("home");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedPriority, setSelectedPriority] = useState("night");
  const [isScanning, setIsScanning] = useState(false);

  const currentPriorities = prioritiesBySolution[selectedTrack];
  const currentSpace = spaceTypes.find((s) => s.id === selectedSpace)!;
  const currentSize = sizes.find((s) => s.id === selectedSize)!;
  const currentPriority = currentPriorities.find((p) => p.id === selectedPriority);

  // Reset priority when changing track
  useEffect(() => {
    setSelectedPriority(currentPriorities[0].id);
  }, [selectedTrack, currentPriorities]);

  const handleSelectionChange = () => {
    if (!shouldReduceMotion) {
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), 500);
    }
  };

  const getRecommendation = () => {
    const track = selectedTrack;
    const size = selectedSize;
    const priority = selectedPriority;

    if (track === "security") {
      const cameraCount = size === "small" ? "2-4" : size === "medium" ? "4-8" : "8-16";
      const storage = size === "small" ? "7-14 days" : size === "medium" ? "14-30 days" : "30-60 days";
      const cameraType = 
        priority === "night" ? "Starlight + IR Cameras" :
        priority === "face" ? "High Resolution (4MP+)" :
        priority === "entry" ? "Wide Angle Coverage" : "Cost-Effective Mix";
      
      return {
        primaryMetric: cameraCount,
        primaryLabel: "Cameras",
        secondary: [
          { label: "Camera Type", value: cameraType },
          { label: "Storage", value: storage },
          { label: "Recording", value: "24/7 + Motion" },
        ],
      };
    }

    if (track === "networking") {
      const ports = size === "small" ? "8-16" : size === "medium" ? "16-24" : "24-48";
      const cableType = size === "large" ? "Cat6 + Fiber" : "Cat5e/Cat6";
      const coverage = 
        priority === "coverage" ? "Full WiFi Coverage" :
        priority === "speed" ? "Gigabit Switches" :
        priority === "stability" ? "Redundant Links" : "Cost-Effective Setup";
      
      return {
        primaryMetric: ports,
        primaryLabel: "Network Ports",
        secondary: [
          { label: "Cable Type", value: cableType },
          { label: "Focus", value: coverage },
          { label: "Access Control", value: "Biometric/RFID" },
        ],
      };
    }

    // Solar
    const capacity = size === "small" ? "3-5 kW" : size === "medium" ? "5-10 kW" : "10-20 kW";
    const backupHours = 
      priority === "backup" ? "8-12 hours" :
      priority === "savings" ? "4-6 hours" :
      priority === "roof" ? "6-8 hours" : "4-6 hours";
    const systemType = size === "large" ? "Hybrid System" : "Grid/Off-grid";
    
    return {
      primaryMetric: capacity,
      primaryLabel: "Solar Capacity",
      secondary: [
        { label: "Backup Hours", value: backupHours },
        { label: "System Type", value: systemType },
        { label: "ROI Period", value: "3-5 years" },
      ],
    };
  };

  const recommendation = getRecommendation();

  const generateWhatsAppMessage = () => {
    const trackLabel = solutionTracks.find(t => t.id === selectedTrack)!.label;
    const priorityLabel = currentPriority?.label || "";

    const message = `Hi! I used your Blueprint tool for ${trackLabel}. Here's my recommended setup:

📍 Solution: ${trackLabel}
🏢 Space Type: ${currentSpace.label}
📏 Size: ${currentSize.label}
🎯 Priority: ${priorityLabel}

${recommendation.secondary.map(item => `${item.label}: ${item.value}`).join('\n')}

I'd like to schedule a site survey to finalize the setup.`;

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank");
  };

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
      id="blueprint"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent dark:via-indigo-400/5 pointer-events-none"></div>

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
            <span className="text-primary dark:text-white">30-Second </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Blueprint
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Answer a few quick questions and get an instant recommendation for Security, Networking, or Solar solutions.
          </p>
        </motion.div>

        {/* Solution Track Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className={cn(
            "relative p-1.5 sm:p-2 rounded-2xl backdrop-blur-2xl border-2 transition-all duration-300",
            "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
            "shadow-[0_4px_24px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]"
          )}>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {solutionTracks.map((track) => {
                const Icon = track.icon;
                return (
                  <button
                    key={track.id}
                    onClick={() => {
                      setSelectedTrack(track.id);
                      handleSelectionChange();
                    }}
                    className={cn(
                      "relative px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 flex flex-col items-center gap-1.5 sm:gap-2",
                      selectedTrack === track.id
                        ? "bg-white/90 dark:bg-slate-800/80 text-primary dark:text-cyan-400 shadow-[0_2px_8px_rgba(0,194,255,0.2)] backdrop-blur-xl"
                        : "text-muted-foreground hover:bg-white/50 dark:hover:bg-slate-800/40 hover:text-foreground"
                    )}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">{track.label}</span>
                    <span className="sm:hidden text-[10px]">{track.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Step 1: Space Type */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground dark:text-white">
                1. Choose your space
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {spaceTypes.map((space) => (
                  <button
                    key={space.id}
                    onClick={() => {
                      setSelectedSpace(space.id);
                      handleSelectionChange();
                    }}
                    className={cn(
                      "relative px-3 py-2.5 sm:px-4 sm:py-3 text-sm font-semibold rounded-xl backdrop-blur-2xl border-2 transition-all duration-300",
                      selectedSpace === space.id
                        ? "bg-white/70 dark:bg-slate-900/60 border-cyan-500/50 dark:border-cyan-500/30 text-primary dark:text-cyan-400 shadow-[0_4px_16px_rgba(0,194,255,0.2)]"
                        : "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15 text-foreground dark:text-white hover:border-cyan-500/30"
                    )}
                  >
                    {space.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Size */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground dark:text-white">
                2. Pick the size
              </h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => {
                      setSelectedSize(size.id);
                      handleSelectionChange();
                    }}
                    className={cn(
                      "relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-2xl border-2 transition-all duration-300 p-3 sm:p-4",
                      selectedSize === size.id
                        ? "bg-white/70 dark:bg-slate-900/60 border-cyan-500/50 dark:border-cyan-500/30 shadow-[0_4px_24px_rgba(0,194,255,0.2)]"
                        : "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15 hover:border-cyan-500/30 shadow-[0_4px_16px_rgba(0,194,255,0.08)]"
                    )}
                  >
                    <div className="text-center">
                      <div className={cn(
                        "text-sm font-bold",
                        selectedSize === size.id
                          ? "text-primary dark:text-cyan-400"
                          : "text-foreground dark:text-white"
                      )}>
                        {size.label}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Priority */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground dark:text-white">
                3. What matters most?
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentPriorities.map((priority) => (
                  <button
                    key={priority.id}
                    onClick={() => {
                      setSelectedPriority(priority.id);
                      handleSelectionChange();
                    }}
                    className={cn(
                      "px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm font-semibold backdrop-blur-xl border-2 transition-all duration-300",
                      selectedPriority === priority.id
                        ? "bg-cyan-500/20 dark:bg-cyan-500/20 border-cyan-500/50 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-300 shadow-[0_4px_16px_rgba(0,194,255,0.2)]"
                        : "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15 text-foreground dark:text-white hover:border-cyan-500/30"
                    )}
                  >
                    {priority.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Result Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          >
            <div className={cn(
              "lg:sticky lg:top-24 relative overflow-hidden rounded-3xl backdrop-blur-2xl border-2 transition-all duration-300",
              "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
              "shadow-[0_8px_32px_rgba(0,194,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)]"
            )}>
              {/* Scan effect */}
              <AnimatePresence>
                {isScanning && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent z-10 pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

              <div className="relative p-5 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="mb-5 sm:mb-6">
                  <Badge className="mb-2 sm:mb-3 text-xs sm:text-sm bg-cyan-500/15 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 dark:border-cyan-500/30">
                    Instant Recommendation
                  </Badge>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground dark:text-white">
                    Recommended Setup
                  </h3>
                </div>

                <Separator className="mb-5 sm:mb-6 bg-gradient-to-r from-transparent via-border dark:via-slate-600 to-transparent" />

                {/* Results */}
                <div className="space-y-4 sm:space-y-5">
                  {/* Primary Metric */}
                  <div>
                    <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-1">
                      {recommendation.primaryLabel}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-cyan-400">
                      {recommendation.primaryMetric}
                    </div>
                  </div>

                  {/* Secondary Details */}
                  {recommendation.secondary.map((item, idx) => (
                    <div key={idx}>
                      <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-1">
                        {item.label}
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-foreground dark:text-white">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-5 sm:my-6 bg-gradient-to-r from-transparent via-border dark:via-slate-600 to-transparent" />

                {/* CTAs */}
                <div className="space-y-2.5 sm:space-y-3">
                  <Button
                    onClick={generateWhatsAppMessage}
                    className={cn(
                      "w-full rounded-xl font-semibold text-sm sm:text-base",
                      "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                      "text-white shadow-[0_4px_24px_rgba(0,194,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,194,255,0.4)]",
                      "transition-all duration-300"
                    )}
                    size="lg"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    Send plan on WhatsApp
                  </Button>
                  <Button
                    onClick={handleScrollToContact}
                    variant="outline"
                    className={cn(
                      "w-full rounded-xl font-semibold backdrop-blur-xl text-sm sm:text-base",
                      "bg-white/50 dark:bg-slate-800/50 border-2 border-white/40 dark:border-white/20",
                      "hover:bg-white/70 dark:hover:bg-slate-800/70 hover:border-cyan-500/40",
                      "transition-all duration-300"
                    )}
                    size="lg"
                  >
                    Request Site Survey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Micro line */}
                <p className="text-center text-[10px] sm:text-xs text-muted-foreground dark:text-slate-400 mt-3 sm:mt-4">
                  No spam. No upsell. Just a clean recommendation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
