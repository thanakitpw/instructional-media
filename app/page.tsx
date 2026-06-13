import Link from 'next/link'
import { courseNav } from '@/lib/course/nav'

export default function Home() {
  const nav = courseNav()
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-3xl font-bold text-slate-900">
        API Integration for Web &amp; Mobile App
      </h1>
      <p className="mb-8 text-slate-600">สื่อการสอน — เลือกบทเรียนเพื่อเริ่มอ่าน</p>
      <div className="space-y-6">
        {nav.map((lesson) => (
          <section
            key={lesson.lessonNum}
            className="rounded-lg border border-slate-200 p-4"
          >
            <h2 className="mb-3 text-lg font-semibold text-slate-800">
              บทที่ {lesson.lessonNum}: {lesson.title}
            </h2>
            <ul className="space-y-1">
              {lesson.sections.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {s.sectionNum} {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
