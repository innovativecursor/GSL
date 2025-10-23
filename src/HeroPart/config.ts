// import { GlobalConfig } from 'payload'

// export const Hero: GlobalConfig = {
//   slug: 'hero',
//   label: 'Hero Section',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'heading',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'subheading',
//       type: 'text',
//     },
//     {
//       name: 'backgroundImage',
//       type: 'upload',
//       relationTo: 'media',
//       required: true,
//     },
   
//   ],
// }

// export default Hero






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
    {
      name: 'yearsOfExperience',
      label: 'Years of Experience',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'projectsCompleted',
      label: 'Projects Completed',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'clientSatisfaction',
      label: 'Client Satisfaction (%)',
      type: 'number',
      required: true,
      min: 0,
      max: 100,
    },
  ],
}

export default Hero
