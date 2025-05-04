import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function ValuePropositionSection() {
  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative z-10"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our ROI-Focused Approach
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Value Prop 1 */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
          >
            <div className="mb-8">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Solutions</h3>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Digital Transformation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Cybersecurity
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Smart Solutions
              </li>
            </ul>
          </motion.div>

          {/* Value Prop 2 */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
          >
            <div className="mb-8">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg p-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Consulting</h3>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Strategic Advisory
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Process Optimization
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Innovation Management
              </li>
            </ul>
          </motion.div>

          {/* Value Prop 3 */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
          >
            <div className="mb-8">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Digital Marketing</h3>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Brand Strategy
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Performance Marketing
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Analytics & Insights
              </li>
            </ul>
          </motion.div>

          {/* Value Prop 4 */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
          >
            <div className="mb-8">
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-lg p-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Solutions</h3>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                AI & ML Integration
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                IoT Solutions
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Smart City Integration
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 