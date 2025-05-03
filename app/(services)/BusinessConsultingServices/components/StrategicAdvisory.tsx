import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const StrategicAdvisory = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left side - Image with effects */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              className="relative overflow-visible"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Main image container */}
              <div className="relative aspect-[4/3] max-w-2xl mx-auto">
                {/* Animated background elements */}
                <motion.div
                  className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-full blur-2xl z-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute -bottom-16 -right-12 w-48 h-48 bg-gradient-to-tr from-purple-500/30 to-blue-500/20 rounded-full blur-2xl z-0"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10 h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <Image
                    src="/business-executive.png"
                    alt="Business Executive"
                    fill
                    className="object-cover"
                  />

                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent" />

                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10" />
                </div>

                {/* Corner border accents */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />

                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-blue-500 rounded-tr-3xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />

                <motion.div
                  className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-blue-500 rounded-bl-3xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />

                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-blue-500 rounded-br-3xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
              </div>

              {/* Tags below image */}
            </motion.div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 bg-blue-100/80 text-blue-600 font-semibold rounded-full mb-4 text-sm">
                Strategic Advisory
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Expert Guidance for Business Excellence
              </h2>

              <p className="text-slate-600 text-base lg:text-lg mb-10 leading-relaxed">
                Our strategic advisory services help you navigate complex
                business challenges, identify opportunities for growth, and
                develop actionable strategies to achieve your objectives.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Business Strategy Development",
                    description:
                      "Create comprehensive strategies aligned with your organizational goals and market conditions.",
                  },
                  {
                    title: "Digital Transformation",
                    description:
                      "Navigate the complexities of digital transformation with expert guidance and implementation support.",
                  },
                  {
                    title: "Market Analysis",
                    description:
                      "Gain deep insights into industry trends, competitor landscapes, and emerging opportunities.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-5 group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="mt-1 shrink-0">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 inline-flex items-center gap-2 group text-sm">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 text-slate-700 rounded-full font-semibold transition-all hover:shadow-lg text-sm">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicAdvisory;
