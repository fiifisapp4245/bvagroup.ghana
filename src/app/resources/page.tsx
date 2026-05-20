import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { TrackedLink } from '@/components/tracked-link'
import { ResourcesPartnership } from './resources-partnership'

export const metadata: Metadata = {
  title: 'BVA Resources | Mineral Exploration & Mining Operations Ghana',
  description:
    "BVA Resources operates responsible gold mineral exploration and mining at the Kutukrom Gold Project in Ghana's Western Region. ESG-driven operations with community partnership at the core.",
  openGraph: {
    title: 'BVA Resources | Mineral Exploration & Mining in Ghana',
    description:
      "Responsible gold exploration and mining at the Kutukrom Gold Project, Western Region Ghana. ESG-governed operations with transparent community and investor reporting.",
    url: 'https://www.bvagroupgh.com/resources',
    images: [
      {
        url: '/resources/IMG-20250324-WA0026.jpg',
        width: 1200,
        height: 630,
        alt: 'BVA Resources — Kutukrom Gold Project, Western Region Ghana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BVA Resources | Mineral Exploration & Mining in Ghana',
    description:
      "Responsible gold exploration and mining at the Kutukrom Gold Project in Ghana's Western Region.",
    images: ['/resources/IMG-20250324-WA0026.jpg'],
  },
  alternates: {
    canonical: 'https://www.bvagroupgh.com/resources',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bvagroupgh.com' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bvagroupgh.com/resources' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BVA Resources',
    description:
      "BVA Resources operates responsible mineral exploration and mining at the Kutukrom Gold Project in Ghana's Western Region.",
    url: 'https://www.bvagroupgh.com/resources',
    industry: 'Mining and Mineral Exploration',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Western Region',
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
      name: 'Mining & Exploration Services',
      itemListElement: [
        { '@type': 'Offer', name: 'Mineral Exploration' },
        { '@type': 'Offer', name: 'Mining Operations' },
        { '@type': 'Offer', name: 'Sustainable Development' },
      ],
    },
  },
]

const scopeItems = [
  {
    number: '01',
    title: 'Mineral Exploration',
    description:
      "Systematic geological surveys and geochemical analysis to identify and delineate mineralised zones across our concession area in Ghana's Western Region.",
  },
  {
    number: '02',
    title: 'Mining Operations',
    description:
      'Structured extraction planning following full feasibility assessment, with operational standards meeting international benchmarks for safety and efficiency.',
  },
  {
    number: '03',
    title: 'Sustainable Development',
    description:
      'Every phase of our operation is governed by an ESG framework that prioritises community welfare, environmental protection, and transparent reporting.',
  },
]

const projectStats = [
  { label: 'Primary Mineral', value: 'Gold' },
  { label: 'Location', value: 'Western Region, Ghana' },
  { label: 'Current Stage', value: 'Exploration' },
  { label: 'Concession Size', value: 'TBC' },
]

const approaches = [
  {
    number: '01',
    title: 'Survey before we extract.',
    description:
      'No extraction begins without a complete geological and environmental assessment. We invest in understanding the land before we touch it.',
  },
  {
    number: '02',
    title: 'Engage before we operate.',
    description:
      'Community consultation precedes all operational activity. Local stakeholders are partners in our work, not bystanders to it.',
  },
  {
    number: '03',
    title: 'Report as we progress.',
    description:
      'Regular updates to investors, regulators, and communities. Transparency is not a policy — it is how we operate from day one.',
  },
]

export default function ResourcesPage() {
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
      <section className="relative min-h-[100svh] flex flex-col">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/resources/IMG-20250324-WA0026.jpg"
            alt="BVA Resources — Kutukrom site"
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
                'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 30%, transparent 60%)',
            }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-end pb-16 lg:pb-24 pt-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <p className="text-white/55 text-[11px] uppercase tracking-[0.28em] mb-6 font-medium">
              BVA Resources · Ghana
            </p>
            <h1
              className="font-heading font-bold text-white leading-[1.08] mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)' }}
            >
              Responsible mining.<br />Responsible growth.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-[520px]">
              BVA Resources operates mineral exploration and mining with an unwavering commitment to
              environmental stewardship and community partnership.
            </p>
            <TrackedLink
              href="/resources/kutukrom-gold-project"
              event="resources_hero_cta_clicked"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0a0a0a] font-heading font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              View Kutukrom Project <ArrowRight size={14} />
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK STATS ──────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {projectStats.map(({ label, value }) => (
              <div key={label} className="py-9 px-8 first:pl-0 lg:last:pr-0">
                <div
                  className="font-heading font-bold text-[#0f0f0f] leading-none mb-1.5"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                >
                  {value}
                </div>
                <div className="text-[#777] text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DO ───────────────────────────────────────── */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-4 font-medium">
                Our Operations
              </p>
              <h2
                className="font-heading font-bold text-[#0f0f0f] leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                What we do.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:flex lg:items-end">
              <p className="text-[#777] text-base leading-relaxed max-w-md">
                Three integrated disciplines that define how BVA Resources approaches every project —
                from initial survey through to sustainable extraction.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {scopeItems.map(({ number, title, description }) => (
              <div
                key={number}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="font-heading font-bold text-gray-100 text-5xl leading-none mb-8 select-none">
                  {number}
                </div>
                <h3 className="font-heading font-bold text-[#0f0f0f] text-lg mb-3">{title}</h3>
                <p className="text-[#777] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. KUTUKROM GOLD PROJECT ─────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Text — left */}
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-5 font-medium">
                Flagship Project
              </p>
              <h2
                className="font-heading font-bold text-[#0f0f0f] leading-tight mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Kutukrom Gold Project
              </h2>
              <p className="text-[#444] text-base leading-relaxed mb-8">
                Located in Ghana&apos;s Western Region, the Kutukrom Gold Project represents BVA
                Resources&apos; primary operational focus. Exploration is underway across a defined
                concession, guided by systematic geological assessment and responsible land
                stewardship.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { label: 'Mineral', value: 'Gold' },
                  { label: 'Region', value: 'Western, GH' },
                  { label: 'Stage', value: 'Exploration' },
                  { label: 'Concession', value: 'TBC' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#f5f5f3] rounded-xl p-4 border border-gray-100">
                    <div className="text-[#999] text-[10px] uppercase tracking-[0.2em] mb-1.5">
                      {label}
                    </div>
                    <div className="text-[#0f0f0f] font-heading font-bold text-base">{value}</div>
                  </div>
                ))}
              </div>

              <TrackedLink
                href="/resources/kutukrom-gold-project"
                event="kutukrom_project_details_clicked"
                className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white font-heading font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Full Project Details <ArrowRight size={14} />
              </TrackedLink>
            </div>

            {/* Image — right */}
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
              <div className="relative h-[420px] lg:h-[560px] rounded-2xl overflow-hidden">
                <Image
                  src="/resources/IMG-20250324-WA0028.jpg"
                  alt="Kutukrom Gold Project site"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)',
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. OUR APPROACH ─────────────────────────────────────── */}
      <section className="bg-[#f7f7f5] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-14 font-medium">
            Our Approach
          </p>
          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            {approaches.map(({ number, title, description }) => (
              <div key={number} className="col-span-12 md:col-span-4">
                <div className="font-heading font-bold text-gray-200 text-7xl leading-none mb-7 select-none">
                  {number}
                </div>
                <h3
                  className="font-heading font-bold text-[#0f0f0f] leading-snug mb-4"
                  style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)' }}
                >
                  {title}
                </h3>
                <p className="text-[#777] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PARTNERSHIP CTA ──────────────────────────────────── */}
      <ResourcesPartnership />
    </>
  )
}
