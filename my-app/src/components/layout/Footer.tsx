"use client";

import Image from "next/image";
import { ScrollLink } from "./ScrollLink";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  ADDRESS,
  EMAIL,
  FACEBOOK_PAGE,
  GOOGLE_BUSINESS_NAME,
  PHONE_DISPLAY_PRIMARY,
  PHONE_DISPLAY_SECONDARY,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  SERVICE_AREAS,
  WHATSAPP_URL,
} from "@/lib/constants";
import { NAV_ITEMS } from "@/lib/nav";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-x-clip border-t border-zinc-800 bg-zinc-950 pt-14 pb-8 text-white sm:pt-16 sm:pb-10 dark:border-zinc-300 dark:bg-zinc-100 dark:text-black">
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-10 sm:space-y-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-5 lg:pr-6">
              <div>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11">
                    <Image
                      src="/logo-mark-transparent.png"
                      alt="UpEdge Technologies"
                      fill
                      className="object-contain"
                      sizes="44px"
                    />
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-white dark:text-zinc-950">
                    UpEdge Technologies
                  </p>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-white dark:text-zinc-950">
                  Security, surveillance, networking, access control, and digital systems under one team.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-zinc-300 dark:text-zinc-700">
                Consultations, site surveys, installations, support, and business software solutions for homes, shops, offices, warehouses, and institutions.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] max-w-full items-center justify-start gap-3 rounded-[14px] border border-zinc-700 bg-zinc-900 px-[18px] py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:border-zinc-300 dark:bg-white dark:text-black dark:hover:bg-zinc-50"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-white dark:text-black" />
                  <span className="min-w-0 break-words">WhatsApp for Quick Quote</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex min-h-[52px] max-w-full items-center justify-start gap-3 rounded-[14px] border border-zinc-700 bg-zinc-900 px-[18px] py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:border-zinc-300 dark:bg-white dark:text-black dark:hover:bg-zinc-50"
                >
                  <Mail className="h-4 w-4 shrink-0 text-white dark:text-black" />
                  <span className="min-w-0 break-all text-[0.92rem] sm:text-sm">{EMAIL}</span>
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2 lg:pl-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white dark:text-zinc-950">
                  Explore
                </h3>
                <div className="mt-4 grid gap-3 sm:gap-2.5">
                  {NAV_ITEMS.map((item) => (
                    <ScrollLink
                      key={item.id}
                      to={item.id}
                      className="text-sm font-medium text-zinc-300 transition hover:text-white dark:text-zinc-700 dark:hover:text-black"
                    >
                      {item.label}
                    </ScrollLink>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white dark:text-zinc-950">
                  Contact
                </h3>
                <div className="mt-4 grid gap-3 text-sm text-zinc-300 dark:text-zinc-700">
                  <a href={`tel:${PHONE_PRIMARY}`} className="flex items-start gap-3 transition hover:text-white dark:hover:text-black">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-zinc-300 dark:text-zinc-700" />
                    <span>{PHONE_DISPLAY_PRIMARY}</span>
                  </a>
                  <a href={`tel:${PHONE_SECONDARY}`} className="flex items-start gap-3 transition hover:text-white dark:hover:text-black">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-zinc-300 dark:text-zinc-700" />
                    <span>{PHONE_DISPLAY_SECONDARY}</span>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex min-w-0 items-start gap-3 transition hover:text-white dark:hover:text-black">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-zinc-300 dark:text-zinc-700" />
                    <span className="min-w-0 break-all">{EMAIL}</span>
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 transition hover:text-white dark:hover:text-black"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-300 dark:text-zinc-700" />
                    <span className="min-w-0 break-words">{ADDRESS}</span>
                  </a>
                  <a
                    href={`https://facebook.com/${FACEBOOK_PAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition break-all hover:text-white dark:hover:text-black"
                  >
                    @{FACEBOOK_PAGE}
                  </a>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(GOOGLE_BUSINESS_NAME)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white dark:hover:text-black"
                  >
                    {GOOGLE_BUSINESS_NAME}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-zinc-800 bg-zinc-900 p-6 sm:p-8 dark:border-zinc-300 dark:bg-white">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <div className="min-w-0">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white dark:text-zinc-950">
                  Service Coverage
                </h3>
                <p className="mt-4 max-w-full break-words text-sm leading-7 text-zinc-300 dark:text-zinc-700">
                  Serving {SERVICE_AREAS.join(", ")} and nearby areas with tailored recommendations for security, networking, access control, and retail software systems.
                </p>
              </div>
              <div className="min-w-0 overflow-hidden">
                <BrandStrip variant="compact" showTitle={true} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-zinc-800 pt-6 text-sm text-zinc-400 dark:border-zinc-300 dark:text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <div>© {currentYear} {SITE_NAME}. All rights reserved.</div>
            <div
              className={cn(
                "flex flex-wrap items-center gap-1 text-xs sm:text-sm sm:justify-end"
              )}
            >
              <span>Site developed by:</span>
              <span className="font-semibold text-white dark:text-zinc-950">
                UpEdge Technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
