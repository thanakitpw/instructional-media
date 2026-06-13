# Design Spec: เว็บสื่อการสอน API Integration for Web & Mobile App

วันที่: 2026-06-13

## 1. เป้าหมาย

แปลงเนื้อหาคอร์ส `api_integration_private_course_1day.md` (Private Course 1 วัน
เรื่อง API Integration for Web & Mobile App) ให้เป็นเว็บไซต์สื่อการสอนแบบ
docs-style ที่มีสารบัญเป็น sidebar ด้านซ้าย ผู้เรียนเปิดอ่าน/ทบทวนเองได้
โดยไม่ผูกกับตารางเวลาเรียน

## 2. ขอบเขต (Scope)

ในขอบเขต:
- เว็บหน้าเดียว (single-page) แสดงเนื้อหาทั้งคอร์สแบบเลื่อนอ่าน
- sidebar สารบัญด้านซ้าย สร้างอัตโนมัติจากหัวข้อในไฟล์เนื้อหา
- ฟีเจอร์: active highlight, ปุ่ม copy โค้ด, search, progress bar, responsive

นอกขอบเขต (YAGNI):
- Dark mode (ผู้ใช้เลือกไม่เอา — ทำ light theme อย่างเดียว)
- ระบบ login / บันทึกความคืบหน้าถาวร
- แยกเนื้อหาหลายหน้า (multipage)
- ระบบ CMS / แก้เนื้อหาผ่าน UI

## 3. การตัดสินใจหลัก (Decisions)

1. **Tech stack:** Next.js (App Router) + TypeScript + Tailwind CSS
2. **โครงหน้า:** single-page ยาว + scroll-spy (ไม่แยกหลายหน้า)
3. **เนื้อหา:** เก็บเป็นไฟล์ markdown ไฟล์เดียว แล้วเรนเดอร์ + สร้าง sidebar
   อัตโนมัติจากหัวข้อ (แนวทาง A)
4. **ตัดเรื่องเวลาออกทั้งหมด:** ไม่มี badge เวลา (เช่น 10:00-10:30) และไม่โชว์
   ช่วงเวลาในหัวข้อ Session — เหลือแค่ชื่อ Session กับเนื้อหา

## 4. สถาปัตยกรรม (Architecture)

### Content flow
```
content/course.md  (เนื้อหา ตัดเวลาออก)
        ↓ อ่านตอน build (fs)
lib/toc.ts  → parse หัวข้อ H1/H2/H3 เป็นโครง TOC + slug id
        ↓
page.tsx  → react-markdown เรนเดอร์เนื้อหา (ใส่ id ให้หัวข้อ)
Sidebar.tsx → แสดง TOC + search + active highlight (IntersectionObserver)
```

### โครงไฟล์
```
app/
  layout.tsx          โครงหลัก + ProgressBar + Sidebar
  page.tsx            อ่าน course.md, เรนเดอร์เนื้อหา
  globals.css         Tailwind + style โค้ด/ตาราง
components/
  Sidebar.tsx         TOC + ช่อง search + active highlight + hamburger (มือถือ)
  CodeBlock.tsx       render code block + ปุ่ม Copy
  ProgressBar.tsx     แถบ progress การเลื่อนอ่าน
lib/
  toc.ts              แปลงหัวข้อ markdown → โครง sidebar (nested)
  markdown.ts         อ่านไฟล์ + config react-markdown/rehype
content/
  course.md           เนื้อหาคอร์ส (คัดลอกจากต้นฉบับ ตัดเวลาออก)
```

## 5. รายละเอียด Component / Unit

### lib/toc.ts
- หน้าที่: รับ markdown string คืนโครง TOC แบบ nested
  `[{ id, title, level, children }]` พร้อม slug id ที่ตรงกับ rehype-slug
- ขึ้นกับ: ตัว slugify เดียวกับ rehype-slug เพื่อให้ id ตรงกัน
- ทดสอบได้อิสระ: input markdown → output โครง TOC

### components/Sidebar.tsx
- หน้าที่: แสดง TOC, ช่อง search (กรองหัวข้อ client-side), highlight section
  ที่กำลังดูด้วย IntersectionObserver, คลิก → smooth scroll, มือถือยุบเป็นเมนู
- ขึ้นกับ: โครง TOC จาก lib/toc.ts, id ของหัวข้อในเนื้อหา

### components/CodeBlock.tsx
- หน้าที่: เรนเดอร์ code block พร้อม syntax highlighting + ปุ่ม Copy
  (กดแล้วขึ้น "Copied!")
- ขึ้นกับ: clipboard API

### components/ProgressBar.tsx
- หน้าที่: แถบบนสุดบอก % การเลื่อนอ่านตามตำแหน่ง scroll เทียบความสูงหน้า

## 6. ฟีเจอร์และเกณฑ์ผ่าน (Success Criteria)

1. Sidebar แสดงหัวข้อทั้งหมดถูกต้องตามเนื้อหา และ sync อัตโนมัติเมื่อแก้ไฟล์ md
2. เลื่อนอ่านแล้วหัวข้อใน sidebar ถูก highlight ตาม section ที่กำลังดู
3. คลิกหัวข้อใน sidebar แล้วเลื่อนไปยัง section นั้นแบบ smooth
4. ทุก code block มีปุ่ม Copy ที่ทำงานได้จริง
5. ช่องค้นหากรองหัวข้อได้ทันทีแบบ client-side
6. Progress bar เปลี่ยนตามตำแหน่งการเลื่อน
7. บนมือถือ sidebar ยุบเป็น hamburger และเนื้อหาอ่านได้ดี
8. ไม่มีการแสดงช่วงเวลาเรียนใดๆ ในเว็บ

## 7. การ Deploy

- รัน local: `npm install` → `npm run dev` → เปิด `http://localhost:3000`
- deploy ขึ้น Vercel ได้ (push GitHub → Vercel) หรือ `vercel` CLI

## 8. ความเสี่ยง / จุดต้องระวัง

- id จาก rehype-slug ต้องตรงกับ id ที่ toc.ts สร้าง ไม่งั้น scroll-spy เพี้ยน
  → ใช้ slugify ตัวเดียวกัน หรืออ่าน id จาก DOM ที่ rehype สร้างจริง
- เนื้อหาภาษาไทยมีหัวข้อซ้ำได้ → slug ต้องกันชนกัน (เติม suffix)
- code block มีหลายภาษา (bash/json/ts/text) ต้องเรนเดอร์ครบ
