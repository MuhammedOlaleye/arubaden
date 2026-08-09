import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Clock, Shield, Star } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Plan My Trip — Arubaden',
  description:
    'Tell us about your dream journey and our travel designers will craft a personalised itinerary just for you.',
}

const sidebarFeatures = [
  {
    icon: Clock,
    title: '24-hour response',
    description: 'A travel designer will reach out within one business day to begin your itinerary.',
  },
  {
    icon: Shield,
    title: 'No obligation',
    description: 'Submitting an enquiry is completely free. You only commit when you are ready.',
  },
  {
    icon: Star,
    title: 'Fully bespoke',
    description: 'Every detail — flights, hotels, activities — is arranged around your preferences.',
  },
  {
    icon: MapPin,
    title: 'Expert knowledge',
    description: 'Our designers have first-hand experience of every destination we offer.',
  },
]

export default function PlanMyTripPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section
          className="relative flex items-end pt-36 pb-14 px-5 lg:px-10 overflow-hidden"
          aria-labelledby="plan-page-heading"
          style={{ minHeight: '44vh' }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/janis-oppliger-dRHE-XF7wls-unsplash-8N7RITKsudolh3p2HdwzQ1IT4gKHVR.jpg"
            alt="Travellers studying a sightseeing map together while planning their route"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(7,59,92,0.80) 0%, rgba(7,59,92,0.30) 55%, rgba(7,59,92,0.10) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto w-full">
            <Breadcrumbs
              items={[{ label: 'Home', href: '/' }, { label: 'Plan My Trip' }]}
              light
            />
            <h1
              id="plan-page-heading"
              className="font-serif text-balance mt-4"
              style={{ color: '#FAFCFB', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Tell us about your dream journey
            </h1>
            <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: '#EAF7FA88' }}>
              The more you share, the better we can craft an itinerary that is genuinely tailored to you.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 px-5 lg:px-10" aria-label="Trip planning form">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-16 items-start">

            {/* Makeform embed */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 4px 32px 0 rgba(7,59,92,0.10)',
                  border: '1px solid #D9E8EA',
                  minHeight: '700px',
                }}
              >
                <iframe
                  src="https://makeform.ai/f/Z4LXWikR"
                  title="Plan my trip enquiry form"
                  width="100%"
                  style={{ minHeight: '700px', border: 'none', display: 'block' }}
                  loading="lazy"
                  allow="clipboard-write"
                />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-8 lg:sticky lg:top-24" aria-label="Why plan with Arubaden">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: '#168AAD' }}
                >
                  Why plan with us
                </p>
                <h2
                  className="font-serif text-2xl text-balance leading-snug"
                  style={{ color: '#073B5C' }}
                >
                  We handle everything, so you only think about the experience
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {sidebarFeatures.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#EAF7FA' }}
                    >
                      <Icon size={18} style={{ color: '#168AAD' }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: '#073B5C' }}>
                        {title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: '#4a6478' }}>
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp nudge */}
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: '#073B5C' }}
              >
                <p className="font-semibold text-sm mb-1" style={{ color: '#3BC7C4' }}>
                  Prefer to chat directly?
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#EAF7FA88' }}>
                  Message us on WhatsApp and we will get back to you straight away.
                </p>
                <a
                  href="https://wa.me/2349131351241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4] hover:bg-[#3BC7C4] hover:text-[#073B5C]"
                  style={{ backgroundColor: '#168AAD', color: '#FAFCFB' }}
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.556 4.118 1.528 5.847L.054 23.454a.5.5 0 0 0 .492.593.498.498 0 0 0 .13-.018l5.788-1.519A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 0 1-5.003-1.368l-.36-.214-3.716.975.991-3.625-.235-.373A9.787 9.787 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.431 0 9.818 4.388 9.818 9.818 0 5.431-4.387 9.818-9.818 9.818z"/>
    </svg>
  )
}
