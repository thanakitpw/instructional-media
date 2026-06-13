import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import 'highlight.js/styles/github.css'
import './globals.css'

const notoThai = Noto_Sans_Thai({ subsets: ['thai', 'latin'] })

export const metadata: Metadata = {
  title: 'API Integration for Web & Mobile App',
  description: 'สื่อการสอน API Integration for Web & Mobile App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={notoThai.className}>{children}</body>
    </html>
  )
}
