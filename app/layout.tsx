import './globals.css'
import type { Metadata } from 'next'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
      <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body>{children}</body>
      </html>
  )
}