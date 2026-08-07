'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { Package } from '@/lib/data'

// Sidebar with booking CTA
export function BookingSidebar({ pkg }: { pkg: Package }) {
  const hasTieredPricing = pkg.earlyBirdPriceNGN && pkg.standardPriceNGN

  return (
    <aside
      className="w-full lg:w-[21rem] flex-shrink-0 lg:sticky lg:top-24 flex flex-col gap-5"
      aria-label="Pricing and booking"
    >
      {/* Pricing card */}
      <div
        className="rounded-2xl p-6 flex flex-col gap-5"
        style={{
          backgroundColor: '#FAFCFB',
          boxShadow: '0 8px 40px 0 rgba(7,59,92,0.12)',
          border: '1px solid #D9E8EA',
        }}
      >
        {/* Price display */}
        {hasTieredPricing ? (
          <div className="flex flex-col gap-3">
            <div
              className="flex items-center justify-between rounded-xl px-4 py-3"
              style={{ backgroundColor: '#3BC7C41A', border: '1px solid #3BC7C466' }}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: '#168AAD' }}>
                  Early Bird
                </p>
                <p className="font-serif text-2xl font-medium mt-0.5" style={{ color: '#073B5C' }}>
                  ₦{pkg.earlyBirdPriceNGN!.toLocaleString()}
                </p>
              </div>
              <span
                className="text-[10px] font-semibold px-2 py-1 rounded-full"
                style={{ backgroundColor: '#3BC7C4', color: '#073B5C' }}
              >
                SAVE
              </span>
            </div>
            <div
              className="flex items-center justify-between rounded-xl px-4 py-3"
              style={{ backgroundColor: '#F5F8FA', border: '1px solid #D9E8EA' }}
            >
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#4a6478' }}>
                  Standard
                </p>
                <p className="font-serif text-2xl font-medium mt-0.5" style={{ color: '#073B5C' }}>
                  ₦{pkg.standardPriceNGN!.toLocaleString()}
                </p>
              </div>
            </div>
            <p className="text-[11px]" style={{ color: '#4a647888' }}>
              Per person &bull; Flights included
            </p>
          </div>
        ) : (
          <div>
            <p className="text-xs font-medium" style={{ color: '#4a6478' }}>
              Starting from
            </p>
            <p className="font-serif mt-1" style={{ color: '#073B5C', fontSize: '2.25rem', lineHeight: 1.1 }}>
              ₦{pkg.startingPriceNGN.toLocaleString()}
            </p>
            <p className="text-xs mt-1" style={{ color: '#4a6478' }}>
              per person
            </p>
          </div>
        )}

        {/* Trip details */}
        <div
          className="flex flex-col gap-2.5 py-4"
          style={{ borderTop: '1px solid #D9E8EA', borderBottom: '1px solid #D9E8EA' }}
        >
          {[
            { label: 'Duration', value: `${pkg.days} days${pkg.nights ? ` / ${pkg.nights} nights` : ''}` },
            pkg.departure ? { label: 'Departure', value: pkg.departure } : null,
            pkg.travelDate ? { label: 'Travel date', value: pkg.travelDate } : null,
            { label: 'Group size', value: `${pkg.groupSize} travellers` },
            !pkg.travelDate ? { label: 'Best period', value: pkg.bestPeriod } : null,
          ]
            .filter(Boolean)
            .map(({ label, value }) => (
              <div key={label} className="flex items-start justify-between gap-3 text-sm">
                <span className="flex-shrink-0" style={{ color: '#4a6478' }}>{label}</span>
                <span className="font-medium text-right" style={{ color: '#073B5C' }}>
                  {value}
                </span>
              </div>
            ))}
        </div>

        {/* CTAs */}
        <Link
          href={`/plan-my-trip?package=${pkg.slug}`}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD] hover:bg-[#168AAD]"
          style={{ backgroundColor: '#073B5C', color: '#FAFCFB' }}
        >
          Enquire About This Trip
          <ArrowRight size={14} />
        </Link>
        <a
          href="https://wa.me/2349131351241"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD] hover:border-[#168AAD] hover:text-[#168AAD]"
          style={{ border: '1.5px solid #D9E8EA', color: '#073B5C' }}
        >
          <WhatsAppIcon />
          Chat with us on WhatsApp
        </a>

        <p className="text-[11px] text-center" style={{ color: '#4a647888' }}>
          No payment required to enquire. We respond within 24 hours.
        </p>
      </div>

      {/* Payment plan card */}
      {pkg.paymentPlan && pkg.paymentPlan.length > 0 && (
        <div
          className="rounded-2xl p-6"
          style={{
            backgroundColor: '#073B5C',
            boxShadow: '0 8px 40px 0 rgba(7,59,92,0.18)',
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: '#3BC7C4' }}>
            Flexible Payment Plan
          </p>
          <div className="flex flex-col gap-3">
            {pkg.paymentPlan.map((step, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{ backgroundColor: '#168AAD', color: '#FAFCFB' }}
                  >
                    {i + 1}
                  </div>
                  <span style={{ color: '#EAF7FA' }}>{step.label}</span>
                </div>
                <span className="font-semibold" style={{ color: '#3BC7C4' }}>{step.amount}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] mt-4" style={{ color: '#EAF7FA88' }}>
            Instalment schedule agreed on registration.
          </p>
        </div>
      )}

      {/* Suitable for */}
      {pkg.suitableFor && pkg.suitableFor.length > 0 && (
        <div
          className="rounded-2xl p-5"
          style={{ border: '1px solid #D9E8EA', backgroundColor: '#FAFCFB' }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#4a6478' }}>
            Suitable for
          </p>
          <div className="flex flex-wrap gap-2">
            {pkg.suitableFor.map((group) => (
              <span
                key={group}
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: '#EAF7FA', color: '#073B5C' }}
              >
                {group}
              </span>
            ))}
          </div>
        </div>
      )}
    </aside>
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

// FAQ Accordion
export function FaqAccordion({ faqs }: { faqs: Package['faqs'] }) {
  return (
    <Accordion defaultValue={[]} className="flex flex-col gap-2">
      {faqs.map((faq, idx) => (
        <AccordionItem
          key={idx}
          value={`faq-${idx}`}
          className="rounded-xl px-5"
          style={{ border: '1px solid #D9E8EA', backgroundColor: '#FAFCFB' }}
        >
          <AccordionTrigger
            className="text-sm font-medium py-4 text-left hover:no-underline"
            style={{ color: '#073B5C' }}
          >
            {faq.question}
          </AccordionTrigger>
          <AccordionContent
            className="text-sm leading-relaxed pb-4"
            style={{ color: '#4a6478' }}
          >
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

// Inclusions / Exclusions
export function InclusionsList({ included, excluded }: { included: string[]; excluded: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div>
        <h3
          className="text-sm font-semibold uppercase tracking-wide mb-4"
          style={{ color: '#168AAD' }}
        >
          Included
        </h3>
        <ul className="flex flex-col gap-2.5">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm"
              style={{ color: '#4a6478' }}
            >
              <CheckCircle2
                size={15}
                className="flex-shrink-0 mt-0.5"
                style={{ color: '#3BC7C4' }}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3
          className="text-sm font-semibold uppercase tracking-wide mb-4"
          style={{ color: '#4a6478' }}
        >
          Not included
        </h3>
        <ul className="flex flex-col gap-2.5">
          {excluded.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm"
              style={{ color: '#4a6478' }}
            >
              <XCircle
                size={15}
                className="flex-shrink-0 mt-0.5"
                style={{ color: '#D9E8EA' }}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Related package card (interactive)
export function RelatedPackageCard({ pkg }: { pkg: Package }) {
  return (
    <Link
      href={`/signature-escapes/${pkg.slug}`}
      className="group flex gap-5 p-4 rounded-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD]"
      style={{ border: '1px solid #D9E8EA', backgroundColor: '#FAFCFB' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px 0 rgba(7,59,92,0.1)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
      aria-label={`View ${pkg.title}`}
    >
      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover" sizes="80px" />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <p className="text-xs font-medium" style={{ color: '#168AAD' }}>
          {pkg.destination}
        </p>
        <p
          className="font-serif text-base leading-snug group-hover:text-[#168AAD] transition-colors"
          style={{ color: '#073B5C' }}
        >
          {pkg.title}
        </p>
        <p className="text-xs" style={{ color: '#4a6478' }}>
          {pkg.days} days · from ${pkg.startingPrice.toLocaleString()}
        </p>
      </div>
    </Link>
  )
}
