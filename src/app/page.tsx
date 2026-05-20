import type { Metadata } from 'next'
import { HomeClient } from './home-client'

export const metadata: Metadata = {
  title: 'BVA Group Ghana — Real Estate Development & Mineral Exploration',
  description:
    'BVA Group Ghana develops premium residential, commercial, and mixed-use properties across Ghana and operates responsible mineral exploration at the Kutukrom Gold Project in the Western Region.',
  openGraph: {
    title: 'BVA Group Ghana — Real Estate Development & Mineral Exploration',
    description:
      'Premium property development and responsible mineral exploration in Ghana. Building lasting value with integrity across two verticals: BVA Properties and BVA Resources.',
    url: 'https://www.bvagroupgh.com',
    images: [
      {
        url: '/webaliser-_TPTXZd9mOo-unsplash.jpg',
        width: 1200,
        height: 630,
        alt: "BVA Group Ghana — Developing Ghana's Future",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BVA Group Ghana — Real Estate & Mineral Exploration',
    description:
      'Premium property development and responsible mineral exploration in Ghana, built with integrity.',
    images: ['/webaliser-_TPTXZd9mOo-unsplash.jpg'],
  },
  alternates: {
    canonical: 'https://www.bvagroupgh.com',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BVA Group Ghana',
  url: 'https://www.bvagroupgh.com',
  description:
    'BVA Group Ghana — real estate development and mineral exploration, built with integrity.',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <HomeClient />
    </>
  )
}
