import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Upedge Technologies | Premium Tech Solutions",
  description: "Innovative technology solutions for modern businesses. Premium services, expert team, proven results.",
  icons: {
    icon: '/upedge.png',
    apple: '/upedge.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
