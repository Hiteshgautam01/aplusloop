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
  AlertTriangle
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Essential Zero Trust Solutions</h1>
            <p className="text-lg text-blue-100 max-w-3xl">
              To implement Zero Trust efficiently and effectively, organizations must adopt technologies 
              that can perform several crucial capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                className="relative group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                custom={index * 0.2}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 z-10">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-50 rounded-lg p-3 group-hover:bg-white transition-colors duration-300">
                        <div className="text-blue-600">
                          {capability.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {capability.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forcepoint Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Forcepoint: A Leading Zero Trust Platform</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {forcepointInfo.description}
            </p>
          </motion.div>

          <div className="space-y-8">
            {forcepointInfo.solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index * 0.2 + 0.5}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-1 bg-gradient-to-br from-blue-700 to-blue-900 p-6 flex items-center justify-center">
                    <div className="text-center">
                      {React.cloneElement(solution.icon, { className: "h-12 w-12 text-white mx-auto mb-3" })}
                      <h3 className="text-xl font-bold text-white">{solution.id === 1 ? "ZTNA" : "ONE"}</h3>
                    </div>
                  </div>
                  <div className="lg:col-span-4 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZeroTrust;