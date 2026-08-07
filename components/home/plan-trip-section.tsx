'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, CalendarDays, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    title: 'Tell us where you dream of going',
    description: 'Share your destination ideas, travel style and what matters most to you.',
  },
  {
    icon: CalendarDays,
    title: "We'll design your perfect itinerary",
    description: 'Your dedicated travel designer crafts a tailored plan built around your vision.',
  },
  {
    icon: Sparkles,
    title: 'Travel with complete confidence',
    description: "Experience your journey knowing every detail has been personally arranged for you.",
  },
]

export default function PlanTripSection() {
  return (
    <section className="py-24 px-5 lg:px-10 overflow-hidden" aria-labelledby="plan-trip-heading">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden order-1" style={{ aspectRatio: '4/5' }}>
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80&auto=format&fit=crop"
            alt="Family enjoying a memorable travel experience together"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Quote card overlay */}
          <div
            className="absolute bottom-6 left-6 right-6 p-5 rounded-xl"
            style={{ backgroundColor: '#073B5Cee', backdropFilter: 'blur(8px)' }}
          >
            <p className="font-serif text-base leading-snug italic" style={{ color: '#FAFCFB' }}>
              &ldquo;Every detail was considered before we even arrived.&rdquo;
            </p>
            <p className="text-xs mt-2" style={{ color: '#3BC7C4' }}>— Priya & Rahul, Maldives</p>
          </div>
        </div>

        {/* Text */}
        <div className="order-2 flex flex-col gap-10">
          <div>
            <span className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 block" style={{ color: '#168AAD' }}>
              Plan my trip
            </span>
            <h2
              id="plan-trip-heading"
              className="font-serif text-balance mb-5"
              style={{ color: '#073B5C', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
            >
              Your dream journey starts with a conversation
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#4a6478' }}>
              We do not offer off-the-shelf packages. Tell us about the experience you are looking for and let us handle every last detail from there.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex gap-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#EAF7FA' }}
                  >
                    <Icon size={20} style={{ color: '#073B5C' }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1" style={{ color: '#073B5C' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#4a6478' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <Link
            href="/plan-my-trip"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide self-start transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD]"
            style={{ backgroundColor: '#073B5C', color: '#FAFCFB' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#168AAD')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#073B5C')}
          >
            Start planning your trip
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
