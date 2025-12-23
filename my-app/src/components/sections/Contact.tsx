"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  User,
  Mail,
  Phone as PhoneIcon,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileSlider } from "@/components/shared/MobileSlider";
import {
  CONTACT_NAME,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  ADDRESS,
  WHATSAPP_URL,
} from "@/lib/constants";

const spaceTypes = ["Home", "Shop", "Office", "Warehouse"];
const preferredTimes = ["Morning", "Afternoon", "Evening"];

const contactCards = [
  {
    id: "name",
    label: "Name",
    value: CONTACT_NAME,
    icon: User,
    href: null,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "email",
    label: "Email",
    value: EMAIL,
    icon: Mail,
    href: `mailto:${EMAIL}`,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: "phone",
    label: "Phone",
    value: PHONE_DISPLAY,
    icon: PhoneIcon,
    href: `tel:${PHONE}`,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: "address",
    label: "Address",
    value: ADDRESS,
    icon: MapPin,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
    gradient: "from-purple-500 to-pink-500",
  },
];

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null);
  const [location, setLocation] = useState("");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const generateMessage = () => {
    const parts = ["Hi! I'd like to request a site survey."];
    
    if (selectedSpace) parts.push(`\n📍 Space Type: ${selectedSpace}`);
    if (location) parts.push(`📌 Location: ${location}`);
    if (selectedTime) parts.push(`⏰ Preferred Time: ${selectedTime}`);
    if (note) parts.push(`📝 Note: ${note}`);
    
    parts.push("\nPlease suggest a recommended setup and survey time.");
    
    return parts.join("\n");
  };

  const handleWhatsApp = () => {
    const message = generateMessage();
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleEmail = () => {
    const message = generateMessage();
    const subject = "Site Survey Request - Upedge Technologies";
    window.open(
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/5 to-transparent dark:via-rose-400/5 pointer-events-none"></div>

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
            <span className="text-primary dark:text-white">Contact & </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Site Survey
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Share your space details and we'll suggest the right setup.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* LEFT COLUMN - Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-6">
              Direct Contact
            </h3>

            {/* Contact Cards */}
            <MobileSlider
              items={contactCards.map((card, index) => {
                const Icon = card.icon;
                const CardWrapper = card.href ? "a" : "div";
                const cardProps = card.href
                  ? { href: card.href, target: card.id === "address" ? "_blank" : undefined, rel: card.id === "address" ? "noopener noreferrer" : undefined }
                  : {};

                return (
                  <motion.div
                    key={card.id}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0.3 : 0.4,
                      delay: shouldReduceMotion ? 0 : index * 0.05,
                    }}
                    className="h-full"
                  >
                    <CardWrapper
                      {...cardProps}
                      className={cn(
                        "block group",
                        card.href && "cursor-pointer"
                      )}
                    >
                      <Card
                        className={cn(
                          "relative overflow-hidden rounded-2xl backdrop-blur-2xl border-2 p-5 transition-all duration-300",
                          "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                          "shadow-[0_4px_16px_rgba(0,194,255,0.08)] hover:shadow-[0_8px_24px_rgba(0,194,255,0.15)]",
                          card.href && "hover:border-opacity-60 hover:-translate-y-1"
                        )}
                      >
                        {/* Top highlight */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "p-3 rounded-xl bg-gradient-to-br shrink-0",
                            card.gradient,
                            "text-white shadow-lg"
                          )}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-muted-foreground dark:text-slate-400 mb-1">
                              {card.label}
                            </div>
                            <div className="text-sm sm:text-base font-semibold text-foreground dark:text-white truncate">
                              {card.value}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </CardWrapper>
                  </motion.div>
                );
              })}
              desktopGridClassName="space-y-4"
              showDots={false}
            />

            {/* Quick Actions */}
            <div className="pt-4">
              <h4 className="text-sm font-bold text-foreground dark:text-white mb-3 uppercase tracking-wider">
                Quick Actions
              </h4>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className={cn(
                    "rounded-xl font-semibold",
                    "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500",
                    "text-white shadow-lg transition-all duration-300"
                  )}
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={cn(
                    "rounded-xl font-semibold backdrop-blur-xl",
                    "bg-white/50 dark:bg-slate-800/50 border-2 border-white/40 dark:border-white/20",
                    "hover:bg-white/70 dark:hover:bg-slate-800/70"
                  )}
                >
                  <a href={`tel:${PHONE}`}>
                    <PhoneIcon className="mr-2 w-4 h-4" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={cn(
                    "rounded-xl font-semibold backdrop-blur-xl",
                    "bg-white/50 dark:bg-slate-800/50 border-2 border-white/40 dark:border-white/20",
                    "hover:bg-white/70 dark:hover:bg-slate-800/70"
                  )}
                >
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="mr-2 w-4 h-4" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Site Survey Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          >
            <Card
              className={cn(
                "relative overflow-hidden rounded-3xl backdrop-blur-2xl border-2 p-6 sm:p-8 transition-all duration-300",
                "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                "shadow-[0_8px_32px_rgba(0,194,255,0.15)] dark:shadow-[0_8px_32px_rgba(0,194,255,0.1)]"
              )}
            >
              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-6">
                Request Site Survey
              </h3>

              <div className="space-y-6">
                {/* Space Type */}
                <div>
                  <label className="text-sm font-semibold text-foreground dark:text-white mb-3 block">
                    Space Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {spaceTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedSpace(type)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-xl border-2 transition-all duration-300",
                          selectedSpace === type
                            ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white border-transparent shadow-lg"
                            : "bg-white/50 dark:bg-slate-800/50 border-white/40 dark:border-white/20 text-foreground dark:text-white hover:border-rose-500/40"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-semibold text-foreground dark:text-white mb-3 block">
                    Location
                  </label>
                  <Input
                    type="text"
                    placeholder="Your area / landmark"
                    value={location}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
                    className={cn(
                      "rounded-xl backdrop-blur-xl border-2",
                      "bg-white/50 dark:bg-slate-800/50 border-white/40 dark:border-white/20",
                      "focus:border-rose-500/50 focus:ring-rose-500/20"
                    )}
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="text-sm font-semibold text-foreground dark:text-white mb-3 block">
                    Preferred Time
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {preferredTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-xl border-2 transition-all duration-300",
                          selectedTime === time
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg"
                            : "bg-white/50 dark:bg-slate-800/50 border-white/40 dark:border-white/20 text-foreground dark:text-white hover:border-purple-500/40"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Note */}
                <div>
                  <label className="text-sm font-semibold text-foreground dark:text-white mb-3 block">
                    Optional Note
                  </label>
                  <Textarea
                    placeholder="Any specific requirements or questions..."
                    value={note}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNote(e.target.value)}
                    rows={2}
                    className={cn(
                      "rounded-xl backdrop-blur-xl border-2 resize-none",
                      "bg-white/50 dark:bg-slate-800/50 border-white/40 dark:border-white/20",
                      "focus:border-rose-500/50 focus:ring-rose-500/20"
                    )}
                  />
                </div>

                {/* Buttons */}
                <div className="space-y-3 pt-2">
                  <Button
                    onClick={handleWhatsApp}
                    className={cn(
                      "w-full rounded-xl font-semibold",
                      "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                      "text-white shadow-[0_4px_24px_rgba(0,194,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,194,255,0.4)]",
                      "transition-all duration-300"
                    )}
                    size="lg"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Send on WhatsApp
                  </Button>
                  <Button
                    onClick={handleEmail}
                    variant="outline"
                    className={cn(
                      "w-full rounded-xl font-semibold backdrop-blur-xl",
                      "bg-white/50 dark:bg-slate-800/50 border-2 border-white/40 dark:border-white/20",
                      "hover:bg-white/70 dark:hover:bg-slate-800/70 hover:border-rose-500/40",
                      "transition-all duration-300"
                    )}
                    size="lg"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send by Email
                  </Button>
                  <p className="text-center text-xs text-muted-foreground dark:text-slate-400">
                    We reply fast. No spam.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
