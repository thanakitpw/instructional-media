import { notFound } from 'next/navigation'
import { flatSections, getSection, prevNext } from '@/lib/course/nav'
import BlockList from '@/components/blocks/BlockList'
import Breadcrumb from '@/components/Breadcrumb'
import LessonNav from '@/components/LessonNav'

export function generateStaticParams() {
  return flatSections().map((f) => {
    const [lesson, section] = f.sectionNum.split('.')
    return { lesson, section }
  })
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ lesson: string; section: string }>
}) {
  const { lesson, section } = await params
  const data = getSection(Number(lesson), Number(section))
  if (!data) notFound()

  const { prev, next } = prevNext(Number(lesson), Number(section))

  return (
    <article className="page-enter">
      <Breadcrumb
        lessonNum={data.lessonNum}
        lessonTitle={data.lessonTitle}
        sectionNum={data.sectionNum}
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
