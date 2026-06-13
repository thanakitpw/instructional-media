# API Integration for Web & Mobile App — สื่อการสอน

เว็บสื่อการสอนคอร์ส API Integration for Web & Mobile App (Next.js)
หน้าเดียวยาว มีสารบัญ sidebar ด้านซ้าย, ค้นหา, active highlight, ปุ่ม copy โค้ด และ progress bar

## รัน local

```bash
npm install
npm run dev
# เปิด http://localhost:3000
```

## แก้เนื้อหา

แก้ไฟล์ `content/course.md` — สารบัญ sidebar ถูกสร้างจากหัวข้อ (heading) อัตโนมัติ
หัวข้อระดับ H1–H3 จะกลายเป็นรายการในสารบัญ

## โครงสร้างหลัก

- `content/course.md` — เนื้อหาคอร์สทั้งหมด
- `lib/toc.ts` — แปลงหัวข้อ markdown เป็นโครงสารบัญ (มี unit test)
- `components/Sidebar.tsx` — สารบัญ + ค้นหา + active highlight + เมนูมือถือ
- `components/CourseContent.tsx` — เรนเดอร์ markdown
- `components/CodeBlock.tsx` — code block + ปุ่ม copy
- `components/ProgressBar.tsx` — แถบความคืบหน้าการอ่าน

## ทดสอบ

```bash
npm test
```

## Build / Deploy

```bash
npm run build
npm start
```

Deploy: push ขึ้น GitHub แล้วเชื่อม Vercel หรือใช้ `vercel` CLI
