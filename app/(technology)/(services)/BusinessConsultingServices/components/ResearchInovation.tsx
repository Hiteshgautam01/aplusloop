import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Brain,
  Workflow,
  Target,
  Cog,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/reusable/SectionHeader";

const ResearchInnovation = () => {
  const researchServices = [
    {
      icon: Brain,
      title: "Technology Assessment",
      description:
        "Evaluating readiness for emerging technologies like AI, IoT, Smart City, and Meta Verse",
    },
    {
      icon: Lightbulb,
      title: "Innovation Strategy",
      description:
        "Creating business cases and implementation strategies for innovation projects",
    },
    {
      icon: Rocket,
      title: "Innovation Scaling",
      description:
        "Supporting pilot programs and scaling successful innovations",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <SectionHeader
          title="Research & Innovation Excellence"
          description="Driving transformation through cutting-edge research and innovation strategies to help your organization stay ahead in an ever-evolving technological landscape."
          icon={<Brain className="w-8 h-8 text-white" />}
          iconBackground="bg-gradient-to-br from-[#0047FF] to-[#1E22AA]"
          layout="centered"
          dividerStyle="gradient"
          dividerColor="from-[#0047FF]"
          badge="Innovation Strategy"
          badgeColor="bg-[#F5F8FF] text-[#0047FF]"
          maxWidth="max-w-6xl"
          animationDelay={0.1}
          titleClassName="tracking-tight"
        />

        <div className="space-y-16">
          {/* Research & Innovation Advisory Services */}
          <div className="relative py-16 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-r from-white/70 via-[#F5F8FF]/50 to-white/70">
            <motion.div
              className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Research & Innovation Advisory Services
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {researchServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F5F8FF] to-[#E0E8FF] rounded-xl flex items-center justify-center text-[#0047FF] mb-6 group-hover:from-[#E0E8FF] group-hover:to-[#F5F8FF] transition-colors duration-300">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0047FF] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Diagrams Section */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Innovation Funnel
              </h4>
              <div className="h-80 bg-gradient-to-br from-gray-50 to-[#F5F8FF]/60 rounded-xl border border-gray-200/50 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg text-gray-700 font-medium mb-2">
                    Innovation Process Flow
                  </p>
                  <p className="text-sm text-gray-500">
                    Research → Prototyping → Validation → Commercialization
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Technology Maturity Graph
              </h4>
              <div className="h-80 bg-gradient-to-br from-gray-50 to-[#F5F8FF]/60 rounded-xl border border-gray-200/50 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg text-gray-700 font-medium mb-2">
                    Technology Adoption Timeline
                  </p>
                  <p className="text-sm text-gray-500">
                    Emerging Technologies vs. Market Readiness
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="group px-10 py-4 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] hover:from-[#1E22AA] hover:to-[#0047FF] text-white rounded-xl font-semibold transition-all shadow-lg shadow-[#0047FF]/25 hover:shadow-xl hover:shadow-[#0047FF]/40 hover:scale-105 inline-flex items-center gap-3">
              Explore Innovation Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Separate Process Improvement Component
export const ProcessImprovement = () => {
  const processServices = [
    {
      icon: Workflow,
      title: "Process Mapping",
      description:
        "Mapping and analyzing current workflows to identify inefficiencies",
    },
    {
      icon: Target,
      title: "Process Redesign",
      description:
        "Redesigning processes to align with business goals",
    },
    {
      icon: Cog,
      title: "Automation Integration",
      description:
        "Incorporating automation and technology to enhance operational efficiency",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F5F8FF]/60 via-[#E0E8FF]/40 to-[#F5F8FF]/60 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0E8FF]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5F8FF]/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section with Stacked Layout */}
        <SectionHeader
          title="Process Improvement Excellence"
          description="Optimizing operations through strategic process enhancement, workflow redesign, and automation integration to drive sustainable business growth and operational efficiency."
          icon={<Cog className="w-8 h-8 text-white" />}
          iconBackground="bg-gradient-to-br from-[#0047FF] to-[#1E22AA]"
          layout="stacked"
          dividerStyle="dashed"
          dividerColor="from-[#0047FF]"
          // badge="Operational Excellence"
          badgeColor="bg-[#F5F8FF] text-[#0047FF]"
          maxWidth="max-w-6xl"
          animationDelay={0.2}
          titleClassName="tracking-tight"
        />

        <div className="space-y-16">
          {/* Process Improvement Services */}
          <div className="relative py-16 -mx-4 sm:-mx-6 lg:-mx-8 ">
            <motion.div
              className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Business Process Improvement Services
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {processServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F5F8FF] to-[#E0E8FF] rounded-xl flex items-center justify-center text-[#0047FF] mb-6 group-hover:from-[#E0E8FF] group-hover:to-[#F5F8FF] transition-colors duration-300">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0047FF] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Workflow Diagram */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-gray-100/50">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Workflow Optimization Framework
              </h4>
              <div className="h-96 bg-gradient-to-br from-gray-50 to-[#F5F8FF]/60 rounded-xl border border-gray-200/50 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg text-gray-700 font-medium mb-2">
                    Process Optimization Workflow
                  </p>
                  <p className="text-sm text-gray-500">
                    Current State → Analysis → Redesign → Implementation → Monitoring
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="group px-10 py-4 bg-gradient-to-r from-[#0047FF] to-[#1E22AA] hover:from-[#1E22AA] hover:to-[#0047FF] text-white rounded-xl font-semibold transition-all shadow-lg shadow-[#0047FF]/25 hover:shadow-xl hover:shadow-[#0047FF]/40 hover:scale-105 inline-flex items-center gap-3">
              Optimize Your Processes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInnovation;