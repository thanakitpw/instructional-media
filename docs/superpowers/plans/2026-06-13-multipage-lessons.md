# Multipage Lessons — Implementation Plan (v2 redesign)

> **For agentic workers:** Execute task-by-task. Engine task first (sequential, fully reviewed), then per-lesson content porting (parallelizable — separate files).

**Goal:** Rebuild the site from a single markdown dump into a multi-page course: 11 lessons, numbered sub-sections (1.1, 1.2…), each sub-section its own static route, content as structured block-data rendered by components.

**Architecture:** `lib/course/*` holds typed `Block[]` data per lesson; `lib/course/nav.ts` derives ordering/prev-next; `app/lesson/[lesson]/[section]` statically renders each sub-section; Sidebar/Breadcrumb/LessonNav/CourseProgress use `usePathname()`. See spec `docs/superpowers/specs/2026-06-13-multipage-lessons-design.md`.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind v4, highlight.js (direct, server-side).

---

## Section → page mapping (approved)

```
1  บทนำ:        1.1 ภาพรวมคอร์ส | 1.2 เป้าหมายหลังเรียนจบ | 1.3 โปรเจกต์ตัวอย่าง
2  Session 1:   2.1 ภาพรวม&เป้าหมาย | 2.2 เนื้อหา&Flow | 2.3 Key Concept
3  Session 2:   3.1 Endpoint&Method | 3.2 Request&Response Body | 3.3 Status Code | 3.4 Workshop 1
4  Session 3:   4.1 Flow Web Form | 4.2 สิ่งที่ควรสอนในCode | 4.3 แยกไฟล์&API Function | 4.4 จุดที่ควรย้ำ
5  Session 4:   5.1 Flow&เหมือนWeb | 5.2 ต่าง&localhost | 5.3 วิธีแก้&Environment
6  Session 5:   6.1 Step1–3 | 6.2 Step4–6 | 6.3 Step7–9
7  Session 6:   7.1 วิธีคิดเวลาเจอError | 7.2 Error พบบ่อย | 7.3 Prompt AI Debug
8  Session 7:   8.1 Interface&คำศัพท์ | 8.2 Data Mapping&เช็ก | 8.3 Workshop Sheets | 8.4 Workshop LINE | 8.5 Auth&ErrorHandling
9  Session 8:   9.1 Local vs Prod&DeployFlow | 9.2 ตั้งค่าProd&Checklist | 9.3 เอกสารส่งมอบ
10 สรุป:        10.1 สรุปภาพรวม | 10.2 Final Checklist
11 ภาคผนวก:     11.1 Template README | 11.2 Prompt อธิบายโปรเจกต์ | 11.3 Prompt API Contract | 11.4 Prompt Data Mapping | 11.5 Prompt Debug Integration
```

## Block data contract (`lib/course/types.ts`)

```ts
export type Block =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'code'; lang: string; code: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'checklist'; items: string[] }
  | { type: 'flow'; steps: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'callout'; variant?: 'note' | 'warning' | 'key'; title?: string; text: string }
  | { type: 'definitions'; items: { term: string; desc: string }[] }

export interface Section { title: string; blocks: Block[] }
export interface Lesson { title: string; sections: Section[] }
```

Porting rules (apply to every lesson file):
- `↓`-style flow diagrams → `flow` block (steps array, no arrows in text).
- "Checklist ..." fenced text where each line is a check item → `checklist`.
- numbered goals/steps → `list` with `ordered:true`; bullet points → `list`.
- JSON/bash/ts/text fenced code → `code` with the right `lang` (`json`,`bash`,`ts`,`text`).
- "Key Concept", "จุดที่ควรย้ำ", "สิ่งที่ควรย้ำ/ควรระวัง" → `callout` (variant `key` or `warning`).
- คำศัพท์ (term + คำอธิบาย) → `definitions`.
- Data-mapping from→to → `table` (head `['ระบบ A','ระบบ B']` etc) or `definitions` where clearer.
- **Remove all schedule times** (no `HH:MM`). Keep code/JSON/IPs/ports/status-codes/phone numbers intact.
- Port faithfully — do not invent or summarize away content.

---

## Task E — Engine + Lesson 1 (do FIRST, full review)

