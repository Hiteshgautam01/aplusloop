import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  AlertCircle,
  BarChart4,
  Clock,
  Zap,
  ChevronRight,
  TrendingUp,
  Lock,
  Server,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const RiskManagement = () => {
  return (
    <section
      id="risk-management"
      className="pt-24 bg-gradient-to-b from-transparent to-white"
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-96 h-96 border-4 border-gray-900 rounded-full" />
          <div className="absolute w-80 h-80 border-4 border-gray-900 rounded-full animate-pulse" />
        </div>

        <div className="relative">
          <motion.div
            className="inline-block mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              Security Excellence
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent pb-2">
            Risk Management & VAPT
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive risk assessment and vulnerability testing to
            strengthen your security posture with cutting-edge methodologies
          </p>
        </div>
      </motion.div>

      {/* SOC Design Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-16 items-center mb-32 px-4 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} custom={1}>
          <motion.h3
            className="text-3xl font-bold mb-6 flex items-center gap-3"
            whileHover={{ x: 10 }}
          >
            <Server className="h-8 w-8 text-blue-600" />
            SOC Design
          </motion.h3>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Our Security Operations Center (SOC) design services help you
            establish a robust security monitoring and incident response
            capability, tailored to your organization's specific needs.
          </p>

          <ul className="space-y-4">
            {[
              {
                icon: Shield,
                text: "24/7 threat monitoring and detection",
                color: "text-blue-600",
              },
              {
                icon: AlertCircle,
                text: "Incident response and management",
                color: "text-orange-600",
              },
              {
                icon: BarChart4,
                text: "Security analytics and reporting",
                color: "text-green-600",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors`}
                >
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <span className="text-gray-700 text-lg pt-1">{item.text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold inline-flex items-center gap-2 hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </motion.div>

        <motion.div variants={fadeInUp} custom={2} className="relative">
          {/* Modern Image Container with Effects */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity" />

            {/* Image Container */}
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 z-10">
                <motion.div
                  className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Shield className="h-6 w-6 text-white" />
                </motion.div>
              </div>

              <div className="absolute bottom-4 left-4 z-10">
                <motion.div
                  className="px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Secure by Design
                </motion.div>
              </div>

              {/* Image */}
              <Image
                src="/security-images.png"
                alt="Security Operations Center"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
            </div>

            {/* Corner Accents */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-l-4 border-t-4 border-blue-600 rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-4 border-b-4 border-purple-600 rounded-br-2xl" />
          </div>
        </motion.div>
      </motion.div>

      {/* Advanced Tools Section */}
      <motion.div
        className="mb-32 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h3
            variants={fadeInUp}
            custom={1}
            className="text-3xl font-bold mb-4 text-center text-gray-900"
          >
            Advanced Security Tools
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
          >
            Leverage cutting-edge technology to identify and mitigate security
            risks before they become threats
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Vulnerability Scanner",
                description:
                  "Automated scanning tools to identify security vulnerabilities across your infrastructure and applications.",
                color: "blue",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: Zap,
                title: "Penetration Testing",
                description:
                  "Advanced penetration testing tools to simulate real-world attacks and identify security weaknesses.",
                color: "purple",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: BarChart4,
                title: "Risk Analytics",
                description:
                  "Data-driven risk assessment tools to quantify and prioritize security risks based on your business context.",
                color: "green",
                gradient: "from-green-500 to-green-600",
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 2}
                className="group"
              >
                {/* Card */}
                <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden h-full shadow-sm hover:shadow-md">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <tool.icon className="w-full h-full" />
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`relative z-10 bg-gradient-to-br ${tool.gradient} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <tool.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-xl font-semibold mb-3 relative z-10 text-gray-900">
                    {tool.title}
                  </h4>
                  <p className="text-gray-600 relative z-10">
                    {tool.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Incident Response Lifecycle */}
      <motion.div
        className="px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-12 md:p-20 rounded-3xl relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.h3
                variants={fadeInUp}
                custom={1}
                className="text-3xl font-bold mb-6 text-center"
              >
                Incident Response Lifecycle
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                custom={2}
                className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg"
              >
                Our structured approach to handling security incidents ensures
                efficient response and mitigation with minimal business impact
              </motion.p>

              <motion.div
                variants={fadeInUp}
                custom={3}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                {/* Placeholder for diagram with enhanced styling */}
                <div className="h-[400px] flex items-center justify-center">
                  <div className="text-gray-400 text-xl">
                    Incident Response Lifecycle Interactive Diagram
                  </div>
                </div>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                variants={fadeInUp}
                custom={4}
              >
                {[
                  {
                    number: "15min",
                    label: "Average Response Time",
                    icon: Clock,
                  },
                  {
                    number: "99.9%",
                    label: "Threat Detection Rate",
                    icon: Shield,
                  },
                  {
                    number: "24/7",
                    label: "Security Monitoring",
                    icon: TrendingUp,
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
                      <stat.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RiskManagement;
