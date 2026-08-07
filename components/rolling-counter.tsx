'use client'

import { useEffect, useRef, useState } from 'react'

interface RollingCounterProps {
  /** The final number to count up to */
  target: number
  /** Suffix appended after the number, e.g. "+" or "%" */
  suffix?: string
  /** Prefix prepended before the number, e.g. "$" */
  prefix?: string
  /** Duration of the animation in ms (default 1800) */
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export default function RollingCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 1800,
  className = '',
  style,
}: RollingCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
