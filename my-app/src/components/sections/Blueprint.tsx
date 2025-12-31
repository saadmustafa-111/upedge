"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Zap,
  Camera,
  Wifi,
  Code,
  Sun,
  Shield,
  Network,
  Smartphone,
  MessageCircle,
  Mail,
  Check,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileSlider } from "@/components/shared/MobileSlider";
import { WHATSAPP_NUMBER, EMAIL } from "@/lib/constants";

// Department Types
type Department = "security" | "solar" | "networking" | "digital";

// Package Types
interface Package {
  id: string;
  name: string;
  icon: typeof Zap;
  recommended?: boolean;
  shortDesc: string;
  customerFeeling: string;
  bestFor: string;
  includes: string[];
  technicalDetails?: string;
  gradient: string;
}

// Security Packages
const securityPackages: Package[] = [
  {
    id: "essential-security",
    name: "Essential Security",
    icon: Shield,
    shortDesc: "2–4 cameras",
    customerFeeling: "I need basic coverage for entry points.",
    bestFor: "Small shops, homes, single entry points",
    includes: [
      "2–4 cameras (Analog/Wi-Fi/IP based on budget)",
      "Basic DVR/NVR recorder",
      "Mobile app viewing",
      "Night vision coverage",
      "1 week storage",
    ],
    technicalDetails: "System recommendation based on budget + wiring preference",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "standard-security",
    name: "Standard Security",
    icon: Shield,
    shortDesc: "4 cameras",
    customerFeeling: "I want clear coverage of key areas.",
    bestFor: "Retail stores, small offices, clinics",
    includes: [
      "4 IP cameras (Wi-Fi if wiring difficult)",
      "HD quality recording",
      "Advanced mobile app",
      "Motion detection alerts",
      "2 weeks storage",
      "Professional installation",
    ],
    technicalDetails: "IP cameras recommended, Wi-Fi option available",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "recommended-security",
    name: "Recommended Security",
    icon: Shield,
    recommended: true,
    shortDesc: "6–8 cameras",
    customerFeeling: "I want complete indoor + outdoor monitoring.",
    bestFor: "Medium businesses, warehouses, multi-room spaces",
    includes: [
      "6–8 IP cameras (indoor + outdoor)",
      "Full HD recording",
      "Extended storage (1 month)",
      "Smart motion zones",
      "Weatherproof outdoor cameras",
      "Multiple user access",
      "Free maintenance (3 months)",
    ],
    technicalDetails: "IP cameras best choice for quality + features",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: "advanced-security",
    name: "Advanced Security",
    icon: Shield,
    shortDesc: "8–16+ cameras",
    customerFeeling: "I need enterprise-grade surveillance.",
    bestFor: "Large facilities, multi-location businesses",
    includes: [
      "8–16+ cameras (IP/hybrid analytics)",
      "4K quality options",
      "License plate recognition",
      "Face detection (optional)",
      "Cloud backup option",
      "Centralized monitoring",
      "24/7 support + maintenance",
    ],
    technicalDetails: "Advanced IP with analytics capabilities",
    gradient: "from-purple-500 to-pink-500",
  },
];

