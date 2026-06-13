import type { Course } from './types'
import { apiIntegration } from './api-integration'
import { vibeCode } from './vibe-code'

// ลำดับในนี้คือลำดับที่แสดงในหน้าเลือกคอร์สและตัวสลับคอร์ส
export const courses: Course[] = [vibeCode, apiIntegration]

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}
