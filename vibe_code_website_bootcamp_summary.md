# Vibe Code Website Bootcamp

## สรุปเนื้อหาคอร์สหลัก

คอร์สนี้เป็น Bootcamp สำหรับสอนผู้เรียนสร้างเว็บไซต์จริงด้วย AI ตั้งแต่การวางโจทย์ วางโครงเว็บ ออกแบบหน้าเว็บ เขียนเว็บไซต์ด้วย Next.js นำขึ้นออนไลน์ และวางระบบวัดผลเบื้องต้น โดยเน้นให้ผู้เรียนเข้าใจ Workflow การทำงานจริง ไม่ใช่แค่สั่ง AI ให้เขียนโค้ดแบบสุ่ม ๆ

แนวคิดหลักของคอร์สคือ

> เริ่มจากโจทย์ให้ชัดก่อน แล้วค่อยใช้ AI ช่วยออกแบบ เขียนโค้ด แก้บั๊ก และนำเว็บขึ้นใช้งานจริง

---

## 1. เป้าหมายของคอร์ส

หลังเรียนจบ ผู้เรียนควรสามารถทำสิ่งเหล่านี้ได้

1. เข้าใจ Workflow การสร้างเว็บไซต์ยุค AI ตั้งแต่ต้นจนจบ
2. เขียน Project Brief ให้ AI เข้าใจโจทย์ได้ชัดเจน
3. วางโครงสร้างหน้าเว็บ เช่น Sitemap, Section, User Flow และ CTA
4. ใช้ AI ช่วยคิด Copywriting, UX Writing และ Section ของเว็บ
5. สร้าง HTML Preview เพื่อดูตัวอย่างหน้าเว็บก่อนทำเว็บจริง
6. แปลง HTML Preview เป็นโปรเจกต์ Next.js
7. แยกหน้าเว็บออกเป็น Component เช่น Navbar, Hero, Pricing, FAQ, Footer
8. ใช้ AI ช่วยแก้ข้อความ รูป สี Layout และ Responsive
9. ใช้ Git และ GitHub เบื้องต้นสำหรับเก็บโปรเจกต์
10. Deploy เว็บไซต์ขึ้นออนไลน์ด้วย Vercel
11. ทำ Contact Form หรือ Lead Form เบื้องต้น
12. เข้าใจการวัดผลด้วย GA4, Google Tag และ Search Console
13. รู้จัก Conversion / Key Event ที่ควรวัดบน Landing Page
14. ใช้เว็บไซต์ที่ทำเสร็จเป็น Portfolio หรือ Landing Page สำหรับธุรกิจได้

---

## 2. กลุ่มผู้เรียนที่เหมาะกับคอร์สนี้

คอร์สนี้เหมาะกับ

- คนที่อยากทำเว็บไซต์ด้วย AI แต่ไม่รู้จะเริ่มจากตรงไหน
- เจ้าของธุรกิจที่อยากมี Landing Page ของตัวเอง
- คนที่อยากใช้ AI ช่วยทำเว็บจริง ไม่ใช่แค่ดู Demo
- นักศึกษา / คนทำงานที่อยากมี Portfolio Website
- คนที่อยากเริ่มรับงานทำเว็บไซต์
- UX/UI Designer ที่อยากเข้าใจการเปลี่ยน Design เป็นเว็บจริง
- Marketer ที่อยากทำ Landing Page เพื่อยิงแอดหรือเก็บ Lead

ผู้เรียนไม่จำเป็นต้องเขียนโค้ดเก่ง แต่ควรเข้าใจพื้นฐานการใช้คอมพิวเตอร์ การจัดการไฟล์ และการใช้ AI เบื้องต้น

---

## 3. ภาพรวม Workflow ของคอร์ส

Workflow หลักที่ใช้สอนในคอร์สนี้คือ

```text
Idea
↓
Project Brief
↓
Sitemap / Section / User Flow
↓
UX/UI Direction
↓
HTML Preview
↓
Next.js Project
↓
GitHub
↓
Deploy with Vercel
↓
Tracking
↓
Portfolio / Real Use
```

### อธิบายแต่ละขั้น

#### 1. Idea

เริ่มจากเลือกไอเดียเว็บไซต์ เช่น Landing Page ขายบริการ, Portfolio, เว็บธุรกิจ หรือเว็บรับ Lead

#### 2. Project Brief

เขียนโจทย์ของเว็บให้ชัด เช่น เว็บนี้ทำเพื่อใคร เป้าหมายคืออะไร จุดขายคืออะไร และต้องการให้ผู้ใช้กดอะไร

#### 3. Sitemap / Section / User Flow

วางโครงหน้าเว็บว่าควรมี Section อะไรบ้าง และผู้ใช้ควรไหลจากเนื้อหาหนึ่งไปสู่อีกเนื้อหาหนึ่งอย่างไร

#### 4. UX/UI Direction

กำหนดทิศทางการออกแบบ เช่น โทนสี ฟอนต์ Mood & Tone Layout และความรู้สึกของเว็บ

#### 5. HTML Preview

ใช้ AI สร้างหน้าเว็บตัวอย่างแบบ HTML + CSS ก่อน เพื่อดูหน้าตาและตรวจทิศทางก่อนขึ้นโปรเจกต์จริง

#### 6. Next.js Project

แปลงหน้า HTML Preview เป็นโปรเจกต์ Next.js ที่มีโครงสร้างไฟล์ชัดเจน และแยกเป็น Component

#### 7. GitHub

เก็บโค้ดบน GitHub เพื่อจัดการ Version Control และเตรียม Deploy

#### 8. Deploy with Vercel

นำเว็บไซต์ขึ้นออนไลน์ด้วย Vercel เพื่อให้มี URL จริง

#### 9. Tracking

ติดตั้งหรือวางแผนการวัดผล เช่น GA4, Google Tag, Search Console และ Conversion Event

#### 10. Portfolio / Real Use

นำเว็บไซต์ที่ทำเสร็จไปใช้เป็นผลงาน สมัครงาน รับงาน หรือต่อยอดกับธุรกิจจริง

---

## 4. โครงสร้างคอร์สแบบ 2 วัน

## Day 1: จากไอเดีย → Brief → Design → HTML Preview

### Theme ของวันแรก

วันแรกเน้นการวางโจทย์และออกแบบเว็บไซต์ให้ชัดก่อนเขียนโค้ดจริง ผู้เรียนจะได้ Project Brief และ HTML Preview ของเว็บไซต์ตัวเอง

### Session 1: Vibe Code Foundation

เวลาแนะนำ: 10:00 - 12:00

#### เป้าหมายของ Session

ให้ผู้เรียนเข้าใจว่า Vibe Code คืออะไร ใช้ AI ทำเว็บได้อย่างไร และทำไมการวางโจทย์ให้ชัดจึงสำคัญกว่าการเริ่มเขียนโค้ดทันที

#### หัวข้อที่สอน

1. Vibe Code คืออะไร
2. AI ช่วยทำเว็บตรงไหนได้บ้าง
3. Workflow การทำเว็บไซต์ด้วย AI
4. ประเภทเว็บไซต์ที่เหมาะกับการทำในคอร์ส
5. การเลือกโจทย์เว็บไซต์ของตัวเอง
6. การกำหนดเป้าหมายเว็บไซต์
7. การกำหนดกลุ่มเป้าหมาย
8. การหา Pain Point และจุดขาย
9. การกำหนด CTA หลัก
10. การเขียน Project Brief ให้ AI เข้าใจ

---

### 4.1 Vibe Code คืออะไร

Vibe Code คือแนวทางการทำงานที่ใช้ AI ช่วยสร้าง แก้ไข และพัฒนาเว็บไซต์ โดยผู้เรียนเป็นคนกำหนดทิศทาง และให้ AI ช่วยทำงานในส่วนที่ใช้เวลาเยอะ เช่น เขียนโค้ด สร้าง Layout แก้ Error หรือปรับข้อความ

สิ่งสำคัญที่ต้องย้ำในการสอนคือ

- AI ไม่ได้แทนการคิดโจทย์
- AI ไม่ได้รู้เป้าหมายธุรกิจเอง
- ถ้า Brief ไม่ชัด เว็บที่ได้จะไม่ตรงจุด
- คนสั่ง AI ต้องรู้ว่ากำลังต้องการผลลัพธ์อะไร
- การทำเว็บที่ดีต้องเริ่มจาก Strategy ก่อน Design และ Development

ประโยคสำคัญที่ควรสื่อกับผู้เรียน

> AI ช่วยทำเว็บให้เร็วขึ้น แต่ถ้าเราไม่รู้ว่าเว็บต้องแก้ปัญหาอะไร AI ก็สร้างได้แค่เว็บที่ดูสวย แต่ไม่ตอบโจทย์

---

### 4.2 AI ช่วยทำเว็บไซต์ตรงไหนได้บ้าง

AI สามารถช่วยได้หลายขั้นตอน เช่น

#### 1. ช่วยคิดไอเดียเว็บไซต์

ตัวอย่างเช่น

