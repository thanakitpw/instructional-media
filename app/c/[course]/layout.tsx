import { notFound } from 'next/navigation'
import { getCourse, courses } from '@/lib/course'
import { courseNav, flatSections } from '@/lib/course/nav'
import Sidebar from '@/components/Sidebar'
import CourseProgress from '@/components/CourseProgress'

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ course: string }>
}) {
  const { course: slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()

  const nav = courseNav(course)
  const hrefs = flatSections(course).map((f) => f.href)
  const switcher = courses.map((c) => ({ slug: c.slug, subject: c.subject }))

  return (
    <>
      <CourseProgress hrefs={hrefs} />
      <Sidebar
        nav={nav}
        courseSlug={course.slug}
        courseTitle={course.title}
        courses={switcher}
      />
      <div className="lg:pl-72">
        <main className="mx-auto max-w-[44rem] px-6 py-12 lg:px-10">
          {children}
        </main>
      </div>
    </>
  )
}
