import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "./animations";

export default function SolutionsSection() {
  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative z-10 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 opacity-10"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M100 0 L200 100 L100 200 L0 100 Z"
              fill="none"
              stroke="#0066CC"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-24 h-24 opacity-10"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#FF69B4" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Enterprise Solutions & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology and business solutions designed to drive digital transformation and business growth
          </p>
        </motion.div>

        {/* Technology Solutions */}
        <motion.div 
          variants={fadeInUp}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-300 rounded-full opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
                  <svg className="w-10 h-10 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Technology Solutions
                </h3>
                <p className="text-lg text-blue-800 mb-8">
                  Transform your digital infrastructure with our comprehensive technology solutions
                </p>
                <div className="space-y-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Digital Transformation
                    </h4>
                    <ul className="text-blue-800 space-y-2">
                      <li>Cloud Migration & Optimization</li>
                      <li>Enterprise Application Development</li>
                      <li>Process Automation & RPA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12 bg-white">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Cybersecurity Solutions
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>SOAR Implementation</li>
                    <li>EDR & XDR Solutions</li>
                    <li>Security Operations Center</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Smart Solutions
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>3D Digital Twin Technology</li>
                    <li>IoT & Edge Computing</li>
                    <li>AI/ML Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Business Solutions */}
        <motion.div 
          variants={fadeInUp}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 bg-white">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    Digital Marketing
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>Strategic Brand Development</li>
                    <li>Data-Driven Campaigns</li>
                    <li>Performance Analytics</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Business Consulting
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>Digital Strategy</li>
                    <li>Process Optimization</li>
                    <li>Innovation Management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-12 bg-gradient-to-br from-pink-50 to-pink-100 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-300 rounded-full opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-pink-900 mb-6 flex items-center">
                  <svg className="w-10 h-10 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Business Solutions
                </h3>
                <p className="text-lg text-pink-800 mb-8">
                  Drive business growth with our strategic consulting and digital marketing solutions
                </p>
                <div className="space-y-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="font-semibold text-pink-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                      Design Services
                    </h4>
                    <ul className="text-pink-800 space-y-2">
                      <li>UI/UX Design</li>
                      <li>Digital Branding</li>
                      <li>Creative & Graphic Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack Marquee */}
        <motion.div 
          variants={fadeInUp}
          className="mt-20 overflow-hidden"
        >
          <div className="flex space-x-8 animate-marquee whitespace-nowrap">
            {[
              "AI & ML", "Blockchain", "Cloud Computing", "IoT", "Cybersecurity",
              "Big Data", "AR/VR", "RPA", "Edge Computing", "Digital Twin",
              "Smart Cities", "Enterprise Applications", "Process Automation",
              "Data Analytics", "Machine Learning", "Deep Learning"
            ].map((tech, index) => (
              <span key={index} className="text-2xl font-semibold text-gray-400">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 