- Landing Page สำหรับขายคอร์ส
- เว็บรับทำเว็บไซต์
- Portfolio ส่วนตัว
- เว็บร้านอาหาร
- เว็บคลินิก
- เว็บรับ Lead สำหรับยิงแอด

#### 2. ช่วยเขียน Project Brief

AI ช่วยจัดระเบียบข้อมูลให้เป็นเอกสารที่ชัดเจน เช่น

- เป้าหมายเว็บไซต์
- กลุ่มเป้าหมาย
- Pain Point
- จุดขาย
- CTA
- Section ที่ควรมี
- Mood & Tone

#### 3. ช่วยวาง Section และ User Flow

AI ช่วยจัดลำดับเนื้อหา เช่น

- Hero
- Problem
- Solution
- Service
- Process
- Portfolio
- Pricing
- FAQ
- Contact

#### 4. ช่วยเขียน Copywriting

AI ช่วยเขียน Headline, Subheadline, CTA, FAQ และข้อความขายในแต่ละ Section

#### 5. ช่วยสร้าง HTML Preview

AI ช่วยสร้างหน้าเว็บตัวอย่างด้วย HTML และ CSS เพื่อให้เห็นภาพดีไซน์ก่อน

#### 6. ช่วยแปลงเป็น Next.js

AI ช่วยแปลง HTML เป็น Component และสร้างโครงสร้างโปรเจกต์จริง

#### 7. ช่วย Debug

AI ช่วยอ่าน Error อธิบายสาเหตุ และแนะนำวิธีแก้ทีละขั้นตอน

---

### 4.3 ประเภทเว็บไซต์ที่ให้ผู้เรียนเลือกทำ

แนะนำให้ผู้เรียนเลือก 1 โปรเจกต์หลักสำหรับทำตลอดคอร์ส

#### Option A: Landing Page ขายบริการ

เหมาะสำหรับคนที่มีบริการหรืออยากรับงาน เช่น

- รับทำเว็บไซต์
- รับยิงแอด
- รับดูแลเพจ
- รับออกแบบ
- Consult ธุรกิจ
- คอร์สเรียนออนไลน์

#### Option B: Portfolio Website

เหมาะสำหรับคนที่อยากใช้สมัครงานหรือรับงาน เช่น

- Developer Portfolio
- UX/UI Designer Portfolio
- Content Creator Portfolio
- Digital Marketer Portfolio

#### Option C: Website สำหรับธุรกิจ

เหมาะกับเจ้าของกิจการ เช่น

- ร้านอาหาร
- คลินิก
- ร้านเสริมสวย
- ฟิตเนส
- โรงเรียนสอนพิเศษ
- ร้านค้าออนไลน์

#### Option D: Lead Generation Website

เหมาะกับคนที่ต้องการเก็บข้อมูลลูกค้า เช่น

- ฟอร์มขอใบเสนอราคา
- ฟอร์มจองคิว
- ฟอร์มสมัครเรียน
- ฟอร์มปรึกษาฟรี
- ฟอร์มรับไฟล์ฟรี

---

### 4.4 โครงสร้าง Project Brief

Project Brief ที่ดีควรมีหัวข้อเหล่านี้

```text
1. ชื่อโปรเจกต์
2. ประเภทเว็บไซต์
3. เป้าหมายของเว็บไซต์
4. กลุ่มเป้าหมาย
5. Pain Point ของกลุ่มเป้าหมาย
6. จุดขายหลัก
7. Offer หรือสิ่งที่นำเสนอ
8. CTA หลัก
9. CTA รอง
10. Tone & Mood
11. สีและสไตล์ที่ต้องการ
12. Section ที่คาดว่าจะมี
13. ข้อมูลที่ต้องการให้ลูกค้าส่งมา
14. ตัวอย่างเว็บไซต์อ้างอิง
15. สิ่งที่ไม่ต้องการให้มีในเว็บ
16. ผลลัพธ์สุดท้ายที่ต้องการ
```

---

### 4.5 Workshop ช่วงเช้า Day 1

## Workshop: เลือกโปรเจกต์และเขียน Project Brief

### สิ่งที่ผู้เรียนต้องทำ

1. เลือกประเภทเว็บไซต์ที่จะทำ
2. เขียนเป้าหมายของเว็บไซต์
3. ระบุกลุ่มเป้าหมาย
4. เขียน Pain Point ของกลุ่มเป้าหมาย
5. เขียนจุดขายหลัก
6. เลือก CTA หลัก
7. ใช้ AI ช่วยจัดเป็น Project Brief
8. ตรวจและปรับ Brief ให้เข้าใจง่าย

### ผลลัพธ์ที่ต้องได้

ผู้เรียนต้องมี Project Brief ของตัวเอง 1 ชุด พร้อมนำไปใช้สร้างโครงหน้าเว็บใน Session ถัดไป

---

## Session 2: Website Design & HTML Preview

เวลาแนะนำ: 13:00 - 16:00

### เป้าหมายของ Session

ให้ผู้เรียนนำ Project Brief มาแปลงเป็นโครงหน้า Landing Page วาง Section, CTA, UX/UI Direction และใช้ AI สร้าง HTML Preview

---

## 5. การวางโครงหน้าเว็บไซต์

### Sitemap คืออะไร

Sitemap คือโครงสร้างหน้าของเว็บไซต์ เช่น

```text
Home
About
Services
Portfolio
Contact
```

สำหรับคอร์สนี้ แนะนำให้เน้นเว็บหน้าเดียวก่อน เพราะทำง่ายและเหมาะกับผู้เรียนที่ต้องการเห็นผลลัพธ์เร็ว

ตัวอย่าง Sitemap สำหรับ Landing Page

```text
Landing Page
Thank You Page
Privacy Policy
```

---

## 6. Section ที่ควรมีใน Landing Page

### 6.1 Hero Section

Hero คือส่วนแรกที่ผู้ใช้เห็น ต้องตอบให้ได้ว่า

- เว็บนี้คืออะไร
- ช่วยใคร
- ช่วยแก้ปัญหาอะไร
- มีจุดขายอะไร
- ต้องกดอะไรต่อ

ตัวอย่างโครง Hero

```text
Headline: ทำเว็บไซต์ธุรกิจให้ดูน่าเชื่อถือ พร้อมใช้งานจริง
Subheadline: เหมาะสำหรับเจ้าของธุรกิจที่อยากมีเว็บไซต์ไว้รับลูกค้าใหม่ โดยไม่ต้องเริ่มจากศูนย์
CTA: ทัก LINE เพื่อขอดูแนวทางเว็บไซต์
Secondary CTA: ดูตัวอย่างผลงาน
```

---

### 6.2 Problem Section

ใช้เล่าปัญหาของกลุ่มเป้าหมาย เช่น

- มีเพจแล้วแต่ลูกค้ายังไม่มั่นใจ
- ยิงแอดแล้วไม่มีหน้าเว็บรองรับ
- อยากมีเว็บไซต์แต่ไม่รู้จะเริ่มยังไง
- กลัวจ้างทำเว็บแล้วไม่ตรงใจ
- ไม่มีเวลาเตรียมข้อมูลเอง

---

### 6.3 Solution Section

ใช้บอกว่าวิธีของเราช่วยแก้ปัญหาอย่างไร เช่น

- ช่วยวางโครงเว็บให้
- ออกแบบหน้าแรกให้ดูก่อน
- ทำเว็บให้รองรับมือถือ
- มีปุ่มติดต่อชัดเจน
- พร้อม Deploy ขึ้นออนไลน์

---

### 6.4 Service / Feature Section

แสดงสิ่งที่ได้รับ เช่น

- ออกแบบหน้าเว็บ
- พัฒนาเว็บไซต์
- รองรับมือถือ
- เชื่อมฟอร์มติดต่อ
- ติดตั้ง Tracking
- ดูแลหลังส่งมอบ

---

### 6.5 Process Section

แสดงขั้นตอนการทำงาน เช่น

1. คุยโจทย์
2. วางโครงเว็บ
3. ออกแบบหน้าแรก
4. พัฒนาเว็บ
5. ตรวจงาน
6. Deploy
7. ส่งมอบ

---

### 6.6 Portfolio / Example Section

ใช้แสดงตัวอย่างงาน เช่น

- เว็บไซต์ที่เคยทำ
- Mockup
- Case Study
- Before / After
- Demo Project

ถ้าผู้เรียนยังไม่มีผลงานจริง สามารถใช้ Demo Project หรือ Mockup เป็นตัวอย่าง Portfolio ได้

---

### 6.7 Pricing Section

ใช้แสดงราคา แพ็กเกจ หรือราคาเริ่มต้น

ตัวอย่างโครง Pricing

```text
Starter: เหมาะกับเริ่มต้น
Growth: เหมาะกับธุรกิจที่ต้องการหน้าเว็บครบขึ้น
Business: เหมาะกับธุรกิจที่ต้องการระบบและการวัดผล
```

---

### 6.8 FAQ Section

ใช้ตอบข้อกังวล เช่น

