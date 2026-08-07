'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section
      className="py-20 px-5 lg:px-10"
      style={{ backgroundColor: '#EAF7FA' }}
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-[0.18em] uppercase mb-3 block" style={{ color: '#168AAD' }}>
          Travel inspiration
        </span>
        <h2
          id="newsletter-heading"
          className="font-serif text-balance mb-4"
          style={{ color: '#073B5C', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.2 }}
        >
          Inspiring escapes, direct to your inbox
        </h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: '#4a6478' }}>
          Curated destination guides, travel stories and early access to our latest signature escapes. No noise, just inspiration.
        </p>

        {submitted ? (
          <div
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl"
            style={{ backgroundColor: '#073B5C11' }}
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 size={20} style={{ color: '#168AAD' }} aria-hidden="true" />
            <p className="font-medium" style={{ color: '#073B5C' }}>
              You are on the list. Watch your inbox for something special.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-full text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#168AAD]"
              style={{ backgroundColor: '#FAFCFB', color: '#073B5C', border: '1.5px solid #D9E8EA' }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD]"
              style={{ backgroundColor: '#073B5C', color: '#FAFCFB' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#168AAD')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#073B5C')}
            >
              Subscribe
              <Send size={13} aria-hidden="true" />
            </button>
          </form>
        )}

        <p className="text-xs mt-4" style={{ color: '#4a647888' }}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
