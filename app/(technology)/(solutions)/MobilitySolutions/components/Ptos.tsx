"use client";

import DashboardMapPlaceholder from "@/components/reusable/DashboardMapPlaceholder";
import React from "react";
import { motion } from "framer-motion";

const Ptos = () => {
  const keyFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real-time Fleet Monitoring",
      description: "Track and manage your entire fleet with live GPS updates",
      stat: "99.9%",
      statLabel: "Uptime"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Advanced Analytics",
      description: "AI-powered insights to optimize routes and reduce costs",
      stat: "35%",
      statLabel: "Cost Reduction"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Smart Route Optimization",
      description: "Dynamic routing algorithms adapt to traffic in real-time",
      stat: "28%",
      statLabel: "Faster Routes"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with Centered Content */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 overflow-hidden min-h-screen">
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-300/10 rounded-full blur-3xl"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-2 mb-8 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-blue-100"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                NEXT-GEN TRANSIT TECHNOLOGY
              </span>
            </motion.div>
            
            {/* Enhanced Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-blue-900">Public Transport</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Optimization Solution
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-4 bg-blue-200/30 transform -skew-x-12"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your transit operations with{" "}
              <span className="font-semibold text-blue-700">intelligent fleet management</span>{" "}
              and{" "}
              <span className="font-semibold text-blue-700">real-time analytics</span>{" "}
              powered by advanced AI technology
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center mb-14">
              <motion.button
                className="group relative px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  Schedule Demo
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
              
              <motion.button
                className="group px-10 py-4 bg-white/90 backdrop-blur-sm text-blue-600 rounded-xl font-semibold border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.button>
            </div>

            {/* Trust Metrics */}
            {/* <motion.div
              className="flex flex-wrap justify-center items-center gap-12 mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-900">500+</h3>
                <p className="text-sm text-gray-600">Active Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-900">10M+</h3>
                <p className="text-sm text-gray-600">Routes Optimized</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-900">99.9%</h3>
                <p className="text-sm text-gray-600">Uptime</p>
              </div>
            </motion.div> */}
          </motion.div>
          
          {/* Enhanced Dashboard Preview */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-100/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
            <DashboardMapPlaceholder height="600px" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-white to-blue-50/30 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              CUTTING-EDGE CAPABILITIES
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Powerful Features for</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Transit
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive suite of intelligent solutions helps you optimize operations 
              and enhance passenger experience.
            </p>
          </motion.div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/50 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/20 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-baseline space-x-2 pt-4 border-t border-gray-100">
                    <motion.span 
                      className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {feature.stat}
                    </motion.span>
                    <span className="text-sm text-gray-500 font-medium">
                      {feature.statLabel}
                    </span>
                  </div>
                </div>
                
                {/* Hover Accent Line */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Limited Time Offer</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to{" "}
              <span className="relative">
                <span className="relative z-10">Transform</span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-3 bg-blue-400/30"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.span>
              </span>{" "}
              Your Transit Operations?
            </h2>
            
            <p className="text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 500+ leading transport operators who have revolutionized their services
              and saved millions in operational costs
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <motion.button
                className="group relative px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.button>
              
              <motion.button
                className="group px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  Contact Sales
                  <svg className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 text-blue-100/70 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-bounce"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Ptos;