"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Target } from 'lucide-react';

const VisionMission = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
          >
            <div className="absolute h-full w-1.5 bg-blue-600 left-0 top-0 transform origin-bottom transition-all duration-500 group-hover:scale-y-110"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a global leader in delivering innovative, sustainable, and human-centered <span className="font-semibold text-blue-700">Technology, Business Consulting, and Marketing Solutions</span> that empower businesses to thrive in a connected world.
              </p>
            </div>
          </motion.div>
          
          {/* Mission Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
          >
            <div className="absolute h-full w-1.5 bg-indigo-600 right-0 top-0 transform origin-bottom transition-all duration-500 group-hover:scale-y-110"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At <span className="font-semibold text-indigo-700">Aplusloop</span>, we are committed to shaping the future of business by transforming insights into impact. Through a blend of strategy, technology, and creative excellence, we help clients unlock measurable value—enhancing customer experiences, optimizing operations, and enabling sustainable growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;