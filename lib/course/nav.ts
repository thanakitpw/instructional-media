import type { Course } from './types'

export interface FlatSection {
  courseSlug: string
  lessonNum: number
  sectionNum: string // เช่น "1.2"
  lessonTitle: string
  title: string
  href: string
}

export interface NavLesson {
  lessonNum: number
  title: string
  sections: { sectionNum: string; title: string; href: string }[]
}

export function sectionHref(slug: string, lessonNum: number, s: number): string {
  return `/c/${slug}/${lessonNum}/${s}`
}

export function flatSections(course: Course): FlatSection[] {
  const flat: FlatSection[] = []
  course.lessons.forEach((lesson, li) => {
    const lessonNum = li + 1
    lesson.sections.forEach((section, si) => {
      const s = si + 1
      flat.push({
        courseSlug: course.slug,
        lessonNum,
        sectionNum: `${lessonNum}.${s}`,
        lessonTitle: lesson.title,
        title: section.title,
        href: sectionHref(course.slug, lessonNum, s),
      })
    })
  })
  return flat
}

export function getSection(course: Course, lessonNum: number, sectionNum: number) {
  const lesson = course.lessons[lessonNum - 1]
  if (!lesson) return null
  const section = lesson.sections[sectionNum - 1]
  if (!section) return null
  return {
    lesson,
    section,
    lessonNum,
    sectionNum: `${lessonNum}.${sectionNum}`,
    lessonTitle: lesson.title,
  }
}

export function prevNext(course: Course, lessonNum: number, sectionNum: number) {
  const flat = flatSections(course)
  const href = sectionHref(course.slug, lessonNum, sectionNum)
  const idx = flat.findIndex((f) => f.href === href)
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null,
    index: idx,
    total: flat.length,
  }
}

export function courseNav(course: Course): NavLesson[] {
  return course.lessons.map((lesson, li) => ({
    lessonNum: li + 1,
    title: lesson.title,
    sections: lesson.sections.map((section, si) => ({
      sectionNum: `${li + 1}.${si + 1}`,
      title: section.title,
      href: sectionHref(course.slug, li + 1, si + 1),
    })),
  }))
}
