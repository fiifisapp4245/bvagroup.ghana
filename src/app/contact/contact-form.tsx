'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import posthog from 'posthog-js'

type FormState = {
  name: string
  contact: string
  interest: string
  message: string
}

const interests = [
  { value: '', label: 'Select an area of interest' },
  { value: 'properties', label: 'BVA Properties — Real Estate' },
  { value: 'resources', label: 'BVA Resources — Mining & Exploration' },
  { value: 'partnership', label: 'Partnership & Investment' },
  { value: 'general', label: 'General Enquiry' },
]

const inputClass =
  'w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#1a1a1a] text-sm placeholder:text-[#aaa] focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/15 transition-all'

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    contact: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    posthog.capture('contact_form_submitted', {
      interest: form.interest,
    })

    // TODO: wire to Server Action / Resend endpoint
    await new Promise((r) => setTimeout(r, 800))

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={40} className="text-[#D4A017] mb-5" strokeWidth={1.5} />
        <h3
          className="font-heading font-bold text-[#0f0f0f] mb-3"
          style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)' }}
        >
          Message received.
        </h3>
        <p className="text-[#777] text-sm leading-relaxed max-w-xs">
          We respond to every inquiry within 24 hours. Expect to hear from the right person on
          the BVA team shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1 — Name + Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-[#777] font-medium mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact" className="block text-[10px] uppercase tracking-[0.2em] text-[#777] font-medium mb-2">
            Phone or Email
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            placeholder="+233 or your email address"
            value={form.contact}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2 — Interest */}
      <div>
        <label htmlFor="interest" className="block text-[10px] uppercase tracking-[0.2em] text-[#777] font-medium mb-2">
          Area of Interest
        </label>
        <select
          id="interest"
          name="interest"
          required
          value={form.interest}
          onChange={handleChange}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          {interests.map(({ value, label }) => (
            <option key={value} value={value} disabled={value === ''}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Row 3 — Message */}
      <div>
        <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-[#777] font-medium mb-2">
          Message <span className="text-[#aaa] normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what you're looking for — the more context, the better."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* SLA trust line + submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-2">
        <p className="text-[#aaa] text-xs leading-relaxed">
          We respond to every inquiry within 24 hours.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] disabled:opacity-50 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm shrink-0"
        >
          {loading ? 'Sending…' : (
            <>Send Message <ArrowRight size={14} /></>
          )}
        </button>
      </div>
    </form>
  )
}
