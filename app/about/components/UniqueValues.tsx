"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Star } from 'lucide-react';

const UniqueValues = () => {
  // Item appear animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-bl from-sky-50/40 via-white to-blue-50/20"></div>
      <div className="absolute w-full h-40 top-0 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute w-full h-40 bottom-0 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-100/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-sky-100/20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
        >
          {/* Card Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6bTYgNnY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
          
          <div className="relative md:flex">
            {/* Left Content - Headings and Description */}
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16 bg-gradient-to-br from-white via-white to-blue-50/20">
              <div className="max-w-lg">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-blue-50 mb-6 border border-sky-100/30"
                >
                  <Sparkles className="h-4 w-4 text-sky-600 mr-2" />
                  <span className="text-sm font-semibold text-sky-700">What Makes Us Different</span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold bg-clip-text bg-gradient-to-r from-gray-800 to-gray-900 mb-6"
                >
                  Why We Are <span className="relative inline-block">
                    Unique
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/40 -z-0"></span>
                  </span>
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At <span className="font-semibold text-blue-600">Aplusloop</span>, what sets us apart is not just our wide-ranging expertise—but the way we deliver it. We are customer-obsessed, agile, and highly responsive. Our culture is rooted in accountability, where every team member goes above and beyond to support client needs. Our deep technical and strategic knowledge, combined with human-centered thinking, allows us to architect solutions that are not only innovative but impactful.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg mt-6">
                    Whether it's solving complex IT challenges, crafting compelling marketing campaigns, or transforming business models, our commitment remains unwavering: to deliver excellence and empower our clients for sustainable success.
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Right Content - Our Distinctive Approach */}
            <div className="md:w-1/2 relative">
              {/* Enhanced Modern Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-sky-600 to-indigo-500 transform md:skew-x-6 md:origin-top-right"></div>
              
              <div className="relative h-full flex items-center p-8 md:p-12 lg:p-16">
                <div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-8 shadow-xl border border-white/10"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center text-white mr-4 shadow-md border border-white/10">
                        <Star className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Our Distinctive Approach</h3>
                    </div>
                    
                    <ul className="space-y-5">
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="flex flex-col text-white/90"
                      >
                        <div className="flex items-center mb-1">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center mr-3">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-semibold">Client-First Culture</span>
                        </div>
                        <p className="ml-8 text-sm text-white/80">Our responsiveness and deep commitment to client success make us a trusted growth partner.</p>
                      </motion.li>
                      
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        className="flex flex-col text-white/90"
                      >
                        <div className="flex items-center mb-1">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center mr-3">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-semibold">Cross-Disciplinary Expertise</span>
                        </div>
                        <p className="ml-8 text-sm text-white/80">A fusion of Technology, Marketing, and Business Strategy under one roof.</p>
                      </motion.li>
                      
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        className="flex flex-col text-white/90"
                      >
                        <div className="flex items-center mb-1">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center mr-3">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-semibold">Certified & Compliant</span>
                        </div>
                        <p className="ml-8 text-sm text-white/80">ISO, TRA, SIRA, and MCC certified—your assurance of quality and security.</p>
                      </motion.li>
                      
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        className="flex flex-col text-white/90"
                      >
                        <div className="flex items-center mb-1">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center mr-3">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-semibold">Hands-On Leadership</span>
                        </div>
                        <p className="ml-8 text-sm text-white/80">You benefit from the vision and involvement of our C-level team across every engagement.</p>
                      </motion.li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex justify-start"
                  >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-white/90 rounded-xl font-medium text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                      <span>Learn about our approach</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniqueValues;