import type { Lesson } from './types'
import { course } from './index'

export interface FlatSection {
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

export function flatSections(data: Lesson[] = course): FlatSection[] {
  const flat: FlatSection[] = []
  data.forEach((lesson, li) => {
    const lessonNum = li + 1
    lesson.sections.forEach((section, si) => {
      const s = si + 1
      flat.push({
        lessonNum,
        sectionNum: `${lessonNum}.${s}`,
        lessonTitle: lesson.title,
        title: section.title,
        href: `/lesson/${lessonNum}/${s}`,
      })
    })
  })
  return flat
}

export function getSection(
  lessonNum: number,
  sectionNum: number,
  data: Lesson[] = course,
) {
  const lesson = data[lessonNum - 1]
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

export function prevNext(
  lessonNum: number,
  sectionNum: number,
  data: Lesson[] = course,
) {
  const flat = flatSections(data)
  const href = `/lesson/${lessonNum}/${sectionNum}`
  const idx = flat.findIndex((f) => f.href === href)
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null,
    index: idx,
    total: flat.length,
  }
}

export function courseNav(data: Lesson[] = course): NavLesson[] {
  return data.map((lesson, li) => ({
    lessonNum: li + 1,
    title: lesson.title,
    sections: lesson.sections.map((section, si) => ({
      sectionNum: `${li + 1}.${si + 1}`,
      title: section.title,
      href: `/lesson/${li + 1}/${si + 1}`,
    })),
  }))
}
