'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { TocItem } from '@/lib/toc'

function flatten(items: TocItem[]): TocItem[] {
  return items.flatMap((i) => [i, ...flatten(i.children)])
}

function matches(item: TocItem, q: string): boolean {
  if (!q) return true
  if (item.title.toLowerCase().includes(q.toLowerCase())) return true
  return item.children.some((c) => matches(c, q))
}

function TocList({
  items,
  query,
  activeId,
  onClick,
}: {
  items: TocItem[]
  query: string
  activeId: string | null
  onClick: (id: string) => void
}) {
  const visible = items.filter((i) => matches(i, query))
  if (visible.length === 0) return null
  return (
    <ul className="space-y-1">
      {visible.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            aria-current={activeId === item.id ? 'true' : undefined}
            onClick={(e) => {
              e.preventDefault()
              onClick(item.id)
            }}
            className={`block rounded px-2 py-1 text-sm transition ${
              activeId === item.id
                ? 'bg-blue-100 font-semibold text-blue-700'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
            style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
          >
            {item.title}
          </a>
          {item.children.length > 0 && (
            <TocList
              items={item.children}
              query={query}
              activeId={activeId}
              onClick={onClick}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Sidebar({ toc }: { toc: TocItem[] }) {
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const scrollingRef = useRef(false)
  const ids = useMemo(() => flatten(toc).map((i) => i.id), [toc])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollingRef.current) return
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

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

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    scrollingRef.current = true
    setActiveId(id)
    setOpen(false)
    el.scrollIntoView({ behavior: 'smooth' })
    const done = () => {
      scrollingRef.current = false
    }
    if ('onscrollend' in window) {
      window.addEventListener('scrollend', done, { once: true })
    } else {
      setTimeout(done, 700)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed left-4 top-3 z-30 rounded bg-slate-800 px-3 py-2 text-sm text-white lg:hidden"
        aria-label="เปิด/ปิดสารบัญ"
        aria-expanded={open}
      >
        ☰ สารบัญ
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
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ค้นหาหัวข้อ..."
          className="mb-4 w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
        <nav aria-label="สารบัญ">
          <TocList
            items={toc}
            query={query}
            activeId={activeId}
            onClick={handleClick}
          />
        </nav>
      </aside>
    </>
  )
}
