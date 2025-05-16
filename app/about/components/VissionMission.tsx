"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Target, Sparkles } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/40"></div>
      <div className="absolute right-0 top-0 h-64 w-64 bg-blue-100/40 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute left-0 bottom-0 h-64 w-64 bg-indigo-100/40 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute left-1/4 top-1/3 h-32 w-32 bg-purple-100/30 rounded-full blur-[80px] -z-10"></div>
      
      {/* Subtle grid background for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Refined animated heading with subtle decoration */}
        <div className="text-center mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-2"
          >
            <Sparkles className="h-6 w-6 text-blue-500 inline-block mr-2 animate-pulse" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 tracking-tight mb-6 inline-block"
          >
            Our Direction
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '180px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Guiding principles that drive our innovation and shape our commitment to excellence
          </motion.p>
        </div>
      
        <div className="md:flex gap-12 items-stretch max-w-5xl mx-auto">
          {/* Vision Card - Enhanced with glass morphism and better visual hierarchy */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ 
              y: -8,
              boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)",
              transition: { duration: 0.5 }
            }}
            className="flex-1 bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_15px_35px_-5px_rgba(59,130,246,0.15)] mb-10 md:mb-0 relative border border-blue-100/80"
          >
            {/* Enhanced decorative elements */}
            <div className="absolute w-40 h-40 -top-20 -left-20 bg-blue-200/40 rounded-full blur-3xl"></div>
            <div className="absolute w-24 h-24 top-1/2 right-0 translate-x-1/2 bg-indigo-200/30 rounded-full blur-2xl"></div>
            
            <div className="relative h-full flex flex-col">
              {/* Refined Top Gradient Border */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
              
              <div className="p-10 md:p-12 flex-1 flex flex-col">
                <div className="flex items-center mb-10">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-18 h-18 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mr-6 shadow-md border border-blue-100/80 p-4"
                  >
                    <Globe className="w-10 h-10 text-blue-600 drop-shadow-sm" />
                  </motion.div>
                  
                  <div>
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-sm uppercase tracking-widest text-blue-600 font-semibold block mb-1 letter-spacing-wider"
                    >
                      Our Vision
                    </motion.span>
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight"
                    >
                      Global Leadership
                    </motion.h3>
                  </div>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-gray-700 leading-relaxed text-lg mb-6 flex-1"
                >
                  To be a global leader in delivering <span className="text-blue-600 font-medium">innovative</span>, <span className="text-blue-600 font-medium">sustainable</span>, and <span className="text-blue-600 font-medium">human-centered</span> <span className="font-semibold">Technology, Business Consulting, and Marketing Solutions</span> that empower businesses to thrive in a connected world.
                </motion.p>
                
                {/* Enhanced decorative element */}
                <div className="flex justify-end mt-auto">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="rounded-full w-16 h-16 flex items-center justify-center relative"
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 animate-slow-spin"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-white text-xs font-bold">V</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Mission Card - Enhanced with glass morphism and better visual hierarchy */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ 
              y: -8,
              boxShadow: "0 30px 60px -12px rgba(79, 70, 229, 0.25)",
              transition: { duration: 0.5 }
            }}
            className="flex-1 bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_15px_35px_-5px_rgba(79,70,229,0.15)] relative border border-indigo-100/80"
          >
            {/* Enhanced decorative elements */}
            <div className="absolute w-40 h-40 -bottom-20 -right-20 bg-indigo-200/40 rounded-full blur-3xl"></div>
            <div className="absolute w-24 h-24 top-1/2 left-0 -translate-x-1/2 bg-blue-200/30 rounded-full blur-2xl"></div>
            
            <div className="relative h-full flex flex-col">
              {/* Refined Top Gradient Border */}
              <div className="h-1.5 w-full bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"></div>
              
              <div className="p-10 md:p-12 flex-1 flex flex-col">
                <div className="flex items-center mb-10">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-18 h-18 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center mr-6 shadow-md border border-indigo-100/80 p-4"
                  >
                    <Target className="w-10 h-10 text-indigo-600 drop-shadow-sm" />
                  </motion.div>
                  
                  <div>
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-sm uppercase tracking-widest text-indigo-600 font-semibold block mb-1 letter-spacing-wider"
                    >
                      Our Mission
                    </motion.span>
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight"
                    >
                      Insights into Impact
                    </motion.h3>
                  </div>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-gray-700 leading-relaxed text-lg mb-6 flex-1"
                >
                  At <span className="font-semibold text-indigo-700">Aplusloop</span>, we are committed to shaping the future of business by transforming insights into impact. Through a blend of <span className="text-indigo-600 font-medium">strategy</span>, <span className="text-indigo-600 font-medium">technology</span>, and <span className="text-indigo-600 font-medium">creative excellence</span>, we help clients unlock measurable value—enhancing customer experiences, optimizing operations, and enabling sustainable growth.
                </motion.p>
                
                {/* Enhanced decorative element */}
                <div className="flex justify-end mt-auto">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="rounded-full w-16 h-16 flex items-center justify-center relative"
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-200 animate-slow-spin"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center shadow-md">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Add custom animation for the spinning decorative element */}
      <style jsx global>{`
        @keyframes slow-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-slow-spin {
          animation: slow-spin 12s linear infinite;
        }
        .letter-spacing-wider {
          letter-spacing: 0.1em;
        }
      `}</style>
    </section>
  );
};

export default VisionMission;