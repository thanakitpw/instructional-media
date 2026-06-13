# 03 - Next.js Build Workflow

## บทนี้เรียนไปเพื่ออะไร

หลังจากได้ HTML Preview แล้ว ผู้เรียนต้องเปลี่ยนหน้าเว็บตัวอย่างให้กลายเป็นโปรเจกต์จริงที่ดูแลต่อได้ บทนี้สอนแนวคิด Next.js เบื้องต้น การแยก Component การใช้ AI แก้โค้ดแบบเจาะจง การใช้ Git/GitHub และการ Debug อย่างเป็นระบบ

## Next.js คืออะไรแบบเข้าใจง่าย

Next.js คือ Framework สำหรับสร้างเว็บไซต์และ Web App ด้วย React เหมาะกับการทำเว็บไซต์จริง เพราะมีโครงสร้างชัดเจน Deploy ง่าย และทำงานร่วมกับ Vercel ได้ดี

เปรียบเทียบง่าย ๆ:

```text
HTML Preview = หน้าเว็บตัวอย่างที่ทำให้เห็นภาพ
Next.js = โปรเจกต์จริงที่พร้อมพัฒนาและ Deploy
Component = ชิ้นส่วนของหน้าเว็บ เช่น Hero, Pricing, FAQ
Page = หน้าหลักของเว็บไซต์
Deploy = การนำเว็บขึ้นออนไลน์
```

## โครงสร้างโปรเจกต์ Next.js เบื้องต้น

```text
my-website/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── public/
│   └── images/
├── package.json
└── README.md
```

ไฟล์สำคัญ:

- `app/page.tsx` คือหน้าหลักของเว็บไซต์
- `app/layout.tsx` คือโครงหลักของเว็บ เช่น metadata และ layout รวม
- `app/globals.css` คือไฟล์ CSS หลัก
- `components/` คือโฟลเดอร์เก็บส่วนประกอบของหน้าเว็บ
- `public/` คือโฟลเดอร์เก็บรูปภาพ โลโก้ ไอคอน หรือไฟล์ static
- `package.json` คือไฟล์เก็บข้อมูลโปรเจกต์และคำสั่งรัน

## การแปลง HTML Preview เป็น Component

HTML Preview ที่ได้จาก Day 1 มักเป็นไฟล์เดียว แต่เว็บจริงควรแยกเป็น Component

```text
HTML Preview ทั้งหน้า
↓
Navbar
Hero
Problem
Solution
Services
Process
Portfolio
Pricing
FAQ
ContactCTA
Footer
```

ข้อดีของการแยก Component:

- โค้ดอ่านง่ายขึ้น
- แก้เฉพาะส่วนได้ง่าย
- เพิ่มหรือลบ Section ได้ง่าย
- ทำงานร่วมกับ AI ได้แม่นขึ้น
- ลดความเสี่ยงที่ AI จะแก้ทั้งไฟล์จนพัง

## Prompt สำหรับแปลง HTML เป็น Next.js

```text
ฉันมี HTML Preview ของ Landing Page ด้านล่าง
ช่วยแปลงเป็น Next.js App Router โดยแยกเป็น Component ให้เรียบร้อย

เงื่อนไข:
- ใช้ TypeScript
- ใช้ Tailwind CSS
- แยก Component เป็นไฟล์ในโฟลเดอร์ components
- หน้าแรกอยู่ที่ app/page.tsx
- รักษา Layout, สี, ข้อความ และโครงสร้างเดิมให้ใกล้เคียงที่สุด
- โค้ดต้องอ่านง่ายและแก้ไขต่อได้
- ถ้ามีส่วนที่ควรปรับให้เหมาะกับ Next.js ให้แนะนำก่อน

HTML Preview:
[วางโค้ด HTML ตรงนี้]
```

## การแก้ข้อความ รูป สี และ Section ด้วย AI

หลังจากแปลงเป็น Next.js แล้ว ควรสั่ง AI แบบเจาะจงมากขึ้น

### แก้ Hero

```text
ช่วยแก้ Hero Section ให้ข้อความดูขายมากขึ้น
กลุ่มเป้าหมายคือเจ้าของธุรกิจ SME
ขอ Headline 5 แบบ และเลือกแบบที่เหมาะที่สุดมาใส่ใน Component Hero.tsx
ยังไม่ต้องแก้ไฟล์อื่น
```

### ปรับสี

```text
ช่วยปรับสีของเว็บให้ใช้โทนส้ม ขาว ดำ ดูพรีเมียมขึ้น
แต่ยังต้องอ่านง่ายบนมือถือ
แก้เฉพาะ className ที่เกี่ยวกับสีในไฟล์ components/Hero.tsx และ components/Pricing.tsx
```

