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
type Department = "security" | "networking" | "digital";

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
  const [coverageNeed, setCoverageNeed] = useState(""); // For networking
  const [businessType, setBusinessType] = useState(""); // For digital
  const [mainGoal, setMainGoal] = useState(""); // For digital

  const departments = [
    { id: "security" as Department, label: "Security", icon: Shield, color: "text-amber-600 dark:text-amber-400" },
    { id: "networking" as Department, label: "Networking", icon: Wifi, color: "text-amber-600 dark:text-amber-400" },
    { id: "digital" as Department, label: "Digital", icon: Smartphone, color: "text-amber-600 dark:text-amber-400" },
  ];

  const getCurrentPackages = (): Package[] => {
    switch (selectedDepartment) {
      case "security": return securityPackages;
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
    // For physical departments (security, networking)
    return spaceType && size && selectedPackage;
  };

  return (
    <section
      id="blueprint"
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
            <span className="text-zinc-950 dark:text-white">30-Second Blueprint</span>
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
            "relative rounded-[1.5rem] border border-zinc-200 bg-white p-1.5 transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900 sm:p-2",
            "shadow-[0_12px_24px_rgba(18,18,18,0.06)] dark:shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
          )}>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
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
                        ? "bg-amber-50 text-zinc-950 shadow-[0_8px_18px_rgba(18,18,18,0.08)] dark:bg-zinc-900 dark:text-white"
                        : "text-muted-foreground hover:bg-zinc-50 hover:text-foreground dark:hover:bg-zinc-900"
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
                          "relative rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-4 sm:py-3",
                          businessType === type
                            ? "border-amber-200 bg-amber-50 text-zinc-950 shadow-[0_10px_20px_rgba(18,18,18,0.08)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            : "border-zinc-200 bg-white text-foreground hover:border-amber-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-700"
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
                          "relative overflow-hidden rounded-xl border p-3 transition-all duration-300 sm:rounded-2xl sm:p-4",
                          mainGoal === option.value
                            ? "border-amber-200 bg-amber-50 shadow-[0_12px_24px_rgba(18,18,18,0.08)] dark:border-zinc-700 dark:bg-zinc-900"
                            : "border-zinc-200 bg-white shadow-[0_8px_16px_rgba(18,18,18,0.05)] hover:border-amber-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                        )}
                      >
                        <div className="text-center">
                          <div className={cn(
                            "text-sm font-bold",
                            mainGoal === option.value
                              ? "text-zinc-950 dark:text-white"
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
                          "relative rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-4 sm:py-3",
                          spaceType === type
                            ? "border-amber-200 bg-amber-50 text-zinc-950 shadow-[0_10px_20px_rgba(18,18,18,0.08)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                            : "border-zinc-200 bg-white text-foreground hover:border-amber-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-700"
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
                          "relative overflow-hidden rounded-xl border p-3 transition-all duration-300 sm:rounded-2xl sm:p-4",
                          size === sizeOption
                            ? "border-amber-200 bg-amber-50 shadow-[0_12px_24px_rgba(18,18,18,0.08)] dark:border-zinc-700 dark:bg-zinc-900"
                            : "border-zinc-200 bg-white shadow-[0_8px_16px_rgba(18,18,18,0.05)] hover:border-amber-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                        )}
                      >
                        <div className="text-center">
                          <div className={cn(
                            "text-sm font-bold",
                            size === sizeOption
                              ? "text-zinc-950 dark:text-white"
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
                      "relative rounded-full border px-3 py-2 text-sm font-semibold transition-all duration-300 sm:px-4 sm:py-2.5",
                      selectedPackage === pkg.id
                        ? "bg-amber-50 dark:bg-zinc-900 border-amber-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-[0_10px_20px_rgba(18,18,18,0.08)]"
                        : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-foreground dark:text-white hover:border-amber-300 dark:hover:border-zinc-700"
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
                            "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                            budgetFocus === option.value
                              ? "bg-amber-50 border-amber-200 text-amber-700 dark:bg-zinc-900 dark:border-zinc-700 dark:text-amber-300"
                              : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-foreground dark:text-white hover:border-amber-300 dark:hover:border-zinc-700"
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
                            "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                            cablingPreference === option.value
                              ? "bg-amber-50 border-amber-200 text-amber-700 dark:bg-zinc-900 dark:border-zinc-700 dark:text-amber-300"
                              : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-foreground dark:text-white hover:border-amber-300 dark:hover:border-zinc-700"
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
                        "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                        coverageNeed === option.value
                          ? "bg-amber-50 border-amber-200 text-amber-700 dark:bg-zinc-900 dark:border-zinc-700 dark:text-amber-300"
                          : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-foreground dark:text-white hover:border-amber-300 dark:hover:border-zinc-700"
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
              "relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900 lg:sticky lg:top-24",
              "shadow-[0_18px_40px_rgba(18,18,18,0.08)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
            )}>
              <div className="relative p-5 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="mb-5 sm:mb-6">
                  <Badge className="mb-2 border-amber-200 bg-amber-50 text-xs text-amber-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-amber-300 sm:mb-3 sm:text-sm">
                    {selectedPackage ? "Your Selection" : "Instant Recommendation"}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground dark:text-white">
                    {selectedPackage 
                      ? getCurrentPackages().find(p => p.id === selectedPackage)?.name 
                      : "Select Package"}
                  </h3>
                </div>

                <Separator className="mb-5 sm:mb-6 bg-border" />

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
                              <div className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">
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
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
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
                              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                                <div className="flex items-start gap-2">
                                  <Zap className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                                  <div>
                                    <div className="mb-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                                      Smart Recommendation
                                    </div>
                                    <div className="text-sm text-foreground dark:text-white">
                                      {getSystemRecommendation()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="border-l-2 border-amber-300 pl-3 text-xs italic text-muted-foreground dark:border-zinc-700 dark:text-slate-400">
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

                    <Separator className="my-5 bg-border sm:my-6" />

                    {/* CTAs */}
                    {isFormComplete() && (
                      <div className="space-y-2.5 sm:space-y-3">
                        <Button
                          onClick={handleWhatsApp}
                          className={cn(
                            "w-full rounded-xl font-semibold text-sm sm:text-base",
                            "shadow-[0_12px_24px_rgba(18,18,18,0.14)] hover:shadow-[0_16px_30px_rgba(18,18,18,0.18)]",
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
                            "w-full rounded-xl border-2 font-semibold text-sm sm:text-base",
                            "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800",
                            "hover:bg-white dark:hover:bg-zinc-900 hover:border-amber-300 dark:hover:border-zinc-700",
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
