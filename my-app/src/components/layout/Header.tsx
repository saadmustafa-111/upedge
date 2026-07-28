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
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled ? "top-3" : "top-3"
        )}
      >
        <div className="container mx-auto px-2.5 py-3 sm:px-4">
          <div
            className={cn(
              "relative mx-auto flex max-w-[1400px] items-center justify-between gap-2 transition-all duration-500 sm:gap-3 md:gap-4",
              isScrolled ? "min-h-[4.1rem]" : "min-h-[4.5rem]"
            )}
          >
            <ScrollLink
              to="home"
              className="group flex min-w-0 flex-1 items-center gap-2 pr-[6.9rem] cursor-pointer sm:gap-2.5 sm:pr-[7.35rem] lg:pr-0"
            >
              <div
                className={cn(
                  "relative shrink-0 transition-all duration-500",
                  isScrolled ? "h-8 w-8 md:h-9 md:w-9" : "h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11"
                )}
              >
                <Image
                  src="/logo-mark-transparent.png"
                  alt="Upedge Technologies"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="min-w-0 flex flex-col gap-0.5">
                <span
                  className={cn(
                    "truncate font-semibold leading-none tracking-tight text-zinc-900 transition-all duration-500 dark:text-zinc-100",
                    isScrolled ? "max-w-[7.5rem] text-[0.82rem] min-[380px]:max-w-[8.8rem] min-[380px]:text-[0.84rem] sm:max-w-[13rem] sm:text-[0.95rem] md:max-w-none md:text-[0.95rem]" : "max-w-[8.5rem] text-[0.76rem] min-[380px]:max-w-[10.5rem] min-[380px]:text-[0.78rem] sm:max-w-[13rem] sm:text-[1rem] md:max-w-none md:text-lg lg:text-[1.22rem]"
                  )}
                >
                  <span className="min-[380px]:hidden">UpEdge</span>
                  <span className="hidden min-[380px]:inline sm:hidden">UpEdge Tech</span>
                  <span className="hidden sm:inline">{SITE_NAME}</span>
                </span>
              </div>
            </ScrollLink>

            <nav
              className={cn(
                "hidden lg:flex items-center gap-0.5 rounded-full transition-all duration-500",
                isScrolled
                  ? "border border-zinc-200 bg-white shadow-[0_10px_30px_rgba(18,18,18,0.06)] dark:border-zinc-800 dark:bg-black dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                  : "bg-white/95 shadow-none dark:bg-black/95",
                isScrolled ? "px-1.5 py-1.5" : "px-2 py-2"
              )}
            >
              {NAV_ITEMS.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  className={cn(
                    "relative rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-all duration-300 cursor-pointer whitespace-nowrap focus-ring",
                    isScrolled ? "md:px-3 md:py-2" : "md:px-3.5 md:py-2.5",
                    "hover:text-black dark:hover:text-white",
                    activeSection === item.id
                      ? isScrolled
                        ? "bg-zinc-100 text-zinc-950 shadow-[0_2px_8px_rgba(18,18,18,0.05)] dark:bg-zinc-900 dark:text-white"
                        : "text-zinc-900 dark:text-zinc-100"
                      : isScrolled
                        ? "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                        : "text-zinc-700 dark:text-zinc-200"
                  )}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </nav>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <ThemeToggle />

              <Button
                onClick={handleScrollToContact}
                className={cn(
                  "flex items-center gap-2 rounded-full font-semibold whitespace-nowrap cursor-pointer",
                  "bg-primary text-primary-foreground transition-all duration-300",
                  isScrolled ? "text-sm px-4 h-10" : "text-sm px-6 h-12"
                )}
              >
                <span>Request Site Survey</span>
              </Button>
            </div>

            <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-end gap-1.5 sm:gap-2 lg:hidden">
              <ThemeToggle />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-[0_8px_20px_rgba(18,18,18,0.06)] cursor-pointer transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-black dark:text-zinc-100 dark:hover:bg-zinc-900",
                      isScrolled && "shadow-[0_10px_24px_rgba(18,18,18,0.08)]"
                    )}
                  >
                    <Menu className="h-[1.05rem] w-[1.05rem]" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] border-border bg-card pt-20 sm:w-[380px]"
                >
                  <SheetHeader className="mb-6">
                    <SheetTitle className="flex items-center gap-3">
                      <div className="relative h-10 w-10 shrink-0">
                        <Image src="/logo-mark-transparent.png" alt="Upedge Technologies" fill className="object-contain" />
                      </div>
                      <span className="text-lg font-bold whitespace-nowrap">{SITE_NAME}</span>
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => (
                      <ScrollLink
                        key={item.id}
                        to={item.id}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer focus-ring",
                          activeSection === item.id
                            ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white"
                            : "text-zinc-900 hover:bg-muted dark:text-zinc-100"
                        )}
                      >
                        {item.label}
                      </ScrollLink>
                    ))}
                  </nav>

                  <Separator className="my-6" />

                  <div className="space-y-3">
                    <Button
                      onClick={(e) => {
                        handleScrollToContact(e);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full rounded-xl bg-primary text-primary-foreground font-semibold cursor-pointer"
                      size="lg"
                    >
                      Request Site Survey
                    </Button>
                    <Button variant="outline" className="w-full rounded-xl font-medium cursor-pointer" size="lg" asChild>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp for Quick Quote
                      </a>
                    </Button>
                  </div>

                  <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-zinc-800 dark:text-zinc-200" />
                      <span className="text-sm font-semibold">Service Areas</span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{SERVICE_AREAS.join(" • ")}</p>
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
