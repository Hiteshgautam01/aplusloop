"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Box,
  Cpu,
  Network,
  Workflow,
  Server,
  GitBranch,
  Layers,
  ArrowRight,
  Star,
} from "lucide-react";

const Development = () => {
  return (
    <div className="relative min-h-screen pt-16 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-blue-50 to-indigo-50"></div>
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-indigo-100/30 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-2"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100/50 backdrop-blur-sm">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl text-center text-gray-800 mb-4 "
          >
            Development, Integration and Deployment
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 w-32 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-4 "
          >
            We help organizations implement and modernize enterprise platforms
            like HRMS, CRM, and ERP. Our experts develop custom applications
            that align with your business workflows and ensure seamless
            integration for unified operations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto text-center"
          >
            From launch to maintenance, we ensure every app delivers
            performance, security, and value.
          </motion.p>
        </div>

        {/* Evolution of SDLC Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12 bg-blue-200"></div>
            <h2 className="text-3xl font-light text-gray-800 text-center ">
              Evolution of Software Development
            </h2>
            <div className="h-px w-12 bg-blue-200"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-blue-200"></div>

            {/* Era 1: Early Days */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-32 relative"
            >
              <div className="flex items-center justify-center mb-10">
                <div className="bg-white p-3 rounded-full border border-blue-200 shadow-md z-10">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                    <span className="text-xs text-white font-bold">1</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-normal text-gray-800 mb-4">
                    Early Days of Software
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-open-sans">
                    The beginning of software engineering with waterfall
                    methodologies and limited collaboration tools. Development
                    cycles were lengthy and adaptability was minimal.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <div className="flex items-center text-sm text-blue-600 font-open-sans">
                      <Box className="w-4 h-4 mr-2" />
                      <span>Waterfall</span>
                    </div>
                    <div className="flex items-center text-sm text-blue-600 font-open-sans">
                      <Cpu className="w-4 h-4 mr-2" />
                      <span>Monolithic</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="overflow-hidden rounded-2xl shadow-md border border-blue-100 bg-white"
                  >
                    <img
                      src="/api/placeholder/500/300"
                      alt="Early software development"
                      className="w-full"
                    />
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
              <div className="flex items-center justify-center mb-10">
                <div className="bg-white p-3 rounded-full border border-blue-200 shadow-md z-10">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center">
                    <span className="text-xs text-white font-bold">2</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="md:order-2">
                  <h3 className="text-2xl font-normal text-gray-800 mb-4 font-montserrat">
                    Evolution of Methodologies
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-open-sans">
                    Introduction of agile practices, iterative development, and
                    the beginning of DevOps culture. Teams started to
                    collaborate more efficiently with improved tools.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <div className="flex items-center text-sm text-indigo-600 font-open-sans">
                      <GitBranch className="w-4 h-4 mr-2" />
                      <span>Agile</span>
                    </div>
                    <div className="flex items-center text-sm text-indigo-600 font-open-sans">
                      <Workflow className="w-4 h-4 mr-2" />
                      <span>DevOps</span>
                    </div>
                  </div>
                </div>
                <div className="md:order-1 flex justify-center">
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="overflow-hidden rounded-2xl shadow-md border border-blue-100 bg-white"
                  >
                    <img
                      src="/api/placeholder/500/300"
                      alt="Evolution of methodologies"
                      className="w-full"
                    />
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
              <div className="flex items-center justify-center mb-10">
                <div className="bg-white p-3 rounded-full border border-blue-200 shadow-md z-10">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                    <span className="text-xs text-white font-bold">3</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-normal text-gray-800 mb-4 font-montserrat">
                    Today's Integrated World
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-open-sans">
                    Continuous integration/deployment, microservices
                    architecture, and cloud-native development. Organizations
                    now operate in a fully connected ecosystem with automated
                    pipelines.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <div className="flex items-center text-sm text-blue-600 font-open-sans">
                      <Server className="w-4 h-4 mr-2" />
                      <span>Cloud-Native</span>
                    </div>
                    <div className="flex items-center text-sm text-blue-600 font-open-sans">
                      <Network className="w-4 h-4 mr-2" />
                      <span>Microservices</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="overflow-hidden rounded-2xl shadow-md border border-blue-100 bg-white"
                  >
                    <img
                      src="/api/placeholder/500/300"
                      alt="Modern integrated development"
                      className="w-full"
                    />
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
          className="relative z-10"
        >
          <div className="flex items-center justify-center gap-4 mb-14">
            <div className="h-px w-12 bg-blue-200"></div>
            <h2 className="text-3xl font-light text-gray-800 text-center font-montserrat">
              Our Services
            </h2>
            <div className="h-px w-12 bg-blue-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 400 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 relative overflow-hidden group"
            >
              <div className="absolute w-32 h-32 bg-blue-50 rounded-full -top-12 -right-12 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="relative">
                <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Layers className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-xl font-medium text-gray-800 mb-4 font-montserrat">
                  Enterprise Platforms
                </h3>
                <p className="text-gray-600 mb-4 font-open-sans">
                  Implementation and modernization of HRMS, CRM, and ERP systems
                  tailored to your organization's needs.
                </p>

                <div className="flex items-center text-blue-600 font-medium text-sm font-open-sans">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px -10px rgba(79, 70, 229, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 400 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-100 relative overflow-hidden group"
            >
              <div className="absolute w-32 h-32 bg-indigo-50 rounded-full -top-12 -right-12 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="relative">
                <div className="mb-6 w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Code className="w-7 h-7 text-indigo-600" />
                </div>

                <h3 className="text-xl font-medium text-gray-800 mb-4 font-montserrat">
                  Custom Applications
                </h3>
                <p className="text-gray-600 mb-4 font-open-sans">
                  Bespoke solutions that align perfectly with your business
                  workflows and operational requirements.
                </p>

                <div className="flex items-center text-indigo-600 font-medium text-sm font-open-sans">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 400 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 relative overflow-hidden group"
            >
              <div className="absolute w-32 h-32 bg-blue-50 rounded-full -top-12 -right-12 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="relative">
                <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Workflow className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-xl font-medium text-gray-800 mb-4 font-montserrat">
                  Seamless Integration
                </h3>
                <p className="text-gray-600 mb-4 font-open-sans">
                  End-to-end deployment ensuring performance, security, and
                  continuous value delivery.
                </p>

                <div className="flex items-center text-blue-600 font-medium text-sm font-open-sans">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Development;
