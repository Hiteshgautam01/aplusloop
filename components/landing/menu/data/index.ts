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
    href: "/DigitalTransformationServices",
  },
  {
    title: "Info Security Services",
    icon: Shield,
    href: "/InfoSecurityServices",
  },
  {
    title: "Business Consulting",
    icon: Briefcase,
    href: "/BusinessConsultingServices",
  },
  {
    title: "IT Staff Augmentation",
    icon: Users,
    href: "/StaffingServices",
  },
];

// Solutions Categories
export const solutionCategories = [
  {
    title: "Business & Infrastructure",
    icon: Building2,
    href: "/BusinessInfrastructureSolutions",
  },
  {
    title: "Mobility Solutions",
    icon: Smartphone,
    href: "/MobilitySolutions",
  },
  {
    title: "Digital Transformation",
    icon: Workflow,
    href: "/digital-transformation-solution",
  },
  {
    title: "Cybersecurity Solutions",
    icon: Lock,
    href: "/CybersecuritySolutions",
  },
  {
    title: "Industry 4.0 & IOT",
    icon: Cpu,
    href: "/IndustryIOT",
  },
  {
    title: "Smart Nations Solutions",
    icon: Globe,
    href: "/SmartNations",
  },
];

// Digital transformation sections
export const digitalTransformationSections = [
  {
    title: "Development Integration & Deployment",
    description:
      "Custom software development services tailored to your business needs and requirements",
    imageSrc: "/automation.jpg",
    section: "development-integration-deployment",
  },
  {
    title: "Automation Services",
    description:
      "Streamline operations with intelligent automation solutions to increase efficiency",
    imageSrc: "/automation.jpg",
    section: "automation-services",
  },
  {
    title: "Data Management Services",
    description:
      "End-to-end data management solutions to help you make informed business decisions",
    imageSrc: "/automation.jpg",
    section: "data-management-services",
  },
  {
    title: "Mobility Services",
    description:
      "Mobile application development and management services for modern businesses",
    imageSrc: "/automation.jpg",
    section: "mobility-services",
  },
  {
    title: "Cloud Services",
    description:
      "Comprehensive cloud solutions to enhance scalability and reduce operational costs",
    imageSrc: "/automation.jpg",
    section: "cloud-services",
  },
  {
    title: "Service Management",
    description:
      "Effective IT service management to optimize your technology investments",
    imageSrc: "/automation.jpg",
    section: "service-management",
  },
  {
    title: "DevOps",
    description:
      "DevOps practices to accelerate development cycles and improve collaboration",
    imageSrc: "/automation.jpg",
    section: "devops",
  },
];

// Info security sections
export const infoSecuritySections = [
  {
    title: "Risk Assessment and VAPT",
    description:
      "Comprehensive security assessment to identify vulnerabilities in your systems",
    imageSrc: "/automation.jpg",
    section: "risk-assessment-and-vapt",
  },
  {
    title: "Design & Consulting",
    description:
      "Advanced threat detection systems to protect your business from cyber attacks",
    imageSrc: "/automation.jpg",
    section: "design-consulting",
  },
  {
    title: "Policy writing",
    description:
      "Solutions to safeguard sensitive data and ensure compliance with regulations",
    imageSrc: "/automation.jpg",
    section: "policy-writing",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Staff training programs to create a security-conscious organization",
    imageSrc: "/automation.jpg",
    section: "regulatory-compliance",
  },
  {
    title: "Zero Trust-OT/IT",
    description:
      "Comprehensive incident response services to mitigate the impact of cyber attacks",
    imageSrc: "/automation.jpg",
    section: "zero-trust-ot-it",
  },
  {
    title: "Network & Communications",
    description:
      "Comprehensive incident response services to mitigate the impact of cyber attacks",
    imageSrc: "/automation.jpg",
    section: "network-communications",
  },
];

// Consulting sections
export const consultingSections = [
  {
    title: "Software Advisory",
    description:
      "Strategic guidance to help businesses achieve their long-term objectives",
    imageSrc: "/automation.jpg",
    section: "software-advisory",
  },
  {
    title: "Program Management",
    description:
      "Streamline business processes to improve efficiency and reduce costs",
    imageSrc: "/automation.jpg",
    section: "program-management",
  },
  {
    title: "Strategic Advisory",
    description:
      "Digital transformation strategies to keep your business competitive",
    imageSrc: "/automation.jpg",
    section: "strategic-advisory",
  },
  {
    title: "Research & Innovation",
    description:
      "Custom software development services tailored to your business needs and requirements",
    imageSrc: "/automation.jpg",
    section: "research-innovation",
  },
];

