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
    text: "Excellent CCTV installation service. The team conducted a thorough site assessment and designed a setup that fit our warehouse monitoring needs perfectly. The installation was neat, professional, and completed on schedule.",
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

export function Reviews() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
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
            <span className="text-zinc-950 dark:text-white">Client Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-200 leading-relaxed">
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
                "rounded-[1.75rem] overflow-hidden border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
                "shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                "hover:shadow-[0_12px_28px_rgba(18,18,18,0.12)] dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.24)]",
                "hover:-translate-y-1",
                "transition-all duration-500 ease-out"
              )}>
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
                <blockquote className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 min-h-[120px]">
                  "{review.text}"
                </blockquote>

                {/* Author */}
                <div className="mt-auto pt-4 border-t border-border/20 dark:border-slate-700/20">
                  <div className="font-semibold text-zinc-950 dark:text-white">
                    {review.name}
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
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
