import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Breadcrumbs from '@/components/breadcrumbs'
import CtaBanner from '@/components/cta-banner'
import { travelStyles } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Travel Styles — Arubaden',
  description:
    'Discover the way you love to travel — from beach escapes and adventure trails to romantic getaways, family journeys and bespoke luxury.',
}

export default function TravelStylesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section
          className="relative flex items-end pt-40 pb-16 px-5 lg:px-10 overflow-hidden"
          aria-labelledby="travel-styles-page-heading"
        >
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=2000&q=80&auto=format&fit=crop"
            alt="Travellers enjoying a scenic journey together"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(7,59,92,0.75) 0%, rgba(7,59,92,0.25) 60%, transparent 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto w-full">
            <Breadcrumbs
              items={[{ label: 'Home', href: '/' }, { label: 'Travel Styles' }]}
              light
            />
            <h1
              id="travel-styles-page-heading"
              className="font-serif text-balance mt-4"
              style={{ color: '#FAFCFB', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              How do you love to travel?
            </h1>
            <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: '#EAF7FA88' }}>
              Every traveller is different. Whether you are chasing sunsets with someone special, gathering the whole family, or seeking your next adventure, we design each escape around the way you actually want to travel.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-16 pb-4 px-5 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: '#168AAD' }}
            >
              Eight ways to explore
            </span>
            <h2
              className="font-serif text-balance mt-3"
              style={{ color: '#073B5C', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', lineHeight: 1.15 }}
            >
              A style for every kind of journey
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: '#4a6478' }}>
              Every Arubaden itinerary begins with a simple question — what kind of trip are you dreaming of? These are the travel styles our escapes are built around. Mix and match, or let us blend a few together.
            </p>
          </div>
        </section>

        {/* Travel styles grid */}
        <section className="py-16 px-5 lg:px-10" aria-label="Travel style categories">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {travelStyles.map((style, i) => (
              <article
                key={style.slug}
                className="flex flex-col rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#FAFCFB', boxShadow: '0 4px 24px 0 rgba(7,59,92,0.08)' }}
              >
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={i < 3}
                  />
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="font-serif text-xl leading-snug" style={{ color: '#073B5C' }}>
                    {style.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4a6478' }}>
                    {style.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaBanner
          title="Found your style? Let's build the trip around it"
          description="Tell us which travel style speaks to you and we will curate an itinerary that fits — down to the last detail."
          primaryLabel="Plan My Trip"
          primaryHref="/plan-my-trip"
          secondaryLabel="View Signature Escapes"
          secondaryHref="/signature-escapes"
        />
      </main>
      <Footer />
    </>
  )
}
