# 06 - AI Coding Skills & Context Management

## บทนี้ใช้สอนเพื่ออะไร

การใช้ AI ทำเว็บให้ได้ผลไม่ได้อยู่ที่ Prompt เดียว แต่อยู่ที่ Workflow ที่ทำซ้ำได้ ผู้เรียนควรรู้วิธีแบ่งงานให้เล็กลง ใช้ Skill หรือชุดคำสั่งเฉพาะทาง และจัดการ Context ไม่ให้ AI อ่านข้อมูลเกินจำเป็น

## Skill คืออะไร

ในบริบทของ AI Coding คำว่า Skill หมายถึงชุดคำสั่ง Workflow หรือ Checklist ที่ทำซ้ำได้ เพื่อให้ AI ทำงานอย่างมีระบบมากขึ้น ไม่ต้องแปะ Prompt เดิมซ้ำทุกครั้ง

สำหรับเครื่องมือบางตัว Skill อาจอยู่ในรูปแบบไฟล์ `SKILL.md` หรือคำสั่งเฉพาะของเครื่องมือนั้น ๆ แต่ในคอร์สนี้ให้สอนเป็นหลักคิดก่อน:

```text
Skill = วิธีทำงานซ้ำที่เราทำให้ AI เข้าใจและเรียกใช้ได้ง่าย
```

## Skill ที่จำเป็นสำหรับคอร์สนี้

ไม่ควรให้ผู้เรียนติดตั้งหรือสร้าง Skill เยอะเกินไป แนะนำ 6 Skill หลัก:

1. Project Brief Skill
2. Landing Page Review Skill
3. Component Builder Skill
4. Debug Skill
5. Deploy Checklist Skill
6. Token Saving / Context Management Skill

## Skill 1: Project Brief Skill

ใช้เมื่อผู้เรียนต้องการแปลงไอเดียเว็บให้กลายเป็น Brief ที่ AI เข้าใจ

ใช้สำหรับ:

- สรุปโจทย์เว็บไซต์
- ระบุกลุ่มเป้าหมาย
- ระบุ Pain Point
- ระบุจุดขาย
- แนะนำ Section ที่ควรมี
- กำหนด CTA หลัก

ตัวอย่างคำสั่ง:

```text
ช่วยทำหน้าที่เป็น Project Brief Assistant
เปลี่ยนไอเดียเว็บไซต์ของฉันให้เป็น Brief ที่พร้อมใช้สร้าง Landing Page
ให้มีเป้าหมาย กลุ่มเป้าหมาย Pain Point จุดขาย Section และ CTA
```

## Skill 2: Landing Page Review Skill

ใช้รีวิวหน้าเว็บในมุม UX/UI และ Conversion

เกณฑ์รีวิว:

1. ผู้ใช้เข้าใจ offer ภายใน 5 วินาทีไหม
2. Hero headline ชัดและเน้นผลลัพธ์ไหม
3. CTA มองเห็นและวางถูกจังหวะไหม
4. หน้าเว็บพูดปัญหาของผู้ใช้ชัดไหม
5. Solution ตรงกับกลุ่มเป้าหมายไหม
6. Section เรียงเป็นเรื่องเดียวกันไหม
7. มี trust เช่น proof, process, FAQ, example พอไหม
8. Mobile readability ดีพอไหม

Output ที่ควรขอ:

```text
- สิ่งที่ดีอยู่แล้ว
- สิ่งที่ควรปรับ
- Priority Fixes
- ข้อความที่แนะนำให้เขียนใหม่
```

## Skill 3: Component Builder Skill

ใช้เมื่ออยากให้ AI สร้างหรือแก้ Component แบบไม่ไปยุ่งไฟล์อื่น

กฎสำคัญ:

- ทำทีละ Component
- ไม่แก้ไฟล์อื่นถ้าไม่จำเป็น
- ใช้ TypeScript
- ใช้ Tailwind CSS
- รักษาสไตล์ของโปรเจกต์
- ทำ Responsive
- ถ้าโจทย์ไม่ชัด ให้ถามก่อน

ตัวอย่าง:

```text
ช่วยสร้าง components/Pricing.tsx สำหรับ Landing Page รับทำเว็บไซต์
ใช้ TypeScript และ Tailwind CSS
มี 3 แพ็กเกจ เน้นแพ็กเกจกลางเป็นแนะนำ
ยังไม่ต้องแก้ไฟล์อื่น
```

## Skill 4: Debug Skill

ใช้สำหรับวิเคราะห์ Error แบบเป็นระบบ

Debug Process:

1. ระบุ Error Type
2. หาตำแหน่งไฟล์หรือ config ที่น่าจะเกี่ยวข้อง
3. อธิบายสาเหตุแบบสั้น
4. เสนอวิธีแก้ที่เล็กที่สุด
5. ถ้าต้องเปลี่ยนกว้าง ให้ถามก่อน
6. บอกคำสั่งตรวจผลหลังแก้

ข้อมูลที่ควรส่ง:

- command ที่รัน
- full error message หรือ 20-40 บรรทัดสุดท้าย
- files recently changed
- expected behavior
- actual behavior

## Skill 5: Deploy Checklist Skill

ใช้เช็กก่อนส่งเว็บขึ้น Vercel

Checklist:

1. Run `npm run build`
2. Check TypeScript errors
3. Check environment variables
4. Check image paths and public assets
5. Check CTA links
6. Check form submission
7. Check metadata title and description
8. Check responsive layout
9. Check console errors
10. Push to GitHub and deploy on Vercel

## Skill 6: Context Saver Skill

