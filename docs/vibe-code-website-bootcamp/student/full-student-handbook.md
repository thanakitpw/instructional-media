# Vibe Code Website Bootcamp - คู่มือผู้เรียนฉบับละเอียด

คู่มือนี้เป็นเอกสารประกอบการเรียนสำหรับคอร์ส Vibe Code Website Bootcamp ใช้อ่านตามระหว่างเรียน ทำ Workshop และกลับมาทบทวนหลังเรียนได้

เป้าหมายของคู่มือนี้คือช่วยให้คุณสร้างเว็บไซต์จริงด้วย AI ตั้งแต่การคิดโจทย์ วางโครงหน้าเว็บ สร้าง HTML Preview แปลงเป็น Next.js นำขึ้นออนไลน์ และวางแผนวัดผลเบื้องต้น

แนวคิดหลักของคอร์ส:

> เริ่มจากโจทย์ให้ชัดก่อน แล้วค่อยใช้ AI ช่วยออกแบบ เขียนโค้ด แก้บั๊ก Deploy และวัดผล

---

# 1. ภาพรวมคอร์ส

คอร์สนี้ออกแบบให้คุณได้ทำเว็บไซต์ของตัวเอง 1 โปรเจกต์ ตั้งแต่ต้นจนจบ โดยใช้ AI เป็นผู้ช่วยในแต่ละขั้นตอน

สิ่งสำคัญคือคุณไม่ได้ใช้ AI เพื่อให้มัน “ทำทุกอย่างแทน” แต่ใช้ AI เพื่อช่วยคิด ช่วยจัดระบบ ช่วยเขียนโค้ด ช่วยตรวจ และช่วยแก้ปัญหา โดยคุณยังเป็นคนตัดสินใจว่าเว็บไซต์ควรตอบโจทย์ใคร ต้องการสื่อสารอะไร และควรพาผู้ใช้ไปทำ Action อะไร

## สิ่งที่คุณจะทำได้หลังเรียนจบ

หลังเรียนจบ คุณควรสามารถ:

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
12. เข้าใจการวัดผลด้วย GA4, Google Tag และ Search Console ในระดับเริ่มต้น
13. รู้จัก Conversion และ Key Event ที่ควรวัดบน Landing Page
14. ใช้เว็บไซต์ที่ทำเสร็จเป็น Portfolio หรือ Landing Page สำหรับธุรกิจได้

## Workflow หลักของคอร์ส

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

## ผลลัพธ์ที่คุณควรมีหลังจบคอร์ส

- Project Brief ของเว็บไซต์ตัวเอง
- โครง Section ของ Landing Page
- HTML Preview 1 หน้า
- โปรเจกต์ Next.js
- Component หลักของเว็บไซต์
- GitHub Repository
- เว็บไซต์ออนไลน์บน Vercel
- Contact Form หรือ Lead Form เบื้องต้น
- Tracking Checklist
- Roadmap การต่อยอดเว็บไซต์

---

# 2. Vibe Code Foundation

## Vibe Code คืออะไร

Vibe Code คือแนวทางการทำงานที่ใช้ AI ช่วยสร้าง แก้ไข และพัฒนาเว็บไซต์ โดยคุณเป็นคนกำหนดทิศทาง และให้ AI ช่วยทำงานในส่วนที่ใช้เวลาเยอะ เช่น เขียนโค้ด สร้าง Layout แก้ Error ปรับข้อความ หรือเสนอแนวทาง UX/UI

AI ช่วยให้คุณทำงานเร็วขึ้น แต่ AI จะให้ผลลัพธ์ดีแค่ไหนขึ้นอยู่กับความชัดเจนของโจทย์ที่คุณให้ไป

ถ้า Brief ไม่ชัด เว็บที่ได้อาจดูสวย แต่ไม่ตอบโจทย์ ถ้า Brief ชัด AI จะช่วยคุณออกแบบและพัฒนาเว็บได้ตรงขึ้นมาก

## AI ช่วยทำเว็บไซต์ตรงไหนได้บ้าง

### 1. ช่วยคิดไอเดียเว็บไซต์

AI ช่วยแตกไอเดียกว้าง ๆ ให้เป็นเว็บไซต์ที่ทำได้จริง เช่น:

- Landing Page สำหรับขายคอร์ส
- เว็บรับทำเว็บไซต์
- Portfolio ส่วนตัว
- เว็บร้านอาหาร
- เว็บคลินิก
- เว็บรับ Lead สำหรับยิงแอด

