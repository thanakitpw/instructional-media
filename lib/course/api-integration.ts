import type { Course } from './types'
import lesson01 from './lesson-01'
import lesson02 from './lesson-02'
import lesson03 from './lesson-03'
import lesson04 from './lesson-04'
import lesson05 from './lesson-05'
import lesson06 from './lesson-06'
import lesson07 from './lesson-07'
import lesson08 from './lesson-08'
import lesson09 from './lesson-09'
import lesson10 from './lesson-10'
import lesson11 from './lesson-11'

export const apiIntegration: Course = {
  slug: 'api-integration',
  title: 'API Integration for Web & Mobile App',
  subject: 'API Integration',
  description:
    'เชื่อม Front-End, Back-End, Database และ Mobile ผ่าน API ตั้งแต่ทดสอบ ติดตั้ง ดีบัก ไปจนถึง Deploy',
  lessons: [
    lesson01,
    lesson02,
    lesson03,
    lesson04,
    lesson05,
    lesson06,
    lesson07,
    lesson08,
    lesson09,
    lesson10,
    lesson11,
  ],
}
