import type { Course } from './types'
import lesson01 from './vibe-code/lesson-01'
import lesson02 from './vibe-code/lesson-02'
import lessonClaudeCode from './vibe-code/lesson-claude-code'
import lesson03 from './vibe-code/lesson-03'
import lesson04 from './vibe-code/lesson-04'
import lesson05 from './vibe-code/lesson-05'
import lesson06 from './vibe-code/lesson-06'
import lesson07 from './vibe-code/lesson-07'
import lesson08 from './vibe-code/lesson-08'

export const vibeCode: Course = {
  slug: 'vibe-code',
  title: 'Vibe Code Website Bootcamp',
  subject: 'Vibe Code',
  description:
    'สร้างเว็บไซต์จริงด้วย AI ตั้งแต่คิดโจทย์ ออกแบบ เขียนโค้ด นำขึ้นออนไลน์ และวางแผนวัดผล',
  lessons: [
    lesson01,
    lesson02,
    lessonClaudeCode,
    lesson03,
    lesson04,
    lesson05,
    lesson06,
    lesson07,
    lesson08,
  ],
}
