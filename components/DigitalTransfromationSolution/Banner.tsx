import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-300"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Digital</span>
              <span className="block text-blue-300">Transformation</span>
              <span className="block">Solution</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
              Empowering businesses to thrive in the digital era with cutting-edge technologies and innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Explore Solutions
            </motion.button>
          </motion.div>

          {/* Banner image */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-full z-10 flex justify-center"
          >
            <div className="relative w-full h-full max-h-[500px]">
              <Image
                src="/digital-transformation-solution.png"
                alt="Digital Transformation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;