"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Target, Building, ChevronRight, Sparkles } from 'lucide-react';

const AboutSection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white to-slate-100">
        {/* Background Elements */}
        <div className="absolute right-0 top-20 h-96 w-96 bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute left-20 bottom-20 h-80 w-80 bg-indigo-100/30 rounded-full blur-[100px] -z-10"></div>
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.span 
                variants={fadeIn}
                className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="h-4 w-4 inline-block mr-2" /> 
                Welcome to Aplusloop
              </motion.span>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Transforming <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">insights</span> into <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">impact</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                <span className="font-semibold">Aplusloop</span> is a future-focused technology and marketing solutions company headquartered in the UAE, with an expansive presence across Dubai, Abu Dhabi, Sharjah, and beyond.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a href="#about" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </a>
                <a href="#contact" className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md border border-blue-100 hover:bg-blue-50 transition-all duration-300">
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right Image Container */}
            <motion.div 
              className="lg:w-1/2 mt-12 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-white p-3 shadow-2xl shadow-blue-500/10">
                {/* Image placeholder with gradient overlay */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-600/90 mix-blend-multiply"></div>
                  <img src="/api/placeholder/800/600" alt="Enterprise Solutions" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Future-Focused Solutions</h3>
                    <p className="text-white/90">Building resilient and high-performing enterprises</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full blur-2xl opacity-70"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main About Section */}
      <section id="about" className="py-24 relative overflow-hidden bg-white">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="absolute right-0 top-1/4 h-64 w-64 bg-blue-50/50 rounded-full blur-[80px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">About Us</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left image grid */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="col-span-2 rounded-xl overflow-hidden shadow-lg h-64 relative">
                  <img src="/api/placeholder/600/400" alt="Headquarters" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">UAE Headquarters</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-40 relative">
                  <img src="/api/placeholder/300/240" alt="Dubai Office" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium">Dubai</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-40 relative">
                  <img src="/api/placeholder/300/240" alt="Abu Dhabi Office" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium">Abu Dhabi</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-50 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-50 rounded-full blur-2xl -z-10"></div>
              </div>
            </motion.div>
            
            {/* Right content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg inline-block mb-6">
                <div className="bg-white p-2 rounded-md">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in Building Resilient Enterprises
              </h3>
              
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <span className="font-semibold">Aplusloop</span> is a future-focused technology and marketing solutions company headquartered in the UAE, with an expansive presence across Dubai, Abu Dhabi, Sharjah, and beyond. We specialize in delivering integrated business consulting, cutting-edge IT services, and transformative digital marketing solutions that help organizations stay ahead in an ever-evolving digital economy.
                </p>
                <p>
                  Our strength lies in a collaborative leadership team of seasoned C-level executives, each bringing deep domain expertise across technology, marketing, and business transformation. This synergy enables us to co-create strategies that are scalable, secure, and tailored to the specific needs of diverse industries.
                </p>
                <p>
                  From on-premise to cloud-based platforms, cybersecurity to digital campaigns, and consulting to implementation, we are your trusted partner in building resilient and high-performing enterprises.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Technology</span>
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">Business Consulting</span>
                <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">Marketing Solutions</span>
                <span className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">Digital Transformation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(79,70,229,0.02)_1px,transparent_1px)] bg-[size:50px_50px] z-0"></div>
        <div className="absolute left-0 top-1/3 h-96 w-96 bg-indigo-50/50 rounded-full blur-[150px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-600 font-semibold uppercase tracking-wider text-sm">Our Direction</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">Vision & Mission</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8 mt-12">
            {/* Vision Card */}
            <motion.div 
              className="flex-1 bg-white rounded-2xl overflow-hidden shadow-xl shadow-blue-100/80 border border-gray-100 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)",
                transition: { duration: 0.5 }
              }}
            >
              {/* Decorative top bar */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              
              {/* Card content */}
              <div className="p-8 md:p-10">
                <div className="flex items-start mb-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-5 shadow-md border border-blue-100">
                    <Globe className="w-7 h-7 text-blue-600" />
                  </div>
                  
                  <div>
                    <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold block mb-1">
                      Our Vision
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Global Leadership
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  To be a global leader in delivering <span className="text-blue-600 font-medium">innovative</span>, <span className="text-blue-600 font-medium">sustainable</span>, and <span className="text-blue-600 font-medium">human-centered</span> <span className="font-semibold">Technology, Business Consulting, and Marketing Solutions</span> that empower businesses to thrive in a connected world.
                </p>
                
                {/* Vision image area */}
                <div className="rounded-xl overflow-hidden h-48 relative">
                  <img src="/api/placeholder/700/350" alt="Vision" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">V</span>
                      </div>
                      <p className="font-medium">Empowering Global Business</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Mission Card */}
            <motion.div 
              className="flex-1 bg-white rounded-2xl overflow-hidden shadow-xl shadow-indigo-100/80 border border-gray-100 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 30px 60px -12px rgba(79, 70, 229, 0.25)",
                transition: { duration: 0.5 }
              }}
            >
              {/* Decorative top bar */}
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
              
              {/* Card content */}
              <div className="p-8 md:p-10">
                <div className="flex items-start mb-8">
                  <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mr-5 shadow-md border border-indigo-100">
                    <Target className="w-7 h-7 text-indigo-600" />
                  </div>
                  
                  <div>
                    <span className="text-sm uppercase tracking-wider text-indigo-600 font-semibold block mb-1">
                      Our Mission
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Insights into Impact
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  At <span className="font-semibold text-indigo-700">Aplusloop</span>, we are committed to shaping the future of business by transforming insights into impact. Through a blend of <span className="text-indigo-600 font-medium">strategy</span>, <span className="text-indigo-600 font-medium">technology</span>, and <span className="text-indigo-600 font-medium">creative excellence</span>, we help clients unlock measurable value—enhancing customer experiences, optimizing operations, and enabling sustainable growth.
                </p>
                
                {/* Mission image area */}
                <div className="rounded-xl overflow-hidden h-48 relative">
                  <img src="/api/placeholder/700/350" alt="Mission" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-indigo-800/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      <p className="font-medium">Transforming Business Strategy</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;