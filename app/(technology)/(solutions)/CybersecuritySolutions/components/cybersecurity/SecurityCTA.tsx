"use client";

import React from "react";
import { motion } from "framer-motion";

const SecurityCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 rounded-3xl mx-4 sm:mx-8 lg:mx-16 mt-24">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-300/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Enhance Your Security Posture?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of security experts will work with you to design and
            implement cybersecurity solutions tailored to your specific needs
            and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 bg-white text-blue-800 font-semibold rounded-xl 
              hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Request a Consultation
            </button>
            <button
              className="px-8 py-4 bg-transparent text-white border border-white/50 font-semibold rounded-xl 
              hover:bg-white/10 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Security Guide
            </button>
          </div>
        </motion.div>

        {/* Feature boxes with bordered images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="relative h-16 w-16 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 blur-sm opacity-50"></div>
              <div className="relative h-full w-full flex items-center justify-center rounded-full border-2 border-blue-400 bg-blue-900/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Security Guarantee</h3>
            <p className="text-blue-100 text-sm">
              Our solutions come with a comprehensive security guarantee and
              ongoing support.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="relative h-16 w-16 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 blur-sm opacity-50"></div>
              <div className="relative h-full w-full flex items-center justify-center rounded-full border-2 border-indigo-400 bg-indigo-900/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-blue-100 text-sm">
              Our security operations team is available 24/7 to address any
              security concerns.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="relative h-16 w-16 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 blur-sm opacity-50"></div>
              <div className="relative h-full w-full flex items-center justify-center rounded-full border-2 border-cyan-400 bg-cyan-900/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-cyan-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Rapid Response</h3>
            <p className="text-blue-100 text-sm">
              Our solutions provide industry-leading response times to security
              incidents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCTA;