- ใช้เวลากี่วัน
- ต้องเตรียมข้อมูลอะไร
- แก้ไขได้กี่ครั้ง
- มีค่าใช้จ่ายรายปีไหม
- เว็บรองรับมือถือไหม
- หลังส่งมอบแก้ไขเองได้ไหม

---

### 6.9 Final CTA Section

ใช้ปิดท้ายและชวนให้ผู้ใช้ทำ Action

ตัวอย่าง

```text
อยากมีเว็บไซต์ที่ช่วยให้ธุรกิจดูน่าเชื่อถือขึ้น?
ทัก LINE เพื่อเริ่มคุยโจทย์ได้เลย
```

---

## 7. พื้นฐาน UX/UI ที่จำเป็นสำหรับคอร์ส

ไม่จำเป็นต้องสอนทฤษฎีลึกเกินไป แต่ควรให้ผู้เรียนเข้าใจหลักที่ใช้จริง

### 7.1 Layout

- หัวข้อต้องเด่น
- ข้อความไม่ควรยาวเกินไป
- Section ต้องมีระยะห่าง
- CTA ต้องมองเห็นง่าย
- หน้าเว็บควรอ่านไหลจากบนลงล่าง

### 7.2 Typography

- ใช้ฟอนต์ไม่เยอะเกินไป
- ขนาดหัวข้อและเนื้อหาต้องต่างกันชัดเจน
- ตัวหนังสือต้องอ่านง่ายบนมือถือ
- ไม่ควรใช้ข้อความแน่นเกินไป

### 7.3 Color

- มีสีหลัก 1 สี
- มีสีรอง 1-2 สี
- พื้นหลังต้องช่วยให้อ่านง่าย
- สีปุ่ม CTA ต้องเด่นกว่าส่วนอื่น

ตัวอย่างโทนสีสำหรับแบรนด์ส้ม

```text
Primary: Orange
Background: White / Light Gray
Text: Black / Dark Gray
Accent: Soft Orange
```

### 7.4 Spacing

- ระยะห่างระหว่าง Section ต้องพอดี
- Card ไม่ควรแน่นเกินไป
- ปุ่มควรมีพื้นที่รอบ ๆ
- หน้าเว็บต้องหายใจได้

### 7.5 Responsive

- หน้าเว็บต้องดูดีบนมือถือ
- Card ควรเรียงลงมาในมือถือ
- ปุ่มต้องกดง่าย
- ข้อความต้องไม่เล็กเกินไป
- รูปภาพต้องไม่ล้นจอ

---

## 8. การใช้ AI สร้าง Wireframe และ HTML Preview

### Prompt สำหรับวาง Section

```text
จาก Project Brief ด้านล่าง ช่วยวางโครงหน้า Landing Page แบบละเอียด

ต้องการให้ช่วยจัด:
1. Section ทั้งหมดที่ควรมี
2. ลำดับการเล่าเรื่องจากบนลงล่าง
3. Headline ของแต่ละ Section
4. ข้อความอธิบายสั้น ๆ
5. CTA ที่เหมาะสม
6. คำแนะนำ UX/UI
7. แนวทาง Responsive บนมือถือ

Project Brief:
[วาง Project Brief ตรงนี้]
```

### Prompt สำหรับสร้าง HTML Preview

```text
ช่วยสร้าง HTML Preview สำหรับ Landing Page จากโครงสร้างด้านล่าง

เงื่อนไข:
- ใช้ HTML + CSS ในไฟล์เดียว
- ดีไซน์สไตล์ Modern, Clean, Premium
- ใช้สีหลักเป็นส้ม ขาว ดำ
- Layout ต้องดูน่าเชื่อถือ
- มี Hero, Problem, Solution, Services, Process, Pricing, FAQ และ Contact CTA
- รองรับ Responsive เบื้องต้น
- ใช้ข้อความภาษาไทย
- ปุ่ม CTA เด่นชัด
- ไม่ต้องเชื่อมระบบจริง แค่ทำเป็น Preview

ข้อมูลหน้าเว็บ:
[วาง Section ที่ได้จาก AI ตรงนี้]
```

---

## 9. Checklist ตรวจ HTML Preview

ก่อนจบ Day 1 ให้ผู้เรียนตรวจหน้า HTML Preview ตามรายการนี้

- Hero Section เข้าใจใน 5 วินาทีหรือไม่
- Headline ชัดเจนหรือไม่
- CTA เด่นพอหรือไม่
- Section เรียงลำดับดีหรือไม่
- สีอ่านง่ายหรือไม่
- ฟอนต์ดูน่าเชื่อถือหรือไม่
- ข้อความขายยาวเกินไปหรือไม่
- มีข้อมูลที่ช่วยให้ลูกค้าตัดสินใจพอหรือไม่
- มี FAQ ตอบข้อกังวลหรือไม่
- ปุ่มติดต่ออยู่ในตำแหน่งที่เหมาะสมหรือไม่
- เปิดบนมือถือแล้วใช้งานได้หรือไม่
- มี Placeholder ที่ยังไม่ได้แก้หรือไม่

---

## 10. Workshop ช่วงบ่าย Day 1

## Workshop: สร้าง HTML Preview ของเว็บไซต์ตัวเอง

### สิ่งที่ผู้เรียนต้องทำ

1. นำ Project Brief จากช่วงเช้ามาใช้
2. ให้ AI ช่วยวาง Section
3. ปรับ Section ให้เหมาะกับเว็บของตัวเอง
4. ให้ AI สร้าง HTML Preview
5. เปิดไฟล์ Preview ดูใน Browser
6. ปรับข้อความ สี Layout และ CTA
7. ตรวจด้วย Checklist
8. Save ไฟล์ HTML Preview ไว้ใช้ต่อ Day 2

### ผลลัพธ์ที่ต้องได้

ผู้เรียนต้องมี HTML Preview ของเว็บตัวเอง 1 หน้า ที่เห็นภาพดีไซน์ชัดเจน พร้อมนำไปแปลงเป็น Next.js

---

# Day 2: จาก HTML Preview → Next.js → Deploy → Tracking → Portfolio

### Theme ของวันที่สอง

วันที่สองเน้นการนำ HTML Preview ไปทำเป็นเว็บไซต์จริงด้วย Next.js แยก Component จัดการโค้ด เก็บงานบน GitHub Deploy ขึ้น Vercel และวางแนวทางการวัดผล

---

## Session 3: Build Website with Next.js

เวลาแนะนำ: 10:00 - 12:00

### เป้าหมายของ Session

ให้ผู้เรียนเข้าใจโครงสร้างโปรเจกต์ Next.js เบื้องต้น และสามารถแปลง HTML Preview เป็นเว็บจริงแบบ Component ได้

---

## 11. Next.js คืออะไรแบบเข้าใจง่าย

Next.js คือ Framework สำหรับสร้างเว็บไซต์และ Web App ด้วย React โดยเหมาะกับการทำเว็บไซต์จริง เพราะมีโครงสร้างชัดเจน Deploy ง่าย และทำงานร่วมกับ Vercel ได้ดี

อธิบายเปรียบเทียบง่าย ๆ

```text
HTML Preview = หน้าเว็บตัวอย่างที่ทำให้เห็นภาพ
Next.js = โปรเจกต์จริงที่พร้อมพัฒนาและ Deploy
Component = ชิ้นส่วนของหน้าเว็บ เช่น Hero, Pricing, FAQ
Page = หน้าหลักของเว็บไซต์
Deploy = การนำเว็บขึ้นออนไลน์
```

---

## 12. โครงสร้างโปรเจกต์ Next.js เบื้องต้น

ตัวอย่างโครงสร้างโปรเจกต์

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

### อธิบายไฟล์สำคัญ

#### app/page.tsx

หน้าหลักของเว็บไซต์

#### app/layout.tsx

โครงหลักของเว็บ เช่น metadata, font และ layout หลัก

#### app/globals.css

ไฟล์ CSS หลักของเว็บ

#### components/

โฟลเดอร์สำหรับเก็บส่วนประกอบของหน้าเว็บ เพื่อให้โค้ดอ่านง่ายและแก้ไขง่าย

#### public/

โฟลเดอร์สำหรับเก็บรูปภาพ โลโก้ ไอคอน หรือไฟล์ Static

#### package.json

ไฟล์ที่เก็บข้อมูลโปรเจกต์และคำสั่งสำหรับรันเว็บ

---

## 13. การแปลง HTML Preview เป็น Component

HTML Preview ที่ได้จาก Day 1 มักเป็นไฟล์เดียว แต่เว็บจริงควรแยกเป็น Component

ตัวอย่างการแยก

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

### ข้อดีของการแยก Component

- โค้ดอ่านง่ายขึ้น
- แก้เฉพาะส่วนได้ง่าย
- เพิ่มหรือลบ Section ได้ง่าย
- ทำงานร่วมกับ AI ได้แม่นขึ้น
- ลดความเสี่ยงที่ AI จะแก้ทั้งไฟล์จนพัง

---

## 14. Prompt สำหรับแปลง HTML เป็น Next.js

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

---

## 15. การแก้ข้อความ รูป สี และ Section ด้วย AI

