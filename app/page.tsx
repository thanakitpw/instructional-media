import fs from 'node:fs'
import path from 'node:path'
import CourseContent from '@/components/CourseContent'

export default function Page() {
  const md = fs.readFileSync(
    path.join(process.cwd(), 'content/course.md'),
    'utf8',
  )
  return (
    <main className="mx-auto px-6 py-10">
      <CourseContent markdown={md} />
    </main>
  )
}
