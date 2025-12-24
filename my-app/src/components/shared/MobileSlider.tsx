"use client";

import { useCallback, useEffect, useState, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface MobileSliderProps {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
  showDots?: boolean;
  align?: "start" | "center" | "end";
  desktopGridClassName?: string;
}

export function MobileSlider({
  items,
  className,
  itemClassName,
  showDots = true,
  align = "start",
  desktopGridClassName = "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
}: MobileSliderProps) {
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align,
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    if (!emblaApi) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        emblaApi.scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        emblaApi.scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi]);

  // If desktop, render grid only
  if (isDesktop) {
    return (
      <div className={cn("grid", desktopGridClassName)}>
        {items}
      </div>
    );
  }

  // If mobile/tablet, render slider only
  return (
    <div className={cn(className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex-[0_0_85%] min-w-0",
                itemClassName,
                selectedIndex === index && !shouldReduceMotion && [
                  "transition-all duration-300",
                  "ring-2 ring-cyan-500/40 dark:ring-cyan-400/30",
                  "shadow-[0_0_24px_rgba(0,194,255,0.2)]",
                ]
              )}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-6" role="tablist">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "w-8 bg-gradient-to-r from-cyan-500 to-blue-500"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
              role="tab"
              aria-selected={selectedIndex === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
