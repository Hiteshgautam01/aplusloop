import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Cloud, Database, PieChart, Users, Layers, Cpu, Monitor, Globe, ChevronRight } from 'lucide-react';

const SoftwarePlatforms: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const platforms = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud platforms providing flexible infrastructure for deploying and managing enterprise applications.",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100",
      gradient: "from-blue-600 to-sky-500",
      features: ["Auto-scaling", "High availability", "Pay-as-you-go"]
    },
    {
      title: "Data & Analytics",
      description: "Advanced data platforms that transform raw information into actionable insights through powerful analytics.",
      icon: <PieChart className="w-6 h-6" />,
      color: "bg-violet-50",
      textColor: "text-violet-600",
      borderColor: "border-violet-100",
      gradient: "from-violet-600 to-purple-500",
      features: ["Real-time analytics", "Data warehousing", "Predictive modeling"]
    },
    {
      title: "Enterprise Resource Planning",
      description: "Comprehensive ERP solutions that integrate core business processes and enhance operational efficiency.",
      icon: <Layers className="w-6 h-6" />,
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-100",
      gradient: "from-indigo-600 to-blue-500",
      features: ["Financial management", "Supply chain", "HR integration"]
    },
    {
      title: "Customer Relationship Management",
      description: "CRM platforms that streamline customer interactions and help businesses build stronger relationships.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
      gradient: "from-emerald-600 to-teal-500",
      features: ["Lead management", "Customer insights", "Marketing automation"]
    },
    {
      title: "Database Management",
      description: "Robust database platforms supporting structured and unstructured data for enterprise applications.",
      icon: <Database className="w-6 h-6" />,
      color: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-100",
      gradient: "from-amber-600 to-orange-500",
      features: ["High performance", "Data integrity", "Advanced security"]
    },
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge AI platforms that power intelligent automation and data-driven decision making.",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-100",
      gradient: "from-rose-600 to-pink-500",
      features: ["Neural networks", "Predictive analytics", "Computer vision"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handlePlatformHover = (index: number | null) => {
    setActivePlatform(index);
  };

  return (
    <section className=" relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gray-50 bg-opacity-50 -z-20"></div>
      <div className="absolute w-full h-full opacity-5 -z-10" 
           style={{
             backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0,0,0,0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0,0,0,0.2) 2%, transparent 0%)`,
             backgroundSize: '100px 100px'
           }}></div>
      
      {/* Animated background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl -z-10 transform translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-violet-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              className="bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-600 border border-indigo-100 hover:from-indigo-100 hover:to-blue-100 mb-4 px-4 py-1.5 text-sm font-medium"
            >
              Enterprise Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-5">
              Software <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Platforms</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our comprehensive suite of software platforms designed to optimize operations, enhance productivity, and drive digital transformation.
            </p>
          </motion.div>
        </div>

        {/* Platform cards */}
        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {platforms.map((platform, index) => (
            <motion.div 
              key={index}
              className={`relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group ring-1 ring-gray-200 hover:ring-gray-300`}
              variants={itemVariants}
              onMouseEnter={() => handlePlatformHover(index)}
              onMouseLeave={() => handlePlatformHover(null)}
            >
              <div className={`h-1.5 bg-gradient-to-r ${platform.gradient}`}></div>
              
              <div className="p-6">
                {/* Icon and title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-xl ${platform.color} transition-colors duration-300 ring-1 ring-gray-100`}>
                    <div className={platform.textColor}>
                      {platform.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">{platform.title}</h3>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {platform.description}
                </p>
                
                {/* Features list */}
                <div className="mb-6 space-y-2">
                  {platform.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full ${platform.textColor.replace('text', 'bg')}`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Learn more link */}
                <div className={`text-sm font-medium flex items-center justify-end ${platform.textColor} group-hover:underline`}>
                  Explore platform
                  <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Integration diagram - simple visual representation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200 mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Seamless Integration Ecosystem</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platforms work together through a unified architecture, allowing data and processes to flow effortlessly across your business.
            </p>
          </div>
          
          <div className="flex flex-col items-center py-6">
            <div className="relative w-full max-w-3xl mx-auto h-64 flex items-center justify-center">
              {/* Central hub */}
              <div className="absolute w-24 h-24 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                <Globe className="text-white w-10 h-10" />
              </div>
              
              {/* Platform nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div 
                  key={i}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: i * 0.1 + 0.3, duration: 0.5 } 
                  }}
                  viewport={{ once: true }}
                  style={{ 
                    left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * 150 - 27}px)`, 
                    top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * 150 - 28}px)`,
                  }}
                >
                  <div className={`w-14 h-14 rounded-full bg-white flex items-center justify-center border ${platforms[i].borderColor} shadow-md`}>
                    <div className={platforms[i].textColor}>
                      {platforms[i].icon}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Connection lines */}
              <svg className="absolute w-full h-full" viewBox="0 0 300 300">
                <g transform="translate(150, 150)">
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.line 
                      key={i}
                      x1="0" 
                      y1="0" 
                      x2={Math.cos(angle * Math.PI / 180) * 140} 
                      y2={Math.sin(angle * Math.PI / 180) * 140} 
                      stroke="rgba(79, 70, 229, 0.2)" 
                      strokeWidth="1.5"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ 
                        pathLength: 1, 
                        opacity: 1,
                        transition: { delay: i * 0.1 + 0.1, duration: 0.6 } 
                      }}
                      viewport={{ once: true }}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-indigo-600 to-blue-600 p-10 rounded-2xl shadow-lg text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to transform your business?</h3>
          <p className="max-w-2xl mx-auto mb-8 text-indigo-100">
            Our team of experts can help you select the right platforms and create a customized implementation strategy for your organization.
          </p>
          <button className="bg-white text-indigo-700 font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center">
            Schedule a consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwarePlatforms;