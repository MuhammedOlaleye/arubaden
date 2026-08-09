'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import DestinationCard from '@/components/destination-card'
import SectionHeading from '@/components/section-heading'
import ScrollReveal from '@/components/scroll-reveal'
import { destinations } from '@/lib/data'

export default function DestinationsSection() {
  const featured = destinations.filter((d) => d.featured)

  return (
    <section className="py-24 px-5 lg:px-10" aria-labelledby="destinations-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Destinations"
            title="Where would you like to go?"
            description="From island paradises to cultural capitals, discover handpicked destinations waiting to be explored."
            align="left"
          />
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD] rounded-sm"
            style={{ color: '#168AAD' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#073B5C')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#168AAD')}
          >
            All destinations
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Responsive mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((dest, i) => (
            <ScrollReveal key={dest.slug} variant="fade-scale" delay={i * 100}>
              <DestinationCard destination={dest} priority={i === 0} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
