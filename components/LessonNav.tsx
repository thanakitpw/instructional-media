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
    <div className="mt-10 flex justify-between gap-4 border-t border-slate-200 pt-6">
      {prev ? (
        <Link
          href={prev.href}
          className="flex max-w-[45%] flex-col rounded-lg border border-slate-200 p-3 hover:border-blue-400 hover:bg-blue-50"
        >
          <span className="text-xs text-slate-400">◀ ก่อนหน้า</span>
          <span className="text-sm font-medium text-slate-700">
            {prev.sectionNum} {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex max-w-[45%] flex-col rounded-lg border border-slate-200 p-3 text-right hover:border-blue-400 hover:bg-blue-50"
        >
          <span className="text-xs text-slate-400">ถัดไป ▶</span>
          <span className="text-sm font-medium text-slate-700">
            {next.sectionNum} {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  )
}
