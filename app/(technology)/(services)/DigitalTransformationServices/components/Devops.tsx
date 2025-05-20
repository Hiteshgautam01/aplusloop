"use client";

import React from "react";
import SectionHeader from "@/components/reusable/SectionHeader";
import { ChevronRight, Server, GitBranch, Code, Cloud, Settings, BarChart, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Define content as arrays/objects for maintainability
const servicesData = [
  {
    id: 1,
    title: "DevOps Assessment & Strategy",
    description: "We begin with a maturity assessment of your current processes and design a tailored roadmap aligned with your business goals. Our strategy encompasses toolchain optimization, CI/CD pipeline design, and infrastructure automation plans.",
    icon: <Server size={24} className="text-blue-600" />,
    iconPath: "M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"
  },
  {
    id: 2,
    title: "Continuous Integration & Continuous Deployment (CI/CD)",
    description: "We implement robust CI/CD pipelines using tools like Jenkins, GitLab, GitHub Actions, and Azure DevOps, enabling automated testing, faster deployments, and minimized human error.",
    icon: <GitBranch size={24} className="text-blue-600" />,
    iconPath: "M13 14c-3.36 0-6.94 1.35-9.23 3.31-.34.29-.77-.13-.58-.54C5.5 10.41 11.5 6 16 6v-3l5 4-5 4v-3c-3.17 0-6.7 2.84-8.69 6.44 2.95-1.82 6.03-2.44 8.69-2.44 2.83 0 5.23.84 7.31 2.48.36.28.89-.01.74-.47-1.66-5.13-6.87-6.01-11.05-6.01z"
  },
  {
    id: 3,
    title: "Infrastructure as Code (IaC)",
    description: "We manage your infrastructure using code via tools like Terraform, Ansible, and AWS CloudFormation, allowing scalable, repeatable, and version-controlled environment provisioning.",
    icon: <Code size={24} className="text-blue-600" />,
    iconPath: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
  },
  {
    id: 4,
    title: "Cloud & Containerization Services",
    description: "Whether you're migrating or building from scratch, our team uses Docker, Kubernetes, and cloud-native technologies across AWS, Azure, or GCP to build resilient, scalable environments.",
    icon: <Cloud size={24} className="text-blue-600" />,
    iconPath: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
  },
  {
    id: 5,
    title: "Configuration Management & Automation",
    description: "Ensure consistency across environments with automated configuration management tools such as Puppet, Chef, and Ansible.",
    icon: <Settings size={24} className="text-blue-600" />,
    iconPath: "M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5zm7.43-2.53c.04-.32.07-.65.07-.97 0-.32-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"
  },
  {
    id: 6,
    title: "Monitoring & Log Management",
    description: "We integrate observability into your system with tools like Prometheus, Grafana, ELK Stack, and Datadog—so you can detect, respond, and recover from incidents quickly.",
    icon: <BarChart size={24} className="text-blue-600" />,
    iconPath: "M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"
  },
  {
    id: 7,
    title: "Security Integration (DevSecOps)",
    description: "Security is built into your development lifecycle with automated vulnerability scans, compliance checks, and secure coding practices—shifting security left in your DevOps pipeline.",
    icon: <Shield size={24} className="text-blue-600" />,
    iconPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
  }
];

const benefitsData = [
  "Faster release cycles and quicker go-to-market timelines",
  "Reduced risk of failure during deployments",
  "Increased team collaboration and productivity",
  "Improved infrastructure scalability and system stability",
  "Enhanced visibility and real-time performance monitoring",
  "Seamless integration with cloud and hybrid environments"
];

const whyChooseUsData = [
  {
    title: "Expertise Across Tools & Platforms",
    description: "Certified DevOps engineers with hands-on experience across AWS, Azure, Kubernetes, Docker, and more."
  },
  {
    title: "End-to-End Automation",
    description: "From development to deployment, we automate everything that can be automated."
  },
  {
    title: "Security & Compliance First",
    description: "We build DevOps pipelines that are not only fast but also secure and audit-ready."
  },
  {
    title: "Scalable, Future-Ready Solutions",
    description: "We build systems that grow as your business grows."
  }
];

export default function DevOpsServices() {
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
            title="DevOps Services"
            icon={<Server size={24} className="text-white " />}
            description="Accelerate Development. Automate Delivery. Achieve Operational Excellence."
            layout="stacked"
            titleSize="xl"
            titleColor="text-blue-950"
            descriptionColor="text-blue-900"
            dividerColor="from-blue-600"
            badge="Professional Services"
            badgeColor="bg-blue-100 text-blue-800 w-fit"
            className="max-w-6xl mx-auto px-4"
            animation={true}
          >
            <p className="text-blue-700 max-w-3xl mt-6">
              At Aplusloop, our DevOps services empower your organization to bridge the gap between development and operations—enhancing collaboration, increasing release velocity, and reducing deployment failures. By integrating modern DevOps practices, we help you streamline software delivery pipelines, improve product quality, and accelerate time-to-market.
            </p>
          </SectionHeader>
        </div>

        {/* What We Offer Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">What We Offer</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-12 rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    index === servicesData.length - 1 && servicesData.length % 3 === 1 
                      ? "lg:col-span-3 lg:max-w-xl lg:mx-auto" 
                      : ""
                  }`}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Combined Benefits and Why Choose Us Section */}
        <div className="py-20 relative overflow-hidden bg-white">
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
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 h-full shadow-md">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Benefits of Our DevOps Services</h2>
                  <div className="h-1 w-20 bg-blue-600 mb-8 rounded-full"></div>
                  
                  <ul className="space-y-4">
                    {benefitsData.map((benefit, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                          <ChevronRight size={16} className="text-white" />
                        </div>
                        <span className="ml-4 text-slate-700">{benefit}</span>
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
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-8 h-full shadow-md">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Aplusloop for DevOps?</h2>
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
                            <span className="text-white font-medium">{index + 1}</span>
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
                  Ready to Transform Your DevOps Practices?
                </h3>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                  Start your DevOps transformation journey with Aplusloop and accelerate your path to operational excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-lg flex items-center gap-2 group shadow-lg">
                    Schedule a DevOps Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="border-2 border-blue-400 text-blue-100 hover:text-white hover:border-blue-300 hover:bg-blue-800/20 px-8 py-3 rounded-lg">
                    Technical Consultation
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
                
       