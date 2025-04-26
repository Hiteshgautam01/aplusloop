import { defineField, defineType } from "sanity";

export const featuredBlogs = defineType({
  name: "featuredBlogs",
  title: "Featured Blogs",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Title for the featured blogs section",
      initialValue: "Featured Blogs",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredPosts",
      title: "Featured Posts",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
          description: "Select a blog post to feature",
          options: {
            filter: "featured == true",
          },
        },
      ],
      description: "Select blog posts to be featured in this section",
      validation: (Rule) =>
        Rule.required()
          .max(5)
          .warning("We recommend featuring 3-5 posts for optimal display"),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Featured Blogs",
      };
    },
  },
});
