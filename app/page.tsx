// app/page.tsx
import { Navbar } from "@/components/Navbar";
import { BannerSlider } from "@/components/landing/HeroSection";
import { BusinessActivities } from "@/components/landing/BusinessActivities";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";
import { getLandingPage } from "@/sanity/queries/landing";
import { ContactButtonModal } from "@/components/landing/ContactButtonModal";

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function Home() {
  const landingData: any = await getLandingPage();
  
  return (
    <main className="min-h-screen relative overflow-hidden">
      {landingData.bannerSlider && <BannerSlider data={landingData.bannerSlider} />}
      <BusinessActivities />
      <ServicesSection />
      <CtaSection />
      <ContactButtonModal />
    </main>
  );
}