// Solar Packages
const solarPackages: Package[] = [
  {
    id: "essential-solar",
    name: "Essential Solar",
    icon: Sun,
    shortDesc: "1–2 kW",
    customerFeeling: "I want backup for basics during load shedding.",
    bestFor: "Small homes, startups needing emergency power",
    includes: [
      "1–2 kW solar system",
      "Lights, fans, router backup",
      "Phone charging",
      "CCTV power backup",
      "3–5 hours backup",
      "Basic battery storage",
    ],
    technicalDetails: "Entry-level backup solution",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "standard-solar",
    name: "Standard Solar",
    icon: Sun,
    shortDesc: "3–5 kW",
    customerFeeling: "I want to reduce my electricity bill significantly.",
    bestFor: "Homes, small offices with moderate usage",
    includes: [
      "3–5 kW solar system",
      "Lights, fans, TV, fridge",
      "Small appliances",
      "6–8 hours backup",
      "Bill reduction 40–60%",
      "Hybrid inverter option",
    ],
    technicalDetails: "Balanced backup + savings solution",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "recommended-solar",
    name: "Recommended Solar",
    icon: Sun,
    recommended: true,
    shortDesc: "6–10 kW",
    customerFeeling: "I want strong usage coverage + net metering.",
    bestFor: "Medium homes, shops with high consumption",
    includes: [
      "6–10 kW solar system",
      "Full home/office coverage",
      "Net metering ready",
      "Bill reduction 70–90%",
      "8+ hours backup",
      "Premium panels + inverter",
      "25-year panel warranty",
    ],
    technicalDetails: "Best value for long-term savings",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: "advanced-solar",
    name: "Advanced Solar",
    icon: Sun,
    shortDesc: "10–20+ kW",
    customerFeeling: "I want commercial-scale power independence.",
    bestFor: "Large businesses, industrial facilities",
    includes: [
      "10–20+ kW system",
      "Commercial scale coverage",
      "Heavy appliances + AC",
      "Net metering + grid tie",
      "Battery bank for 24/7 operation",
      "Monitoring system",
      "ROI in 2–4 years",
    ],
    technicalDetails: "Enterprise-grade solar solution",
    gradient: "from-rose-500 to-orange-500",
  },
];

// Networking Packages
const networkingPackages: Package[] = [
  {
    id: "essential-networking",
    name: "Essential Networking",
    icon: Network,
    shortDesc: "Basic Setup",
    customerFeeling: "I just need Wi-Fi working properly.",
    bestFor: "Small homes, startups, basic coverage",
    includes: [
      "Router setup + configuration",
      "Basic Wi-Fi coverage",
      "Secure password setup",
      "1–2 wired points (optional)",
      "Speed optimization",
    ],
    technicalDetails: "Single router, basic coverage",
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: "standard-networking",
    name: "Standard Networking",
    icon: Network,
    shortDesc: "Router + Switch",
    customerFeeling: "I want reliable Wi-Fi + wired connections.",
    bestFor: "Small offices, retail, multi-room spaces",
    includes: [
      "Router + network switch",
      "Improved Wi-Fi coverage",
      "Multiple wired points",
      "Basic security (firewall)",
      "Guest network setup",
      "Cable management",
    ],
    technicalDetails: "Router + unmanaged switch",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    id: "recommended-networking",
    name: "Recommended Networking",
    icon: Network,
    recommended: true,
    shortDesc: "Structured Cabling",
    customerFeeling: "I want professional, organized networking.",
    bestFor: "Offices, clinics, schools, multi-floor",
    includes: [
      "Router + managed switch",
      "Structured cabling system",
      "Multiple access points",
      "Network optimization",
      "Port labeling + documentation",
      "VLAN setup (optional)",
      "3 months support",
    ],
    technicalDetails: "Managed switch + multiple APs",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "advanced-networking",
    name: "Advanced Networking",
    icon: Network,
    shortDesc: "Enterprise Grade",
    customerFeeling: "I need enterprise-level infrastructure.",
    bestFor: "Large organizations, multi-location businesses",
    includes: [
      "Enterprise router + switches",
      "VLAN + firewall configuration",
      "Redundancy + failover",
      "Centralized management",
      "Network monitoring",
      "Security hardening",
      "24/7 support + SLA",
    ],
    technicalDetails: "Enterprise equipment + management",
    gradient: "from-blue-500 to-indigo-500",
  },
];