### 2. ช่วยเขียน Project Brief

AI ช่วยจัดข้อมูลให้เป็นเอกสารที่ชัดเจน เช่น:

- เป้าหมายเว็บไซต์
- กลุ่มเป้าหมาย
- Pain Point
- จุดขาย
- CTA
- Section ที่ควรมี
- Mood & Tone

### 3. ช่วยวาง Section และ User Flow

AI ช่วยจัดลำดับเนื้อหา เช่น:

- Hero
- Problem
- Solution
- Service
- Process
- Portfolio
- Pricing
- FAQ
- Contact

### 4. ช่วยเขียน Copywriting

AI ช่วยเขียน Headline, Subheadline, CTA, FAQ และข้อความขายในแต่ละ Section ได้หลายแบบ เพื่อให้คุณเลือก ปรับ และทำให้เข้ากับธุรกิจหรือโปรไฟล์ของคุณ

### 5. ช่วยสร้าง HTML Preview

AI ช่วยสร้างหน้าเว็บตัวอย่างด้วย HTML และ CSS เพื่อให้คุณเห็นภาพก่อนว่าหน้าเว็บควรออกมาประมาณไหน

### 6. ช่วยแปลงเป็น Next.js

AI ช่วยแปลง HTML Preview เป็นโปรเจกต์ Next.js และช่วยแยกหน้าเว็บเป็น Component

### 7. ช่วย Debug

เมื่อเจอ Error คุณสามารถให้ AI ช่วยอ่าน Error อธิบายสาเหตุ และแนะนำวิธีแก้ทีละขั้นตอนได้

## ประเภทเว็บไซต์ที่คุณเลือกทำได้

เลือก 1 โปรเจกต์หลักสำหรับทำตลอดคอร์ส

### Option A: Landing Page ขายบริการ

เหมาะสำหรับคนที่มีบริการหรืออยากรับงาน เช่น:

- รับทำเว็บไซต์
- รับยิงแอด
- รับดูแลเพจ
- รับออกแบบ
- Consult ธุรกิจ
- คอร์สเรียนออนไลน์

### Option B: Portfolio Website

เหมาะสำหรับคนที่อยากใช้สมัครงานหรือรับงาน เช่น:

- Developer Portfolio
- UX/UI Designer Portfolio
- Content Creator Portfolio
- Digital Marketer Portfolio

### Option C: Website สำหรับธุรกิจ

เหมาะกับเจ้าของกิจการ เช่น:

- ร้านอาหาร
- คลินิก
- ร้านเสริมสวย
- ฟิตเนส
- โรงเรียนสอนพิเศษ
- ร้านค้าออนไลน์

### Option D: Lead Generation Website

เหมาะกับคนที่ต้องการเก็บข้อมูลลูกค้า เช่น:

- ฟอร์มขอใบเสนอราคา
- ฟอร์มจองคิว
- ฟอร์มสมัครเรียน
- ฟอร์มปรึกษาฟรี
- ฟอร์มรับไฟล์ฟรี

## Project Brief คืออะไร

Project Brief คือเอกสารสั้น ๆ ที่บอกว่าเว็บไซต์นี้คืออะไร ทำเพื่อใคร แก้ปัญหาอะไร มีจุดขายอะไร และอยากให้ผู้ใช้ทำอะไร

Brief ที่ดีช่วยให้:

- คุณคิดโจทย์ชัดขึ้น
- AI สร้างผลลัพธ์ได้ตรงขึ้น
- คุณตรวจงานได้ง่ายขึ้น
- Design และ Copy ไม่หลุดจากเป้าหมาย
- ใช้เป็นฐานสำหรับทำเว็บจริงได้

## โครงสร้าง Project Brief

Project Brief ที่ดีควรมีหัวข้อเหล่านี้:

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

## Workshop: เลือกโปรเจกต์และเขียน Project Brief

สิ่งที่คุณต้องทำ:

1. เลือกประเภทเว็บไซต์ที่จะทำ
2. เขียนเป้าหมายของเว็บไซต์
3. ระบุกลุ่มเป้าหมาย
4. เขียน Pain Point ของกลุ่มเป้าหมาย
5. เขียนจุดขายหลัก
6. เลือก CTA หลัก
7. ใช้ AI ช่วยจัดเป็น Project Brief
8. ตรวจและปรับ Brief ให้เข้าใจง่าย

