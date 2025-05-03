import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cloud,
  Target,
  Rocket,
  Building2,
  Search,
  BarChart3,
  Compass,
  Zap,
  TrendingUp,
} from "lucide-react";

const SoftwareAdvisory = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-blue-50/20 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-6 py-2 bg-blue-100/50 text-blue-700 font-bold rounded-full mb-4 border border-blue-200/50">
              SOFTWARE ADVISORY
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 mb-4 pb-2">
              Strategic Software Solutions
            </h2>
            <p className="text-xl text-blue-800/70 max-w-3xl mx-auto leading-relaxed">
              Aligning technology with business objectives through expert
              guidance, strategic implementation, and continuous optimization.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-900">
                  Transform Your Technology Landscape
                </h3>
                <p className="text-lg text-blue-800/70 leading-relaxed">
                  Our comprehensive software advisory services bridge the gap
                  between your business vision and technical execution, ensuring
                  every technology decision drives measurable value.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Cloud Strategy",
                    desc: "Migration & optimization roadmaps",
                    icon: Cloud,
                  },
                  {
                    title: "Software Selection",
                    desc: "Vendor evaluation & matching",
                    icon: Target,
                  },
                  {
                    title: "Digital Transformation",
                    desc: "End-to-end modernization",
                    icon: Rocket,
                  },
                  {
                    title: "Tech Architecture",
                    desc: "Scalable system design",
                    icon: Building2,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white p-6 rounded-2xl border border-blue-100/50 hover:border-blue-300/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <item.icon className="w-8 h-8 mb-3 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    <h4 className="font-bold text-lg text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-blue-800/70">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button className="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white rounded-2xl font-semibold transition-all duration-300">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 bg-white border border-blue-200 hover:border-blue-400 text-blue-700 rounded-2xl font-semibold transition-all duration-300">
                  View Case Studies
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Venn Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-blue-100/50">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 mb-3 text-center">
                  Business & Tech Alignment Framework
                </h3>
                <p className="text-center text-blue-800/70 mb-8">
                  Creating synergy between strategy, technology, and operations
                </p>
                {/* Venn Diagram Placeholder */}
                <div className="h-[400px] flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl border border-blue-200/50 flex items-center justify-center">
                    <p className="text-lg text-blue-700 font-medium">
                      [Placeholder for Business & Tech Alignment Venn Diagram]
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decision Tree Placeholder - Below both sections */}
          <motion.div
            className="mt-16 bg-white rounded-3xl p-10 border border-blue-100/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 mb-8 text-center">
              Decision Tree / Consulting Workflow
            </h3>
            <div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl border border-blue-200/50">
              <p className="text-blue-700 font-medium text-lg">
                [Placeholder for Decision Tree Diagram]
              </p>
            </div>
          </motion.div>

          {/* Bottom Section - Process Timeline */}
          <motion.div
            className="mt-20 bg-white rounded-3xl p-12 border border-blue-100/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-16 text-center">
              Our Consulting Process
            </h3>
            <div className="relative max-w-6xl mx-auto">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-6 left-[5%] right-[5%] h-[2px] bg-blue-100" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    desc: "Understanding your needs",
                    icon: Search,
                  },
                  {
                    step: "02",
                    title: "Analysis",
                    desc: "Evaluating systems",
                    icon: BarChart3,
                  },
                  {
                    step: "03",
                    title: "Strategy",
                    desc: "Crafting solutions",
                    icon: Compass,
                  },
                  {
                    step: "04",
                    title: "Implementation",
                    desc: "Executing plans",
                    icon: Zap,
                  },
                  {
                    step: "05",
                    title: "Optimization",
                    desc: "Continuous growth",
                    icon: TrendingUp,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center z-10">
                          <item.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                          {item.step}
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-blue-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-blue-800/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section - Below Process Timeline */}
          {/* <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { number: "95%", label: "Client Satisfaction", color: "from-blue-500 to-blue-600" },
              { number: "200+", label: "Projects Delivered", color: "from-purple-500 to-purple-600" },
              { number: "40%", label: "Cost Reduction", color: "from-green-500 to-green-600" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-lg text-slate-600">{stat.label}</div>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareAdvisory;
