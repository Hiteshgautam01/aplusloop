import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  Award,
  Briefcase,
  FileCheck,
  Globe,
  ArrowRight,
  Clock,
  BarChart3,
  Target,
  Sparkles,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const regulations = [
  {
    id: "gdpr",
    name: "GDPR",
    description: "General Data Protection Regulation",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    color: "blue",
  },
  {
    id: "hipaa",
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act",
    icon: ShieldCheck,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    color: "green",
  },
  {
    id: "pci",
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard",
    icon: Briefcase,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    color: "purple",
  },
  {
    id: "iso",
    name: "ISO 27001",
    description: "Information Security Management System",
    icon: Award,
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
    color: "yellow",
  },
  {
    id: "sox",
    name: "SOX",
    description: "Sarbanes-Oxley Act",
    icon: FileCheck,
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-50 to-rose-50",
    color: "red",
  },
  {
    id: "nist",
    name: "NIST CSF",
    description:
      "National Institute of Standards and Technology Cybersecurity Framework",
    icon: CheckCircle,
    gradient: "from-indigo-500 to-violet-500",
    bgGradient: "from-indigo-50 to-violet-50",
    color: "indigo",
  },
];

const complianceSteps = [
  {
    number: "01",
    title: "Assessment",
    description:
      "Comprehensive gap analysis against regulatory requirements and industry standards",
    icon: Target,
    color: "blue",
  },
  {
    number: "02",
    title: "Implementation",
    description:
      "Develop and implement controls, processes, and documentation to address gaps",
    icon: BarChart3,
    color: "indigo",
  },
  {
    number: "03",
    title: "Monitoring",
    description:
      "Ongoing compliance monitoring, audit support, and continuous improvement",
    icon: Clock,
    color: "purple",
  },
];

const RegulatoryCompliance = () => {
  return (
    <section
      id="regulatory-compliance"
      className="py-4 bg-gradient-to-b from-white  relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-6"
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ShieldCheck className="h-4 w-4" />
            Compliance Excellence
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent pb-4">
            Regulatory Compliance
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Navigate complex regulatory landscapes with our comprehensive
            compliance services and expert guidance
          </p>
        </motion.div>

        {/* Compliance Approach Section */}
        <div className="mb-24">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            {/* Modern Card with Glass Effect */}
            <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

              <motion.h3
                className="text-2xl font-bold mb-12 text-center relative z-10 flex items-center justify-center gap-3"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-6 w-6 text-blue-600" />
                Our Compliance Approach
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {complianceSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Step Card */}
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-white/50 group-hover:-translate-y-1">
                      <div className="flex items-center mb-6">
                        <motion.div
                          className={`w-14 h-14 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <step.icon className="h-7 w-7 text-white" />
                        </motion.div>
                        <div className="ml-4">
                          <span
                            className={`text-3xl font-bold text-${step.color}-600/20`}
                          >
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-xl mb-3 text-gray-900">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connection Line */}
                    {index < complianceSteps.length - 1 && (
                      <div className="hidden md:block translate-x-[15px] absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Regulations Section */}
        <motion.h3
          className="text-2xl font-bold mb-12 text-center flex items-center justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <Award className="h-6 w-6 text-yellow-600" />
          Regulations We Support
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {regulations.map((regulation, index) => (
            <motion.div
              key={regulation.id}
              variants={fadeInUp}
              custom={index + 3}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              {/* Regulation Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100 group-hover:border-gray-200">
                {/* Background Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${regulation.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className={`p-4 rounded-xl bg-gradient-to-br ${regulation.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <regulation.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <motion.div
                      className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </motion.div>
                  </div>

                  <h4 className="font-bold text-xl mb-2 text-gray-900">
                    {regulation.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {regulation.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${regulation.gradient} opacity-10 rounded-full`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
      `}</style>
    </section>
  );
};

export default RegulatoryCompliance;
