'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PackageCard from '@/components/package-card'
import SectionHeading from '@/components/section-heading'
import { packages } from '@/lib/data'

export default function FeaturedPackagesSection() {
  const featured = packages.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-24 px-5 lg:px-10" aria-labelledby="packages-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Signature Escapes"
            title="Journeys designed to stay with you"
            description="Thoughtfully curated packages that go beyond the brochure — each one crafted for depth, beauty and genuine discovery."
            align="left"
          />
          <Link
            href="/signature-escapes"
            className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD] rounded-sm"
            style={{ color: '#168AAD' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#073B5C')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#168AAD')}
          >
            View all packages
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
