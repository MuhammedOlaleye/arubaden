import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Breadcrumbs from '@/components/breadcrumbs'
import PackageCard from '@/components/package-card'
import CtaBanner from '@/components/cta-banner'
import { destinations, packages } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const dest = destinations.find((d) => d.slug === slug)
  if (!dest) return {}
  return {
    title: `${dest.name} — Arubaden`,
    description: dest.description,
  }
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params
  const dest = destinations.find((d) => d.slug === slug)
  if (!dest) notFound()

  const relatedPackages = packages.filter((p) => p.destinationSlug === slug)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative flex items-end pt-36 pb-14 px-5 lg:px-10 overflow-hidden"
          aria-labelledby="dest-heading"
          style={{ minHeight: '60vh' }}
        >
          <Image
            src={dest.image}
            alt={`${dest.name}, ${dest.country}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(7,59,92,0.82) 0%, rgba(7,59,92,0.25) 60%, transparent 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto w-full">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Destinations', href: '/destinations' },
                { label: dest.name },
              ]}
              light
            />
            <div className="flex items-center gap-2 mt-4">
              <MapPin size={14} style={{ color: '#3BC7C4' }} aria-hidden="true" />
              <span className="text-sm" style={{ color: '#3BC7C4' }}>
                {dest.country}
              </span>
            </div>
            <h1
              id="dest-heading"
              className="font-serif text-balance mt-2"
              style={{ color: '#FAFCFB', fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 1.05 }}
            >
              {dest.name}
            </h1>
            <p
              className="mt-3 text-lg font-serif italic"
              style={{ color: '#3BC7C4' }}
            >
              {dest.tagline}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 px-5 lg:px-10" aria-labelledby="dest-overview-heading">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 block" style={{ color: '#168AAD' }}>
                About {dest.name}
              </span>
              <h2
                id="dest-overview-heading"
                className="font-serif text-balance mb-5"
                style={{ color: '#073B5C', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.15 }}
              >
                Why {dest.name}?
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#4a6478' }}>
                {dest.description}
              </p>
              <Link
                href="/plan-my-trip"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD] hover:bg-[#168AAD]"
                style={{ backgroundColor: '#073B5C', color: '#FAFCFB' }}
              >
                Plan a trip here
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Highlights */}
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-wide mb-5"
                style={{ color: '#168AAD' }}
              >
                Destination highlights
              </h3>
              <ul className="flex flex-col gap-3">
                {dest.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: '#3BC7C4' }}
                      aria-hidden="true"
                    />
                    <span className="text-base" style={{ color: '#4a6478' }}>
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Travel styles */}
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: '#168AAD' }}>
                  Great for
                </p>
                <div className="flex flex-wrap gap-2">
                  {dest.travelStyles.map((style) => (
                    <span
                      key={style}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#EAF7FA', color: '#073B5C' }}
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages for this destination */}
        {relatedPackages.length > 0 && (
          <section
            className="py-20 px-5 lg:px-10"
            style={{ backgroundColor: '#EAF7FA' }}
            aria-labelledby="dest-packages-heading"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="text-xs font-semibold tracking-[0.18em] uppercase mb-3 block" style={{ color: '#168AAD' }}>
                    Curated packages
                  </span>
                  <h2
                    id="dest-packages-heading"
                    className="font-serif"
                    style={{ color: '#073B5C', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)' }}
                  >
                    {dest.name} escapes
                  </h2>
                </div>
                <Link
                  href="/signature-escapes"
                  className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD] rounded-sm hover:text-[#073B5C]"
                  style={{ color: '#168AAD' }}
                >
                  View all packages
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {relatedPackages.map((pkg, i) => (
                  <PackageCard key={pkg.slug} pkg={pkg} priority={i === 0} />
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBanner
          eyebrow={`Ready to visit ${dest.name}?`}
          title={`Let us plan your perfect ${dest.name} journey`}
          description="Share your vision with our specialists and we will craft something extraordinary."
          primaryLabel="Start Planning"
          primaryHref="/plan-my-trip"
          secondaryLabel="View all packages"
          secondaryHref="/signature-escapes"
        />
      </main>
      <Footer />
    </>
  )
}
