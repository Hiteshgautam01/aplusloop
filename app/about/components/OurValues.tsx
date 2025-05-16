"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Zap,
  Shield,
  Users,
  Award,
  Target,
  Leaf,
} from "lucide-react";

const OurValues = () => {
  // Values data
  const values = [
    {
      title: "Innovation",
      description:
        "We thrive on creative problem-solving and pioneering technologies to deliver future-ready solutions.",
      icon: <Lightbulb className="w-7 h-7" />,
      color: "blue",
      delay: 0.1,
    },
    {
      title: "Commitment",
      description:
        "We are dedicated to our clients' success and follow through on our promises with passion and accountability.",
      icon: <Zap className="w-7 h-7" />,
      color: "indigo",
      delay: 0.2,
    },
    {
      title: "Integrity",
      description:
        "We act with transparency, ethics, and responsibility—earning trust every step of the way.",
      icon: <Shield className="w-7 h-7" />,
      color: "blue",
      delay: 0.3,
    },
    {
      title: "Collaboration",
      description:
        "We believe in growing together—our team, our clients, and our community.",
      icon: <Users className="w-7 h-7" />,
      color: "indigo",
      delay: 0.4,
    },
    {
      title: "Excellence",
      description:
        "From strategy to execution, we aim for A+ standards in everything we do.",
      icon: <Award className="w-7 h-7" />,
      color: "blue",
      delay: 0.5,
    },
    {
      title: "Customer Centricity",
      description:
        "Every decision we make starts and ends with delivering long-term value to our clients.",
      icon: <Target className="w-7 h-7" />,
      color: "indigo",
      delay: 0.6,
    },
    {
      title: "Sustainability",
      description:
        "We design solutions with future growth in mind—balancing performance with purpose.",
      icon: <Leaf className="w-7 h-7" />,
      color: "blue",
      delay: 0.7,
      featured: true,
    },
  ];

  // Get appropriate colors based on the color prop
  const getColors = (color: string) => {
    const colors = {
      blue: {
        bgLight: "bg-blue-50",
        bgMedium: "bg-blue-100",
        bgDark: "bg-blue-600",
        bgGradient: "from-blue-500 to-blue-600",
        textLight: "text-blue-600",
        textDark: "text-blue-700",
        border: "border-blue-100",
        shadow: "shadow-blue-100/50",
      },
      indigo: {
        bgLight: "bg-indigo-50",
        bgMedium: "bg-indigo-100",
        bgDark: "bg-indigo-600",
        bgGradient: "from-indigo-500 to-indigo-600",
        textLight: "text-indigo-600",
        textDark: "text-indigo-700",
        border: "border-indigo-100",
        shadow: "shadow-indigo-100/50",
      },
    };

    return colors[color as keyof typeof colors];
  };

  // Card container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute -right-40 top-40 w-96 h-96 rounded-full bg-blue-100/20 blur-3xl"></div>
      <div className="absolute -left-40 bottom-40 w-96 h-96 rounded-full bg-indigo-100/20 blur-3xl"></div>

      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 border border-blue-300/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-indigo-300/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-blue-300/30 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with enhanced animations */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-sm font-medium text-indigo-700 inline-block backdrop-blur-sm">
              Core Principles
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-5"
          >
            Our Values
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed"
          >
            The principles that guide everything we do
          </motion.p>
        </div>

        {/* Values Grid - Enhanced with staggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {values.map((value, index) => {
            const colors = getColors(value.color);
            const isLast = index === values.length - 1;
            const gridClass = value.featured
              ? "md:col-span-2 lg:col-span-3"
              : "";

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group ${gridClass}`}
              >
                {value.featured ? (
                  // Featured Value Card (Sustainability) - Enhanced design
                  <div className="relative overflow-hidden rounded-3xl shadow-xl border border-blue-100/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-indigo-50/90"></div>

                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute -right-12 -top-12 w-40 h-40 border border-blue-400 rounded-full"></div>
                      <div className="absolute -left-12 -bottom-12 w-40 h-40 border border-indigo-400 rounded-full"></div>
                    </div>

                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

                    <div className="relative p-10 md:p-12">
                      <div className="md:flex items-center gap-12">
                        <motion.div
                          whileHover={{
                            scale: 1.05,
                            boxShadow:
                              "0 20px 40px -15px rgba(79, 70, 229, 0.3)",
                            transition: { duration: 0.3 },
                          }}
                          className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-8 md:mb-0 text-white shadow-lg mx-auto md:mx-0 backdrop-blur-md"
                        >
                          <Leaf className="w-10 h-10" />
                        </motion.div>

                        <div className="md:flex-1">
                          <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                              {value.title}
                            </h3>

                            <p className="text-lg text-gray-600 leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Standard Value Card with enhanced design and interactions
                  <div className="h-full">
                    <motion.div
                      whileHover={{
                        y: -8,
                        boxShadow: "0 20px 40px -15px rgba(79, 70, 229, 0.15)",
                        transition: { duration: 0.3 },
                      }}
                      className="h-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 overflow-hidden relative flex flex-col group-hover:border-blue-100 transition-colors duration-300"
                    >
                      {/* Top Border Gradient */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bgGradient} transition-all duration-300 transform origin-left group-hover:scale-x-110`}
                      ></div>

                      <div className="flex-1 p-8 md:p-10">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                          <div
                            className={`w-14 h-14 ${colors.bgLight} rounded-2xl flex items-center justify-center ${colors.textDark} shadow-sm group-hover:scale-105 transition-all duration-300`}
                          >
                            {value.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors tracking-tight">
                            {value.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                          {value.description}
                        </p>
                      </div>

                      {/* Corner decoration */}
                      <div className="absolute bottom-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity">
                        <div
                          className={`w-8 h-8 ${colors.bgLight} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div
                            className={`w-4 h-4 ${colors.bgDark} rounded-full opacity-30 group-hover:opacity-60 transition-opacity`}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;
