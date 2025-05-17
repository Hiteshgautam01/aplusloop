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
  ArrowRight,
  Sparkles
} from "lucide-react";

const OurValues = () => {
  // Values data - removed height property to make all cards the same height
  const values = [
    {
      title: "Innovation",
      description: "We thrive on creative problem-solving and pioneering technologies to deliver future-ready solutions.",
      icon: <Lightbulb className="w-7 h-7" />,
      color: "blue",
    },
    {
      title: "Commitment",
      description: "We are dedicated to our clients' success and follow through on our promises with passion and accountability.",
      icon: <Zap className="w-7 h-7" />,
      color: "indigo",
    },
    {
      title: "Integrity",
      description: "We act with transparency, ethics, and responsibility—earning trust every step of the way.",
      icon: <Shield className="w-7 h-7" />,
      color: "purple",
    },
    {
      title: "Collaboration",
      description: "We believe in growing together—our team, our clients, and our community.",
      icon: <Users className="w-7 h-7" />,
      color: "cyan",
    },
    {
      title: "Excellence",
      description: "From strategy to execution, we aim for A+ standards in everything we do.",
      icon: <Award className="w-7 h-7" />,
      color: "blue",
    },
    {
      title: "Customer Centricity",
      description: "Every decision we make starts and ends with delivering long-term value to our clients.",
      icon: <Target className="w-7 h-7" />,
      color: "indigo",
    },
    {
      title: "Sustainability",
      description: "We design solutions with future growth in mind—balancing performance with purpose.",
      icon: <Leaf className="w-7 h-7" />,
      color: "green",
    },
  ];

  // Get appropriate colors and gradients based on the color prop
  const getColors = (color: string) => {
    const colors = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        softGradient: "from-blue-50 via-blue-50 to-white",
        accentGradient: "from-blue-500/10 via-blue-400/5 to-transparent",
        bg: "bg-blue-500",
        light: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-100",
        shadow: "shadow-blue-500/10",
        icon: "text-blue-600",
      },
      indigo: {
        gradient: "from-indigo-500 to-indigo-600",
        softGradient: "from-indigo-50 via-indigo-50 to-white",
        accentGradient: "from-indigo-500/10 via-indigo-400/5 to-transparent",
        bg: "bg-indigo-500",
        light: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-100",
        shadow: "shadow-indigo-500/10",
        icon: "text-indigo-600",
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        softGradient: "from-purple-50 via-purple-50 to-white",
        accentGradient: "from-purple-500/10 via-purple-400/5 to-transparent",
        bg: "bg-purple-500",
        light: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-100",
        shadow: "shadow-purple-500/10",
        icon: "text-purple-600",
      },
      cyan: {
        gradient: "from-cyan-500 to-cyan-600",
        softGradient: "from-cyan-50 via-cyan-50 to-white",
        accentGradient: "from-cyan-500/10 via-cyan-400/5 to-transparent",
        bg: "bg-cyan-500",
        light: "bg-cyan-50",
        text: "text-cyan-600",
        border: "border-cyan-100",
        shadow: "shadow-cyan-500/10",
        icon: "text-cyan-600",
      },
      green: {
        gradient: "from-emerald-500 to-green-600",
        softGradient: "from-emerald-50 via-green-50 to-white",
        accentGradient: "from-emerald-500/10 via-green-400/5 to-transparent",
        bg: "bg-emerald-500",
        light: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-100",
        shadow: "shadow-emerald-500/10",
        icon: "text-emerald-600",
      },
    };

    return colors[color as keyof typeof colors];
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Enhanced Background Elements */}
      <div className="absolute -right-40 top-40 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl -z-10"></div>
      <div className="absolute -left-40 bottom-40 w-96 h-96 rounded-full bg-indigo-100/30 blur-3xl -z-10"></div>
      <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full bg-purple-100/20 blur-3xl -z-10"></div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3"
          >
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-sm font-semibold text-indigo-700 inline-flex items-center shadow-sm border border-indigo-100/30 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              Core Principles
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 mb-6"
          >
            Our Values
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed"
          >
            The principles that guide our innovation and shape our commitment to excellence
          </motion.p>
        </div>

        {/* Grid layout with special handling for the last card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const colors = getColors(value.color);
            const isLastCard = index === values.length - 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                // Center the last card when in a 3-column layout
                className={`${isLastCard && values.length % 3 === 1 ? 'lg:col-span-3 lg:mx-auto lg:max-w-md' : ''}`}
              >
                <div className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/60 overflow-hidden h-full flex flex-col relative group">
                  {/* Gradient background for card */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.softGradient}`}></div>
                  
                  {/* Accent gradient */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-radial ${colors.accentGradient} opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Top accent border */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.gradient} z-10`}></div>
                  
                  {/* Card content */}
                  <div className="relative z-10 p-8 flex-1 flex flex-col h-full">
                    {/* Title and icon */}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${colors.light} rounded-xl flex items-center justify-center mr-5 border ${colors.border} shadow-md group-hover:scale-105 transition-transform duration-300`}>
                        <div className={colors.icon}>
                          {value.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                        {value.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                    
                    {/* Bottom decorative elements */}
                    <div className="mt-auto pt-6 flex justify-between items-center">
                      <div className="w-8 h-8 bg-white/60 border border-gray-100 rounded-full flex items-center justify-center">
                        <div className={`w-4 h-4 rounded-full ${colors.bg} opacity-60`}></div>
                      </div>
                      
                      <div className={`h-px w-16 bg-gradient-to-r ${colors.gradient} opacity-30 group-hover:w-24 group-hover:opacity-60 transition-all duration-300`}></div>
                    </div>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-20">
                      <div className={`w-10 h-10 ${colors.light} rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden opacity-20">
                      <div className={`w-10 h-10 ${colors.light} rounded-full translate-y-1/2 -translate-x-1/2`}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a href="#learn-more" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group">
            See How We Live Our Values
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;