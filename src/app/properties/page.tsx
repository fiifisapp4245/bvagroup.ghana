import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BVA Properties | Real Estate Development in Ghana',
  description:
    'BVA Properties develops premium residential, commercial, and mixed-use real estate across Ghana. Current projects include Gucci House, Better Court, and New Palm View — built for lasting value.',
  openGraph: {
    title: 'BVA Properties | Real Estate Development in Ghana',
    description:
      'Premium residential, commercial, and mixed-use property development across Ghana. Projects include Gucci House (Eastern Region), Better Court, and New Palm View.',
    url: 'https://www.bvagroupgh.com/properties',
    images: [
      {
        url: '/properties/IMG-20250321-WA0015.jpg',
        width: 1200,
        height: 630,
        alt: 'BVA Properties — Built for Ghana. Built to last.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BVA Properties | Real Estate Development in Ghana',
    description:
      'Premium residential, commercial, and mixed-use property development across Ghana — built for lasting value.',
    images: ['/properties/IMG-20250321-WA0015.jpg'],
  },
  alternates: {
    canonical: 'https://www.bvagroupgh.com/properties',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bvagroupgh.com' },
      { '@type': 'ListItem', position: 2, name: 'Properties', item: 'https://www.bvagroupgh.com/properties' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'BVA Properties',
    description:
      'BVA Properties develops premium residential, commercial, and mixed-use real estate across Ghana — built for lasting value.',
    url: 'https://www.bvagroupgh.com/properties',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Accra',
      addressCountry: 'GH',
    },
    areaServed: { '@type': 'Country', name: 'Ghana' },
    parentOrganization: {
      '@type': 'Organization',
      name: 'BVA Group Ghana',
      url: 'https://www.bvagroupgh.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Property Development Types',
      itemListElement: [
        { '@type': 'Offer', name: 'Residential Development' },
        { '@type': 'Offer', name: 'Commercial & Retail Development' },
        { '@type': 'Offer', name: 'Industrial & Administration Development' },
      ],
    },
  },
]

const projects = [
  {
    name: 'Gucci House',
    type: 'Residential',
    region: 'Eastern Region, Ghana',
    status: 'Sold' as const,
    image: '/properties/IMG-20250320-WA0005.jpg',
    rotation: '-2.5deg',
  },
  {
    name: 'Better Court',
    type: 'Commercial & Retail',
    region: 'Ghana',
    status: 'Ongoing' as const,
    image: '/properties/IMG-20250321-WA0011.jpg',
    rotation: '1.8deg',
  },
  {
    name: 'New Palm View',
    type: 'Residential',
    region: 'Ghana',
    status: 'Coming Soon' as const,
    image: '/properties/IMG-20250321-WA0018.jpg',
    rotation: '-1.2deg',
  },
]

const statusDot: Record<'Sold' | 'Ongoing' | 'Coming Soon', string> = {
  Sold: 'bg-gray-400',
  Ongoing: 'bg-[#0a0a0a]',
  'Coming Soon': 'bg-amber-400',
}

const propertyTypes = [
  {
    label: 'Residential',
    description: 'Premium homes built for lasting value and community.',
  },
  {
    label: 'Commercial & Retail',
    description: 'Spaces that serve growing Ghanaian businesses.',
  },
  {
    label: 'Industrial & Administration',
    description: 'Purpose-built facilities for operational excellence.',
  },
]

export default function PropertiesPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[80svh] flex flex-col">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/properties/IMG-20250321-WA0015.jpg"
            alt="BVA Properties development"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 22%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.55) 30%, transparent 60%)',
            }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-end pb-16 lg:pb-24 pt-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <p className="text-white/45 text-[11px] uppercase tracking-[0.28em] mb-6 font-medium">
              BVA Properties · Ghana
            </p>
            <h1
              className="font-heading font-bold text-white leading-[1.08] mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)' }}
            >
              Built for Ghana.<br />Built to last.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-[520px]">
              Residential, commercial, and mixed-use developments across Ghana — designed with
              integrity and delivered with conviction.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. PROJECTS ─────────────────────────────────────────── */}
      <section className="bg-[#f0ede8] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[#999] text-[10px] uppercase tracking-[0.25em] mb-4 font-medium">
                Our Projects
              </p>
              <h2
                className="font-heading font-bold text-[#0f0f0f] leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Every project, a commitment.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:flex lg:items-end">
              <p className="text-[#777] text-base leading-relaxed max-w-md">
                From completed developments to projects in progress — here is the full picture of
                where BVA Properties is building Ghana&apos;s future.
              </p>
            </div>
          </div>

          {/* Big polaroid-style cards */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-6 lg:gap-8 py-6">
            {projects.map(({ name, type, region, status, image, rotation }) => (
              <div
                key={name}
                className="group relative shrink-0 w-[320px] md:w-[calc(33.333%-1.5rem)] lg:w-[380px]
                           [transform:rotate(var(--card-rotate))]
                           hover:[transform:rotate(0deg)_translateY(-12px)]
                           hover:z-10
                           transition-all duration-300 ease-out
                           cursor-pointer"
                style={{ '--card-rotate': rotation } as React.CSSProperties}
              >
                {/* Card — full-bleed image with gradient */}
                <div className="relative h-[480px] lg:h-[520px] rounded-[1.75rem] overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 40%, transparent 68%)',
                    }}
                  />

                  {/* Details — pinned to bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-7">
                    {/* Type eyebrow */}
                    <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] mb-2 font-medium">
                      {type}
                    </p>

                    {/* Name */}
                    <h3
                      className="font-heading font-bold text-white leading-tight mb-3"
                      style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
                    >
                      {name}
                    </h3>

                    {/* Region · Status */}
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${statusDot[status]}`} />
                      <span className="text-white/60 text-xs">
                        {region} · {status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DEVELOP ──────────────────────────────────── */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[#999] text-[10px] uppercase tracking-[0.25em] mb-14 font-medium">
            Development Types
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {propertyTypes.map(({ label, description }, i) => (
              <div key={label} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="font-heading font-bold text-gray-100 text-5xl leading-none mb-8 select-none">
                  0{i + 1}
                </div>
                <h3 className="font-heading font-bold text-[#0f0f0f] text-lg mb-3">{label}</h3>
                <p className="text-[#777] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CONTACT BAND ─────────────────────────────────────── */}
      <section className="bg-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2
                className="font-heading font-bold text-white leading-tight mb-2"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)' }}
              >
                Interested in a project?
              </h2>
              <p className="text-white/32 text-sm">
                Get in touch — we respond to every inquiry within 24 hours.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0a0a0a] font-heading font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
              >
                Get in Touch <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
