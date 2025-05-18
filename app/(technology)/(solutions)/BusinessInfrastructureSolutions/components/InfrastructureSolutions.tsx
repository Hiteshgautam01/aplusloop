"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Server, Code, Zap, Shield, ArrowRight, Network, CheckCircle } from "lucide-react";
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

export default function InfrastructureSolutions() {
  const infrastructureComponents = [
    {
      title: "Cloud Information System (CIS)",
      description: "CIS acts as the foundation for cloud-based operations, enabling the collection, processing, and distribution of data across distributed cloud environments. It ensures unified visibility and secure access to cloud-hosted resources, streamlining data management in real time.",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Cloud Management Platform (CMP)",
      description: "CMPs provide a centralized dashboard to monitor, manage, and optimize cloud resources across multiple providers. From cost control and automation to governance and compliance, CMPs are critical for maintaining operational efficiency in hybrid and multi-cloud environments.",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "Infrastructure as a Service (IaaS)",
      description: "IaaS offers virtualized computing resources—servers, storage, and networking—over the internet. This model eliminates the need for on-premises hardware and allows organizations to scale on demand while only paying for what they use.",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "Infrastructure as Code (IaC)",
      description: "IaC revolutionizes how infrastructure is provisioned and managed by enabling it through code. It ensures consistency, reduces manual intervention, and accelerates deployments through automation and version control, making infrastructure truly agile.",
      icon: <Code className="w-8 h-8" />
    }
  ];

  const benefits = [
    "Reduce IT complexity and operational costs",
    "Increase deployment speed and reliability", 
    "Enhance scalability and performance",
    "Strengthen governance, security, and compliance"
  ];

  const services = [
    "Strategic assessments and planning",
    "Implementation of CMPs and IaC pipelines",
    "Migration to secure IaaS environments",
    "Ongoing support and optimization"
  ];

  const eventBrokerFeatures = [
    "Real-time data flow between services and applications",
    "Loose coupling of systems for flexibility and scalability",
    "Faster response times and improved user experiences",
    "Better integration of legacy and modern platforms",
    "Support for microservices and hybrid cloud architectures"
  ];

  const eventServices = [
    "Architecture design and integration using leading middleware and event broker platforms",
    "Deployment and configuration for real-time, scalable systems",
    "Modernization of legacy systems using middleware as a bridge",
    "Ongoing monitoring, optimization, and support"
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-tr from-blue-50/30 via-white to-indigo-50/20">
      {/* Background Elements */}
      <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-blue-200/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-96 h-96 rounded-full bg-indigo-200/15 blur-3xl"></div>
      
      {/* Header Section */}
      <SectionHeader
        title="Infrastructure Solutions"
        description="Modernizing IT with Infrastructure Solutions: CIS, CMP, IaaS, and IaC. In today's rapidly evolving digital landscape, organizations are under constant pressure to modernize their infrastructure for greater agility, efficiency, and scalability."
        icon={<Server className="w-8 h-8 text-white" />}
        iconBackground="bg-gradient-to-br from-[#0047FF] to-[#1E22AA]"
        layout="stacked"
        dividerStyle="dashed"
        dividerColor="from-[#0047FF]"
        badge="Infrastructure Modernization"
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
        {/* Introduction */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center px-4">
          <p className="text-lg text-gray-600 leading-relaxed">
            Core to this transformation are technologies like CIS, CMP, IaaS, IaC - all of which play a vital role in building a future-ready enterprise.
          </p>
        </motion.div>

        {/* Infrastructure Components Grid */}
        <div className="relative py-16 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-r from-[#F5F8FF]/30 via-[#E0E8FF]/20 to-[#F5F8FF]/30">
          <motion.div variants={itemVariants} className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Infrastructure Technologies</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {infrastructureComponents.map((component, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-[#0047FF]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5F8FF]/30 to-[#E0E8FF]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F5F8FF] to-[#E0E8FF] rounded-xl flex items-center justify-center text-[#0047FF] mb-6 group-hover:from-[#E0E8FF] group-hover:to-[#F5F8FF] transition-colors duration-300">
                      {component.icon}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#0047FF] transition-colors">
                      {component.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Why These Solutions Matter & How We Can Help */}
        <div className="relative py-20 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-br from-slate-50/60 via-[#F5F8FF]/40 to-indigo-50/60">
          <motion.div variants={itemVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gradient-to-r from-[#F5F8FF] to-[#E0E8FF] text-[#0047FF]">
                Solutions & Support
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Infrastructure Solutions?
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-[#0047FF] via-[#1E22AA] to-purple-500 mx-auto"></div>
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Together, these components form a powerful suite of infrastructure modernization solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Benefits Column */}
              <div className="space-y-6">
                <div className="text-center lg:text-left mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    Why These Solutions Matter
                  </h4>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] mx-auto lg:mx-0"></div>
                  <p className="text-gray-600 mt-3">They enable businesses to:</p>
                </div>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex items-start p-5 bg-gradient-to-r from-white/90 via-[#F5F8FF]/30 to-white/90 backdrop-blur-sm rounded-2xl border border-blue-100/50 hover:border-[#0047FF]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#0047FF] to-[#1E22AA] rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium flex-1 leading-relaxed group-hover:text-gray-900 transition-colors">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Services Column */}
              <div className="space-y-6">
                <div className="text-center lg:text-left mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    How We Can Help
                  </h4>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto lg:mx-0"></div>
                  <p className="text-gray-600 mt-3">
                    At Aplusloop, we specialize in helping organizations adopt and optimize these technologies to transform their IT infrastructure. Whether you're just starting your cloud journey or looking to automate and scale your existing environment, our team provides:
                  </p>
                </div>
                
                <div className="space-y-4">
                  {services.map((service, index) => (
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
                      <span className="text-gray-700 font-medium flex-1 leading-relaxed group-hover:text-gray-900 transition-colors">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Event Brokers Section - Using ImageTextSection for main intro */}
        <motion.div variants={itemVariants}>
          <ImageTextSection
            title="Event Brokers and Middleware: The Backbone of a Modern IT Infrastructure"
            content={
              <div className="space-y-6">
                <p className="text-base leading-relaxed">
                  In today's fast-paced digital ecosystem, seamless communication between systems, applications, and devices is essential. Two critical components that make this possible are event brokers and middleware—key enablers of efficient, responsive, and scalable IT infrastructures.
                </p>
              </div>
            }
            borderStyle="tilt"
            borderColor="blue"
            badge="Event-Driven Architecture"
            imagePosition="right"
            textContentStyle="bordered"
            decorative={true}
            backgroundColor="rgba(239, 246, 255, 0.5)"
            backgroundStyle="solid"
            imageEffect="saturation"
            customImage={
              <ImagePlaceholder 
                title="Event Brokers & Middleware"
                subtitle="System Communication"
                iconPath="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                accentColor="#0047FF"
                bgColor="#dbeafe"
                height="100%"
              />
            }
          />
        </motion.div>

        {/* What is Middleware & Event Broker - Cards without images */}
        <motion.div variants={itemVariants} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#0047FF]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F5F8FF] to-[#E0E8FF] rounded-xl flex items-center justify-center text-[#0047FF] mb-6">
                <Network className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">What Is Middleware?</h4>
              <p className="text-gray-600 leading-relaxed">
                Middleware is software that acts as a bridge between different applications, services, and systems. It allows them to communicate, share data, and function together—regardless of platform or programming language. Middleware handles messaging, authentication, API management, and more, enabling complex systems to work as a unified whole.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#0047FF]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F5F8FF] to-[#E0E8FF] rounded-xl flex items-center justify-center text-[#0047FF] mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">What Is an Event Broker?</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                An event broker is a type of middleware specifically designed to facilitate event-driven communication. It captures, routes, and distributes real-time events (data changes, user actions, system alerts) between producers and consumers. This allows applications to respond immediately and asynchronously to changes across the infrastructure.
              </p>
              <div className="mt-4 p-4 bg-[#F5F8FF] border border-[#E0E8FF] rounded-lg">
                <p className="text-sm text-[#0047FF]">
                  <strong>Examples:</strong> Apache Kafka, Solace, RabbitMQ, AWS EventBridge
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Components Matter & Services - No images needed */}
        <div className="relative py-20 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-r from-[#F5F8FF]/50 via-[#E0E8FF]/30 to-[#F5F8FF]/50">
          <motion.div variants={itemVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gradient-to-r from-[#E0E8FF] to-[#F5F8FF] text-[#0047FF]">
                Event-Driven Benefits & Services
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Building Connected, Responsive IT Environments
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] mx-auto"></div>
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Together, event brokers and middleware form the <strong>nervous system of your IT environment</strong>, enabling:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Why Components Matter */}
              <div className="space-y-6">
                <div className="text-center lg:text-left mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    Why These Components Matter
                  </h4>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] mx-auto lg:mx-0"></div>
                </div>
                
                <div className="space-y-4">
                  {eventBrokerFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex items-start p-5 bg-gradient-to-r from-white/90 via-[#F5F8FF]/30 to-white/90 backdrop-blur-sm rounded-2xl border border-[#0047FF]/10 hover:border-[#0047FF]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#0047FF] to-[#1E22AA] rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium flex-1 leading-relaxed group-hover:text-gray-900 transition-colors">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* How We Help */}
              <div className="space-y-6">
                <div className="text-center lg:text-left mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    How We Help
                  </h4>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] mx-auto lg:mx-0"></div>
                  <p className="text-gray-600 mt-3">
                    At APLUSLOOP, we design and deliver robust middleware and event-driven architectures tailored to your organization's needs. Our services include:
                  </p>
                </div>
                
                <div className="space-y-4">
                  {eventServices.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex items-start p-5 bg-gradient-to-r from-white/90 via-[#F5F8FF]/30 to-white/90 backdrop-blur-sm rounded-2xl border border-[#0047FF]/10 hover:border-[#0047FF]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#0047FF] to-[#1E22AA] rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium flex-1 leading-relaxed group-hover:text-gray-900 transition-colors">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Final Note */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                By incorporating event brokers and middleware into your infrastructure, we help you <strong>build a connected, responsive, and future-ready IT environment</strong>.
              </p>
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
                Ready to Modernize Your Infrastructure?
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We're committed to being a trusted partner in your digital transformation journey. Let's modernize your infrastructure—efficiently, securely, and with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-[#0047FF] font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  <span>Contact us today to explore how we can help you build a smarter, future-proof foundation</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}