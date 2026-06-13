# Course Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** แปลงเนื้อหาคอร์ส `api_integration_private_course_1day.md` เป็นเว็บสื่อการสอน single-page ที่มี sidebar สารบัญด้านซ้าย (auto จากหัวข้อ), active highlight, ปุ่ม copy โค้ด, search และ progress bar

**Architecture:** Next.js (App Router) อ่านไฟล์ markdown เดียว (`content/course.md`) ตอน build → `lib/toc.ts` แปลงหัวข้อเป็นโครง sidebar โดยใช้ `github-slugger` ให้ id ตรงกับ `rehype-slug` → เรนเดอร์เนื้อหาด้วย `react-markdown` (override `pre` เป็น CodeBlock ที่มีปุ่ม copy) → Sidebar/ProgressBar เป็น client component ใช้ IntersectionObserver และ scroll listener

**Tech Stack:** Next.js, TypeScript, Tailwind CSS v4 (+ typography plugin), react-markdown, remark-gfm, rehype-slug, rehype-highlight, highlight.js, github-slugger, vitest

**Working directory:** `/Users/thanakitchaithong/Developer/projects/bestskill/instructional-media/API Integration for Web & Mobile App`

---

## File Structure

```
.gitignore
package.json
tsconfig.json
next.config.mjs
postcss.config.mjs
vitest.config.ts
app/
  layout.tsx          html/body + ฟอนต์ Noto Sans Thai + import globals + hljs theme
  page.tsx            server: อ่าน course.md, parse toc, ประกอบ layout
  globals.css         Tailwind + typography + custom code/layout styles
components/
  Sidebar.tsx         client: TOC + search + active highlight + hamburger
  CourseContent.tsx   เรนเดอร์ markdown (react-markdown + plugins)
  CodeBlock.tsx       client: pre + ปุ่ม Copy
  ProgressBar.tsx     client: แถบ progress การเลื่อน
lib/
  toc.ts              parse หัวข้อ markdown → โครง TOC (nested) + slug id
  toc.test.ts         unit test ของ toc.ts
content/
  course.md           เนื้อหาคอร์ส (คัดจากต้นฉบับ ตัดเวลาออก)
```

แหล่งเนื้อหาต้นฉบับ: `api_integration_private_course_1day.md` (อยู่ใน working directory แล้ว)

---

## Task 1: Initialize project + scaffold config

**Files:**
- Create: `.gitignore`, `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`, `vitest.config.ts`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`

- [ ] **Step 1: git init**

Run (จาก working directory):
```bash
git init
```
Expected: `Initialized empty Git repository ...`

- [ ] **Step 2: สร้าง `.gitignore`**

```
node_modules/
.next/
out/
.DS_Store
*.log
.vercel
```

- [ ] **Step 3: สร้าง `package.json`**

```json
{
  "name": "api-integration-course",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run"
  }
}
```

- [ ] **Step 4: ติดตั้ง dependencies**

Run:
```bash
npm install next react react-dom react-markdown remark-gfm rehype-slug rehype-highlight highlight.js github-slugger
npm install -D typescript @types/node @types/react @types/react-dom tailwindcss @tailwindcss/postcss @tailwindcss/typography postcss vitest
```
Expected: ติดตั้งสำเร็จ ไม่มี ERR (warnings ปกติได้)

- [ ] **Step 5: สร้าง `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 6: สร้าง `next.config.mjs`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {}
export default nextConfig
```

- [ ] **Step 7: สร้าง `postcss.config.mjs`**

```js
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
export default config
```

- [ ] **Step 8: สร้าง `app/globals.css`**

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

html {
  scroll-behavior: smooth;
  scroll-padding-top: 1.5rem;
}

/* code block: ปล่อยให้ rehype-highlight คุมสี ไม่ให้ prose ทับ background */
.prose pre {
  background: #0f172a;
  color: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
}
.prose :where(code):not(:where(pre code)) {
  background: #f1f5f9;
  padding: 0.15rem 0.35rem;
  border-radius: 0.25rem;
  font-weight: 500;
}
.prose :where(code):not(:where(pre code))::before,
.prose :where(code):not(:where(pre code))::after {
  content: "";
}
```

