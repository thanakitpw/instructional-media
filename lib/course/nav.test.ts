import { describe, it, expect } from 'vitest'
import { flatSections, getSection, prevNext, courseNav } from './nav'
import type { Lesson } from './types'

const sample: Lesson[] = [
  {
    title: 'A',
    sections: [
      { title: 'a1', blocks: [] },
      { title: 'a2', blocks: [] },
    ],
  },
  { title: 'B', sections: [{ title: 'b1', blocks: [] }] },
]

describe('nav', () => {
  it('flatSections numbers and hrefs by position', () => {
    const flat = flatSections(sample)
    expect(flat.map((f) => f.sectionNum)).toEqual(['1.1', '1.2', '2.1'])
    expect(flat[0].href).toBe('/lesson/1/1')
    expect(flat[2].href).toBe('/lesson/2/1')
  })

  it('prevNext crosses lesson boundaries and clamps at ends', () => {
    const pn = prevNext(1, 2, sample)
    expect(pn.prev?.sectionNum).toBe('1.1')
    expect(pn.next?.sectionNum).toBe('2.1')
    expect(prevNext(1, 1, sample).prev).toBeNull()
    expect(prevNext(2, 1, sample).next).toBeNull()
  })

  it('getSection returns null for bad params and the section otherwise', () => {
    expect(getSection(9, 9, sample)).toBeNull()
    expect(getSection(1, 1, sample)?.section.title).toBe('a1')
  })

  it('courseNav builds a nested nav tree', () => {
    const nav = courseNav(sample)
    expect(nav).toHaveLength(2)
    expect(nav[0].sections[1].sectionNum).toBe('1.2')
    expect(nav[1].sections[0].href).toBe('/lesson/2/1')
  })
})
