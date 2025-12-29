import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { Blueprint } from "@/components/sections/Blueprint";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUpedge } from "@/components/sections/WhyUpedge";
import { DigitalSolutions } from "@/components/sections/DigitalSolutions";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "UpEdge Technologies | Security, CCTV & Networking Solutions in Pakistan",
  description: "Leading provider of Security & Surveillance (CCTV), Networking Solutions, and Solar Energy systems in Pakistan. Professional security cameras installer in Abbottabad, Islamabad, Lahore, Karachi & major cities. Expert installation, maintenance, and 24/7 support for homes and businesses.",
  openGraph: {
    title: "UpEdge Technologies | Security, CCTV & Networking Solutions in Pakistan",
    description: "Professional security cameras installer in Abbottabad, Islamabad, Lahore & across Pakistan. Leading provider of CCTV, Networking Solutions, and Solar Energy systems.",
    url: "https://upedgetechnologies.shop",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Solutions Section */}
      <Solutions />

      {/* Blueprint Section */}
      <Blueprint />

      {/* Services Section */}
      <Services />

      {/* Packages Section */}
      <Packages />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Upedge Section */}
      <WhyUpedge />

      {/* Digital Solutions Section */}
      <DigitalSolutions />

      {/* FAQ Section */}
      <Faq />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

