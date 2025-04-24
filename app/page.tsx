"use client";

import { Navbar } from "@/components/Navbar";
import { BannerSlider } from "@/components/landing/HeroSection";
import { BusinessActivities } from "@/components/landing/BusinessActivities";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      <BannerSlider />
      <BusinessActivities />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
