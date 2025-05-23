"use client";

import * as React from "react";
import {
  marketingSolutionCategories,
  getMarketingSolutionSections,
} from "../menu/data/marketing";
import { ServiceCategoryTab } from "./ServiceCategoryTab";
import { ServiceSections } from "./ServiceSections";

export const SolutionsContent: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    React.useState("Digital Marketing");

  // Get active sections based on the selected category
  const activeSections = React.useMemo(() => {
    const sections = getMarketingSolutionSections(activeCategory);

    // Find the active category to get its href
    const activeCategoryData = marketingSolutionCategories.find(
      (category) => category.title === activeCategory
    );

    const categoryHref = activeCategoryData?.href;

    // Add the required href and section properties to each item
    return sections.map((item) => ({
      ...item,
      href: categoryHref,
      section: item.title.toLowerCase().replace(/\s+/g, "-"),
    }));
  }, [activeCategory]);

  return (
    <div className="grid grid-cols-[250px_1fr] gap-6 p-4">
      {/* Left side - Solution categories */}
      <div className="space-y-1">
        {marketingSolutionCategories.map((category) => (
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
      <div className="pl-4 border-l border-pink-100">
        <ServiceSections
          title={activeCategory}
          sections={activeSections}
          activeCategory={activeCategory}
        />
      </div>
    </div>
  );
};
