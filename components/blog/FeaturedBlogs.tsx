import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Mock data for featured blogs
const featuredBlogs = [
  {
    id: 1,
    title: "Top 5 Industry Trends of 2023",
    image: "/blog.png",
    slug: "top-industry-trends-2023",
    excerpt:
      "Discover the latest trends that are shaping industries and how your business can stay ahead of the competition.",
  },
  {
    id: 2,
    title: "Client Success: Global Expansion Case Study",
    image: "/blog.png",
    slug: "client-success-global-expansion",
    excerpt:
      "Learn how we helped our client expand their operations internationally and achieve remarkable growth in new markets.",
  },
  {
    id: 3,
    title: "How We Improved Conversion Rates by 300%",
    image: "/blog.png",
    slug: "improved-conversion-rates",
    excerpt:
      "A detailed look at the strategies we implemented to dramatically increase conversion rates for our e-commerce client.",
  },
];

export const FeaturedBlogs = () => {
  const [expandedBlog, setExpandedBlog] = useState(0);

  return (
    <div className="border border-border rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Featured Blogs</h2>
      <div className="space-y-4">
        {featuredBlogs.map((blog, index) => (
          <div
            key={blog.id}
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              height: expandedBlog === index ? "320px" : "80px",
            }}
            onMouseEnter={() => setExpandedBlog(index)}
          >
            <Link href={`/blog/${blog.slug}`} className="block h-full">
              <div className="h-full flex flex-col border border-transparent hover:border-purple-700 rounded-lg p-3 transition-colors">
                <div
                  className="relative w-full transition-all duration-500"
                  style={{
                    height: expandedBlog === index ? "180px" : "0",
                    opacity: expandedBlog === index ? 1 : 0,
                    marginBottom: expandedBlog === index ? "0.75rem" : "0",
                  }}
                >
                  {expandedBlog === index && (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  )}
                </div>
                <h3 className="text-md font-medium line-clamp-2 mb-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
