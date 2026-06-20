'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavLesson } from '@/lib/course/nav'
import Brand from '@/components/Brand'

export default function Sidebar({
  nav,
  courseSlug,
  courseTitle,
  courses,
}: {
  nav: NavLesson[]
  courseSlug: string
  courseTitle: string
  courses: { slug: string; subject: string }[]
}) {
  const pathname = usePathname()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  const activeLesson = useMemo(() => {
    const found = nav.find((l) => l.sections.some((s) => s.href === pathname))
    return found?.lessonNum ?? null
  }, [nav, pathname])

  useEffect(() => {
    if (activeLesson != null) {
      setExpanded((prev) => new Set(prev).add(activeLesson))
    }
  }, [activeLesson])

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
        className="fixed left-4 top-3 z-30 inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-2 text-sm font-medium text-bg shadow-sm transition hover:bg-ink-soft lg:hidden"
        aria-label="เปิด/ปิดเมนูบทเรียน"
        aria-expanded={open}
      >
        <span aria-hidden="true">☰</span> บทเรียน
      </button>

      {open && (
        <div
          className="fixed inset-0 z-10 bg-ink/40 backdrop-blur-[1px] lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-20 flex w-72 flex-col border-r border-border bg-surface transition-transform duration-200 ease-out lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-b border-border px-5 pb-4 pt-5 lg:pt-5">
          <Brand className="mb-4" />
          {/* course switcher — แสดงเมื่อมีมากกว่า 1 คอร์ส */}
          {courses.length > 1 && (
            <div
              className="mb-3 flex gap-1 rounded-lg border border-border bg-elevated p-1"
              role="tablist"
              aria-label="เลือกคอร์ส"
            >
              {courses.map((c) => {
                const active = c.slug === courseSlug
                return (
                  <Link
                    key={c.slug}
                    href={`/c/${c.slug}`}
                    onClick={() => setOpen(false)}
                    role="tab"
                    aria-selected={active}
                    aria-current={active ? 'page' : undefined}
                    className={`flex-1 rounded-md px-2 py-1 text-center text-xs font-medium transition ${
                      active
                        ? 'bg-accent text-accent-fg'
                        : 'text-ink-soft hover:bg-bg'
                    }`}
                  >
                    {c.subject}
                  </Link>
                )
              })}
            </div>
          )}

          <Link
            href={`/c/${courseSlug}`}
            onClick={() => setOpen(false)}
            className="block text-[0.95rem] font-semibold leading-snug tracking-tight text-ink transition hover:text-accent"
          >
            {courseTitle}
          </Link>

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ค้นหาหัวข้อ…"
            className="mt-4 w-full rounded-lg border border-border bg-elevated px-3 py-2 text-sm text-ink placeholder:text-muted transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
          />
        </div>

        <nav
          aria-label="บทเรียน"
          className="flex-1 space-y-0.5 overflow-y-auto px-3 py-3"
        >
          {visible.map((lesson) => {
            const isExpanded = q !== '' || expanded.has(lesson.lessonNum)
            const isActiveLesson = lesson.lessonNum === activeLesson
            return (
              <div key={lesson.lessonNum}>
                <button
                  onClick={() => toggle(lesson.lessonNum)}
                  className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-sm font-medium transition hover:bg-bg"
                  aria-expanded={isExpanded}
                >
                  <span
                    className={`font-mono text-[0.7rem] tabular-nums ${
                      isActiveLesson ? 'text-accent' : 'text-muted'
                    }`}
                  >
                    {String(lesson.lessonNum).padStart(2, '0')}
                  </span>
                  <span className="flex-1 truncate text-ink">{lesson.title}</span>
                  <span
                    className="text-[0.65rem] text-muted transition-transform"
                    aria-hidden="true"
                  >
                    {isExpanded ? '▾' : '▸'}
                  </span>
                </button>
                {isExpanded && (
                  <ul className="mb-1 ml-[1.15rem] space-y-px border-l border-border pl-2">
                    {lesson.sections.map((s) => {
                      const active = pathname === s.href
                      return (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            onClick={() => setOpen(false)}
                            aria-current={active ? 'page' : undefined}
                            className={`flex items-baseline gap-2 rounded-md px-2.5 py-1.5 text-sm transition ${
                              active
                                ? 'bg-accent-soft font-medium text-accent'
                                : 'text-ink-soft hover:bg-bg hover:text-ink'
                            }`}
                          >
                            <span
                              className={`font-mono text-[0.68rem] tabular-nums ${
                                active ? 'text-accent' : 'text-muted'
                              }`}
                            >
                              {s.sectionNum}
                            </span>
                            <span className="truncate">{s.title}</span>
                          </Link>
                        </li>
                      )
                    })}
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
