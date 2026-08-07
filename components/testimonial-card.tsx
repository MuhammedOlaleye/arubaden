import { Star } from 'lucide-react'
import type { Testimonial } from '@/lib/data'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col gap-5 p-7 rounded-2xl"
      style={{ backgroundColor: '#FAFCFB', boxShadow: '0 4px 24px 0 rgba(7,59,92,0.08)' }}
    >
      {/* Stars */}
      <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`} role="img">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            fill="#3BC7C4"
            strokeWidth={0}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-[15px] leading-relaxed italic flex-1" style={{ color: '#102A3A' }}>
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #D9E8EA' }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-serif text-sm font-medium"
          style={{ backgroundColor: '#EAF7FA', color: '#168AAD' }}
          aria-hidden="true"
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: '#073B5C' }}>
            {testimonial.name}
          </p>
          <p className="text-xs" style={{ color: '#4a6478' }}>
            {testimonial.location} · {testimonial.trip}
          </p>
        </div>
      </div>
    </div>
  )
}
