# 02 - Workshop Guide

ไฟล์นี้คือขั้นตอนทำงานระหว่างคอร์ส ให้ทำตามทีละช่วง

## Workshop 1: เลือกโปรเจกต์

เลือก 1 โปรเจกต์ที่อยากทำตลอดคอร์ส

ตัวเลือกที่แนะนำ:

- Landing Page สำหรับบริการของคุณ
- Portfolio สำหรับสมัครงานหรือรับงาน
- เว็บไซต์ธุรกิจ
- เว็บรับ Lead หรือฟอร์มติดต่อ

คำถามที่ต้องตอบ:

1. เว็บนี้ทำเพื่ออะไร
2. ใครคือคนที่จะเข้าเว็บ
3. เขามีปัญหาอะไร
4. คุณช่วยเขาอย่างไร
5. คุณอยากให้เขากดอะไร

## Workshop 2: เขียน Project Brief

กรอกข้อมูลให้ครบก่อน แล้วค่อยให้ AI ช่วยจัดรูปแบบ

ข้อมูลที่ต้องมี:

- ชื่อโปรเจกต์
- ประเภทเว็บไซต์
- เป้าหมายเว็บไซต์
- กลุ่มเป้าหมาย
- Pain Point
- จุดขาย
- Offer
- CTA หลัก
- Mood & Tone
- Section ที่คาดว่าจะมี

หลังได้ Brief จาก AI ให้ตรวจว่า:

- อ่านแล้วเข้าใจง่ายไหม
- กลุ่มเป้าหมายชัดไหม
- CTA ชัดไหม
- มีข้อมูลที่เกินจริงหรือไม่
- มีอะไรที่ไม่ตรงกับธุรกิจของคุณหรือไม่

## Workshop 3: วาง Section

ให้ AI ช่วยวางโครงหน้าเว็บจาก Brief แล้วคุณต้องตรวจลำดับเอง

ลำดับที่ใช้ได้บ่อย:

```text
Hero
↓
Problem
↓
Solution
↓
Services / Features
↓
Process
↓
Portfolio / Example
↓
Pricing / Offer
↓
FAQ
↓
Final CTA
```

ถ้า Section เยอะเกินไป ให้เลือกเฉพาะส่วนที่จำเป็นกับเป้าหมายเว็บ

## Workshop 4: สร้าง HTML Preview

ใช้ Section ที่ได้ให้ AI สร้าง HTML Preview

หลังได้ HTML แล้วให้ทำสิ่งนี้:

1. บันทึกเป็นไฟล์ `.html`
2. เปิดด้วย Browser
3. อ่านจากบนลงล่างเหมือนเป็นลูกค้าจริง
4. ตรวจว่าปุ่ม CTA เด่นไหม
5. ย่อหน้าจอหรือเปิดบนมือถือเพื่อดู Responsive
6. จดรายการที่ต้องแก้

อย่าเพิ่งรีบแปลงเป็น Next.js ถ้า Preview ยังไม่ชัด เพราะจะทำให้แก้ยากขึ้นในขั้นต่อไป

## Workshop 5: แปลงเป็น Next.js

เริ่มจากสร้างโปรเจกต์ Next.js แล้วให้ AI ช่วยแปลง HTML Preview เป็น Component

Component ที่ควรมี:

- `Hero`
- `Problem`
- `Solution`
- `Services`
- `Process`
- `Pricing`
- `FAQ`
- `ContactCTA`
- `Footer`

ตรวจหลังแปลง:

- หน้าเว็บยังเหมือน Preview หรือไม่
- ข้อความหายไหม
- สีและปุ่มยังถูกต้องไหม
- เปิดบนมือถือได้ไหม
- มี Error ใน Terminal หรือ Console หรือไม่

## Workshop 6: ใช้ GitHub

เมื่อเว็บเริ่มรันได้ ให้บันทึกงาน

คำสั่งพื้นฐาน:

```bash
git init
git add .
git commit -m "Initial website project"
git branch -M main
git remote add origin [GitHub Repository URL]
git push -u origin main
```

ควร Commit เมื่อ:

- สร้างโปรเจกต์เสร็จ
- แปลง HTML เป็น Component แล้ว
- แก้ Responsive แล้ว
- เพิ่ม Form แล้ว
- ก่อน Deploy

## Workshop 7: Deploy ด้วย Vercel

ขั้นตอนหลัก:

1. Push โค้ดขึ้น GitHub
2. เข้า Vercel
3. Import Repository
4. ตรวจว่า Framework เป็น Next.js
5. กด Deploy
6. เปิด URL จริง
7. ตรวจเว็บบนมือถือ

หลัง Deploy ให้จด:

- GitHub Repository URL
- Vercel URL
- สิ่งที่ต้องแก้ต่อ

## Workshop 8: วางแผนวัดผล

ตอบคำถามนี้:

```text
ถ้าเว็บนี้ทำงานได้ดี ผู้ใช้ควรทำอะไร?
```

ตัวอย่างสิ่งที่ควรวัด:

- กดปุ่ม LINE
- ส่งฟอร์ม
- กดโทร
- กดดูราคา
- กดดูผลงาน

ตั้งชื่อ Event ให้เข้าใจง่าย เช่น:

```text
click_line
submit_lead_form
click_call
click_pricing
click_portfolio
```

