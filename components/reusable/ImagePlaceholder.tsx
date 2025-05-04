"use client";

import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  title: string;
  subtitle?: string;
  width?: number | string;
  height?: number | string;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
  className?: string;
  iconPath?: string;
}

export default function ImagePlaceholder({
  title,
  subtitle,
  width = "100%",
  height = "300px",
  bgColor = "#f1f5f9",
  textColor = "#1e293b",
  accentColor = "#3b82f6",
  className = "",
  iconPath,
}: ImagePlaceholderProps) {
  // Convert width/height to string if they're numbers
  const widthValue = typeof width === "number" ? `${width}px` : width;
  const heightValue = typeof height === "number" ? `${height}px` : height;

  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-xl ${className}`}
      style={{
        width: widthValue,
        height: heightValue,
        backgroundColor: bgColor,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20"
        style={{
          backgroundColor: accentColor,
          filter: "blur(40px)",
          transform: "translate(20%, -20%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-20"
        style={{
          backgroundColor: accentColor,
          filter: "blur(30px)",
          transform: "translate(-20%, 20%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {iconPath && (
          <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke={accentColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={iconPath} />
            </svg>
          </div>
        )}
        <h3
          className="text-xl md:text-2xl font-semibold mb-2"
          style={{ color: textColor }}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            className="text-sm md:text-base opacity-70"
            style={{ color: textColor }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5"
        style={{ backgroundColor: accentColor }}
      ></div>
    </motion.div>
  );
}