// Digital Packages
const digitalPackages: Package[] = [
  {
    id: "essential-digital",
    name: "Essential Digital",
    icon: Code,
    shortDesc: "Basic Presence",
    customerFeeling: "I just want to be visible online.",
    bestFor: "Small shops, startups, service providers",
    includes: [
      "Basic business website/landing page",
      "Google Business setup",
      "Basic digital presence",
      "Simple contact & inquiry form",
      "Mobile-responsive design",
      "Domain + hosting setup",
    ],
    technicalDetails: "5-page website + Google listing",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "standard-digital",
    name: "Standard Digital",
    icon: Code,
    shortDesc: "Professional Tools",
    customerFeeling: "I want tools to manage my business better.",
    bestFor: "Retail stores, clinics, offices",
    includes: [
      "Professional website",
      "Basic management software",
      "Online inquiry & lead handling",
      "Email & basic automation",
      "Performance & security setup",
      "Training session",
    ],
    technicalDetails: "Website + basic management dashboard",
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    id: "recommended-digital",
    name: "Recommended Digital",
    icon: Code,
    recommended: true,
    shortDesc: "Business Automation",
    customerFeeling: "I want my business organized and automated.",
    bestFor: "Retail chains, schools, service companies",
    includes: [
      "Custom software solution",
      "POS / Inventory / Billing system",
      "Website + admin dashboard",
      "Reporting & analytics",
      "User training & documentation",
      "Mobile app (optional)",
      "6 months support",
    ],
    technicalDetails: "Full custom system + integrations",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "advanced-digital",
    name: "Advanced Digital",
    icon: Code,
    shortDesc: "Digital Transformation",
    customerFeeling: "I want complete digital transformation.",
    bestFor: "Large organizations, multi-location businesses",
    includes: [
      "Fully customized ecosystem",
      "Cloud-based systems",
      "Multi-branch management",
      "Integrations (payments, ERP, CRM)",
      "Data security & backups",
      "Ongoing technical support",
      "Scalable architecture",
    ],
    technicalDetails: "Enterprise ecosystem + cloud infrastructure",
    gradient: "from-pink-500 to-rose-500",
  },
];

