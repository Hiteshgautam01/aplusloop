import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Target,
  Brain,
  Cpu,
  Network,
  Workflow,
  ChartBar,
  Cog,
  ArrowRight,
  Zap,
  Sparkles,
  Star,
} from "lucide-react";

const ResearchInnovation = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          className="text-center mb-24 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 0.9, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Star className="w-14 h-14 text-blue-500/70 drop-shadow-lg" />
          </motion.div> */}

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 mb-6">
            Research & Innovation
          </h2>
          <p className="text-xl text-blue-800/70 max-w-3xl mx-auto leading-relaxed">
            Driving transformation through cutting-edge research and innovation
            strategies
          </p>
        </motion.div>

        {/* Research & Innovation Section */}
        <div className="mb-32">
          {/* Advisory Services with Asymmetric Layout */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-16 text-center">
              Research & Innovation Advisory Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: "Technology Assessment",
                  description:
                    "Evaluating readiness for emerging technologies like AI, IoT, Smart City, and Meta Verse",
                  color: "from-blue-600 to-cyan-500",
                  delay: 0,
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Strategy",
                  description:
                    "Creating business cases and implementation strategies for innovation projects",
                  color: "from-blue-500 to-blue-400",
                  delay: 0.1,
                },
                {
                  icon: Rocket,
                  title: "Innovation Scaling",
                  description:
                    "Supporting pilot programs and scaling successful innovations",
                  color: "from-blue-700 to-blue-500",
                  delay: 0.2,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`relative group ${index === 1 ? "md:-mt-8" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: service.delay }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-blue-100/50 hover:shadow-2xl transition-all duration-300 h-full">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-blue-800/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Diagrams with Modern Style */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Innovation Funnel Diagram */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-2xl font-bold text-blue-900 mb-6 relative z-10">
                  Innovation Funnel
                </h4>
                <div className="h-[400px] bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl border border-blue-200/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  <p className="text-lg text-blue-700 font-medium text-center px-4 relative z-10">
                    [Placeholder for Innovation Funnel Diagram]
                    <br />
                    <span className="text-sm block mt-2">
                      Research → Prototyping → Validation → Commercialization
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Technology Maturity Graph */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100/50 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <h4 className="text-2xl font-bold text-blue-900 mb-6 relative z-10">
                  Technology Maturity Graph
                </h4>
                <div className="h-[400px] bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl border border-blue-200/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  <p className="text-lg text-blue-700 font-medium text-center px-4 relative z-10">
                    [Placeholder for Technology Maturity Graph]
                    <br />
                    <span className="text-sm block mt-2">
                      Emerging Technologies vs. Adoption Timeline
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process Improvement Section */}
        <div className="relative">
          {/* Decorative Divider */}
          <div className="absolute left-0 right-0 -top-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

          {/* Section Header */}
          <motion.div
            className="text-center mb-20 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 0.9, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className="w-14 h-14 text-blue-400/70 drop-shadow-lg" />
            </motion.div> */}

            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 mb-6">
              Process Improvement
            </h2>
            <p className="text-xl text-blue-800/70 max-w-3xl mx-auto leading-relaxed">
              Optimizing operations through strategic process enhancement
            </p>
          </motion.div>

          {/* Business Process Improvement Services */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-16 text-center">
              Business Process Improvement Services
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Workflow,
                  title: "Process Mapping",
                  description:
                    "Mapping and analyzing current workflows to identify inefficiencies",
                  gradient: "from-blue-500 to-cyan-600",
                  pattern: "dots",
                },
                {
                  icon: Target,
                  title: "Process Redesign",
                  description:
                    "Redesigning processes to align with business goals",
                  gradient: "from-blue-600 to-blue-400",
                  pattern: "grid",
                },
                {
                  icon: Cog,
                  title: "Automation Integration",
                  description:
                    "Incorporating automation and technology to enhance operational efficiency",
                  gradient: "from-blue-700 to-blue-500",
                  pattern: "waves",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="relative h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-blue-100/50 hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                      <div
                        className={`absolute inset-0 opacity-5 ${
                          service.pattern === "dots"
                            ? "bg-dot-pattern"
                            : service.pattern === "grid"
                              ? "bg-grid-pattern"
                              : "bg-wave-pattern"
                        }`}
                      />
                      <div className="relative z-10">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          <service.icon className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-blue-900 mb-3">
                          {service.title}
                        </h4>
                        <p className="text-blue-800/70 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Workflow Diagram with Modern Design */}
          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-blue-100/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

              <h4 className="text-2xl font-bold text-blue-900 mb-8 text-center relative z-10">
                Workflow Optimization Diagram
              </h4>
              <div className="h-[450px] bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl border border-blue-200/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <p className="text-lg text-blue-700 font-medium text-center relative z-10">
                  [Placeholder for Workflow Diagrams]
                  <br />
                  <span className="text-sm block mt-2">
                    With Efficiency Metrics Highlighted
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="group px-12 py-5 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 inline-flex items-center gap-3">
            Transform Your Business
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchInnovation;
