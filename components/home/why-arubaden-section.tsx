import { Compass, Users, Shield, Headphones } from 'lucide-react'
import SectionHeading from '@/components/section-heading'

const benefits = [
  {
    icon: Compass,
    title: 'Curated, not generic',
    description:
      'Every itinerary is built from scratch around your preferences, travel style and group size — never copy-pasted from a catalogue.',
  },
  {
    icon: Users,
    title: 'Personal from start to finish',
    description:
      'You work directly with an experienced travel designer who understands your vision and brings it to life with genuine care.',
  },
  {
    icon: Shield,
    title: 'Trusted partners worldwide',
    description:
      'Our network spans handpicked hotels, specialist guides and local experts — all vetted for quality, authenticity and safety.',
  },
  {
    icon: Headphones,
    title: 'Support wherever you are',
    description:
      'From planning to arrival and beyond, our team is available whenever you need us — before, during and after your journey.',
  },
]

export default function WhyArubadanSection() {
  return (
    <section
      className="py-24 px-5 lg:px-10"
      style={{ backgroundColor: '#073B5C' }}
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why travel with us"
          title="More than a travel company"
          description="We are your dedicated travel partner — obsessed with the details that transform a good trip into an unforgettable one."
          light
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#168AAD22' }}
                >
                  <Icon size={20} style={{ color: '#3BC7C4' }} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="font-serif text-lg mb-2"
                    style={{ color: '#FAFCFB' }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#EAF7FA77' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
