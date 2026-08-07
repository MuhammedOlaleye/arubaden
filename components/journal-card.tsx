'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { JournalPost } from '@/lib/data'

interface JournalCardProps {
  post: JournalPost
  priority?: boolean
}

export default function JournalCard({ post, priority = false }: JournalCardProps) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD]"
      style={{ backgroundColor: '#FAFCFB', boxShadow: '0 4px 24px 0 rgba(7,59,92,0.08)' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px 0 rgba(7,59,92,0.14)'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px 0 rgba(7,59,92,0.08)'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
      }}
      aria-label={`Read: ${post.title}`}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center gap-3 text-xs" style={{ color: '#4a6478' }}>
          <span
            className="px-2.5 py-1 rounded-full font-medium"
            style={{ backgroundColor: '#EAF7FA', color: '#168AAD' }}
          >
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
        <h3
          className="font-serif leading-snug text-balance transition-colors duration-200 group-hover:text-[#168AAD]"
          style={{ color: '#073B5C', fontSize: '1.15rem' }}
        >
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: '#4a6478' }}>
          {post.excerpt}
        </p>
        <div
          className="flex items-center gap-1 text-sm font-medium mt-1 transition-all duration-200 group-hover:gap-2"
          style={{ color: '#168AAD' }}
        >
          <span>Read article</span>
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
