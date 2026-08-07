import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className="text-xs font-semibold tracking-[0.18em] uppercase"
          style={{ color: '#168AAD' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn('font-serif text-balance', light ? 'text-[#FAFCFB]' : 'text-[#073B5C]')}
        style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1.15 }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base leading-relaxed max-w-2xl',
            light ? 'text-[#EAF7FA]/80' : 'text-[#4a6478]',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
