'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BrandIntroSection() {
  return (
    <section
      className="py-24 px-5 lg:px-10"
      style={{ backgroundColor: '#EAF7FA' }}
      aria-labelledby="brand-intro-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 block" style={{ color: '#168AAD' }}>
            Our philosophy
          </span>
          <h2
            id="brand-intro-heading"
            className="font-serif text-balance mb-6"
            style={{ color: '#073B5C', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
          >
            We believe travel should change you, not just move you
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: '#4a6478' }}>
            Arubaden was born from a simple conviction: that the best journeys are the ones tailored to who you are, not where the masses are going. We listen before we plan. We curate before we confirm. And we stay with you long after you return home.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#4a6478' }}>
            Whether it is a couples retreat in the Maldives, a cultural immersion through Bali or a family safari in Tanzania, every Arubaden experience is built around you.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD] rounded-sm"
            style={{ color: '#073B5C' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#168AAD'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#073B5C'
            }}
          >
            Our story
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Image grid */}
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <Image
              src="https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=600&q=80&auto=format&fit=crop"
              alt="Couple relaxing at a scenic coastal resort"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden flex-1">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80&auto=format&fit=crop"
                alt="Traveller experiencing adventure in nature"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden flex-1">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80&auto=format&fit=crop"
                alt="Serene wellness retreat surrounded by nature"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