### เพิ่ม FAQ

```text
ช่วยเพิ่ม FAQ Section จำนวน 6 คำถาม
เน้นตอบข้อกังวลของลูกค้าที่อยากจ้างทำเว็บไซต์
สร้างเป็น components/FAQ.tsx และ import ไปใช้ใน app/page.tsx
```

## พื้นฐาน Git และ GitHub

Git คือระบบเก็บประวัติการแก้ไขโค้ด ทำให้ย้อนกลับ ดูประวัติ หรือบันทึกจุดสำคัญของงานได้

GitHub คือที่เก็บโปรเจกต์ออนไลน์ และใช้เชื่อมต่อกับ Vercel เพื่อ Deploy เว็บได้

คำที่ควรรู้:

- `git init` = เริ่มใช้ Git ในโปรเจกต์
- `git add .` = เลือกไฟล์ที่จะบันทึก
- `git commit` = บันทึกจุดสำคัญของงาน
- `git push` = ส่งโค้ดขึ้น GitHub
- Repository = ที่เก็บโปรเจกต์

คำสั่งพื้นฐาน:

```bash
git init
git add .
git commit -m "Initial website project"
git branch -M main
git remote add origin [GitHub Repository URL]
git push -u origin main
```

ตัวอย่าง Commit Message:

```bash
git commit -m "Add hero section"
git commit -m "Update pricing content"
git commit -m "Fix mobile responsive layout"
git commit -m "Add contact form section"
```

## วิธีอ่าน Error และให้ AI ช่วย Debug

Error เป็นเรื่องปกติในการพัฒนาเว็บ สิ่งสำคัญคือการอ่านและไล่ปัญหาอย่างเป็นระบบ

ข้อมูลที่ควรส่งให้ AI เวลา Debug:

1. กำลังทำอะไร
2. คำสั่งที่รัน
3. Error ที่ขึ้น
4. ไฟล์ที่เกี่ยวข้อง
5. สิ่งที่ลองแก้ไปแล้ว

Prompt Debug:

```text
ตอนนี้ฉันกำลังรันโปรเจกต์ Next.js แล้วเจอ Error ด้านล่าง

สิ่งที่ทำ:
- แก้ไฟล์ components/Hero.tsx
- รันคำสั่ง npm run dev

Error:
[วาง Error ตรงนี้]

ช่วยอธิบายว่า Error นี้เกิดจากอะไรแบบเข้าใจง่าย
และบอกวิธีแก้ทีละขั้นตอน
ถ้าต้องแก้โค้ด ช่วยบอกด้วยว่าต้องแก้ไฟล์ไหน
ยังไม่ต้อง rewrite ทั้งโปรเจกต์
```

## Checklist ก่อน Deploy

- รันเว็บในเครื่องได้
- ไม่มี Error ใน Terminal
- หน้าเว็บโหลดครบทุก Section
- รูปภาพแสดงถูกต้อง
- ปุ่ม CTA กดได้
- Responsive บนมือถือพอใช้ได้
- ไม่มีข้อความ Placeholder
- ข้อมูลติดต่อถูกต้อง
- Title และ Description ของเว็บตั้งค่าแล้ว
- Commit ล่าสุดเรียบร้อย
- Push ขึ้น GitHub แล้ว

## Workshop: ขึ้นโปรเจกต์ Next.js จาก HTML Preview

### สิ่งที่ผู้เรียนต้องทำ

1. สร้างโปรเจกต์ Next.js
2. นำ HTML Preview จาก Day 1 มาให้ AI ช่วยแปลง
3. แยก Component หลัก
4. ปรับข้อความ สี รูป และ Section
5. รันเว็บในเครื่อง
6. แก้ Error เบื้องต้น
7. Commit โค้ด
8. Push ขึ้น GitHub

### ผลลัพธ์ที่ต้องได้

ผู้เรียนต้องมีโปรเจกต์ Next.js ที่รันได้ในเครื่อง และมี Repository บน GitHub

## สรุปท้ายบท

- HTML Preview คือจุดเริ่มต้น ไม่ใช่โครงสร้างสุดท้ายของเว็บจริง
- Next.js ช่วยให้เว็บเป็นระบบและ Deploy ง่าย
- Component ทำให้แก้งานง่ายและให้ AI ช่วยได้แม่นขึ้น
- GitHub คือขั้นตอนสำคัญก่อน Deploy
- Debug ที่ดีต้องส่ง context ให้ครบและจำกัดขอบเขตการแก้

