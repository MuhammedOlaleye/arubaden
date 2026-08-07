'use client'

import Link from 'next/link'

interface CtaBannerProps {
  eyebrow?: string
  title: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  secondaryExternal?: boolean
}

export default function CtaBanner({
  eyebrow = 'Your next adventure awaits',
  title,
  description,
  primaryLabel = 'Book Your Next Escape',
  primaryHref = '/plan-my-trip',
  secondaryLabel = 'Explore Destinations',
  secondaryHref = '/destinations',
  secondaryExternal = false,
}: CtaBannerProps) {
  return (
    <section
      className="relative py-24 px-5 overflow-hidden"
      style={{ backgroundColor: '#073B5C' }}
      aria-labelledby="cta-heading"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 50%, #3BC7C4 0%, transparent 55%), radial-gradient(circle at 20% 80%, #168AAD 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {eyebrow && (
          <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: '#3BC7C4' }}>
            {eyebrow}
          </span>
        )}
        <h2
          id="cta-heading"
          className="font-serif text-balance"
          style={{ color: '#FAFCFB', fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.1 }}
        >
          {title}
        </h2>
        {description && (
          <p className="text-base leading-relaxed max-w-xl" style={{ color: '#EAF7FA99' }}>
            {description}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            href={primaryHref}
            className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
            style={{ backgroundColor: '#3BC7C4', color: '#073B5C' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#FAFCFB')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#3BC7C4')}
          >
            {primaryLabel}
          </Link>
          {secondaryExternal ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4] hover:bg-[#EAF7FA11]"
              style={{ border: '1.5px solid #EAF7FA66', color: '#FAFCFB' }}
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link
              href={secondaryHref}
              className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4] hover:bg-[#EAF7FA11]"
              style={{ border: '1.5px solid #EAF7FA66', color: '#FAFCFB' }}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