ผลลัพธ์ที่ต้องได้:

- Project Brief ของเว็บไซต์ตัวเอง 1 ชุด

---

# 3. Website Design & HTML Preview

เมื่อมี Project Brief แล้ว ขั้นต่อไปคือเปลี่ยนโจทย์ให้เป็นโครงหน้าเว็บที่ผู้ใช้เข้าใจได้จริง

ในส่วนนี้คุณจะวาง Section, User Flow, CTA, UX/UI Direction และใช้ AI สร้าง HTML Preview เพื่อดูหน้าตาเว็บก่อนเริ่มทำโปรเจกต์ Next.js

## Sitemap คืออะไร

Sitemap คือโครงสร้างหน้าของเว็บไซต์ เช่น:

```text
Home
About
Services
Portfolio
Contact
```

สำหรับคอร์สนี้ แนะนำให้เริ่มจากเว็บหน้าเดียวก่อน เพราะทำง่าย เห็นผลเร็ว และเหมาะกับการทำ Landing Page หรือ Portfolio

ตัวอย่าง Sitemap สำหรับ Landing Page:

```text
Landing Page
Thank You Page
Privacy Policy
```

## User Flow คืออะไร

User Flow คือเส้นทางที่ผู้ใช้เดินผ่านหน้าเว็บ ตั้งแต่เห็นหน้าแรกจนถึงการตัดสินใจทำ Action

ตัวอย่าง:

```text
เห็น Hero
↓
เข้าใจปัญหาของตัวเอง
↓
เห็น Solution
↓
ดูบริการและขั้นตอน
↓
ดูตัวอย่างหรือราคา
↓
อ่าน FAQ เพื่อลดความกังวล
↓
กด CTA เพื่อติดต่อ
```

## Section ที่ควรมีใน Landing Page

### 1. Hero Section

Hero คือส่วนแรกที่ผู้ใช้เห็น ต้องตอบให้ได้ว่า:

- เว็บนี้คืออะไร
- ช่วยใคร
- ช่วยแก้ปัญหาอะไร
- มีจุดขายอะไร
- ต้องกดอะไรต่อ

ตัวอย่าง:

```text
Headline: ทำเว็บไซต์ธุรกิจให้ดูน่าเชื่อถือ พร้อมใช้งานจริง
Subheadline: เหมาะสำหรับเจ้าของธุรกิจที่อยากมีเว็บไซต์ไว้รับลูกค้าใหม่ โดยไม่ต้องเริ่มจากศูนย์
CTA: ทัก LINE เพื่อขอดูแนวทางเว็บไซต์
Secondary CTA: ดูตัวอย่างผลงาน
```

### 2. Problem Section

ใช้เล่าปัญหาของกลุ่มเป้าหมาย เช่น:

- มีเพจแล้วแต่ลูกค้ายังไม่มั่นใจ
- ยิงแอดแล้วไม่มีหน้าเว็บรองรับ
- อยากมีเว็บไซต์แต่ไม่รู้จะเริ่มยังไง
- กลัวจ้างทำเว็บแล้วไม่ตรงใจ
- ไม่มีเวลาเตรียมข้อมูลเอง

### 3. Solution Section

ใช้บอกว่าวิธีของคุณช่วยแก้ปัญหาอย่างไร เช่น:

- ช่วยวางโครงเว็บให้
- ออกแบบหน้าแรกให้ดูก่อน
- ทำเว็บให้รองรับมือถือ
- มีปุ่มติดต่อชัดเจน
- พร้อม Deploy ขึ้นออนไลน์

### 4. Service / Feature Section

แสดงสิ่งที่ผู้ใช้จะได้รับ เช่น:

- ออกแบบหน้าเว็บ
- พัฒนาเว็บไซต์
- รองรับมือถือ
- เชื่อมฟอร์มติดต่อ
- ติดตั้ง Tracking
- ดูแลหลังส่งมอบ

### 5. Process Section

แสดงขั้นตอนการทำงาน เช่น:

```text
1. คุยโจทย์
2. วางโครงเว็บ
3. ออกแบบหน้าแรก
4. พัฒนาเว็บ
5. ตรวจงาน
6. Deploy
7. ส่งมอบ
```

### 6. Portfolio / Example Section

ใช้แสดงตัวอย่างงาน เว็บไซต์ที่เคยทำ Mockup, Case Study, Before / After หรือ Demo Project

