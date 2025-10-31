import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: (args: any) => !!args?.req?.user,
    update: (args: any) => !!args?.req?.user,
    delete: (args: any) => !!args?.req?.user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Residential', value: 'Residential' },
        { label: 'Commercial', value: 'Commercial' },
      ],
      defaultValue: 'Residential',
    },
    {
      name: 'projectType',
      type: 'text',
      label: 'Project Type',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'keyHighlights',
      type: 'array',
      label: 'Key Highlights',
      labels: {
        singular: 'Highlight',
        plural: 'Highlights',
      },
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'point',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      label: 'Project Images',
      maxRows: 5,
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
