import { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    // {
    //   name: 'ctaText',
    //   type: 'text',
    // },
    // {
    //   name: 'ctaLink',
    //   type: 'text',
    // },
  ],
}

export default Hero
