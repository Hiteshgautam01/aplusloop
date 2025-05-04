import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function WhyChooseSection() {
  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="py-16 bg-gray-50 relative z-10"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose APLUSLOOP
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-600">Enterprise Clients</p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Technology Experts</p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">Support</p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">ISO</div>
            <p className="text-gray-600">Certified Processes</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 