หลังจากแปลงเป็น Next.js แล้ว ควรสั่ง AI แบบเจาะจงมากขึ้น

### ตัวอย่าง Prompt แก้ Hero

```text
ช่วยแก้ Hero Section ให้ข้อความดูขายมากขึ้น
กลุ่มเป้าหมายคือเจ้าของธุรกิจ SME
ขอ Headline 5 แบบ และเลือกแบบที่เหมาะที่สุดมาใส่ใน Component Hero.tsx
```

### ตัวอย่าง Prompt ปรับสี

```text
ช่วยปรับสีของเว็บให้ใช้โทนส้ม ขาว ดำ ดูพรีเมียมขึ้น
แต่ยังต้องอ่านง่ายบนมือถือ
```

### ตัวอย่าง Prompt เพิ่ม FAQ

```text
ช่วยเพิ่ม FAQ Section จำนวน 6 คำถาม
เน้นตอบข้อกังวลของลูกค้าที่อยากจ้างทำเว็บไซต์
```

### ตัวอย่าง Prompt ปรับ Pricing

```text
ช่วยทำให้ Pricing Section ดูน่าเชื่อถือขึ้น
มี 3 แพ็กเกจ และเน้นแพ็กเกจกลางเป็นแนะนำ
```

---

## 16. พื้นฐาน Git และ GitHub

### Git คืออะไร

Git คือระบบเก็บประวัติการแก้ไขโค้ด ทำให้เราย้อนกลับ ดูประวัติ หรือบันทึกจุดสำคัญของงานได้

### GitHub คืออะไร

GitHub คือที่เก็บโปรเจกต์ออนไลน์ และใช้เชื่อมต่อกับ Vercel เพื่อ Deploy เว็บได้

### คำที่ควรรู้

- `git init` = เริ่มใช้ Git ในโปรเจกต์
- `git add .` = เลือกไฟล์ที่จะบันทึก
- `git commit` = บันทึกจุดสำคัญของงาน
- `git push` = ส่งโค้ดขึ้น GitHub
- Repository = ที่เก็บโปรเจกต์

### คำสั่งพื้นฐาน

```bash
git init
git add .
git commit -m "Initial website project"
git branch -M main
git remote add origin [GitHub Repository URL]
git push -u origin main
```

### ตัวอย่าง Commit Message

```bash
git commit -m "Add hero section"
git commit -m "Update pricing content"
git commit -m "Fix mobile responsive layout"
git commit -m "Add contact form section"
```

---

## 17. วิธีอ่าน Error และให้ AI ช่วย Debug

ผู้เรียนควรเข้าใจว่า Error เป็นเรื่องปกติในการพัฒนาเว็บ สิ่งสำคัญคือการอ่านและไล่ปัญหาอย่างเป็นระบบ

### ข้อมูลที่ควรส่งให้ AI เวลา Debug

1. กำลังทำอะไร
2. Error ที่ขึ้นคืออะไร
3. ไฟล์ที่เกี่ยวข้องคือไฟล์ไหน
4. สิ่งที่ลองแก้ไปแล้วคืออะไร

### Prompt Debug

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
```

---

## 18. Checklist ก่อน Deploy

ก่อนนำเว็บขึ้นออนไลน์ ควรตรวจรายการนี้

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

---

## 19. Workshop ช่วงเช้า Day 2

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

---

# Session 4: Tracking, Deploy & Career Roadmap

เวลาแนะนำ: 13:00 - 16:00

### เป้าหมายของ Session

ให้ผู้เรียนนำเว็บขึ้นออนไลน์ได้จริง เข้าใจการทำ Contact Form / Lead Form เบื้องต้น รู้จัก Tracking และรู้ว่าจะนำเว็บไปต่อยอดอย่างไร

---

## 20. Contact Form / Lead Form เบื้องต้น

ฟอร์มมีไว้เพื่อเก็บข้อมูลจากลูกค้า เช่น

- ชื่อ
- เบอร์โทร
- อีเมล
- LINE ID
- บริการที่สนใจ
- งบประมาณ
- ข้อความเพิ่มเติม

ตัวอย่างฟอร์ม

```text
ชื่อ:
เบอร์โทร:
LINE ID:
บริการที่สนใจ:
ข้อความเพิ่มเติม:
ปุ่ม: ส่งข้อมูล
```

---

## 21. แนวคิดการเชื่อม Supabase

Supabase ใช้เป็นฐานข้อมูลสำหรับเก็บข้อมูลฟอร์ม

Flow แบบง่าย

```text
ผู้ใช้กรอกฟอร์มบนเว็บไซต์
↓
กดส่งข้อมูล
↓
เว็บส่งข้อมูลไป Supabase
↓
เจ้าของเว็บเข้าไปดู Lead ได้
```

ตัวอย่างตาราง

```text
leads
- id
- name
- phone
- line_id
- email
- service
- message
- created_at
```

---

## 22. Deploy เว็บไซต์ด้วย Vercel

### Vercel คืออะไร

Vercel คือแพลตฟอร์มสำหรับนำเว็บไซต์ขึ้นออนไลน์ เหมาะกับ Next.js และสามารถเชื่อมกับ GitHub ได้ง่าย

### ขั้นตอน Deploy

1. เข้า Vercel
2. Login ด้วย GitHub
3. Import Project
4. เลือก Repository
5. ตรวจ Framework ว่าเป็น Next.js
6. ตั้งค่า Environment Variables ถ้ามี
7. กด Deploy
8. รอระบบ Build
9. ได้ URL เว็บไซต์ออนไลน์
10. ทดสอบเปิดเว็บจริง

### แนวคิด Auto Deploy

เมื่อเชื่อม GitHub กับ Vercel แล้ว ทุกครั้งที่ Push โค้ดขึ้น GitHub ระบบจะ Deploy ใหม่อัตโนมัติ

---

## 23. Checklist หลัง Deploy

- เปิด URL ได้
- หน้าเว็บไม่พัง
- รูปโหลดครบ
- ปุ่ม CTA ใช้งานได้
- ฟอร์มส่งข้อมูลได้
- เปิดบนมือถือได้
- ไม่มี Error หน้าเว็บ
- Title เว็บถูกต้อง
- Description เว็บถูกต้อง
- Link Social / LINE ถูกต้อง

---

## 24. Google Analytics 4, Google Tag และ Search Console

### GA4 ใช้ทำอะไร

ใช้ดูพฤติกรรมคนเข้าเว็บ เช่น

- มีคนเข้าเว็บกี่คน
- เข้ามาจากช่องทางไหน
- ใช้มือถือหรือคอม
- หน้าไหนคนดูเยอะ
- คนอยู่ในเว็บนานไหม

### Google Tag ใช้ทำอะไร

ใช้จัดการ Tracking Code และ Event ต่าง ๆ โดยไม่ต้องแก้โค้ดบ่อย

### Search Console ใช้ทำอะไร

ใช้ดูว่าเว็บแสดงบน Google อย่างไร เช่น

- Google เจอเว็บหรือยัง
- เว็บมีปัญหา Index ไหม
- คนค้นหาคำอะไรแล้วเจอเว็บ
- หน้าเว็บมีปัญหา SEO เทคนิคไหม

---

## 25. Conversion และ Key Event

Conversion คือการกระทำสำคัญที่อยากให้ผู้ใช้ทำบนเว็บ

ตัวอย่าง Conversion

- กดปุ่ม LINE
- กดปุ่มโทร
- ส่งฟอร์ม
- กดสมัครเรียน
- กดจองคิว
- กดดาวน์โหลดไฟล์
- กดดูแพ็กเกจ
- กดดู Portfolio

ตัวอย่าง Key Event สำหรับ Landing Page

```text
click_line
submit_lead_form
click_call
click_pricing
click_portfolio
```

ประเด็นที่ควรย้ำ

> เว็บที่ดีไม่ใช่แค่สวย แต่ต้องวัดผลได้

---

## 26. PageSpeed Insights และ Performance เบื้องต้น

สิ่งที่ควรดูใน PageSpeed Insights

- Performance
- Accessibility
- Best Practices
- SEO
- Core Web Vitals

สิ่งที่มักทำให้เว็บช้า

- รูปภาพใหญ่เกินไป
- ใช้ Animation มากเกินไป
- โหลดฟอนต์เยอะ
- โค้ดไม่จำเป็นเยอะ
- ใช้วิดีโอหนักเกินไป

Checklist ปรับ Performance เบื้องต้น

- ลดขนาดรูป
- ใช้ภาพ WebP
- ไม่ใช้วิดีโอหนักเกินไป
- ตรวจ Mobile Layout
- ใส่ Alt Text ให้รูปสำคัญ
- ตั้ง Title และ Description

---

## 27. การใช้เว็บไซต์เป็น Portfolio

หลังเรียนจบ ผู้เรียนสามารถนำเว็บไซต์ไปใช้ต่อได้หลายแบบ

### สำหรับสมัครงาน

ควรมีข้อมูล เช่น

- About Me
- Skills
- Projects
- Tools
- Case Study
- Contact
- GitHub
- LinkedIn

### สำหรับรับงาน Freelance

ควรมีข้อมูล เช่น

- บริการที่รับทำ
- ตัวอย่างงาน
- ขั้นตอนการทำงาน
- ราคาเริ่มต้น
- FAQ
- ช่องทางติดต่อ
- ฟอร์มขอใบเสนอราคา

### สำหรับเจ้าของธุรกิจ

สามารถใช้เว็บเป็น

- Landing Page สำหรับยิงแอด
- หน้าเก็บ Lead
- หน้าแนะนำสินค้า / บริการ
- หน้าเพิ่มความน่าเชื่อถือ
- หน้าให้ลูกค้าตัดสินใจก่อนทัก

---

## 28. Final Workshop ช่วงบ่าย Day 2

## Workshop: Deploy เว็บจริง พร้อม Checklist การวัดผล

### สิ่งที่ผู้เรียนต้องทำ

1. ทำ Contact Form หรือ Lead Form
2. เชื่อม Supabase เบื้องต้น หรือวางโครงสำหรับเก็บ Lead
3. Push โค้ดขึ้น GitHub
4. Deploy เว็บไซต์ด้วย Vercel
5. เปิดเว็บจริงจาก URL
6. ตรวจ Responsive
7. ตรวจ CTA
8. วางแผนว่าจะ Track อะไร
9. ตรวจเว็บด้วย PageSpeed Insights
10. เขียน Roadmap หลังเรียนว่าจะพัฒนาต่ออะไร

### ผลลัพธ์สุดท้าย

ผู้เรียนควรมี

- เว็บไซต์ออนไลน์ 1 เว็บ
- GitHub Repository
- Vercel URL
- Lead Form หรือ Contact Form
- Checklist การวัดผล
- Roadmap การต่อยอด
- โปรเจกต์ที่ใช้เป็น Portfolio ได้

---

# 29. Checklist รวมก่อนจบคอร์ส

## Strategy Checklist

- รู้ว่าเว็บทำเพื่ออะไร
- รู้ว่ากลุ่มเป้าหมายคือใคร
- มี CTA หลัก
- มีจุดขายชัดเจน
- มี Project Brief

## Design Checklist

- มีโครง Section ชัดเจน
- Hero Section เข้าใจง่าย
- CTA เด่น
- สีและฟอนต์อ่านง่าย
- Responsive เบื้องต้น
- มี HTML Preview

## Development Checklist

- มีโปรเจกต์ Next.js
- แยก Component ได้
- รันเว็บในเครื่องได้
- ใช้ AI ช่วยแก้โค้ดได้
- อ่าน Error เบื้องต้นได้
- ใช้ Git / GitHub ได้

## Deploy Checklist

- Push ขึ้น GitHub แล้ว
- Deploy ผ่าน Vercel แล้ว
- เว็บเปิดออนไลน์ได้
- ปุ่มและลิงก์ใช้งานได้
- ฟอร์มทดสอบได้

## Tracking Checklist

- รู้ว่า GA4 ใช้ทำอะไร
- รู้ว่า Google Tag ใช้ทำอะไร
- รู้ว่า Search Console ใช้ทำอะไร
- เข้าใจ Conversion / Key Event
- รู้ว่าควรวัดผลอะไร
- ใช้ PageSpeed Insights ตรวจเว็บได้

## Career / Business Checklist

- ใช้เว็บเป็น Portfolio ได้
- ใช้เว็บเป็น Landing Page รับลูกค้าได้
- รู้แนวทางพัฒนาต่อ
- รู้ว่าถ้าจะรับงานควรนำเสนอผลงานอย่างไร

---

# 30. ไฟล์ประกอบที่ควรเตรียมให้ผู้เรียน

แนะนำให้เตรียมไฟล์เหล่านี้ประกอบการสอน

```text
01-project-brief-template.md
02-landing-page-section-template.md
03-ai-prompt-pack.md
04-html-preview-checklist.md
05-nextjs-component-checklist.md
06-debug-prompt-template.md
07-deploy-checklist.md
08-tracking-checklist.md
09-portfolio-roadmap.md
```

---

# 31. Prompt Pack สำหรับผู้เรียน

## Prompt 1: สร้าง Project Brief

```text
ช่วยสร้าง Project Brief สำหรับเว็บไซต์จากข้อมูลนี้

