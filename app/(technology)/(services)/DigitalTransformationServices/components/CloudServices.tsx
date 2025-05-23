"use client"
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/reusable/SectionHeader';
import { Cloud, Database, Settings, ArrowUpDown, Cpu, CheckCircle } from 'lucide-react';
import ImagePlaceholder from '@/components/reusable/ImagePlaceholder';
import ImageTextSection from '@/components/reusable/ImageTextSection';

const CloudServices = () => {
  const strategicPillars = [
    {
      icon: Database,
      title: "Cloud Information Systems",
      description: "Cloud Information Systems (CIS) are the backbone of data management in the cloud. They facilitate the storage, retrieval, and analysis of data across distributed environments. Modern CIS leverage big data analytics and AI to provide real-time insights, enhancing decision-making processes."
    },
    {
      icon: Settings,
      title: "Cloud Management Platforms",
      description: "Effective management of cloud resources is crucial for operational efficiency. Cloud Management Platforms (CMPs) offer centralized control over multi-cloud environments, enabling administrators to monitor, provision, and manage resources seamlessly."
    },
    {
      icon: ArrowUpDown,
      title: "Hybrid Architecture Management",
      description: "Hybrid cloud architectures combine on-premises infrastructure with public and private cloud services, offering flexibility and scalability. Managing such architectures requires robust orchestration tools to ensure seamless integration and operation."
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Transitioning to the cloud involves strategic planning and execution. Cloud migration strategies include Lift and Shift, Refactoring, and Rebuilding approaches. Automation tools facilitate smooth migration by handling tasks like data transfer, configuration, and testing.",
      strategies: [
        "Lift and Shift: Moving applications without significant changes",
        "Refactoring: Modifying applications to better suit the cloud environment", 
        "Rebuilding: Redesigning applications to be cloud-native"
      ]
    },
    {
      icon: Cpu,
      title: "Workload Optimization",
      description: "Optimizing workloads ensures that applications run efficiently, utilizing resources effectively. Intelligent Workload Management (IWM) systems dynamically allocate resources based on demand, priorities, and policies. By employing AI and machine learning, IWM can predict workload patterns, automate scaling, and enhance performance."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative pb-20 overflow-hidden bg-gradient-to-tr from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Elements */}
      {/* <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-blue-200/10 blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-40 right-1/5 w-80 h-80 rounded-full bg-indigo-200/20 blur-3xl animate-pulse" style={{ animationDuration: '20s' }}></div> */}
      
      {/* SectionHeader as requested */}
      <div className="relative z-10">
        <SectionHeader
          title="Cloud Services"
          description="From infrastructure management to application migration, our cloud experts deliver flexible, secure, and scalable solutions. We specialize in hybrid cloud architectures, workload optimization, and end-to-end cloud transition strategies."
          icon={<Cloud className="w-8 h-8 text-blue-600" />}
          iconBackground="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50"
          iconBorderRadius="rounded-xl"
          layout="stacked"
          dividerStyle="solid"
          dividerColor="blue-400"
          badgeColor="bg-blue-100 text-blue-800"
          maxWidth="max-w-6xl"
          animationDelay={0.2}
          blueBg={true}
          className="w-full mx-auto  pb-0 mb-0"
        />
      </div>

      {/* Custom Hero Section with Image on Top Right, Text on Left */}
      {/* Hero Section with ImageTextSection */}
      <ImageTextSection
        title="Empowering the Cloud: Five Strategic Pillars for Modern Enterprise Cloud Services"
        content={
          <div className="space-y-6">
            <p className="text-base leading-relaxed">
              In today's digital landscape, cloud services are pivotal in driving innovation, scalability, and efficiency. A comprehensive cloud strategy encompasses five key focus areas: Cloud Information Systems, Cloud Management Platforms, Hybrid Architecture Management, Cloud Migration, and Workload Optimization.
            </p>
            
            <p className="text-base leading-relaxed">
              Leveraging the latest methodologies and technologies in these domains ensures organizations remain agile and competitive.
            </p>
          </div>
        }
        borderColor="blue"
        borderStyle="floating"
        badge="Cloud Strategy"
        imagePosition="right"
        textContentStyle="default"
        decorative={true}
        backgroundColor="rgba(245, 248, 255, 0.7)"
        backgroundStyle="solid"
        customImage={
          <ImagePlaceholder 
            title="Cloud Strategy"
            subtitle="Five Strategic Pillars"
            iconPath="/api/placeholder/48/48"
            accentColor="#0047FF"
            bgColor="#F5F8FF"
            height="100%"
          />
        }
      />

      {/* Strategic Pillars Cards - Full Width */}
      <motion.section
        className="relative z-10 mt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Five Strategic Pillars
            </h3>
            <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/30 ${
                  index === 3 || index === 4 ? 'lg:col-span-1' : ''
                } ${index === 3 ? 'lg:col-start-1 lg:col-end-3' : ''}`}
              >
                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600"></div>
                
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full transform rotate-45 scale-150"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-200 rounded-full opacity-60"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-indigo-300 rounded-full opacity-40"></div>
                
                <div className="relative p-8">
                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 mb-6 border border-blue-100/50 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                    <pillar.icon className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
                    {pillar.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300 mb-4">
                    {pillar.description}
                  </p>

                  {/* Migration strategies for Cloud Migration card */}
                  {pillar.strategies && (
                    <div className="mt-4 space-y-2">
                      {pillar.strategies.map((strategy, strategyIndex) => (
                        <div key={strategyIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-slate-600">{strategy}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Conclusion Section - Full Width Bottom */}
      <motion.section
        className="relative z-10 mt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Conclusion
              </h3>
              <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-blue-400 to-indigo-400 mb-8"></div>
              <p className="text-lg leading-relaxed text-blue-100 max-w-4xl mx-auto">
                Adopting a holistic approach to cloud services, focusing on these five areas, empowers organizations to harness the full potential of the cloud. By integrating advanced methodologies and technologies, businesses can achieve operational excellence, drive innovation, and maintain a competitive edge in the digital era.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CloudServices;