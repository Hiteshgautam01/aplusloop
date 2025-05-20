"use client";

import React from "react";
import SectionHeader from "@/components/reusable/SectionHeader";
import { motion } from "framer-motion";
import {
  Shield,
  ChevronRight,
  CheckCircle2,
  Building2,
  Factory,
  Zap,
  Train,
  Heart,
  ArrowRight,
  Lock,
  RotateCw,
  ShieldCheck,
  Brain,
  BarChart3
} from "lucide-react";

// Import shadcn accordion components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusCircle, MinusCircle } from "lucide-react";

// Define content as arrays/objects for maintainability
const zeroTrustDefinition = [
  "Continuous verification of identity, device posture, and access rights",
  "Least privilege access enforcement",
  "Micro-segmentation of networks and assets",
  "Assume breach mindset to detect and respond rapidly",
  "Unified visibility across IT and OT domains"
];

const whyItMatters = [
  "Insider threats & lateral movement",
  "Supply chain vulnerabilities",
  "Remote access risks",
  "Legacy systems without built-in security",
  "Compliance mandates (e.g., NESA, ISO 27019, IEC 62443)"
];

const servicesData = [
  {
    id: 1,
    title: "Security Posture Assessment",
    description: "We evaluate your current IT and OT environments to identify risks, gaps, and access control weaknesses."
  },
  {
    id: 2,
    title: "Architecture Design & Roadmap",
    description: "Tailored Zero Trust strategy aligned with your business model, regulatory requirements, and risk appetite."
  },
  {
    id: 3,
    title: "Micro-segmentation & Identity Control",
    description: "Implement segmentation using next-gen firewalls, NAC, or SDN, and enable least-privilege access across users, systems, and devices."
  },
  {
    id: 4,
    title: "OT Visibility & Device Profiling",
    description: "Deploy tools to monitor and classify assets in real-time across ICS/SCADA/PLC environments without disrupting operations."
  },
  {
    id: 5,
    title: "Secure Remote Access",
    description: "Zero Trust-based secure access for third-party vendors, remote workers, and maintenance teams using identity-aware proxies and MFA."
  },
  {
    id: 6,
    title: "Integration with SIEM/SOC",
    description: "Real-time threat monitoring and automated response across both IT and OT networks."
  }
];

const industriesData = [
  {
    name: "Energy & Utilities",
    icon: <Zap size={28} className="text-blue-600" />
  },
  {
    name: "Oil & Gas",
    icon: <Factory size={28} className="text-blue-600" />
  },
  {
    name: "Manufacturing & Industrial Automation",
    icon: <Building2 size={28} className="text-blue-600" />
  },
  {
    name: "Transportation & Smart Infrastructure",
    icon: <Train size={28} className="text-blue-600" />
  },
  {
    name: "Healthcare Facilities & Smart Buildings",
    icon: <Heart size={28} className="text-blue-600" />
  }
];

const whyChooseUsData = [
  {
    icon: <Lock size={28} className="text-blue-600" />,
    description: "OT-Specific Security Expertise"
  },
  {
    icon: <RotateCw size={28} className="text-blue-600" />,
    description: "End-to-End Implementation (Assessment → Rollout → Monitoring)"
  },
  {
    icon: <ShieldCheck size={28} className="text-blue-600" />,
    description: "Cross-Platform Integration with Existing Systems"
  },
  {
    icon: <Brain size={28} className="text-blue-600" />,
    description: "Proven Frameworks (NIST, Forrester Zero Trust, MITRE ATT&CK for ICS)"
  },
  {
    icon: <BarChart3 size={28} className="text-blue-600" />,
    description: "Risk-Based, Business-Aligned Approach"
  }
];

