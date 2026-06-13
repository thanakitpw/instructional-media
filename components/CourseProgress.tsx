'use client'

import { usePathname } from 'next/navigation'

export default function CourseProgress({ hrefs }: { hrefs: string[] }) {
  const pathname = usePathname()
  const idx = hrefs.indexOf(pathname)
  const progress = idx >= 0 ? ((idx + 1) / hrefs.length) * 100 : 0

  return (
    <div className="fixed inset-x-0 top-0 z-40 h-1 bg-transparent">
      <div
        className="h-full bg-blue-600 transition-[width] duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
