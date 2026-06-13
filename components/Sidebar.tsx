'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavLesson } from '@/lib/course/nav'

export default function Sidebar({ nav }: { nav: NavLesson[] }) {
  const pathname = usePathname()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  const activeLesson = useMemo(() => {
    const found = nav.find((l) => l.sections.some((s) => s.href === pathname))
    return found?.lessonNum ?? null
  }, [nav, pathname])

  // auto-expand the lesson that contains the current page
  useEffect(() => {
    if (activeLesson != null) {
      setExpanded((prev) => new Set(prev).add(activeLesson))
    }
  }, [activeLesson])

  // mobile drawer: Escape to close + body scroll-lock
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const q = query.trim().toLowerCase()
  const visible = nav
    .map((lesson) => {
      const lessonMatch =
        lesson.title.toLowerCase().includes(q) || `บทที่ ${lesson.lessonNum}`.includes(q)
      const sections = q
        ? lesson.sections.filter(
            (s) =>
              lessonMatch ||
              s.title.toLowerCase().includes(q) ||
              s.sectionNum.includes(q),
          )
        : lesson.sections
      return { ...lesson, sections }
    })
    .filter((lesson) => (q ? lesson.sections.length > 0 : true))

  const toggle = (n: number) =>
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(n)) next.delete(n)
      else next.add(n)
      return next
    })

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed left-4 top-3 z-30 rounded bg-slate-800 px-3 py-2 text-sm text-white lg:hidden"
        aria-label="เปิด/ปิดเมนูบทเรียน"
        aria-expanded={open}
      >
        ☰ บทเรียน
      </button>

      {open && (
        <div
          className="fixed inset-0 z-10 bg-black/30 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-20 w-72 overflow-y-auto border-r border-slate-200 bg-white p-4 pt-16 transition-transform lg:translate-x-0 lg:pt-4 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="mb-3 block text-sm font-semibold text-slate-800 hover:text-blue-600"
        >
          API Integration Course
        </Link>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ค้นหาหัวข้อ..."
          className="mb-4 w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
        <nav aria-label="บทเรียน" className="space-y-1">
          {visible.map((lesson) => {
            const isExpanded = q !== '' || expanded.has(lesson.lessonNum)
            return (
              <div key={lesson.lessonNum}>
                <button
                  onClick={() => toggle(lesson.lessonNum)}
                  className="flex w-full items-center justify-between rounded px-2 py-1 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  aria-expanded={isExpanded}
                >
                  <span>
                    บทที่ {lesson.lessonNum}: {lesson.title}
                  </span>
                  <span className="ml-2 text-xs text-slate-400" aria-hidden="true">
                    {isExpanded ? '▾' : '▸'}
                  </span>
                </button>
                {isExpanded && (
                  <ul className="mb-1 space-y-0.5">
                    {lesson.sections.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={() => setOpen(false)}
                          aria-current={pathname === s.href ? 'page' : undefined}
                          className={`block rounded px-2 py-1 pl-5 text-sm transition ${
                            pathname === s.href
                              ? 'bg-blue-100 font-medium text-blue-700'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {s.sectionNum} {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
