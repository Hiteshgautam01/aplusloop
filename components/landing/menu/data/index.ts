import {
  LucideIcon,
  ChevronRight,
  ArrowRight,
  Code,
  Database,
  Cloud,
  Layers,
  Shield,
  Briefcase,
  Users,
  Zap,
  TrendingUp,
  PenTool,
  Building,
  BadgeCheck,
  BarChart,
  PieChart,
  LineChart,
  Smartphone,
  Globe,
  Lock,
  Cpu,
  SmartphoneCharging,
  Building2,
  FlaskConical,
  NetworkIcon,
  HardDrive,
  Server,
  Workflow,
  Settings,
} from "lucide-react";

// Types
export interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  description: string;
  icon?: LucideIcon;
  href: string;
}

export interface FeaturedContentProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  section: string;
  imageSrc: string;
}

export interface ServiceCategoryProps {
  title: string;
  icon: LucideIcon;
  href: string;
  active: boolean;
  onMouseEnter: () => void;
}

export interface ServiceSectionProps {
  title: string;
  sections: ServiceCardProps[];
  activeCategory: string;
}

// Services Categories
export const serviceCategories = [
  {
    title: "Digital Transformation",
    icon: Zap,
    href: "/digitaltransformation",
  },
  {
    title: "Info Security Services",
    icon: Shield,
    href: "/infosecurity",
  },
  {
    title: "Business Consulting",
    icon: Briefcase,
    href: "/consulting",
  },
  {
    title: "IT Staff Augmentation",
    icon: Users,
    href: "/staffing",
  },
];

// Solutions Categories
export const solutionCategories = [
  {
    title: "Business & Infrastructure",
    icon: Building2,
    href: "/solutions/business-infrastructure",
  },
  {
    title: "Mobility Solutions",
    icon: Smartphone,
    href: "/solutions/mobility",
  },
  {
    title: "Digital Transformation",
    icon: Workflow,
    href: "/solutions/digital-transformation",
  },
  {
    title: "Cybersecurity Solutions",
    icon: Lock,
    href: "/solutions/cybersecurity",
  },
  {
    title: "Industry 4.0 & IOT",
    icon: Cpu,
    href: "/solutions/industry-iot",
  },
  {
    title: "Smart Nations Solutions",
    icon: Globe,
    href: "/solutions/smart-nations",
  },
];

// Digital transformation sections
export const digitalTransformationSections = [
  {
    title: "Development",
    description:
      "Custom software development services tailored to your business needs and requirements",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Integration & Deployment",
    description:
      "Seamless integration of systems and efficient deployment strategies for your business",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Automation Services",
    description:
      "Streamline operations with intelligent automation solutions to increase efficiency",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Data Management",
    description:
      "End-to-end data management solutions to help you make informed business decisions",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Mobility Services",
    description:
      "Mobile application development and management services for modern businesses",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Cloud Services",
    description:
      "Comprehensive cloud solutions to enhance scalability and reduce operational costs",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Service Management",
    description:
      "Effective IT service management to optimize your technology investments",
    imageSrc: "/automation.jpg",
  },
  {
    title: "DevOps",
    description:
      "DevOps practices to accelerate development cycles and improve collaboration",
    imageSrc: "/automation.jpg",
  },
];

// Info security sections
export const infoSecuritySections = [
  {
    title: "Security Assessment",
    description:
      "Comprehensive security assessment to identify vulnerabilities in your systems",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Threat Detection",
    description:
      "Advanced threat detection systems to protect your business from cyber attacks",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Data Protection",
    description:
      "Solutions to safeguard sensitive data and ensure compliance with regulations",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Security Training",
    description:
      "Staff training programs to create a security-conscious organization",
    imageSrc: "/automation.jpg",
  },
];

// Consulting sections
export const consultingSections = [
  {
    title: "Strategy Consulting",
    description:
      "Strategic guidance to help businesses achieve their long-term objectives",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Process Optimization",
    description:
      "Streamline business processes to improve efficiency and reduce costs",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Digital Strategy",
    description:
      "Digital transformation strategies to keep your business competitive",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Change Management",
    description:
      "Facilitate smooth transitions during organizational changes and transformation",
    imageSrc: "/automation.jpg",
  },
];

// Staffing sections
export const staffingSections = [
  {
    title: "IT Professionals",
    description:
      "Access to skilled IT professionals to supplement your existing team",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Project Teams",
    description:
      "Dedicated project teams to handle specific initiatives and deliverables",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Executive Talent",
    description:
      "C-level and senior IT leadership to guide strategic technology decisions",
    imageSrc: "/automation.jpg",
  },
  {
    title: "Contract to Hire",
    description:
      "Flexible staffing solutions with the option to convert to permanent roles",
    imageSrc: "/automation.jpg",
  },
];

// Solution Sections Data
export const businessInfrastructureSections = [
  {
    title: "Enterprise Resource Planning",
    description:
      "Comprehensive ERP solutions for streamlined business operations",
    imageSrc: "/solutions/erp.jpg",
  },
  {
    title: "Customer Relationship Management",
    description:
      "CRM systems to enhance customer engagement and sales performance",
    imageSrc: "/solutions/crm.jpg",
  },
  {
    title: "Business Intelligence",
    description: "Data analytics and BI tools for informed decision-making",
    imageSrc: "/solutions/bi.jpg",
  },
  {
    title: "Supply Chain Management",
    description: "End-to-end supply chain optimization solutions",
    imageSrc: "/solutions/scm.jpg",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure solutions for business growth",
    imageSrc: "/solutions/cloud.jpg",
  },
];

