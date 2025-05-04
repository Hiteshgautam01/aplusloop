import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function TechnologyStackSection() {
  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="py-24 bg-gray-50 relative z-10"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "AI & ML", icon: "🤖", color: "blue" },
            { name: "Blockchain", icon: "⛓️", color: "blue" },
            { name: "Cloud Computing", icon: "☁️", color: "blue" },
            { name: "IoT", icon: "🌐", color: "blue" },
            { name: "Cybersecurity", icon: "🔒", color: "blue" },
            { name: "Big Data", icon: "📊", color: "blue" },
            { name: "AR/VR", icon: "👓", color: "blue" },
            { name: "RPA", icon: "🤖", color: "blue" }
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 