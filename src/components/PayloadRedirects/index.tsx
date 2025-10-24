import type React from 'react'
import type { Page, Post } from '@/payload-types'

import { getCachedDocument } from '@/utilities/getDocument'
import { getCachedRedirects } from '@/utilities/getRedirects'
import { notFound, redirect } from 'next/navigation'

interface Props {
  disableNotFound?: boolean
  url: string
}

interface RedirectItem {
  from: string
  to?: {
    url?: string
    reference?: {
      relationTo: string
      value: string | { slug: string }
    }
  }
}

/* This component helps us with SSR based dynamic redirects */
// export const PayloadRedirects: React.FC<Props> = async ({ disableNotFound, url }) => {
//   const redirects = await getCachedRedirects()()

//   // const redirectItem = redirects.find((redirect) => redirect.from === url)
  
//   const redirectItem = (redirects as RedirectItem[]).find((redirect) => redirect.from === url)

//   if (redirectItem) {
//     if (redirectItem.to?.url) {
//       redirect(redirectItem.to.url)
//     }

//     let redirectUrl: string

//     if (typeof redirectItem.to?.reference?.value === 'string') {
//       const collection = redirectItem.to?.reference?.relationTo
//       const id = redirectItem.to?.reference?.value

//       const document = (await getCachedDocument(collection, id)()) as Page | Post
//       redirectUrl = `${redirectItem.to?.reference?.relationTo !== 'pages' ? `/${redirectItem.to?.reference?.relationTo}` : ''}/${
//         document?.slug
//       }`
//     } else {
//       redirectUrl = `${redirectItem.to?.reference?.relationTo !== 'pages' ? `/${redirectItem.to?.reference?.relationTo}` : ''}/${
//         typeof redirectItem.to?.reference?.value === 'object'
//           ? redirectItem.to?.reference?.value?.slug
//           : ''
//       }`
//     }

//     if (redirectUrl) redirect(redirectUrl)
//   }

//   if (disableNotFound) return null

//   notFound()
// }








export const PayloadRedirects: React.FC<Props> = async ({ disableNotFound, url }) => {
  const redirectsRaw = await getCachedRedirects()()

  // Filter only objects which have 'from' property
  const redirects: RedirectItem[] = redirectsRaw.filter(
    (r): r is RedirectItem => typeof (r as any).from === 'string'
  )

  const redirectItem = redirects.find((redirect) => redirect.from === url)

  if (redirectItem) {
    if (redirectItem.to?.url) {
      redirect(redirectItem.to.url)
    } else if (redirectItem.to?.reference) {
      const { relationTo, value } = redirectItem.to.reference
      let slug = typeof value === 'string' ? value : value.slug
      const redirectUrl = `${relationTo !== 'pages' ? `/${relationTo}` : ''}/${slug}`
      redirect(redirectUrl)
    }
  }

  if (!disableNotFound) notFound()
}
