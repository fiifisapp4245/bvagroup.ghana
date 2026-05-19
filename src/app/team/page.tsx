import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leadership Team | BVA Group Ghana',
  description:
    'Meet the experienced team behind BVA Group Ghana — leading real estate development and mineral exploration with integrity.',
}

const teamMembers = [
  {
    imageSrc: '/leaders/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg',
    initials: 'SM',
    name: 'Samuel Mensah',
    title: 'Director, Properties',
    bio: 'Samuel leads BVA Properties with over 15 years of experience in Ghanaian real estate development and project delivery.',
    linkedin: '#',
  },
  {
    imageSrc: '/leaders/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg',
    initials: 'KB',
    name: 'Kofi Boateng',
    title: 'Director, Resources',
    bio: 'Kofi brings deep geoscience expertise to BVA Resources, overseeing exploration methodology and site operations at Kutukrom.',
    linkedin: '#',
  },
  {
    imageSrc: '/leaders/taylor-8Vt2haq8NSQ-unsplash.jpg',
    initials: 'MD',
    name: 'Michael Darko',
    title: 'Director, Finance',
    bio: 'Michael oversees financial strategy, investor relations, and capital allocation across both BVA verticals.',
    linkedin: '#',
  },
]

export default function TeamPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.28em] mb-6 font-medium">
            BVA Group · Leadership
          </p>
          <h1
            className="font-heading font-bold text-white leading-[1.06] max-w-3xl"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            The people who<br />
            build BVA.
          </h1>
        </div>
      </section>

      {/* ── 2. CEO FEATURE ──────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-12 font-medium">
            Chief Executive Officer
          </p>

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* Photo — left, larger treatment */}
            <div className="col-span-12 lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#e8e8e6]">
                <Image
                  src="/leaders/albert-dera-ILip77SbmOE-unsplash.jpg"
                  alt="Kwame Asante — Chief Executive Officer, BVA Group"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Text — right */}
            <div className="col-span-12 lg:col-span-7 lg:pt-4">
              <h2
                className="font-heading font-bold text-[#0f0f0f] leading-tight mb-1"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Kwame Asante
              </h2>
              <p className="text-[#777] text-[10px] uppercase tracking-[0.22em] font-medium mb-8">
                Chief Executive Officer
              </p>

              {/* Bio */}
              <div className="space-y-4 text-[#444] text-base leading-[1.8] mb-10">
                <p>
                  Kwame founded BVA Group in 2018 after a decade at the helm of Ghana Infrastructure
                  Partners, where he led a portfolio of commercial and residential projects across
                  Accra and the Eastern Region. His conviction that Ghanaian development had to be
                  held to a higher standard — in quality, in ethics, and in community accountability
                  — became the founding principle of BVA.
                </p>
                <p>
                  Under his leadership, BVA Group has grown from a single real estate project to a
                  multi-vertical group with active operations in both property development and mineral
                  exploration. He believes the two verticals share the same foundation: that you
                  cannot build lasting value without first earning lasting trust.
                </p>
                <p>
                  Kwame holds a degree in Civil Engineering from KNUST and an MBA from the University
                  of Ghana Business School. He is a member of the Ghana Institution of Engineering.
                </p>
              </div>

              {/* CEO Quote */}
              <blockquote className="border-l-2 border-[#D4A017] pl-6">
                <p className="font-heading font-medium text-[#0f0f0f] leading-snug italic"
                  style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
                >
                  &ldquo;We are not here to move quickly. We are here to move correctly — and to
                  still be accountable for what we built twenty years from now.&rdquo;
                </p>
                <footer className="mt-4 text-[#777] text-xs uppercase tracking-[0.2em] font-medium not-italic">
                  Kwame Asante, CEO
                </footer>
              </blockquote>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#0a0a0a] text-sm font-medium hover:gap-3 transition-all mt-8"
              >
                <ExternalLink size={14} />
                LinkedIn Profile
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. TEAM GRID ────────────────────────────────────────── */}
      <section className="bg-[#f7f7f5] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-12 font-medium">
            Senior Leadership
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map(({ imageSrc, initials, name, title, bio, linkedin }) => (
              <div key={name}>

                {/* Photo */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#e8e8e6] mb-6">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={`${name} — ${title}, BVA Group`}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-heading font-bold text-[#c8c8c6] text-5xl select-none">
                        {initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name + title */}
                <h3
                  className="font-heading font-bold text-[#0f0f0f] leading-tight mb-1"
                  style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)' }}
                >
                  {name}
                </h3>
                <p className="text-[#777] text-[10px] uppercase tracking-[0.2em] font-medium mb-4">
                  {title}
                </p>

                {/* Bio */}
                <p className="text-[#444] text-sm leading-relaxed mb-5">
                  {bio}
                </p>

                {/* LinkedIn */}
                <a
                  href={linkedin}
                  className="inline-flex items-center gap-1.5 text-[#777] hover:text-[#0a0a0a] text-xs font-medium transition-colors"
                >
                  <ExternalLink size={12} />
                  LinkedIn
                </a>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. JOIN THE TEAM ────────────────────────────────────── */}
      <section className="bg-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">

            <div className="col-span-12 lg:col-span-7">
              <h2
                className="font-heading font-bold text-white leading-tight mb-2"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)' }}
              >
                We build with the best people — and we&apos;re always looking.
              </h2>
              <p className="text-white/40 text-sm mt-3">
                At BVA, we hire for integrity first. Technical skill can be developed; character cannot.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0a0a0a] font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
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
