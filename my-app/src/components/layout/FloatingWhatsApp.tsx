"use client";

import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-4 right-4 z-40 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_rgba(37,211,102,0.28)] transition-transform duration-300 hover:scale-[1.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:bottom-5 sm:right-5 md:bottom-auto md:right-6 md:top-1/2 md:h-14 md:w-14 md:-translate-y-1/2"
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-6 w-6 md:h-7 md:w-7 fill-current"
      >
        <path d="M19.11 17.21c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.15-.19.29-.74.92-.91 1.11-.17.2-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.49.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.35Z" />
        <path d="M27.26 4.73A15.83 15.83 0 0 0 16.02 0C7.2 0 .03 7.17.03 15.99c0 2.81.73 5.56 2.12 7.98L0 32l8.23-2.11a15.9 15.9 0 0 0 7.79 2h.01c8.82 0 15.99-7.17 15.99-15.99 0-4.27-1.66-8.28-4.76-11.17ZM16.02 29.2h-.01a13.2 13.2 0 0 1-6.72-1.84l-.48-.28-4.88 1.25 1.3-4.76-.31-.49A13.15 13.15 0 0 1 2.8 15.99c0-7.29 5.93-13.22 13.22-13.22 3.53 0 6.84 1.37 9.33 3.88a13.1 13.1 0 0 1 3.87 9.34c0 7.29-5.93 13.21-13.2 13.21Z" />
      </svg>
    </a>
  );
}
