// collections/Projects.ts
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
    read: () => true, // anyone can read projects
    create: (args: any) => !!args?.req?.user, // only logged-in users can create
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
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', 
      required: true,
    },
  ],
};
