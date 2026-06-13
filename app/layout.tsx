import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import 'highlight.js/styles/github-dark.css'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import CourseProgress from '@/components/CourseProgress'
import { courseNav, flatSections } from '@/lib/course/nav'

const notoThai = Noto_Sans_Thai({ subsets: ['thai', 'latin'] })

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
    <html lang="th">
      <body className={notoThai.className}>
        <CourseProgress hrefs={hrefs} />
        <Sidebar nav={nav} />
        <div className="lg:pl-72">
          <main className="mx-auto px-6 py-10">{children}</main>
        </div>
      </body>
    </html>
  )
}
