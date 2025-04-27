import { defineField, defineType } from "sanity";

export const blogCategories = defineType({
  name: "blogCategories",
  title: "Blog Categories",
  type: "object",
  fields: [
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Category ID",
              type: "string",
              description:
                "Unique identifier for the category (use kebab-case)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Display Label",
              type: "string",
              description: "User-friendly name for the category",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "isDefault",
              title: "Is Default",
              type: "boolean",
              description:
                "Set to true to make this the default selected category",
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "id",
            },
          },
        },
      ],
      description: "List of blog categories for filtering",
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
  ],
  preview: {
    prepare() {
      return {
        title: "Blog Categories",
      };
    },
  },
});
