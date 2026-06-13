import Link from 'next/link'
import { courses } from '@/lib/course'
import { courseNav } from '@/lib/course/nav'
import Brand from '@/components/Brand'

export default function Home() {
  return (
    <div className="page-enter mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <Brand className="mb-10" />
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
          เลือกคอร์สที่จะเรียน
        </h1>
        <p className="mt-3 leading-relaxed text-ink-soft">
          สื่อการสอน {courses.length} คอร์ส — แยกตามเรื่อง เลือกหัวข้อที่ต้องการเริ่มอ่านได้เลย
        </p>
      </header>

      <div className="space-y-4">
        {courses.map((course, i) => {
          const nav = courseNav(course)
          const total = nav.reduce((n, l) => n + l.sections.length, 0)
          return (
            <Link
              key={course.slug}
              href={`/c/${course.slug}`}
              className="group block rounded-xl border border-border bg-elevated p-5 transition hover:border-accent hover:bg-accent-soft/40 sm:p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-xs tabular-nums text-muted">
                  เรื่องที่ {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-xs text-muted">
                  {nav.length} บท · {total} หัวข้อ
                </span>
              </div>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink transition group-hover:text-accent">
                {course.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {course.description}
              </p>
              <p className="mt-4 text-sm font-medium text-accent">เริ่มเรียน →</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
