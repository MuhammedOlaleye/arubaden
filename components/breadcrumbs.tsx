'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  light?: boolean
}

export default function Breadcrumbs({ items, light = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-xs flex-wrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={idx} className="flex items-center gap-1">
              {idx > 0 && (
                <ChevronRight
                  size={12}
                  aria-hidden="true"
                  style={{ color: light ? '#EAF7FA44' : '#9DBFCE' }}
                />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3BC7C4] rounded-sm"
                  style={{ color: light ? '#EAF7FA88' : '#4a6478' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = light ? '#FAFCFB' : '#168AAD')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = light ? '#EAF7FA88' : '#4a6478')}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  style={{ color: light ? '#FAFCFB' : '#073B5C', fontWeight: isLast ? 500 : 400 }}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
