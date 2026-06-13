import { notFound } from 'next/navigation'
import { getCourse, courses } from '@/lib/course'
import { flatSections, getSection, prevNext } from '@/lib/course/nav'
import BlockList from '@/components/blocks/BlockList'
import Breadcrumb from '@/components/Breadcrumb'
import LessonNav from '@/components/LessonNav'

export function generateStaticParams() {
  return courses.flatMap((c) =>
    flatSections(c).map((f) => {
      const [lesson, section] = f.sectionNum.split('.')
      return { course: c.slug, lesson, section }
    }),
  )
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string; section: string }>
}) {
  const { course: slug, lesson, section } = await params
  const course = getCourse(slug)
  if (!course) notFound()

  const data = getSection(course, Number(lesson), Number(section))
  if (!data) notFound()

  const { prev, next } = prevNext(course, Number(lesson), Number(section))

  return (
    <article className="page-enter">
      <Breadcrumb
        courseSlug={course.slug}
        courseSubject={course.subject}
        lessonNum={data.lessonNum}
        lessonTitle={data.lessonTitle}
        sectionTitle={data.section.title}
      />
      <header className="mb-8">
        <span className="font-mono text-sm font-medium tabular-nums text-accent">
          {data.sectionNum}
        </span>
        <h1 className="mt-1.5 text-[1.7rem] font-bold leading-tight tracking-tight text-balance text-ink">
          {data.section.title}
        </h1>
      </header>
      <BlockList blocks={data.section.blocks} />
      <LessonNav prev={prev} next={next} />
    </article>
  )
}
