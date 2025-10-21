// collections/Projects.ts
import { CollectionConfig } from 'payload/cms';

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
    create: ({ req }) => !!req.user, // only logged-in users can create
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
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
