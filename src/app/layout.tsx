import type { Metadata } from 'next'
import { IBM_Plex_Sans, Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { PostHogPageView } from '@/components/posthog-page-view'

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bvagroupgh.com'),
  title: {
    default: 'BVA Group Ghana | Real Estate & Mineral Resources',
    template: '%s | BVA Group Ghana',
  },
  description:
    'BVA Group Ghana is a multi-vertical business group operating in real estate development and mineral exploration. Building with integrity across Properties and Resources.',
  keywords: [
    'BVA Group Ghana',
    'real estate Ghana',
    'property development Ghana',
    'mineral exploration Ghana',
    'gold mining Ghana',
    'Accra real estate',
    'Ghana property investment',
    'Kutukrom Gold Project',
    'residential development Ghana',
    'commercial property Ghana',
  ],
  authors: [{ name: 'BVA Group Ghana', url: 'https://www.bvagroupgh.com' }],
  creator: 'BVA Group Ghana',
  publisher: 'BVA Group Ghana',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'BVA Group Ghana',
    type: 'website',
    locale: 'en_GH',
    url: 'https://www.bvagroupgh.com',
    title: 'BVA Group Ghana | Real Estate & Mineral Resources',
    description:
      'BVA Group Ghana — premium property development and responsible mineral exploration, built with integrity.',
    images: [
      {
        url: '/webaliser-_TPTXZd9mOo-unsplash.jpg',
        width: 1200,
        height: 630,
        alt: 'BVA Group Ghana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BVA Group Ghana | Real Estate & Mineral Resources',
    description:
      'BVA Group Ghana — premium property development and responsible mineral exploration, built with integrity.',
    images: ['/webaliser-_TPTXZd9mOo-unsplash.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1a1a1a]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BVA Group Ghana',
              url: 'https://www.bvagroupgh.com',
              logo: 'https://www.bvagroupgh.com/logo.png',
              email: 'info@bvagroupgh.com',
              telephone: '+233000000000',
              foundingDate: '2018',
              description:
                'BVA Group Ghana is a multi-vertical business group operating in real estate development and mineral exploration across Ghana.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Accra',
                addressCountry: 'GH',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Ghana',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'BVA Group Services',
                itemListElement: [
                  { '@type': 'OfferCatalog', name: 'Real Estate Development' },
                  { '@type': 'OfferCatalog', name: 'Mineral Exploration & Mining' },
                ],
              },
            }),
          }}
        />
        <Suspense fallback={null}>
          <PostHogPageView />
        </Suspense>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
