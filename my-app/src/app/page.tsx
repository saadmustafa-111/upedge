import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { Blueprint } from "@/components/sections/Blueprint";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUpedge } from "@/components/sections/WhyUpedge";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

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

      {/* FAQ Section */}
      <Faq />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

