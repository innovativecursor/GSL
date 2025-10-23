import { GlobalConfig } from 'payload'

export const SocialLinks: GlobalConfig = {
  slug: 'social-links',
  label: 'Social Media Links',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'facebook',
      label: 'Facebook URL',
      type: 'text',
    },
    {
      name: 'twitter',
      label: 'Twitter URL',
      type: 'text',
    },
    {
      name: 'instagram',
      label: 'Instagram URL',
      type: 'text',
    },
    {
      name: 'linkedin',
      label: 'LinkedIn URL',
      type: 'text',
    },
    {
      name: 'youtube',
      label: 'YouTube URL',
      type: 'text',
    },
  ],
}

export default SocialLinks
