import type { Course } from './types'
import lesson01 from './lesson-01'
import lesson02 from './lesson-02'
import lesson03 from './lesson-03'
import lesson04 from './lesson-04'
import lesson05 from './lesson-05'

export const apiIntegration: Course = {
  slug: 'api-integration',
  title: 'API Integration for Web & Mobile App',
  subject: 'API Integration',
  description:
    'ทำความเข้าใจพื้นฐาน API สำหรับงานเว็บและแอปมือถือ: API คืออะไร ข้อมูลเดินทางอย่างไร และทดลองเรียกใช้งาน API จริงด้วย Postman โดยไม่จำเป็นต้องเขียนโค้ด',
  lessons: [lesson01, lesson02, lesson03, lesson04, lesson05],
}
