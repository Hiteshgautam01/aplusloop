"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "@/app/(technology)/(solutions)/DigitalTransformationSolutions/components/Banner";
import ArtificialIntelligence from "@/app/(technology)/(solutions)/DigitalTransformationSolutions/components/ArtificialIntelligence";
import BlockchainWeb3 from "@/app/(technology)/(solutions)/DigitalTransformationSolutions/components/BlockChainWeb3";
import BusinessSoftwarePlatforms from "@/app/(technology)/(solutions)/DigitalTransformationSolutions/components/SoftwareSolution";
import { useScrollToSection } from "@/app/hooks/useScrollToSection";

const DigitalTransformationSolution: React.FC = () => {
  useScrollToSection();
  return (
    <div className="min-h-screen bg-slate-50 mt-16">
      <Banner />

      <div className=" mx-auto px-4 py-12 space-y-24">
        <div id="artificial-intelligence">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ArtificialIntelligence />
          </motion.div>
        </div>
        <div id="blockchain-web3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BlockchainWeb3 />
          </motion.div>
        </div>
        <div id="software-platforms">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* <SoftwarePlatforms /> */}
            <BusinessSoftwarePlatforms />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationSolution;
