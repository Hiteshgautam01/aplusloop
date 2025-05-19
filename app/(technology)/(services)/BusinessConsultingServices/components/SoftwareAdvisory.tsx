"use client";

import { motion } from "framer-motion";
import { CheckCircle, Settings, Code, Shield, BarChart3, Users, Monitor } from "lucide-react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import SectionHeader from "@/components/reusable/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function SoftwareAdvisory() {
  const services = [
    {
      title: "Software Assessment & Gap Analysis",
      description: "We evaluate your current software environment to identify inefficiencies, integration issues, performance gaps, and opportunities for optimization.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Product Selection Advisory", 
      description: "We provide vendor-neutral recommendations and shortlist solutions tailored to your industry, use cases, and budget—be it ERP, CRM, HRMS, or bespoke platforms.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Custom vs Off-the-Shelf Consultation",
      description: "We help you determine whether a ready-made or custom-developed solution is the right fit—factoring in scalability, compliance, flexibility, and ROI.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Software Architecture Planning",
      description: "Design modular, scalable architectures optimized for cloud-native deployment, API-first design, and future integrations.",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Vendor Evaluation & RFP Support",
      description: "We assist in preparing RFPs, evaluating proposals, running proof-of-concepts, and negotiating favorable terms with software vendors.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Implementation & Transition Planning",
      description: "Ensure a seamless migration, change management, and risk mitigation plan during adoption or transition phases.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const domains = [
    "Enterprise Solutions",
    "SaaS Products", 
    "Automation Platforms",
    "Project Management & Collaboration",
    "Business Intelligence & Data Analytics",
    "Cybersecurity & Compliance",
    "Cloud Infrastructure"
  ];

  const whyChooseUs = [
    "Independent & Vendor-Agnostic Guidance",
    "30+ Years of Cross-Industry Experience", 
    "Certified Experts in Technology, Marketing & Operations",
    "Proven Track Record in Software Transformation",
    "Integrated Advisory Covering IT, UX, and Business Strategy"
  ];

  const idealFor = [
    "Businesses planning digital transformation or cloud migration",
    "Organizations struggling with software redundancies or inefficiencies",
    "Enterprises considering scaling up systems or launching new platforms",
    "Startups seeking MVP technology guidance or architecture advice"
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-tr from-blue-50/30 via-white to-indigo-50/20">
      {/* Background Elements */}
      <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-blue-200/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-96 h-96 rounded-full bg-indigo-200/15 blur-3xl"></div>
      
      {/* Header Section */}
      <SectionHeader
        title="Software Advisory"
        description="Navigate digital complexity with strategic software guidance. We help organizations assess, select, and implement the best-fit software solutions aligned with your business goals, IT infrastructure, and user needs."
        icon={<Monitor className="w-8 h-8 text-white" />}
        iconBackground="bg-gradient-to-br from-blue-600 to-indigo-500"
        layout="stacked"
        dividerStyle="dashed"
        dividerColor="from-blue-500"
        badge="Strategic Technology Solutions"
        badgeColor="bg-blue-100 text-blue-800"
        maxWidth="max-w-6xl"
        animationDelay={0.2}
        titleClassName="tracking-tight"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mx-auto space-y-20"
      >
        {/* Main Overview Section */}
        <motion.div variants={itemVariants}>
          <ImageTextSection
            title="Navigate Digital Complexity with Strategic Software Guidance"
            content={
              <div className="space-y-6">
                <p className="text-base leading-relaxed">
                  In a landscape crowded with platforms, frameworks, and off-the-shelf applications, choosing the right software solution can make or break your business efficiency. Aplusloop's Software Advisory services help organizations assess, select, and implement the best-fit software solutions aligned with your business goals, IT infrastructure, and user needs.
                </p>
                
                <p className="text-base leading-relaxed">
                  Whether you're modernizing legacy systems, adopting cloud platforms, or launching new digital products, our experts guide you at every step—from evaluation to execution.
                </p>
              </div>
            }
            borderStyle="tilt"
            borderColor="blue"
            badge="Strategic Guidance"
            imagePosition="right"
            textContentStyle="bordered"
            decorative={true}
            backgroundColor="rgba(239, 246, 255, 0.5)"
            backgroundStyle="solid"
            imageEffect="saturation"
            customImage={
              <ImagePlaceholder 
                title="Software Strategy"
                subtitle="Digital Transformation"
                iconPath="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                accentColor="#2563eb"
                bgColor="#dbeafe"
                height="100%"
              />
            }
          />
        </motion.div>

        {/* Services Grid - Subtle background */}
        <div className="relative py-16 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-r from-gray-50/50 via-blue-50/30 to-gray-50/50">
          <motion.div variants={itemVariants} className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                      {service.icon}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Domains Section */}
        <motion.div variants={itemVariants}>
          <ImageTextSection
            title="Domains We Advise In"
            content={
              <div className="grid sm:grid-cols-2 gap-3">
                {domains.map((domain, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{domain}</span>
                  </div>
                ))}
              </div>
            }
            borderStyle="floating"
            borderColor="indigo"
            badge="Expertise Areas"
            imagePosition="left"
            textContentStyle="minimal"
            backgroundColor="rgba(249, 250, 251, 0.5)"
            backgroundStyle="solid"
            imageEffect="hue-rotate"
            customImage={
              <ImagePlaceholder 
                title="Technology Domains"
                subtitle="Comprehensive Coverage"
                iconPath="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V2a2 2 0 012 2v2M8 2a2 2 0 00-2 2v2m12 0a8.949 8.949 0 00-4.951 1.488L12 9l-1.05-3.512A8.949 8.949 0 006 4"
                accentColor="#4338ca"
                bgColor="#e0e7ff"
                height="100%"
              />
            }
          />
        </motion.div>

        {/* Why Choose Us & Ideal For Combined Section */}
        <div className="relative py-20 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-50/60 via-blue-50/40 to-indigo-50/60">
          <motion.div variants={itemVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                Partnership & Suitability
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Why Partner with Aplusloop?
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Why Choose Us Column */}
              <div className="space-y-6">
                <div className="text-center lg:text-left mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    Why Choose Aplusloop as Your Software Advisory Partner?
                  </h4>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto lg:mx-0"></div>
                </div>
                
                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex items-start p-5 bg-gradient-to-r from-white/90 via-blue-50/30 to-white/90 backdrop-blur-sm rounded-2xl border border-blue-100/50 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium flex-1 leading-relaxed group-hover:text-gray-900 transition-colors">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Ideal For Column */}
              <div className="space-y-6">
                <div className="text-center lg:text-left mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    Ideal for:
                  </h4>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto lg:mx-0"></div>
                </div>
                
                <div className="space-y-4">
                  {idealFor.map((ideal, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex items-start p-5 bg-gradient-to-r from-white/90 via-emerald-50/30 to-white/90 backdrop-blur-sm rounded-2xl border border-emerald-100/50 hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium flex-1 leading-relaxed group-hover:text-gray-900 transition-colors">{ideal}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom decorative element */}
            <div className="mt-16 flex justify-center">
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="relative max-w-6xl mx-auto">
          <div className="relative p-12 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-3xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500 rounded-full opacity-20 blur-2xl transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative text-center text-white space-y-8">
              <h3 className="text-4xl font-bold">
                Let's Future-Proof Your Software Decisions
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                The right software strategy isn't just about tools—it's about transformation.
                Partner with Aplusloop to make every software decision strategic.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  <span>Schedule a Software Consultation</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  <span>Book a Discovery Call</span>
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}