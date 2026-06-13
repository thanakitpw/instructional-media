import { describe, it, expect } from 'vitest'
import { flatSections, getSection, prevNext, courseNav } from './nav'
import type { Course } from './types'

const sample: Course = {
  slug: 'demo',
  title: 'Demo',
  subject: 'Demo',
  description: '',
  lessons: [
    {
      title: 'A',
      sections: [
        { title: 'a1', blocks: [] },
        { title: 'a2', blocks: [] },
      ],
    },
    { title: 'B', sections: [{ title: 'b1', blocks: [] }] },
  ],
}

describe('nav', () => {
  it('flatSections numbers and hrefs by position (namespaced by course slug)', () => {
    const flat = flatSections(sample)
    expect(flat.map((f) => f.sectionNum)).toEqual(['1.1', '1.2', '2.1'])
    expect(flat[0].href).toBe('/c/demo/1/1')
    expect(flat[2].href).toBe('/c/demo/2/1')
    expect(flat[0].courseSlug).toBe('demo')
  })

  it('prevNext crosses lesson boundaries and clamps at ends', () => {
    const pn = prevNext(sample, 1, 2)
    expect(pn.prev?.sectionNum).toBe('1.1')
    expect(pn.next?.sectionNum).toBe('2.1')
    expect(prevNext(sample, 1, 1).prev).toBeNull()
    expect(prevNext(sample, 2, 1).next).toBeNull()
  })

  it('getSection returns null for bad params and the section otherwise', () => {
    expect(getSection(sample, 9, 9)).toBeNull()
    expect(getSection(sample, 1, 1)?.section.title).toBe('a1')
  })

  it('courseNav builds a nested nav tree with namespaced hrefs', () => {
    const nav = courseNav(sample)
    expect(nav).toHaveLength(2)
    expect(nav[0].sections[1].sectionNum).toBe('1.2')
    expect(nav[1].sections[0].href).toBe('/c/demo/2/1')
  })
})
