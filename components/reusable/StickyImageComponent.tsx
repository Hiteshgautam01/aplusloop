"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Collapsible Section Component
interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  titleColor?: string;
  contentBgColor?: string;
  iconColor?: string;
  borderColor?: string;
  isActive?: boolean;
  onToggle: () => void;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  titleColor = "text-gray-800",
  contentBgColor = "bg-white/50",
  iconColor = "text-blue-600",
  borderColor = "border-gray-200",
  isActive,
  onToggle,
}) => {
  return (
    <div
      className={`mb-6 border-b ${borderColor} pb-4 last:border-0 last:pb-0`}
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-3 text-left transition-all duration-300"
        aria-expanded={isActive}
      >
        <h3
          className={`text-xl font-semibold ${titleColor} transition-colors duration-300`}
        >
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className={`flex items-center justify-center w-8 h-8 rounded-full border ${borderColor} ${iconColor}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20M4 12H20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className={`overflow-hidden pt-4 ${contentBgColor}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Sticky Image Section Component
interface StickyImageSectionProps {
  imageComponent: React.ReactNode;
  title: string;
  subtitle?: string;
  introText?: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
  imagePosition?: "left" | "right";
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  sectionTitleColor?: string;
  sectionContentBgColor?: string;
  iconColor?: string;
  borderColor?: string;
  stickyTopOffset?: string;
  className?: string;
}

const StickyImageSection: React.FC<StickyImageSectionProps> = ({
  imageComponent,
  title,
  subtitle,
  introText,
  sections,
  imagePosition = "left",
  backgroundColor = "bg-white",
  textColor = "text-gray-700",
  accentColor = "bg-blue-500",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-600",
  sectionTitleColor = "text-gray-800",
  sectionContentBgColor = "bg-gray-50/60",
  iconColor = "text-blue-600",
  borderColor = "border-gray-200",
  stickyTopOffset = "top-8",
  className = "",
}) => {
  // State for active section
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle section open/closed
  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={`relative ${backgroundColor} overflow-hidden ${className}`}
      style={{ position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Pink gradient background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-pink-100 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-pink-50 to-transparent opacity-70"></div>

        {/* Main container - Use CSS grid for better control of sticky behavior */}
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-16 relative`}
          style={{ minHeight: "90vh" }}
        >
          {/* Sticky Image Side - First or second column based on imagePosition */}
          <div
            className={`${imagePosition === "right" ? "lg:order-last" : ""}`}
            style={{
              height: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "sticky",
                top: "2rem",
                height: "fit-content",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {imageComponent}
              </motion.div>
            </div>
          </div>

          {/* Scrollable Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`text-3xl font-bold mb-3 ${titleColor}`}>
                {title}
              </h2>
              {subtitle && (
                <p className={`text-xl mb-6 ${subtitleColor}`}>{subtitle}</p>
              )}

              <div
                className={`h-1 w-20 ${accentColor} rounded-full mb-8`}
              ></div>

              {introText && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className={`text-lg mb-10 ${textColor}`}
                >
                  {introText}
                </motion.p>
              )}

              <div
                className={`space-y-2 ${sectionContentBgColor === "bg-gray-50/60" ? "bg-pink-50/40 p-6 rounded-xl" : ""}`}
              >
                {sections.map((section, index) => (
                  <CollapsibleSection
                    key={index}
                    title={section.title}
                    titleColor={sectionTitleColor}
                    contentBgColor={sectionContentBgColor}
                    iconColor={iconColor}
                    borderColor={borderColor}
                    isActive={activeIndex === index}
                    onToggle={() => toggleSection(index)}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`${textColor}`}
                    >
                      {section.content}
                    </motion.div>
                  </CollapsibleSection>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyImageSection;
