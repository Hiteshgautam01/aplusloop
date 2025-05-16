"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Star } from 'lucide-react';

const UniqueApproach = () => {
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

  // Features of our unique approach
  const features = [
    "Customer-obsessed approach",
    "Agile and highly responsive",
    "Accountability culture",
    "Deep technical expertise",
    "Strategic knowledge",
    "Human-centered thinking"
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-bl from-indigo-50/50 via-white to-blue-50/30"></div>
      <div className="absolute w-full h-40 top-0 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute w-full h-40 bottom-0 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-100/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-100/20 blur-3xl"></div>
      
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
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
              <div className="max-w-lg">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 mb-6"
                >
                  <Sparkles className="h-4 w-4 text-indigo-600 mr-2" />
                  <span className="text-sm font-semibold text-indigo-700">What Makes Us Different</span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                >
                  Why We Are <span className="relative inline-block">
                    <span className="relative z-10">Unique</span>
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
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    At <span className="font-semibold text-blue-700">Aplusloop</span>, what sets us apart is not just our wide-ranging expertise—but the way we deliver it. 
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                            <Check className="h-3 w-3 text-blue-600" />
                          </div>
                        </div>
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg mt-6">
                    Our culture is rooted in accountability, where every team member goes above and beyond to support client needs.
                  </p>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-700 leading-relaxed text-lg"
                >
                  Whether it's solving complex IT challenges, crafting compelling marketing campaigns, or transforming business models, our commitment remains unwavering: to deliver excellence and empower our clients for sustainable success.
                </motion.p>
              </div>
            </div>
            
            {/* Right Content - Tailored Approach */}
            <div className="md:w-1/2 relative">
              {/* Blue Angular Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 transform md:skew-x-6 md:origin-top-right"></div>
              
              <div className="relative h-full flex items-center p-8 md:p-12 lg:p-16">
                <div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-8 shadow-xl"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mr-4">
                        <Star className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Tailored Approach</h3>
                    </div>
                    
                    <p className="text-white/90 text-lg mb-6">
                      No one-size-fits-all. Every solution is personalized, strategic, and built for scale.
                    </p>
                    
                    <ul className="space-y-3">
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="flex items-center text-white/90"
                      >
                        <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span>Architect innovative & impactful solutions</span>
                      </motion.li>
                      
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        className="flex items-center text-white/90"
                      >
                        <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span>Deep technical & strategic knowledge</span>
                      </motion.li>
                      
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        className="flex items-center text-white/90"
                      >
                        <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span>Human-centered thinking approach</span>
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
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl font-medium text-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
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

export default UniqueApproach;
