import HeroSection from "@/components/reusable/HeroSection";
import React from "react";
import Cmes from "./components/Cmes";
import Pfps from "./components/Pfps";
import Ptos from "./components/Ptos";

const MobilitySolutions = () => {
  return (
    <div className="mt-16">
      {/* <HeroSection
        tagText="Mobility Solutions"
        tagBgColor="bg-blue-500/20"
        tagTextColor="text-blue-200"
        heading="Mobility Solutions"
        subheading="Transforming mobility with real-time data and intelligent automation"
        description="Our Mobility Solutions connect your physical and digital worlds, creating a seamless ecosystem of data-driven intelligence for manufacturing, utilities, and industrial applications."
        dividerColor="bg-blue-500"
        bgGradient="bg-gradient-to-br from-slate-900 to-blue-900"
        descriptionColor="text-blue-200"
          /> */}
          <Ptos />
          <Cmes />
          <Pfps />
    </div>
  );
};

export default MobilitySolutions;
