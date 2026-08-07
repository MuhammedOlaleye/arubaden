'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import JournalCard from '@/components/journal-card'
import SectionHeading from '@/components/section-heading'
import { journalPosts } from '@/lib/data'

export default function JournalSection() {
  return (
    <section className="py-24 px-5 lg:px-10" aria-labelledby="journal-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Travel Journal"
            title="Stories from the road"
            description="Destination guides, travel tips and stories from travellers who have ventured further."
            align="left"
          />
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD] rounded-sm"
            style={{ color: '#168AAD' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#073B5C')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#168AAD')}
          >
            All articles
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {journalPosts.map((post, i) => (
            <JournalCard key={post.slug} post={post} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
