'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Signature Escapes', href: '/signature-escapes' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#073B5C]/97 backdrop-blur-md shadow-nav py-3'
            : 'bg-transparent py-5',
        )}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4] rounded-sm"
            aria-label="Arubaden — Home"
          >
            <span className="font-serif text-2xl tracking-tight text-warm-white" style={{ color: '#FAFCFB' }}>
              Arubaden
            </span>
            <span
              className="hidden sm:block text-[10px] tracking-[0.2em] uppercase font-sans font-medium mt-0.5"
              style={{ color: '#3BC7C4' }}
            >
              Travel
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4] rounded-sm"
                style={{ color: '#EAF7FA' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#3BC7C4')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#EAF7FA')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/plan-my-trip"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-[14px] font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
              style={{
                backgroundColor: '#FAFCFB',
                color: '#073B5C',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#3BC7C4'
                el.style.color = '#FAFCFB'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#FAFCFB'
                el.style.color = '#073B5C'
              }}
            >
              Book Your Next Escape
            </Link>

            <button
              className="lg:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
              style={{ color: '#FAFCFB' }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'visible' : 'invisible',
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-[#102A3A]/80 backdrop-blur-sm transition-opacity duration-300',
            mobileOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-72 transition-transform duration-300 ease-in-out flex flex-col',
            mobileOpen ? 'translate-x-0' : 'translate-x-full',
          )}
          style={{ backgroundColor: '#073B5C' }}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: '#168AAD33' }}>
            <span className="font-serif text-xl" style={{ color: '#FAFCFB' }}>Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
              style={{ color: '#EAF7FA' }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-3 rounded-xl text-[15px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
                style={{ color: '#EAF7FA' }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = '#168AAD22'
                  el.style.color = '#3BC7C4'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = 'transparent'
                  el.style.color = '#EAF7FA'
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-6 pb-8">
            <Link
              href="/plan-my-trip"
              className="block w-full text-center px-5 py-3 rounded-full text-[14px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BC7C4]"
              style={{ backgroundColor: '#3BC7C4', color: '#073B5C' }}
              onClick={() => setMobileOpen(false)}
            >
              Book Your Next Escape
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
