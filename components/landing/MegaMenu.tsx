"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  ChevronRight,
  Server,
  Code,
  Database,
  Cloud,
  Layers,
  BarChart,
  PieChart,
  TrendingUp,
  Users,
  Building,
  BadgeCheck,
  PenTool,
  LineChart,
  LucideIcon,
} from "lucide-react";

// Type definitions
interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  description: string;
  icon?: LucideIcon;
  href: string;
}

interface FeaturedContentProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

// Shared ListItem component for both menus
const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, description, icon: Icon, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground group",
              className
            )}
            {...props}
          >
            <div className="flex items-center">
              {Icon && (
                <Icon className="h-4 w-4 mr-2 text-primary group-hover:text-primary" />
              )}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1 pl-6">
              {description}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

// Featured content component with gradient background
const FeaturedContent: React.FC<FeaturedContentProps> = ({
  title,
  description,
  href,
  icon: Icon,
}) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
        href={href}
      >
        <Icon className="h-6 w-6 text-primary" />
        <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
        <p className="text-sm leading-tight text-muted-foreground">
          {description}
        </p>
      </Link>
    </NavigationMenuLink>
  );
};

// Technology dropdown content
export function TechnologyMenuContent() {
  return (
    <NavigationMenuContent className="bg-background/90 backdrop-blur-lg border border-muted/20 shadow-lg">
      <div className="grid w-[600px] grid-cols-[1fr_2fr] gap-3 p-4">
        <div className="col-span-1 row-span-3">
          <FeaturedContent
            title="Enterprise Solutions"
            description="Our cutting-edge technology solutions for enterprise-level businesses."
            href="/technology/enterprise"
            icon={Server}
          />
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 text-sm font-medium leading-none">
            Core Technologies
          </h4>
          <ul className="grid gap-3 md:grid-cols-2">
            <ListItem
              href="/technology/cloud"
              title="Cloud Services"
              description="Scalable, secure cloud infrastructure solutions"
              icon={Cloud}
            />
            <ListItem
              href="/technology/data"
              title="Data Engineering"
              description="Big data processing and analytics pipelines"
              icon={Database}
            />
            <ListItem
              href="/technology/development"
              title="Software Development"
              description="Custom application development services"
              icon={Code}
            />
            <ListItem
              href="/technology/architecture"
              title="System Architecture"
              description="Scalable system design and implementation"
              icon={Layers}
            />
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 text-sm font-medium leading-none">Resources</h4>
          <ul className="grid gap-3">
            <ListItem
              href="/technology/case-studies"
              title="Case Studies"
              description="Real-world technology implementation examples"
              icon={ChevronRight}
            />
            <ListItem
              href="/technology/whitepapers"
              title="Whitepapers"
              description="Technical research and thought leadership"
              icon={ChevronRight}
            />
          </ul>
        </div>
      </div>
    </NavigationMenuContent>
  );
}

// Business Consulting dropdown content
export function BusinessConsultingMenuContent() {
  return (
    <NavigationMenuContent className="bg-background/90 backdrop-blur-lg border border-muted/20 shadow-lg">
      <div className="grid w-[600px] grid-cols-[1fr_2fr] gap-3 p-4">
        <div className="col-span-1 row-span-3">
          <FeaturedContent
            title="Strategic Consulting"
            description="Transform your business with our strategic consulting services."
            href="/services/strategic-consulting"
            icon={TrendingUp}
          />
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 text-sm font-medium leading-none">
            Consulting Services
          </h4>
          <ul className="grid gap-3 md:grid-cols-2">
            <ListItem
              href="/services/strategy"
              title="Business Strategy"
              description="Long-term planning and competitive positioning"
              icon={PenTool}
            />
            <ListItem
              href="/services/operations"
              title="Operations"
              description="Process optimization and efficiency improvements"
              icon={Building}
            />
            <ListItem
              href="/services/digital"
              title="Digital Transformation"
              description="Technology-driven business model innovation"
              icon={BadgeCheck}
            />
            <ListItem
              href="/services/change"
              title="Change Management"
              description="Facilitate organizational change and adoption"
              icon={Users}
            />
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 text-sm font-medium leading-none">
            Analysis Services
          </h4>
          <ul className="grid gap-3">
            <ListItem
              href="/services/market-analysis"
              title="Market Analysis"
              description="Industry trends and competitive landscape research"
              icon={BarChart}
            />
            <ListItem
              href="/services/financial-modeling"
              title="Financial Modeling"
              description="Predictive financial scenarios and planning"
              icon={PieChart}
            />
            <ListItem
              href="/services/performance"
              title="Performance Metrics"
              description="KPI development and performance tracking"
              icon={LineChart}
            />
          </ul>
        </div>
      </div>
    </NavigationMenuContent>
  );
}
