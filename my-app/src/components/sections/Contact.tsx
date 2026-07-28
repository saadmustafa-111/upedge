"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Phone as PhoneIcon,
  MapPin,
  Send,
  Facebook,
  MapPinned,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DeckSlider } from "@/components/shared/DeckSlider";
import {
  EMAIL,
  PHONE_DISPLAY_PRIMARY,
  PHONE_DISPLAY_SECONDARY,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  ADDRESS,
  FACEBOOK_PAGE,
  GOOGLE_BUSINESS_NAME,
  WHATSAPP_URL,
} from "@/lib/constants";

const contactCards = [
  {
    id: "email",
    label: "Email",
    value: EMAIL,
    icon: Mail,
    href: `mailto:${EMAIL}`,
  },
  {
    id: "phone1",
    label: "Phone (Primary)",
    value: PHONE_DISPLAY_PRIMARY,
    icon: PhoneIcon,
    href: `tel:${PHONE_PRIMARY}`,
  },
  {
    id: "phone2",
    label: "Phone (Secondary)",
    value: PHONE_DISPLAY_SECONDARY,
    icon: PhoneIcon,
    href: `tel:${PHONE_SECONDARY}`,
  },
  {
    id: "address",
    label: "Address",
    value: ADDRESS,
    icon: MapPin,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
  },
  {
    id: "facebook",
    label: "Facebook",
    value: `@${FACEBOOK_PAGE}`,
    icon: Facebook,
    href: `https://facebook.com/${FACEBOOK_PAGE}`,
  },
  {
    id: "google",
    label: "Google Business",
    value: GOOGLE_BUSINESS_NAME,
    icon: MapPinned,
    href: `https://www.google.com/search?q=${encodeURIComponent(GOOGLE_BUSINESS_NAME)}`,
  },
];

const solutionTypes = ["Security", "Networking", "Access Control"];
const spaceTypes = ["Home", "Retail", "Office", "Warehouse", "Educational"];

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null);
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");

  const generateMessage = () => {
    const parts = ["Hi! I'd like to discuss a project with UpEdge Technologies."];
    
    if (selectedSolution) parts.push(`\n📍 Solution Type: ${selectedSolution}`);
    if (selectedSpace) parts.push(`🏢 Space Type: ${selectedSpace}`);
    if (location) parts.push(`📌 Location: ${location}`);
    if (note) parts.push(`📝 Details: ${note}`);
    
    parts.push("\nPlease contact me to discuss further.");
    
    return parts.join("\n");
  };

  const handleWhatsApp = () => {
    const message = generateMessage();
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleEmail = () => {
    const message = generateMessage();
    const subject = "Project Inquiry - UpEdge Technologies";
    window.open(
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-20 dark:bg-black"
    >
      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-zinc-950 dark:text-white">Get in Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Reach out for consultations, site surveys, or any questions about our solutions
          </p>
        </motion.div>

        {/* Contact Cards */}
        <DeckSlider
          slides={contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                className="h-full"
              >
                <a
                  href={card.href}
                  target={card.id === "facebook" || card.id === "google" || card.id === "address" ? "_blank" : undefined}
                  rel={card.id === "facebook" || card.id === "google" || card.id === "address" ? "noopener noreferrer" : undefined}
                  className={cn(
                    "relative h-full p-6 cursor-pointer block",
                    "rounded-[1.75rem] overflow-hidden border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                    "hover:shadow-[0_12px_28px_rgba(18,18,18,0.12)] dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.24)]",
                    "hover:-translate-y-1",
                    "transition-all duration-500 ease-out group"
                  )}
                >
                  {/* Icon */}
                  <div className={cn(
                    "w-12 h-12 rounded-2xl mb-4 flex items-center justify-center transition-all duration-300",
                    "bg-amber-50 text-amber-600 dark:bg-zinc-900 dark:text-amber-400",
                    "group-hover:scale-105"
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Label */}
                  <h3 className="text-sm font-semibold text-muted-foreground dark:text-slate-400 mb-2">
                    {card.label}
                  </h3>

                  {/* Value */}
                  <p className="text-base sm:text-lg font-semibold text-foreground dark:text-white break-words">
                    {card.value}
                  </p>
                </a>
              </motion.div>
            );
          })}
          desktopGridClassName="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
        />

        {/* Send Details Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className={cn(
            "relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950",
            "shadow-[0_18px_40px_rgba(18,18,18,0.08)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]",
            "p-6 sm:p-8"
          )}>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-6">
              Send Project Details
            </h3>

            <div className="space-y-6">
              {/* Solution Type */}
              <div>
                <label className="block text-sm font-semibold text-foreground dark:text-white mb-3">
                  What solution do you need?
                </label>
                <div className="flex flex-wrap gap-2">
                  {solutionTypes.map((solution) => (
                    <button
                      key={solution}
                      onClick={() => setSelectedSolution(solution === selectedSolution ? null : solution)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300",
                        selectedSolution === solution
                          ? "bg-amber-50 dark:bg-zinc-900 border-amber-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100"
                          : "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-foreground dark:text-white hover:border-amber-300 dark:hover:border-zinc-700"
                      )}
                    >
                      {solution}
                    </button>
                  ))}
                </div>
              </div>

              {/* Space Type */}
              <div>
                <label className="block text-sm font-semibold text-foreground dark:text-white mb-3">
                  Space Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {spaceTypes.map((space) => (
                    <button
                      key={space}
                      onClick={() => setSelectedSpace(space === selectedSpace ? null : space)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300",
                        selectedSpace === space
                          ? "bg-amber-50 dark:bg-zinc-900 border-amber-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100"
                          : "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-foreground dark:text-white hover:border-amber-300 dark:hover:border-zinc-700"
                      )}
                    >
                      {space}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-foreground dark:text-white mb-2">
                  Location (optional)
                </label>
                <Input
                  id="location"
                  type="text"
                  placeholder="e.g., Abbottabad, Mansehra"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={cn(
                    "border",
                    "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800",
                    "focus:border-amber-500 dark:focus:border-amber-500"
                  )}
                />
              </div>

              {/* Note */}
              <div>
                <label htmlFor="note" className="block text-sm font-semibold text-foreground dark:text-white mb-2">
                  Additional Details (optional)
                </label>
                <Textarea
                  id="note"
                  rows={4}
                  placeholder="Tell us more about your requirements..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className={cn(
                    "border resize-none",
                    "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800",
                    "focus:border-amber-500 dark:focus:border-amber-500"
                  )}
                />
              </div>

              {/* CTAs */}
              <div className="grid sm:grid-cols-2 gap-3">
                <Button
                  onClick={handleWhatsApp}
                  className={cn(
                    "w-full rounded-xl font-semibold",
                    "shadow-[0_12px_24px_rgba(18,18,18,0.14)] hover:shadow-[0_16px_30px_rgba(18,18,18,0.18)]",
                    "transition-all duration-300"
                  )}
                  size="lg"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Send on WhatsApp
                </Button>
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className={cn(
                    "w-full rounded-xl font-semibold backdrop-blur-xl",
                    "bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800",
                    "hover:bg-white dark:hover:bg-zinc-900 hover:border-amber-300",
                    "transition-all duration-300"
                  )}
                  size="lg"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Send via Email
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