ประเภทเว็บไซต์:
เป้าหมายของเว็บไซต์:
กลุ่มเป้าหมาย:
ปัญหาของกลุ่มเป้าหมาย:
จุดขาย:
Tone & Mood:
สีที่ต้องการ:
CTA หลัก:
ข้อมูลที่ต้องการให้ลูกค้าทำ:

ช่วยจัดเป็น Project Brief แบบละเอียด พร้อมแนะนำ Section ที่ควรมีในหน้าเว็บ
```

## Prompt 2: วาง Section Landing Page

```text
จาก Project Brief นี้ ช่วยวางโครง Landing Page แบบละเอียด

ขอให้จัด:
1. ลำดับ Section
2. เป้าหมายของแต่ละ Section
3. Headline
4. ข้อความอธิบาย
5. CTA
6. คำแนะนำด้าน UX/UI
7. สิ่งที่ควรระวัง

Project Brief:
[วางข้อมูล]
```

## Prompt 3: สร้าง HTML Preview

```text
ช่วยสร้าง HTML Preview จากโครงหน้าเว็บนี้

เงื่อนไข:
- HTML + CSS ในไฟล์เดียว
- ดีไซน์ Modern, Clean, Premium
- รองรับมือถือ
- ใช้ภาษาไทย
- CTA ชัดเจน
- โครงสร้างอ่านง่าย
- เหมาะสำหรับนำไปแปลงเป็น Next.js ต่อ

ข้อมูล Section:
[วางข้อมูล]
```

## Prompt 4: แปลง HTML เป็น Next.js

```text
ช่วยแปลง HTML Preview นี้เป็น Next.js App Router

เงื่อนไข:
- ใช้ TypeScript
- ใช้ Tailwind CSS
- แยก Component
- หน้าแรกอยู่ที่ app/page.tsx
- รักษาดีไซน์เดิม
- โค้ดอ่านง่าย
- อธิบายด้วยว่าแต่ละไฟล์ทำหน้าที่อะไร

HTML:
[วางโค้ด]
```

## Prompt 5: Debug Error

```text
ฉันเจอ Error ในโปรเจกต์ Next.js

สิ่งที่กำลังทำ:
ไฟล์ที่แก้:
คำสั่งที่รัน:
Error ที่ขึ้น:

ช่วยอธิบายสาเหตุแบบเข้าใจง่าย
บอกวิธีแก้ทีละขั้นตอน
และระบุว่าต้องแก้ไฟล์ไหน
```

## Prompt 6: รีวิว Landing Page เพื่อเพิ่ม Conversion

```text
ช่วยรีวิว Landing Page นี้ในมุม UX/UI และ Conversion

สิ่งที่อยากให้ช่วยดู:
1. Hero Section ชัดไหม
2. CTA เด่นไหม
3. Section เรียงดีไหม
4. ข้อความน่าเชื่อถือไหม
5. มีอะไรที่ควรเพิ่มหรือลด
6. ถ้าต้องการเพิ่ม Conversion ควรแก้ตรงไหน

