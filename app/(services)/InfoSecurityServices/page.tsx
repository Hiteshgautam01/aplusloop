"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  ShieldAlert,
  Settings,
  Wrench,
  BarChart,
  FileText,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import Banner from "./components/Banner";
import RiskManagement from "./components/RiskManagement";
import DesignConsulting from "./components/DesignConsulting";
import PolicyWriting from "./components/PolicyWriting";
import RegulatoryCompliance from "./components/RegulatoryCompliance";

const InfoSecurityServices = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />
      <div className="container mx-auto px-4 py-16 space-y-32">
        <RiskManagement />
        <DesignConsulting />
        <PolicyWriting />
        <RegulatoryCompliance />
      </div>
    </main>
  );
};

export default InfoSecurityServices;
