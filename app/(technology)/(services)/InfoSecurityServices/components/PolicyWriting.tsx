import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Users,
  Database,
  AlertTriangle,
  Cloud,
  CheckCircle,
  Building,
  Stethoscope,
  Globe,
  Lock,
  Settings,
  BarChart3,
  FileCheck,
  Phone,
  Download,
} from "lucide-react";

const PolicyWriting = () => {
  const heroContent = {
    title: "Policy Writing Services",
    tagline: "Codifying Security. Simplifying Compliance.",
    description:
      "Strong security starts with clear policies. At Aplusloop, we help organizations translate complex regulatory and operational requirements into practical, enforceable information security policies that safeguard your systems and support compliance.",
  };

  const services = [
    {
      icon: Shield,
      title: "Information Security Policy Development",
      description:
        "We draft robust, customized policies aligned with global standards such as ISO/IEC 27001, NIST, GDPR, HIPAA, and UAE Cybersecurity Frameworks.",
    },
    {
      icon: Users,
      title: "Acceptable Use & Access Control Policies",
      description:
        "Ensure proper use of IT assets and implement defined roles, permissions, and user access rules that reduce vulnerabilities.",
    },
    {
      icon: Database,
      title: "Data Protection & Privacy Policies",
      description:
        "Safeguard sensitive data with enforceable privacy, classification, retention, and handling guidelines in line with data protection regulations.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response & Disaster Recovery Policies",
      description:
        "Be ready for the unexpected. Our policies outline protocols for cyber incidents, ensuring continuity, accountability, and fast recovery.",
    },
    {
      icon: Cloud,
      title: "BYOD, Remote Work & Cloud Security Policies",
      description:
        "Secure remote environments and third-party access with practical policies for modern hybrid workplaces.",
    },
    {
      icon: FileCheck,
      title: "Policy Review, Update & Gap Analysis",
      description:
        "Already have policies? We audit, assess, and refine them to ensure they remain current and effective in today's evolving threat landscape.",
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Ensures Regulatory Compliance",
    },
    {
      icon: Shield,
      title: "Minimizes Legal & Operational Risk",
    },
    {
      icon: Users,
      title: "Standardizes User Behavior & Security Practices",
    },
    {
      icon: AlertTriangle,
      title: "Improves Incident Preparedness & Response",
    },
    {
      icon: Settings,
      title: "Strengthens Internal Governance & Culture of Security",
    },
  ];

  const targetAudience = [
    {
      icon: Building,
      title: "Startups scaling with security in mind",
      description: "Growing companies need robust security foundations",
    },
    {
      icon: BarChart3,
      title: "Enterprises formalizing governance frameworks",
      description: "Large organizations requiring structured compliance",
    },
    {
      icon: Stethoscope,
      title: "Regulated industries (healthcare, fintech, public sector)",
      description: "Industries with strict compliance requirements",
    },
    {
      icon: Globe,
      title: "Global companies seeking UAE-specific compliance support",
      description: "International businesses operating in the UAE",
    },
  ];

  const differentiators = [
    {
      icon: Lock,
      title: "Deep Regulatory Expertise",
      description: "UAE, GCC, and global standards",
    },
    {
      icon: Settings,
      title: "End-to-End Delivery",
      description: "From drafting to rollout & awareness",
    },
    {
      icon: BarChart3,
      title: "Tailored to Your Environment",
      description:
        "No templates. Only relevant, practical, and enforceable policies",
    },
    {
      icon: FileText,
      title: "Audit-Ready Documentation",
      description: "Structured, version-controlled, and board-ready",
    },
  ];

  const ctaActions = [
    {
      icon: Phone,
      title: "Book a Consultation",
      type: "primary",
    },
    {
      icon: FileText,
      title: "Request Sample Policies",
      type: "secondary",
    },
    {
      icon: Download,
      title: "Download InfoSec Services Portfolio",
      type: "secondary",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-16 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {heroContent.title}
            </h1>
            <p className="text-lg md:text-xl font-medium mb-6 text-blue-200">
              {heroContent.tagline}
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-blue-100"
          >
            {heroContent.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-16 px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100/50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-4 border border-blue-100/50">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why It Matters Section */}
      <motion.section
        className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Why It Matters
            </h2>
            <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/70 backdrop-blur-sm rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-white/50"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50">
                  <benefit.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-700">
                  {benefit.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Target Audience Section */}
      <motion.section
        className="py-16 px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Who We Help
            </h2>
            <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {targetAudience.map((target, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100/50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50">
                  <target.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">
                  {target.title}
                </h3>
                <p className="text-sm text-slate-600">{target.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Aplusloop Section */}
      <motion.section
        className="py-16 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-900/30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Aplusloop?
            </h2>
            <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-blue-400 to-indigo-400"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="text-center p-5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 bg-white/10 backdrop-blur-sm border border-white/20">
                  <diff.icon className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {diff.title}
                </h3>
                <p className="text-xs text-blue-200">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Ready to Get Your Security House in Order?
            </h2>
            <p className="text-base md:text-lg mb-8 text-slate-600">
              Let's design policy documents that don't just tick compliance
              boxes—but build trust across your organization.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            {ctaActions.map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  action.type === "primary"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-blue-600 border border-blue-200 hover:bg-blue-50"
                }`}
              >
                <action.icon className="w-4 h-4 mr-2" />
                {action.title}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PolicyWriting;
