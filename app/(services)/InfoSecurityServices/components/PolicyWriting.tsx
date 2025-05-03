import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  BookOpen,
  ClipboardCheck,
  Shield,
  UserCheck,
  History,
  ArrowRight,
  CheckCircle2,
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

const PolicyWriting = () => {
  const processSteps = [
    {
      icon: ClipboardCheck,
      title: "Assessment & Analysis",
      description:
        "Analyze your organization's needs, regulatory requirements, and industry standards.",
      color: "blue",
    },
    {
      icon: BookOpen,
      title: "Policy Development",
      description:
        "Create clear, concise policies aligned with best practices and your business needs.",
      color: "indigo",
    },
    {
      icon: UserCheck,
      title: "Review & Approval",
      description:
        "Collaborate with stakeholders to review and approve final policy documents.",
      color: "purple",
    },
    {
      icon: History,
      title: "Maintenance & Updates",
      description:
        "Regular review and updates to keep policies current with changing regulations.",
      color: "violet",
    },
  ];

  const policyTypes = [
    {
      icon: Shield,
      title: "Information Security Policies",
      description:
        "Comprehensive policies covering all aspects of information security.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: FileText,
      title: "Data Protection Policies",
      description:
        "Policies for data classification, handling, and protection.",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: UserCheck,
      title: "Access Control Policies",
      description:
        "Policies for user access, authorization, and authentication.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: ClipboardCheck,
      title: "Risk Management Policies",
      description: "Policies for identifying, assessing, and mitigating risks.",
      gradient: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
    },
  ];

  return (
    <section
      id="policy-writing"
      className="py-24 bg-gradient-to-b from-transparent to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-60 right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold mb-6"
            // animate={{ scale: [1, 1.05, 1] }}
            // transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FileText className="h-4 w-4" />
            Expert Policy Development
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent pb-4">
            Policy Writing Services
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive security policy development services tailored to your
            organization's unique requirements and industry standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Process Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} custom={1} className="relative">
              {/* Modern Card with Glass Effect */}
              <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/20 shadow-xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>

                <h3 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                  Our Policy Writing Process
                </h3>

                <ul className="space-y-8 relative z-10">
                  {processSteps.map((step, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className={`bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                {/* Progress Indicator */}
                <div className="mt-8 pt-8 border-t border-gray-200/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      Process Timeline
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                      4-6 weeks
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Policy Types Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={fadeInUp}
              custom={1}
              className="text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              Types of Policies We Develop
            </motion.h3>

            <div className="space-y-5">
              {policyTypes.map((policy, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index + 2}
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Card Container */}
                  <div
                    className={`relative bg-white p-6 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-lg`}
                  >
                    {/* Background Gradient on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${policy.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className={`flex-shrink-0 bg-gradient-to-br ${policy.gradient} p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <policy.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1 text-gray-900 group-hover:text-blue-700 transition-colors">
                          {policy.title}
                        </h4>
                        <p className="text-gray-600">{policy.description}</p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowRight className="h-5 w-5 text-blue-600" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${policy.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300 -z-10`}
                  ></div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} custom={6} className="mt-10">
              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started with Policy Development
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
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

export default PolicyWriting;
