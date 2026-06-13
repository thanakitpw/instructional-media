import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Sans_Thai, JetBrains_Mono } from 'next/font/google'
import 'highlight.js/styles/github-dark.css'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import CourseProgress from '@/components/CourseProgress'
import { courseNav, flatSections } from '@/lib/course/nav'

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
  title: 'API Integration for Web & Mobile App',
  description: 'สื่อการสอน API Integration for Web & Mobile App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nav = courseNav()
  const hrefs = flatSections().map((f) => f.href)
  return (
    <html
      lang="th"
      className={`${sansLatin.variable} ${sansThai.variable} ${jetbrains.variable}`}
    >
      <body>
        <CourseProgress hrefs={hrefs} />
        <Sidebar nav={nav} />
        <div className="lg:pl-72">
          <main className="mx-auto max-w-[44rem] px-6 py-12 lg:px-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
