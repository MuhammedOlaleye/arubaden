import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PackageCard from '@/components/package-card'
import CtaBanner from '@/components/cta-banner'
import Breadcrumbs from '@/components/breadcrumbs'
import { packages } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Signature Escapes — Arubaden',
  description: 'Browse our curated collection of signature travel packages. Each one thoughtfully designed for depth, beauty and genuine discovery.',
}

export default function SignatureEscapesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section
          className="relative flex items-end pt-40 pb-16 px-5 lg:px-10 overflow-hidden"
          aria-labelledby="escapes-page-heading"
        >
          <Image
            src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=2000&q=80&auto=format&fit=crop"
            alt="Luxury overwater bungalows reflecting on a calm tropical lagoon"
            fill
            priority
            className="object-cover object-top"
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
              items={[{ label: 'Home', href: '/' }, { label: 'Signature Escapes' }]}
              light
            />
            <h1
              id="escapes-page-heading"
              className="font-serif text-balance mt-4"
              style={{ color: '#FAFCFB', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Journeys designed to stay with you
            </h1>
            <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: '#EAF7FA88' }}>
              Every package in our collection has been crafted to go beyond the itinerary — delivering experiences that are personal, meaningful and genuinely memorable.
            </p>
          </div>
        </section>

        {/* Packages grid */}
        <section className="py-20 px-5 lg:px-10" aria-label="Package listings">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} priority={i < 3} />
            ))}
          </div>
        </section>

        <CtaBanner
          eyebrow="Something more bespoke?"
          title="We can build a package around you"
          description="If you do not see exactly what you are looking for, our designers will create it from scratch."
          primaryLabel="Plan My Custom Trip"
          primaryHref="/plan-my-trip"
          secondaryLabel="Chat with us on WhatsApp"
          secondaryHref="https://wa.me/2349131351241"
          secondaryExternal
        />
      </main>
      <Footer />
    </>
  )
}
