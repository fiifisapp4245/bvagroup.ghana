'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import posthog from 'posthog-js'

type Props = {
  imageSrc?: string
  initials: string
  name: string
  title: string
  background: string
  expertise: string
}

export function AdvisorCard({ imageSrc, initials, name, title, background, expertise }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {/* ── Card ── */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#e8e8e6] mb-5">

        {/* Photo */}
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
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

        {/* Revealed details overlay */}
        <div
          className={`absolute inset-0 bg-[#0a0a0a]/92 p-7 flex flex-col justify-center transition-opacity duration-200 ${
            open ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="space-y-6">
            <div>
              <p className="text-white/38 text-[10px] uppercase tracking-[0.22em] mb-2 font-medium">
                Title
              </p>
              <p className="text-white text-sm leading-snug">{title}</p>
            </div>
            <div>
              <p className="text-white/38 text-[10px] uppercase tracking-[0.22em] mb-2 font-medium">
                Background
              </p>
              <p className="text-white text-sm leading-snug">{background}</p>
            </div>
            <div>
              <p className="text-white/38 text-[10px] uppercase tracking-[0.22em] mb-2 font-medium">
                Expertise
              </p>
              <p className="text-white text-sm leading-snug">{expertise}</p>
            </div>
          </div>
        </div>

        {/* Toggle button — top-right */}
        <button
          onClick={() => {
            const next = !open
            setOpen(next)
            if (next) {
              posthog.capture('leadership_card_expanded', { name, title })
            }
          }}
          aria-label={open ? 'Close details' : 'View details'}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        >
          {open
            ? <X size={13} strokeWidth={2.5} />
            : <Plus size={13} strokeWidth={2.5} />
          }
        </button>
      </div>

      {/* ── Name and title — below the card ── */}
      <div
        className="font-heading font-bold text-[#0f0f0f] leading-tight mb-1.5"
        style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)' }}
      >
        {name}
      </div>
      <div className="text-[#999] text-[10px] uppercase tracking-[0.2em] font-medium">
        {title}
      </div>
    </div>
  )
}
