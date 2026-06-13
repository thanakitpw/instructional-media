# 04 - Deploy, Tracking & Portfolio

## บทนี้เรียนไปเพื่ออะไร

เว็บไซต์จะมีคุณค่ามากขึ้นเมื่อเปิดใช้งานจริง วัดผลได้ และนำไปต่อยอดได้ บทนี้สอนการทำ Contact Form หรือ Lead Form เบื้องต้น แนวคิด Supabase การ Deploy ด้วย Vercel การตรวจเว็บหลังขึ้นออนไลน์ และการวางแผน Tracking / Portfolio

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

หลักการออกแบบฟอร์ม:

- ถามเท่าที่จำเป็น
- Label ต้องชัด
- ปุ่มส่งต้องเด่น
- มีข้อความหลังส่งสำเร็จ
- มี Error State เมื่อลืมกรอกข้อมูลสำคัญ
- ต้องทดสอบบนมือถือ

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

สำหรับคอร์สนี้ ผู้สอนสามารถเลือกระดับความลึกได้:

- ระดับเริ่มต้น: ทำฟอร์ม UI และอธิบาย Flow การเก็บ Lead
- ระดับกลาง: เชื่อม Supabase จริง
- ระดับต่อยอด: เพิ่ม Notification หรือส่งต่อไป Google Sheets / CRM

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

แนวคิด Auto Deploy:

```text
แก้โค้ดในเครื่อง
↓
Commit
↓
Push ขึ้น GitHub
↓
Vercel Deploy ใหม่อัตโนมัติ
```

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

ประเด็นที่ควรย้ำ:

> เว็บที่ดีไม่ใช่แค่สวย แต่ต้องวัดผลได้

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

ผู้เรียนควรมี:

- เว็บไซต์ออนไลน์ 1 เว็บ
- GitHub Repository
- Vercel URL
- Lead Form หรือ Contact Form
- Checklist การวัดผล
- Roadmap การต่อยอด
- โปรเจกต์ที่ใช้เป็น Portfolio ได้

## สรุปท้ายบท

- Deploy ทำให้เว็บกลายเป็นผลงานที่เปิดให้คนอื่นดูได้
- ฟอร์มคือจุดเริ่มต้นของการเก็บ Lead
- Tracking ช่วยให้รู้ว่าเว็บทำงานได้ผลหรือไม่
- PageSpeed และ SEO พื้นฐานควรถูกตรวจหลังเว็บออนไลน์
- เว็บไซต์ที่ทำในคอร์สควรถูกนำไปใช้ต่อ ไม่ใช่จบแค่ในห้องเรียน

