"use client";

import React from "react";
import SectionHeader from "@/components/reusable/SectionHeader";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Shield, 
  Network, 
  Cloud, 
  Wifi, 
  Key, 
  Phone, 
  Mail,
  FileSearch,
  Shield as ShieldIcon,
  Lock,
  MailCheck,
  CloudCog,
  PhoneForwarded,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Award
} from "lucide-react";

// Define content as arrays/objects for maintainability
const whatWeSecureData = [
  {
    id: 1,
    title: "Enterprise LAN/WAN & SD-WAN",
    icon: <Network size={24} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    gradient: "from-blue-50 to-blue-100/60"
  },
  {
    id: 2,
    title: "Cloud & Hybrid Networks (Azure, AWS, GCP)",
    icon: <Cloud size={24} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    gradient: "from-blue-50 to-blue-100/60"
  },
  {
    id: 3,
    title: "Wireless Infrastructure (WiFi, IoT)",
    icon: <Wifi size={24} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    gradient: "from-blue-50 to-blue-100/60"
  },
  {
    id: 4,
    title: "Remote Access (VPN, ZTNA, SASE)",
    icon: <Key size={24} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    gradient: "from-blue-50 to-blue-100/60"
  },
  {
    id: 5,
    title: "VoIP & Unified Communications",
    icon: <Phone size={24} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    gradient: "from-blue-50 to-blue-100/60"
  },
  {
    id: 6,
    title: "Email & Collaboration Tools (M365, G Suite)",
    icon: <Mail size={24} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    gradient: "from-blue-50 to-blue-100/60"
  }
];

const ourServicesData = [
  {
    id: 1,
    title: "Network Security Assessment",
    description: "We assess vulnerabilities across your entire network ecosystem—core, edge, and endpoints—and recommend actionable security controls.",
    icon: <FileSearch size={24} className="text-blue-600 group-hover:rotate-6 transition-transform duration-300" />,
    color: "bg-blue-50"
  },
  {
    id: 2,
    title: "Firewall & Perimeter Defense Management",
    description: "Design, deploy, and manage Next-Gen Firewalls (NGFW), IDS/IPS, and Web Application Firewalls (WAFs) to detect and block malicious traffic.",
    icon: <ShieldIcon size={24} className="text-blue-600 group-hover:rotate-6 transition-transform duration-300" />,
    color: "bg-blue-50"
  },
  {
    id: 3,
    title: "Secure Remote Access & VPN Hardening",
    description: "Implement Zero Trust Network Access (ZTNA) and secure VPN tunnels with multi-factor authentication to protect remote and hybrid workforces.",
    icon: <Lock size={24} className="text-blue-600 group-hover:rotate-6 transition-transform duration-300" />,
    color: "bg-blue-50"
  },
  {
    id: 4,
    title: "Email & Collaboration Security",
    description: "Protect users from phishing, spoofing, data leakage, and malware through advanced threat protection for corporate communication tools.",
    icon: <MailCheck size={24} className="text-blue-600 group-hover:rotate-6 transition-transform duration-300" />,
    color: "bg-blue-50"
  },
  {
    id: 5,
    title: "Cloud Network Security",
    description: "Deploy secure connectivity, micro-segmentation, and cloud-native firewalls for public and hybrid cloud infrastructures.",
    icon: <CloudCog size={24} className="text-blue-600 group-hover:rotate-6 transition-transform duration-300" />,
    color: "bg-blue-50"
  },
  {
    id: 6,
    title: "VoIP & Unified Communication Protection",
    description: "Ensure the confidentiality and integrity of voice and video communications with session border controllers (SBCs), encryption, and anti-spam tools.",
    icon: <PhoneForwarded size={24} className="text-blue-600 group-hover:rotate-6 transition-transform duration-300" />,
    color: "bg-blue-50"
  },
  {
    id: 7,
    title: "24/7 Monitoring & Incident Response",
    description: "Get real-time monitoring, alerting, and automated incident response through integration with our Security Operations Center (SOC).",
    icon: <BarChart3 size={24} className="text-blue-600 group-hover:rotate-6 transition-transform duration-300" />,
    color: "bg-blue-50"
  }
];

