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

const ProgramManagement = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 font-semibold rounded-full mb-4">
            Program Management
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Streamlined Project Execution
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our program management services ensure your projects are delivered
            on time, within budget, and to the highest quality standards.
          </p>
        </motion.div>

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
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Suggestions Grid - Side by Side */}
        {/* <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Visual Suggestion 1: Project Management Tool Comparison
              </h3>
              <div className="h-[300px] bg-gradient-to-br from-gray-50 to-blue-50/20 rounded-2xl border border-gray-200 flex items-center justify-center">
                <p className="text-lg text-slate-500 font-medium text-center">
                  [Placeholder for side-by-side comparison chart<br />of project management tools]
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Visual Suggestion 2: Tool Selection Scoring Matrix
              </h3>
              <div className="h-[300px] bg-gradient-to-br from-gray-50 to-blue-50/20 rounded-2xl border border-gray-200 flex items-center justify-center">
                <p className="text-lg text-slate-500 font-medium text-center">
                  [Placeholder for scoring matrix<br />displayed on a whiteboard]
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Visual Suggestion 3: Tool Implementation Process
              </h3>
              <div className="h-[300px] bg-gradient-to-br from-gray-50 to-blue-50/20 rounded-2xl border border-gray-200 flex items-center justify-center">
                <p className="text-lg text-slate-500 font-medium text-center">
                  [Placeholder for team working on tool implementation<br />with step-by-step progress visuals]
                </p>
              </div>
            </motion.div>

           
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Project Management Process Flow
              </h3>
              <div className="h-[300px] bg-gradient-to-br from-gray-50 to-blue-50/20 rounded-2xl border border-gray-200 flex items-center justify-center">
                <p className="text-lg text-slate-500 font-medium text-center">
                  [Placeholder for graphics of the various processes:<br />
                  Initiation, Discovery, Build, Deploy, Implement, Close]
                </p>
              </div>
            </motion.div>
          </div>
        </div> */}

        {/* CTA Section */}
        {/* <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5">
            Explore Our Approach
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ProgramManagement;
