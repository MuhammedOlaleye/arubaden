import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Instrument_Serif } from 'next/font/google'
import './globals.css'

const _manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const _instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arubaden — Exceptional Journeys, Personally Curated',
  description:
    'Arubaden helps travellers discover and book personalized escapes, memorable group experiences and thoughtfully designed vacation packages.',
  generator: 'v0.app',
  keywords: ['travel', 'vacation packages', 'curated travel', 'signature escapes', 'personalized trips'],
  openGraph: {
    title: 'Arubaden — Exceptional Journeys, Personally Curated',
    description:
      'Discover unique, curated travel experiences and signature escapes for adventurous travellers.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#073B5C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${_manrope.variable} ${_instrumentSerif.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