// Staffing sections
export const staffingSections = [
  {
    title: "IT Professionals",
    description:
      "Access to skilled IT professionals to supplement your existing team",
    imageSrc: "/automation.jpg",
    section: "it-professionals",
  },
  {
    title: "Project Teams",
    description:
      "Dedicated project teams to handle specific initiatives and deliverables",
    imageSrc: "/automation.jpg",
    section: "project-teams",
  },
  {
    title: "Executive Talent",
    description:
      "C-level and senior IT leadership to guide strategic technology decisions",
    imageSrc: "/automation.jpg",
    section: "executive-talent",
  },
  {
    title: "Contract to Hire",
    description:
      "Flexible staffing solutions with the option to convert to permanent roles",
    imageSrc: "/automation.jpg",
    section: "contract-to-hire",
  },
];

// Solution Sections Data
export const businessInfrastructureSections = [
  {
    title: "Enterprise Applications",
    description:
      "Comprehensive ERP solutions for streamlined business operations",
    imageSrc: "/automation.jpg",
    section: "enterprise-applications",
  },
  {
    title: "Infra Solutions",
    description:
      "CRM systems to enhance customer engagement and sales performance",
    imageSrc: "/automation.jpg",
    section: "infra-solutions",
  },
];

export const mobilitySolutions = [
  {
    title: "PTOS(Platform for Transport Operations System)",
    description: "Mobile solutions designed for enterprise business processes",
    imageSrc: "/automation.jpg",
    section: "ptos-platform-for-transport-operations-system",
  },
  {
    title: "CMES(Central Monitoring & Emergency System)",
    description: "Custom mobile applications for iOS and Android platforms",
    imageSrc: "/automation.jpg",
    section: "cmes-central-monitoring-emergency-system",
  },
  {
    title: "PFPS(Public Fleet Management System)",
    description: "Unified applications that work across multiple devices",
    imageSrc: "/automation.jpg",
    section: "pfps-public-fleet-management-system",
  },
];

export const digitalTransformationSolutions = [
  {
    title: "Artificial Intelligence",
    description: "Comprehensive digital transformation roadmaps",
    imageSrc: "/automation.jpg",
    section: "artificial-intelligence",
  },
  {
    title: "BlockChain & Web 3.0",
    description: "Workflow and business process automation solutions",
    imageSrc: "/automation.jpg",
    section: "blockchain-web-3-0",
  },
  {
    title: "Software Platforms",
    description: "Advanced analytics to drive business insights",
    imageSrc: "/automation.jpg",
    section: "software-platforms",
  },
];

export const cybersecuritySolutions = [
  {
    title: "SOAR(Security Operations Automation & Response)",
    description: "Protection for your business network infrastructure",
    imageSrc: "/automation.jpg",
    section: "soar-security-operations-automation-response",
  },
  {
    title: "EDR & XDR",
    description: "Security solutions for web and mobile applications",
    imageSrc: "/automation.jpg",
    section: "edr-xdr",
  },
  {
    title: "SEIM(Security Event & Incident Management)",
    description: "Advanced identity and access management systems",
    imageSrc: "/automation.jpg",
    section: "seim-security-event-incident-management",
  },
  {
    title: "SecOps",
    description: "24/7 monitoring and threat response services",
    imageSrc: "/automation.jpg",
    section: "secops",
  },
];

export const industryIotSolutions = [
  {
    title: "Realtime Data Acquisition",
    description: "Enterprise-grade IoT platform implementation",
    imageSrc: "/automation.jpg",
    section: "realtime-data-acquisition",
  },
  {
    title: "AI ML Edge Automation",
    description: "IoT solutions for manufacturing and industrial processes",
    imageSrc: "/automation.jpg",
    section: "ai-ml-edge-automation",
  },
];

export const smartNationsSolutions = [
  {
    title: "3D Digital Twin",
    description: "Integrated urban technology solutions",
    imageSrc: "/automation.jpg",
    section: "3d-digital-twin",
  },
  {
    title: "City Health",
    description: "Technology solutions for government services",
    imageSrc: "/automation.jpg",
    section: "city-health",
  },
  {
    title: "City Resilence",
    description: "Technology for enhanced public safety and security",
    imageSrc: "/automation.jpg",
    section: "city-resilience",
  },
  {
    title: "Emergency Training",
    description: "Smart transportation and traffic management systems",
    imageSrc: "/automation.jpg",
    section: "emergency-training",
      },
  {
    title: "Urban Planning",
    description: "Smart environmental monitoring and management",
    imageSrc: "/automation.jpg",
    section: "urban-planning",
  },
  {
    title: "Transportation",
    description: "Smart transportation and traffic management systems",
    imageSrc: "/automation.jpg",
    section: "transportation",
  },
  {
    title: "Citywide Integration",
    description: "Citywide integration solutions for government services",
    imageSrc: "/automation.jpg",
    section: "citywide-integration",
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
