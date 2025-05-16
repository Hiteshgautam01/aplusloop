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
    "px-8 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105";

  const variants = {
    primary: " text-black hover:bg-opacity-90 shadow-lg",
    secondary:
      "bg-black/70 text-white border-2 border-white hover:bg-white hover:text-black",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
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
      transition={{ duration: 0.5, delay }}
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
        "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,50,0.8) 100%)",
    },
    mesh: {
      background: `
        radial-gradient(circle at 20% 20%, rgba(0,100,255,0.3) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(255,0,100,0.3) 0%, transparent 40%),
        linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)
      `,
    },
    blur: {
      backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
      backdropFilter: "blur(8px) saturate(150%)",
      WebkitBackdropFilter: "blur(8px) saturate(150%)",
    },
    glass: {
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      backdropFilter: "blur(10px) saturate(180%)",
      WebkitBackdropFilter: "blur(10px) saturate(180%)",
      borderTop: "1px solid rgba(255,255,255,0.2)",
      borderLeft: "1px solid rgba(255,255,255,0.2)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    },
    split: {
      background: `
        linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 100%)
      `,
    },
    geometric: {
      backgroundImage: `
        linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000),
        linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000),
        linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000),
        linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000),
        linear-gradient(60deg, rgba(0,0,0,0.8) 25%, transparent 25.5%, transparent 75%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.8)),
        linear-gradient(60deg, rgba(0,0,0,0.8) 25%, transparent 25.5%, transparent 75%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.8))
      `,
      backgroundSize: "80px 140px",
      backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    default: {
      backgroundColor: `rgba(0,0,20,${overlayOpacity})`,
      background: `linear-gradient(135deg, rgba(0,0,20,${overlayOpacity}) 0%, rgba(0,0,40,${overlayOpacity + 0.1}) 100%)`,
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
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/20" />

        {/* Animated particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Container */}
      <div
        className={`absolute inset-0 flex flex-col justify-center ${contentPadding[layout]} z-10`}
      >
        <div
          className={`max-w-6xl w-full ${layout === "center" ? "mx-auto" : ""}`}
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
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/20">
                  {badge}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              className={`${titleClassName} text-white leading-tight`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animationDuration, delay: 0.2 }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                className={`${subtitleClassName} text-white/90`}
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
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
