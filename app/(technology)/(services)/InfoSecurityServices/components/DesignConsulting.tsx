import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Globe,
  Database,
  ClipboardCheck,
  LifeBuoy,
  Lock,
  LayoutGrid,
  CloudLightning
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const consultingServices = [
  {
    id: 1,
    title: "Security Operation Center Consultancy",
    icon: <Shield className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Information Security Consultancy",
    icon: <Lock className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Data Center Consultancy",
    icon: <Database className="h-6 w-6" />
  },
  {
    id: 4,
    title: "Security Compliance Consultancy",
    icon: <ClipboardCheck className="h-6 w-6" />
  },
  {
    id: 5,
    title: "IT Infrastructure Continuity Consultancy",
    icon: <Globe className="h-6 w-6" />
  },
  {
    id: 6,
    title: "Life Safety & Security Consultancy",
    icon: <LifeBuoy className="h-6 w-6" />
  },
  {
    id: 7,
    title: "Governance Security Framework Consultancy",
    icon: <LayoutGrid className="h-6 w-6" />
  },
  {
    id: 8,
    title: "Disaster Preparation and Disaster Recovery Consulting",
    icon: <CloudLightning className="h-6 w-6" />
  }
];

const DesignConsulting = () => {
  return (
    <section
      id="design-consulting"
      className="pt-10 bg-white relative overflow-hidden"
    >
      {/* Background Decorations - subtle version */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-4 w-4" />
            Expert Security Services
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent pb-4">
            Design & Consulting
          </h2>
        </motion.div>

        {/* Main Description */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong className="text-blue-700">A+loop provides cybersecurity consultancy services,</strong> assisting organizations with security program development, enterprise risk management controls & testing. Our expert security consultant will create a robust security environment with services that include threat assessments policy review and development and a master plan.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our professionals come from multiple industries in the technology field and work with a variety of industries.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our security consultant team can address almost any security concern and threat to your organization's property and business continuity; proprietary information; intellectual properties and customer data.
          </p>
        </motion.div>

        {/* Services Section Title */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <h3 className="text-2xl font-bold text-blue-800 inline-block relative">
            Our Group Consultancy Services Include
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-blue-400 rounded-full"></div>
          </h3>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {consultingServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-stretch"
              variants={fadeInRight}
              custom={index}
            >
              <div className="w-1.5 bg-blue-500"></div>
              <div className="flex items-start p-5 w-full">
                <div className="mr-4 rounded-full bg-blue-50 p-3 flex-shrink-0">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-2xl text-blue-800 mb-1">
                    {service.id}
                  </div>
                  <h4 className="text-gray-700 font-medium">
                    {service.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <div className="flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-blue-100 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-blue-100 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DesignConsulting;