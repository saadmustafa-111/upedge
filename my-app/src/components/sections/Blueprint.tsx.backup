"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/constants";

const spaceTypes = [
  { id: "home", label: "Home", areas: ["Entry points", "Driveway", "Backyard", "Living areas"] },
  { id: "retail", label: "Retail/Shop", areas: ["Cash counter", "Entry/Exit", "Aisles", "Storage room"] },
  { id: "office", label: "Office", areas: ["Reception", "Corridors", "Parking", "Server room"] },
  { id: "warehouse", label: "Warehouse", areas: ["Gates", "Loading bays", "Storage zones", "Perimeter"] },
];

const sizes = [
  { id: "small", label: "Small", cameras: "2-4", storage: "7-14 days" },
  { id: "medium", label: "Medium", cameras: "4-8", storage: "14-30 days" },
  { id: "large", label: "Large", cameras: "8-16", storage: "30-60 days" },
];

const priorities = [
  { id: "night", label: "Night Clarity", type: "Starlight + IR" },
  { id: "face", label: "Face Capture", type: "High Resolution" },
  { id: "entry", label: "Entry Coverage", type: "Wide Angle" },
  { id: "budget", label: "Budget", type: "Cost-Effective" },
];

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
  const [selectedSpace, setSelectedSpace] = useState("home");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedPriority, setSelectedPriority] = useState("night");
  const [isScanning, setIsScanning] = useState(false);

  const currentSpace = spaceTypes.find((s) => s.id === selectedSpace)!;
  const currentSize = sizes.find((s) => s.id === selectedSize)!;
  const currentPriority = priorities.find((p) => p.id === selectedPriority)!;

  const cameraCount = parseInt(currentSize.cameras.split("-")[1]);

  const getCameraType = () => {
    if (selectedSpace === "warehouse") return "PoE (Wired)";
    if (selectedSize === "large") return "PoE + Outdoor";
    if (selectedPriority === "budget") return "Wi-Fi + Indoor";
    return "Indoor + Outdoor";
  };

  const handleSelectionChange = () => {
    if (!shouldReduceMotion) {
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), 500);
    }
  };

  const generateWhatsAppMessage = () => {
    const message = `Hi! I used your Blueprint tool. Here's my recommended setup:

📍 Space Type: ${currentSpace.label}
📏 Size: ${currentSize.label}
🎯 Priority: ${currentPriority.label}

🎥 Suggested Cameras: ${currentSize.cameras}
📹 Camera Type: ${getCameraType()}
💾 Storage: ${currentSize.storage}
🗺️ Key Areas: ${currentSpace.areas.join(", ")}

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
              Security Blueprint
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Answer a few quick questions and we'll generate a recommended setup you can share on WhatsApp—then we'll finalize it after a site survey.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
            className="space-y-8"
          >
            {/* Step 1: Space Type */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white">
                1. Choose your space
              </h3>
              <div className={cn(
                "relative p-1.5 rounded-2xl backdrop-blur-2xl border-2 transition-all duration-300",
                "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                "shadow-[0_4px_24px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]"
              )}>
                <div className="grid grid-cols-2 gap-1.5">
                  {spaceTypes.map((space) => (
                    <button
                      key={space.id}
                      onClick={() => {
                        setSelectedSpace(space.id);
                        handleSelectionChange();
                      }}
                      className={cn(
                        "relative px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300",
                        selectedSpace === space.id
                          ? "bg-white/90 dark:bg-slate-800/80 text-primary dark:text-cyan-400 shadow-[0_2px_8px_rgba(0,194,255,0.2)] backdrop-blur-xl"
                          : "text-muted-foreground hover:bg-white/50 dark:hover:bg-slate-800/40 hover:text-foreground"
                      )}
                    >
                      {space.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Size */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white">
                2. Pick the size
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => {
                      setSelectedSize(size.id);
                      handleSelectionChange();
                    }}
                    className={cn(
                      "relative overflow-hidden rounded-2xl backdrop-blur-2xl border-2 transition-all duration-300 p-4",
                      selectedSize === size.id
                        ? "bg-white/70 dark:bg-slate-900/60 border-cyan-500/50 dark:border-cyan-500/30 shadow-[0_4px_24px_rgba(0,194,255,0.2)]"
                        : "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15 hover:border-cyan-500/30 shadow-[0_4px_16px_rgba(0,194,255,0.08)]"
                    )}
                  >
                    <div className="text-center">
                      <div className={cn(
                        "text-sm font-bold mb-1",
                        selectedSize === size.id
                          ? "text-primary dark:text-cyan-400"
                          : "text-foreground dark:text-white"
                      )}>
                        {size.label}
                      </div>
                      <div className="text-xs text-muted-foreground dark:text-slate-400">
                        {size.cameras} cams
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Priority */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white">
                3. What matters most?
              </h3>
              <div className="flex flex-wrap gap-2">
                {priorities.map((priority) => (
                  <button
                    key={priority.id}
                    onClick={() => {
                      setSelectedPriority(priority.id);
                      handleSelectionChange();
                    }}
                    className={cn(
                      "px-4 py-2.5 rounded-full text-sm font-semibold backdrop-blur-xl border-2 transition-all duration-300",
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
              "sticky top-24 relative overflow-hidden rounded-3xl backdrop-blur-2xl border-2 transition-all duration-300",
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

              <div className="relative p-6 sm:p-8">
                {/* Header */}
                <div className="mb-6">
                  <Badge className="mb-3 bg-cyan-500/15 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 dark:border-cyan-500/30">
                    Instant Recommendation
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white">
                    Recommended Setup
                  </h3>
                </div>

                <Separator className="mb-6 bg-gradient-to-r from-transparent via-border dark:via-slate-600 to-transparent" />

                {/* Results */}
                <div className="space-y-5">
                  {/* Cameras */}
                  <div>
                    <div className="text-sm text-muted-foreground dark:text-slate-400 mb-1">
                      Suggested cameras
                    </div>
                    <div className="text-3xl font-bold text-primary dark:text-cyan-400">
                      <CountUp end={cameraCount} /> cameras
                    </div>
                  </div>

                  {/* Camera Type */}
                  <div>
                    <div className="text-sm text-muted-foreground dark:text-slate-400 mb-1">
                      Best camera type
                    </div>
                    <div className="text-lg font-semibold text-foreground dark:text-white">
                      {getCameraType()}
                    </div>
                  </div>

                  {/* Storage */}
                  <div>
                    <div className="text-sm text-muted-foreground dark:text-slate-400 mb-1">
                      Storage guidance
                    </div>
                    <div className="text-lg font-semibold text-foreground dark:text-white">
                      {currentSize.storage}
                    </div>
                  </div>

                  {/* Key Areas */}
                  <div>
                    <div className="text-sm text-muted-foreground dark:text-slate-400 mb-2">
                      Key areas to cover
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentSpace.areas.map((area) => (
                        <Badge
                          key={area}
                          variant="outline"
                          className="bg-white/50 dark:bg-slate-800/50 border-white/40 dark:border-white/20 text-foreground dark:text-slate-200 backdrop-blur-sm"
                        >
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator className="my-6 bg-gradient-to-r from-transparent via-border dark:via-slate-600 to-transparent" />

                {/* CTAs */}
                <div className="space-y-3">
                  <Button
                    onClick={generateWhatsAppMessage}
                    className={cn(
                      "w-full rounded-xl font-semibold",
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
                      "w-full rounded-xl font-semibold backdrop-blur-xl",
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
                <p className="text-center text-xs text-muted-foreground dark:text-slate-400 mt-4">
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
