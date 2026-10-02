import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RoastCraft Cafe — Craft Exceptional Coffee With Artisanal Roasts',
  description: 'Specialty coffee roastery and tasting room. Hand-roasted single origin beans, signature espresso blends, and artisan slow brew equipment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#fbf8f3] text-[#2c1810] antialiased selection:bg-amber-600 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
