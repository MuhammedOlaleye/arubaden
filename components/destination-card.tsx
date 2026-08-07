import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Destination } from '@/lib/data'

interface DestinationCardProps {
  destination: Destination
  priority?: boolean
}

export default function DestinationCard({ destination, priority = false }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative flex flex-col justify-end rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
      style={{ aspectRatio: '3/2' }}
      aria-label={`Explore ${destination.name}`}
    >
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority={priority}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(to top, rgba(7,59,92,0.75) 0%, rgba(7,59,92,0.15) 55%, transparent 100%)',
        }}
      />
      {/* Content */}
      <div className="relative p-5">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase mb-1" style={{ color: '#3BC7C4' }}>
          {destination.country}
        </p>
        <h3 className="font-serif text-xl leading-snug" style={{ color: '#FAFCFB' }}>
          {destination.name}
        </h3>
        <p className="text-sm mt-1 leading-relaxed line-clamp-2" style={{ color: '#EAF7FA99' }}>
          {destination.tagline}
        </p>
        <div
          className="flex items-center gap-1 mt-3 text-xs font-medium transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:gap-2"
          style={{ color: '#3BC7C4' }}
        >
          <span>Explore</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  )
}