- [ ] **Step 9: สร้าง `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import 'highlight.js/styles/github.css'
import './globals.css'

const notoThai = Noto_Sans_Thai({ subsets: ['thai', 'latin'] })

export const metadata: Metadata = {
  title: 'API Integration for Web & Mobile App',
  description: 'สื่อการสอน API Integration for Web & Mobile App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={notoThai.className}>{children}</body>
    </html>
  )
}
```

- [ ] **Step 10: สร้าง `app/page.tsx` ชั่วคราว (ยืนยันว่าโปรเจกต์รันได้)**

```tsx
export default function Page() {
  return <main className="p-8 text-2xl">Course site — scaffold ok</main>
}
```

- [ ] **Step 11: ยืนยัน dev server boot ได้**

Run:
```bash
npm run dev
```
Expected: ขึ้น `Ready` / `Local: http://localhost:3000` ไม่มี error — เปิดเบราว์เซอร์เห็นข้อความ "Course site — scaffold ok" แล้วกด Ctrl+C ปิด

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js + Tailwind project"
```

---

## Task 2: lib/toc.ts — parse หัวข้อเป็นโครง TOC (TDD)

**Files:**
- Create: `lib/toc.ts`
- Test: `lib/toc.test.ts`
- Create: `vitest.config.ts`

**สำคัญ:** ต้อง slug **ทุกหัวข้อ (level 1-6) ตามลำดับในเอกสาร** ด้วย `github-slugger` ตัวเดียว แล้วค่อย filter ออกเฉพาะ level ที่เกิน `maxLevel` ออกจาก "ต้นไม้" — เพื่อให้สถานะ dedup ของ slugger ตรงกับ `rehype-slug` (ซึ่ง slug ทุก heading ในเอกสาร) ทำให้ id ใน sidebar ตรงกับ id ที่เรนเดอร์จริง

- [ ] **Step 1: สร้าง `vitest.config.ts`**

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.test.ts'],
  },
})
```

- [ ] **Step 2: เขียน failing test `lib/toc.test.ts`**

```ts
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
    // level 4 ถูกตัดออกจากต้นไม้ แต่ slugger เห็น 'dup' ไปแล้ว 2 ครั้ง
    expect(toc).toHaveLength(2)
    expect(toc[0].id).toBe('dup')
    expect(toc[1].id).toBe('dup-2')
  })
})
```

- [ ] **Step 3: รัน test ให้ fail**

Run:
```bash
npm test
```
Expected: FAIL — `Cannot find module './toc'` / `parseToc is not a function`

- [ ] **Step 4: เขียน `lib/toc.ts`**

```ts
import GithubSlugger from 'github-slugger'

export interface TocItem {
  id: string
  title: string
  level: number
  children: TocItem[]
}

interface FlatHeading {
  id: string
  title: string
  level: number
}

export function parseToc(markdown: string, maxLevel = 3): TocItem[] {
  const slugger = new GithubSlugger()
  const lines = markdown.split('\n')
  const flat: FlatHeading[] = []
  let inFence = false

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    const m = /^(#{1,6})\s+(.+?)\s*$/.exec(line)
    if (!m) continue

    const level = m[1].length
    const title = m[2].trim()
    // slug ทุก heading ตามลำดับ เพื่อให้ dedup ตรงกับ rehype-slug
    const id = slugger.slug(title)

    if (level <= maxLevel) {
      flat.push({ id, title, level })
    }
  }

  return nest(flat)
}

function nest(flat: FlatHeading[]): TocItem[] {
  const root: TocItem[] = []
  const stack: TocItem[] = []

  for (const h of flat) {
    const node: TocItem = { ...h, children: [] }
    while (stack.length && stack[stack.length - 1].level >= node.level) {
      stack.pop()
    }
    if (stack.length) {
      stack[stack.length - 1].children.push(node)
    } else {
      root.push(node)
    }
    stack.push(node)
  }

  return root
}
```

- [ ] **Step 5: รัน test ให้ผ่าน**

Run:
```bash
npm test
```
Expected: PASS ทั้ง 4 เคส

- [ ] **Step 6: Commit**

```bash
git add lib/toc.ts lib/toc.test.ts vitest.config.ts
git commit -m "feat: parse markdown headings into nested TOC"
```

---

## Task 3: content/course.md — เนื้อหา (ตัดเวลาออก)

**Files:**
- Create: `content/course.md`

- [ ] **Step 1: คัดลอกเนื้อหาต้นฉบับ**

