# API Integration for Web & Mobile App — สื่อการสอน

เว็บสื่อการสอนคอร์ส **API Integration for Web & Mobile App** (Next.js App Router)
แบ่งเป็น **11 บทเรียน** มีเลขบท/หัวข้อย่อย (เช่น บทที่ 3 → 3.1, 3.2) โดย**หัวข้อย่อยแต่ละอันเป็นคนละหน้า (route แยก)**

## ฟีเจอร์

- หน้าแรก (`/`) แสดงสารบัญทุกบท/หัวข้อย่อย
- หัวข้อย่อยละหน้า: `/lesson/{บท}/{หัวข้อย่อย}` เช่น `/lesson/3/2`
- Sidebar ซ้าย: ทุกบท (ย่อ/ขยายได้) + ค้นหา + ไฮไลต์หน้าปัจจุบัน + เมนู hamburger บนมือถือ
- ปุ่ม "ก่อนหน้า / ถัดไป" ไล่ต่อเนื่องข้ามบท + breadcrumb
- แถบความคืบหน้า (ตำแหน่งในคอร์ส)
- เนื้อหาเป็น **component จริง** (ไม่ใช่ markdown ดิบ): paragraph, heading, code (มีปุ่ม copy + syntax highlight), list, checklist, flow diagram, table, callout, definitions

## รัน local

```bash
npm install
npm run dev
# เปิด http://localhost:3000
```

## โครงสร้างเนื้อหา

เนื้อหาเก็บเป็น **structured data** (ไม่ render markdown):

- `lib/course/types.ts` — ชนิดของ block (heading/paragraph/code/list/checklist/flow/table/callout/definitions) และ `Lesson`/`Section`
- `lib/course/lesson-01.ts` … `lesson-11.ts` — เนื้อหาแต่ละบท (แก้บทไหนก็แก้ไฟล์นั้น)
- `lib/course/index.ts` — รวมบทเรียงลำดับเป็น `course[]` (เลขบท/หัวข้อย่อยคำนวณจากตำแหน่งใน array นี้)
- `lib/course/nav.ts` — สร้างลำดับหน้า, prev/next, สารบัญ (มี unit test ที่ `nav.test.ts`)

**เพิ่ม/ลบบท:** แก้ลำดับใน `lib/course/index.ts` แล้วเลขบท + route จะอัปเดตเอง
**แก้เนื้อหาในบท:** แก้ array `blocks` ใน `lib/course/lesson-XX.ts`

## โครงสร้างหน้า/คอมโพเนนต์

- `app/page.tsx` — หน้าแรก (สารบัญ)
- `app/lesson/[lesson]/[section]/page.tsx` — หน้าหัวข้อย่อย (static ทุกหน้า ผ่าน `generateStaticParams`)
- `app/layout.tsx` — Sidebar + progress + เนื้อหา
- `components/blocks/*` — ตัว render ของแต่ละ block
- `components/CodeBlock.tsx` + `CopyButton.tsx` — code + ปุ่ม copy (highlight.js ฝั่ง server)
- `components/Sidebar.tsx` / `Breadcrumb.tsx` / `LessonNav.tsx` / `CourseProgress.tsx`

## ทดสอบ

```bash
npm test
```

## Build / Deploy

```bash
npm run build
npm start
```

Deploy: push ขึ้น GitHub แล้วเชื่อม Vercel หรือใช้ `vercel` CLI (ทุกหน้าเป็น static)
