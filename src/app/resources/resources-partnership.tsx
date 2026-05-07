'use client'

import { Mail } from 'lucide-react'
import posthog from 'posthog-js'

const WA_RESOURCES =
  'https://wa.me/233000000000?text=Hello%20BVA%20Group%2C%20I%20found%20you%20on%20your%20website%20and%20I%20am%20interested%20in%20the%20Resources%20division.'

export function ResourcesPartnership() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    posthog.capture('resources_inquiry_form_submitted')
  }

  return (
    <section className="bg-[#0d3320] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">

          {/* Left — heading */}
          <div className="col-span-12 lg:col-span-5">
            <p className="text-green-400/50 text-[10px] uppercase tracking-[0.25em] mb-5 font-medium">
              Partnerships
            </p>
            <h2
              className="font-heading font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Partner with BVA Resources.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">
              We are seeking serious investment partners and operational collaborators for the
              Kutukrom Gold Project. Engagements are evaluated on alignment, capacity, and shared
              commitment to responsible mining.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:resources@bvagroupgh.com"
                onClick={() => posthog.capture('resources_partnership_email_clicked')}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-100 text-[#0a0a0a] font-semibold px-6 py-3.5 rounded-full transition-colors text-sm"
              >
                <Mail size={15} />
                Request Partnership Brief
              </a>
              <a
                href={WA_RESOURCES}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture('resources_partnership_whatsapp_clicked')}
                className="inline-flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3.5 rounded-full transition-colors text-sm"
              >
                <WhatsAppIcon size={15} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right — inquiry form */}
          <div className="col-span-12 lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-[#0a2a18] rounded-2xl p-8 border border-green-900/30 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-[0.2em] block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-green-400/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-[0.2em] block mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    placeholder="Company or institution"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-green-400/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/40 text-[10px] uppercase tracking-[0.2em] block mb-2">
                  Interest Area
                </label>
                <select name="interest" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-green-400/40 transition-colors appearance-none">
                  <option value="" className="bg-[#0d3320]">Select area of interest</option>
                  <option value="investment" className="bg-[#0d3320]">Investment Partnership</option>
                  <option value="operational" className="bg-[#0d3320]">Operational Collaboration</option>
                  <option value="offtake" className="bg-[#0d3320]">Offtake Agreement</option>
                  <option value="general" className="bg-[#0d3320]">General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="text-white/40 text-[10px] uppercase tracking-[0.2em] block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Briefly describe your interest and organisation..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-green-400/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white hover:bg-gray-100 text-[#0a0a0a] font-semibold py-3.5 rounded-full transition-colors text-sm"
              >
                Submit Enquiry
              </button>
              <p className="text-white/25 text-xs text-center">
                We review all partnership enquiries within 48 hours.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
