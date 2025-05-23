import React from 'react';
import { motion } from 'framer-motion';
import { Car, Settings, Layers, Truck, Network } from 'lucide-react';

const SmartMobilitySection = () => {
  const sectionContent = {
    title: "Smart Mobility & Fleet Management",
    subtitle: "Our Comprehensive Mobility Solutions",
    description: "Delivering intelligent, tech-driven solutions to optimize fleet performance, reduce operational costs, and power sustainable urban mobility"
  };

  const mobilityServices = [
    {
      icon: Car,
      title: "Fleet Optimization",
      description: "Maximize vehicle utilization and reduce costs with intelligent routing, scheduling, and real-time monitoring. Our advanced fleet tools ensure each vehicle is used efficiently—minimizing downtime and fuel waste."
    },
    {
      icon: Settings,
      title: "Operational Efficiency",
      description: "Drive smarter operations through workflow automation and real-time decision-making. We implement digital platforms and IoT-based technologies that streamline tasks, reduce human error, and enhance responsiveness across your fleet operations."
    },
    {
      icon: Layers,
      title: "Scalable Mobility Platforms",
      description: "Whether you're managing a small shuttle network or a multi-city transport system, our modular mobility platforms adapt to your needs—supporting fixed-route services, on-demand transit, and hybrid models with ease."
    },
    {
      icon: Truck,
      title: "Fleet Defined",
      description: "We support fleets of all sizes—from compact cars and vans to large-scale buses and commercial shuttles. Our solutions are tailored to suit your specific vehicle mix and usage model."
    },
    {
      icon: Network,
      title: "Multi-Modal Transit Integration",
      description: "Unify public and private transportation systems with seamless, tech-enabled coordination. We help you enable true mobility-as-a-service (MaaS) by integrating buses, ride-shares, trains, and more into one connected ecosystem."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              {sectionContent.title}
            </h2>
            <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto mb-8">
              {sectionContent.description}
            </p>
            
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {mobilityServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/30 ${
                index === 4 ? 'md:col-span-2 md:max-w-lg md:mx-auto' : ''
              }`}
            >
              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600"></div>
              
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full transform rotate-45 scale-150"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-indigo-300 rounded-full opacity-40"></div>
              
              <div className="relative p-8">
                {/* Icon with enhanced styling */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 mb-6 border border-blue-100/50 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                </div>

                {/* Title with gradient text */}
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Enhanced description */}
                <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SmartMobilitySection;