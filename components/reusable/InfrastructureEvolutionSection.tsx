"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

interface TechItem {
  icon: string;
  title: string;
  description: string;
}

interface EvolutionStage {
  title: string;
  subtitle: string;
  imageSrc?: string;
  iconPath?: string;
  bgColor?: string;
  accentColor?: string;
  features: string[];
  featureColor?: string;
}

interface InfrastructureEvolutionSectionProps {
  title: string;
  subtitle?: string;
  description: ReactNode;
  evolutionStages?: EvolutionStage[];
  techStack: TechItem[];
  className?: string;
}

export default function InfrastructureEvolutionSection({
  title,
  subtitle,
  description,
  evolutionStages,
  techStack,
  className = "",
}: InfrastructureEvolutionSectionProps) {
  // Default evolution stages if not provided via props
  const defaultStages: EvolutionStage[] = [
    {
      title: "Traditional Hardware",
      subtitle: "Physical servers in data centers",
      iconPath:
        "M2 12h2v10H2V12zM6 7h2v15H6V7zm8 5h2v10h-2V12zm-4-2h2v12h-2V10zm8-5h2v15h-2V5zm4 5h2v10h-2V10z",
      bgColor: "#f1f5f9",
      accentColor: "#60a5fa",
      features: [
        "Physical hardware management",
        "Data center maintenance",
        "Manual scaling processes",
      ],
      featureColor: "bg-blue-500",
    },
    {
      title: "Cloud Infrastructure",
      subtitle: "Virtualized scalable resources",
      iconPath:
        "M6 19H5a2 2 0 01-2-2v-1a6 6 0 1111.832-1H16a5 5 0 000-10H5.2a2.562 2.562 0 00-2.333 1.553A1.562 1.562 0 004.07 10H3a4 4 0 118 0v1a3 3 0 01-3 3H8a2 2 0 01-2 2z",
      bgColor: "#eff6ff",
      accentColor: "#6366f1",
      features: [
        "Virtual machines & instances",
        "On-demand resource allocation",
        "Cloud provider management",
      ],
      featureColor: "bg-indigo-500",
    },
    {
      title: "Modern Management",
      subtitle: "Containers & orchestration",
      iconPath:
        "M4 8a1 1 0 011-1h14a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm1-5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z M9 13h6M9 17h6M9 9h6",
      bgColor: "#f5f3ff",
      accentColor: "#8b5cf6",
      features: [
        "Containerization technologies",
        "Orchestration platforms",
        "Infrastructure as Code",
      ],
      featureColor: "bg-purple-500",
    },
  ];

  // Use provided stages or fall back to defaults
  const stages = evolutionStages || defaultStages;

  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <div className="max-w-3xl mx-auto text-gray-600">{description}</div>
        </motion.div>

        {/* Evolution Visualization - New Modern Design */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    {stage.imageSrc ? (
                      <div className="relative h-[200px] rounded-xl overflow-hidden">
                        <Image
                          src={stage.imageSrc}
                          alt={stage.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder
                        title={stage.title}
                        subtitle={stage.subtitle}
                        height="200px"
                        bgColor={stage.bgColor}
                        accentColor={stage.accentColor}
                        iconPath={stage.iconPath}
                      />
                    )}
                  </div>
                  <div className="flex-grow bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {index === 0
                        ? "Legacy Infrastructure"
                        : index === 1
                          ? "Virtual Environments"
                          : "Container Ecosystems"}
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {stage.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${stage.featureColor} mr-2`}
                          ></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Arrow - Only show for first two stages */}
                {index < 2 && (
                  <div className="hidden md:block absolute -right-3 top-1/3 transform translate-x-1/2 z-10">
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                        style={{
                          background:
                            index === 0
                              ? "linear-gradient(to right, #60a5fa, #6366f1)"
                              : "linear-gradient(to right, #6366f1, #8b5cf6)",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center shadow-sm">
                      <Image
                        src={tech.icon}
                        alt={tech.title}
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                </div>
              </div>
              <div className="h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 mt-auto"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-300 via-indigo-500 to-purple-600 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
}
