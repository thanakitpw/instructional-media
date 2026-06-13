# Design Spec v2: เว็บสื่อการสอนแบบแยกบทเรียนหลายหน้า

วันที่: 2026-06-13 (แก้จาก v1 single-page)

## 1. เป้าหมาย & การเปลี่ยนแปลงจาก v1

v1 เรนเดอร์ `content/course.md` ทั้งก้อนในหน้าเดียว ผู้ใช้ต้องการเปลี่ยนเป็น:
- แยกเป็น **บทเรียนมีเลขบท** (บทที่ 1, หัวข้อย่อย 1.1, 1.2 ...)
- **หัวข้อย่อยแต่ละอันเป็นคนละหน้า (route แยก)**
- เนื้อหาเป็น **โครงสร้าง/component จริง** ไม่ใช่ render markdown ดิบ

## 2. โครงบทเรียน (อนุมัติแล้ว)

11 บท ~38 หน้าย่อย:
- บท 1 บทนำ: 1.1 ภาพรวมคอร์ส, 1.2 เป้าหมายหลังเรียนจบ, 1.3 โปรเจกต์ตัวอย่าง
- บท 2 API Integration Overview: 2.1 ภาพรวม&เป้าหมาย, 2.2 เนื้อหา&Flow, 2.3 Key Concept
- บท 3 Request/Response & ทดสอบ API: 3.1 Endpoint&Method, 3.2 Request&Response Body, 3.3 Status Code, 3.4 Workshop 1
- บท 4 Web App เรียก API: 4.1 Flow Web Form, 4.2 สิ่งที่ควรสอนในCode, 4.3 แยกไฟล์&API Function, 4.4 จุดที่ควรย้ำ
- บท 5 Mobile App: 5.1 Flow&เหมือนWeb, 5.2 ต่าง&ปัญหา localhost, 5.3 วิธีแก้&Environment
- บท 6 Installation&Run: 6.1 Step1–3, 6.2 Step4–6, 6.3 Step7–9
- บท 7 Debug: 7.1 วิธีคิดเวลาเจอError, 7.2 Error พบบ่อย, 7.3 Prompt AI Debug
- บท 8 Interface Data: 8.1 Interface&คำศัพท์, 8.2 Data Mapping&เช็ก, 8.3 Workshop Google Sheets, 8.4 Workshop LINE, 8.5 Auth&Error Handling
- บท 9 Deploy: 9.1 Local vs Prod&Deploy Flow, 9.2 ตั้งค่าProd&Checklist, 9.3 เอกสารส่งมอบ
- บท 10 สรุป: 10.1 สรุปภาพรวม, 10.2 Final Checklist
- บท 11 ภาคผนวก: 11.1 Template README, 11.2 Prompt อธิบายโปรเจกต์, 11.3 Prompt API Contract, 11.4 Prompt Data Mapping, 11.5 Prompt Debug Integration

แหล่งเนื้อหา: `api_integration_private_course_1day.md` (พอร์ตเข้าโครง block data ให้ครบ)

## 3. สถาปัตยกรรม

### Content model (structured, ไม่มี markdown rendering)
`lib/course/types.ts`:
```ts
export type Block =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'code'; lang: string; code: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'checklist'; items: string[] }
  | { type: 'flow'; steps: string[] }          // render เป็น vertical stepper (แทน ↓)
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'callout'; variant?: 'note' | 'warning' | 'key'; title?: string; text: string }
  | { type: 'definitions'; items: { term: string; desc: string }[] }

export interface Section { title: string; blocks: Block[] }
export interface Lesson { title: string; sections: Section[] }
```
- เลขบท/หัวข้อย่อย **คำนวณจากตำแหน่ง**: lessonNum = index+1, sectionNum = `${L}.${j+1}` (ไม่ hardcode กันเลขเพี้ยน)
- ข้อมูลแยกไฟล์ต่อบท: `lib/course/lesson-01.ts` … `lesson-11.ts`, รวมที่ `lib/course/index.ts` → `export const course: Lesson[]`

### Nav helpers `lib/course/nav.ts`
- `flatSections(course)` → ลำดับ flat ของทุกหน้าย่อย `{ lessonNum, sectionNum, lessonTitle, title, href }` (href = `/lesson/${L}/${j+1}`)
- `getSection(L, S)` → `{ lesson, section, lessonNum, sectionNum }` หรือ null
- `prevNext(L, S)` → หน้าก่อนหน้า/ถัดไป (ไล่ข้ามบทต่อเนื่อง)

