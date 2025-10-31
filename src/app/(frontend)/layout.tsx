import type { Metadata } from 'next'
import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { HeroProvider } from './contexts/HeroContext'
import { TestimonialProvider } from './contexts/TestimonialsContext'
import { ProjectsProvider } from './contexts/ProjectsContext'
import RouteLoader from './loader/RouteLoader'
import ScrollToTop from './components/scrolltotop/ScrollToTop'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <>
          <RouteLoader />
          <ScrollToTop />
          <Providers>
            <ProjectsProvider>
              <TestimonialProvider>
                <HeroProvider>
                  <Toaster position="top-right" />
                  <Header />
                  {children}
                  <Footer />
                </HeroProvider>
              </TestimonialProvider>
            </ProjectsProvider>
          </Providers>
        </>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),

  title: {
    default: 'GSL Construction, Design & Consultancy',
    template: '%s | GSL CDC',
  },
  description:
    'GSL Construction, Design & Consultancy (GSL CDC) provides end-to-end services in architecture, construction, and engineering. We deliver innovative, sustainable, and client-focused solutions across residential, commercial, and structural projects.',

  keywords: [
    'GSL Construction',
    'GSL CDC',
    'Design and Consultancy',
    'Architectural Services',
    'Structural Engineering',
    'Construction Company Philippines',
    'Billboard Steel Frames',
    'Commercial Construction',
    'Residential Design',
  ],

  openGraph: {
    title: 'GSL Construction, Design & Consultancy',
    description:
      'Explore GSL CDC — a trusted construction and design firm offering sustainable and professional solutions for residential, commercial, and structural projects.',
    url: getServerSideURL(),
    siteName: 'GSL CDC',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GSL Construction Design and Consultancy',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GSL Construction, Design & Consultancy',
    description:
      'Trusted experts in design, construction, and engineering solutions across the Philippines.',
    images: ['/og-image.jpg'],
    creator: '@gslcdc',
  },

  authors: [{ name: 'GSL Construction, Design & Consultancy' }],
  creator: 'GSL CDC Team',

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: getServerSideURL(),
  },
}