export const mobilitySolutions = [
  {
    title: "Enterprise Mobility",
    description: "Mobile solutions designed for enterprise business processes",
    imageSrc: "/solutions/mobility.jpg",
  },
  {
    title: "Mobile App Development",
    description: "Custom mobile applications for iOS and Android platforms",
    imageSrc: "/solutions/app-dev.jpg",
  },
  {
    title: "Cross-Platform Solutions",
    description: "Unified applications that work across multiple devices",
    imageSrc: "/solutions/cross-platform.jpg",
  },
  {
    title: "Mobile Device Management",
    description: "Solutions to secure and manage company mobile devices",
    imageSrc: "/solutions/mdm.jpg",
  },
  {
    title: "Location-Based Services",
    description: "GPS and location intelligence for mobile applications",
    imageSrc: "/solutions/location.jpg",
  },
];

export const digitalTransformationSolutions = [
  {
    title: "Digital Strategy",
    description: "Comprehensive digital transformation roadmaps",
    imageSrc: "/solutions/digital-strategy.jpg",
  },
  {
    title: "Process Automation",
    description: "Workflow and business process automation solutions",
    imageSrc: "/solutions/automation.jpg",
  },
  {
    title: "Data Analytics",
    description: "Advanced analytics to drive business insights",
    imageSrc: "/solutions/analytics.jpg",
  },
  {
    title: "Customer Experience",
    description: "Digital solutions to enhance customer engagement",
    imageSrc: "/solutions/cx.jpg",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by AI technologies",
    imageSrc: "/solutions/ai.jpg",
  },
];

export const cybersecuritySolutions = [
  {
    title: "Network Security",
    description: "Protection for your business network infrastructure",
    imageSrc: "/solutions/network-security.jpg",
  },
  {
    title: "Application Security",
    description: "Security solutions for web and mobile applications",
    imageSrc: "/solutions/app-security.jpg",
  },
  {
    title: "Identity Management",
    description: "Advanced identity and access management systems",
    imageSrc: "/solutions/identity.jpg",
  },
  {
    title: "Security Operations Center",
    description: "24/7 monitoring and threat response services",
    imageSrc: "/solutions/soc.jpg",
  },
  {
    title: "Compliance Solutions",
    description: "Security solutions to meet regulatory requirements",
    imageSrc: "/solutions/compliance.jpg",
  },
];

export const industryIotSolutions = [
  {
    title: "IoT Platform Integration",
    description: "Enterprise-grade IoT platform implementation",
    imageSrc: "/solutions/iot-platform.jpg",
  },
  {
    title: "Industrial Automation",
    description: "IoT solutions for manufacturing and industrial processes",
    imageSrc: "/solutions/industrial.jpg",
  },
  {
    title: "Predictive Maintenance",
    description: "IoT-based systems for equipment monitoring and maintenance",
    imageSrc: "/solutions/predictive.jpg",
  },
  {
    title: "Connected Products",
    description: "Product innovation through IoT connectivity",
    imageSrc: "/solutions/connected-products.jpg",
  },
  {
    title: "Smart Factory Solutions",
    description: "End-to-end Industry 4.0 implementations",
    imageSrc: "/solutions/smart-factory.jpg",
  },
];

export const smartNationsSolutions = [
  {
    title: "Smart City Infrastructure",
    description: "Integrated urban technology solutions",
    imageSrc: "/solutions/smart-city.jpg",
  },
  {
    title: "Digital Government",
    description: "Technology solutions for government services",
    imageSrc: "/solutions/e-gov.jpg",
  },
  {
    title: "Public Safety",
    description: "Technology for enhanced public safety and security",
    imageSrc: "/solutions/public-safety.jpg",
  },
  {
    title: "Urban Mobility",
    description: "Smart transportation and traffic management systems",
    imageSrc: "/solutions/urban-mobility.jpg",
  },
  {
    title: "Sustainability Solutions",
    description: "Smart environmental monitoring and management",
    imageSrc: "/solutions/sustainability.jpg",
  },
];

// Map solution category to sections
export const getSolutionSections = (category: string) => {
  switch (category) {
    case "Business & Infrastructure":
      return businessInfrastructureSections;
    case "Mobility Solutions":
      return mobilitySolutions;
    case "Digital Transformation":
      return digitalTransformationSolutions;
    case "Cybersecurity Solutions":
      return cybersecuritySolutions;
    case "Industry 4.0 & IOT":
      return industryIotSolutions;
    case "Smart Nations Solutions":
      return smartNationsSolutions;
    default:
      return businessInfrastructureSections;
  }
};

// Map service category to sections
export const getServiceSections = (category: string) => {
  switch (category) {
    case "Digital Transformation":
      return digitalTransformationSections;
    case "Info Security Services":
      return infoSecuritySections;
    case "Business Consulting":
      return consultingSections;
    case "IT Staff Augmentation":
      return staffingSections;
    default:
      return digitalTransformationSections;
  }
};
