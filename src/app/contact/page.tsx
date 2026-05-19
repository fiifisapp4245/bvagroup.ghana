import type { Metadata } from 'next'
import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Contact BVA Group Ghana',
  description:
    'Get in touch with BVA Group — via WhatsApp, email, or phone. We respond to every inquiry within 24 hours.',
}

const WA_CONTACT =
  'https://wa.me/233000000000?text=Hello%20BVA%20Group%2C%20I%20found%20you%20on%20your%20website%20and%20I%20would%20like%20to%20start%20a%20conversation.'

const pathways = [
  {
    label: 'WhatsApp',
    tag: 'Fastest',
    description: 'Send us a message directly. We typically reply within a few hours during business hours.',
    cta: 'Open WhatsApp',
    href: WA_CONTACT,
    external: true,
    accent: '#25D366',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    tag: 'Formal',
    description: 'For detailed enquiries, partnership proposals, or documentation requests.',
    cta: 'Send an Email',
    href: 'mailto:info@bvagroupgh.com',
    external: false,
    accent: '#D4A017',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    tag: 'Urgent',
    description: 'For time-sensitive matters. Available Monday to Friday, 8am – 5pm GMT.',
    cta: 'Call Us',
    href: 'tel:+233000000000',
    external: false,
    accent: '#0a0a0a',
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.28em] mb-6 font-medium">
            BVA Group · Contact
          </p>
          <h1
            className="font-heading font-bold text-white leading-[1.06] max-w-2xl"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            Starting a conversation<br />is the easy part.
          </h1>
        </div>
      </section>

      {/* ── 2. THREE CONTACT PATHWAYS ───────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-12 font-medium">
            How to reach us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pathways.map(({ label, tag, description, cta, href, external, accent, icon }) => (
              <div
                key={label}
                className="border border-gray-100 rounded-2xl p-8 flex flex-col justify-between hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div>
                  {/* Icon + tag */}
                  <div className="flex items-start justify-between mb-7">
                    <div style={{ color: accent }}>{icon}</div>
                    <span
                      className="text-[9px] uppercase tracking-[0.22em] font-semibold px-2.5 py-1 rounded-full border"
                      style={{ color: accent, borderColor: `${accent}30`, background: `${accent}0d` }}
                    >
                      {tag}
                    </span>
                  </div>

                  {/* Text */}
                  <h2
                    className="font-heading font-bold text-[#0f0f0f] mb-3"
                    style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)' }}
                  >
                    {label}
                  </h2>
                  <p className="text-[#777] text-sm leading-relaxed mb-8">
                    {description}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a0a0a] hover:gap-3 transition-all"
                >
                  {cta}
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CONTACT FORM ─────────────────────────────────────── */}
      <section className="bg-[#f7f7f5] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">

            {/* Left — context */}
            <div className="col-span-12 lg:col-span-4">
              <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-4 font-medium">
                Send a Message
              </p>
              <h2
                className="font-heading font-bold text-[#0f0f0f] leading-tight mb-5"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                Prefer to write it out?
              </h2>
              <p className="text-[#777] text-sm leading-relaxed">
                Fill in the form and your message goes directly to the right person on the BVA team
                — no forwarding, no delays.
              </p>
            </div>

            {/* Right — form */}
            <div className="col-span-12 lg:col-span-8 bg-white rounded-2xl p-8 lg:p-10 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. OFFICE LOCATION ──────────────────────────────────── */}
      {/*
        TODO: Replace placeholder with Google Maps embed once client provides
        office address. Use:
          <iframe
            src="https://maps.google.com/maps?q=[ADDRESS]&output=embed"
            width="100%" height="100%" style={{ border: 0 }} loading="lazy"
            allowFullScreen referrerPolicy="no-referrer-when-downgrade"
          />
      */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-[#777] text-[10px] uppercase tracking-[0.25em] mb-3 font-medium">
            Find Us
          </p>
          <p className="text-[#0f0f0f] font-heading font-bold text-lg mb-1">
            BVA Group Ghana
          </p>
          <p className="text-[#777] text-sm">Accra, Ghana</p>
        </div>

        {/* Map placeholder — swapped for embed once address is confirmed */}
        <div className="h-[380px] lg:h-[440px] bg-[#f0ede8] flex items-center justify-center">
          <p className="text-[#bbb] text-xs uppercase tracking-[0.2em]">
            Office map — coming soon
          </p>
        </div>
      </section>
    </>
  )
}