ข้อมูลหน้าเว็บ:
[วางเนื้อหาเว็บ]
```

---

# 32. Slide Outline ที่แนะนำ

หากนำสรุปนี้ไปทำสไลด์ แนะนำแบ่งประมาณนี้

1. Cover: Vibe Code Website Bootcamp
2. Course Goal
3. Final Outcome
4. Workflow Overview
5. What is Vibe Code
6. AI ช่วยทำเว็บตรงไหนได้บ้าง
7. ประเภทเว็บไซต์ที่เลือกทำได้
8. Project Brief คืออะไร
9. Project Brief Template
10. Workshop: เขียน Brief
11. Landing Page Structure
12. Hero Section
13. Problem / Solution Section
14. Service / Feature Section
15. Process / Portfolio / Pricing
16. FAQ / Final CTA
17. UX/UI Principle
18. Prompt: วาง Section
19. Prompt: สร้าง HTML Preview
20. HTML Preview Checklist
21. Workshop: ทำ HTML Preview
22. Day 2 Overview
23. Next.js คืออะไร
24. Project Structure
25. Component Concept
26. แปลง HTML เป็น Next.js
27. Prompt: HTML to Next.js
28. แก้เว็บด้วย AI
29. Git / GitHub Basics
30. Debug with AI
31. Pre-Deploy Checklist
32. Workshop: Build Next.js
33. Contact Form / Lead Form
34. Supabase Concept
35. Deploy with Vercel
36. Post-Deploy Checklist
37. GA4 / Google Tag / Search Console
38. Conversion / Key Event
39. PageSpeed Insights
40. Portfolio / Career / Business Roadmap
41. Final Workshop
42. Final Checklist
43. Next Step After Course

---

# 33. แกนการสอนที่ควรย้ำตลอดคอร์ส

1. เริ่มจากโจทย์ ไม่ใช่เริ่มจากเครื่องมือ
2. AI จะทำงานดีขึ้นเมื่อ Brief ชัด
3. เว็บที่ดีต้องมีเป้าหมายและ CTA
4. Design ไม่ใช่แค่สวย แต่ต้องช่วยให้ผู้ใช้เข้าใจและตัดสินใจ
5. HTML Preview ช่วยลดความเสี่ยงก่อนขึ้นโปรเจกต์จริง
6. Next.js ช่วยให้เว็บเป็นระบบและต่อยอดได้
7. GitHub คือที่เก็บงานและประวัติการแก้ไข
8. Deploy คือขั้นตอนที่ทำให้เว็บใช้งานจริง
9. Tracking ทำให้รู้ว่าเว็บได้ผลหรือไม่
10. โปรเจกต์ที่ทำในคอร์สควรนำไปใช้ต่อได้จริง ไม่ใช่แค่แบบฝึกหัด

---

# 34. สรุปผลลัพธ์ที่ผู้เรียนควรได้หลังเรียนจบ

ผู้เรียนควรได้สิ่งเหล่านี้

1. Project Brief ของเว็บไซต์ตัวเอง
2. โครง Section ของ Landing Page
3. HTML Preview ของหน้าเว็บ
4. โปรเจกต์ Next.js
5. Component หลักของเว็บไซต์
6. GitHub Repository
7. เว็บไซต์ออนไลน์บน Vercel
8. Contact Form หรือ Lead Form เบื้องต้น
9. Tracking Checklist
10. Roadmap การต่อยอดเว็บไซต์

---

# 35. One Sentence Summary

Vibe Code Website Bootcamp คือคอร์สที่พาผู้เรียนสร้างเว็บไซต์จริงด้วย AI ตั้งแต่การคิดโจทย์ วางโครง ออกแบบ เขียนเว็บ Deploy และวางระบบวัดผล เพื่อให้ได้เว็บไซต์ที่นำไปใช้เป็นผลงานหรือใช้งานกับธุรกิจได้จริง

---

# 36. Current Tech Stack ที่นิยมใช้สำหรับทำเว็บไซต์และแอป

หัวข้อนี้ใช้สำหรับเพิ่มมุมมองให้ผู้เรียนเข้าใจว่า ในการทำงานจริงไม่ได้มีแค่เครื่องมือเดียวหรือ Stack เดียว แต่ควรรู้ว่าแต่ละ Stack เหมาะกับงานแบบไหน และควรเลือกตามเป้าหมายของโปรเจกต์ ไม่ใช่เลือกตามกระแสอย่างเดียว

## 36.1 แนวคิดในการเลือก Stack

การเลือก Stack ควรดูจาก 5 เรื่องหลัก

1. ประเภทงานที่ต้องทำ เช่น Landing Page, Web App, Mobile App, Dashboard, Internal Tool
2. ความเร็วในการพัฒนา เช่น ต้องทำ Demo เร็วหรือทำระบบยาว ๆ
3. ความสามารถของทีม เช่น ทีมถนัด JavaScript, TypeScript, Python หรือ Dart
4. ระบบที่ต้องเชื่อมต่อ เช่น Database, Payment, CRM, API, LINE, Facebook
5. การดูแลหลังส่งมอบ เช่น Deploy ง่ายไหม แก้ไขต่อได้ไหม มีเอกสารชัดไหม

หลักที่ควรย้ำกับผู้เรียน:

> Stack ที่ดีไม่ใช่ Stack ที่ใหม่ที่สุด แต่คือ Stack ที่ทำให้งานเสร็จจริง ดูแลต่อได้ และเหมาะกับขนาดโปรเจกต์

---

## 36.2 Stack สำหรับเว็บไซต์ที่ควรรู้

### Stack A: Modern Website / Landing Page / Portfolio

เหมาะกับงานในคอร์ส Vibe Code Website Bootcamp มากที่สุด

```text
Next.js + TypeScript + Tailwind CSS + shadcn/ui + Vercel
```

ใช้สำหรับ:

- Landing Page
- Portfolio Website
- เว็บธุรกิจ
- เว็บคอร์สเรียน
- เว็บรับ Lead
- เว็บสำหรับยิงแอด
- เว็บที่ต้องการ SEO และโหลดเร็ว

เหตุผลที่แนะนำ:

- Next.js เป็น Framework ยอดนิยมในสาย React และเหมาะกับเว็บที่ต้องการทั้งหน้าเว็บและฟังก์ชันฝั่ง Server เบื้องต้น
- TypeScript ช่วยลด Error และทำให้ AI แก้โค้ดแม่นขึ้น
- Tailwind CSS ช่วยจัด UI เร็ว เหมาะกับการทำงานร่วมกับ AI
- shadcn/ui ช่วยให้มี Component คุณภาพดี โดยไม่ต้องสร้างทุกอย่างจากศูนย์
- Vercel Deploy ง่ายมากสำหรับ Next.js

ลิงก์ติดตั้ง / เอกสาร:

- Next.js: https://nextjs.org/docs/app/getting-started/installation
- Tailwind CSS with Next.js: https://tailwindcss.com/docs/installation/framework-guides/nextjs
- shadcn/ui with Next.js: https://ui.shadcn.com/docs/installation/next
- Vercel for Next.js: https://vercel.com/docs/frameworks/full-stack/nextjs

คำสั่งเริ่มต้นตัวอย่าง:

```bash
npx create-next-app@latest my-website
cd my-website
npm run dev
```

---

### Stack B: Web App / Dashboard / Internal Tool

เหมาะกับงานที่มีระบบหลังบ้านมากขึ้น เช่น Dashboard, CRM, ระบบจัดการข้อมูล หรือระบบรับ Lead

```text
Next.js + TypeScript + Tailwind CSS + Supabase + Vercel
```

ใช้สำหรับ:

- Dashboard ดูข้อมูลลูกค้า
- ระบบรับ Lead
- ระบบจัดการรายการสินค้า
- ระบบจองคิวเบื้องต้น
- ระบบสมาชิกแบบง่าย
- Internal Tool สำหรับทีม

เหตุผลที่แนะนำ:

- ใช้ Next.js เป็นทั้งหน้าเว็บและ API เบื้องต้นได้
- Supabase มี PostgreSQL, Auth, Storage และ API ให้ใช้ง่าย
- เหมาะกับผู้เรียนที่อยากเข้าใจการเชื่อม Front-End กับ Database โดยไม่ต้องตั้ง Server เองตั้งแต่แรก

ลิงก์ติดตั้ง / เอกสาร:

- Supabase Next.js Quickstart: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
- Supabase JavaScript Client: https://supabase.com/docs/reference/javascript/introduction
- Vercel Environment Variables: https://vercel.com/docs/environment-variables

คำสั่งติดตั้งตัวอย่าง:

```bash
npm install @supabase/supabase-js
```

---

### Stack C: API / Backend ที่เน้นระบบจริงจังขึ้น

เหมาะกับผู้เรียนที่อยากต่อยอดจากเว็บไปเป็นระบบที่มี API ชัดเจน

```text
Node.js + Express หรือ NestJS + PostgreSQL + Prisma
```

หรือถ้าอยากใช้ Python:

```text
FastAPI + PostgreSQL
```

ใช้สำหรับ:

- REST API
- ระบบหลังบ้านที่แยกจาก Front-End
- ระบบที่มี Mobile App เรียก API เดียวกัน
- ระบบที่ต้องมี Data Interface ระหว่างหลายระบบ

หมายเหตุสำหรับคอร์สหลัก:

คอร์ส Vibe Code Website Bootcamp ไม่จำเป็นต้องสอน Backend Stack เต็มรูปแบบตั้งแต่ต้น แต่ควรอธิบายให้ผู้เรียนรู้ว่า ถ้าโปรเจกต์โตขึ้น จะเริ่มแยก API / Backend ออกมาได้

ลิงก์อ้างอิง:

- Express: https://expressjs.com/
- NestJS: https://docs.nestjs.com/
- Prisma: https://www.prisma.io/docs
- FastAPI: https://fastapi.tiangolo.com/

---

## 36.3 Stack สำหรับ Mobile App ที่ควรรู้

### Stack A: React Native + Expo

เหมาะกับผู้เรียนที่มาจากสายเว็บ เพราะใช้ JavaScript / TypeScript และ React concept ใกล้กับ Next.js

```text
React Native + Expo + TypeScript
```

ใช้สำหรับ:

- Mobile App iOS / Android
- App ตัวอย่างที่เรียก API จากระบบเดียวกับ Web App
- MVP ที่ต้องทำเร็ว
- App ที่อยากทดสอบบนมือถือจริงผ่าน Expo Go

เหตุผลที่แนะนำ:

- React Native ใช้ React concept ในการสร้าง Native App
- Expo ช่วยลดความยุ่งยากในการตั้งค่า Native environment
- เหมาะมากสำหรับคนที่เรียน Web Stack แล้วอยากต่อยอดไป Mobile

ลิงก์ติดตั้ง / เอกสาร:

- React Native Environment Setup: https://reactnative.dev/docs/environment-setup
- Expo Create Project: https://docs.expo.dev/get-started/create-a-project/
- Expo Tools: https://docs.expo.dev/develop/tools/

คำสั่งเริ่มต้นตัวอย่าง:

```bash
npx create-expo-app@latest my-app
cd my-app
npx expo start
```

---

### Stack B: Flutter

เหมาะกับงาน Mobile App ที่ต้องการ UI คุมเองเยอะ หรือทีมถนัด Dart

```text
Flutter + Dart
```

ใช้สำหรับ:

- Mobile App iOS / Android
- App ที่ต้องการ UI ลื่นและ Custom สูง
- App ที่อาจต่อยอดไป Desktop หรือ Web ในบางกรณี

ข้อสังเกต:

- Flutter เป็น Stack ที่ดี แต่สำหรับคอร์สนี้ไม่ควรใช้เป็น Stack หลัก เพราะผู้เรียนกำลังเรียน Next.js / React อยู่แล้ว
- ถ้าต้องสอนตัวอย่าง Mobile App แบบเร็ว React Native + Expo จะต่อเนื่องกับคอร์สหลักมากกว่า

ลิงก์ติดตั้ง / เอกสาร:

- Flutter Install: https://docs.flutter.dev/install

---

## 36.4 Stack ที่แนะนำสำหรับคอร์สนี้

สำหรับ Vibe Code Website Bootcamp ให้ใช้ Stack หลักดังนี้

```text
Next.js + TypeScript + Tailwind CSS + shadcn/ui + Supabase + Vercel + GitHub
```

เหตุผล:

1. เหมาะกับการทำเว็บจริงในเวลาจำกัด
2. AI ช่วยเขียนและแก้โค้ด Stack นี้ได้ดี เพราะมีตัวอย่างและเอกสารเยอะ
3. ผู้เรียนต่อยอดได้ทั้ง Landing Page, Portfolio, Lead Form และ Web App
4. Deploy ง่ายด้วย Vercel
5. ถ้าต่อยอดเป็น Mobile App สามารถใช้ React Native + Expo และเรียก API ชุดเดียวกันได้

---

# 37. Essential AI Coding Skills ที่ควรใช้ในงานทำเว็บไซต์

คำว่า Skill ในหัวข้อนี้หมายถึง “ชุดคำสั่ง / Workflow / Checklist ที่ทำซ้ำได้” เพื่อให้ AI ทำงานอย่างมีระบบมากขึ้น ไม่ต้องแปะ Prompt เดิมซ้ำทุกครั้ง

สำหรับ Claude Code จะสามารถทำเป็นไฟล์ `SKILL.md` ได้ โดยเก็บไว้ในโฟลเดอร์ `.claude/skills/<skill-name>/SKILL.md` ของโปรเจกต์ หรือ `~/.claude/skills/<skill-name>/SKILL.md` เพื่อใช้ข้ามโปรเจกต์

ลิงก์เอกสาร Claude Code Skills:

- Claude Code Skills: https://code.claude.com/docs/en/skills
- Claude Code Slash Commands: https://code.claude.com/docs/en/slash-commands
- Claude Code Setup: https://code.claude.com/docs/en/setup

หมายเหตุเรื่อง “Superpower”:

จากการเช็กข้อมูล ยังไม่ควรบังคับใช้ Third-party plugin/skill ชื่อ Superpower เป็น Requirement หลักของคอร์ส ถ้าไม่ได้มาจากแหล่งที่เชื่อถือได้หรือ Official โดยตรง ให้สอนเป็นแนวคิดว่า “Skill คือ Superpower ของคนทำงานกับ AI” แทน กล่าวคือเราทำ Workflow สำคัญให้กลายเป็น Skill ที่เรียกใช้ซ้ำได้

---

## 37.1 Skill ที่จำเป็นสำหรับคอร์สนี้

ไม่ควรให้ผู้เรียนติดตั้ง Skill เยอะเกินไป เพราะจะทำให้สับสน แนะนำแค่ 6 Skill หลักนี้ก็พอ

1. Project Brief Skill
2. Landing Page Review Skill
3. Component Builder Skill
4. Debug Skill
5. Deploy Checklist Skill
6. Token Saving / Context Management Skill

---

## 37.2 Skill 1: Project Brief Skill

ใช้เมื่อผู้เรียนต้องการแปลงไอเดียเว็บให้กลายเป็น Brief ที่ AI เข้าใจ

ชื่อแนะนำ:

```text
/vibe-brief
```

ใช้สำหรับ:

- สรุปโจทย์เว็บไซต์
- ระบุกลุ่มเป้าหมาย
- ระบุ Pain Point
- ระบุจุดขาย
- แนะนำ Section ที่ควรมี
- กำหนด CTA หลัก

โครงไฟล์:

```text
.claude/skills/vibe-brief/SKILL.md
```

ตัวอย่างเนื้อหา `SKILL.md`:

```md
---
description: Create a clear project brief for a website or landing page. Use when the user has an idea but needs structure, target audience, sections, CTA, and design direction.
---