ถ้าคุณยังไม่มีผลงานจริง สามารถใช้ Demo Project ที่ทำในคอร์สนี้เป็น Portfolio เริ่มต้นได้

### 7. Pricing Section

ใช้แสดงราคา แพ็กเกจ หรือราคาเริ่มต้น

ตัวอย่าง:

```text
Starter: เหมาะกับเริ่มต้น
Growth: เหมาะกับธุรกิจที่ต้องการหน้าเว็บครบขึ้น
Business: เหมาะกับธุรกิจที่ต้องการระบบและการวัดผล
```

### 8. FAQ Section

ใช้ตอบข้อกังวล เช่น:

- ใช้เวลากี่วัน
- ต้องเตรียมข้อมูลอะไร
- แก้ไขได้กี่ครั้ง
- มีค่าใช้จ่ายรายปีไหม
- เว็บรองรับมือถือไหม
- หลังส่งมอบแก้ไขเองได้ไหม

### 9. Final CTA Section

ใช้ปิดท้ายและชวนให้ผู้ใช้ทำ Action

ตัวอย่าง:

```text
อยากมีเว็บไซต์ที่ช่วยให้ธุรกิจดูน่าเชื่อถือขึ้น?
ทัก LINE เพื่อเริ่มคุยโจทย์ได้เลย
```

## พื้นฐาน UX/UI ที่ควรรู้

### Layout

- หัวข้อต้องเด่น
- ข้อความไม่ควรยาวเกินไป
- Section ต้องมีระยะห่าง
- CTA ต้องมองเห็นง่าย
- หน้าเว็บควรอ่านไหลจากบนลงล่าง

### Typography

- ใช้ฟอนต์ไม่เยอะเกินไป
- ขนาดหัวข้อและเนื้อหาต้องต่างกันชัดเจน
- ตัวหนังสือต้องอ่านง่ายบนมือถือ
- ไม่ควรใช้ข้อความแน่นเกินไป

### Color

- มีสีหลัก 1 สี
- มีสีรอง 1-2 สี
- พื้นหลังต้องช่วยให้อ่านง่าย
- สีปุ่ม CTA ต้องเด่นกว่าส่วนอื่น

ตัวอย่างโทนสีสำหรับแบรนด์ส้ม:

```text
Primary: Orange
Background: White / Light Gray
Text: Black / Dark Gray
Accent: Soft Orange
```

### Spacing

- ระยะห่างระหว่าง Section ต้องพอดี
- Card ไม่ควรแน่นเกินไป
- ปุ่มควรมีพื้นที่รอบ ๆ
- หน้าเว็บควรอ่านสบาย

### Responsive

- หน้าเว็บต้องดูดีบนมือถือ
- Card ควรเรียงลงมาในมือถือ
- ปุ่มต้องกดง่าย
- ข้อความต้องไม่เล็กเกินไป
- รูปภาพต้องไม่ล้นจอ

## Prompt สำหรับวาง Section

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

## Prompt สำหรับสร้าง HTML Preview

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

## Checklist ตรวจ HTML Preview

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

## Workshop: สร้าง HTML Preview

สิ่งที่คุณต้องทำ:

1. นำ Project Brief มาใช้
2. ให้ AI ช่วยวาง Section
3. ปรับ Section ให้เหมาะกับเว็บของตัวเอง
4. ให้ AI สร้าง HTML Preview
5. เปิดไฟล์ Preview ดูใน Browser
6. ปรับข้อความ สี Layout และ CTA
7. ตรวจด้วย Checklist
8. Save ไฟล์ HTML Preview ไว้ใช้ต่อในขั้นตอน Next.js

ผลลัพธ์ที่ต้องได้:

- HTML Preview ของเว็บตัวเอง 1 หน้า

---

# 4. Build Website with Next.js

หลังจากได้ HTML Preview แล้ว คุณจะเปลี่ยนหน้าเว็บตัวอย่างให้กลายเป็นโปรเจกต์จริงที่ดูแลต่อได้

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
- `app/layout.tsx` คือโครงหลักของเว็บ เช่น metadata, font และ layout หลัก
- `app/globals.css` คือไฟล์ CSS หลัก
- `components/` คือโฟลเดอร์เก็บส่วนประกอบของหน้าเว็บ
- `public/` คือโฟลเดอร์เก็บรูปภาพ โลโก้ ไอคอน หรือไฟล์ Static
- `package.json` คือไฟล์เก็บข้อมูลโปรเจกต์และคำสั่งสำหรับรันเว็บ