**Create:**
- `lib/course/types.ts` (the contract above)
- `lib/course/lesson-01.ts` — port source sections 1–3 (ภาพรวมคอร์ส / เป้าหมายหลังเรียนจบ / โปรเจกต์ตัวอย่าง) into 1.1/1.2/1.3 as `Lesson`. This file is the REFERENCE example for all other lessons.
- `lib/course/index.ts` — `import lesson01 …; export const course: Lesson[] = [lesson01]` (later tasks append lesson02…11)
- `lib/course/nav.ts` — `flatSections(course)`, `getSection(l,s)`, `prevNext(l,s)`, all numbers derived from position; `href = '/lesson/'+L+'/'+S`
- `components/CodeBlock.tsx` — server: highlight `code` via `hljs.highlight(code,{language:lang})` (fallback to escaped plain text when lang unknown/`text`); render `<pre><code class="hljs" dangerouslySetInnerHTML>`; include client `CopyButton` (own file `components/CopyButton.tsx`, `'use client'`, receives `code` string, clipboard + Copied! + a11y from v1).
- `components/blocks/BlockList.tsx` (server) — maps `Block[]` to: `Callout`, `FlowDiagram`, `Checklist`, `DataTable`, `Definitions`, list (`<ol>/<ul>`), heading (`<h3>`), paragraph (`<p>`), `CodeBlock`. Create each presentational component under `components/blocks/`.
- `components/Sidebar.tsx` (rewrite, client) — nav of all 11 lessons (from a serializable nav tree built server-side and passed as prop, or import course in a client-safe way: build the tree in a server component and pass down); each lesson collapsible, sub-sections are `<Link href>`; active = `usePathname()` match; search filters by title; mobile hamburger + backdrop + Escape + body-lock (reuse v1 patterns).
- `components/Breadcrumb.tsx` — "บทที่ N: <lessonTitle> / <sectionTitle>".
- `components/LessonNav.tsx` — prev/next `<Link>`s from `prevNext`.
- `components/CourseProgress.tsx` (client) — thin top bar = (flatIndex+1)/total using `usePathname()`.
- `app/lesson/[lesson]/[section]/page.tsx` — `generateStaticParams` from `flatSections`; resolves params→section; renders Breadcrumb + `<h1>บทที่ L.S … </h1>` + `BlockList` + `LessonNav`; `notFound()` for bad params.
- rewrite `app/page.tsx` — course home: title + list of all lessons & their sub-sections as links.
- rewrite `app/layout.tsx` — `<CourseProgress/>` + `<Sidebar …/>` + `<main>` wrapper (keep Noto Sans Thai + hljs theme + globals).

**Delete:** `lib/toc.ts`, `lib/toc.test.ts`, `components/CourseContent.tsx`, `components/ProgressBar.tsx`.

**Verify:** `npm run build` passes; `npm start` bg + curl: `/` lists lessons; `/lesson/1/1`, `/lesson/1/2`, `/lesson/1/3` render with content + breadcrumb + a next link; `grep hljs` >0 on a page with code; no `HH:MM` time range anywhere; old routes gone. Commit `feat: multi-page lesson engine + lesson 1`.

## Tasks L2–L11 — port each lesson (after Engine approved)

For each lesson N (2…11): create `lib/course/lesson-0N.ts` exporting a `Lesson` matching the section mapping, ported from the corresponding source Session/section per the porting rules, using `lesson-01.ts` as the style reference. Append to `lib/course/index.ts`. These can be authored in parallel (separate files). After authoring a batch, append all to index, run `npm run build`, verify each new route renders + no `HH:MM`, then commit.

## Final
- Whole-site review: all 38 routes build static; nav prev/next continuous across lessons; sidebar+search+mobile; no markdown rendering remains; no time leak; spec success criteria 1–9 met.
- Update README to describe the new structure (`lib/course/*`, routes).

## Self-review notes
- Sidebar is client but `course` data import on client is fine (it's static JSON-like data, no server-only deps) — alternatively pass a stripped nav tree as a prop from layout (server). Prefer passing a serializable nav tree to keep the client bundle lean.
- numbers derived from array position → never out of sync with order.
- `dangerouslySetInnerHTML` only on hljs output (trusted), never on raw user text.
