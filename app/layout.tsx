import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Sans_Thai, JetBrains_Mono } from 'next/font/google'
import 'highlight.js/styles/github-dark.css'
import './globals.css'

const sansLatin = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans-latin',
  display: 'swap',
})
const sansThai = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans-thai',
  display: 'swap',
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'สื่อการสอน — API Integration & Vibe Code',
  description:
    'สื่อการสอนสองคอร์ส: API Integration for Web & Mobile App และ Vibe Code Website Bootcamp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="th"
      className={`${sansLatin.variable} ${sansThai.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
