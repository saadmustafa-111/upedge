"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ScrollLink } from "./ScrollLink";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NAV_ITEMS } from "@/lib/nav";
import {
  SITE_NAME,
  WHATSAPP_URL,
  SERVICE_AREAS,
  SCROLL_THRESHOLD,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);
  const isScrolled = useScrollPosition(SCROLL_THRESHOLD);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Floating Header with Separated Elements */}
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled ? "top-3" : "top-6"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[1400px] flex items-center justify-between gap-2 md:gap-4">
            
            {/* Logo - Outside glass */}
            <ScrollLink
              to="home"
              className="flex items-center gap-2 md:gap-2.5 group shrink-0 cursor-pointer"
            >
              <div className={cn(
                "relative overflow-hidden rounded-xl transition-all duration-500",
                isScrolled ? "w-7 h-7 md:w-8 md:h-8" : "w-9 h-9 md:w-10 md:h-10"
              )}>
                <Image
                  src="/upedge.png"
                  alt="Upedge Technologies"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className={cn(
                  "font-bold tracking-tight text-primary dark:text-white transition-all duration-500 group-hover:text-accent dark:group-hover:text-cyan-400 whitespace-nowrap drop-shadow-md",
                  isScrolled ? "text-xs md:text-sm" : "text-sm md:text-base lg:text-lg"
                )}>
                  {SITE_NAME}
                </span>
                <span className={cn(
                  "hidden lg:inline-flex text-[10px] font-medium px-2 py-0.5 rounded-full",
                  "bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
                  "border border-cyan-500/20 dark:border-cyan-500/20",
                  "transition-all duration-500",
                  isScrolled ? "opacity-0 h-0 py-0" : "opacity-100"
                )}>
                  Led by Specialists
                </span>
              </div>
            </ScrollLink>

            {/* Desktop Navigation - Glass Container */}
            <nav className={cn(
              "hidden lg:flex items-center gap-0.5 rounded-full backdrop-blur-2xl border-2 transition-all duration-500",
              "bg-white/60 dark:bg-slate-900/50 border-white/40 dark:border-white/15",
              "shadow-[0_4px_24px_rgba(0,194,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_24px_rgba(0,194,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)]",
              isScrolled ? "px-1 py-1" : "px-1.5 py-1.5"
            )}>
              {NAV_ITEMS.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  className={cn(
                    "relative px-2.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap",
                    "hover:text-foreground",
                    activeSection === item.id
                      ? "bg-white/90 dark:bg-slate-800/80 text-primary dark:text-cyan-400 shadow-[0_2px_8px_rgba(0,194,255,0.2)] backdrop-blur-xl"
                      : "text-muted-foreground hover:bg-white/50 dark:hover:bg-slate-800/40"
                  )}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </nav>

            {/* CTA Dock - Outside glass with spacing */}
            <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                {/* Theme Toggle */}
                <ThemeToggle />

                {/* WhatsApp Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-accent/10 hover:text-accent transition-all hidden sm:flex cursor-pointer"
                  asChild
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </Button>

                {/* Primary CTA */}
                <Button
                  onClick={handleScrollToContact}
                  className={cn(
                    "hidden md:flex items-center gap-2 rounded-full font-semibold whitespace-nowrap cursor-pointer",
                    "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
                    "text-white shadow-lg hover:shadow-xl transition-all duration-300",
                    isScrolled ? "text-xs px-3 h-9" : "text-sm px-5 h-10"
                  )}
                >
                  <span className="hidden lg:inline">Request Site Survey</span>
                  <span className="lg:hidden">Survey</span>
                </Button>

                {/* Mobile Menu Toggle */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-full hover:bg-accent/10 cursor-pointer"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[300px] sm:w-[380px] bg-card/95 backdrop-blur-xl border-border"
                  >
                    <SheetHeader className="mb-6">
                      <SheetTitle className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                          <Image
                            src="/upedge.png"
                            alt="Upedge Technologies"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-lg font-bold whitespace-nowrap">
                          {SITE_NAME}
                        </span>
                      </SheetTitle>
                    </SheetHeader>

                    <nav className="flex flex-col gap-1">
                      {NAV_ITEMS.map((item) => (
                        <ScrollLink
                          key={item.id}
                          to={item.id}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer",
                            activeSection === item.id
                              ? "bg-accent text-accent-foreground shadow-md"
                              : "text-foreground hover:bg-muted"
                          )}
                        >
                          {item.label}
                        </ScrollLink>
                      ))}
                    </nav>

                    <Separator className="my-6" />

                    {/* Mobile CTAs */}
                    <div className="space-y-3">
                      <Button
                        onClick={(e) => {
                          handleScrollToContact(e);
                          setMobileMenuOpen(false);
                        }}
                        className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold shadow-lg cursor-pointer"
                        size="lg"
                      >
                        Request Site Survey
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full rounded-xl font-medium cursor-pointer"
                        size="lg"
                        asChild
                      >
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp for Quick Quote
                        </a>
                      </Button>
                    </div>

                    {/* Service Areas */}
                    <div className="mt-6 p-4 rounded-xl bg-muted/50">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="text-sm font-semibold">
                          Service Areas
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {SERVICE_AREAS.join(" • ")}
                      </p>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
      </header>
    </>
  );
}

