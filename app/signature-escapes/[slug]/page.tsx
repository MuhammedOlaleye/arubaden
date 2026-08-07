import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, Users, Clock, MapPin, CheckCircle2 } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Breadcrumbs from '@/components/breadcrumbs'
import { BookingSidebar, FaqAccordion, InclusionsList, RelatedPackageCard } from './package-client'
import { packages } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)
  if (!pkg) return {}
  return {
    title: `${pkg.title} — Arubaden`,
    description: pkg.shortDescription,
  }
}

export default async function PackagePage({ params }: Props) {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)
  if (!pkg) notFound()

  const related = packages
    .filter((p) => p.slug !== slug && p.destinationSlug === pkg.destinationSlug)
    .slice(0, 2)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative flex items-end pt-36 pb-14 px-5 lg:px-10 overflow-hidden"
          aria-labelledby="pkg-heading"
          style={{ minHeight: '55vh' }}
        >
          <Image
            src={pkg.image}
            alt={`${pkg.title} — ${pkg.destination}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(7,59,92,0.80) 0%, rgba(7,59,92,0.25) 65%, transparent 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto w-full">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Signature Escapes', href: '/signature-escapes' },
                { label: pkg.title },
              ]}
              light
            />
            {pkg.badge && (
              <span
                className="inline-block mt-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase"
                style={{ backgroundColor: '#3BC7C4', color: '#073B5C' }}
              >
                {pkg.badge}
              </span>
            )}
            <h1
              id="pkg-heading"
              className="font-serif text-balance mt-3"
              style={{
                color: '#FAFCFB',
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                lineHeight: 1.1,
              }}
            >
              {pkg.title}
            </h1>
            <div className="flex flex-wrap gap-x-5 gap-y-2.5 mt-5">
              {[
                { icon: MapPin, label: `${pkg.destination}, ${pkg.country}` },
                { icon: Clock, label: `${pkg.days} days${pkg.nights ? ` / ${pkg.nights} nights` : ''}` },
                { icon: Users, label: `${pkg.groupSize} travellers` },
                pkg.departure ? { icon: Calendar, label: `Departs: ${pkg.departure}` } : null,
                pkg.travelDate ? { icon: Calendar, label: `Travel date: ${pkg.travelDate}` } : null,
                !pkg.travelDate ? { icon: Calendar, label: `Best: ${pkg.bestPeriod}` } : null,
              ]
                .filter(Boolean)
                .map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-sm"
                    style={{ color: '#EAF7FA' }}
                  >
                    <Icon size={14} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Main content + sticky sidebar */}
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 items-start">
            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col gap-14">
              {/* Overview */}
              <section aria-labelledby="overview-heading">
                <h2
                  id="overview-heading"
                  className="font-serif text-2xl mb-5"
                  style={{ color: '#073B5C' }}
                >
                  Overview
                </h2>
                <p className="text-base leading-relaxed" style={{ color: '#4a6478' }}>
                  {pkg.overview}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8">
                  {pkg.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-2.5 p-4 rounded-xl"
                      style={{ backgroundColor: '#EAF7FA' }}
                    >
                      <CheckCircle2
                        size={15}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: '#168AAD' }}
                        aria-hidden="true"
                      />
                      <span className="text-xs leading-snug" style={{ color: '#073B5C' }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Itinerary */}
              <section aria-labelledby="itinerary-heading">
                <h2
                  id="itinerary-heading"
                  className="font-serif text-2xl mb-6"
                  style={{ color: '#073B5C' }}
                >
                  Day-by-day itinerary
                </h2>
                <div className="flex flex-col gap-0">
                  {pkg.itinerary.map((item, idx) => (
                    <div key={item.day} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                          style={{ backgroundColor: '#073B5C', color: '#FAFCFB' }}
                          aria-label={`Day ${item.day}`}
                        >
                          {item.day}
                        </div>
                        {idx < pkg.itinerary.length - 1 && (
                          <div
                            className="w-px flex-1 my-2"
                            style={{ backgroundColor: '#D9E8EA' }}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div className="pb-8 flex-1">
                        <h3
                          className="font-serif text-lg mb-1"
                          style={{ color: '#073B5C' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#4a6478' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Included / Excluded — Client Component */}
              <section aria-labelledby="inclusions-heading">
                <h2
                  id="inclusions-heading"
                  className="font-serif text-2xl mb-6"
                  style={{ color: '#073B5C' }}
                >
                  What&apos;s included
                </h2>
                <InclusionsList included={pkg.included} excluded={pkg.excluded} />
              </section>

              {/* Accommodation */}
              <section aria-labelledby="accommodation-heading">
                <h2
                  id="accommodation-heading"
                  className="font-serif text-2xl mb-4"
                  style={{ color: '#073B5C' }}
                >
                  Accommodation
                </h2>
                <p className="text-base leading-relaxed" style={{ color: '#4a6478' }}>
                  {pkg.accommodation}
                </p>
              </section>

              {/* FAQs — Client Component */}
              <section aria-labelledby="faq-heading">
                <h2
                  id="faq-heading"
                  className="font-serif text-2xl mb-6"
                  style={{ color: '#073B5C' }}
                >
                  Frequently asked questions
                </h2>
                <FaqAccordion faqs={pkg.faqs} />
              </section>
            </div>

            {/* Sticky pricing sidebar — Client Component */}
            <BookingSidebar pkg={pkg} />
          </div>

          {/* Related trips */}
          {related.length > 0 && (
            <section className="mt-20" aria-labelledby="related-heading">
              <h2
                id="related-heading"
                className="font-serif text-2xl mb-8"
                style={{ color: '#073B5C' }}
              >
                You might also enjoy
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                {related.map((p) => (
                  <RelatedPackageCard key={p.slug} pkg={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
