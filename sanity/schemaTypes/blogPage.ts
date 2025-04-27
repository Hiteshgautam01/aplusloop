import { defineField, defineType, defineArrayMember } from "sanity";

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
      name: "categories",
      title: "Blog Categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
      description: "Categories to display on the blog page",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "showAllOption",
      title: 'Show "All" Option',
      type: "boolean",
      description: 'Include an "All" option to show all blog posts',
      initialValue: true,
    }),
    defineField({
      name: "allCategoryLabel",
      title: '"All" Category Label',
      type: "string",
      description: 'Label for the "All" category option',
      initialValue: "All Blogs",
      hidden: ({ document }) => !document?.showAllOption,
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
