"use client";

import React from "react";
import { motion } from "framer-motion";
import CompanyProfile from "@/components/About/CompanyProfile";
import VisionMission from "@/components/About/VisionMission";
import LeadershipTeam from "@/components/About/LeadershipTeam";
import CompanyValues from "@/components/About/CompanyValues";
import { Navbar } from "@/components/Navbar";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground mt-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-primary/5 py-16 mb-12"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-primary mx-auto mt-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-6 text-muted-foreground max-w-2xl mx-auto"
          >
            We're passionate about creating innovative solutions that transform
            how businesses operate in the digital landscape.
          </motion.p>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-8 space-y-24 mb-16">
        <CompanyProfile />
        <VisionMission />
        <LeadershipTeam />
        <CompanyValues />
      </div>
    </div>
  );
}
