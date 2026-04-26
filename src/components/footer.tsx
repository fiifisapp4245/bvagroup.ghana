import Link from 'next/link'

const propertiesLinks = [
  { href: '/properties', label: 'Overview' },
  { href: '/properties/gucci-house', label: 'Gucci House' },
  { href: '/properties/bethel-court', label: 'Bethel Court' },
  { href: '/properties/palm-lane-avenue', label: 'Palm Lane Avenue' },
]

const resourcesLinks = [
  { href: '/resources', label: 'Overview' },
  { href: '/resources/kutukrom-gold-project', label: 'Kutukrom Gold Project' },
]

const companyLinks = [
  { href: '/about', label: 'About BVA' },
  { href: '/team', label: 'Leadership Team' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-10 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <div className="font-heading font-bold tracking-[0.18em] text-sm text-white mb-4">
              BVA GROUP
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-[220px]">
              Real estate development and mineral exploration, built with integrity across Ghana.
            </p>
            <div className="flex gap-5 mt-8">
              {['LinkedIn', 'Instagram', 'Facebook'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-white/35 hover:text-white/80 text-xs font-medium transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white/30 text-[10px] uppercase tracking-[0.2em] mb-5">
              Properties
            </div>
            <ul className="space-y-3.5">
              {propertiesLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/30 text-[10px] uppercase tracking-[0.2em] mb-5">
              Resources
            </div>
            <ul className="space-y-3.5">
              {resourcesLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/30 text-[10px] uppercase tracking-[0.2em] mb-5">
              Company
            </div>
            <ul className="space-y-3.5">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} BVA Group Ghana. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-white/25 hover:text-white/60 text-xs transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
