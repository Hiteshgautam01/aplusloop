"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ImageTextSection from '@/components/reusable/ImageTextSection';
import { Settings, Database, Server } from 'lucide-react';
import ImagePlaceholder from '@/components/reusable/ImagePlaceholder';

const AutomationServices = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-indigo-100/30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"></div>
      
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100/50 backdrop-blur-sm">
              <Settings className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Automation Services
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our RPA and IT automation services eliminate manual bottlenecks and improve efficiency across IT and business operations. 
            With tools like ITSM, ITAM, and automation frameworks (Ansible, Terraform), we enable organizations to focus on strategic 
            growth by streamlining repetitive processes.
          </p>
        </motion.div>
      </div>
      
      {/* Automation Services Benefits - Using ImageTextSection without width constraints */}
      <ImageTextSection
        title="WHY AUTOMATION IS CRITICAL FOR MODERN BUSINESS"
        content={
          <div className="space-y-3">
            <p className="text-base mb-4">
              Automation empowers organizations to optimize resources, reduce errors, and accelerate operations
              through a systematic approach to eliminating manual processes. The benefits extend across your entire organization:
            </p>
            <div className="pl-2 border-l-4 border-blue-400">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Robotic Process Automation (RPA)</strong> to eliminate repetitive tasks.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>IT Service Management (ITSM)</strong> for automating incident handling and service requests.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>IT Asset Management (ITAM)</strong> for automated asset tracking and lifecycle management.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Business process automation</strong> for end-to-end efficiency.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Infrastructure automation</strong> using tools like Ansible and Terraform.</span>
                </li>
              </ul>
            </div>
          </div>
        }
        borderColor="blue"
        borderStyle="frosted"
        badge="Key Benefits"
        imagePosition="left"
        textContentStyle="card"
        decorative={true}
        backgroundColor="transparent"
        backgroundStyle="none"
        customImage={
          <ImagePlaceholder 
            title="Automation Benefits"
            subtitle="Streamlined Business Operations"
            iconPath="/api/placeholder/48/48"
            accentColor="#3b82f6"
            bgColor="#bfdbfe"
            height="100%"
          />
        }
      />
      
      {/* Service Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.15)" }}
            transition={{ type: "spring", stiffness: 400 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 relative overflow-hidden group"
          >
            <div className="absolute w-32 h-32 bg-blue-50 rounded-full -top-12 -right-12 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative">
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                <Settings className="w-7 h-7 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-4">RPA Solutions</h3>
              <p className="text-gray-600">Eliminate repetitive tasks and free up your team to focus on strategic initiatives with our customized RPA solutions.</p>
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(79, 70, 229, 0.15)" }}
            transition={{ type: "spring", stiffness: 400 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-100 relative overflow-hidden group"
          >
            <div className="absolute w-32 h-32 bg-indigo-50 rounded-full -top-12 -right-12 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative">
              <div className="mb-6 w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center">
                <Database className="w-7 h-7 text-indigo-600" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-4">IT Management</h3>
              <p className="text-gray-600">Streamline your ITSM and ITAM processes with intelligent automation that reduces overhead and improves service delivery.</p>
            </div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.15)" }}
            transition={{ type: "spring", stiffness: 400 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 relative overflow-hidden group"
          >
            <div className="absolute w-32 h-32 bg-blue-50 rounded-full -top-12 -right-12 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative">
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                <Server className="w-7 h-7 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-4">Infrastructure Automation</h3>
              <p className="text-gray-600">Deploy and manage infrastructure at scale with code-based automation using industry-leading tools like Ansible and Terraform.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AutomationServices;