export function Blueprint() {
  const shouldReduceMotion = useReducedMotion();
  
  // State
  const [selectedDepartment, setSelectedDepartment] = useState<Department>("security");
  const [spaceType, setSpaceType] = useState("");
  const [size, setSize] = useState("");
  const [location, setLocation] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  
  // Department-specific options
  const [budgetFocus, setBudgetFocus] = useState(""); // For security
  const [cablingPreference, setCablingPreference] = useState(""); // For security
  const [backupNeed, setBackupNeed] = useState(""); // For solar
  const [coverageNeed, setCoverageNeed] = useState(""); // For networking
  const [businessType, setBusinessType] = useState(""); // For digital
  const [mainGoal, setMainGoal] = useState(""); // For digital

  const departments = [
    { id: "security" as Department, label: "Security", icon: Shield, color: "text-blue-600" },
    { id: "solar" as Department, label: "Solar", icon: Sun, color: "text-yellow-600" },
    { id: "networking" as Department, label: "Networking", icon: Wifi, color: "text-cyan-600" },
    { id: "digital" as Department, label: "Digital", icon: Smartphone, color: "text-purple-600" },
  ];

  const getCurrentPackages = (): Package[] => {
    switch (selectedDepartment) {
      case "security": return securityPackages;
      case "solar": return solarPackages;
      case "networking": return networkingPackages;
      case "digital": return digitalPackages;
    }
  };

  const getSystemRecommendation = () => {
    if (selectedDepartment === "security" && selectedPackage) {
      if (cablingPreference === "wired" && budgetFocus === "budget") {
        return "Analog cameras (cost-effective, wired)";
      } else if (cablingPreference === "wired" && (budgetFocus === "balanced" || budgetFocus === "premium")) {
        return "IP cameras (best quality, wired)";
      } else if (cablingPreference === "wireless") {
        return "Wi-Fi cameras (no wiring needed)";
      }
    }
    return null;
  };

  const generateWhatsAppMessage = () => {
    const pkg = getCurrentPackages().find(p => p.id === selectedPackage);
    if (!pkg) return "";

    let message = `*${selectedDepartment.toUpperCase()} SYSTEM INQUIRY*\n\n`;
    message += `*Package:* ${pkg.name}\n`;
    
    // For Digital, don't mention space/size
    if (selectedDepartment !== "digital") {
      message += `*Space:* ${spaceType || "Not specified"} - ${size || "Not specified"}\n`;
    }
    
    if (location) message += `*Location:* ${location}\n`;
    message += `\n*What's Included:*\n`;
    pkg.includes.forEach(item => {
      message += `✓ ${item}\n`;
    });

    if (selectedDepartment === "security") {
      if (budgetFocus) message += `\n*Budget Focus:* ${budgetFocus}\n`;
      if (cablingPreference) message += `*Cabling:* ${cablingPreference}\n`;
      const recommendation = getSystemRecommendation();
      if (recommendation) message += `*Recommended:* ${recommendation}\n`;
    }

    if (selectedDepartment === "solar" && backupNeed) {
      message += `\n*Backup Need:* ${backupNeed}\n`;
    }

    if (selectedDepartment === "networking" && coverageNeed) {
      message += `\n*Coverage Need:* ${coverageNeed}\n`;
    }

    if (selectedDepartment === "digital") {
      if (businessType) message += `\n*Business Type:* ${businessType}\n`;
      if (mainGoal) message += `*Main Goal:* ${mainGoal}\n`;
    }

    message += `\n_Please confirm site survey / next steps._`;
    return encodeURIComponent(message);
  };

  const handleWhatsApp = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    const pkg = getCurrentPackages().find(p => p.id === selectedPackage);
    const subject = encodeURIComponent(`${selectedDepartment.toUpperCase()} System Inquiry - ${pkg?.name}`);
    const body = generateWhatsAppMessage().replace(/%0A/g, '%0D%0A');
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const isFormComplete = () => {
    if (selectedDepartment === "digital") {
      // For digital, only need business type, goal, and package
      return businessType && mainGoal && selectedPackage;
    }
    // For physical departments (security, solar, networking)
    return spaceType && size && selectedPackage;
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
            Answer a few quick questions and get an instant recommendation for your perfect system package.
          </p>
        </motion.div>

        {/* Department Track Toggle */}
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
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {departments.map((dept) => {
                const Icon = dept.icon;
                return (
                  <button
                    key={dept.id}
                    onClick={() => {
                      setSelectedDepartment(dept.id);
                      setSelectedPackage("");
                    }}
                    className={cn(
                      "relative px-3 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 flex flex-col items-center gap-1.5 sm:gap-2",
                      selectedDepartment === dept.id
                        ? "bg-white/90 dark:bg-slate-800/80 text-primary dark:text-cyan-400 shadow-[0_2px_8px_rgba(0,194,255,0.2)] backdrop-blur-xl"
                        : "text-muted-foreground hover:bg-white/50 dark:hover:bg-slate-800/40 hover:text-foreground"
                    )}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">{dept.label}</span>
                    <span className="sm:hidden text-[10px]">{dept.label}</span>
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
            {/* For Digital: Different workflow */}
            {selectedDepartment === "digital" ? (
              <>
                {/* Step 1: Business Type */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground dark:text-white">
                    1. What's your business type?
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {["Retail", "Medical/Clinic", "Service", "School/Education", "Manufacturing", "Other"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setBusinessType(type)}
                        className={cn(
                          "relative px-3 py-2.5 sm:px-4 sm:py-3 text-sm font-semibold rounded-xl backdrop-blur-2xl border-2 transition-all duration-300",
                          businessType === type
                            ? "bg-white/70 dark:bg-slate-900/60 border-cyan-500/50 dark:border-cyan-500/30 text-primary dark:text-cyan-400 shadow-[0_4px_16px_rgba(0,194,255,0.2)]"
                            : "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15 text-foreground dark:text-white hover:border-cyan-500/30"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Main Goal */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground dark:text-white">
                    2. What's your main goal?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { value: "visibility", label: "Online Visibility" },
                      { value: "manage", label: "Manage Sales" },
                      { value: "automation", label: "Full Automation" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setMainGoal(option.value)}
                        className={cn(
                          "relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-2xl border-2 transition-all duration-300 p-3 sm:p-4",
                          mainGoal === option.value
                            ? "bg-white/70 dark:bg-slate-900/60 border-cyan-500/50 dark:border-cyan-500/30 shadow-[0_4px_24px_rgba(0,194,255,0.2)]"
                            : "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15 hover:border-cyan-500/30 shadow-[0_4px_16px_rgba(0,194,255,0.08)]"
                        )}
                      >
                        <div className="text-center">
                          <div className={cn(
                            "text-sm font-bold",
                            mainGoal === option.value
                              ? "text-primary dark:text-cyan-400"
                              : "text-foreground dark:text-white"
                          )}>
                            {option.label}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* For Physical Systems: Space & Size workflow */}
                {/* Step 1: Space Type */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground dark:text-white">
                    1. Choose your space
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {["Home", "Shop", "Office", "School", "Warehouse", "Other"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setSpaceType(type)}
                        className={cn(
                          "relative px-3 py-2.5 sm:px-4 sm:py-3 text-sm font-semibold rounded-xl backdrop-blur-2xl border-2 transition-all duration-300",
                          spaceType === type
                            ? "bg-white/70 dark:bg-slate-900/60 border-cyan-500/50 dark:border-cyan-500/30 text-primary dark:text-cyan-400 shadow-[0_4px_16px_rgba(0,194,255,0.2)]"
                            : "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15 text-foreground dark:text-white hover:border-cyan-500/30"
                        )}
                      >
                        {type}
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
                    {["Small", "Medium", "Large"].map((sizeOption) => (
                      <button
                        key={sizeOption}
                        onClick={() => setSize(sizeOption)}
                        className={cn(
                          "relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-2xl border-2 transition-all duration-300 p-3 sm:p-4",
                          size === sizeOption
                            ? "bg-white/70 dark:bg-slate-900/60 border-cyan-500/50 dark:border-cyan-500/30 shadow-[0_4px_24px_rgba(0,194,255,0.2)]"
                            : "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15 hover:border-cyan-500/30 shadow-[0_4px_16px_rgba(0,194,255,0.08)]"
                        )}
                      >
                        <div className="text-center">
                          <div className={cn(
                            "text-sm font-bold",
                            size === sizeOption
                              ? "text-primary dark:text-cyan-400"
                              : "text-foreground dark:text-white"
                          )}>
                            {sizeOption}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Step 3: Package Selection */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground dark:text-white">
                3. Select your package
              </h3>
              <div className="flex flex-wrap gap-2">
                {getCurrentPackages().map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={cn(
                      "px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm font-semibold backdrop-blur-xl border-2 transition-all duration-300 relative",
                      selectedPackage === pkg.id
                        ? "bg-cyan-500/20 dark:bg-cyan-500/20 border-cyan-500/50 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-300 shadow-[0_4px_16px_rgba(0,194,255,0.2)]"
                        : "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15 text-foreground dark:text-white hover:border-cyan-500/30"
                    )}
                  >
                    {pkg.name}
                    {pkg.recommended && (
                      <Star className="inline-block w-3 h-3 ml-1 fill-amber-500 text-amber-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Department-specific additional options */}
            {selectedDepartment === "security" && spaceType && size && (
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground dark:text-white">
                  4. Preferences (Optional)
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-2">
                      Budget Focus
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: "budget", label: "Budget" },
                        { value: "balanced", label: "Balanced" },
                        { value: "premium", label: "Premium" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setBudgetFocus(option.value)}
                          className={cn(
                            "px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all",
                            budgetFocus === option.value
                              ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-700 dark:text-cyan-300"
                              : "bg-white/40 dark:bg-slate-800/40 border-white/30 dark:border-white/10 text-foreground dark:text-white hover:border-cyan-500/30"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-2">
                      Cabling
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: "wired", label: "Wired" },
                        { value: "wireless", label: "No wiring" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setCablingPreference(option.value)}
                          className={cn(
                            "px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all",
                            cablingPreference === option.value
                              ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-700 dark:text-cyan-300"
                              : "bg-white/40 dark:bg-slate-800/40 border-white/30 dark:border-white/10 text-foreground dark:text-white hover:border-cyan-500/30"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedDepartment === "solar" && spaceType && size && (
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground dark:text-white">
                  4. Backup Goal (Optional)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "3-5hours", label: "3–5 hours" },
                    { value: "6-8hours", label: "6–8 hours" },
                    { value: "daytime", label: "Daytime savings" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setBackupNeed(option.value)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all",
                        backupNeed === option.value
                          ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-700 dark:text-cyan-300"
                          : "bg-white/40 dark:bg-slate-800/40 border-white/30 dark:border-white/10 text-foreground dark:text-white hover:border-cyan-500/30"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedDepartment === "networking" && spaceType && size && (
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground dark:text-white">
                  4. Coverage Need (Optional)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "basic", label: "Basic" },
                    { value: "strong", label: "Strong" },
                    { value: "multifloor", label: "Multi-floor" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setCoverageNeed(option.value)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all",
                        coverageNeed === option.value
                          ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-700 dark:text-cyan-300"
                          : "bg-white/40 dark:bg-slate-800/40 border-white/30 dark:border-white/10 text-foreground dark:text-white hover:border-cyan-500/30"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
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
              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

              <div className="relative p-5 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="mb-5 sm:mb-6">
                  <Badge className="mb-2 sm:mb-3 text-xs sm:text-sm bg-cyan-500/15 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 dark:border-cyan-500/30">
                    {selectedPackage ? "Your Selection" : "Instant Recommendation"}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground dark:text-white">
                    {selectedPackage 
                      ? getCurrentPackages().find(p => p.id === selectedPackage)?.name 
                      : "Select Package"}
                  </h3>
                </div>

                <Separator className="mb-5 sm:mb-6 bg-gradient-to-r from-transparent via-border dark:via-slate-600 to-transparent" />

                {/* Results */}
                {selectedPackage ? (
                  <>
                    <div className="space-y-4 sm:space-y-5">
                      {/* Package Details */}
                      {(() => {
                        const pkg = getCurrentPackages().find(p => p.id === selectedPackage);
                        if (!pkg) return null;
                        
                        return (
                          <>
                            <div>
                              <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-1">
                                Package Type
                              </div>
                              <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-cyan-400">
                                {pkg.shortDesc}
                              </div>
                            </div>

                            <div>
                              <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-2">
                                What's Included
                              </div>
                              <div className="space-y-2">
                                {pkg.includes.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                                    <span className="text-xs sm:text-sm text-foreground dark:text-white">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {spaceType && (
                              <div>
                                <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-1">
                                  Space Type
                                </div>
                                <div className="text-base sm:text-lg font-semibold text-foreground dark:text-white">
                                  {spaceType} {size && `- ${size}`}
                                </div>
                              </div>
                            )}

                            {getSystemRecommendation() && (
                              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/20">
                                <div className="flex items-start gap-2">
                                  <Zap className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                  <div>
                                    <div className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-1">
                                      Smart Recommendation
                                    </div>
                                    <div className="text-sm text-foreground dark:text-white">
                                      {getSystemRecommendation()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="text-xs italic text-muted-foreground dark:text-slate-400 border-l-2 border-cyan-500/30 pl-3">
                              "{pkg.customerFeeling}"
                            </div>

                            <div>
                              <div className="text-xs sm:text-sm text-muted-foreground dark:text-slate-400 mb-1">
                                Best For
                              </div>
                              <div className="text-sm font-medium text-foreground dark:text-white">
                                {pkg.bestFor}
                              </div>
                            </div>
                          </>
                        );
                      })()}
                    </div>

                    <Separator className="my-5 sm:my-6 bg-gradient-to-r from-transparent via-border dark:via-slate-600 to-transparent" />

                    {/* CTAs */}
                    {isFormComplete() && (
                      <div className="space-y-2.5 sm:space-y-3">
                        <Button
                          onClick={handleWhatsApp}
                          className={cn(
                            "w-full rounded-xl font-semibold text-sm sm:text-base",
                            "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                            "text-white shadow-[0_4px_24px_rgba(0,194,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,194,255,0.4)]",
                            "transition-all duration-300"
                          )}
                          size="lg"
                        >
                          <MessageCircle className="mr-2 w-4 h-4" />
                          Send plan on WhatsApp
                        </Button>
                        <Button
                          onClick={handleEmail}
                          variant="outline"
                          className={cn(
                            "w-full rounded-xl font-semibold backdrop-blur-xl text-sm sm:text-base",
                            "bg-white/50 dark:bg-slate-800/50 border-2 border-white/40 dark:border-white/20",
                            "hover:bg-white/70 dark:hover:bg-slate-800/70 hover:border-cyan-500/40",
                            "transition-all duration-300"
                          )}
                          size="lg"
                        >
                          <Mail className="mr-2 w-4 h-4" />
                          Send by Email
                        </Button>
                      </div>
                    )}

                    {/* Micro line */}
                    <p className="text-center text-[10px] sm:text-xs text-muted-foreground dark:text-slate-400 mt-3 sm:mt-4">
                      No spam. No upsell. Just a clean recommendation.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📋</div>
                    <p className="text-muted-foreground dark:text-slate-400">
                      Select department, space, and package to see your recommendation
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
