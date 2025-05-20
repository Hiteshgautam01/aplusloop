import HeroSection from "@/components/reusable/HeroSection";
import StartingSection from "./components/StartingSection";
import React from "react";
import BrandingServices from "./components/BrandingServices";
import Banner from "./components/Banner";

const BrandingAndCreative = () => {
  return (
    <div className="mt-16">
      <Banner />
      <StartingSection />
      <BrandingServices />
    </div>
  );
};

export default BrandingAndCreative;
