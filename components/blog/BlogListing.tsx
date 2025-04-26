import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import { getPosts } from "@/sanity/queries/blog";

// Client-side Sanity client with fixed API version
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2023-05-03", // Using a fixed valid date format
  useCdn: true,
});

interface Post {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  mainImage: any;
}

interface BlogCardProps {
  blog: Post;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="flex flex-col md:flex-row gap-6 p-6 border border-border rounded-lg mb-3 transition-all duration-300 hover:shadow-md hover:border-purple-700 hover:-translate-y-1">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
        </div>
        <div className="w-full md:w-1/3 relative h-40 md:h-auto md:max-h-32">
          {blog.mainImage && (
            <Image
              src={urlForImage(blog.mainImage)}
              alt={blog.title}
              fill
              className="object-cover rounded-md"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

interface BlogListingProps {
  activeCategory: string;
}

export const BlogListing = ({ activeCategory }: BlogListingProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        // Using the imported query function
        const fetchedPosts = await getPosts(
          activeCategory !== "all" ? activeCategory : undefined
        );
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [activeCategory]);

  if (loading) {
    return (
      <div className="my-8 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.length > 0 ? (
        posts.map((post) => <BlogCard key={post._id} blog={post} />)
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
