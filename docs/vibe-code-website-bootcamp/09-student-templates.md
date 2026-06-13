# 09 - Student Templates

ไฟล์นี้เป็น Template ให้ผู้เรียนกรอกระหว่าง Workshop สามารถคัดลอกแต่ละส่วนไปใช้ในไฟล์ของตัวเองได้

## Template 1: Project Brief

```md
# Project Brief

## 1. ชื่อโปรเจกต์


## 2. ประเภทเว็บไซต์

- [ ] Landing Page ขายบริการ
- [ ] Portfolio Website
- [ ] Website สำหรับธุรกิจ
- [ ] Lead Generation Website
- [ ] อื่น ๆ:

## 3. เป้าหมายของเว็บไซต์


## 4. กลุ่มเป้าหมาย


## 5. Pain Point ของกลุ่มเป้าหมาย

- 
- 
- 

## 6. จุดขายหลัก


## 7. Offer หรือสิ่งที่นำเสนอ


## 8. CTA หลัก


## 9. CTA รอง


## 10. Tone & Mood


## 11. สีและสไตล์ที่ต้องการ


## 12. Section ที่คาดว่าจะมี

- Hero
- Problem
- Solution
- Services
- Process
- Portfolio / Example
- Pricing / Offer
- FAQ
- Contact / Final CTA

## 13. ข้อมูลที่ต้องการให้ลูกค้าส่งมา

- ชื่อ
- เบอร์โทร
- Email
- LINE ID
- ข้อความเพิ่มเติม

## 14. ตัวอย่างเว็บไซต์อ้างอิง


## 15. สิ่งที่ไม่ต้องการให้มีในเว็บ


## 16. ผลลัพธ์สุดท้ายที่ต้องการ


```

## Template 2: Landing Page Section Plan

```md
# Landing Page Section Plan

## 1. Hero

เป้าหมายของ Section:

Headline:

Subheadline:

CTA หลัก:

CTA รอง:

สิ่งที่ควรเห็นใน Section นี้:

## 2. Problem

เป้าหมายของ Section:

Pain Point ที่จะพูด:

ข้อความหลัก:

## 3. Solution

เป้าหมายของ Section:

วิธีที่เราช่วยแก้ปัญหา:

ข้อความหลัก:

## 4. Services / Features

รายการสิ่งที่ได้รับ:

1. 
2. 
3. 
4. 

## 5. Process

ขั้นตอนการทำงาน:

1. 
2. 
3. 
4. 
5. 

## 6. Portfolio / Example

ตัวอย่างที่จะแสดง:

คำอธิบาย:

## 7. Pricing / Offer

แพ็กเกจหรือข้อเสนอ:

## 8. FAQ

คำถามที่ควรตอบ:

1. 
2. 
3. 
4. 
5. 

## 9. Final CTA

ข้อความปิดท้าย:

CTA:
```

## Template 3: HTML Preview Review Note

```md
# HTML Preview Review Note

## สิ่งที่ดีแล้ว

- 
- 
- 

## สิ่งที่ต้องแก้

- 
- 
- 

## Hero Section

เข้าใจใน 5 วินาทีหรือไม่:

สิ่งที่ควรปรับ:

## CTA

CTA หลัก:

มองเห็นง่ายหรือไม่:

ควรเปลี่ยนข้อความ CTA เป็น:

## UX/UI

สี:

ฟอนต์:

Spacing:

Mobile:

## รายการแก้ก่อนขึ้น Next.js

1. 
2. 
3. 
4. 
5. 
```

## Template 4: Component Plan

````md
# Component Plan

## Components ที่ต้องสร้าง

- [ ] Navbar
- [ ] Hero
- [ ] Problem
- [ ] Solution
- [ ] Services
- [ ] Process
- [ ] Portfolio
- [ ] Pricing
- [ ] FAQ
- [ ] ContactForm
- [ ] ContactCTA
- [ ] Footer

## app/page.tsx ควรเรียง Component แบบนี้

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Process />
        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
```
````

## Template 5: Debug Note

````md
# Debug Note

## สิ่งที่กำลังทำ


## คำสั่งที่รัน

```bash

```

## ไฟล์ที่เพิ่งแก้

- 
- 

## Error หลัก

```text

```

## สิ่งที่ลองแก้แล้ว

- 
- 

## คำตอบจาก AI / วิธีแก้


## ผลหลังแก้

- [ ] ใช้งานได้แล้ว
- [ ] ยังมี Error ใหม่
- [ ] ต้องถามผู้สอน
````

## Template 6: Deploy Note

````md
# Deploy Note

## GitHub Repository


## Vercel URL


## Environment Variables

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## ก่อน Deploy

- [ ] npm run build ผ่าน
- [ ] Commit ล่าสุดแล้ว
- [ ] Push ขึ้น GitHub แล้ว
- [ ] ข้อมูลติดต่อถูกต้อง
- [ ] CTA Link ถูกต้อง
- [ ] ไม่มี Placeholder

## หลัง Deploy

- [ ] เปิด URL ได้
- [ ] หน้าเว็บไม่พัง
- [ ] รูปโหลดครบ
- [ ] ปุ่มใช้งานได้
- [ ] ฟอร์มใช้งานได้
- [ ] เปิดบนมือถือได้
````

## Template 7: Tracking Plan

```md
# Tracking Plan

## เป้าหมายหลักของเว็บ


## Conversion หลัก

- [ ] กด LINE
- [ ] ส่งฟอร์ม
- [ ] กดโทร
- [ ] กดดูแพ็กเกจ
- [ ] กดดู Portfolio
- [ ] อื่น ๆ:

## Key Events

| Event Name | Trigger | หมายเหตุ |
|---|---|---|
| click_line | กดปุ่ม LINE | |
| submit_lead_form | ส่งฟอร์ม | |
| click_call | กดโทร | |
| click_pricing | กดดูราคา | |

## สิ่งที่จะดูใน GA4

- จำนวนคนเข้าเว็บ
- ช่องทางที่เข้ามา
- Device ที่ใช้
- หน้าเว็บที่ดู
- Event ที่เกิดขึ้น
- Conversion Rate
```

## Template 8: Portfolio Roadmap

```md
# Portfolio / Business Roadmap

## เว็บนี้จะใช้เพื่ออะไรหลังเรียน

- [ ] สมัครงาน
- [ ] รับงาน Freelance
- [ ] ใช้กับธุรกิจจริง
- [ ] ใช้เป็น Demo Project
- [ ] อื่น ๆ:

## สิ่งที่ต้องปรับหลังเรียน

1. 
2. 
3. 

## Feature ที่อยากเพิ่ม

- 
- 
- 

## Content ที่ต้องเตรียมเพิ่ม

- 
- 
- 

## Deadline ส่วนตัว


## ขั้นตอนต่อไป

1. 
2. 
3. 
```
