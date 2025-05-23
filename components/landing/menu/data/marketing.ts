import {
    LucideIcon,
    PenTool,
    Palette,
    Globe,
    FileText,
    Camera,
    TrendingUp,
  } from "lucide-react";
  
  export interface MarketingCategory {
    title: string;
    icon: LucideIcon;
    href: string;
  }
  
  export interface MarketingSection {
    title: string;
    description: string;
    imageSrc: string;
    section: string;
  }
  
  // Marketing Services Categories
  export const marketingServiceCategories: MarketingCategory[] = [
    {
      title: "Design Services",
      icon: PenTool,
      href: "/DesignServices",
    },
    {
      title: "Branding & Creative",
      icon: Palette,
      href: "/BrandingCreativeServices",
    },
    {
      title: "Web Services",
      icon: Globe,
      href: "/WebServices",
    },
    {
      title: "Content Marketing",
      icon: FileText,
      href: "/ContentMarketing",
    },
    {
      title: "Photography & Videography",
      icon: Camera,
      href: "/PhotographyVideography",
    },
  ];
  
  // Marketing Solutions Categories
  export const marketingSolutionCategories: MarketingCategory[] = [
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      href: "/DigitalMarketing",
    },
  ];
  
  // Design Services sections
  export const designServicesSections: MarketingSection[] = [
    {
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user interfaces with comprehensive UX research and design",
      imageSrc: "/api/placeholder/300/200",
      section: "ui-ux-design",
    },
    {
      title: "Digital Branding",
      description:
        "Develop compelling digital brand experiences across all online touchpoints",
      imageSrc: "/api/placeholder/300/200",
      section: "digital-branding",
    },
  ];
  
  // Branding & Creative sections
  export const brandingCreativeSections: MarketingSection[] = [
    {
      title: "Brand Strategy",
      description:
        "Comprehensive brand strategy development to position your business effectively in the market",
      imageSrc: "/api/placeholder/300/200",
      section: "brand-strategy",
    },
    {
      title: "Brand Concept",
      description:
        "Creative brand concept development that captures your unique value proposition",
      imageSrc: "/api/placeholder/300/200",
      section: "brand-concept",
    },
    {
      title: "Brand Identity",
      description:
        "Complete brand identity design including logos, color schemes, and visual guidelines",
      imageSrc: "/api/placeholder/300/200",
      section: "brand-identity",
    },
    {
      title: "Customer Experience",
      description:
        "Design exceptional customer experiences that build loyalty and drive engagement",
      imageSrc: "/api/placeholder/300/200",
      section: "customer-experience",
    },
    {
      title: "Our Packages",
      description:
        "Comprehensive branding packages tailored to meet your specific business needs",
      imageSrc: "/api/placeholder/300/200",
      section: "our-packages",
    },
  ];
  
  // Web Services sections
  export const webServicesSections: MarketingSection[] = [
    {
      title: "Web & Mobile Development",
      description:
        "Full-stack web and mobile application development with modern technologies and frameworks",
      imageSrc: "/api/placeholder/300/200",
      section: "web-mobile-development",
    },
  ];
  
  // Content Marketing sections
  export const contentMarketingSections: MarketingSection[] = [
    {
      title: "Content Strategy",
      description:
        "Develop comprehensive content strategies aligned with your business goals and target audience",
      imageSrc: "/api/placeholder/300/200",
      section: "content-strategy",
    },
    {
      title: "Content Audit",
      description:
        "Thorough analysis of existing content to identify gaps and optimization opportunities",
      imageSrc: "/api/placeholder/300/200",
      section: "content-audit",
    },
    {
      title: "Editorial Strategy & Content Development Plan",
      description:
        "Strategic editorial planning and content development roadmaps for consistent brand messaging",
      imageSrc: "/api/placeholder/300/200",
      section: "editorial-strategy-content-development-plan",
    },
    {
      title: "Content Optimization",
      description:
        "Optimize content for search engines and user engagement to maximize reach and impact",
      imageSrc: "/api/placeholder/300/200",
      section: "content-optimization",
    },
    {
      title: "Content Promotion",
      description:
        "Multi-channel content promotion strategies to amplify your message and reach target audiences",
      imageSrc: "/api/placeholder/300/200",
      section: "content-promotion",
    },
    {
      title: "Content Reporting",
      description:
        "Comprehensive analytics and reporting to measure content performance and ROI",
      imageSrc: "/api/placeholder/300/200",
      section: "content-reporting",
    },
  ];
  
  // Photography & Videography sections
  export const photographyVideographySections: MarketingSection[] = [
    {
      title: "Photo & Video",
      description:
        "Professional photography and videography services for all your marketing and branding needs",
      imageSrc: "/api/placeholder/300/200",
      section: "photo-video",
    },
    {
      title: "Shoot Campaigns",
      description:
        "End-to-end campaign shoot management from concept development to final delivery",
      imageSrc: "/api/placeholder/300/200",
      section: "shoot-campaigns",
    },
  ];
  
  // Digital Marketing sections (Solution)
  export const digitalMarketingSections: MarketingSection[] = [
    {
      title: "Customised Strategy",
      description:
        "Tailored digital marketing strategies designed to meet your unique business objectives",
      imageSrc: "/api/placeholder/300/200",
      section: "customised-strategy",
    },
    {
      title: "Social Media Management",
      description:
        "Complete social media management including content creation, scheduling, and community engagement",
      imageSrc: "/api/placeholder/300/200",
      section: "social-media-management",
    },
    {
      title: "PPC",
      description:
        "Pay-per-click advertising campaigns optimized for maximum ROI across all major platforms",
      imageSrc: "/api/placeholder/300/200",
      section: "ppc",
    },
    {
      title: "Email Marketing",
      description:
        "Strategic email marketing campaigns that nurture leads and drive conversions",
      imageSrc: "/api/placeholder/300/200",
      section: "email-marketing",
    },
    {
      title: "SEO Solutions",
      description:
        "Comprehensive SEO strategies to improve search rankings and organic traffic",
      imageSrc: "/api/placeholder/300/200",
      section: "seo-solutions",
    },
    {
      title: "Data and Analytics Solutions",
      description:
        "Advanced analytics and data insights to optimize marketing performance and decision making",
      imageSrc: "/api/placeholder/300/200",
      section: "data-analytics-solutions",
    },
  ];
  
  // Map marketing service category to sections
  export const getMarketingServiceSections = (category: string): MarketingSection[] => {
    switch (category) {
      case "Design Services":
        return designServicesSections;
      case "Branding & Creative":
        return brandingCreativeSections;
      case "Web Services":
        return webServicesSections;
      case "Content Marketing":
        return contentMarketingSections;
      case "Photography & Videography":
        return photographyVideographySections;
      default:
        return designServicesSections;
    }
  };
  
  // Map marketing solution category to sections
  export const getMarketingSolutionSections = (category: string): MarketingSection[] => {
    switch (category) {
      case "Digital Marketing":
        return digitalMarketingSections;
      default:
        return digitalMarketingSections;
    }
  };