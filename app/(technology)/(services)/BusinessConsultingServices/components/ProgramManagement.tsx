import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Briefcase,
  BarChart3,
  ArrowRight,
  Settings,
} from "lucide-react";
import SectionHeader from "@/components/reusable/SectionHeader";

const ProgramManagement = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100/25 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <SectionHeader
          title="Streamlined Project Execution"
          description="Our program management services ensure your projects are delivered on time, within budget, and to the highest quality standards."
          // badge="Program Management"
          badgeColor="bg-blue-100 text-blue-600"
          layout="centered"
          titleSize="xl"
          maxWidth="max-w-5xl"
          animationDelay={0}
          titleClassName="font-bold"
          descriptionClassName="text-xl text-slate-600"
        />

        {/* Consulting Services Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Project Management Consulting Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Framework Implementation",
                description:
                  "Implementing project management frameworks such as Agile, Scrum, and PMBOK",
              },
              {
                icon: BarChart3,
                title: "Tools & Technologies",
                description:
                  "Introducing tools and technologies to enhance project tracking and collaboration",
              },
              {
                icon: Users,
                title: "Team Training",
                description:
                  "Training teams in project governance, risk management, and execution best practices",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 hover:bg-white transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramManagement;