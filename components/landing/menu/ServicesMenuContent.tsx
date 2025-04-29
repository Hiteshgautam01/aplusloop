"use client";

import * as React from "react";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { serviceCategories, getServiceSections } from "./data";
import { ServiceCategoryTab } from "./ServiceCategory";
import { ServiceSections } from "./ServiceSections";

// Services tab content
export const ServicesContent = () => {
  const [activeCategory, setActiveCategory] = React.useState(
    "Digital Transformation"
  );

  // Get active sections based on the selected category
  const activeSections = React.useMemo(() => {
    const sections = getServiceSections(activeCategory);

    // Add the required href and section properties to each item
    return sections.map((item) => ({
      ...item,
      href: `/${activeCategory.toLowerCase().replace(/\s+/g, "-")}`,
      section: item.title.toLowerCase().replace(/\s+/g, "-"),
    }));
  }, [activeCategory]);

  return (
    <div className="grid grid-cols-[250px_1fr] gap-6 p-4">
      {/* Left side - Service categories */}
      <div className="space-y-1 w-[260px]">
        {serviceCategories.map((category) => (
          <ServiceCategoryTab
            key={category.title}
            title={category.title}
            icon={category.icon}
            href={category.href}
            active={activeCategory === category.title}
            onMouseEnter={() => setActiveCategory(category.title)}
          />
        ))}
      </div>

      {/* Right side - Service sections */}
      <div className="pl-4 border-l">
        <ServiceSections
          title={activeCategory}
          sections={activeSections}
          activeCategory={activeCategory}
        />
      </div>
    </div>
  );
};
