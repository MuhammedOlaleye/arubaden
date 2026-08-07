'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import RollingCounter from '@/components/rolling-counter'

export default function HeroSection() {
  return (
    <section
      className="relative flex items-end w-full overflow-hidden"
      style={{ minHeight: '100svh' }}
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=85&auto=format&fit=crop"
        alt="Pristine turquoise lagoon with overwater bungalows at sunset"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(7,59,92,0.72) 0%, rgba(7,59,92,0.30) 45%, rgba(7,59,92,0.12) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-5 lg:px-10 pb-20 lg:pb-28 pt-32">
        <div className="max-w-3xl">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
            style={{ color: '#3BC7C4' }}
          >
            Exceptional journeys, personally curated
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-balance mb-6"
            style={{
              color: '#FAFCFB',
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Discover the world on your own terms
          </h1>
          <p
            className="text-base lg:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: '#EAF7FA99' }}
          >
            Arubaden crafts personalised escapes, signature group adventures and thoughtfully designed vacation packages for travellers who seek more than a holiday.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/plan-my-trip"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
              style={{ backgroundColor: '#3BC7C4', color: '#073B5C' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#FAFCFB'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#3BC7C4'
              }}
            >
              Book Your Next Escape
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
              style={{ border: '1.5px solid #EAF7FA55', color: '#FAFCFB' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#3BC7C4'
                el.style.color = '#3BC7C4'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#EAF7FA55'
                el.style.color = '#FAFCFB'
              }}
            >
              Explore Destinations
            </Link>
          </div>
        </div>

        {/* Trust strip */}
        <div
          className="mt-16 pt-6 flex flex-wrap gap-8 lg:gap-12"
          style={{ borderTop: '1px solid #EAF7FA22' }}
        >
          {[
            { target: 15, suffix: '+', label: 'Destinations worldwide' },
            { target: 500, suffix: '+', label: 'Happy travellers' },
            { target: 5, suffix: '+', label: 'Years of expertise' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <RollingCounter
                target={stat.target}
                suffix={stat.suffix}
                className="font-serif text-2xl"
                style={{ color: '#3BC7C4' }}
                duration={1600}
              />
              <span className="text-xs tracking-wide" style={{ color: '#EAF7FA77' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
