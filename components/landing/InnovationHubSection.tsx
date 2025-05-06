import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "./animations";

export default function InnovationHubSection() {
  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="py-24 bg-white relative z-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2 relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-100 rounded-full opacity-50 blur-xl"></div>
            <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Innovation Hub"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-pink-100 text-blue-800 px-4 py-1 rounded-full mb-8">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" />
              </svg>
              <span className="text-xs font-semibold">Innovation Hub</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Driving Digital Innovation
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Our Innovation Hub is where ideas transform into reality. We combine cutting-edge technology with creative thinking to solve complex business challenges.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center group">
                <div className="bg-blue-100 rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-600 group-hover:text-blue-600 transition-colors">Research & Development</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-blue-100 rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-600 group-hover:text-blue-600 transition-colors">Prototype Testing</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-blue-100 rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-600 group-hover:text-blue-600 transition-colors">Innovation Workshops</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-blue-100 rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-600 group-hover:text-blue-600 transition-colors">Technology Incubation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 