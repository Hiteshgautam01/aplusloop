// app/careers/page.tsx
"use client";

import React, { useRef } from "react";
import Banner from "@/components/Career/Banner";
import NavMenu from "@/components/Career/NavMenu";
import AboutSection from "@/components/Career/AboutSection";
import CultureSection from "@/components/Career/CultureSection";
import BenefitsSection from "@/components/Career/BenefitsSection";
import TeamSection from "@/components/Career/TeamSection";
import LifeSection from "@/components/Career/LifeSection";
import OpportunitiesSection from "@/components/Career/OpportunitiesSedtion";

export default function CareersPage() {
  // Create refs for each section for smooth scrolling
  const aboutRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const opportunitiesRef = useRef<HTMLDivElement>(null);

  // Function to scroll to specific section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sections data for navigation
  const sections = [
    { name: "About Aplus Loop", ref: aboutRef },
    { name: "Our Culture", ref: cultureRef },
    { name: "Benefits", ref: benefitsRef },
    { name: "Career Opportunities", ref: opportunitiesRef },
  ];

  return (
    <main className="bg-white">
      <Banner />
      <NavMenu sections={sections} scrollToSection={scrollToSection} />
      
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      
      <div ref={cultureRef}>
        <CultureSection />
      </div>
      
      <div ref={benefitsRef}>
        <BenefitsSection />
      </div>
      
      <TeamSection />
      
      {/* <LifeSection /> */}
      
      <div ref={opportunitiesRef}>
        <OpportunitiesSection />
      </div>
    </main>
  );
}