"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import {
  Database,
  BarChart,
  Shield,
  HardDrive,
  Zap,
  Cloud,
  Plus,
  Minus,
  CheckCircle,
} from "lucide-react";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import SectionHeader from "@/components/reusable/SectionHeader";

const DataManagementServices = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const sections = [
    {
      title: "Data Governance & Quality Management",
      description:
        "Establishing strong data foundations by enforcing accuracy, consistency, and compliance. We help businesses implement governance frameworks and quality assurance protocols that drive trust, transparency, and regulatory alignment.",
      items: [
        "Data governance frameworks and policies",
        "Data lineage and lifecycle management",
        "Quality monitoring, validation, and cleansing",
        "Regulatory compliance (e.g., GDPR, UAE Data Law)",
      ],
    },
    {
      title: "Real-Time Data Processing & Edge Computing",
      description:
        "Accelerate decision-making with intelligent data flows from the edge to the cloud. We build robust data pipelines and integrate IoT and AI/ML systems to deliver insights when and where they matter most.",
      items: [
        "Real-time, high-frequency data ingestion",
        "IoT edge computing for reduced latency",
        "Edge-to-cloud synchronization",
        "Integration with AI/ML for real-time analytics",
        "Event-driven architecture and streaming data solutions",
      ],
    },
    {
      title: "Advanced Data Analytics & AI",
      description:
        "Harness the power of data science to unlock meaningful insights and predict future trends. Our solutions combine statistical modeling, machine learning, and business intelligence to drive data-informed decisions.",
      items: [
        "Predictive & prescriptive analytics",
        "AI/ML model development and deployment",
        "Business intelligence dashboards",
        "Sentiment, trend & pattern analysis",
      ],
    },
    {
      title: "Data Warehousing & System Integration",
      description:
        "We design modern, scalable data warehouse solutions and ensure seamless integration across platforms, enabling a unified view of your business operations.",
      items: [
        "Centralized cloud & hybrid data warehouses",
        "ETL/ELT pipeline development",
        "API-based and legacy system integration",
        "Scalable architecture for structured and unstructured data",
      ],
    },
    {
      title: "Data Security & Privacy",
      description:
        "Your data deserves airtight protection. We implement best-in-class security frameworks to safeguard sensitive information and ensure compliance with evolving global and local data privacy laws.",
      items: [
        "Role-based access controls",
        "Data masking & tokenization",
        "Encryption at rest and in transit",
        "Compliance with ISO, HIPAA, GDPR, and local UAE standards",
      ],
    },
  ];

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="relative pb-20 overflow-hidden">
      {/* Gradient Overlay */}

      <SectionHeader
        title="Data Management Services"
        description="Data is your most strategic asset. We deliver services in data governance, real-time processing (including IoT and edge computing), AI/ML-powered analytics, and cloud-based warehousing. Our integrated data solutions enhance accuracy, compliance, and decision-making in real time.
"
        icon={<Database className="w-8 h-8 " />}
        layout="stacked"
        titleSize="xl"
        badgeColor="bg-indigo-100 text-indigo-800"
        animation={true}
        blueBg={true}
      />

      {/* Interactive Expandable Sections */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 mt-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1E22AA] to-[#0047FF] bg-clip-text text-transparent">
            From Data Integrity to Real-Time Intelligence
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-4xl  opacity-90"
            style={{ color: "#1A1A4F" }}
          >
            We empower enterprises to transform raw data into strategic assets.
            Our holistic data management services ensure accuracy, agility, and
            intelligence at every stage—from governance and security to
            real-time processing and predictive analytics.
          </p>
        </motion.div>

        {/* Expandable Sections */}
        <div className="space-y-3">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-xl border border-transparent hover:border-[#0047FF]/20 transition-all duration-300 backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(245, 248, 255, 0.8)",
                boxShadow:
                  expandedSection === index
                    ? "0 8px 32px rgba(0, 71, 255, 0.15)"
                    : "0 2px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full p-5 text-left flex items-center justify-between group hover:bg-opacity-90 transition-all duration-300 rounded-xl"
                style={{
                  backgroundColor:
                    expandedSection === index
                      ? "rgba(224, 232, 255, 0.6)"
                      : "transparent",
                }}
              >
                <div className="flex-1 pr-4">
                  <h3
                    className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#0047FF] transition-colors duration-300"
                    style={{ color: "#1E22AA" }}
                  >
                    {section.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed opacity-80"
                    style={{ color: "#1A1A4F" }}
                  >
                    {section.description}
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: expandedSection === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-4 p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                  style={{
                    backgroundColor:
                      expandedSection === index
                        ? "rgba(0, 71, 255, 0.1)"
                        : "rgba(224, 232, 255, 0.5)",
                    boxShadow: "0 2px 8px rgba(0, 71, 255, 0.1)",
                  }}
                >
                  <Plus
                    className="w-5 h-5 transition-colors duration-300"
                    style={{
                      color: expandedSection === index ? "#0047FF" : "#1E22AA",
                    }}
                  />
                </motion.div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedSection === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                        {section.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: itemIndex * 0.05,
                            }}
                            className="flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 hover:shadow-sm"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.7)",
                              border: "1px solid rgba(224, 232, 255, 0.5)",
                            }}
                          >
                            <CheckCircle
                              className="w-4 h-4 mt-0.5 flex-shrink-0"
                              style={{ color: "#0047FF" }}
                            />
                            <span
                              className="text-sm md:text-base font-medium leading-relaxed"
                              style={{ color: "#1A1A4F" }}
                            >
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataManagementServices;
