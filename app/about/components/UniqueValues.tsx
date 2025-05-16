"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const UniqueApproach = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="md:flex md:items-start md:gap-12">
              <div className="md:flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Are Unique</h2>
                <div className="pr-0 md:pr-12">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At <span className="font-semibold text-blue-700">Aplusloop</span>, what sets us apart is not just our wide-ranging expertise—but the way we deliver it. We are customer-obsessed, agile, and highly responsive. Our culture is rooted in accountability, where every team member goes above and beyond to support client needs.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our deep technical and strategic knowledge, combined with human-centered thinking, allows us to architect solutions that are not only innovative but impactful. Whether it's solving complex IT challenges, crafting compelling marketing campaigns, or transforming business models, our commitment remains unwavering: to deliver excellence and empower our clients for sustainable success.
                  </p>
                  
                  <div className="mt-8">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium">
                      <span>Tailored Approach</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <p className="mt-2 text-gray-700">
                      No one-size-fits-all. Every solution is personalized, strategic, and built for scale.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block md:w-1/3 mt-10 md:mt-0">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <div className="text-4xl font-bold mb-2">A<span className="text-blue-300">+</span></div>
                    <div className="text-lg font-light">Future-focused solutions</div>
                  </div>
                  <div className="absolute top-8 right-8">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">∞</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniqueApproach;