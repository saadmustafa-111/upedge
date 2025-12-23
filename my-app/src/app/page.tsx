import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { WhyUpedge } from "@/components/sections/WhyUpedge";
import { Blueprint } from "@/components/sections/Blueprint";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { Reviews } from "@/components/sections/Reviews";
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

      {/* Why Upedge Section */}
      <WhyUpedge />

      {/* Services Section */}
      <Services />

      {/* Packages Section */}
      <Packages />

      {/* Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <Faq />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

