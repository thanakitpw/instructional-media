# 07 - Prompt Pack

ไฟล์นี้รวบรวม Prompt ที่ผู้เรียนใช้ได้ตลอดคอร์ส ตั้งแต่การเขียน Brief จนถึง Deploy และ Review เว็บไซต์

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
8. แนวทาง Responsive บนมือถือ

Project Brief:
[วางข้อมูล]
```

## Prompt 3: เขียน Copywriting แต่ละ Section

```text
ช่วยเขียน Copywriting สำหรับ Landing Page จาก Section ด้านล่าง

เงื่อนไข:
- ใช้ภาษาไทยที่อ่านง่าย
- น้ำเสียงน่าเชื่อถือ เป็นมิตร และไม่ขายแข็งเกินไป
- Headline ต้องชัดใน 5 วินาที
- CTA ต้องชวนให้กด
- เขียนให้เหมาะกับกลุ่มเป้าหมายนี้: [ระบุกลุ่มเป้าหมาย]

Section:
[วาง Section ที่ต้องการ]
```

## Prompt 4: สร้าง HTML Preview

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
- ไม่ต้องเชื่อมระบบจริง

ข้อมูล Section:
[วางข้อมูล]
```

## Prompt 5: รีวิว HTML Preview

```text
ช่วยรีวิว HTML Preview นี้ในมุม UX/UI และ Conversion

สิ่งที่อยากให้ช่วยดู:
1. Hero Section ชัดไหม
2. CTA เด่นไหม
3. Section เรียงดีไหม
4. ข้อความน่าเชื่อถือไหม
5. อ่านง่ายบนมือถือไหม
6. มีอะไรที่ควรเพิ่มหรือลด
7. ถ้าต้องการเพิ่ม Conversion ควรแก้ตรงไหน

HTML หรือเนื้อหาหน้าเว็บ:
[วางข้อมูล]
```

## Prompt 6: แปลง HTML เป็น Next.js

```text
ช่วยแปลง HTML Preview นี้เป็น Next.js App Router

เงื่อนไข:
- ใช้ TypeScript
- ใช้ Tailwind CSS
- แยก Component
- หน้าแรกอยู่ที่ app/page.tsx
- Component อยู่ในโฟลเดอร์ components
- รักษาดีไซน์เดิม
- โค้ดอ่านง่าย
- อธิบายด้วยว่าแต่ละไฟล์ทำหน้าที่อะไร
- ถ้ามีส่วนที่ควรปรับให้เหมาะกับ Next.js ให้แนะนำก่อน

HTML:
[วางโค้ด]
```

## Prompt 7: แก้ Component เฉพาะส่วน

```text
ช่วยแก้เฉพาะ Component นี้

ไฟล์:
[ชื่อไฟล์]

เป้าหมาย:
[อธิบายว่าต้องการแก้อะไร]

ข้อกำหนด:
- ใช้ TypeScript
- ใช้ Tailwind CSS
- รักษาสไตล์เดิมของเว็บ
- รองรับมือถือ
- ไม่ต้องแก้ไฟล์อื่นถ้าไม่จำเป็น

โค้ดปัจจุบัน:
[วางโค้ดเฉพาะ Component]
```

## Prompt 8: Debug Error

```text
ฉันเจอ Error ในโปรเจกต์ Next.js

สิ่งที่กำลังทำ:
[อธิบาย]

ไฟล์ที่เพิ่งแก้:
[ชื่อไฟล์]

คำสั่งที่รัน:
[เช่น npm run dev หรือ npm run build]

Error ที่ขึ้น:
[วาง Error หลัก 20-40 บรรทัด]

ช่วยอธิบายสาเหตุแบบเข้าใจง่าย
บอกวิธีแก้ทีละขั้นตอน
และระบุว่าต้องแก้ไฟล์ไหน
ยังไม่ต้อง rewrite ทั้งโปรเจกต์
```

## Prompt 9: ทำ Contact Form / Lead Form

```text
ช่วยสร้าง Contact Form สำหรับ Landing Page นี้

Field ที่ต้องมี:
- ชื่อ
- เบอร์โทร
- LINE ID
- บริการที่สนใจ
- ข้อความเพิ่มเติม

เงื่อนไข:
- ใช้ Next.js + TypeScript + Tailwind CSS
- มี Loading State
- มี Success State
- มี Error State เมื่อกรอกข้อมูลสำคัญไม่ครบ
- ยังไม่ต้องเชื่อมฐานข้อมูลจริง ถ้ายังไม่มี Supabase
- โค้ดอ่านง่ายและแยกเป็น Component
```

## Prompt 10: เตรียม Deploy

```text
ช่วยตรวจโปรเจกต์ Next.js นี้ก่อน Deploy ขึ้น Vercel

สิ่งที่อยากให้ช่วยตรวจ:
1. npm run build ผ่านไหม
2. มี TypeScript Error หรือไม่
3. รูปภาพและ path ถูกต้องไหม
4. CTA link ถูกต้องไหม
5. Metadata title/description ตั้งค่าหรือยัง
6. Responsive มีจุดเสี่ยงตรงไหน
7. Form ต้องตรวจอะไรบ้าง
8. ควรตั้ง Environment Variables อะไร

ข้อมูลโปรเจกต์:
[วางรายละเอียดหรือ error ที่เกี่ยวข้อง]
```

## Prompt 11: วางแผน Tracking

```text
ช่วยวางแผน Tracking สำหรับ Landing Page นี้

เป้าหมายเว็บ:
[ระบุเป้าหมาย]

CTA หลัก:
[ระบุ CTA]

สิ่งที่อยากวัด:
[เช่น click LINE, submit form, click pricing]

ช่วยเสนอ:
1. Conversion ที่ควรวัด
2. Key Event Name ที่เหมาะสม
3. จุดที่ควรวางปุ่มหรือ event
4. สิ่งที่ควรดูใน GA4
5. Checklist หลังติดตั้ง Tracking
```

## Prompt 12: สรุป Handoff ก่อนเปิด Chat ใหม่

```text
ช่วยสรุปสถานะโปรเจกต์นี้เพื่อเอาไปใช้ต่อใน Chat ใหม่

ขอรูปแบบ:
1. Project goal
2. Tech stack
3. Current status
4. Important files
5. Completed work
6. Next task
7. Known issues
8. Commands to run
9. Design rules / constraints

สรุปให้กระชับ แต่ครบพอให้ AI ตัวใหม่ทำงานต่อได้
```

