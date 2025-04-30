// types/index.ts

// Type for section navigation
export interface SectionRef {
    name: string;
    ref: React.RefObject<HTMLDivElement | null>;
  }
  
  export interface NavMenuProps {
    sections: SectionRef[];
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  }
  
  // Job opening types
  export interface JobOpening {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string; // Full-time, Part-time, Contract
    description: string;
  }
  
  export interface JobOpeningsData {
    [key: string]: JobOpening[];
  }
  
  // Team member types
  export interface TeamMember {
    name: string;
    role: string;
    quote: string;
    image: string;
    linkedin?: string;
  }
  
  // Benefit types
  export interface Benefit {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  // Gallery image types
  export interface GalleryImage {
    src: string;
    alt: string;
  }
  
  // Animation props
  export interface MotionProps {
    delay?: number;
    duration?: number;
    children?: React.ReactNode;
  }