## Instructions

Create a website project brief with these sections:

1. Project Name
2. Website Type
3. Main Goal
4. Target Audience
5. Pain Points
6. Main Offer / Value Proposition
7. Key Sections
8. CTA
9. Design Direction
10. Content Needed
11. Success Metrics

Keep the output practical and suitable for building a Next.js landing page.
Ask clarifying questions only if critical information is missing.
```

---

## 37.3 Skill 2: Landing Page Review Skill

ใช้รีวิวหน้าเว็บในมุม UX/UI และ Conversion

ชื่อแนะนำ:

```text
/landing-review
```

ใช้สำหรับ:

- ตรวจ Hero Section
- ตรวจ CTA
- ตรวจลำดับ Section
- ตรวจความน่าเชื่อถือ
- ตรวจข้อความขาย
- ตรวจว่าหน้าเว็บตอบโจทย์กลุ่มเป้าหมายไหม

โครงไฟล์:

```text
.claude/skills/landing-review/SKILL.md
```

ตัวอย่างเนื้อหา `SKILL.md`:

```md
---
description: Review a landing page for UX, UI, clarity, conversion, and business messaging. Use when checking a website draft or section content.
---

## Review Criteria

Review the landing page using this checklist:

1. Can users understand the offer within 5 seconds?
2. Is the Hero headline specific and outcome-focused?
3. Is the CTA visible and repeated at the right moments?
4. Does the page explain the user's problem clearly?
5. Does the solution match the target audience?
6. Are sections ordered in a logical story flow?
7. Is there enough trust: proof, process, FAQ, examples?
8. Is mobile readability considered?

## Output Format

- What works
- What should be improved
- Priority fixes
- Suggested rewrite for key copy
```

---

## 37.4 Skill 3: Component Builder Skill

ใช้เมื่ออยากให้ AI สร้างหรือแก้ Component แบบไม่ไปยุ่งไฟล์อื่น

ชื่อแนะนำ:

```text
/component-builder
```

ใช้สำหรับ:

- สร้าง Hero Section
- สร้าง Pricing Section
- สร้าง FAQ
- สร้าง Testimonial
- สร้าง Contact CTA
- แก้ Responsive เฉพาะ Component

โครงไฟล์:

```text
.claude/skills/component-builder/SKILL.md
```

ตัวอย่างเนื้อหา `SKILL.md`:

```md
---
description: Build or improve a single Next.js/Tailwind component. Use when the task is limited to one component or one section.
---

## Rules

- Work on one component at a time.
- Do not edit unrelated files unless required.
- Keep components readable and reusable.
- Use TypeScript.
- Use Tailwind CSS.
- Preserve the project's visual style.
- Make the component responsive.
- If the task is unclear, ask before rewriting.

## Output

Provide only the files or code sections that need to change.
Avoid rewriting the whole project.
```

---

## 37.5 Skill 4: Debug Skill

Claude Code มี bundled skill เช่น `/debug` อยู่แล้วในบางเวอร์ชัน แต่ควรสอนผู้เรียนให้รู้วิธีส่งข้อมูล Debug แบบเป็นระบบด้วย

ชื่อแนะนำถ้าทำเอง:

```text
/next-debug
```

ใช้สำหรับ:

- วิเคราะห์ Error
- แยกว่า Error มาจาก Front-End, API, Package, Environment หรือ Deploy
- แนะนำขั้นตอนแก้ทีละข้อ
- ไม่แก้มั่วทั้งโปรเจกต์

โครงไฟล์:

```text
.claude/skills/next-debug/SKILL.md
```

ตัวอย่างเนื้อหา `SKILL.md`:

```md
---
description: Debug errors in a Next.js project. Use when the user provides an error message, failed build, runtime issue, or broken UI behavior.
---

## Debug Process

1. Identify the error type.
2. Locate the likely file or configuration.
3. Explain the cause briefly.
4. Propose the smallest safe fix.
5. Ask before making broad changes.
6. After fixing, suggest a verification command.

## Required Context

If missing, ask for:
- command that was run
- full error message or last 40 lines
- files recently changed
- expected behavior
- actual behavior

