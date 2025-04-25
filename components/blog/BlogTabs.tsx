import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

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
}

export const BlogTabs = ({
  activeCategory,
  setActiveCategory,
}: BlogTabsProps) => {
  return (
    <div className="mb-3">
      <Tabs
        defaultValue={activeCategory}
        value={activeCategory}
        className="w-full"
        onValueChange={setActiveCategory}
      >
        <TabsList className="w-full sm:w-auto flex flex-wrap bg-transparent">
          {blogCategories.map((category) => (
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
