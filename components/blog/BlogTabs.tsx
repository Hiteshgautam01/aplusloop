import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { getAllCategories } from "@/sanity/queries/blog";

// Default categories if none are provided from Sanity
export const blogCategories = [
  { id: "all", label: "All Blogs" },
  { id: "case-studies", label: "Case Studies" },
  { id: "event-reviews", label: "Event Reviews" },
  { id: "awards", label: "Awards" },
  { id: "product-news", label: "Product News" },
];

interface BlogTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categoriesData?: {
    categories: Array<{
      id: string;
      title: string;
    }>;
    showAllOption?: boolean;
    allCategoryLabel: string;
  };

  setActiveCategoryTitle: (title: string) => void;
}

export const BlogTabs = ({
  activeCategory,
  setActiveCategory,
  categoriesData,
  setActiveCategoryTitle,
}: BlogTabsProps) => {
  const [fetchedCategories, setFetchedCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  console.log("activeCategory", categoriesData);
  useEffect(() => {
    async function fetchCategories() {
      try {
        const fetchedCats = await getAllCategories();
        setFetchedCategories(fetchedCats);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    }

    // Only fetch categories if they're not provided by the parent
    if (!categoriesData) {
      fetchCategories();
    } else {
      setLoading(false);
    }
  }, [categoriesData]);

  // Use categories from Sanity if available, otherwise fall back to defaults
  const categories = useMemo(() => {
    // If we have categoriesData from the parent, use that configuration
    if (categoriesData) {
      if (categoriesData.showAllOption) {
        return [
          { id: "all", label: categoriesData.allCategoryLabel || "All Blogs" },
          ...categoriesData.categories.map((cat) => ({
            id: cat.id,
            label: cat.title,
          })),
        ];
      }

      return categoriesData.categories.map((cat) => ({
        id: cat.id,
        label: cat.title,
      }));
    }

    // If we have fetched categories from the database, use those
    if (fetchedCategories.length > 0) {
      return [
        { id: "all", label: "All Blogs" },
        ...fetchedCategories.map((cat) => ({
          id: cat.id,
          label: cat.title,
        })),
      ];
    }

    // Fall back to defaults if nothing else is available
    return blogCategories;
  }, [categoriesData, fetchedCategories]);

  if (loading) {
    return <div className="mb-3 h-10 bg-muted animate-pulse rounded-md"></div>;
  }

  return (
    <div className="mb-3">
      <Tabs
        defaultValue={activeCategory}
        value={activeCategory}
        className="w-full"
        onValueChange={(value) => {
          setActiveCategory(value);
          setActiveCategoryTitle(
            categories.find((cat) => cat.id === value)?.label || "All Blogs"
          );
        }}
      >
        <TabsList className="w-full sm:w-auto flex flex-wrap bg-transparent">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="text-sm md:text-base relative data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground data-[state=active]:font-medium transition-all duration-200"
            >
              {category.label}
              {category.id === activeCategory && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-800"
                  layoutId="active-tab-underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
