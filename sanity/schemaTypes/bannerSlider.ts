// schemas/objects/bannerSlider.ts
import { defineField, defineType, defineArrayMember } from 'sanity'

export const bannerSlider = defineType({
  name: 'bannerSlider',
  title: 'Banner Slider',
  type: 'object',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [defineArrayMember({ type: 'bannerSlide' })],
      validation: Rule => Rule.min(1).required()
    }),
    defineField({
      name: 'autoplaySpeed',
      title: 'Autoplay Speed (ms)',
      type: 'number',
      description: 'Time between slide transitions in milliseconds',
      initialValue: 5000,
      validation: Rule => Rule.min(1000).max(10000)
    })
  ],
  preview: {
    select: {
      slides: 'slides'
    },
    prepare({ slides }) {
      return {
        title: 'Banner Slider',
        subtitle: `${slides?.length || 0} slides`
      }
    }
  }
})