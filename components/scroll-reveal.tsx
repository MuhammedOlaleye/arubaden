'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  /** Stagger delay in ms, typically index * step */
  delay?: number
  /** Animation variant */
  variant?: 'slide-up' | 'fade-scale'
  className?: string
}

/**
 * Reveals children with a one-time entrance animation when they scroll into view.
 * - "slide-up": rises from below while fading in (used for Signature Escape cards)
 * - "fade-scale": gently scales up while fading in (used for Destination cards)
 */
export default function ScrollReveal({
  children,
  delay = 0,
  variant = 'slide-up',
  className = '',
}: ScrollRevealProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenTransform = variant === 'slide-up' ? 'translateY(28px)' : 'translateY(10px) scale(0.94)'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : hiddenTransform,
        transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
