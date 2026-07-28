"use client";

import { useCallback, useEffect, useState, useRef, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface DeckSliderProps {
  slides: ReactNode[];
  className?: string;
  slideClassName?: string;
  showProgress?: boolean;
  desktopGridClassName?: string;
}

export function DeckSlider({
  slides,
  className,
  slideClassName,
  showProgress = true,
  desktopGridClassName = "grid lg:grid-cols-3 gap-6 lg:gap-8",
}: DeckSliderProps) {
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [dragProgress, setDragProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Track drag for tilt effect
  const onScroll = useCallback(() => {
    if (!emblaApi || shouldReduceMotion) return;
    
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    
    setDragProgress(scrollProgress);
  }, [emblaApi, shouldReduceMotion]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("scroll", onScroll);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [emblaApi, onSelect, onScroll]);

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

  // Desktop: render clean grid
  if (isDesktop) {
    return (
      <div className={cn("grid", desktopGridClassName)}>
        {slides.map((slide, index) => (
          <div key={index} className="deck-card-desktop">
            {slide}
          </div>
        ))}
      </div>
    );
  }

  // Mobile: render premium deck slider
  const progress = scrollSnaps.length > 0 
    ? ((selectedIndex + 1) / scrollSnaps.length) * 100 
    : 0;

  return (
    <div className={cn("relative", className)}>
      {/* Grab Handle (optional visual cue) */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-1 rounded-full bg-muted-foreground/20" />
      </div>

      {/* Edge Fade Masks */}
      {/* Embla Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex flex-nowrap gap-4 touch-pan-y">
          {slides.map((slide, index) => {
            const isActive = index === selectedIndex;
            const distance = Math.abs(index - selectedIndex);
            
            // Calculate tilt based on drag (only if not reduced motion)
            let tiltDeg = 0;
            if (!shouldReduceMotion && isActive && emblaApi) {
              const scrollProgress = emblaApi.scrollProgress();
              const slideProgress = (scrollProgress - (index / scrollSnaps.length)) * scrollSnaps.length;
              tiltDeg = Math.max(-2, Math.min(2, slideProgress * -15));
            }

            return (
              <div
                key={index}
                className={cn(
                  "flex-[0_0_86%] sm:flex-[0_0_70%] min-w-0",
                  "transition-all duration-300 ease-out",
                  slideClassName
                )}
                style={{
                  transform: shouldReduceMotion 
                    ? undefined 
                    : `scale(${isActive ? 1 : 0.96}) rotateZ(${tiltDeg}deg)`,
                  opacity: distance > 1 ? 0.4 : isActive ? 1 : 0.7,
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slides.length}`}
              >
                {/* Card wrapper with premium styling */}
                <div
                  className={cn(
                    "relative h-full rounded-3xl overflow-hidden",
                    "bg-card",
                    "transition-shadow duration-300",
                    isActive && !shouldReduceMotion && [
                      "shadow-[0_18px_38px_rgba(18,18,18,0.08)]",
                      "dark:shadow-[0_18px_38px_rgba(0,0,0,0.24)]",
                    ],
                    !isActive && "shadow-lg"
                  )}
                >
                  {/* Card content */}
                  {slide}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Bar */}
      {showProgress && scrollSnaps.length > 1 && (
        <div className="mt-6 max-w-xs mx-auto">
          <div className="relative h-1 bg-muted/30 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-center mt-2">
            <span className="text-xs text-muted-foreground font-medium">
              {selectedIndex + 1} / {scrollSnaps.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