ใช้ช่วยคุม Token และ Context เวลาใช้ AI ทำเว็บ

ใช้สำหรับ:

- สรุปสถานะโปรเจกต์ก่อนเปิด Chat ใหม่
- บอกว่าไฟล์ไหนควรให้ AI อ่าน
- ตัด Error Log ให้เหลือส่วนสำคัญ
- ป้องกัน AI แก้หลายเรื่องพร้อมกัน
- ลดการแปะ Prompt ซ้ำ

Handoff Summary Format:

```text
1. Project goal
2. Tech stack
3. Current status
4. Important files
5. Completed work
6. Next task
7. Known issues
8. Commands to run
9. Constraints and design rules
```

## Token คืออะไรแบบเข้าใจง่าย

Token คือหน่วยที่ AI ใช้อ่านและเขียนข้อมูล ยิ่งเราใส่ข้อมูลเยอะ AI ก็ต้องอ่านเยอะ และยิ่ง AI ตอบยาวก็ใช้ Token ฝั่ง Output เยอะขึ้น

ให้ผู้เรียนจำง่าย ๆ:

```text
Token = งบประมาณความจำของ AI ในแต่ละรอบ
```

สิ่งที่ทำให้ Token หมดเร็ว:

- แปะโค้ดทั้งไฟล์ ทั้งที่แก้แค่ส่วนเดียว
- ให้ AI อ่านทั้งโปรเจกต์โดยไม่จำเป็น
- คุยใน Chat เดิมยาวเกินไป
- ส่ง Error Log ยาวเกินไป
- แปะ Requirement เดิมซ้ำทุกครั้ง
- สั่ง AI แก้หลายเรื่องในรอบเดียว
- ให้ AI Rewrite ทั้งหน้า ทั้งที่ควรแก้แค่ Component เดียว

## หลัก Context Hygiene

ก่อนสั่ง AI ทุกครั้ง ให้ถามตัวเอง 4 ข้อ:

```text
AI จำเป็นต้องรู้อะไรบ้างเพื่อทำงานนี้?
AI ไม่จำเป็นต้องรู้อะไร?
ควรให้ AI ดูไฟล์ไหนเท่านั้น?
อยากให้ AI แก้อะไรแบบเฉพาะเจาะจง?
```

Prompt ที่เปลือง Token:

```text
ช่วยดูโปรเจกต์ทั้งหมดแล้วแก้หน้าเว็บให้ดูดีขึ้น
```

Prompt ที่ดีกว่า:

```text
ช่วยแก้เฉพาะ Hero Section ในไฟล์ components/Hero.tsx
เป้าหมายคือปรับข้อความให้ขายคอร์ส Vibe Code Website Bootcamp ได้ชัดขึ้น
ยังไม่ต้องแก้ไฟล์อื่น
ตอบกลับเฉพาะ code ที่ต้องเปลี่ยนและเหตุผลสั้น ๆ
```

## แยก Task ให้เล็กลง

แทนที่จะสั่ง AI ให้ทำทุกอย่างพร้อมกัน ให้แบ่งงานเป็นรอบเล็ก ๆ:

```text
รอบที่ 1: วาง Section
รอบที่ 2: ทำ Hero
รอบที่ 3: ทำ Course Outline
รอบที่ 4: ทำ Pricing
รอบที่ 5: ทำ FAQ
รอบที่ 6: ตรวจ Responsive
รอบที่ 7: เชื่อม Form
รอบที่ 8: Deploy
```

หลักการ:

> งานเล็กลง = AI เข้าใจง่ายขึ้น = ใช้ Token น้อยลง = แก้ผิดน้อยลง

## ใช้ไฟล์กลางแทนการแปะ Prompt ซ้ำ

สำหรับโปรเจกต์ที่ทำเว็บจริง ควรมีไฟล์กลางสำหรับบอก AI ว่าโปรเจกต์นี้มี Stack อะไร กฎการเขียนโค้ดเป็นอย่างไร และคำสั่งรันคืออะไร

ไฟล์ที่แนะนำ:

```text
AGENTS.md
CLAUDE.md
PROJECT_BRIEF.md
DESIGN_GUIDE.md
COPY_GUIDE.md
```

ตัวอย่าง `AGENTS.md`:

```md
# AGENTS.md

## Project Overview
This project is a Vibe Code Website Bootcamp landing page.

## Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- Vercel

## Design Style
- Modern
- Clean
- Premium
- Orange / White / Black

## Coding Rules
- Use reusable components
- Keep components small
- Do not edit unrelated files
- Ask before changing folder structure

## Commands
- Install: npm install
- Dev: npm run dev
- Build: npm run build
```

## วิธี Debug แบบประหยัด Token

เวลามี Error ไม่ควร Copy Terminal ทั้งก้อนยาว ๆ ให้ AI

รูปแบบที่ควรส่ง:

```text
สิ่งที่กำลังทำ:
- รัน npm run dev

ไฟล์ที่เพิ่งแก้:
- components/Hero.tsx

Error หลัก:
[วางเฉพาะ error 20-40 บรรทัดสุดท้าย]

สิ่งที่ต้องการ:
- ช่วยบอกสาเหตุ
- บอกไฟล์ที่ควรแก้
- ยังไม่ต้อง rewrite ทั้งไฟล์
```

คำสั่งที่ควรใส่ท้าย Prompt:

```text
ตอบสั้น กระชับ
แสดงเฉพาะส่วนที่ต้องแก้
ไม่ต้อง rewrite ทั้งไฟล์
ถ้าไม่แน่ใจให้ถามก่อน อย่าเดา
```

