"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Shield, Users, Award, Target, Leaf } from 'lucide-react';

const OurValues = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Values data
  const values = [
    {
      title: "Innovation",
      description: "We thrive on creative problem-solving and pioneering technologies to deliver future-ready solutions.",
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-100",
      delay: 0.1
    },
    {
      title: "Commitment",
      description: "We are dedicated to our clients' success and follow through on our promises with passion and accountability.",
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-100",
      delay: 0.2
    },
    {
      title: "Integrity",
      description: "We act with transparency, ethics, and responsibility—earning trust every step of the way.",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-100",
      delay: 0.3
    },
    {
      title: "Collaboration",
      description: "We believe in growing together—our team, our clients, and our community.",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-100",
      delay: 0.4
    },
    {
      title: "Excellence",
      description: "From strategy to execution, we aim for A+ standards in everything we do.",
      icon: <Award className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-100",
      delay: 0.5
    },
    {
      title: "Customer Centricity",
      description: "Every decision we make starts and ends with delivering long-term value to our clients.",
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-100",
      delay: 0.6
    },
    {
      title: "Sustainability",
      description: "We design solutions with future growth in mind—balancing performance with purpose.",
      icon: <Leaf className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-100",
      delay: 0.7,
      span: true
    }
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            The principles that guide everything we do
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: value.delay }}
              whileHover={{ y: -8 }}
              className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 ${value.span ? 'md:col-span-1 lg:col-span-2' : ''}`}
            >
              <div className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;