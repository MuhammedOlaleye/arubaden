'use client'

import RollingCounter from '@/components/rolling-counter'

const stats = [
  { target: 500, suffix: '+', label: 'travellers served' },
  { target: 15, suffix: '+', label: 'destinations' },
  { target: 5, suffix: '+', label: 'years of expertise' },
  { target: 98, suffix: '%', label: 'would travel with us again' },
]

export default function StatsStrip() {
  return (
    <section
      className="py-14 px-5 lg:px-10"
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
  )
}
