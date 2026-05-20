import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AdvisorCard } from '@/components/advisor-card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BVA Group | Our Story, Mission & Values',
  description:
    'Learn about BVA Group Ghana — a responsible real estate developer and mineral exploration company founded in Accra in 2018. Our mission: build lasting value for Ghana with integrity.',
  openGraph: {
    title: 'About BVA Group Ghana | Our Story, Mission & Values',
    description:
      'Founded in Accra in 2018, BVA Group operates across real estate development and mineral exploration — driven by integrity, community accountability, and long-term thinking.',
    url: 'https://www.bvagroupgh.com/about',
    images: [
      {
        url: '/webaliser-_TPTXZd9mOo-unsplash.jpg',
        width: 1200,
        height: 630,
        alt: 'BVA Group Ghana — Built with conviction. Accountable to Ghana.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About BVA Group Ghana | Our Story, Mission & Values',
    description:
      'Founded in Accra in 2018, BVA Group builds lasting value across real estate and mineral exploration — driven by integrity and community accountability.',
  },
  alternates: {
    canonical: 'https://www.bvagroupgh.com/about',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bvagroupgh.com' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.bvagroupgh.com/about' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About BVA Group Ghana',
    url: 'https://www.bvagroupgh.com/about',
    description:
      'BVA Group Ghana was founded in Accra in 2018 with a conviction that development should create lasting value for investors, communities, and the country.',
    about: {
      '@type': 'Organization',
      name: 'BVA Group Ghana',
      foundingDate: '2018',
      foundingLocation: { '@type': 'Place', name: 'Accra, Ghana' },
      mission:
        "To develop Ghana's built and natural environment with integrity — building assets that create lasting value for investors, communities, and the country.",
    },
  },
]

const values = [
  {
    number: '01',
    title: 'Integrity First',
    body: 'We have walked away from projects that did not meet our standards, and we would do it again.',
  },
  {
    number: '02',
    title: 'Community Before Contract',
    body: 'Every site we enter becomes part of our responsibility — before the first brick is laid or the first core drilled.',
  },
  {
    number: '03',
    title: 'Precision Over Speed',
    body: 'We take longer to do things right, because the buildings and operations we create will outlast any deadline.',
  },
  {
    number: '04',
    title: 'Transparency Always',
    body: 'We report on progress, setbacks, and decisions — because trust is built in the details, not the headlines.',
  },
]

export default function AboutPage() {
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
      <section className="bg-[#0a0a0a] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.28em] mb-6 font-medium">
            BVA Group · Our Company
          </p>
          <h1
            className="font-heading font-bold text-white leading-[1.06] max-w-3xl"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            Built with conviction.<br />
            Accountable to Ghana.
          </h1>
        </div>
      </section>

      {/* ── 2. OUR STORY ────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">

            <div className="col-span-12 lg:col-span-4">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-4 font-medium">
                Our Story
              </p>
              <h2
                className="font-heading font-bold text-[#0f0f0f] leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                How BVA Group came to be.
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-8 space-y-6 text-[#444] text-base leading-[1.8]">
              <p>
                BVA Group was founded in Accra in 2018 with a single conviction: that Ghana's most
                valuable asset is not what lies beneath its soil, but the people and communities
                shaped by what rises above it. We started not with a grand strategy, but with a
                question — what would it mean to develop responsibly in a country where development
                has too often meant extraction without accountability?
              </p>
              <p>
                We began in real estate. Our first project, Gucci House, was a residential development
                in Ghana's Eastern Region that challenged us to define what premium really means in
                the Ghanaian context. Not imported finishes or foreign benchmarks — but lasting
                construction, honest pricing, and a process that treats every buyer as a long-term
                partner rather than a closed transaction.
              </p>
              <p>
                By 2020, we extended that philosophy to Ghana's land itself. BVA Resources was formed
                to explore and operate the Kutukrom Gold Project in the Western Region — not as an
                extraction exercise, but as a long-term commitment to the communities, environment,
                and economic future of that region. We survey before we extract. We engage before we
                operate. We report as we progress.
              </p>
              <p>
                Today, BVA Group operates across two verticals — Properties and Resources — united
                by a single standard: we do not begin work we are not prepared to stand behind.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. MISSION + VISION ─────────────────────────────────── */}
      <section className="bg-[#f7f7f5] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">

            <div className="col-span-12 lg:col-span-6 border-l-2 border-[#D4A017] pl-8">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-5 font-medium">
                Mission
              </p>
              <p
                className="font-heading font-bold text-[#0f0f0f] leading-snug"
                style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
              >
                To develop Ghana&apos;s built and natural environment with integrity — building
                assets that create lasting value for investors, communities, and the country.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 border-l-2 border-[#D4A017] pl-8">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-5 font-medium">
                Vision
              </p>
              <p
                className="font-heading font-bold text-[#0f0f0f] leading-snug"
                style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
              >
                A Ghana where responsible development — in real estate and in the ground — is
                the standard, not the exception.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. OUR VALUES ───────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-14 font-medium">
            Our Values
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {values.map(({ number, title, body }) => (
              <div key={number} className="flex gap-8">
                <div
                  className="font-heading font-bold text-5xl leading-none shrink-0 select-none text-[#e8e8e6]"
                >
                  {number}
                </div>
                <div>
                  <h3
                    className="font-heading font-bold text-[#0f0f0f] mb-3"
                    style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#444] text-base leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. OUR BUSINESSES ───────────────────────────────────── */}
      <section className="bg-[#f7f7f5] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-12 font-medium">
            Our Businesses
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Properties — warm */}
            <Link
              href="/properties"
              className="group relative overflow-hidden rounded-2xl bg-[#F5EFE6] p-10 lg:p-12 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-0.5"
            >
              <div>
                <p className="text-[#2C1810]/50 text-[10px] uppercase tracking-[0.25em] mb-5 font-medium">
                  Real Estate
                </p>
                <h3
                  className="font-heading font-bold text-[#2C1810] leading-tight mb-4"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}
                >
                  BVA Properties
                </h3>
                <p className="text-[#2C1810]/70 text-base leading-relaxed max-w-sm">
                  Premium residential, commercial, and mixed-use developments designed for
                  lasting value across Ghana.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#2C1810] text-sm font-medium mt-8 group-hover:gap-3 transition-all">
                View projects <ArrowRight size={14} />
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-[80px] opacity-10"
                style={{ background: '#D4A017' }}
              />
            </Link>

            {/* Resources — dark */}
            <Link
              href="/resources"
              className="group relative overflow-hidden rounded-2xl bg-[#0D2818] p-10 lg:p-12 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-0.5"
            >
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] mb-5 font-medium">
                  Mining &amp; Exploration
                </p>
                <h3
                  className="font-heading font-bold text-white leading-tight mb-4"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}
                >
                  BVA Resources
                </h3>
                <p className="text-white/60 text-base leading-relaxed max-w-sm">
                  Responsible mineral exploration and mining operations, anchored at the
                  Kutukrom Gold Project in Ghana&apos;s Western Region.
                </p>
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-medium mt-8 group-hover:gap-3 transition-all">
                View operations <ArrowRight size={14} />
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-[80px] opacity-10"
                style={{ background: '#D4A017' }}
              />
            </Link>

          </div>
        </div>
      </section>

      {/* ── 6. TEAM PREVIEW ─────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-4 font-medium">
                Leadership
              </p>
              <h2
                className="font-heading font-bold text-[#0f0f0f] leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                The people behind BVA Group.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:flex lg:items-end">
              <p className="text-[#777] text-base leading-relaxed max-w-md">
                An experienced team with deep roots in Ghanaian real estate development,
                mineral exploration, and corporate strategy.
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

          <div className="mt-14 pt-8 border-t border-gray-200">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-[#0a0a0a] text-sm font-medium hover:gap-3 transition-all"
            >
              Meet the full leadership team <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
