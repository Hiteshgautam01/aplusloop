"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, TrendingUp, Heart } from "lucide-react";

export default function CultureSection() {
  const cultureValues = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We prioritize creativity and forward thinking in everything we do, constantly pushing boundaries to create exceptional solutions."
    },
    {
      icon: Users,
      title: "Collaboration & Inclusion",
      description: "We believe diverse teams create better products. We foster an inclusive environment where all voices are heard and valued."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We embrace challenges as opportunities to learn. Continuous improvement is embedded in our team culture."
    },
    {
      icon: Heart,
      title: "User-Centered",
      description: "At the heart of our work is a commitment to our users. We design with empathy, always keeping the human experience in mind."
    }
  ];

  // For staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-blue-600 text-sm font-medium tracking-wide mb-2 inline-block">COMPANY VALUES</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Culture</h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row-reverse items-center gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Right Side - Image */}
          <motion.div 
            className="w-full md:w-2/5 relative rounded-xl overflow-hidden shadow-lg h-72 md:h-[400px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/Career.jpg" 
              alt="Our Culture at Aplus Loop" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <blockquote className="font-medium italic text-white/95">
                "Culture isn't just one aspect of the game, it is the game."
              </blockquote>
              <p className="text-sm mt-2 text-white/80">— Company philosophy</p>
            </div>
          </motion.div>
          
          {/* Left Side - Text Content */}
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Aplus Loop, our culture shapes how we work together, approach challenges, and create value for our customers. We're building an environment where innovation thrives and people do their best work.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cultureValues.map((value, index) => (
  <motion.div 
    key={index} 
    className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-50"
    variants={itemVariants}
  >
    <div className="flex items-center p-4">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full flex items-center justify-center mr-4">
        <value.icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
        <p className="mt-2 text-gray-600 leading-relaxed">{value.description}</p>
      </div>
    </div>
    <div className="h-px w-full bg-gray-100"></div>
  </motion.div>
))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}