"use client";

import * as React from "react";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { FeaturedContent } from "./FeaturedContent";
import { ListItem } from "./ListItem";
import {
  PenTool,
  Building,
  BadgeCheck,
  Users,
  BarChart,
  PieChart,
  LineChart,
  TrendingUp,
} from "lucide-react";

export function BusinessConsultingMenuContent( {closeMenu}: {closeMenu?: () => void}) {
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
