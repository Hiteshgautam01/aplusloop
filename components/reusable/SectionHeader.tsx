"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define the props interface with optional properties for maximum flexibility
interface SectionHeaderProps {
  // Content
  title: string;
  description?: string;
  
  // Icon options
  icon?: ReactNode;
  iconBackground?: string;
  iconBorderRadius?: string;
  
  // Image options
  showImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  
  // Color and styling
  titleColor?: string;
  descriptionColor?: string;
  dividerColor?: string;
  backgroundColor?: string;
  
  // Layout options
  layout?: "standard" | "centered" | "stacked" | "reversed";
  titleSize?: "sm" | "md" | "lg" | "xl" | "2xl";
  maxWidth?: string;
  
  // Animation options
  animation?: boolean;
  animationDelay?: number;
  customAnimationProps?: Record<string, unknown>;
  
  // Additional styling
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  
  // Divider options
  showDivider?: boolean;
  dividerWidth?: string;
  dividerStyle?: "solid" | "gradient" | "dashed" | "dotted" | "none";
  
  // Additional content
  badge?: string;
  badgeColor?: string;
  
  // Children for additional content
  children?: ReactNode;
}

const SectionHeader = ({
  // Content defaults
  title,
  description,
  
  // Icon defaults
  icon,
  iconBackground = "bg-gradient-to-br from-blue-600 to-indigo-600",
  iconBorderRadius = "rounded-2xl",
  
  // Image defaults
  showImage = false,
  imageSrc,
  imageAlt = "",
  imageWidth = 300,
  imageHeight = 200,
  
  // Color and styling defaults
  titleColor = "text-gray-800",
  descriptionColor = "text-gray-600",
  dividerColor = "from-blue-500",
  backgroundColor,
  
  // Layout defaults
  layout = "standard",
  titleSize = "xl",
  maxWidth = "max-w-6xl",
  
  // Animation defaults
  animation = true,
  animationDelay = 0,
  customAnimationProps,
  
  // Additional styling defaults
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  
  // Divider defaults
  showDivider = true,
  dividerWidth = "md:w-1/3",
  dividerStyle = "gradient",
  
  // Additional content defaults
  badge,
  badgeColor = "bg-blue-100 text-blue-800",
  
  // Children
  children,
}: SectionHeaderProps) => {
  // Map title size to actual classes
  const titleSizeMap = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
    "2xl": "text-5xl md:text-6xl",
    lg: "text-4xl md:text-5xl" // Default
  };
  
  // Set default animation props
  const defaultAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay: animationDelay }
  };
  
  // Combine default animation props with custom ones if provided
  const animationProps = animation 
    ? { ...defaultAnimationProps, ...customAnimationProps }
    : {};
  
  // Determine divider styles based on dividerStyle
  const getDividerStyles = () => {
    switch (dividerStyle) {
      case "gradient":
        return `h-px w-full ${dividerWidth} bg-gradient-to-r ${dividerColor} to-transparent`;
      case "dashed":
        return `h-px w-full ${dividerWidth} border-dashed border-t-2 border-${dividerColor.replace('from-', '')}`;
      case "dotted":
        return `h-px w-full ${dividerWidth} border-dotted border-t-2 border-${dividerColor.replace('from-', '')}`;
      case "solid":
        return `h-px w-full ${dividerWidth} bg-${dividerColor.replace('from-', '')}`;
      default:
        return '';
    }
  };
  
  // Determine layout class
  const getLayoutClasses = () => {
    switch (layout) {
      case "centered":
        return "text-center flex flex-col items-center";
      case "stacked":
        return "flex flex-col items-start";
      case "reversed":
        return "flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-6";
      default:
        return "flex flex-col md:flex-row md:items-center md:justify-between gap-6";
    }
  };
  
  return (
    <div className={`relative max-w-6xl mx-auto ${backgroundColor}`}>
      {/* Use a separate div for background styling to prevent overlay issues */}
      {backgroundColor && (
        <div className="absolute inset-0 z-0"></div>
      )}
      
      <div className={`${maxWidth} ${className} relative z-10`}>
        <motion.div 
          {...animationProps}
          className="mb-16 relative"
        >
          <div className={`${getLayoutClasses()} mb-8 relative z-20`}>
            <div className={layout === "centered" ? "flex flex-col items-center gap-4" : "flex items-start gap-5"}>
              {icon && (
                <div className={`flex-shrink-0 flex items-center justify-center w-16 h-16 ${iconBorderRadius} ${iconBackground} shadow-lg relative z-10`}>
                  {icon}
                </div>
              )}
              
              <div className="flex flex-col">
                <motion.h2 
                  initial={animation ? { opacity: 0, x: -20 } : undefined}
                  animate={animation ? { opacity: 1, x: 0 } : undefined}
                  transition={{ delay: animationDelay + 0.3, duration: 0.8 }}
                  className={`${titleSizeMap[titleSize]} font-light ${titleColor} ${titleClassName} relative z-10`}
                >
                  {title}
                </motion.h2>
                
                {badge && (
                  <motion.span 
                    initial={animation ? { opacity: 0, y: -5 } : undefined}
                    animate={animation ? { opacity: 1, y: 0 } : undefined}
                    transition={{ delay: animationDelay + 0.4, duration: 0.5 }}
                    className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${badgeColor} inline-block mt-2 relative z-10`}
                  >
                    {badge}
                  </motion.span>
                )}
              </div>
            </div>
            
            {showDivider && layout !== "centered" && (
              <motion.div
                initial={animation ? { scaleX: 0 } : undefined}
                animate={animation ? { scaleX: 1 } : undefined}
                transition={{ delay: animationDelay + 0.4, duration: 0.8 }}
                className={`${getDividerStyles()} self-center hidden md:block relative z-10`}
              />
            )}
          </div>
          
          {showDivider && layout === "centered" && (
            <motion.div
              initial={animation ? { scaleX: 0 } : undefined}
              animate={animation ? { scaleX: 1 } : undefined}
              transition={{ delay: animationDelay + 0.4, duration: 0.8 }}
              className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8 relative z-10"
            />
          )}
          
          {description && (
            <motion.p 
              initial={animation ? { opacity: 0 } : undefined}
              animate={animation ? { opacity: 1 } : undefined}
              transition={{ delay: animationDelay + 0.5, duration: 0.8 }}
              className={`text-lg ${descriptionColor} ${layout === "centered" ? "text-center max-w-3xl mx-auto" : "max-w-4xl"} ${descriptionClassName} relative z-10`}
            >
              {description}
            </motion.p>
          )}
          
          {showImage && imageSrc && (
            <motion.div 
              initial={animation ? { opacity: 0, y: 20 } : undefined}
              animate={animation ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: animationDelay + 0.6, duration: 0.8 }}
              className="mt-8 relative z-10"
            >
              <Image 
                src={imageSrc} 
                alt={imageAlt} 
                width={imageWidth} 
                height={imageHeight} 
                className="rounded-lg shadow-md mx-auto"
              />
            </motion.div>
          )}
          
          {children && (
            <motion.div
              initial={animation ? { opacity: 0, y: 10 } : undefined}
              animate={animation ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: animationDelay + 0.7, duration: 0.8 }}
              className="mt-6 relative z-10"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionHeader;

