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
    <nav className="mb-4 text-sm text-slate-500" aria-label="breadcrumb">
      <Link href="/" className="hover:text-blue-600">
        หน้าแรก
      </Link>
      <span className="mx-2" aria-hidden="true">
        /
      </span>
      <span>
        บทที่ {lessonNum}: {lessonTitle}
      </span>
      <span className="mx-2" aria-hidden="true">
        /
      </span>
      <span className="text-slate-700">
        {sectionNum} {sectionTitle}
      </span>
    </nav>
  )
}
