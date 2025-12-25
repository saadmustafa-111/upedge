"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { DeckSlider } from "@/components/shared/DeckSlider";

const reviews = [
  {
    id: 1,
    name: "Jadoon",
    role: "Verified Customer",
    rating: 5,
    text: "I recently had a camera setup installed by UpEdge Technologies, and the service exceeded my expectations. The technicians were professional, arrived on time, and took the time to ensure everything was perfectly configured. The clarity of the camera feed is exceptional, and the entire process was smooth and hassle-free. Highly recommend!",
    offset: 0,
  },
  {
    id: 2,
    name: "Discovering Pakistan",
    role: "Business Owner",
    rating: 5,
    text: "Best in the town for CCTV installation and security solutions. Hired them for CCTV installation and was very satisfied with their work. Recommended if you are looking for security solutions.",
    offset: 20,
  },
  {
    id: 3,
    name: "Faizan Awan",
    role: "Corporate Client",
    rating: 5,
    text: "We will appreciate the team UpEdge Technology. His staff is very cooperative and professional in all types of advanced security system installation. I highly recommend UpEdge Technology staff for security purposes.",
    offset: 40,
  },
  {
    id: 4,
    name: "Obaidullah Munir",
    role: "Verified Customer",
    rating: 5,
    text: "Overall experience was good. The team was very cooperative and installed the equipment professionally.",
    offset: 20,
  },
  {
    id: 5,
    name: "Mohiz Shah",
    role: "Satisfied Client",
    rating: 5,
    text: "Too good experience and excellent customer service.",
    offset: 40,
  },
  {
    id: 6,
    name: "Saad Mustafa",
    role: "Business Owner",
    rating: 5,
    text: "Outstanding professionalism throughout the entire project. The team handled everything with expertise and attention to detail. Very satisfied with the security system installation.",
    offset: 60,
  },
  {
    id: 7,
    name: "Rashid Khan",
    role: "Warehouse Manager",
    rating: 5,
    text: "Excellent solar installation service. The team conducted a thorough site assessment and designed a system perfectly suited to our needs. The ROI analysis was detailed and the installation was completed on schedule.",
    offset: 20,
  },
  {
    id: 8,
    name: "Ayesha Ahmed",
    role: "Homeowner",
    rating: 5,
    text: "Very impressed with their networking solutions. Our home office now has seamless connectivity throughout. The team was professional, explained everything clearly, and completed the work without any mess.",
    offset: 40,
  },
];

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
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
            <span className="text-primary dark:text-white">Client </span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 leading-relaxed">
            Clean installation, clear guidance, and support you can reach.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <DeckSlider
          slides={reviews.map((review, index) => (
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
              className="h-full"
            >
              {/* Premium Card - No Borders */}
              <div className={cn(
                "relative h-full p-6 sm:p-8",
                "rounded-3xl overflow-hidden",
                "bg-white/90 dark:bg-slate-900/90",
                "shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                "hover:shadow-[0_12px_48px_rgba(0,194,255,0.15)] dark:hover:shadow-[0_12px_48px_rgba(0,194,255,0.2)]",
                "hover:-translate-y-1",
                "transition-all duration-500 ease-out"
              )}>
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
                <blockquote className="text-sm sm:text-base text-foreground dark:text-slate-200 leading-relaxed mb-6 min-h-[120px]">
                  "{review.text}"
                </blockquote>

                {/* Author */}
                <div className="mt-auto pt-4 border-t border-border/20 dark:border-slate-700/20">
                  <div className="font-semibold text-foreground dark:text-white">
                    {review.name}
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-slate-400">
                    {review.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          desktopGridClassName="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          className="mb-12 sm:mb-16"
        />
      </div>
    </section>
  );
}
