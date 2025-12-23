"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileSlider } from "@/components/shared/MobileSlider";

const reviews = [
  {
    id: 1,
    name: "Ahmed R.",
    role: "Retail Shop Owner",
    rating: 5,
    text: "Installation was neat and the camera angles were planned properly. Mobile viewing was set up on the spot.",
    offset: 0,
  },
  {
    id: 2,
    name: "Ayesha K.",
    role: "Homeowner",
    rating: 5,
    text: "They guided us on what we actually needed. Night view is clear and the app is easy to use.",
    offset: 20,
  },
  {
    id: 3,
    name: "Usman S.",
    role: "Office Admin",
    rating: 5,
    text: "Fast turnaround and professional handover. Playback and export were explained clearly.",
    offset: 40,
  },
  {
    id: 4,
    name: "Bilal M.",
    role: "Warehouse Supervisor",
    rating: 5,
    text: "Coverage improved a lot after they adjusted placements. Cabling and labeling were done properly.",
    offset: 20,
  },
  {
    id: 5,
    name: "Sara N.",
    role: "Boutique Owner",
    rating: 5,
    text: "Cash counter and entrance coverage is perfect. They also helped with multiple user access.",
    offset: 40,
  },
  {
    id: 6,
    name: "Hassan T.",
    role: "Small Business Owner",
    rating: 5,
    text: "Good communication and support. They responded quickly when we needed a small adjustment.",
    offset: 60,
  },
];

export function Reviews() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent dark:via-amber-400/5 pointer-events-none"></div>

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
            <span className="text-primary dark:text-white">What </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              clients say
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Clean installation, clear guidance, and support you can reach.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <MobileSlider
          items={reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: review.offset }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.8,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group"
            >
              <Card
                className={cn(
                  "relative h-full overflow-hidden rounded-3xl backdrop-blur-2xl border-2 p-6 sm:p-8 transition-all duration-500",
                  "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
                  "shadow-[0_4px_24px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,194,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.1)]",
                  "hover:shadow-[0_8px_32px_rgba(0,194,255,0.15)] hover:border-amber-500/30 dark:hover:border-amber-500/20"
                )}
              >
                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent pointer-events-none"></div>

                {/* Shimmer effect on view */}
                {!shouldReduceMotion && (
                  <motion.div
                    initial={{ x: "-200%", opacity: 0 }}
                    whileInView={{ x: "200%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.15,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 dark:via-amber-400/10 to-transparent pointer-events-none"
                    style={{
                      maskImage:
                        "linear-gradient(to right, transparent, black, transparent)",
                    }}
                  />
                )}

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 dark:fill-amber-500 dark:text-amber-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm sm:text-base text-foreground dark:text-slate-200 leading-relaxed mb-6 min-h-[80px]">
                  "{review.text}"
                </blockquote>

                {/* Author */}
                <div className="mt-auto pt-4 border-t border-border/50 dark:border-slate-700/50">
                  <div className="font-semibold text-foreground dark:text-white">
                    {review.name}
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-slate-400">
                    {review.role}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          desktopGridClassName="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          className="mb-12 sm:mb-16"
        />
      </div>
    </section>
  );
}
