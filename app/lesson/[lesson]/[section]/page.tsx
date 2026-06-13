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
    <article className="mx-auto max-w-3xl">
      <Breadcrumb
        lessonNum={data.lessonNum}
        lessonTitle={data.lessonTitle}
        sectionNum={data.sectionNum}
        sectionTitle={data.section.title}
      />
      <h1 className="mb-6 text-2xl font-bold text-slate-900">
        {data.sectionNum} {data.section.title}
      </h1>
      <BlockList blocks={data.section.blocks} />
      <LessonNav prev={prev} next={next} />
    </article>
  )
}
