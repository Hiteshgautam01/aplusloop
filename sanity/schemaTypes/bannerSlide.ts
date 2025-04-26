// schemas/objects/bannerSlide.ts
import { defineField, defineType } from 'sanity'

export const bannerSlide = defineType({
  name: 'bannerSlide',
  title: 'Banner Slide',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Background image for this slide (optional)'
    }),
    defineField({
      name: 'cta',
      title: 'Primary CTA Text',
      type: 'string',
      description: 'Text for the primary call-to-action button'
    }),
    defineField({
      name: 'ctaLink',
      title: 'Primary CTA Link',
      type: 'string',
      description: 'URL for the primary call-to-action button'
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA Text',
      type: 'string',
      description: 'Text for the secondary call-to-action button'
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
      description: 'URL for the secondary call-to-action button'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Slide',
        subtitle: subtitle,
        media: media
      }
    }
  }
})