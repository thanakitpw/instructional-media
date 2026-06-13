import { describe, it, expect } from 'vitest'
import { parseToc } from './toc'

describe('parseToc', () => {
  it('แปลงหัวข้อ flat เป็นโครง nested ตาม level', () => {
    const md = [
      '# Intro',
      'some text',
      '## Section A',
      '### Sub A1',
      '## Section B',
    ].join('\n')

    const toc = parseToc(md, 3)

    expect(toc).toHaveLength(1)
    expect(toc[0].title).toBe('Intro')
    expect(toc[0].id).toBe('intro')
    expect(toc[0].children).toHaveLength(2)
    expect(toc[0].children[0].title).toBe('Section A')
    expect(toc[0].children[0].children[0].title).toBe('Sub A1')
    expect(toc[0].children[1].title).toBe('Section B')
  })

  it('หัวข้อชื่อซ้ำได้ id ไม่ชนกัน', () => {
    const md = ['## Flow', '## Flow'].join('\n')
    const toc = parseToc(md, 3)
    expect(toc[0].id).toBe('flow')
    expect(toc[1].id).toBe('flow-1')
  })

  it('ไม่นับหัวข้อที่อยู่ในบล็อกโค้ด', () => {
    const md = ['# Real', '```bash', '# not a heading', '```'].join('\n')
    const toc = parseToc(md, 3)
    expect(toc).toHaveLength(1)
    expect(toc[0].title).toBe('Real')
  })

  it('หัวข้อเกิน maxLevel ไม่อยู่ในต้นไม้ แต่ยังกิน slug (id ของอันถัดมาถูกเลื่อน)', () => {
    const md = ['## Dup', '#### Dup', '## Dup'].join('\n')
    const toc = parseToc(md, 3)
    expect(toc).toHaveLength(2)
    expect(toc[0].id).toBe('dup')
    expect(toc[1].id).toBe('dup-2')
  })
})
