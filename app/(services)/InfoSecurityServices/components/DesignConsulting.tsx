import React from "react";
import { motion } from "framer-motion";
import {
  GitMerge,
  Code,
  Lightbulb,
  Database,
  Server,
  Layout,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const card = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const services = [
  {
    icon: Server,
    title: "Infrastructure Design",
    description:
      "Secure architecture design for networks, cloud environments, and IT infrastructure.",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: Code,
    title: "Application Security",
    description:
      "Implement secure coding practices and application security controls.",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: Database,
    title: "Data Protection",
    description:
      "Design robust data protection mechanisms and encryption strategies.",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    icon: GitMerge,
    title: "DevSecOps Integration",
    description:
      "Integrate security into your development and operations workflows.",
    color: "orange",
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
  },
  {
    icon: Layout,
    title: "Security Architecture",
    description: "End-to-end security architecture design and implementation.",
    color: "red",
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-50 to-rose-50",
  },
  {
    icon: Lightbulb,
    title: "Security Strategy",
    description: "Strategic security consulting and roadmap development.",
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
  },
];

const DesignConsulting = () => {
  return (
    <section
      id="design-consulting"
      className="pt-6 bg-gradient-to-b from-transparent to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-4 w-4" />
            Expert Consulting Services
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent pb-4">
            Design & Consulting
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert security design and consulting services to build security
            into your systems from the ground up
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              custom={index}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden">
                {/* Background Gradient Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full group-hover:shadow-xl">
                  {/* Icon Container */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <service.icon className="h-full w-full text-white" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Learn More Link */}
                  <motion.div
                    className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </motion.div>

                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 rounded-full transition-opacity duration-300`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300 -z-10`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={4}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30"></div>
            
            
            <motion.div 
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium  hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Tailored to your specific business needs and security requirements</span>
              <ArrowUpRight className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.div> */}

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-gray-200 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-gray-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DesignConsulting;
