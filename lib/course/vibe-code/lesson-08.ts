import type { Lesson } from '../types'

const lesson08: Lesson = {
  title: 'Prompt Pack',
  sections: [
    {
      title: 'Prompt Pack',
      blocks: [
        {
          type: 'heading',
          text: 'Prompt 1: สร้าง Project Brief',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ช่วยสร้าง Project Brief สำหรับเว็บไซต์จากข้อมูลนี้

ประเภทเว็บไซต์:
เป้าหมายของเว็บไซต์:
กลุ่มเป้าหมาย:
ปัญหาของกลุ่มเป้าหมาย:
จุดขาย:
Offer:
Tone & Mood:
สีที่ต้องการ:
CTA หลัก:
CTA รอง:
ข้อมูลที่ต้องการให้ลูกค้าทำ:
ตัวอย่างเว็บไซต์อ้างอิง:
สิ่งที่ไม่ต้องการให้มีในเว็บ:

ช่วยจัดเป็น Project Brief แบบละเอียด พร้อมแนะนำ Section ที่ควรมีในหน้าเว็บ`,
        },
        {
          type: 'heading',
          text: 'Prompt 2: วาง Section Landing Page',
        },
        {
          type: 'code',
          lang: 'text',
          code: `จาก Project Brief นี้ ช่วยวางโครง Landing Page แบบละเอียด

ขอให้จัด:
1. ลำดับ Section
2. เป้าหมายของแต่ละ Section
3. Headline
4. ข้อความอธิบาย
5. CTA
6. คำแนะนำด้าน UX/UI
7. สิ่งที่ควรระวัง

Project Brief:
[วางข้อมูล]`,
        },
        {
          type: 'heading',
          text: 'Prompt 3: สร้าง HTML Preview',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ช่วยสร้าง HTML Preview จากโครงหน้าเว็บนี้

เงื่อนไข:
- HTML + CSS ในไฟล์เดียว
- ดีไซน์ Modern, Clean, Premium
- รองรับมือถือ
- ใช้ภาษาไทย
- CTA ชัดเจน
- โครงสร้างอ่านง่าย
- เหมาะสำหรับนำไปแปลงเป็น Next.js ต่อ

ข้อมูล Section:
[วางข้อมูล]`,
        },
        {
          type: 'heading',
          text: 'Prompt 4: แปลง HTML เป็น Next.js',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ช่วยแปลง HTML Preview นี้เป็น Next.js App Router

เงื่อนไข:
- ใช้ TypeScript
- ใช้ Tailwind CSS
- แยก Component
- หน้าแรกอยู่ที่ app/page.tsx
- รักษาดีไซน์เดิม
- โค้ดอ่านง่าย
- อธิบายด้วยว่าแต่ละไฟล์ทำหน้าที่อะไร

HTML:
[วางโค้ด]`,
        },
        {
          type: 'heading',
          text: 'Prompt 5: Debug Error',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ฉันเจอ Error ในโปรเจกต์ Next.js

สิ่งที่กำลังทำ:
ไฟล์ที่แก้:
คำสั่งที่รัน:
Error ที่ขึ้น:

ช่วยอธิบายสาเหตุแบบเข้าใจง่าย
บอกวิธีแก้ทีละขั้นตอน
และระบุว่าต้องแก้ไฟล์ไหน`,
        },
        {
          type: 'heading',
          text: 'Prompt 6: รีวิว Landing Page เพื่อเพิ่ม Conversion',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ช่วยรีวิว Landing Page นี้ในมุม UX/UI และ Conversion

สิ่งที่อยากให้ช่วยดู:
1. Hero Section ชัดไหม
2. CTA เด่นไหม
3. Section เรียงดีไหม
4. ข้อความน่าเชื่อถือไหม
5. มีอะไรที่ควรเพิ่มหรือลด
6. ถ้าต้องการเพิ่ม Conversion ควรแก้ตรงไหน

ข้อมูลหน้าเว็บ:
[วางเนื้อหาเว็บ]`,
        },
      ],
    },
  ],
}

export default lesson08
