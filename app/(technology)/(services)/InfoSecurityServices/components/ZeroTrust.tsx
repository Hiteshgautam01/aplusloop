import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Smartphone, 
  Network, 
  Globe, 
  LineChart, 
  Cog, 
  AlertTriangle,
  ChevronRight
} from "lucide-react";

const ZeroTrust = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Data for Zero Trust capabilities
  const capabilities = [
    {
      id: 1,
      title: "Manage identities and access",
      description: "Identity and access management (IAM) solutions use dynamic and contextual analysis to validate users seeking access to the network and provide limited access to resources. Technology like multi-factor authentication (MFA) effectively limits the ability of unauthorized users to access IT assets.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Verify endpoints",
      description: "Endpoint verification solutions authenticate devices as they connect to the network, ensuring that each device is free from threats and is controlled by a legitimate user.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Segment networks, applications and IT assets",
      description: "Microsegmentation solutions create many narrow security perimeters within the network, isolating individual data assets, applications and workloads to protect them from unauthorized access.",
      icon: <Network className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Enable remote connection",
      description: "Zero Trust Network Access (ZTNA) solutions enable users to securely connect to internal datacenter and private applications from any location on any device.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Continuously monitor the network",
      description: "Real-time monitoring is critical to protecting the organization from threats and making more informed decisions about access control, segmentation and other components of the Zero Trust framework.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Automate management and orchestrate incident response",
      description: "To minimize complexity, a Zero Trust platform must automate as many tasks as possible to enhance scalability, reduce errors and consistently apply security policies across the enterprise.",
      icon: <Cog className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Detect and respond to threats",
      description: "Technologies for threat detection and response help IT teams uncover attacks and breaches earlier to mitigate them faster.",
      icon: <AlertTriangle className="w-6 h-6" />
    }
  ];

  // Forcepoint information
  const forcepointInfo = {
    description: "As a Zero Trust company, Forcepoint is a leading provider of user and data security solutions trusted by more than 14,500 worldwide organizations to safeguard their IT environments while driving digital transformation and growth. Our Zero Trust security platform includes solutions built to simplify Zero Trust security while minimizing effort and investment.",
    solutions: [
      {
        id: 1,
        title: "Zero Trust Network Access (ZTNA)",
        description: "Forcepoint ZTNA enables remote workers to securely connect to apps and data on an organization's network using their own devices. This Forcepoint technology implements Zero Trust policies efficiently by verifying remote workers and giving them access to only the private apps they need. Advanced DLP and malware-scanning technology help to block and remediate any threats, enhancing Zero Trust cloud security.",
        icon: <Globe />
      },
      {
        id: 2,
        title: "Forcepoint ONE",
        description: "Forcepoint ONE is an all in one Zero Trust platform. It enables users to implement the principles discussed throughout this article. The tool enables users to implement Zero Trust principles: private application and internal data center access, web access in combination with SWG, RBI, and Integrated DLP across web, cloud and private cloud to secure data.",
        icon: <Shield />
      }
    ]
  };

  return (
    <div className="bg-white font-sans">
      {/* Hero Section - Enhanced with geometric patterns and depth */}
      <section className="relative overflow-hidden pt-24 lg:pt-32">
        {/* Background gradients and patterns */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRhNCA0IDAgMSAxIDAgOCA0IDQgMCAwIDEgMC04em0wLTEyYTQgNCAwIDEgMSAwIDggNCA0IDAgMCAxIDAtOHptMTIgMTJhNCA0IDAgMSAxIDAgOCA0IDQgMCAwIDEgMC04ek0xMiAzNGE0IDQgMCAxIDEgMCA4IDQgNCAwIDAgMSAwLTh6bTAtMTJhNCA0IDAgMSAxIDAgOCA0IDQgMCAwIDEgMC04em0xMiAwYTQgNCAwIDEgMSAwIDggNCA0IDAgMCAxIDAtOHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Glowing orbs for depth */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500 opacity-20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 right-10 w-96 h-96 bg-blue-400 opacity-15 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-lg rounded-full mb-8 border border-white/20 shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Essential Zero Trust Solutions
            </h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
              variants={fadeIn}
              custom={0.3}
            >
              To implement Zero Trust efficiently and effectively, organizations must adopt technologies 
              that can perform several crucial capabilities.
            </motion.p>
            
            {/* Decorative element */}
            <motion.div 
              className="mt-10 h-1 w-24 bg-gradient-to-r from-blue-300 to-blue-200 rounded-full"
              variants={scaleUp}
              custom={0.5}
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section - Redesigned with premium card layout */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Subtle background pattern */}
       
        
        {/* Background blue blobs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-200/30 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Essential Capabilities
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                custom={index * 0.15}
              >
                <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative border border-blue-50">
                  {/* Gradient side border instead of top */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-all duration-300">
                        <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                          {React.cloneElement(capability.icon, { className: "h-5 w-5" })}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {capability.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed pl-14">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forcepoint Section - Enhanced with premium design */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
        {/* Background elements */}
        <div className="absolute left-0 top-0 w-1/3 h-full bg-blue-100/30 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-blue-100/40 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 mb-6 border border-blue-200 shadow-sm">
              <Shield className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-700">Industry Leader</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Forcepoint: A Leading Zero Trust Platform
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {forcepointInfo.description}
            </p>
          </motion.div>

          <div className="space-y-6">
            {forcepointInfo.solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleUp}
                custom={index * 0.2 + 0.5}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-8">
                    <div className="md:col-span-2 bg-gradient-to-br from-blue-500 to-blue-700 p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center mb-3 border border-white/20">
                          {React.cloneElement(solution.icon, { className: "h-6 w-6 text-white" })}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {solution.id === 1 ? "ZTNA" : "ONE"}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="md:col-span-6 p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                      
                      {/* Call to action */}
                      <div className="mt-4 flex justify-end">
                        <button className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                          Learn more
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Final CTA */}
          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1.3}
          >
            <button className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl text-base font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Request a Zero Trust assessment
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ZeroTrust;