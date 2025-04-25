import Image from "next/image";
import Link from "next/link";

// Mock data for blogs
export const blogs = [
  {
    id: 1,
    title: "How to Optimize Your Business with AI Solutions",
    excerpt:
      "Discover the latest AI trends that are transforming businesses across industries. Learn how implementing these solutions can boost your productivity and streamline operations...",
    image: "/blog.png",
    category: "case-studies",
    slug: "optimize-business-ai-solutions",
  },
  {
    id: 2,
    title: "Annual Tech Conference Highlights",
    excerpt:
      "Our team attended the biggest tech conference of the year. Here are the key takeaways and innovations that stood out among the presentations and exhibitions...",
    image: "/blog.png",
    category: "event-reviews",
    slug: "annual-tech-conference-highlights",
  },
  {
    id: 3,
    title: "Our Product Wins Innovation Award",
    excerpt:
      "We're proud to announce that our flagship product has been recognized with the prestigious Innovation Award. This recognition highlights our commitment to excellence...",
    image: "/blog.png",
    category: "awards",
    slug: "product-wins-innovation-award",
  },
  {
    id: 4,
    title: "New Features Released for Our Platform",
    excerpt:
      "We've just launched a set of powerful new features for our platform. These updates are designed to enhance user experience and provide more advanced functionality...",
    image: "/blog.png",
    category: "product-news",
    slug: "new-features-released",
  },
];

const BlogCard = ({ blog }: { blog: (typeof blogs)[0] }) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="flex flex-col md:flex-row gap-6 p-6 border border-border rounded-lg mb-6 transition-all duration-300 hover:shadow-md hover:border-purple-700 hover:-translate-y-1">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
        </div>
        <div className="w-full md:w-1/3 relative h-40 md:h-auto md:max-h-32">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </Link>
  );
};

interface BlogListingProps {
  activeCategory: string;
}

export const BlogListing = ({ activeCategory }: BlogListingProps) => {
  const filteredBlogs =
    activeCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <div className="space-y-6">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            No blogs found in this category.
          </p>
        </div>
      )}
    </div>
  );
};
