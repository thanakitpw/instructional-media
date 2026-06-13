import Link from 'next/link'
import { courseNav } from '@/lib/course/nav'

export default function Home() {
  const nav = courseNav()
  const totalSections = nav.reduce((n, l) => n + l.sections.length, 0)

  return (
    <div className="page-enter">
      <header className="mb-12 border-b border-border pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-balance text-ink">
          API Integration for Web &amp; Mobile App
        </h1>
        <p className="mt-3 leading-relaxed text-ink-soft">
          สื่อการสอนแบบเป็นบท — เข้าใจการเชื่อม Front-End, Back-End, Database และ
          Mobile ผ่าน API ตั้งแต่ทดสอบ ติดตั้ง ดีบัก ไปจนถึง Deploy
        </p>
        <p className="mt-4 font-mono text-xs text-muted">
          {nav.length} บท · {totalSections} หัวข้อ
        </p>
      </header>

      <div className="divide-y divide-border">
        {nav.map((lesson) => (
          <section
            key={lesson.lessonNum}
            className="grid grid-cols-[2.25rem_1fr] gap-x-4 py-7 first:pt-0"
          >
            <span className="pt-1 font-mono text-sm tabular-nums text-muted">
              {String(lesson.lessonNum).padStart(2, '0')}
            </span>
            <div>
              <h2 className="mb-3 text-lg font-semibold tracking-tight text-ink">
                {lesson.title}
              </h2>
              <ul className="flex flex-col gap-1.5">
                {lesson.sections.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="group inline-flex items-baseline gap-2.5 text-[0.95rem] text-ink-soft transition hover:text-accent"
                    >
                      <span className="font-mono text-xs tabular-nums text-muted transition group-hover:text-accent">
                        {s.sectionNum}
                      </span>
                      <span className="underline-offset-4 group-hover:underline">
                        {s.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