### Routing (Next.js App Router, static)
- `/` — หน้าแรกคอร์ส: ชื่อคอร์ส + ลิสต์ทุกบท/หัวข้อย่อย (เป็นการ์ด/TOC ลิงก์เข้าแต่ละหน้า)
- `/lesson/[lesson]/[section]/page.tsx` — หน้าหัวข้อย่อย; `generateStaticParams` สร้างทุกคู่จาก course; render blocks + breadcrumb + prev/next
- ทุกหน้า static ( port เนื้อหาตอน build)

### Components
- `components/Sidebar.tsx` (client) — ลิสต์ 11 บท + หัวข้อย่อย (ย่อ/ขยาย), highlight หน้าปัจจุบันด้วย `usePathname()`, ช่อง search กรอง title, hamburger บนมือถือ (+ backdrop/Escape/scroll-lock)
- `components/blocks/BlockList.tsx` (server) — รับ `blocks: Block[]` แล้ว switch type → render component ย่อย
- block components: `Callout`, `FlowDiagram`, `Checklist`, `DataTable`, `Definitions`, `BulletList`, และ `CodeBlock`
- `components/CodeBlock.tsx` — server: highlight ด้วย highlight.js (`hljs.highlight(code,{language})`) แล้ว render `<pre><code dangerouslySetInnerHTML>`; ปุ่ม copy เป็น client child `CopyButton` ที่รับ `code` ตรงๆ
- `components/LessonNav.tsx` (client หรือ server) — ปุ่ม ◀ ก่อนหน้า / ถัดไป ▶ (ลิงก์)
- `components/Breadcrumb.tsx` — "บทที่ N: <lesson> / <section title>"
- `components/CourseProgress.tsx` (client) — แถบบนบาง = ตำแหน่งในคอร์ส (flatIndex+1)/total อิง `usePathname()`
- `app/layout.tsx` — ครอบ Sidebar + CourseProgress + เนื้อหา
- `app/page.tsx` — home/overview

### Active highlight & progress
ใช้ `usePathname()` (route ปัจจุบัน) แทน IntersectionObserver — แม่นยำกว่าเพราะแต่ละหน้าย่อยเป็นคนละ route

## 4. ไฟล์ที่ต้องลบ/แทนที่จาก v1
- ลบ: `lib/toc.ts`, `lib/toc.test.ts`, `components/CourseContent.tsx` (ไม่ render md แล้ว)
- เขียนใหม่: `components/Sidebar.tsx`, `components/ProgressBar.tsx`→`CourseProgress.tsx`, `components/CodeBlock.tsx`, `app/page.tsx`
- คงไว้: `content/course.md` (เป็นแหล่งอ้างอิงพอร์ตเนื้อหา ไม่ render), `app/layout.tsx` (ปรับ), config ทั้งหมด

## 5. Success Criteria
1. มี 11 บท, หัวข้อย่อยมีเลข (1.1, 1.2, ...) แสดงถูกต้อง
2. แต่ละหัวข้อย่อยเป็น route แยก เปิดตรงได้ (เช่น `/lesson/3/2`)
3. หน้าแรกลิสต์ทุกบท/หัวข้อย่อย ลิงก์เข้าได้
4. Sidebar โชว์ทุกบท ย่อ/ขยายได้ highlight หน้าปัจจุบัน + search ได้
5. ปุ่มก่อนหน้า/ถัดไปไล่ต่อเนื่องข้ามบทถูกต้อง + breadcrumb ถูก
6. เนื้อหา port ครบทุกบท (code, flow, checklist, table, callout) เป็น component ไม่ใช่ markdown ดิบ
7. ปุ่ม copy โค้ดทำงาน, syntax highlight ทำงาน
8. ไม่มีช่วงเวลาเรียน (HH:MM) โผล่
9. `npm run build` ผ่าน (ทุกหน้า static), responsive

## 6. นอกขอบเขต
Dark mode, login, ความคืบหน้าถาวร, แก้เนื้อหาผ่าน UI, i18n

## 7. ความเสี่ยง
- พอร์ตเนื้อหาเยอะ (~38 หน้า) → ทำ engine + บท 1 ให้ render ได้ก่อน (de-risk) แล้วค่อย port บท 2-11 ตามรูปแบบเดียวกัน
- ความสม่ำเสมอของ block data ระหว่างบท → กำหนด types + บท 1 เป็นตัวอย่างอ้างอิงให้ทุก subagent ทำตาม
- highlight.js dangerouslySetInnerHTML เฉพาะผล highlight ของ hljs (เชื่อถือได้ ไม่ใช่ user input)
