import type { Lesson } from './types'
import lesson01 from './lesson-01'

// บทเรียนเรียงตามลำดับ — เลขบท/หัวข้อย่อยคำนวณจากตำแหน่งใน array นี้ (ดู lib/course/nav.ts)
export const course: Lesson[] = [lesson01]