Run:
```bash
mkdir -p content
cp api_integration_private_course_1day.md content/course.md
```

- [ ] **Step 2: ตัดเรื่องเวลาออกจาก `content/course.md`**

แก้ไฟล์ `content/course.md` ตามกฎนี้ (ใช้ Edit ทีละจุด):

1. **ลบหัวข้อเวลาล้วน** ทุกบรรทัดที่เป็น `## HH:MM - HH:MM` ออก (เหลือไว้เฉพาะหัวข้อ Session ที่ตามมา) — ในต้นฉบับมีที่บรรทัดประมาณ: `## 10:00 - 10:30`, `## 10:30 - 11:15`, `## 11:15 - 12:00`, `## 13:00 - 13:45`, `## 13:45 - 14:30`, `## 14:30 - 15:15`, `## 15:15 - 16:15`, `## 16:15 - 17:00`
2. **ลบส่วนพักกลางวันทั้งบล็อก** คือ `## 12:00 - 13:00` และ `## พักกลางวัน` พร้อม `---` ที่คู่กัน (เป็นเรื่องตารางเวลาล้วน)
3. **คงหัวข้อ Session ไว้** เช่น `## Session 1: API Integration Overview` ... `## Session 8: Deploy + Production Testing + Q&A` (กลายเป็นหัวข้อหลักของแต่ละช่วงแทน)
4. ห้ามแก้เนื้อหาส่วนอื่น (โค้ด, flow, checklist, appendix คงเดิม)

- [ ] **Step 3: ตรวจว่าไม่มีคำว่าเวลาแบบ HH:MM หลงเหลือในหัวข้อ**

Run:
```bash
grep -nE '^##? +[0-9]{1,2}:[0-9]{2}' content/course.md || echo "OK: no time headings left"
```
Expected: `OK: no time headings left`

- [ ] **Step 4: Commit**

```bash
git add content/course.md
git commit -m "content: add course markdown with schedule times removed"
```

---

## Task 4: CodeBlock + CourseContent (เรนเดอร์ markdown + ปุ่ม copy)

**Files:**
- Create: `components/CodeBlock.tsx`
- Create: `components/CourseContent.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: สร้าง `components/CodeBlock.tsx` (client + ปุ่ม copy)**

```tsx
'use client'

import { useRef, useState } from 'react'

export default function CodeBlock(props: React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    const text = ref.current?.innerText ?? ''
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* ไม่ทำอะไรถ้า clipboard ใช้ไม่ได้ */
    }
  }

  return (
    <div className="relative group">
      <button
        onClick={copy}
        className="absolute right-2 top-2 z-10 rounded bg-slate-700 px-2 py-1 text-xs text-slate-100 opacity-0 transition group-hover:opacity-100"
        aria-label="คัดลอกโค้ด"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre ref={ref} {...props} />
    </div>
  )
}
```

- [ ] **Step 2: สร้าง `components/CourseContent.tsx`**

```tsx
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import CodeBlock from './CodeBlock'