## การแปลง HTML Preview เป็น Component

HTML Preview ที่ได้จากขั้นก่อนหน้ามักเป็นไฟล์เดียว แต่เว็บจริงควรแยกเป็น Component

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

หลังจากแปลงเป็น Next.js แล้ว ให้สั่ง AI แบบเจาะจงขึ้น

ตัวอย่าง Prompt แก้ Hero:

```text
ช่วยแก้ Hero Section ให้ข้อความดูขายมากขึ้น
กลุ่มเป้าหมายคือเจ้าของธุรกิจ SME
ขอ Headline 5 แบบ และเลือกแบบที่เหมาะที่สุดมาใส่ใน Component Hero.tsx
```

ตัวอย่าง Prompt ปรับสี:

```text
ช่วยปรับสีของเว็บให้ใช้โทนส้ม ขาว ดำ ดูพรีเมียมขึ้น
แต่ยังต้องอ่านง่ายบนมือถือ
```

ตัวอย่าง Prompt เพิ่ม FAQ:

```text
ช่วยเพิ่ม FAQ Section จำนวน 6 คำถาม
เน้นตอบข้อกังวลของลูกค้าที่อยากจ้างทำเว็บไซต์
```

## พื้นฐาน Git และ GitHub

Git คือระบบเก็บประวัติการแก้ไขโค้ด ทำให้คุณย้อนกลับ ดูประวัติ หรือบันทึกจุดสำคัญของงานได้

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

Error เป็นเรื่องปกติในการพัฒนาเว็บ สิ่งสำคัญคือคุณต้องส่งข้อมูลให้ AI ครบพอ

ข้อมูลที่ควรส่งให้ AI:

1. กำลังทำอะไร
2. Error ที่ขึ้นคืออะไร
3. ไฟล์ที่เกี่ยวข้องคือไฟล์ไหน
4. สิ่งที่ลองแก้ไปแล้วคืออะไร

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

สิ่งที่คุณต้องทำ:

1. สร้างโปรเจกต์ Next.js
2. นำ HTML Preview มาให้ AI ช่วยแปลง
3. แยก Component หลัก
4. ปรับข้อความ สี รูป และ Section
5. รันเว็บในเครื่อง
6. แก้ Error เบื้องต้น
7. Commit โค้ด
8. Push ขึ้น GitHub

ผลลัพธ์ที่ต้องได้:

- โปรเจกต์ Next.js ที่รันได้ในเครื่อง
- GitHub Repository

---

# 5. Deploy, Tracking & Portfolio

เว็บไซต์จะมีคุณค่ามากขึ้นเมื่อเปิดใช้งานจริง วัดผลได้ และนำไปต่อยอดได้

ในส่วนนี้คุณจะทำ Contact Form หรือ Lead Form เบื้องต้น เข้าใจแนวคิด Supabase Deploy ด้วย Vercel ตรวจเว็บหลังขึ้นออนไลน์ และวางแผน Tracking / Portfolio

## Contact Form / Lead Form เบื้องต้น

ฟอร์มมีไว้เพื่อเก็บข้อมูลจากลูกค้า เช่น:

- ชื่อ
- เบอร์โทร
- อีเมล
- LINE ID
- บริการที่สนใจ
- งบประมาณ
- ข้อความเพิ่มเติม

ตัวอย่างฟอร์ม:

```text
ชื่อ:
เบอร์โทร:
LINE ID:
บริการที่สนใจ:
ข้อความเพิ่มเติม:
ปุ่ม: ส่งข้อมูล
```

## แนวคิดการเชื่อม Supabase

Supabase ใช้เป็นฐานข้อมูลสำหรับเก็บข้อมูลฟอร์ม

Flow แบบง่าย:

```text
ผู้ใช้กรอกฟอร์มบนเว็บไซต์
↓
กดส่งข้อมูล
↓
เว็บส่งข้อมูลไป Supabase
↓
เจ้าของเว็บเข้าไปดู Lead ได้
```

ตัวอย่างตาราง:

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

## Deploy เว็บไซต์ด้วย Vercel

Vercel คือแพลตฟอร์มสำหรับนำเว็บไซต์ขึ้นออนไลน์ เหมาะกับ Next.js และเชื่อมกับ GitHub ได้ง่าย

