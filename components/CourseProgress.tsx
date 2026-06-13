'use client'

import { usePathname } from 'next/navigation'

export default function CourseProgress({ hrefs }: { hrefs: string[] }) {
  const pathname = usePathname()
  const idx = hrefs.indexOf(pathname)
  const ratio = idx >= 0 ? (idx + 1) / hrefs.length : 0

  return (
    <div
      className="fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-accent transition-transform duration-300 ease-out"
      style={{ transform: `scaleX(${ratio})` }}
      aria-hidden="true"
    />
  )
}
