import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BVA Properties | Real Estate Development in Ghana',
  description:
    'BVA Properties develops premium residential, commercial, and mixed-use projects across Ghana — built for lasting value.',
}

const projects = [
  {
    name: 'Gucci House',
    type: 'Residential',
    region: 'Eastern Region, Ghana',
    status: 'Sold' as const,
    image: '/properties/IMG-20250320-WA0005.jpg',
    description:
      'A completed residential development delivering modern living standards in Ghana\'s Eastern Region. Fully sold — a testament to BVA\'s commitment to quality and timely delivery.',
  },
  {
    name: 'Better Court',
    type: 'Commercial & Retail',
    region: 'Ghana',
    status: 'Ongoing' as const,
    image: '/properties/IMG-20250321-WA0011.jpg',
    description:
      'An active commercial and retail development designed to serve growing business communities across Ghana. Construction is underway with strong progress.',
  },
  {
    name: 'New Palm View',
    type: 'Residential',
    region: 'Ghana',
    status: 'Coming Soon' as const,
    image: '/properties/IMG-20250321-WA0018.jpg',
    description:
      'BVA\'s next residential flagship — bringing premium, community-centred living to a new location. Full details and launch timeline coming soon.',
  },
]

const statusStyles: Record<'Sold' | 'Ongoing' | 'Coming Soon', string> = {
  Sold: 'bg-white/10 text-white/70',
  Ongoing: 'bg-[#1B4FD8]/20 text-[#6fa3ff]',
  'Coming Soon': 'bg-amber-400/15 text-amber-300',
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

      {/* ── 2. PROJECTS GRID ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-4 font-medium">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map(({ name, type, region, status, image, description }) => (
              <div
                key={name}
                className="group rounded-2xl overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                    }}
                  />
                  {/* Status badge */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`inline-block text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1.5 rounded-full ${statusStyles[status]}`}
                    >
                      {status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-[#999] text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">
                    {type}
                  </p>
                  <h3 className="font-heading font-bold text-[#0f0f0f] text-xl mb-3">{name}</h3>
                  <p className="text-[#777] text-xs mb-2">{region}</p>
                  <p className="text-[#555] text-sm leading-relaxed flex-1">{description}</p>
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
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0a0a0a] font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
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