ขั้นตอน Deploy:

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

เมื่อเชื่อม GitHub กับ Vercel แล้ว ทุกครั้งที่ Push โค้ดขึ้น GitHub ระบบจะ Deploy ใหม่อัตโนมัติ

## Checklist หลัง Deploy

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

## GA4, Google Tag และ Search Console

### GA4 ใช้ทำอะไร

GA4 ใช้ดูพฤติกรรมคนเข้าเว็บ เช่น:

- มีคนเข้าเว็บกี่คน
- เข้ามาจากช่องทางไหน
- ใช้มือถือหรือคอม
- หน้าไหนคนดูเยอะ
- คนอยู่ในเว็บนานไหม

### Google Tag ใช้ทำอะไร

Google Tag ใช้จัดการ Tracking Code และ Event ต่าง ๆ โดยไม่ต้องแก้โค้ดบ่อย

### Search Console ใช้ทำอะไร

Search Console ใช้ดูว่าเว็บแสดงบน Google อย่างไร เช่น:

- Google เจอเว็บหรือยัง
- เว็บมีปัญหา Index ไหม
- คนค้นหาคำอะไรแล้วเจอเว็บ
- หน้าเว็บมีปัญหา SEO เทคนิคไหม

## Conversion และ Key Event

Conversion คือการกระทำสำคัญที่อยากให้ผู้ใช้ทำบนเว็บ

ตัวอย่าง Conversion:

- กดปุ่ม LINE
- กดปุ่มโทร
- ส่งฟอร์ม
- กดสมัครเรียน
- กดจองคิว
- กดดาวน์โหลดไฟล์
- กดดูแพ็กเกจ
- กดดู Portfolio

ตัวอย่าง Key Event:

```text
click_line
submit_lead_form
click_call
click_pricing
click_portfolio
```

เว็บที่ดีไม่ใช่แค่สวย แต่ควรวัดผลได้ด้วย

## PageSpeed Insights และ Performance เบื้องต้น

สิ่งที่ควรดูใน PageSpeed Insights:

- Performance
- Accessibility
- Best Practices
- SEO
- Core Web Vitals

สิ่งที่มักทำให้เว็บช้า:

- รูปภาพใหญ่เกินไป
- ใช้ Animation มากเกินไป
- โหลดฟอนต์เยอะ
- โค้ดไม่จำเป็นเยอะ
- ใช้วิดีโอหนักเกินไป

Checklist ปรับ Performance เบื้องต้น:

- ลดขนาดรูป
- ใช้ภาพ WebP
- ไม่ใช้วิดีโอหนักเกินไป
- ตรวจ Mobile Layout
- ใส่ Alt Text ให้รูปสำคัญ
- ตั้ง Title และ Description

## การใช้เว็บไซต์เป็น Portfolio

### สำหรับสมัครงาน

ควรมีข้อมูล:

- About Me
- Skills
- Projects
- Tools
- Case Study
- Contact
- GitHub
- LinkedIn

### สำหรับรับงาน Freelance

ควรมีข้อมูล:

- บริการที่รับทำ
- ตัวอย่างงาน
- ขั้นตอนการทำงาน
- ราคาเริ่มต้น
- FAQ
- ช่องทางติดต่อ
- ฟอร์มขอใบเสนอราคา

### สำหรับเจ้าของธุรกิจ

สามารถใช้เว็บเป็น:

- Landing Page สำหรับยิงแอด
- หน้าเก็บ Lead
- หน้าแนะนำสินค้า / บริการ
- หน้าเพิ่มความน่าเชื่อถือ
- หน้าให้ลูกค้าตัดสินใจก่อนทัก

## Final Workshop: Deploy เว็บจริง พร้อม Checklist การวัดผล

สิ่งที่คุณต้องทำ:

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

ผลลัพธ์สุดท้าย:

- เว็บไซต์ออนไลน์ 1 เว็บ
- GitHub Repository
- Vercel URL
- Lead Form หรือ Contact Form
- Checklist การวัดผล
- Roadmap การต่อยอด
- โปรเจกต์ที่ใช้เป็น Portfolio ได้

---

# 6. Current Stack & Tools

ในการทำงานจริงไม่ได้มีแค่เครื่องมือเดียวหรือ Stack เดียว คุณควรเข้าใจว่าแต่ละ Stack เหมาะกับงานแบบไหน และเลือกตามเป้าหมายของโปรเจกต์

