import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Database, Code, Check, ChevronRight } from 'lucide-react';

const BlockchainWeb3 = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const services = [
    {
      title: "Smart Contracts Development",
      description: "Custom smart contract solutions for decentralized applications, DeFi protocols, and NFT marketplaces with rigorous security audits.",
      icon: <Code className="w-5 h-5" />,
      color: "blue",
      stats: "85% faster deployment"
    },
    {
      title: "Blockchain Security",
      description: "Comprehensive security audits for blockchain applications, vulnerability assessments, and implementation of best practices to protect your assets.",
      icon: <Shield className="w-5 h-5" />,
      color: "blue",
      stats: "99.9% secure transactions"
    },
    {
      title: "Web3 Integration",
      description: "Seamless integration of Web3 technologies with existing systems, including wallet connections, token standards, and decentralized storage solutions.",
      icon: <Database className="w-5 h-5" />,
      color: "blue",
      stats: "40+ supported protocols"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/3 w-1/2 h-96 bg-gradient-to-r from-blue-50 to-transparent rounded-r-3xl -z-10" />
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-indigo-50/40 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute left-0 top-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute right-1/4 top-1/4 w-48 h-48 bg-violet-50/30 rounded-full blur-2xl opacity-60 -z-10" />
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-600 border border-indigo-100 hover:from-indigo-100 hover:to-blue-100 mb-4 px-4 py-1.5 text-sm font-medium">
              Blockchain & Web3
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Decentralized</span> Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Harness the power of blockchain technology and Web3 to build transparent, secure, and innovative applications.
            </p>
          </motion.div>
        </div>

        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Image section - with exactly 500px height */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.2)]">
              <Image
                src="/blockchainWeb.png"
                alt="Blockchain and Web3"
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay elements */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-indigo-900/80 via-blue-800/50 to-transparent backdrop-filter backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-600/30 to-blue-600/30 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white text-xs">Network Active</span>
                </div>
              </motion.div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="bg-gradient-to-r from-indigo-900/90 to-blue-900/80 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/90 text-sm font-medium">Secure blockchain network</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Smart Contracts', 'DeFi', 'dApps', 'NFTs'].map((tag, i) => (
                      <span key={i} className="bg-white/10 text-white/90 px-2 py-1 rounded-md text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Text section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 order-2"
          >
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Empowering the decentralized future</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Our blockchain solutions empower businesses to harness the full potential of decentralized technologies, enabling transparent, secure, and efficient digital ecosystems.
              </p>
              
              <div className="mb-8 space-y-3">
                {[
                  "Build trustless applications with smart contract automation",
                  "Reduce transaction costs by up to 60% with blockchain networks",
                  "Ensure data integrity through immutable ledger technology",
                  "Scale operations with distributed consensus mechanisms"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 rounded-xl mb-6">
                <div className="text-center">
                  <h4 className="text-indigo-600 font-bold text-xl mb-1">200+</h4>
                  <p className="text-gray-600 text-xs">Projects</p>
                </div>
                <div className="text-center">
                  <h4 className="text-indigo-600 font-bold text-xl mb-1">50M+</h4>
                  <p className="text-gray-600 text-xs">Transactions</p>
                </div>
                <div className="text-center">
                  <h4 className="text-indigo-600 font-bold text-xl mb-1">15+</h4>
                  <p className="text-gray-600 text-xs">Networks</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 group shadow-md">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:text-indigo-700 px-4 py-2 rounded-lg">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Service cards section (below) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white border-none h-full shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`bg-${service.color}-50 p-3 rounded-lg group-hover:bg-${service.color}-600  transition-colors duration-300`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{service.title}</h3>
                      <p className={`text-${service.color}-600 font-medium text-sm`}>{service.stats}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  
                  <div className="mt-auto">
                    <button className={`text-${service.color}-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      Learn more <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlockchainWeb3;