import { Variants } from "framer-motion";

export const defaultTransition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}; 