const benefitsData = [
  "Reduced Cyber Risk & Attack Surface",
  "Secure Connectivity for Remote & Global Teams",
  "Enhanced Network Visibility & Control",
  "Regulatory Compliance (ISO 27001, NESA, SIRA)",
  "Optimized Network Performance with Security",
  "Proactive Threat Detection & Response"
];

const whyChooseUsData = [
  {
    title: "Certified Experts in Cisco, Palo Alto, Fortinet, Check Point",
    description: "Our team holds advanced certifications from leading security vendors."
  },
  {
    title: "Tailored Strategies for SMBs, Enterprises & Government",
    description: "Custom security solutions that fit your organization's size and requirements."
  },
  {
    title: "Deep Expertise in Zero Trust Architecture & SASE",
    description: "Implementing modern security frameworks for today's distributed workforce."
  },
  {
    title: "Proven Track Record in Securing Complex Environments",
    description: "Successfully securing multi-site, hybrid network environments for diverse clients."
  }
];

export default function NetworksCommunicationsSecurity() {
  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50 to-slate-100 text-slate-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section with SectionHeader */}
        <div className="px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
          <SectionHeader
            title="Networks & Communications Security"
            icon={<Shield size={24} className="text-white" />}
            description="Securing the Backbone of Your Digital Enterprise"
            layout="stacked"
            titleSize="xl"
            titleColor="text-blue-950"
            descriptionColor="text-blue-900"
            dividerColor="from-blue-600"
            badge="Security Solutions"
            badgeColor="bg-blue-100 text-blue-800 w-fit"
            className="max-w-6xl mx-auto px-4"
            animation={true}
          >
            <p className="text-blue-700 max-w-3xl mt-6">
              In today's hyper-connected world, networks and communication channels are prime targets for cyber threats. At Aplusloop, we offer a comprehensive suite of Network & Communications Security services designed to safeguard your infrastructure, prevent unauthorized access, and ensure uninterrupted, secure connectivity across your organization.
            </p>
            <p className="text-blue-700 max-w-3xl mt-4">
              Whether your operations span cloud, on-premises, hybrid environments, or distributed teams, we help secure every layer—from core networking to endpoint communication—with precision and compliance.
            </p>
          </SectionHeader>
        </div>

        {/* What We Secure Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">What We Secure</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeSecureData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60`}></div>
                    <div className="relative p-5 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ourServicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group ${
                    index === ourServicesData.length - 1 && ourServicesData.length % 3 === 1 
                      ? "lg:col-span-3 lg:max-w-xl lg:mx-auto" 
                      : ""
                  }`}
                >
                  <div className="h-full bg-white rounded-xl border border-blue-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="p-6 flex-grow">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Combined Benefits and Why Choose Us Section */}
        <div className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Benefits Section */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-blue-50/70 rounded-2xl p-8 h-full shadow-sm border border-blue-100">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Benefits of Our Network Security Services</h2>
                  <div className="h-1 w-20 bg-blue-600 mb-8 rounded-full"></div>
                  
                  <ul className="space-y-4">
                    {benefitsData.map((benefit, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              {/* Why Choose Us Section */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-indigo-50/70 rounded-2xl p-8 h-full shadow-sm border border-indigo-100">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Aplusloop?</h2>
                  <div className="h-1 w-20 bg-indigo-600 mb-8 rounded-full"></div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {whyChooseUsData.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="flex gap-4 items-start">
                          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Award size={16} className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h4>
                            <p className="text-slate-700">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Let's Secure Your Network Today
                </h3>
                <p className="text-lg text-slate-200 mb-4 leading-relaxed">
                  Your network is your business's lifeline. Don't leave it exposed.
                </p>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                  Partner with Aplusloop to design, secure, and manage resilient network communications.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-lg flex items-center gap-2 group shadow-lg justify-center">
                    Schedule a Network Security Audit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex gap-4 flex-col sm:flex-row">
                    <button className="border-2 border-blue-400 text-blue-100 hover:text-white hover:border-blue-300 hover:bg-blue-800/20 px-6 py-3 rounded-lg">
                      Download Overview
                    </button>
                    <button className="border-2 border-blue-400 text-blue-100 hover:text-white hover:border-blue-300 hover:bg-blue-800/20 px-6 py-3 rounded-lg">
                      Contact Architects
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}