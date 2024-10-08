import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";



export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoTicker />

      <section id="features">
        <Features />
      </section>

      <ProductShowcase />

      <section id="faq">
        <FAQs />
      </section>

      <section id="pricing">
      <Pricing/>
      </section>

      </div>
      <Footer />
    </>
  );
}