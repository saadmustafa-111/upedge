import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/StructuredData";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://upedgetechnologies.shop'),
  title: {
    default: "UpEdge Technologies | Security, CCTV & Networking Solutions in Pakistan",
    template: "%s | UpEdge Technologies"
  },
  description: "UpEdge Technologies provides premium Security & Surveillance (CCTV), Networking Solutions, and Solar Energy systems across Pakistan. Professional security cameras installer in Abbottabad, Islamabad, Lahore, Rawalpindi, Karachi & major cities. Expert installation, maintenance, and support for homes and businesses.",
  keywords: [
    "UpEdge Technologies",
    "upedgetechnologies",
    "CCTV installation Pakistan",
    "security cameras Pakistan",
    "surveillance systems",
    "networking solutions Pakistan",
    "solar energy Pakistan",
    "IP cameras",
    "access control systems",
    "structured cabling",
    "network security",
    "solar panels Pakistan",
    "security solutions Lahore",
    "CCTV Lahore",
    "networking Lahore",
    // Abbottabad specific keywords
    "security cameras installer Abbottabad",
    "CCTV installation Abbottabad",
    "networking solutions Abbottabad",
    "solar panels Abbottabad",
    // Other major cities
    "security cameras Islamabad",
    "CCTV Islamabad",
    "security cameras Rawalpindi",
    "CCTV Rawalpindi",
    "security cameras Karachi",
    "networking Karachi",
    "security cameras Peshawar",
    "CCTV Peshawar",
    "security cameras Faisalabad",
    "security cameras Multan",
    // Service-specific city combinations
    "CCTV camera installation services Pakistan",
    "professional security camera installer",
    "best CCTV company Pakistan",
    "networking and cabling services Pakistan"
  ],
  authors: [{ name: "UpEdge Technologies" }],
  creator: "UpEdge Technologies",
  publisher: "UpEdge Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://upedgetechnologies.shop',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://upedgetechnologies.shop',
    siteName: 'UpEdge Technologies',
    title: 'UpEdge Technologies | Security, CCTV & Networking Solutions in Pakistan',
    description: 'Premium Security & Surveillance (CCTV), Networking Solutions, and Solar Energy systems in Pakistan. Expert installation, maintenance, and support.',
    images: [
      {
        url: '/upedge.png',
        width: 1200,
        height: 630,
        alt: 'UpEdge Technologies - Security & Networking Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UpEdge Technologies | Security, CCTV & Networking Solutions',
    description: 'Premium Security & Surveillance (CCTV), Networking Solutions, and Solar Energy systems in Pakistan.',
    images: ['/upedge.png'],
    creator: '@upedgetech',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'd78fbfd6c3df97aa',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DEXSPE7EQX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DEXSPE7EQX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <StructuredData />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="upedge-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
