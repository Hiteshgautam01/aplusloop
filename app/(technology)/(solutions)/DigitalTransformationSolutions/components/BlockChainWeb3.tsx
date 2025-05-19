import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Lock, Users, ChevronRight } from 'lucide-react';

const BlockchainWeb3 = () => {
  // Content data arrays
  const headerData = {
    badge: "Blockchain & Web 3.0",
    title: "Web 3.0 and Blockchain: Shaping the Future of the Internet",
    description: "The internet is evolving, and Web 3.0 is at the heart of its next transformation. Often referred to as the \"semantic web,\" Web 3.0 aims to create a more intelligent, decentralized, and user-focused digital world. At the core of this evolution is blockchain technology, enabling transparency, security, and ownership in a way never before possible."
  };

  const sections = [
    {
      title: "What Is Web 3.0?",
      content: "Web 3.0 moves beyond static websites and centralized platforms. It's designed to make the internet more intuitive and personalized by incorporating technologies like artificial intelligence, machine learning, and decentralized networks. Unlike previous versions of the web, Web 3.0 empowers users to control their own data and digital identities.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "The Role of Blockchain",
      content: "Blockchain is the backbone of Web 3.0. It's a distributed ledger technology that allows data to be stored across a network of computers rather than in a central server. This decentralization makes transactions more secure, transparent, and tamper-proof. Cryptocurrencies, decentralized finance (DeFi), and non-fungible tokens (NFTs) are all built on blockchain, showcasing its potential to disrupt traditional industries.",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "Why It Matters",
      content: "Web 3.0 and blockchain together promise a fairer, more open internet—one where users aren't just consumers but also participants and owners. From secure digital identities to decentralized applications (dApps), the possibilities are vast and still unfolding.",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const conclusion = "The future of the internet is being rewritten—and it's more democratic, secure, and user-centric than ever before.";

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
              {headerData.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {headerData.title}
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg">
              {headerData.description}
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
                  <span className="text-white text-xs">Web 3.0 Active</span>
                </div>
              </motion.div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="bg-gradient-to-r from-indigo-900/90 to-blue-900/80 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/90 text-sm font-medium">Blockchain Network</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['DeFi', 'NFTs', 'dApps', 'Crypto'].map((tag, i) => (
                      <span key={i} className="bg-white/10 text-white/90 px-2 py-1 rounded-md text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Text section with two sections */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 order-2"
          >
            <div className="text-left">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{sections[0].title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {sections[0].content}
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{sections[1].title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {sections[1].content}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 group shadow-md">
                  Explore Web 3.0
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:text-indigo-700 px-4 py-2 rounded-lg">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Why It Matters - Full Width Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">{sections[2].title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {sections[2].content}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlockchainWeb3;