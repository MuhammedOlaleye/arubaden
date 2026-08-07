import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import DestinationCard from '@/components/destination-card'
import CtaBanner from '@/components/cta-banner'
import Breadcrumbs from '@/components/breadcrumbs'
import { destinations } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Destinations — Arubaden',
  description: 'Explore handpicked destinations from the Maldives to Morocco. Every location carefully selected for its beauty, culture and adventure potential.',
}

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section
          className="relative flex items-end pt-40 pb-16 px-5 lg:px-10 overflow-hidden"
          aria-labelledby="destinations-page-heading"
        >
          <Image
            src="https://images.unsplash.com/photo-1543257580-7269da773bf5?w=2000&q=80&auto=format&fit=crop"
            alt="Aerial view of tropical islands and turquoise waters"
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
              items={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]}
              light
            />
            <h1
              id="destinations-page-heading"
              className="font-serif text-balance mt-4"
              style={{ color: '#FAFCFB', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Where would you like to go?
            </h1>
            <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: '#EAF7FA88' }}>
              Forty-five extraordinary destinations across six continents, each one handpicked for its beauty, authenticity and adventure potential.
            </p>
          </div>
        </section>

        {/* Destinations grid */}
        <section className="py-20 px-5 lg:px-10" aria-label="Destination listings">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((dest, i) => (
                <DestinationCard key={dest.slug} destination={dest} priority={i < 3} />
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Can&apos;t find your destination? Tell us where you dream of going"
          description="We cover destinations far beyond this list. Get in touch and we will craft something extraordinary."
          primaryLabel="Plan My Trip"
          primaryHref="/plan-my-trip"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
