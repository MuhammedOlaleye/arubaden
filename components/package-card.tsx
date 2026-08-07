'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Users, ArrowRight } from 'lucide-react'
import type { Package } from '@/lib/data'

interface PackageCardProps {
  pkg: Package
  priority?: boolean
}

const badgeColors: Record<string, { bg: string; text: string }> = {
  Popular: { bg: '#168AAD', text: '#FAFCFB' },
  New: { bg: '#3BC7C4', text: '#073B5C' },
  'Limited Spaces': { bg: '#073B5C', text: '#FAFCFB' },
  'Coming Soon': { bg: '#E8DED0', text: '#073B5C' },
}

const sharedCardClass =
  'group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD]'
const sharedCardStyle = {
  backgroundColor: '#FAFCFB',
  boxShadow: '0 4px 24px 0 rgba(7,59,92,0.08)',
}

function CardBody({ pkg, priority }: { pkg: Package; priority: boolean }) {
  const badge = pkg.badge ? badgeColors[pkg.badge] : null

  return (
    <>
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
        <Image
          src={pkg.image}
          alt={`${pkg.destination} — ${pkg.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        {badge && (
          <span
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase"
            style={{ backgroundColor: badge.bg, color: badge.text }}
          >
            {pkg.badge}
          </span>
        )}
        <div
          className="absolute bottom-4 left-4 px-2.5 py-1 rounded-full text-[11px] font-medium"
          style={{ backgroundColor: '#073B5C99', color: '#EAF7FA', backdropFilter: 'blur(4px)' }}
        >
          {pkg.travelStyle}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <p className="text-xs font-medium tracking-wide uppercase mb-1" style={{ color: '#168AAD' }}>
            {pkg.destination}
            {pkg.country && pkg.country !== pkg.destination && (
              <span className="ml-1.5 font-normal" style={{ color: '#168AAD88' }}>
                · {pkg.country}
              </span>
            )}
          </p>
          <h3
            className="font-serif leading-snug text-balance"
            style={{ color: '#073B5C', fontSize: 'clamp(1.15rem, 2vw, 1.35rem)' }}
          >
            {pkg.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: '#4a6478' }}>
          {pkg.shortDescription}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-3" style={{ borderTop: '1px solid #D9E8EA' }}>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: '#4a6478' }}>
            <Calendar size={13} />
            <span>{pkg.days} days</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: '#4a6478' }}>
            <Users size={13} />
            <span>{pkg.groupSize} pax</span>
          </div>
          <div className="ml-auto text-right">
            <div>
              <span className="text-xs" style={{ color: '#4a6478' }}>from </span>
              <span className="font-semibold text-sm" style={{ color: '#073B5C' }}>
                ${pkg.startingPrice.toLocaleString()}
              </span>
            </div>
            {pkg.startingPriceNGN && (
              <div className="text-[10px]" style={{ color: '#168AAD' }}>
                ≈ ₦{pkg.startingPriceNGN.toLocaleString()}
              </div>
            )}
          </div>
        </div>

        {pkg.comingSoon ? (
          <Link
            href={`/plan-my-trip?package=${pkg.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD]"
            style={{ backgroundColor: '#EAF7FA', color: '#073B5C', border: '1px solid #D9E8EA' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#168AAD'
              el.style.color = '#FAFCFB'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#EAF7FA'
              el.style.color = '#073B5C'
            }}
            aria-label={`Register your interest in ${pkg.title}`}
          >
            Register your interest
            <ArrowRight size={12} />
          </Link>
        ) : (
          <div
            className="flex items-center gap-1 text-sm font-medium transition-all duration-200 group-hover:gap-2"
            style={{ color: '#168AAD' }}
          >
            <span>View details</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </>
  )
}

export default function PackageCard({ pkg, priority = false }: PackageCardProps) {
  if (pkg.comingSoon) {
    return (
      <div
        className={`${sharedCardClass} cursor-default`}
        style={sharedCardStyle}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px 0 rgba(7,59,92,0.14)'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = sharedCardStyle.boxShadow
        }}
      >
        <CardBody pkg={pkg} priority={priority} />
      </div>
    )
  }

  return (
    <Link
      href={`/signature-escapes/${pkg.slug}`}
      aria-label={`View ${pkg.title} package`}
      className={`${sharedCardClass} cursor-pointer hover:-translate-y-[3px]`}
      style={sharedCardStyle}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px 0 rgba(7,59,92,0.14)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = sharedCardStyle.boxShadow
      }}
    >
      <CardBody pkg={pkg} priority={priority} />
    </Link>
  )
}