export default function ZeroTrustSecurity() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/20">
      {/* Main Content */}
      <div className="relative">
        {/* Hero Section with SectionHeader */}
        <div className="px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 relative overflow-hidden">
          {/* Subtle animated background with security pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 to-indigo-100/10"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E40AF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
            <motion.div 
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.07, 0.03, 0.07] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 20,
                repeatType: "reverse"
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"
              style={{ 
                backgroundSize: '200% 200%',
              }}
            ></motion.div>
          </div>
          
          <div className="relative z-10">
            <SectionHeader
              title="Zero Trust for OT/IT Environments"
              icon={<Shield size={24} className="text-white" />}
              description="Reimagine Security with a Zero Trust Architecture"
              layout="stacked"
              titleSize="xl"
              titleColor="text-blue-950"
              descriptionColor="text-blue-900"
              dividerColor="from-blue-600"
              badge="Advanced Security Framework"
              badgeColor="bg-blue-100 text-blue-800 w-fit"
              className="max-w-6xl mx-auto px-4"
              animation={true}
            >
              <p className="text-slate-700 max-w-3xl mt-6">
                In an increasingly connected world, traditional perimeter-based security is no longer sufficient. At Aplusloop, we help organizations transition to a Zero Trust security model—an approach that verifies every user, device, and transaction at every point, regardless of origin.
              </p>
              <p className="text-slate-700 max-w-3xl mt-4">
                Whether your environment spans Operational Technology (OT) systems like SCADA, ICS, and industrial control, or traditional IT networks, Zero Trust ensures no entity is trusted by default—minimizing breach risk and strengthening resilience.
              </p>
            </SectionHeader>
          </div>
        </div>

        {/* Definition & Why It Matters Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
              {/* What is Zero Trust */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="h-full bg-white p-8 rounded-2xl shadow-md border border-blue-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-white/95 z-0"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-600/5 rounded-full -ml-20 -mb-20"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">What is Zero Trust OT/IT?</h2>
                    <p className="text-slate-700 mb-6">Zero Trust is not a single technology, but a security framework that includes:</p>
                    
                    <ul className="space-y-4">
                      {zeroTrustDefinition.map((item, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-600/10 rounded-full flex items-center justify-center mt-0.5">
                            <ChevronRight size={16} className="text-blue-600" />
                          </div>
                          <span className="ml-4 text-slate-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Why It Matters */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="h-full bg-white p-8 rounded-2xl shadow-md border border-indigo-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-white/95 z-0"></div>
                  <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-600/5 rounded-full -ml-20 -mt-20"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-600/5 rounded-full -mr-20 -mb-20"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Why It Matters for OT/IT Environments</h2>
                    <p className="text-slate-700 mb-6">In critical infrastructure and industrial operations, the convergence of OT and IT systems introduces complex security risks. Zero Trust helps address:</p>
                    
                    <ul className="space-y-4">
                      {whyItMatters.map((item, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-indigo-600/10 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCircle2 size={16} className="text-indigo-600" />
                          </div>
                          <span className="ml-4 text-slate-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Services Section - Using shadcn Accordion */}
        <div className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-indigo-50/30"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Zero Trust OT/IT Services Include</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-700 max-w-2xl mx-auto">Comprehensive services to implement and maintain a robust Zero Trust security architecture for your organization.</p>
            </motion.div>
            
            <div className="mt-8 bg-white rounded-lg shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {servicesData.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-b border-slate-200 last:border-0">
                      <AccordionTrigger className="hover:text-blue-700 hover:no-underline py-4 px-4 text-base">
                        {service.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-slate-700 text-base">
                        {service.description}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Industries We Serve Section - Fixed hover states */}
        <div className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Industries We Serve</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {industriesData.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:border-blue-200"
                >
                  <div className="flex flex-col items-center justify-center p-6 h-full relative">
                    {/* Icon container */}
                    <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                      {industry.icon}
                    </div>
                    
                    {/* Text container */}
                    <h3 className="text-lg font-medium text-center text-slate-800">
                      {industry.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-20 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-indigo-50/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Aplusloop?</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            </motion.div>
            
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/5 rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {whyChooseUsData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group"
                  >
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full flex flex-col items-center text-center hover:shadow-md hover:border-blue-200 transition-all duration-200">
                      <div className="bg-blue-50 p-4 rounded-full mb-5 w-16 h-16 flex items-center justify-center">
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                      <p className="text-slate-700 font-medium">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-indigo-600/10 rounded-full blur-3xl -mt-20 -mr-20"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-indigo-600/30 to-blue-600/10 rounded-full blur-3xl -mb-20 -ml-20"></div>
              
              <div className="max-w-3xl mx-auto relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Start Building Zero Trust Today
                </h3>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                  Protect your operations from edge to core. Let Aplusloop secure your IT/OT ecosystem with Zero Trust architecture designed for resilience and control.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-lg flex items-center gap-2 group shadow-lg justify-center">
                    Request a Zero Trust Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex gap-4 flex-col sm:flex-row">
                    <button className="border-2 border-blue-400 text-blue-100 hover:text-white hover:border-blue-300 hover:bg-blue-800/20 px-6 py-3 rounded-lg">
                      Download OT Security Brochure
                    </button>
                    <button className="border-2 border-blue-400 text-blue-100 hover:text-white hover:border-blue-300 hover:bg-blue-800/20 px-6 py-3 rounded-lg">
                      Book an Assessment Workshop
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