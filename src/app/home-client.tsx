'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AdvisorCard } from '@/components/advisor-card'
import posthog from 'posthog-js'

const WA_GENERAL =
  'https://wa.me/233000000000?text=Hello%20BVA%20Group%2C%20I%20found%20you%20on%20your%20website%20and%20I%20would%20like%20to%20learn%20more.'

const stats = [
  { value: '2020', label: 'Founded' },
  { value: '2', label: 'Active Projects' },
  { value: '1', label: 'Exploration and Mining Project' },
  { value: 'Accra, GH', label: 'Headquarters' },
]

const principles = [
  {
    number: '01',
    text: 'We build where it matters, when it matters, and only when we know it will last.',
  },
  {
    number: '02',
    text: "Our clients aren't buyers — they're partners in something permanent.",
  },
  {
    number: '03',
    text: 'From Accra to Kutukrom, every community we enter becomes part of our commitment.',
  },
]

export function HomeClient() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col">

        {/* ── Full-bleed background ── */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/webaliser-_TPTXZd9mOo-unsplash.jpg"
            alt="BVA Group development project in Ghana"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 18%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 28%, transparent 58%)',
            }}
          />
        </div>

        {/* ── Content — anchored to bottom, image clear above ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-6 pt-16 pb-16 lg:pb-24">
          <p className="text-white/55 text-[11px] uppercase tracking-[0.28em] mb-6 font-medium">
            BVA Group · Ghana
          </p>

          <h1
            className="font-heading font-bold text-white leading-[1.08] mb-5 max-w-3xl"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            Developing Ghana&apos;s<br className="hidden sm:block" /> Future, Together.
          </h1>

          <p className="text-white/65 text-base lg:text-lg leading-relaxed mb-9 max-w-xl">
            Real estate development and mineral exploration — built with integrity, delivered with conviction.
          </p>

          <Link
            href="/contact"
            onClick={() => posthog.capture('hero_cta_clicked')}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0a0a0a] font-heading font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
          >
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── 2. STAT BAR ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-9 px-8 first:pl-0 lg:last:pr-0">
                <div
                  className="font-heading font-bold text-[#0f0f0f] leading-none mb-1.5"
                  style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
                >
                  {value}
                </div>
                <div className="text-[#777] text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PROPERTIES ───────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Text — left on desktop */}
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-5 font-medium">
                Real Estate
              </p>
              <h2
                className="font-heading font-bold text-[#0f0f0f] leading-tight mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                BVA Properties
              </h2>
              <p className="text-[#444] text-base leading-relaxed mb-6 max-w-[380px]">
                Premium residential, commercial, and mixed-use developments designed for lasting value across Ghana.
              </p>
              <ul className="space-y-2.5 mb-8">
                {['Residential', 'Commercial &amp; Retail', 'Industrial &amp; Administration'].map((type) => (
                  <li key={type} className="flex items-center gap-2.5 text-[#444] text-sm">
                    <span className="w-1 h-1 rounded-full bg-[#0a0a0a] shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: type }} />
                  </li>
                ))}
              </ul>
              <Link
                href="/properties"
                onClick={() => posthog.capture('properties_section_cta_clicked')}
                className="inline-flex items-center gap-2 text-[#0a0a0a] text-sm font-medium hover:gap-3 transition-all"
              >
                View all projects <ArrowRight size={14} />
              </Link>
            </div>

            {/* Panel — right on desktop */}
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
              <div className="relative h-[420px] lg:h-[540px] rounded-2xl overflow-hidden">
                <Image
                  src="/properties/IMG-20250321-WA0018.jpg"
                  alt="BVA Properties residential development in Ghana"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 42%, transparent 68%)',
                  }}
                />
                {/* Project pills bottom-left */}
                <div className="absolute bottom-0 inset-x-0 p-8">
                  <div className="text-white text-[10px] uppercase tracking-[0.2em] mb-4">
                    Projects
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { name: 'Gucci House', type: 'Residential', status: 'Sold' },
                      { name: 'Better Court', type: 'Commercial & Retail', status: 'Ongoing' },
                      { name: 'New Palm View', type: 'Residential', status: 'Coming Soon' },
                    ].map(({ name, type, status }) => (
                      <div
                        key={name}
                        className="flex items-center justify-between border-t border-white/20 pt-2"
                      >
                        <div>
                          <span className="text-white text-sm font-medium">{name}</span>
                          <span className="text-white/70 text-xs ml-2">· {type}</span>
                        </div>
                        <span className="text-white text-[10px] uppercase tracking-wider">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. RESOURCES ────────────────────────────────────────── */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Panel — left on desktop */}
            <div className="col-span-12 lg:col-span-7">
              <div className="relative h-[420px] lg:h-[540px] rounded-2xl overflow-hidden">
                <Image
                  src="/resources/IMG-20250324-WA0022.jpg"
                  alt="BVA Resources — Kutukrom Gold Project site, Western Region Ghana"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.35) 42%, transparent 68%)',
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 p-8">
                  <div className="text-white text-[10px] uppercase tracking-[0.2em] mb-4">
                    Active operations
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm font-medium">
                          Kutukrom Gold Project
                        </div>
                        <div className="text-white/70 text-xs mt-0.5">
                          Western Region, Ghana · Gold
                        </div>
                      </div>
                      <div className="text-white text-[10px] uppercase tracking-wider">
                        Exploration
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text — right on desktop */}
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-5 font-medium">
                Mining &amp; Exploration
              </p>
              <h2
                className="font-heading font-bold text-[#0f0f0f] leading-tight mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                BVA Resources
              </h2>
              <p className="text-[#444] text-base leading-relaxed mb-6 max-w-[380px]">
                Responsible mineral exploration and mining operations, anchored at the Kutukrom Gold Project in Ghana&apos;s Western Region.
              </p>
              <ul className="space-y-2.5 mb-8">
                {['Mineral Exploration', 'Mining Operations', 'Sustainable Development'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[#444] text-sm">
                      <span className="w-1 h-1 rounded-full bg-[#0a0a0a] shrink-0" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <Link
                href="/resources"
                onClick={() => posthog.capture('resources_section_cta_clicked')}
                className="inline-flex items-center gap-2 text-[#0a0a0a] text-sm font-medium hover:gap-3 transition-all"
              >
                View operations <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. LEADERSHIP ───────────────────────────────────────── */}
      <section className="bg-[#f7f7f5] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section header */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-4 font-medium">
                Leadership
              </p>
              <h2
                className="font-heading font-bold text-[#0f0f0f] leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Meet the people behind BVA Group.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:flex lg:items-end">
              <p className="text-[#777] text-base leading-relaxed max-w-md">
                An experienced team with deep roots in Ghanaian real estate development, mineral exploration, and corporate strategy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <AdvisorCard
              imageSrc="/leaders/albert-dera-ILip77SbmOE-unsplash.jpg"
              initials="KA"
              name="Kwame Asante"
              title="Chief Executive Officer"
              background="Former Managing Director, Ghana Infrastructure Partners"
              expertise="Real estate development · Corporate strategy"
            />
            <AdvisorCard
              imageSrc="/leaders/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg"
              initials="SM"
              name="Samuel Mensah"
              title="Director, Properties"
              background="Former Project Manager, Accra Urban Development Authority"
              expertise="Property development · Project management"
            />
            <AdvisorCard
              imageSrc="/leaders/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"
              initials="KB"
              name="Kofi Boateng"
              title="Director, Resources"
              background="Former Chief Geologist, Ghana Minerals Commission"
              expertise="Mineral exploration · Site operations"
            />
            <AdvisorCard
              imageSrc="/leaders/taylor-8Vt2haq8NSQ-unsplash.jpg"
              initials="MD"
              name="Michael Darko"
              title="Director, Finance"
              background="Former VP Finance, Databank Brokerage Ltd"
              expertise="Financial planning · Investor relations"
            />
          </div>

          {/* Footer CTA */}
          <div className="mt-14 pt-8 border-t border-gray-200">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-[#0a0a0a] text-sm font-medium hover:gap-3 transition-all"
            >
              View the full team <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 6. WHY BVA ──────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[#bbb] text-[10px] uppercase tracking-[0.25em] mb-14 font-medium">
            Our Principles
          </p>
          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            {principles.map(({ number, text }) => (
              <div key={number} className="col-span-12 md:col-span-4">
                <div
                  className="font-heading font-bold text-7xl leading-none mb-7 select-none"
                  style={{ color: '#0a0a0a' }}
                >
                  {number}
                </div>
                <p
                  className="font-heading font-medium text-[#1a1a1a] leading-snug"
                  style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CONTACT BAND ─────────────────────────────────────── */}
      <section className="bg-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">

            <div className="col-span-12 lg:col-span-7">
              <h2
                className="font-heading font-bold text-white leading-tight mb-2"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)' }}
              >
                Ready to start a conversation?
              </h2>
              <p className="text-white/32 text-sm">
                We respond to every inquiry within 24 hours.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:flex lg:justify-end">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => posthog.capture('contact_band_whatsapp_clicked')}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20b559] text-white font-heading font-medium px-6 py-3.5 rounded-full transition-colors text-sm"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp Us
                </a>
                <Link
                  href="/contact"
                  onClick={() => posthog.capture('contact_band_send_message_clicked')}
                  className="inline-flex items-center justify-center border border-white/12 hover:border-white/30 text-white font-heading font-medium px-6 py-3.5 rounded-full transition-colors text-sm"
                >
                  Send a Message
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
