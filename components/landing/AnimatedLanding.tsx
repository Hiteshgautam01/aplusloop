"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BannerSlider } from "./HeroSection";
import ValuePropositionSection from "./ValuePropositionSection";
import SolutionsSection from "./SolutionsSection";
import WhyChooseSection from "./WhyChooseSection";
import SuccessStoriesSection from "./SuccessStoriesSection";
import TechnologyStackSection from "./TechnologyStackSection";
import InnovationHubSection from "./InnovationHubSection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";
import { getLandingPage } from "@/sanity/queries/landing";
import { LandingPage } from "@/sanity/schemaTypes/type";
import { defaultTransition } from "./animations";

export default function AnimatedLanding() {
  const [landingPage, setLandingPage] = useState<LandingPage | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLandingPage();
      setLandingPage(data);
    };
    fetchData();
  }, []);

  if (!landingPage) {
    return null; // or a loading spinner
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={defaultTransition}
    >
      <BannerSlider data={landingPage.bannerSlider} />
      <ValuePropositionSection />
      <SolutionsSection />
      <WhyChooseSection />
      <SuccessStoriesSection />
      <TechnologyStackSection />
      <InnovationHubSection />
      <CtaSection />
      <Footer />
    </motion.div>
  );
} 