import type { Lesson } from '../types'

const lesson08: Lesson = {
  title: 'Prompt Pack',
  sections: [
    {
      title: 'Prompt Pack',
      blocks: [
        {
          type: 'paragraph',
          text: 'Prompt Pack นี้ใช้เป็นจุดเริ่มต้นในการคุยกับ AI คุณสามารถคัดลอกไปใช้ได้ แต่ควรแทนข้อมูลในวงเล็บหรือช่องว่างด้วยข้อมูลจริงของโปรเจกต์ตัวเองทุกครั้ง',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'วิธีใช้ Prompt ให้ได้ผล',
          text: 'อย่าใช้ Prompt แบบเดิมซ้ำโดยไม่เติม context เพราะ AI จะต้องเดาเอง ให้ใส่ Brief, กลุ่มเป้าหมาย, Section หรือ Error ที่เกี่ยวข้องทุกครั้ง',
        },
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
          type: 'paragraph',
          text: 'ใช้ Prompt นี้ตอนเริ่มโปรเจกต์หรือเมื่อไอเดียยังไม่เป็นระบบ หลังได้คำตอบแล้วให้ตรวจว่า AI เติมข้อมูลเกินจริงหรือไม่ และ CTA ชัดพอหรือยัง',
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
          type: 'paragraph',
          text: 'ใช้ Prompt นี้หลังจาก Brief เริ่มนิ่งแล้ว ถ้า Section ที่ AI เสนอเยอะเกินไป ให้เลือกเฉพาะ Section ที่ช่วยให้ผู้ใช้ตัดสินใจได้จริง',
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
          type: 'paragraph',
          text: 'ใช้ Prompt นี้เพื่อสร้างภาพรวมหน้าเว็บก่อนเข้า Next.js หลังได้ HTML แล้วควรเปิดดูจริงใน Browser และตรวจด้วย Checklist ไม่ใช่เชื่อผลลัพธ์ทันที',
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
          type: 'paragraph',
          text: 'ใช้ Prompt นี้เมื่อ Preview ผ่านการตรวจแล้ว ควรขอให้ AI แยก Component ชัดเจนตั้งแต่แรก เพื่อให้แก้ต่อทีละส่วนได้ง่าย',
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
          type: 'paragraph',
          text: 'ใช้ Prompt นี้เมื่อเจอ Error โดยแปะเฉพาะ Error หลักและบริบทที่เกี่ยวข้อง ถ้า Error ยาวมาก ให้ส่ง 20-40 บรรทัดสุดท้ายก่อน',
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
        {
          type: 'paragraph',
          text: 'ใช้ Prompt นี้หลังมี Preview หรือเว็บจริงแล้ว ให้ AI รีวิวในมุมผู้ใช้และ Conversion จากนั้นเลือกแก้เฉพาะจุดที่กระทบมากที่สุดก่อน เช่น Hero, CTA หรือ FAQ',
        },
        {
          type: 'table',
          head: ['ช่วงงาน', 'Prompt ที่ควรใช้', 'สิ่งที่ต้องตรวจหลังได้คำตอบ'],
          rows: [
            ['เริ่มโปรเจกต์', 'Prompt 1', 'Brief ชัดและไม่เกินจริง'],
            ['วางหน้าเว็บ', 'Prompt 2', 'Section เรียงเป็นเรื่องเดียวกัน'],
            ['ทำตัวอย่าง', 'Prompt 3', 'Preview อ่านง่ายและ Responsive'],
            ['ขึ้นเว็บจริง', 'Prompt 4', 'แยก Component และรันได้'],
            ['แก้ปัญหา', 'Prompt 5', 'เข้าใจสาเหตุและแก้ตรงไฟล์'],
            ['เพิ่ม Conversion', 'Prompt 6', 'มีรายการแก้ที่จัดลำดับความสำคัญแล้ว'],
          ],
        },
      ],
    },
  ],
}

export default lesson08
