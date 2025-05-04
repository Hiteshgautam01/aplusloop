"use client";

import Banner from "@/app/(services)/InfoSecurityServices/components/Banner";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import InfrastructureEvolutionSection from "@/components/reusable/InfrastructureEvolutionSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BusinessInfrastructureSolutions = () => {
  // Icon paths for SVG placeholders
  const wmsIconPath =
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01";
  const oesIconPath =
    "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2";

  const techStackData = [
    {
      icon: "/icon-cis.svg",
      title: "Cloud Infrastructure Services (CIS)",
      description:
        "Scalable, secure, and managed infrastructure services that provide the foundation for your enterprise applications.",
    },
    {
      icon: "/icon-cmp.svg",
      title: "Cloud Management Platform (CMP)",
      description:
        "Unified interface to manage multi-cloud environments with governance, automation, and optimization capabilities.",
    },
    {
      icon: "/icon-iaas.svg",
      title: "Infrastructure as a Service (IaaS)",
      description:
        "On-demand computing resources delivered via the cloud with flexible scaling and pay-as-you-go pricing.",
    },
    {
      icon: "/icon-iac.svg",
      title: "Infrastructure as Code (IaC)",
      description:
        "Managing infrastructure through code for consistent, version-controlled deployment and scaling.",
    },
    {
      icon: "/icon-middleware.svg",
      title: "Middleware & Event Broker",
      description:
        "Integration technologies that enable seamless communication between applications and services.",
    },
  ];

  return (
    <div>
      <Banner
        // imageSrc="/.jpg"
        title="Business Infrastructure Solutions"
        subtitle="Building resilient and scalable business infrastructure to support your growth and innovation"
        // overlayType="glass"
        layout="center"
        height="650px"
        badge="EXPERTISE"
        titleClassName="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800"
        subtitleClassName="mt-6 text-xl md:text-2xl font-light max-w-3xl text-slate-700"
        ctaButtons={[
          {
            text: "Explore Services",
            variant: "primary",
            className: "bg-blue-600 text-white hover:bg-blue-700",
          },
          {
            text: "Contact Us",
            variant: "outline",
            className:
              "text-slate-800 border-slate-800 hover:bg-slate-800 hover:text-white",
          },
        ]}
      />

      <div className="py- bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="pt-10 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <motion.span
                  className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  SOLUTIONS PORTFOLIO
                </motion.span>

                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Enterprise Applications
                </motion.h2>

                <motion.div
                  className="w-24 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                />

                <motion.p
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Comprehensive enterprise solutions designed to streamline
                  operations, enhance workforce management, and drive
                  organizational efficiency
                </motion.p>
              </div>
            </div>
          </div>
          {/* Rest of your content remains the same */}
          {/* Workforce Management Solution */}
          <ImageTextSection
            imageSrc="/workforce-management.jpg"
            imageAlt="Workforce Management Solution"
            imagePosition="right"
            title="Workforce Management Solution (WMS)"
            badge="ENTERPRISE APPLICATION"
            content={
              <>
                <p>
                  Organizations struggle to manage workforce operations
                  efficiently, facing challenges with payroll processing,
                  recruitment, and compliance.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                  Relevant Services:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Application Services:</span>{" "}
                    Implementation and integration of HRMS platforms.
                  </li>
                  <li>
                    <span className="font-medium">
                      Strategic Advisory Services:
                    </span>{" "}
                    Development of workforce optimization strategies.
                  </li>
                  <li>
                    <span className="font-medium">
                      Business Process Improvement Services:
                    </span>{" "}
                    Redesigning HR processes for efficiency.
                  </li>
                </ul>

                <div className="pl-4 border-l-2 border-blue-200 my-6">
                  <p className="font-medium text-gray-700">
                    Deploying and optimizing HRMS platforms to streamline
                    payroll, recruitment, and compliance processes, backed by
                    strategic planning and process redesign.
                  </p>
                </div>
              </>
            }
            customImage={
              <ImagePlaceholder
                title="Workforce Management"
                subtitle="HRMS, Recruitment, and Compliance"
                height="100%"
                bgColor="#dbeafe"
                accentColor="#3b82f6"
                iconPath={wmsIconPath}
              />
            }
          />
          {/* Operational Efficiency Solution */}
          <ImageTextSection
            imageSrc="/operational-efficiency.jpg"
            imageAlt="Operational Efficiency Solution"
            imagePosition="left"
            title="Operational Efficiency Solution (OES)"
            badge="ENTERPRISE APPLICATION"
            content={
              <>
                <p>
                  Fragmented business operations hinder productivity and
                  increase costs in areas such as finance, procurement, and
                  supply chain.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                  Relevant Services:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Application Services:</span>{" "}
                    Implementation of ERP systems.
                  </li>
                  <li>
                    <span className="font-medium">Automation Services:</span>{" "}
                    Process automation for operational tasks.
                  </li>
                  <li>
                    <span className="font-medium">
                      Strategic Advisory Services:
                    </span>{" "}
                    Roadmap development for process optimization.
                  </li>
                </ul>

                <div className="pl-4 border-l-2 border-blue-200 my-6">
                  <p className="font-medium text-gray-700">
                    Centralizing operations using ERP systems and automating key
                    processes to improve efficiency and reduce costs.
                  </p>
                </div>
              </>
            }
            customImage={
              <ImagePlaceholder
                title="Operational Efficiency"
                subtitle="ERP Systems and Process Automation"
                height="100%"
                bgColor="#ecfdf5"
                accentColor="#10b981"
                iconPath={oesIconPath}
              />
            }
            className="mt-20"
          />
        </div>
      </div>

      {/* Infrastructure Solutions Section */}
      <div className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <InfrastructureEvolutionSection
            title="Infrastructure Solutions"
            subtitle="Modern infrastructure services for the evolving technology landscape"
            description={
              <>
                <p className="mb-4">
                  The tech industry has evolved beyond traditional hardware,
                  embracing cloud technologies and modern infrastructure
                  management tools to handle diverse workloads with greater
                  efficiency and flexibility.
                </p>
                <p>
                  Our infrastructure solutions provide the foundation for your
                  digital transformation, offering seamless integration of
                  virtual machines, containers, and cloud services with
                  automated deployment and management capabilities.
                </p>
              </>
            }
            techStack={techStackData}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessInfrastructureSolutions;
