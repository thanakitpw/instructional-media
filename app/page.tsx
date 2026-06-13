import fs from 'node:fs'
import path from 'node:path'
import CourseContent from '@/components/CourseContent'
import Sidebar from '@/components/Sidebar'
import ProgressBar from '@/components/ProgressBar'
import { parseToc } from '@/lib/toc'

export default function Page() {
  const md = fs.readFileSync(
    path.join(process.cwd(), 'content/course.md'),
    'utf8',
  )
  const toc = parseToc(md, 3)
  return (
    <>
      <ProgressBar />
      <div className="lg:pl-72">
        <Sidebar toc={toc} />
        <main className="mx-auto px-6 py-10">
          <CourseContent markdown={md} />
        </main>
      </div>
    </>
  )
}
