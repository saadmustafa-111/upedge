"use client";

import { useState, useEffect } from "react";
import { HEADER_HEIGHT } from "@/lib/constants";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${HEADER_HEIGHT + 20}px 0px -60% 0px`,
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the first visible section
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    sections.forEach((section) => observer.observe(section));

    // Set initial active section
    if (sections.length > 0 && !activeSection) {
      setActiveSection(sections[0].id);
    }

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sectionIds, activeSection]);

  return activeSection;
}
