// utils/animation.ts
import { Variants } from "framer-motion";

// Fade in animation for sections
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.99],
    }
  }
};

// Staggered fade in for children elements
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99],
    }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99],
    }
  }
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99],
    }
  }
};

// Animation for items in a grid/list
export const itemFadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
    }
  }
};

// Hover animations for interactive elements
export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

export const hoverBounce = {
  whileHover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};