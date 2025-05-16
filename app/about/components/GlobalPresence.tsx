"use client";
import React from "react";
import { motion } from "framer-motion";

const GlobalPresence = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Location data
  const locations = [
    { name: "Dubai", bgColor: "bg-blue-50", textColor: "text-blue-700" },
    {
      name: "Abu Dhabi",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
    { name: "Sharjah", bgColor: "bg-blue-50", textColor: "text-blue-700" },
    { name: "UAE", bgColor: "bg-indigo-50", textColor: "text-indigo-700" },
    { name: "And Beyond", bgColor: "bg-blue-50", textColor: "text-blue-700" },
  ];

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Our Global Presence
          </h2>
          <div className="inline-flex items-center gap-x-6 gap-y-3 flex-wrap justify-center">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                className={`px-4 py-2 ${location.bgColor} rounded-full ${location.textColor} font-medium`}
              >
                {location.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence;