หลักจำง่าย:

> Stack ที่ดีไม่ใช่ Stack ที่ใหม่ที่สุด แต่คือ Stack ที่ทำให้งานเสร็จจริง ดูแลต่อได้ และเหมาะกับขนาดโปรเจกต์

## Stack หลักของคอร์สนี้

```text
Next.js + TypeScript + Tailwind CSS + shadcn/ui + Supabase + Vercel + GitHub
```

เหตุผล:

1. เหมาะกับการทำเว็บจริงในเวลาจำกัด
2. AI ช่วยเขียนและแก้โค้ด Stack นี้ได้ดี
3. ต่อยอดได้ทั้ง Landing Page, Portfolio, Lead Form และ Web App
4. Deploy ง่ายด้วย Vercel
5. ถ้าต่อยอดเป็น Mobile App สามารถใช้ React Native + Expo ได้

## เครื่องมือที่ควรติดตั้ง

จำเป็นสำหรับคอร์สหลัก:

1. Node.js LTS
2. Git
3. VS Code หรือ Cursor
4. GitHub Account
5. Vercel Account
6. Supabase Account
7. Postman หรือ Thunder Client
8. AI Coding Tool อย่างน้อย 1 ตัว เช่น ChatGPT, Claude, Claude Code, Cursor หรือ Codex

แนะนำเพิ่มเติม แต่ไม่บังคับ:

1. Figma
2. Canva
3. Expo Go สำหรับทดลอง Mobile App
4. Flutter SDK ถ้าต้องการต่อยอด Flutter

---

# 7. AI Coding Skills & Context Management

การใช้ AI ทำเว็บให้ได้ผลไม่ได้อยู่ที่ Prompt เดียว แต่อยู่ที่ Workflow ที่ทำซ้ำได้

คุณควรรู้วิธีแบ่งงานให้เล็กลง ใช้ชุดคำสั่งเฉพาะทาง และจัดการ Context ไม่ให้ AI อ่านข้อมูลเกินจำเป็น

## Skill คืออะไร

ในบริบทของ AI Coding คำว่า Skill หมายถึงชุดคำสั่ง Workflow หรือ Checklist ที่ทำซ้ำได้ เพื่อให้ AI ทำงานอย่างมีระบบมากขึ้น

จำง่าย ๆ:

```text
Skill = วิธีทำงานซ้ำที่ทำให้ AI เข้าใจและช่วยเราได้เร็วขึ้น
```

## Skill ที่ควรใช้ในคอร์สนี้

1. Project Brief Skill
2. Landing Page Review Skill
3. Component Builder Skill
4. Debug Skill
5. Deploy Checklist Skill
6. Token Saving / Context Management Skill

## Token คืออะไรแบบเข้าใจง่าย

Token คือหน่วยที่ AI ใช้อ่านและเขียนข้อมูล ยิ่งเราใส่ข้อมูลเยอะ AI ก็ต้องอ่านเยอะ และยิ่ง AI ตอบยาวก็ใช้ Token มากขึ้น

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

Prompt ที่กว้างเกินไป:

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

แบ่งงานเป็นรอบเล็ก ๆ:

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

หลักจำง่าย:

> งานเล็กลง = AI เข้าใจง่ายขึ้น = ใช้ Token น้อยลง = แก้ผิดน้อยลง

---

# 8. Prompt Pack

## Prompt 1: สร้าง Project Brief

```text
ช่วยสร้าง Project Brief สำหรับเว็บไซต์จากข้อมูลนี้

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

# 9. Checklist รวมก่อนจบคอร์ส

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

# 10. ใบงานสรุปของคุณ

## Project Brief

```text
ชื่อโปรเจกต์:
ประเภทเว็บไซต์:
เป้าหมายของเว็บไซต์:
กลุ่มเป้าหมาย:
Pain Point:
จุดขาย:
Offer:
CTA หลัก:
CTA รอง:
Mood & Tone:
สีและสไตล์:
```

## Landing Page Section Plan

```text
Hero:
Problem:
Solution:
Services:
Process:
Portfolio / Example:
Pricing / Offer:
FAQ:
Final CTA:
```

## Final Submission

```text
ชื่อโปรเจกต์:
GitHub Repository:
Vercel URL:
สิ่งที่ทำเสร็จแล้ว:
สิ่งที่จะพัฒนาต่อ:
Conversion ที่จะวัด:
```

