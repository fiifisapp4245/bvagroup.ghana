'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import posthog from 'posthog-js'

const links = [
  { href: '/properties', label: 'Properties' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

const WA_URL =
  'https://wa.me/233000000000?text=Hello%20BVA%20Group%2C%20I%20found%20you%20on%20your%20website%20and%20I%20would%20like%20to%20learn%20more.'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const solid = !isHome || scrolled

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid ? 'bg-[#0a0a0a] shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-heading font-bold text-white tracking-[0.18em] text-sm shrink-0"
          >
            BVA GROUP
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname.startsWith(href)
                    ? 'text-white underline underline-offset-4 decoration-white/50'
                    : 'text-white/65 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-[#0a0a0a] text-sm font-medium px-5 py-2.5 rounded-full transition-colors shrink-0"
          >
            Get in Touch
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white p-1.5 -mr-1.5"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 shrink-0 border-b border-white/10">
          <span className="font-heading font-bold text-white tracking-[0.18em] text-sm">
            BVA GROUP
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-white p-1.5 -mr-1.5"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-8 gap-1 overflow-y-auto">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between text-white/70 hover:text-white font-heading font-bold py-4 border-b border-white/5 transition-colors last:border-0"
              style={{ fontSize: 'clamp(1.75rem, 7vw, 2.5rem)' }}
            >
              {label}
              <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </nav>

        <div className="px-8 pb-10 pt-6 shrink-0 border-t border-white/10">
          <a
            href={WA_URL}
            onClick={() => posthog.capture('mobile_nav_whatsapp_clicked')}
            className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20b559] text-white font-semibold py-4 rounded-full text-base transition-colors"
          >
            <WhatsAppIcon size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
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
