import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import Benefits from "@/components/home/Benefits";
import Newsletter from "@/components/home/Newsletter";
import ProductGrid from "@/components/home/ProductGrid";
import FAQ from "@/components/home/FAQ";
import ContactPreview from "@/components/home/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Benefits />
      <Newsletter />
      <ProductGrid />
      <FAQ />
      <ContactPreview />
    </>
  );
}
