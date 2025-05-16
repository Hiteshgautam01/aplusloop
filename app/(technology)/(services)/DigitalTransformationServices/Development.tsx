"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Development = () => {
  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-light text-center text-gray-800 mb-6"
        >
          Development, Integration and Deployment
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-10"
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-20"
        >
          We help organizations implement and modernize enterprise platforms like HRMS, CRM, and ERP. 
          Our experts develop custom applications that align with your business workflows and ensure 
          seamless integration for unified operations. From launch to maintenance, we ensure every app 
          delivers performance, security, and value.
        </motion.p>
        
        {/* Evolution of SDLC Timeline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">
            Evolution of Software Development
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-100"></div>
            
            {/* Era 1: Early Days */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-32 relative"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white p-2 rounded-full border border-blue-100 shadow-md z-10">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-normal text-gray-800 mb-4">Early Days of Software</h3>
                  <p className="text-gray-600">The beginning of software engineering with waterfall methodologies and limited collaboration tools. Development cycles were lengthy and adaptability was minimal.</p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="overflow-hidden rounded-lg shadow-md border border-blue-50"
                  >
                    <img src="/api/placeholder/500/300" alt="Early software development" className="w-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Era 2: Evolution */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="mb-32 relative"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white p-2 rounded-full border border-blue-100 shadow-md z-10">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <h3 className="text-2xl font-normal text-gray-800 mb-4">Evolution of Methodologies</h3>
                  <p className="text-gray-600">Introduction of agile practices, iterative development, and the beginning of DevOps culture. Teams started to collaborate more efficiently with improved tools.</p>
                </div>
                <div className="md:order-1 flex justify-center">
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="overflow-hidden rounded-lg shadow-md border border-blue-50"
                  >
                    <img src="/api/placeholder/500/300" alt="Evolution of methodologies" className="w-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Era 3: Modern */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="relative"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white p-2 rounded-full border border-blue-100 shadow-md z-10">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-normal text-gray-800 mb-4">Today's Integrated World</h3>
                  <p className="text-gray-600">Continuous integration/deployment, microservices architecture, and cloud-native development. Organizations now operate in a fully connected ecosystem with automated pipelines.</p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="overflow-hidden rounded-lg shadow-md border border-blue-50"
                  >
                    <img src="/api/placeholder/500/300" alt="Modern integrated development" className="w-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        

        
        {/* Our Services */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-blue-50"
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="w-6 h-6 rounded-md bg-gradient-to-r from-blue-400 to-blue-500"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Enterprise Platforms</h3>
              <p className="text-gray-600">Implementation and modernization of HRMS, CRM, and ERP systems tailored to your organization's needs.</p>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-blue-50"
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="w-6 h-6 rounded-md bg-gradient-to-r from-indigo-400 to-blue-500"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Custom Applications</h3>
              <p className="text-gray-600">Bespoke solutions that align perfectly with your business workflows and operational requirements.</p>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-blue-50"
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="w-6 h-6 rounded-md bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Seamless Integration</h3>
              <p className="text-gray-600">End-to-end deployment ensuring performance, security, and continuous value delivery.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Development;