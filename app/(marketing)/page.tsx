import { HeroSection } from "@/components/sections/hero-section";
import { EcosystemSection } from "@/components/sections/ecosystem-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { CTASection } from "@/components/sections/cta-section";
import { Newsletter } from "@/components/shared/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Newsletter />
    </>
  );
}

