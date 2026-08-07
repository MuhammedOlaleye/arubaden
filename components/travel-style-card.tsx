import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface TravelStyleCardProps {
  slug: string
  title: string
  description: string
  image: string
  priority?: boolean
}

export default function TravelStyleCard({
  slug,
  title,
  description,
  image,
  priority = false,
}: TravelStyleCardProps) {
  return (
    <Link
      href={`/travel-styles/${slug}`}
      className="group relative flex flex-col justify-end rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
      style={{ aspectRatio: '4/5' }}
      aria-label={`Explore ${title}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority={priority}
      />
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(to top, rgba(7,59,92,0.88) 0%, rgba(7,59,92,0.3) 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative p-5">
        <h3 className="font-serif text-lg leading-snug" style={{ color: '#FAFCFB' }}>
          {title}
        </h3>
        <p className="text-xs mt-1.5 leading-relaxed line-clamp-2" style={{ color: '#EAF7FA88' }}>
          {description}
        </p>
        <div
          className="flex items-center gap-1 mt-3 text-xs font-medium transition-all duration-200 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:gap-2"
          style={{ color: '#3BC7C4' }}
        >
          <span>Explore</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  )
}
