"use client";

import * as React from "react";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { solutionCategories, getSolutionSections } from "./data";
import { ServiceCategoryTab } from "./ServiceCategory";
import { ServiceSections } from "./ServiceSections";

// Solutions tab content
export const SolutionsContent = () => {
  const [activeCategory, setActiveCategory] = React.useState(
    "Business & Infrastructure"
  );

  // Get active sections based on the selected category
  const activeSections = React.useMemo(() => {
    const sections = getSolutionSections(activeCategory);

    // Add the required href and section properties to each item
    return sections.map((item) => ({
      ...item,
      href: `/solutions/${activeCategory.toLowerCase().replace(/\s+/g, "-")}`,
      section: item.title.toLowerCase().replace(/\s+/g, "-"),
    }));
  }, [activeCategory]);

  return (
    <div className="grid grid-cols-[250px_1fr] gap-6 p-4">
      {/* Left side - Solution categories */}
      <div className="space-y-1">
        {solutionCategories.map((category) => (
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

      {/* Right side - Solution sections */}
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
