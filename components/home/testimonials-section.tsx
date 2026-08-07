import SectionHeading from '@/components/section-heading'
import TestimonialCard from '@/components/testimonial-card'
import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 px-5 lg:px-10"
      style={{ backgroundColor: '#EAF7FA' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Traveller stories"
          title="Real journeys, real experiences"
          description="Do not just take our word for it — hear from the travellers who have experienced Arubaden for themselves."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
