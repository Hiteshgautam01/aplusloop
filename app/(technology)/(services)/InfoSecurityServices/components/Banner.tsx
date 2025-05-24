"use client";
import React, { CSSProperties } from "react";
import Image from "next/image";
import { motion, MotionProps } from "framer-motion";

// Types for overlay styles
type OverlayType =
  | "gradient"
  | "blur"
  | "mesh"
  | "glass"
  | "split"
  | "geometric"
  | "default";

interface OverlayStyles {
  gradient: CSSProperties;
  mesh: CSSProperties;
  blur: CSSProperties;
  glass: CSSProperties;
  split: CSSProperties;
  geometric: CSSProperties;
  default: CSSProperties;
}

// CTA Button interface
interface CTAButton {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

// Banner component props interface
interface BannerProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  height?: string;
  overlayType?: OverlayType;
  overlayOpacity?: number;
  animationDuration?: number;
  customOverlayStyle?: CSSProperties;
  customContainerStyle?: CSSProperties;
  titleClassName?: string;
  subtitleClassName?: string;
  ctaButtons?: CTAButton[];
  layout?: "center" | "left" | "right";
  badge?: string;
  children?: React.ReactNode;
}

// CTA Button Component
const CTAButtonComponent: React.FC<CTAButton & { delay?: number }> = ({
  text,
  onClick,
  href,
  variant = "primary",
  className = "",
  delay = 0.6,
}) => {
  const baseStyles =
    "px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-950 to-blue-900 text-white shadow-xl hover:from-blue-900 hover:to-blue-800 hover:shadow-2xl border border-blue-800/60 hover:border-blue-700/80",
    secondary:
      "bg-gradient-to-r from-blue-950/90 to-blue-900/90 text-white border-2 border-blue-800/50 hover:from-blue-900/95 hover:to-blue-800/95 hover:border-blue-700/70 backdrop-blur-md shadow-lg",
    outline:
      "bg-gradient-to-r from-transparent to-blue-950/30 text-white border-2 border-blue-700/60 hover:from-blue-900/40 hover:to-blue-800/40 hover:border-blue-600/80 backdrop-blur-sm shadow-lg",
  };

  const buttonStyle = `${baseStyles} ${variants[variant]} ${className}`;

  const content = href ? (
    <a href={href} className={buttonStyle}>
      {text}
    </a>
  ) : (
    <button onClick={onClick} className={buttonStyle}>
      {text}
    </button>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {content}
    </motion.div>
  );
};

