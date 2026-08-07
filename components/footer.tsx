'use client'

import Link from 'next/link'

const footerLinks = {
  explore: [
    { label: 'Signature Escapes', href: '/signature-escapes' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Travel Styles', href: '/travel-styles' },
  ],
  company: [
    { label: 'About Arubaden', href: '/about' },
    { label: 'Plan My Trip', href: '/plan-my-trip' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Terms & Conditions', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#073B5C', color: '#EAF7FA' }} role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Arubaden — Home">
              <span className="font-serif text-2xl tracking-tight" style={{ color: '#FAFCFB' }}>
                Arubaden
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#9DBFCE' }}>
              Exceptional journeys, personally curated. We craft travel experiences that go beyond the itinerary.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: '#3BC7C4' }}>
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4] rounded-sm"
                    style={{ color: '#9DBFCE' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#FAFCFB')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9DBFCE')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: '#3BC7C4' }}>
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4] rounded-sm"
                    style={{ color: '#9DBFCE' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#FAFCFB')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9DBFCE')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: '#3BC7C4' }}>
              Travel Inspiration
            </h3>
            <p className="text-sm mb-4" style={{ color: '#9DBFCE' }}>
              Curated destination guides, travel stories and exclusive escape ideas — delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                required
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-[#3BC7C4]"
                style={{ backgroundColor: '#102A3A', color: '#EAF7FA', border: '1px solid #168AAD44' }}
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
                style={{ backgroundColor: '#3BC7C4', color: '#073B5C' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#168AAD')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#3BC7C4')}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider & bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid #168AAD33', color: '#9DBFCE' }}
        >
          <p>&copy; {new Date().getFullYear()} Arubaden. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3BC7C4] rounded-sm"
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#FAFCFB')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9DBFCE')}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
