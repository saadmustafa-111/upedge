"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const galleryImages = [
  { id: 1, src: "/Gallery/1.jpeg", alt: "Security Installation 1" },
  { id: 2, src: "/Gallery/2.jpeg", alt: "Security Installation 2" },
  { id: 3, src: "/Gallery/3.jpeg", alt: "Security Installation 3" },
  { id: 4, src: "/Gallery/4.jpeg", alt: "Security Installation 4" },
  { id: 5, src: "/Gallery/5.jpeg", alt: "Security Installation 5" },
  { id: 6, src: "/Gallery/6.jpeg", alt: "Security Installation 6" },
  { id: 7, src: "/Gallery/7.jpeg", alt: "Security Installation 7" },
  { id: 8, src: "/Gallery/8.jpeg", alt: "Security Installation 8" },
  { id: 9, src: "/Gallery/9.jpeg", alt: "Security Installation 9" },
  { id: 10, src: "/Gallery/10.jpeg", alt: "Security Installation 10" },
  { id: 11, src: "/Gallery/11.jpeg", alt: "Security Installation 11" },
  { id: 12, src: "/Gallery/12.jpeg", alt: "Security Installation 12" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    const nextIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(galleryImages[nextIndex].id);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  // Add keyboard listeners
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeyDown);
  }

  return (
    <section id="gallery" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Our Work Gallery
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our completed projects and installations across Faisalabad and surrounding areas
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.05,
              }}
              whileHover={shouldReduceMotion ? {} : { y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl backdrop-blur-2xl border-2 transition-all duration-500 aspect-square",
                  "bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-900/40",
                  "border-white/60 dark:border-white/20",
                  "shadow-[0_4px_20px_rgba(0,194,255,0.1)] dark:shadow-[0_4px_20px_rgba(0,194,255,0.08)]",
                  "hover:shadow-[0_12px_40px_rgba(0,194,255,0.25)] dark:hover:shadow-[0_12px_40px_rgba(0,194,255,0.2)]",
                  "hover:border-cyan-500/40 dark:hover:border-cyan-500/30"
                )}
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  quality={90}
                  unoptimized={image.id === 1}
                />

                {/* Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full p-4 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md hidden md:flex"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md hidden md:flex"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-[95vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.map(
                (image) =>
                  image.id === selectedImage && (
                    <Image
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                      quality={100}
                    />
                  )
              )}
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium">
              {galleryImages.findIndex((img) => img.id === selectedImage) + 1} /{" "}
              {galleryImages.length}
            </div>

            {/* Mobile Navigation Hint */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 md:hidden text-white/60 text-xs">
              Swipe or use arrows to navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
