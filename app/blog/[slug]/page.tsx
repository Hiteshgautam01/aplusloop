import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { urlForImage } from "@/sanity/lib/image";
import  PageProps  from "next";
import {
  getPost,
  getRelatedPosts,
  getBlogPostPageConfig,
  getAllPostSlugs,
} from "@/sanity/queries/blog";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  try {
    const posts = await getAllPostSlugs();
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static paths:", error);
    return [];
  }
}

export default async function BlogPostPage( { params }: { params: Params }) {
  try {
    // Ensure we have a slug before proceeding
    const { slug } = await params;
    if (!slug) {
      return notFound();
    }

    const post = await getPost(slug);

    if (!post) {
      return notFound();
    }

    const pageConfig = await getBlogPostPageConfig();
    const relatedPosts = pageConfig?.showRelatedPosts
      ? await getRelatedPosts(slug, post._id)
      : [];

    return (
      <main className="mt-16">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category: any) => (
                  <span
                    key={category.id}
                    className="px-3 py-1 bg-muted rounded-full text-sm"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {pageConfig?.showPublishDate && post.publishedAt && (
              <p className="text-muted-foreground mb-4">
                {format(new Date(post.publishedAt), "MMMM d, yyyy")}
              </p>
            )}

            {post.mainImage && (
              <div className="relative w-full h-[400px] mb-8">
                <Image
                  src={urlForImage(post.mainImage)}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            )}

            {pageConfig?.showAuthor && post.author && (
              <div className="flex items-center mb-8 p-4 bg-muted rounded-lg">
                {post.author.image && (
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={urlForImage(post.author.image)}
                      alt={post.author.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                )}
                <div>
                  <p className="font-medium">By {post.author.name}</p>
                  {post.author.bio && (
                    <p className="text-sm text-muted-foreground">
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="prose prose-lg max-w-none">
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <p>No content available for this post.</p>
            )}
          </div>

          {pageConfig?.socialSharingEnabled && (
            <div className="border-t border-border mt-12 pt-6">
              <h3 className="text-xl font-bold mb-4">Share this post</h3>
              <div className="flex gap-4">
                {/* Social sharing buttons would go here */}
                <button className="p-2 bg-muted rounded-md">Twitter</button>
                <button className="p-2 bg-muted rounded-md">Facebook</button>
                <button className="p-2 bg-muted rounded-md">LinkedIn</button>
              </div>
            </div>
          )}
        </article>

        {pageConfig?.showRelatedPosts && relatedPosts.length > 0 && (
          <div className="bg-muted py-12">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-2xl font-bold mb-8">
                {pageConfig.relatedPostsTitle || "Related Posts"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost: any) => (
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    key={relatedPost._id}
                  >
                    <div className="bg-background border border-border rounded-lg overflow-hidden h-full hover:shadow-md transition-all hover:-translate-y-1">
                      {relatedPost.mainImage && (
                        <div className="relative w-full h-48">
                          <Image
                            src={urlForImage(relatedPost.mainImage)}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    return notFound();
  }
}
