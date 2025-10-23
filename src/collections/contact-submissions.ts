// import { CollectionConfig } from 'payload'

// export const ContactSubmissions: CollectionConfig = {
//   slug: 'contact-submissions',
//   labels: { singular: 'Contact Submission', plural: 'Contact Submissions' },
//   admin: { useAsTitle: 'fullName' },
//   access: {
//     read: () => true,
//     create: () => true,
//   },
//   fields: [
//     { name: 'fullName', type: 'text', required: true },
//     { name: 'email', type: 'email', required: true },
//     { name: 'phone', type: 'text', required: true },
//     { name: 'message', type: 'textarea', required: true },
//   ],
// }

// export default ContactSubmissions  // <-- Ye add karo






// collections/contact-submissions.ts
import { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: { singular: 'Contact Submission', plural: 'Contact Submissions' },
  admin: { useAsTitle: 'fullName' },
  access: {
    read: () => true, // Admin me show karne ke liye temporarily true kar sakte hain
    create: () => true,
  },
  fields: [
    { name: 'fullName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'message', type: 'textarea', required: true },
  ],
}

export default ContactSubmissions
