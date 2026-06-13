import Link from 'next/link'
import type { FlatSection } from '@/lib/course/nav'

export default function LessonNav({
  prev,
  next,
}: {
  prev: FlatSection | null
  next: FlatSection | null
}) {
  return (
    <nav
      className="mt-12 grid grid-cols-2 gap-3 border-t border-border pt-6"
      aria-label="ไปบทก่อนหน้า / ถัดไป"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-0.5 rounded-xl border border-border bg-elevated p-3.5 transition hover:border-accent hover:bg-accent-soft/50"
        >
          <span className="text-xs text-muted">← ก่อนหน้า</span>
          <span className="line-clamp-1 text-sm font-medium text-ink-soft transition group-hover:text-accent">
            <span className="font-mono text-xs tabular-nums text-muted">
              {prev.sectionNum}
            </span>{' '}
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col gap-0.5 rounded-xl border border-border bg-elevated p-3.5 text-right transition hover:border-accent hover:bg-accent-soft/50"
        >
          <span className="text-xs text-muted">ถัดไป →</span>
          <span className="line-clamp-1 text-sm font-medium text-ink-soft transition group-hover:text-accent">
            <span className="font-mono text-xs tabular-nums text-muted">
              {next.sectionNum}
            </span>{' '}
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
