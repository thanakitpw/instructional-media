import Link from 'next/link'

export default function Breadcrumb({
  lessonNum,
  lessonTitle,
  sectionNum,
  sectionTitle,
}: {
  lessonNum: number
  lessonTitle: string
  sectionNum: string
  sectionTitle: string
}) {
  return (
    <nav
      className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-muted"
      aria-label="breadcrumb"
    >
      <Link href="/" className="transition hover:text-accent">
        หน้าแรก
      </Link>
      <span aria-hidden="true">/</span>
      <span>
        บทที่ {lessonNum}: {lessonTitle}
      </span>
      <span aria-hidden="true">/</span>
      <span className="text-ink-soft">{sectionTitle}</span>
    </nav>
  )
}
