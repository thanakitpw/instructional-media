# สื่อการสอน — API Integration & Vibe Code

เว็บสื่อการสอน **2 คอร์ส** (Next.js App Router) แยกตามเรื่อง แต่ละคอร์สแบ่งเป็นบท/หัวข้อย่อย
(หัวข้อย่อยละหน้า) เนื้อหาเป็น component จริง ไม่ใช่ markdown ดิบ

- **API Integration for Web & Mobile App** — 11 บท
- **Vibe Code Website Bootcamp** — 10 บท

## Routing

```text
/                         หน้าเลือกคอร์ส (course picker)
/c/[course]               หน้าสารบัญของคอร์ส (lesson index)
/c/[course]/[lesson]/[section]   หน้าหัวข้อย่อย เช่น /c/vibe-code/2/3
```

`[course]` = `api-integration` | `vibe-code` (static ทุกหน้า)

## ฟีเจอร์

- หน้าแรกเลือกคอร์ส, Sidebar มี **ตัวสลับคอร์ส** + ค้นหา + ย่อ/ขยายบท + ไฮไลต์หน้าปัจจุบัน
- ปุ่มก่อนหน้า/ถัดไปต่อเนื่องข้ามบท + breadcrumb (รู้คอร์ส), แถบความคืบหน้า
- บล็อกเนื้อหา: paragraph, heading, code (copy + syntax highlight), list, checklist, flow, table, callout, definitions
- ดีไซน์ technical-docs (OKLCH, IBM Plex Sans/Thai + JetBrains Mono), responsive, reduced-motion

## โครงสร้างเนื้อหา

```text
lib/course/
  types.ts            Block / Section / Lesson / Course
  nav.ts              flatSections / getSection / prevNext / courseNav (href: /c/{slug}/{l}/{s})
  index.ts            registry: courses[] + getCourse(slug)
  api-integration.ts  คอร์ส API Integration (อ้าง lesson-01..11.ts)
  lesson-01..11.ts    เนื้อหาคอร์ส API Integration
  vibe-code.ts        คอร์ส Vibe Code (อ้าง vibe-code/lesson-01..10.ts)
  vibe-code/lesson-01..10.ts   เนื้อหาคอร์ส Vibe Code
```

**เพิ่มคอร์สใหม่:** สร้าง `lib/course/<slug>.ts` (export `Course`) แล้วเพิ่มใน `courses[]` ที่ `index.ts`
**แก้เนื้อหา:** แก้ array `blocks` ในไฟล์ lesson ของคอร์สนั้น — เลขบท/route อัปเดตจากลำดับให้เอง

แหล่งเนื้อหาต้นฉบับ: `api_integration_private_course_1day.md`, `docs/vibe-code-website-bootcamp/`

## คำสั่ง

```bash
npm install
npm run dev      # http://localhost:3000  (ใช้ตอนแก้เนื้อหา — hot reload)
npm test         # unit test ของ lib/course/nav
npm run build    # build static ทุกหน้า ทั้ง 2 คอร์ส
```

> ขณะแก้เนื้อหาให้ใช้ `npm run dev` อย่างเดียว — อย่ารัน `npm run build`/`npm start` ทับขณะมี server รันอยู่ (จะทำให้ CSS chunk hash ไม่ตรงแล้วหน้าโหลด CSS ไม่ขึ้น)

## Deploy

push ขึ้น GitHub แล้วเชื่อม Vercel หรือใช้ `vercel` CLI (ทุกหน้าเป็น static)

## ดีไซน์

ทิศทางและ design system อยู่ใน `PRODUCT.md` + `DESIGN.md` (ใช้ร่วมกับเครื่องมือ impeccable)