export default function CourseContent({ markdown }: { markdown: string }) {
  return (
    <article className="prose prose-slate max-w-3xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeHighlight]}
        components={{ pre: CodeBlock }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  )
}
```

- [ ] **Step 3: แก้ `app/page.tsx` ให้อ่าน course.md และเรนเดอร์เนื้อหา**

```tsx
import fs from 'node:fs'
import path from 'node:path'
import CourseContent from '@/components/CourseContent'

export default function Page() {
  const md = fs.readFileSync(
    path.join(process.cwd(), 'content/course.md'),
    'utf8',
  )
  return (
    <main className="mx-auto px-6 py-10">
      <CourseContent markdown={md} />
    </main>
  )
}
```

- [ ] **Step 4: ยืนยันด้วยตา**

Run:
```bash
npm run dev
```
เปิด `http://localhost:3000` ตรวจว่า:
- เนื้อหาคอร์สแสดงครบ จัดรูปแบบสวย (prose)
- code block มีพื้นหลังเข้ม + syntax highlight
- เอาเมาส์ชี้ code block เห็นปุ่ม "Copy" กดแล้วเปลี่ยนเป็น "Copied!"
- ไม่มีหัวข้อเวลา HH:MM
แล้ว Ctrl+C ปิด

- [ ] **Step 5: Commit**

```bash
git add components/CodeBlock.tsx components/CourseContent.tsx app/page.tsx
git commit -m "feat: render course markdown with copy-enabled code blocks"
```

---

## Task 5: Sidebar — TOC + search + active highlight

**Files:**
- Create: `components/Sidebar.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: สร้าง `components/Sidebar.tsx`**

```tsx
'use client'

import { useEffect, useMemo, useState } from 'react'
import type { TocItem } from '@/lib/toc'

function flatten(items: TocItem[]): TocItem[] {
  return items.flatMap((i) => [i, ...flatten(i.children)])
}

function matches(item: TocItem, q: string): boolean {
  if (!q) return true
  if (item.title.toLowerCase().includes(q)) return true
  return item.children.some((c) => matches(c, q))
}

function TocList({
  items,
  query,
  activeId,
  onClick,
}: {
  items: TocItem[]
  query: string
  activeId: string | null
  onClick: (id: string) => void
}) {
  const visible = items.filter((i) => matches(i, query))
  if (visible.length === 0) return null
  return (
    <ul className="space-y-1">
      {visible.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              onClick(item.id)
            }}
            className={`block rounded px-2 py-1 text-sm transition ${
              activeId === item.id
                ? 'bg-blue-100 font-semibold text-blue-700'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
            style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
          >
            {item.title}
          </a>
          {item.children.length > 0 && (
            <TocList
              items={item.children}
              query={query}
              activeId={activeId}
              onClick={onClick}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Sidebar({ toc }: { toc: TocItem[] }) {
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => flatten(toc).map((i) => i.id), [toc])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveId(id)
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed left-4 top-3 z-30 rounded bg-slate-800 px-3 py-2 text-sm text-white lg:hidden"
        aria-label="เปิด/ปิดสารบัญ"
      >
        ☰ สารบัญ
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-20 w-72 overflow-y-auto border-r border-slate-200 bg-white p-4 pt-16 transition-transform lg:translate-x-0 lg:pt-4 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          placeholder="ค้นหาหัวข้อ..."
          className="mb-4 w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
        <nav>
          <TocList
            items={toc}
            query={query}
            activeId={activeId}
            onClick={handleClick}
          />
        </nav>
      </aside>
    </>
  )
}
```

- [ ] **Step 2: แก้ `app/page.tsx` ประกอบ Sidebar + เนื้อหา**

```tsx
import fs from 'node:fs'
import path from 'node:path'
import CourseContent from '@/components/CourseContent'
import Sidebar from '@/components/Sidebar'
import { parseToc } from '@/lib/toc'

export default function Page() {
  const md = fs.readFileSync(
    path.join(process.cwd(), 'content/course.md'),
    'utf8',
  )
  const toc = parseToc(md, 3)
  return (
    <div className="lg:pl-72">
      <Sidebar toc={toc} />
      <main className="mx-auto px-6 py-10">
        <CourseContent markdown={md} />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: ยืนยันด้วยตา**

Run:
```bash
npm run dev
```
ตรวจที่ `http://localhost:3000`:
- sidebar ซ้ายแสดงหัวข้อทั้งหมด (Session ต่างๆ + sub-item เยื้อง)
- เลื่อนหน้า → หัวข้อใน sidebar ถูก highlight ตาม section ที่ดูอยู่
- คลิกหัวข้อ → เลื่อนไปยัง section แบบ smooth
- พิมพ์ในช่องค้นหา → รายการกรองเหลือเฉพาะที่ตรง
- ย่อจอ < 1024px → sidebar ซ่อน มีปุ่ม ☰ สารบัญ กดเปิด/ปิดได้
แล้ว Ctrl+C ปิด

- [ ] **Step 4: Commit**

```bash
git add components/Sidebar.tsx app/page.tsx
git commit -m "feat: sidebar TOC with search, active highlight, mobile toggle"
```

---

## Task 6: ProgressBar

**Files:**
- Create: `components/ProgressBar.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: สร้าง `components/ProgressBar.tsx`**

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-40 h-1 bg-transparent">
      <div
        className="h-full bg-blue-600 transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
```

- [ ] **Step 2: เพิ่ม ProgressBar ใน `app/page.tsx`**

แก้ `app/page.tsx` — เพิ่ม import และวาง `<ProgressBar />` เป็น element แรกใน return:

```tsx
import fs from 'node:fs'
import path from 'node:path'
import CourseContent from '@/components/CourseContent'
import Sidebar from '@/components/Sidebar'
import ProgressBar from '@/components/ProgressBar'
import { parseToc } from '@/lib/toc'

export default function Page() {
  const md = fs.readFileSync(
    path.join(process.cwd(), 'content/course.md'),
    'utf8',
  )
  const toc = parseToc(md, 3)
  return (
    <>
      <ProgressBar />
      <div className="lg:pl-72">
        <Sidebar toc={toc} />
        <main className="mx-auto px-6 py-10">
          <CourseContent markdown={md} />
        </main>
      </div>
    </>
  )
}
```

- [ ] **Step 3: ยืนยันด้วยตา**

Run:
```bash
npm run dev
```
ตรวจ: เลื่อนหน้าลง → แถบสีน้ำเงินบนสุดยาวขึ้นตาม % การอ่าน เลื่อนสุดหน้า = เต็มแถบ แล้ว Ctrl+C ปิด

- [ ] **Step 4: Commit**

```bash
git add components/ProgressBar.tsx app/page.tsx
git commit -m "feat: reading progress bar"
```

---

## Task 7: Production build + ตรวจสอบขั้นสุดท้าย

**Files:** ไม่มีไฟล์ใหม่ (เป็นการ verify)

- [ ] **Step 1: รัน test ทั้งหมด**

Run:
```bash
npm test
```
Expected: PASS ทุกเคส

- [ ] **Step 2: รัน production build**

Run:
```bash
npm run build
```
Expected: build สำเร็จ ไม่มี TypeScript error / ไม่มี error เรื่อง import — เห็น route `/` ถูก generate

- [ ] **Step 3: รัน production server แล้วตรวจ**

Run:
```bash
npm start
```
เปิด `http://localhost:3000` ไล่เช็ก Success Criteria ทั้งหมด:
1. sidebar แสดงหัวข้อครบถูกต้อง
2. active highlight ทำงานตอนเลื่อน
3. คลิก sidebar เลื่อนแบบ smooth ไปถูก section
4. ปุ่ม Copy ทุก code block ทำงาน
5. search กรองหัวข้อได้
6. progress bar เปลี่ยนตามการเลื่อน
7. responsive: ย่อจอแล้ว sidebar ยุบเป็น hamburger
8. ไม่มีการแสดงช่วงเวลาเรียน
แล้ว Ctrl+C ปิด

- [ ] **Step 4: เขียน README สั้นๆ**

Create `README.md`:
```md
# API Integration for Web & Mobile App — สื่อการสอน

เว็บสื่อการสอนคอร์ส API Integration (Next.js)

## รัน local
\`\`\`bash
npm install
npm run dev
# เปิด http://localhost:3000
\`\`\`

## แก้เนื้อหา
แก้ไฟล์ `content/course.md` — sidebar สารบัญสร้างจากหัวข้ออัตโนมัติ

## Deploy
push ขึ้น GitHub แล้วเชื่อม Vercel หรือใช้ `vercel` CLI
```

- [ ] **Step 5: Commit สุดท้าย**

```bash
git add -A
git commit -m "docs: add README"
```

---

## Self-Review Notes (ผู้เขียนแผนตรวจแล้ว)

- **Spec coverage:** ครบทุก success criteria ของ spec — sidebar auto (Task 2,5), active highlight (Task 5), copy (Task 4), search (Task 5), progress (Task 6), responsive (Task 5), ตัดเวลา (Task 3), deploy (Task 7 README)
- **ความเสี่ยง slug id ตรงกัน:** จัดการใน Task 2 โดย slug ทุก heading ตามลำดับด้วย github-slugger (ตัวเดียวกับ rehype-slug ใช้ภายใน) — id ใน TOC จึงตรงกับ id ที่ rehype-slug เรนเดอร์
- **ข้อควรระวังที่เหลือ:** ถ้ามีหัวข้อที่มี inline markdown (เช่น backticks) text ที่ slug อาจต่างเล็กน้อย — เนื้อหาต้นฉบับหัวข้อเป็นข้อความล้วนแทบทั้งหมด ถ้าเจอ section ที่ active highlight ไม่ตรง ให้ตรวจ id ของหัวข้อนั้นเป็นจุดแรก
```
