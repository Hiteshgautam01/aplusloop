"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  hasImage?: boolean;
  imagePosition?: "left" | "right";
  imageProps?: {
    title?: string;
    subtitle?: string;
    bgColor?: string;
    textColor?: string;
    accentColor?: string;
    iconPath?: string;
  };
  isOpen: boolean;
  toggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  hasImage = false,
  imagePosition = "left",
  imageProps = {},
  isOpen,
  toggle,
}) => {
  // Default colors - matching the pink theme from other components
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  const defaultImageProps = {
    title: imageProps.title || "Image",
    subtitle: imageProps.subtitle || "Supporting visual",
    bgColor: imageProps.bgColor || mediumBgColor,
    textColor: imageProps.textColor || "#333",
    accentColor: imageProps.accentColor || primaryColor,
    iconPath: imageProps.iconPath || "M12 5v14M5 12h14",
    width: "100%",
    height: "300px",
  };

  return (
    <div className="border-b border-pink-200">
      <button
        className="w-full py-5 flex items-center justify-between focus:outline-none group"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600 group-hover:bg-pink-200 transition-colors duration-200"
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className={`pb-6 ${hasImage ? "md:flex md:gap-8 md:items-start" : ""}`}
            >
              {hasImage && imagePosition === "left" && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="md:w-1/3 mb-4 md:mb-0"
                >
                  <ImagePlaceholder {...defaultImageProps} />
                </motion.div>
              )}

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className={hasImage ? "md:w-2/3" : "w-full"}
              >
                {content}
              </motion.div>

              {hasImage && imagePosition === "right" && (
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="md:w-1/3 mt-4 md:mt-0"
                >
                  <ImagePlaceholder {...defaultImageProps} />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export interface AccordionSectionProps {
  items: {
    title: string;
    content: React.ReactNode;
    hasImage?: boolean;
    imagePosition?: "left" | "right";
    imageProps?: {
      title?: string;
      subtitle?: string;
      bgColor?: string;
      textColor?: string;
      accentColor?: string;
      iconPath?: string;
    };
  }[];
  title?: string;
  subtitle?: React.ReactNode;
  backgroundColor?: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  items,
  title,
  subtitle,
  backgroundColor = "bg-white",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full ${backgroundColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                <span className="relative inline-block">
                  {title}
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-pink-200 opacity-70 transform -rotate-1 z-0"></span>
                </span>
              </h2>
            )}
            {subtitle &&
              (typeof subtitle === "string" ? (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {subtitle}
                </p>
              ) : (
                subtitle
              ))}
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              hasImage={item.hasImage}
              imagePosition={item.imagePosition}
              imageProps={item.imageProps}
              isOpen={openIndex === index}
              toggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
