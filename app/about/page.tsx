import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Breadcrumbs from '@/components/breadcrumbs'
import CtaBanner from '@/components/cta-banner'
import SectionHeading from '@/components/section-heading'
import RollingCounter from '@/components/rolling-counter'

export const metadata: Metadata = {
  title: 'About Us — Arubaden',
  description:
    'Arubaden was founded on a conviction that travel should be personal, purposeful and life-changing. Discover our story and our values.',
}

const values = [
  {
    title: 'Curation over quantity',
    description:
      'We partner with a select group of destinations, hotels and guides — chosen not for convenience but for excellence. Every recommendation is one we would make for ourselves.',
  },
  {
    title: 'People over process',
    description:
      'You work with a real travel designer from your first enquiry to the moment you return home. No chatbots, no call centres, no impersonal processes.',
  },
  {
    title: 'Depth over breadth',
    description:
      'We believe in taking fewer, more meaningful journeys rather than ticking off destinations. Our itineraries are designed to immerse you, not just deliver you.',
  },
  {
    title: 'Transparency always',
    description:
      'Our pricing is clear, our relationships with suppliers are disclosed, and our proposals come with no hidden add-ons. You know exactly what you are getting.',
  },
]

const stats = [
  { target: 500, suffix: '+', label: 'travellers served' },
  { target: 15, suffix: '+', label: 'destinations' },
  { target: 5, suffix: '+', label: 'years of expertise' },
  { target: 98, suffix: '%', label: 'would travel with us again' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative flex items-end pt-40 pb-16 px-5 lg:px-10 overflow-hidden"
          aria-labelledby="about-heading"
          style={{ minHeight: '50vh' }}
        >
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=2000&q=80&auto=format&fit=crop"
            alt="Traveller sitting at the edge of a cliff overlooking a vast ocean at sunset"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(7,59,92,0.80) 0%, rgba(7,59,92,0.30) 60%, transparent 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto w-full">
            <Breadcrumbs
              items={[{ label: 'Home', href: '/' }, { label: 'About' }]}
              light
            />
            <h1
              id="about-heading"
              className="font-serif text-balance mt-4"
              style={{ color: '#FAFCFB', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              We believe travel should change you, not just move you
            </h1>
          </div>
        </section>

        {/* Story section */}
        <section className="py-24 px-5 lg:px-10" aria-labelledby="story-heading">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 block" style={{ color: '#168AAD' }}>
                Our story
              </span>
              <h2
                id="story-heading"
                className="font-serif text-balance mb-6"
                style={{ color: '#073B5C', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
              >
                Born from a passion for extraordinary places
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: '#4a6478' }}>
                <p>
                  Arubaden was born from a simple but powerful conviction: that every traveller deserves an experience designed specifically for them — not a recycled itinerary, not a rushed group tour, but a journey that reflects who they are and what truly matters to them.
                </p>
                <p>
                  We started with a handful of handpicked destinations and an unwavering commitment to getting every single detail right — from the moment of the first conversation to the final transfer home. That same commitment drives everything we do today.
                </p>
                <p>
                  We are not a booking platform. We are not a tour operator. We are travel designers — and that distinction matters deeply to us and to every traveller who has trusted us with their journey.
                </p>
                <p>
                  Whether it is a romantic island escape to Zanzibar, a cultural discovery across Cape Verde or a family adventure somewhere entirely unexpected, every Arubaden experience is crafted around you — your pace, your interests and your vision of what a truly memorable trip looks like.
                </p>
                <p>
                  We listen before we plan. We curate before we confirm. And we stay with you long after you return home.
                </p>
              </div>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative rounded-2xl overflow-hidden row-span-2"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop"
                  alt="Pristine turquoise lagoon from above"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80&auto=format&fit=crop"
                  alt="Sal Island beach, Cape Verde"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <Image
                  src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80&auto=format&fit=crop"
                  alt="Zanzibar ocean coast at golden hour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rolling stats banner */}
        <section
          className="py-16 px-5 lg:px-10"
          style={{ backgroundColor: '#073B5C' }}
          aria-label="Company statistics"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1">
                <RollingCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="font-serif"
                  style={{ color: '#3BC7C4', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                />
                <span className="text-sm" style={{ color: '#EAF7FA77' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section
          className="py-24 px-5 lg:px-10"
          style={{ backgroundColor: '#EAF7FA' }}
          aria-labelledby="values-heading"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="What we stand for"
              title="Our values"
              description="The principles that guide every decision we make — from who we partner with to how we plan your trip."
              className="mb-16"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex flex-col gap-4 p-8 rounded-2xl"
                  style={{ backgroundColor: '#FAFCFB', boxShadow: '0 4px 24px 0 rgba(7,59,92,0.06)' }}
                >
                  <h3 className="font-serif text-xl" style={{ color: '#073B5C' }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4a6478' }}>
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Responsible travel */}
        <section
          className="py-24 px-5 lg:px-10"
          style={{ backgroundColor: '#073B5C' }}
          aria-labelledby="responsible-heading"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 block" style={{ color: '#3BC7C4' }}>
                Responsible travel
              </span>
              <h2
                id="responsible-heading"
                className="font-serif text-balance mb-6"
                style={{ color: '#FAFCFB', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
              >
                We travel with care for the places we love
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: '#EAF7FA80' }}>
                <p>
                  Every destination we recommend has been assessed for its community impact, environmental practices and cultural sensitivity. We actively favour smaller, locally-owned properties over large international chains.
                </p>
                <p>
                  We contribute a portion of every booking to destination-specific conservation and community projects. We believe the places we love deserve to be here for generations to come.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop"
                alt="Pristine tropical coastline viewed from above"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <CtaBanner
          eyebrow="Ready to get started?"
          title="Your next chapter begins with a conversation"
          description="Let our designers craft a journey that is unmistakably yours."
          primaryLabel="Plan My Trip"
          primaryHref="/plan-my-trip"
          secondaryLabel="Explore our escapes"
          secondaryHref="/signature-escapes"
        />
      </main>
      <Footer />
    </>
  )
}
