import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Store Dashboard',
  description: 'Simple store dashboard',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      // Added 'scroll-smooth' here
      <html lang="en" className="scroll-smooth">
      <body>{children}</body>
      </html>
  )
}