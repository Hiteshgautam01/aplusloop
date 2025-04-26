import { defineField, defineType } from "sanity";

export const blogPage = defineType({
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Title for SEO and browser tabs",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly name",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description: "Description for search engines",
      validation: (Rule) =>
        Rule.max(160).warning("Should be under 160 characters"),
    }),
    defineField({
      name: "blogBanner",
      title: "Blog Banner",
      type: "blogBanner",
      description: "Banner section for the blog page",
    }),
    defineField({
      name: "blogCategories",
      title: "Blog Categories",
      type: "blogCategories",
      description: "Categories for filtering blog posts",
    }),
    defineField({
      name: "featuredBlogs",
      title: "Featured Blogs",
      type: "featuredBlogs",
      description: "Section for highlighted blog posts",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Blog Page",
      };
    },
  },
});
