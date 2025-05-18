"use client";

import { motion } from "framer-motion";

interface SectionSeparatorProps {
  variant?: "default" | "minimal" | "decorative" | "wave";
  className?: string;
}

export default function SectionSeparator({ 
  variant = "default", 
  className = "" 
}: SectionSeparatorProps) {
  
  if (variant === "minimal") {
    return (
      <div className={`absolute left-0 right-0 z-10 ${className}`} style={{ transform: 'translateY(-50%)' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent shadow-sm"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`absolute left-0 right-0 h-16 z-10 ${className}`} style={{ transform: 'translateY(-50%)' }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5F8FF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#E0E8FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F5F8FF" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === "decorative") {
    return (
      <div className={`absolute left-0 right-0 z-10 ${className}`} style={{ transform: 'translateY(-50%)' }}>
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-center">
            {/* Left Line */}
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-transparent to-[#E0E8FF] shadow-sm"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            
            {/* Center Decoration */}
            <motion.div
              className="mx-6 relative"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-white rounded-full border-2 border-[#0047FF]/30 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-gradient-to-br from-[#0047FF] to-[#1E22AA] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Floating particles */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-[#0047FF]/40 rounded-full"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#1E22AA]/50 rounded-full"
                animate={{
                  y: [0, 6, 0],
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
            
            {/* Right Line */}
            <motion.div
              className="flex-1 h-px bg-gradient-to-l from-transparent to-[#E0E8FF] shadow-sm"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`absolute left-0 right-0 z-10 ${className}`} style={{ transform: 'translateY(-50%)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-6">
          {/* Left decorative element */}
          <motion.div
            className="hidden md:block"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-10 h-10 rounded-full bg-white border-2 border-[#0047FF]/20 flex items-center justify-center shadow-md">
              <div className="w-2 h-2 bg-[#0047FF] rounded-full opacity-80"></div>
            </div>
          </motion.div>
          
          {/* Center line with animation */}
          <motion.div
            className="flex-1 max-w-md h-px bg-gradient-to-r from-[#0047FF]/30 via-[#0047FF]/80 to-[#0047FF]/30 relative shadow-sm"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Animated dot traveling along the line */}
            <motion.div
              className="absolute top-0 left-0 w-2 h-2 bg-[#0047FF] rounded-full transform -translate-y-1/2 shadow-sm"
              animate={{
                x: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>
          
          {/* Right decorative element */}
          <motion.div
            className="hidden md:block"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-10 h-10 rounded-full bg-white border-2 border-[#1E22AA]/20 flex items-center justify-center shadow-md">
              <div className="w-2 h-2 bg-[#1E22AA] rounded-full opacity-80"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle dots indicator */}
        <motion.div
          className="text-center mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="text-xs text-gray-400 font-light tracking-wider bg-white/80 px-2 rounded">
            • • •
          </span>
        </motion.div>
      </div>
    </div>
  );
}