// Main Banner component
const Banner: React.FC<BannerProps> = ({
  imageSrc = "/security-banner.png",
  title = "Information Security Services",
  subtitle = "Comprehensive security solutions to protect your digital assets and empower your business",
  height = "600px",
  overlayType = "default",
  overlayOpacity = 0.6,
  animationDuration = 0.5,
  customOverlayStyle = {},
  customContainerStyle = {},
  titleClassName = "text-5xl md:text-6xl lg:text-7xl font-bold",
  subtitleClassName = "mt-6 text-xl md:text-2xl font-light max-w-3xl",
  ctaButtons = [
    { text: "Get Started", variant: "primary" },
    { text: "Learn More", variant: "outline" },
  ],
  layout = "center",
  badge,
  children,
}) => {
  // Different overlay styles with more visibility
  const overlayStyles: OverlayStyles = {
    gradient: {
      background:
        "linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(30,41,59,0.9) 50%, rgba(51,65,85,0.8) 100%)",
    },
    mesh: {
      background: `
        radial-gradient(circle at 20% 20%, rgba(23,37,84,0.4) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(30,58,138,0.3) 0%, transparent 40%),
        radial-gradient(circle at 50% 50%, rgba(37,99,235,0.2) 0%, transparent 60%),
        linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.9) 100%)
      `,
    },
    blur: {
      backgroundColor: `rgba(15,23,42,${overlayOpacity + 0.2})`,
      backdropFilter: "blur(12px) saturate(150%) brightness(1.1)",
      WebkitBackdropFilter: "blur(12px) saturate(150%) brightness(1.1)",
    },
    glass: {
      background:
        "linear-gradient(135deg, rgba(23,37,84,0.15) 0%, rgba(30,58,138,0.1) 50%, rgba(37,99,235,0.08) 100%)",
      backdropFilter: "blur(16px) saturate(180%) brightness(1.2)",
      WebkitBackdropFilter: "blur(16px) saturate(180%) brightness(1.2)",
      borderTop: "1px solid rgba(23,37,84,0.3)",
      borderLeft: "1px solid rgba(23,37,84,0.2)",
      boxShadow:
        "0 8px 32px 0 rgba(23,37,84,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
    },
    split: {
      background: `
        linear-gradient(90deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.8) 50%, rgba(51,65,85,0.6) 100%)
      `,
    },
    geometric: {
      backgroundImage: `
        linear-gradient(30deg, rgba(15,23,42,0.9) 12%, transparent 12.5%, transparent 87%, rgba(15,23,42,0.9) 87.5%),
        linear-gradient(150deg, rgba(30,41,59,0.8) 12%, transparent 12.5%, transparent 87%, rgba(30,41,59,0.8) 87.5%),
        linear-gradient(60deg, rgba(23,37,84,0.3) 25%, transparent 25.5%, transparent 75%, rgba(23,37,84,0.3) 75%),
        linear-gradient(120deg, rgba(30,58,138,0.2) 25%, transparent 25.5%, transparent 75%, rgba(30,58,138,0.2) 75%)
      `,
      backgroundSize: "100px 170px, 80px 140px, 60px 104px, 40px 70px",
      backgroundPosition: "0 0, 40px 70px, 20px 35px, 60px 105px",
      backgroundColor: "rgba(15,23,42,0.85)",
    },
    default: {
      background: `
        linear-gradient(135deg, rgba(15,23,42,${overlayOpacity + 0.15}) 0%, rgba(30,41,59,${overlayOpacity + 0.1}) 50%, rgba(51,65,85,${overlayOpacity}) 100%)
      `,
    },
  };

  const getOverlayStyle = (): CSSProperties => {
    return overlayStyles[overlayType] || overlayStyles.default;
  };

  const layoutAlignments = {
    center: "items-center text-center",
    left: "items-start text-left",
    right: "items-end text-right",
  };

  const contentPadding = {
    center: "px-4",
    left: "pl-8 md:pl-16 lg:pl-24 pr-4",
    right: "pr-8 md:pr-16 lg:pr-24 pl-4",
  };

  return (
    <motion.div
      className="relative w-full overflow-hidden mt-16"
      style={{ height, ...customContainerStyle }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: animationDuration }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Main Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ ...getOverlayStyle(), ...customOverlayStyle }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-700/40 to-transparent" />

        {/* Sophisticated corner accents */}
        <div className="absolute top-0 left-0 w-40 h-40">
          <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-blue-600/40 rounded-br-3xl" />
          <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-blue-500/30" />
        </div>

        <div className="absolute bottom-0 right-0 w-40 h-40">
          <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-blue-500/40 rounded-tl-3xl" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-blue-400/50" />
        </div>

        {/* Enhanced floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-blue-800 to-blue-700 rounded-full shadow-lg shadow-blue-950/70"
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-3/4 right-1/3 w-2 h-2 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full shadow-lg shadow-blue-950/70"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full shadow-md shadow-blue-950/60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content Container */}
      <div
        className={`absolute inset-0 flex flex-col justify-center ${contentPadding[layout]} z-10`}
      >
        <div
          className={`max-w-7xl w-full ${layout === "center" ? "mx-auto" : "mx-auto"}`}
        >
          <div className={`flex flex-col ${layoutAlignments[layout]}`}>
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationDuration }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-950/70 to-blue-900/70 backdrop-blur-md rounded-full text-white/95 text-sm font-semibold border border-blue-800/50 shadow-lg shadow-blue-950/40">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full mr-3 animate-pulse"></span>
                  {badge}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              className={`${titleClassName} text-white leading-tight drop-shadow-lg`}
              style={{
                textShadow:
                  "0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animationDuration, delay: 0.2 }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                className={`${subtitleClassName} text-white/95 drop-shadow-md ${layout === "left" ? "text-left max-w-7xl" : layout === "right" ? "text-right max-w-3xl ml-auto" : "text-center mx-auto"}`}
                style={{
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationDuration, delay: 0.3 }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* CTA Buttons */}
            {ctaButtons.length > 0 && (
              <motion.div
                className={`mt-8 flex flex-wrap gap-4 ${layout === "center" ? "justify-center" : layout === "right" ? "justify-end" : "justify-start"}`}
              >
                {ctaButtons.map((button, index) => (
                  <CTAButtonComponent
                    key={index}
                    {...button}
                    delay={0.5 + index * 0.1}
                  />
                ))}
              </motion.div>
            )}

            {/* Custom Children */}
            {children && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationDuration, delay: 0.7 }}
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900/60 via-slate-800/30 to-transparent pointer-events-none" />
    </motion.div>
  );
};

// Usage Examples
const BannerExamples: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Modern Default Banner */}
      <Banner />

      {/* Hero Banner with Glass Effect */}
      <Banner
        imageSrc="/hero-banner.png"
        title="Transform Your Digital Future"
        subtitle="Cutting-edge solutions powered by AI and innovation"
        overlayType="glass"
        layout="center"
        badge="NEW RELEASE"
        ctaButtons={[
          { text: "Start Free Trial", variant: "primary" },
          { text: "Watch Demo", variant: "secondary" },
        ]}
      />

      {/* Split Layout Banner */}
      <Banner
        imageSrc="/product-banner.png"
        title="Enterprise Security Platform"
        subtitle="Protect your organization with next-generation cybersecurity"
        overlayType="split"
        layout="left"
        height="700px"
        ctaButtons={[
          { text: "Contact Sales", variant: "primary" },
          { text: "View Pricing", variant: "outline" },
        ]}
      />

      {/* Geometric Pattern Banner */}
      <Banner
        imageSrc="/tech-banner.png"
        title="Innovation Meets Design"
        subtitle="Create beautiful experiences with our design system"
        overlayType="geometric"
        layout="right"
        badge="FEATURED"
        ctaButtons={[{ text: "Explore Now", variant: "primary" }]}
      />
    </div>
  );
};

export default Banner;
