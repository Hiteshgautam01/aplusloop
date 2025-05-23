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
  blueBg?: boolean; // New prop for default blue background
  isFloat?: boolean; // New prop for floating animations

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
  iconBackground = "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50",
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
  blueBg = false, // Default to false
  isFloat = false, // Default to false

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
    lg: "text-4xl md:text-5xl", // Default
  };

  // Set default animation props
  const defaultAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay: animationDelay },
  };

  // Combine default animation props with custom ones if provided
  const animationProps = animation
    ? { ...defaultAnimationProps, ...customAnimationProps }
    : {};

  // Determine background class - blueBg takes priority over backgroundColor
  const getBackgroundClass = () => {
    if (blueBg) {
      return "relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950";
    }
    return backgroundColor || "";
  };

  // Determine divider styles based on dividerStyle
  const getDividerStyles = () => {
    switch (dividerStyle) {
      case "gradient":
        return `h-px w-full ${dividerWidth} bg-gradient-to-r ${dividerColor} to-transparent`;
      case "dashed":
        return `h-px w-full ${dividerWidth} border-dashed border-t-2 border-${dividerColor.replace("from-", "")}`;
      case "dotted":
        return `h-px w-full ${dividerWidth} border-dotted border-t-2 border-${dividerColor.replace("from-", "")}`;
      case "solid":
        return `h-px w-full ${dividerWidth} bg-${dividerColor.replace("from-", "")}`;
      default:
        return "";
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

  const backgroundClass = getBackgroundClass();

  return (
    <div className={`w-full ${backgroundClass} ${blueBg ? "py-20 px-6" : ""}`}>
      {blueBg && (
        <>
          {/* Enhanced gradient overlay for better visibility */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at top left, rgba(29, 78, 216, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(30, 58, 138, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at center, rgba(37, 99, 235, 0.1) 0%, transparent 60%)
              `,
            }}
          />

          {/* Floating elements - only show if isFloat is true */}
          {isFloat && (
            <>
              <motion.div
                className="absolute top-20 left-[10%] w-72 h-72 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(29, 78, 216, 0.12) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, 30, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-10 right-[10%] w-96 h-96 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(30, 58, 138, 0.12) 0%, transparent 70%)",
                  filter: "blur(80px)",
                }}
                animate={{
                  y: [0, 50, 0],
                  x: [0, -40, 0],
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              <motion.div
                className="absolute top-[50%] left-[40%] w-80 h-80 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
                  filter: "blur(70px)",
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, -35, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4,
                }}
              />
            </>
          )}

          {/* Subtle geometric shapes for depth */}
          <div className="absolute top-10 right-[20%] w-32 h-32 bg-blue-800/15 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-[25%] w-40 h-40 bg-indigo-900/15 rounded-full blur-3xl" />
        </>
      )}

      <div className={`${maxWidth} mx-auto ${className} relative z-10`}>
        <motion.div {...animationProps} className="relative">
          <div className={`${getLayoutClasses()} mb-8 relative z-20`}>
            <div
              className={
                layout === "centered"
                  ? "flex flex-col items-center gap-4"
                  : "flex items-start gap-5"
              }
            >
              {icon && (
                <motion.div
                  className={`flex-shrink-0 flex items-center justify-center w-16 h-16 ${iconBorderRadius} ${blueBg ? "bg-white/90 backdrop-blur-sm shadow-xl shadow-blue-900/20" : iconBackground} text-blue-600 relative z-10`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
              )}

              <div className="flex flex-col items-center">
                <motion.h2
                  initial={animation ? { opacity: 0, x: -20 } : undefined}
                  animate={animation ? { opacity: 1, x: 0 } : undefined}
                  transition={{ delay: animationDelay + 0.3, duration: 0.8 }}
                  className={`${titleSizeMap[titleSize]} font-light ${blueBg ? "text-white" : titleColor} ${titleClassName} relative z-10`}
                >
                  {title}
                </motion.h2>

                {badge && (
                  <motion.span
                    initial={animation ? { opacity: 0, y: -5 } : undefined}
                    animate={animation ? { opacity: 1, y: 0 } : undefined}
                    transition={{ delay: animationDelay + 0.4, duration: 0.5 }}
                    className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${blueBg ? "bg-white/20 text-white backdrop-blur-sm" : badgeColor} inline-block mt-2 relative z-10`}
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
                className={`${blueBg && dividerStyle === "gradient" ? "h-[1px] w-full md:w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" : getDividerStyles()} self-center hidden md:block relative z-10`}
              />
            )}
          </div>

          {showDivider && layout === "centered" && (
            <motion.div
              initial={animation ? { scaleX: 0 } : undefined}
              animate={animation ? { scaleX: 1 } : undefined}
              transition={{ delay: animationDelay + 0.4, duration: 0.8 }}
              className={`h-1 w-24 ${blueBg ? "bg-gradient-to-r from-blue-300/50 via-white/50 to-blue-300/50" : "bg-gradient-to-r from-blue-400 to-indigo-500"} mx-auto mb-8 relative z-10 rounded-full`}
            />
          )}

          {description && (
            <motion.p
              initial={animation ? { opacity: 0 } : undefined}
              animate={animation ? { opacity: 1 } : undefined}
              transition={{ delay: animationDelay + 0.5, duration: 0.8 }}
              className={`text-lg ${blueBg ? "text-white/80" : descriptionColor} ${layout === "centered" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${descriptionClassName} relative z-10`}
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
                className={`rounded-lg ${blueBg ? "shadow-2xl shadow-blue-900/30" : "shadow-md"} mx-auto`}
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
