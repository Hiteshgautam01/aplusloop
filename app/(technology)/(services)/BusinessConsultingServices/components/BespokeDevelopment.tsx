"use client";

import { motion } from "framer-motion";
import { CheckCircle, Code, Cpu, Cloud, Smartphone, Zap, Shield, Layers, Settings } from "lucide-react";
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

export default function BespokeDevelopment() {
  const services = [
    {
      title: "Custom Software Design & Development",
      description: "We build enterprise-grade applications from scratch, tailored to your process flows, data structures, and business goals.",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Legacy System Modernization",
      description: "Revamp outdated systems with modern architectures, cloud-native technologies, and responsive UX—all without disrupting your operations.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Workflow Automation & Integration",
      description: "Automate repetitive tasks and integrate business systems (ERP, CRM, HRMS) to unlock new levels of productivity and efficiency.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Cloud-Ready & Scalable Architecture",
      description: "Leverage scalable architecture built for cloud, hybrid, or on-premise environments using microservices, containers, and APIs.",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "Mobile & Web App Development",
      description: "Develop high-performance, user-friendly mobile and web apps with responsive design, analytics integration, and seamless back-end connectivity.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Product Prototyping & MVP Development",
      description: "Validate your idea quickly and cost-effectively with interactive prototypes and MVPs, ideal for startups and product innovation teams.",
      icon: <Layers className="w-8 h-8" />
    }
  ];

  const techStack = {
    "Front-End": ["React", "Angular", "Vue.js"],
    "Back-End": ["Node.js", ".NET Core", "Python", "Java"],
    "Mobile": ["Flutter", "React Native", "Swift", "Kotlin"],
    "Database": ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines"],
    "Security": ["OAuth2", "JWT", "Role-Based Access Control (RBAC)"]
  };

  const whyChooseUs = [
    "Business-First Approach – We align every line of code with your operational goals",
    "Rapid Delivery with Agile Methods – Time-boxed sprints, early visibility, continuous feedback",
    "User-Centric Design – Built with modern UX principles for high adoption",
    "Scalable Solutions – Future-ready architecture that grows with your business",
    "Full Lifecycle Support – From ideation to post-launch maintenance"
  ];

  const idealFor = [
    "Enterprises needing custom ERP/CRM platforms",
    "Government digital transformation initiatives",
    "Healthcare, Retail, Logistics, and Education sectors",
    "Startups building tech-enabled products",
    "Organizations with complex compliance requirements"
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-tr from-blue-50/30 via-white to-indigo-50/20">
      {/* Background Elements */}
      <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-blue-200/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-96 h-96 rounded-full bg-indigo-200/15 blur-3xl"></div>
      
      {/* Header Section */}
      <SectionHeader
        title="Bespoke Development"
        description="Tailored Software Solutions Built Around Your Business. We craft custom digital solutions that align seamlessly with your business objectives, workflows, and customer experience goals."
        icon={<Code className="w-8 h-8 text-white" />}
        iconBackground="bg-gradient-to-br from-[#0047FF] to-[#1E22AA]"
        layout="stacked"
        dividerStyle="dashed"
        dividerColor="from-[#0047FF]"
        badge="Custom Development Solutions"
        badgeColor="bg-[#F5F8FF] text-[#0047FF]"
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
            title="Tailored Software Solutions Built Around Your Business"
            content={
              <div className="space-y-6">
                <p className="text-base leading-relaxed">
                  In a world of off-the-shelf software, your business deserves more than a one-size-fits-all approach. At Aplusloop, our Bespoke Development services focus on building custom digital solutions that align seamlessly with your business objectives, workflows, and customer experience goals.
                </p>
                
                <p className="text-base leading-relaxed">
                  Whether you're a startup seeking rapid scalability, an enterprise streamlining legacy systems, or a government agency improving citizen services — we craft solutions that are scalable, secure, and strategically designed for your unique environment.
                </p>
              </div>
            }
            borderStyle="tilt"
            borderColor="blue"
            badge="Custom Solutions"
            imagePosition="right"
            textContentStyle="bordered"
            decorative={true}
            backgroundColor="rgba(239, 246, 255, 0.5)"
            backgroundStyle="solid"
            imageEffect="saturation"
            customImage={
              <ImagePlaceholder 
                title="Bespoke Development"
                subtitle="Custom Software Solutions"
                iconPath="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                accentColor="#0047FF"
                bgColor="#dbeafe"
                height="100%"
              />
            }
          />
        </motion.div>

        {/* Services Grid - Subtle background */}
        <div className="relative py-16 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-r from-gray-50/50 via-[#F5F8FF]/30 to-gray-50/50">
          <motion.div variants={itemVariants} className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] mx-auto"></div>
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
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F5F8FF] to-[#E0E8FF] rounded-xl flex items-center justify-center text-[#0047FF] mb-6 group-hover:from-[#E0E8FF] group-hover:to-[#F5F8FF] transition-colors duration-300">
                      {service.icon}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0047FF] transition-colors">
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

        {/* Development Stack Section */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 bg-[#F5F8FF] text-[#0047FF]">
              Technology Stack
            </span>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Development Stack</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(techStack).map(([category, technologies], index) => {
              // Define icons for each category
              const categoryIcons = {
                "Front-End": (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                "Back-End": (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
                "Mobile": (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                  </svg>
                ),
                "Database": (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.39 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.39 4 8 4s8-1.79 8-4M4 7c0-2.21 3.39-4 8-4s8 1.79 8 4m0 5c0 2.21-3.39 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
                "Cloud & DevOps": (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                "Security": (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              };

              // Color schemes for each category
              const categoryColors = {
                "Front-End": { bg: "from-cyan-50 to-cyan-100", text: "text-cyan-600", hover: "hover:from-cyan-100 hover:to-cyan-200" },
                "Back-End": { bg: "from-green-50 to-green-100", text: "text-green-600", hover: "hover:from-green-100 hover:to-green-200" },
                "Mobile": { bg: "from-purple-50 to-purple-100", text: "text-purple-600", hover: "hover:from-purple-100 hover:to-purple-200" },
                "Database": { bg: "from-orange-50 to-orange-100", text: "text-orange-600", hover: "hover:from-orange-100 hover:to-orange-200" },
                "Cloud & DevOps": { bg: "from-blue-50 to-blue-100", text: "text-blue-600", hover: "hover:from-blue-100 hover:to-blue-200" },
                "Security": { bg: "from-red-50 to-red-100", text: "text-red-600", hover: "hover:from-red-100 hover:to-red-200" }
              };

              const colors = categoryColors[category as keyof typeof categoryColors] || categoryColors["Front-End"];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-lg flex items-center justify-center ${colors.text} mr-4 group-hover:scale-110 transition-transform duration-300 ${colors.hover}`}>
                      {categoryIcons[category as keyof typeof categoryIcons]}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#0047FF] transition-colors">
                      {category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#F5F8FF] text-gray-700 rounded-full text-sm font-medium border border-[#E0E8FF] hover:bg-[#E0E8FF] hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Why Choose Us & Ideal For Combined Section */}
        <div className="relative py-20 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-50/60 via-[#F5F8FF]/40 to-indigo-50/60">
          <motion.div variants={itemVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gradient-to-r from-[#F5F8FF] to-[#E0E8FF] text-[#0047FF]">
                Partnership & Suitability
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Why Partner with Aplusloop?
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-[#0047FF] via-[#1E22AA] to-purple-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Why Choose Us Column */}
              <div className="space-y-6">
                <div className="text-center lg:text-left mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    Why Choose Aplusloop?
                  </h4>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] mx-auto lg:mx-0"></div>
                </div>
                
                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex items-start p-5 bg-gradient-to-r from-white/90 via-[#F5F8FF]/30 to-white/90 backdrop-blur-sm rounded-2xl border border-blue-100/50 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#0047FF] to-[#1E22AA] rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
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
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
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
          <div className="relative p-12 bg-gradient-to-br from-[#1A1A4F] to-[#0047FF] rounded-3xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1E22AA] rounded-full opacity-20 blur-2xl transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative text-center text-white space-y-8">
              <h3 className="text-4xl font-bold">
                Ready to Build Something Uniquely Yours?
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Don't fit into the box. Build the box.
                Let's co-create a digital solution that works your way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-[#0047FF] font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  <span>Book a Free Consultation</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#0047FF] hover:scale-105 transition-all duration-300">
                  View Case Studies
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#0047FF] hover:scale-105 transition-all duration-300">
                  Start Your Bespoke Journey
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}