## Output

- Cause
- Fix steps
- Files to change
- Verification command
```

---

## 37.6 Skill 5: Deploy Checklist Skill

ใช้เช็กก่อนส่งเว็บขึ้น Vercel

ชื่อแนะนำ:

```text
/deploy-checklist
```

ใช้สำหรับ:

- ตรวจ Build
- ตรวจ Environment Variables
- ตรวจปุ่ม CTA
- ตรวจลิงก์
- ตรวจ Responsive
- ตรวจ Metadata
- ตรวจ Form

โครงไฟล์:

```text
.claude/skills/deploy-checklist/SKILL.md
```

ตัวอย่างเนื้อหา `SKILL.md`:

```md
---
description: Prepare a Next.js website for deployment to Vercel. Use before pushing to production or after deployment fails.
---

## Checklist

1. Run npm run build.
2. Check TypeScript errors.
3. Check environment variables.
4. Check image paths and public assets.
5. Check CTA links.
6. Check form submission.
7. Check metadata title and description.
8. Check responsive layout.
9. Check console errors.
10. Push to GitHub and deploy on Vercel.

## Output

Return a clear checklist with pass/fail status and next actions.
```

---

## 37.7 Skill 6: Token Saving / Context Management Skill

ใช้ช่วยคุม Token และ Context เวลาใช้ AI ทำเว็บ

ชื่อแนะนำ:

```text
/context-saver
```

ใช้สำหรับ:

- สรุปสถานะโปรเจกต์ก่อนเปิด Chat ใหม่
- บอกว่าไฟล์ไหนควรให้ AI อ่าน
- ตัด Error Log ให้เหลือส่วนสำคัญ
- ป้องกัน AI แก้หลายเรื่องพร้อมกัน
- ลดการแปะ Prompt ซ้ำ

โครงไฟล์:

```text
.claude/skills/context-saver/SKILL.md
```

ตัวอย่างเนื้อหา `SKILL.md`:

```md
---
description: Reduce token usage and manage context for AI coding tasks. Use when the conversation is long, the task is unclear, or the user wants a compact handoff summary.
---

## Rules

- Keep only context needed for the current task.
- Identify which files are relevant.
- Do not include unrelated code.
- Summarize long history into a compact handoff.
- Recommend opening a new chat when switching milestones.
- Ask the user to provide only the last important error lines, not the full terminal log.

## Handoff Summary Format

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

---

# 38. Token Saving & Context Management สำหรับ Vibe Coding

หัวข้อนี้ควรเพิ่มเข้าไปใน Day 2 ก่อนเริ่ม Build ด้วย Next.js หรือก่อน Debug เพราะผู้เรียนจะได้ใช้ทันทีตอนลงมือทำเว็บจริง

## 38.1 Token คืออะไรแบบเข้าใจง่าย

Token คือหน่วยที่ AI ใช้อ่านและเขียนข้อมูล ยิ่งเราใส่ข้อมูลเยอะ AI ก็ต้องอ่านเยอะ และยิ่ง AI ตอบยาวก็ใช้ Token ฝั่ง Output เยอะขึ้น

ให้ผู้เรียนจำง่าย ๆ ว่า:

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

---

## 38.2 หลัก Context Hygiene

ก่อนสั่ง AI ทุกครั้ง ให้ถามตัวเอง 4 ข้อ

```text
AI จำเป็นต้องรู้อะไรบ้างเพื่อทำงานนี้?
AI ไม่จำเป็นต้องรู้อะไร?
ควรให้ AI ดูไฟล์ไหนเท่านั้น?
อยากให้ AI แก้อะไรแบบเฉพาะเจาะจง?
```

ตัวอย่าง Prompt ที่เปลือง Token:

```text
ช่วยดูโปรเจกต์ทั้งหมดแล้วแก้หน้าเว็บให้ดูดีขึ้น
```

ตัวอย่าง Prompt ที่ดีกว่า:

```text
ช่วยแก้เฉพาะ Hero Section ในไฟล์ components/Hero.tsx
เป้าหมายคือปรับข้อความให้ขายคอร์ส Vibe Code Website Bootcamp ได้ชัดขึ้น
ยังไม่ต้องแก้ไฟล์อื่น
ตอบกลับเฉพาะ code ที่ต้องเปลี่ยนและเหตุผลสั้น ๆ
```

---

## 38.3 แยก Task ให้เล็กลง

แทนที่จะสั่ง AI ให้ทำทุกอย่างพร้อมกัน ให้แบ่งงานเป็นรอบเล็ก ๆ

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

---

## 38.4 ใช้ AGENTS.md / CLAUDE.md แทนการแปะ Prompt ซ้ำ

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

---

## 38.5 ใช้ Claude Code Commands ให้เป็น

คำสั่งที่ควรรู้:

```text
/context  ดูว่าตอนนี้ context ใช้ไปกับอะไร
/compact  สรุปบทสนทนาที่ยาวให้สั้นลง
/clear    เริ่ม conversation ใหม่เมื่อเปลี่ยนงาน
/help     ดูคำสั่งที่มี
/debug    ช่วยไล่ปัญหา ถ้ามี bundled skill รองรับ
/run      ให้ Claude ช่วยรันและตรวจแอป ถ้าเวอร์ชันรองรับ
/verify   ให้ Claude ตรวจว่าการแก้ไขทำงานจริง ถ้าเวอร์ชันรองรับ
```

วิธีจำ:

```text
ถ้าคุยยาวและยังทำ task เดิม → ใช้ /compact
ถ้าจะเปลี่ยนไปทำ task ใหม่ → ใช้ /clear
ถ้าไม่แน่ใจว่า context บวมตรงไหน → ใช้ /context
```

---

## 38.6 วิธี Debug แบบประหยัด Token

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

---

# 39. เครื่องมือที่ผู้เรียนควรติดตั้ง

หัวข้อนี้ใช้เป็น Checklist ส่งให้ผู้เรียนก่อนเริ่มเรียน

## 39.1 จำเป็นสำหรับคอร์สหลัก

1. Node.js LTS
   - https://nodejs.org/en/download

2. Git
   - https://git-scm.com/downloads

3. VS Code หรือ Cursor
   - VS Code: https://code.visualstudio.com/download
   - Cursor: https://cursor.com/download

4. GitHub Account
   - https://github.com/

5. Vercel Account
   - https://vercel.com/

6. Supabase Account
   - https://supabase.com/

7. Postman หรือ Thunder Client
   - Postman: https://www.postman.com/downloads/
   - Thunder Client: https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client

8. AI Coding Tool อย่างน้อย 1 ตัว
   - ChatGPT
   - Claude / Claude Code
   - Cursor
   - Codex หรือ AI Coding Agent ที่ผู้เรียนใช้อยู่

---

## 39.2 แนะนำเพิ่มเติม แต่ไม่บังคับ

1. Figma
   - https://www.figma.com/downloads/

2. Canva
   - https://www.canva.com/

3. Expo Go สำหรับทดลอง Mobile App
   - https://expo.dev/go

4. Flutter SDK ถ้าผู้เรียนอยากต่อยอด Flutter
   - https://docs.flutter.dev/install

---

# 40. สรุป Stack และ Skill ที่แนะนำให้ใช้ในคอร์สนี้

## Stack หลักของคอร์ส

```text
Next.js + TypeScript + Tailwind CSS + shadcn/ui + Supabase + Vercel + GitHub
```

## Stack ต่อขยายสำหรับ Mobile App

```text
React Native + Expo + TypeScript
```

## Skill ที่ควรมีใน Claude Code / AI Coding Workflow

```text
/vibe-brief
/landing-review
/component-builder
/next-debug
/deploy-checklist
/context-saver
```

## หลักจำง่าย

```text
ใช้ Stack เท่าที่จำเป็น
ใช้ Skill เพื่อทำงานซ้ำให้เป็นระบบ
ใช้ Context เท่าที่ AI ต้องรู้
```

---

# 41. แหล่งอ้างอิงและลิงก์สำคัญ

## Current Stack / Survey

- Stack Overflow Developer Survey 2025: https://survey.stackoverflow.co/2025/technology
- State of JavaScript 2024: https://2024.stateofjs.com/en-US/

## Web Stack

- Next.js Installation: https://nextjs.org/docs/app/getting-started/installation
- Tailwind CSS with Next.js: https://tailwindcss.com/docs/installation/framework-guides/nextjs
- shadcn/ui Next.js: https://ui.shadcn.com/docs/installation/next
- Supabase Next.js Quickstart: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
- Vercel Next.js: https://vercel.com/docs/frameworks/full-stack/nextjs

## Mobile Stack

- React Native Environment Setup: https://reactnative.dev/docs/environment-setup
- Expo Create Project: https://docs.expo.dev/get-started/create-a-project/
- Flutter Install: https://docs.flutter.dev/install

## AI Coding Skills / Context Management

- Claude Code Skills: https://code.claude.com/docs/en/skills
- Claude Code Slash Commands: https://code.claude.com/docs/en/slash-commands
- Claude Code Setup: https://code.claude.com/docs/en/setup

