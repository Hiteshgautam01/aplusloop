import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="mb-8">
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
              className="text-sm md:text-base relative data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground data-[state=active]:font-medium"
              style={
                {
                  "--tab-underline-color": "#5b21b6", // dark purple
                } as React.CSSProperties
              }
            >
              {category.label}
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-[--tab-underline-color] transition-transform duration-200 data-[state=active]:scale-x-100"
                data-state={
                  category.id === activeCategory ? "active" : "inactive"
                }
              />
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
