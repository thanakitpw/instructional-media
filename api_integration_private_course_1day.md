# เนื้อหาบทเรียน Private Course 1 วัน
# API Integration for Web & Mobile App

> สำหรับผู้เรียนที่มีพื้นฐาน Front-End, Back-End และ Database อยู่แล้ว  
> โฟกัสหลัก: เข้าใจการทำงานผ่าน API, ติดตั้งและ Debug App ที่ได้รับมา, และเชื่อมข้อมูลระหว่าง 2 ระบบผ่าน API

---

## 1. ภาพรวมคอร์ส

คอร์สนี้ออกแบบสำหรับผู้เรียนที่มีพื้นฐานการพัฒนา Web Application อยู่แล้ว และต้องการเข้าใจภาพรวมการทำงานจริงของระบบที่มี Front-End, Back-End, Database และ API เชื่อมต่อกัน รวมถึงการนำ API เดียวกันไปใช้ทั้งใน Web App และ Mobile App

เนื้อหาจะเน้นการอธิบายจาก Flow จริงมากกว่าทฤษฎีลึก โดยใช้ตัวอย่างระบบเล็ก ๆ คือ **Lead Integration Mini System** เพื่อให้เห็นครบตั้งแต่การส่งข้อมูลจากหน้าเว็บ เข้า API บันทึกลง Database และส่งต่อข้อมูลไปยังอีกระบบหนึ่ง เช่น Google Sheets, CRM, Webhook หรือระบบแจ้งเตือน

---

## 2. เป้าหมายหลังเรียนจบ

หลังเรียนจบ ผู้เรียนควรทำได้ดังนี้

1. อธิบาย Flow การทำงานระหว่าง Front-End, Back-End, API และ Database ได้
2. เข้าใจว่า Web App และ Mobile App สามารถเรียก API ชุดเดียวกันได้อย่างไร
3. ทดสอบ API ด้วย Postman หรือ Thunder Client ได้
4. อ่าน Request, Response, Status Code และ Error เบื้องต้นได้
5. เข้าใจวิธีติดตั้ง App ที่ได้รับมา เช่น Clone, Install, Setup `.env`, Run และ Test
6. ไล่เช็กปัญหาเมื่อ App ใช้งานไม่ได้อย่างเป็นระบบ
7. เข้าใจการ Interface Data ระหว่าง 2 ระบบผ่าน API
8. ทำ Data Mapping เบื้องต้นได้
9. เข้าใจ API Contract, Webhook, API Key และ Error Handling เบื้องต้น
10. Deploy และทดสอบ Production URL แบบพื้นฐานได้

---

## 3. โปรเจกต์ตัวอย่างที่ใช้สอน

## Lead Integration Mini System

ใช้ระบบรับ Lead เป็นตัวอย่าง เพราะเข้าใจง่ายและต่อยอดกับธุรกิจจริงได้

### Flow หลัก

```text
User
↓
Web Form / Mobile App
↓
Back-End API
↓
Database
↓
Dashboard / External System
```

### Use Case ตัวอย่าง

ผู้ใช้กรอกฟอร์มสนใจบริการทำเว็บไซต์ จากนั้นระบบจะทำงานดังนี้

1. Front-End ส่งข้อมูลผ่าน API
2. Back-End รับ Request
3. Back-End ตรวจข้อมูลเบื้องต้น
4. บันทึกข้อมูลลง Database
5. ส่ง Response กลับไปที่ Front-End
6. ส่งต่อข้อมูลไปยังระบบปลายทาง เช่น Google Sheets หรือ Webhook
7. ผู้ดูแลระบบเห็น Lead ใน Dashboard หรือได้รับแจ้งเตือน

### ข้อมูล Lead ตัวอย่าง

```json
{
  "name": "สมชาย ใจดี",
  "phone": "0890000000",
  "interest": "Website",
  "source": "Landing Page"
}
```

### API Endpoint ตัวอย่าง

```text
GET    /api/leads        ดึงรายการ Lead ทั้งหมด
POST   /api/leads        สร้าง Lead ใหม่
PATCH  /api/leads/:id    แก้ไขสถานะ Lead
```

---

# ตารางเรียน 1 วัน

## 10:00 - 10:30
## Session 1: API Integration Overview

### เป้าหมายของ Session

ให้ผู้เรียนเห็นภาพรวมของระบบที่มีหลายส่วนทำงานร่วมกัน และเข้าใจว่า API เป็นตัวกลางระหว่าง Front-End, Back-End, Database และระบบภายนอก

### เนื้อหาที่สอน

- Front-End ทำหน้าที่แสดงผลและรับ Input จากผู้ใช้
- Back-End ทำหน้าที่รับ Request, ประมวลผล, ตรวจข้อมูล และคุยกับ Database
- Database ทำหน้าที่เก็บข้อมูล
- API ทำหน้าที่เป็นช่องทางสื่อสารระหว่างระบบ
- Web App และ Mobile App สามารถเรียก API ชุดเดียวกันได้
- External System เช่น CRM, Google Sheets, LINE, ERP หรือระบบอื่น ๆ สามารถเชื่อมผ่าน API ได้

### Flow ที่ใช้สอน

```text
Web App / Mobile App
↓
API Endpoint
↓
Back-End Logic
↓
Database
↓
Response กลับไปที่ Client
```

### Flow การเชื่อมระบบภายนอก

```text
System A: Lead Form
↓
Back-End API
↓
System B: Google Sheets / CRM / Webhook / Notification
```

### Key Concept ที่ต้องย้ำ

API ไม่ใช่แค่ URL สำหรับดึงข้อมูล แต่เป็น “ข้อตกลงกลาง” ว่าระบบต้นทางจะส่งข้อมูลอะไรไป ระบบปลายทางต้องการข้อมูลแบบไหน และเมื่อทำงานสำเร็จหรือผิดพลาดจะตอบกลับอย่างไร

---

## 10:30 - 11:15
## Session 2: Request / Response และการทดสอบ API

### เป้าหมายของ Session

ให้ผู้เรียนสามารถทดสอบ API แยกจาก Front-End ได้ เพื่อแยกปัญหาให้ออกว่า API เสียจริง หรือ Front-End เรียก API ผิด

### เนื้อหาที่สอน

### 1. Endpoint

Endpoint คือ URL ของ API ที่ระบบอื่นสามารถเรียกใช้งานได้ เช่น

```text
GET /api/leads
POST /api/leads
PATCH /api/leads/:id
```

### 2. HTTP Method

```text
GET     ใช้ดึงข้อมูล
POST    ใช้สร้างข้อมูลใหม่
PATCH   ใช้แก้ไขข้อมูลบางส่วน
PUT     ใช้แก้ไขข้อมูลทั้งก้อน
DELETE  ใช้ลบข้อมูล
```

### 3. Request Body

ข้อมูลที่ Client ส่งไปให้ API เช่น

```json
{
  "name": "สมชาย ใจดี",
  "phone": "0890000000",
  "interest": "Website"
}
```

### 4. Response Body

ข้อมูลที่ API ส่งกลับมา เช่น

```json
{
  "success": true,
  "message": "Lead created successfully",
  "data": {
    "id": 1,
    "name": "สมชาย ใจดี",
    "phone": "0890000000",
    "interest": "Website"
  }
}
```

### 5. Status Code ที่ควรรู้

```text
200 OK                 สำเร็จ
201 Created            สร้างข้อมูลสำเร็จ
400 Bad Request        ส่งข้อมูลผิดหรือไม่ครบ
401 Unauthorized       ไม่มีสิทธิ์ / Token ผิด
403 Forbidden          ไม่มี Permission
404 Not Found          ไม่พบ Endpoint หรือข้อมูล
500 Internal Error     Server มีปัญหา
```

---

## Workshop 1: Test API ด้วย Postman / Thunder Client

### สิ่งที่ให้ผู้เรียนทำ

1. ยิง `GET /api/leads`
2. ยิง `POST /api/leads`
3. ใส่ Body แบบ JSON
4. ใส่ Header `Content-Type: application/json`
5. อ่าน Response ที่ได้กลับมา
6. ดู Status Code
7. ทดลองส่งข้อมูลผิด เช่น ไม่ใส่ name หรือ phone
8. ดูว่า API ตอบ Error อย่างไร

### Checklist ก่อนสรุป Workshop

```text
API URL ถูกไหม
Method ถูกไหม
Header ครบไหม
Body เป็น JSON ถูก Format ไหม
Status Code คืออะไร
Response Message บอกอะไร
Error เกิดจาก Client หรือ Server
```

### สิ่งที่ผู้เรียนควรเข้าใจ

ถ้าทดสอบ API ผ่าน Postman แล้วใช้งานได้ แต่หน้าเว็บยัง Error แปลว่าปัญหาอาจอยู่ที่ Front-End เช่น URL ผิด, Body ผิด, Header ผิด หรือการจัดการ Response ผิด

---

## 11:15 - 12:00
## Session 3: Web App เรียก API

### เป้าหมายของ Session

ให้ผู้เรียนเห็นภาพการทำงานจริงเมื่อ Front-End เรียก API ผ่าน Form และ Dashboard

### ตัวอย่างหน้าที่ใช้สอน

1. Lead Form สำหรับกรอกข้อมูลลูกค้า
2. Lead Dashboard สำหรับแสดงรายการ Lead

### Flow การส่งข้อมูลจาก Web Form

```text
User กรอก Form
↓
กด Submit
↓
Front-End สร้าง Request Body
↓
เรียก POST /api/leads
↓
Back-End บันทึกข้อมูล
↓
Front-End แสดง Success หรือ Error
```

### ตัวอย่างข้อมูลที่ Web App ส่งไป

```json
{
  "name": "สมชาย ใจดี",
  "phone": "0890000000",
  "interest": "Website",
  "source": "Web Form"
}
```

### สิ่งที่ควรสอนใน Code

- การแยก API function ออกจาก UI
- การใช้ `fetch` หรือ axios
- การส่ง Header
- การส่ง Body แบบ JSON
- การจัดการ Loading State
- การจัดการ Success State
- การจัดการ Error State
- การ Reset Form หลัง Submit สำเร็จ
- การดึงข้อมูลมาแสดงใน Dashboard

### ตัวอย่างแนวคิดการแยกไฟล์

```text
components/LeadForm.tsx
components/LeadTable.tsx
lib/api.ts
app/page.tsx
```

### ตัวอย่าง API Function แบบ Concept

```ts
async function createLead(payload) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error('Create lead failed')
  }

  return response.json()
}
```

### จุดที่ควรย้ำ

อย่าเขียน API URL กระจายหลายจุดใน UI เพราะเมื่อเปลี่ยน URL หรือ Deploy แล้วจะแก้ยาก ควรแยกไว้ในไฟล์กลาง เช่น `lib/api.ts`

---

## 12:00 - 13:00
## พักกลางวัน

---

## 13:00 - 13:45
## Session 4: Mobile App เรียก API เดียวกัน

### เป้าหมายของ Session

ให้ผู้เรียนเข้าใจว่า Mobile App สามารถใช้ Back-End API ชุดเดียวกับ Web App ได้ แต่มีข้อควรระวังเรื่อง URL, localhost และ Environment

### Flow การทำงาน

```text
Mobile App
↓
API URL
↓
Back-End API
↓
Database
↓
Response กลับไปที่ Mobile App
```

### สิ่งที่เหมือน Web App

- เรียก API ด้วย HTTP Method
- ส่ง Body เป็น JSON
- รับ Response เป็น JSON
- ต้องจัดการ Loading / Error / Success
- ใช้ API Contract เดียวกัน

### สิ่งที่ต่างจาก Web App

- Mobile App ไม่มี Browser URL เหมือน Web
- การเรียก `localhost` จะมีปัญหาเมื่อทดสอบบนมือถือจริง
- ต้องใช้ IP เครื่องในวง LAN หรือ Production API URL
- ต้องจัดการ Permission / Network / Device Testing เพิ่ม

### ปัญหา localhost ที่ต้องอธิบาย

ใน Web App บนเครื่องคอมพิวเตอร์ อาจเรียกได้ว่า

```text
http://localhost:3000/api/leads
```

แต่ในมือถือจริง `localhost` หมายถึง “ตัวเครื่องมือถือเอง” ไม่ใช่เครื่องคอมพิวเตอร์ที่รัน API อยู่

ดังนั้น Mobile App จะเรียก API ในเครื่องคอมด้วย localhost ไม่ได้

### วิธีแก้

```text
1. ใช้ Local Network IP เช่น http://192.168.1.10:3000/api/leads
2. ให้มือถือและคอมอยู่ Wi-Fi เดียวกัน
3. เปิด Firewall ให้เรียกได้
4. หรือ Deploy API แล้วใช้ Production URL
```

### ตัวอย่าง Environment

```text
Development API URL:
http://192.168.1.10:3000/api

Production API URL:
https://your-app.vercel.app/api
```

### จุดที่ควรย้ำ

Web App และ Mobile App ต่างกันที่ UI และ Runtime แต่สามารถใช้ API Contract เดียวกันได้ ถ้าออกแบบ API ดีตั้งแต่แรก

---

## 13:45 - 14:30
## Session 5: Installation & Run Project

### เป้าหมายของ Session

ให้ผู้เรียนรู้ลำดับการติดตั้งและรันโปรเจกต์ที่ได้รับมา เพื่อให้สามารถเปิดใช้งาน แก้ไข และทดสอบเองได้

---

# ขั้นตอนเมื่อลูกค้าได้รับ App มา

## Step 1: อ่าน README ก่อน

ไฟล์ README ควรบอกว่า

- โปรเจกต์นี้คืออะไร
- ใช้ Tech Stack อะไร
- ต้องติดตั้งอะไรบ้าง
- ต้องสร้างไฟล์ `.env` อะไรบ้าง
- รันคำสั่งอะไร
- API Endpoint มีอะไร
- วิธี Deploy ทำอย่างไร

## Step 2: Clone หรือแตกไฟล์โปรเจกต์

```bash
git clone <repository-url>
cd <project-folder>
```

หรือถ้าได้รับเป็น `.zip`

```text
แตกไฟล์
↓
เปิด Folder ใน VS Code
```

## Step 3: เช็ก package.json

ดูคำสั่งที่ใช้รันโปรเจกต์ เช่น

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

## Step 4: ติดตั้ง Dependencies

```bash
npm install
```

หรือถ้าใช้ package manager อื่น

```bash
pnpm install
yarn install
```

## Step 5: ตั้งค่า Environment Variables

ดูไฟล์ตัวอย่าง เช่น

```text
.env.example
```

แล้วสร้างไฟล์จริง เช่น

```text
.env
.env.local
```

ตัวอย่างค่าใน `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your_database_url
API_SECRET_KEY=your_secret_key
```

## Step 6: Run Web App

```bash
npm run dev
```

แล้วเปิด

```text
http://localhost:3000
```

## Step 7: Run Mobile App ด้วย Expo

```bash
npm install
npx expo start
```

จากนั้นเลือกทดสอบผ่าน

```text
Expo Go
Simulator
Android Emulator
iOS Simulator
```

## Step 8: ทดสอบ API แยก

ก่อนสรุปว่า App ใช้งานได้ ต้องทดสอบ API ผ่าน Postman หรือ Thunder Client ด้วย

```text
GET /api/leads
POST /api/leads
```

## Step 9: ทดสอบ Database

เช็กว่า

```text
ข้อมูลถูกบันทึกจริงไหม
Table ถูกไหม
Field ครบไหม
Permission ถูกไหม
API Key ถูกไหม
```

---

## 14:30 - 15:15
## Session 6: Debug App แบบเป็นระบบ

### เป้าหมายของ Session

ให้ผู้เรียนมีวิธีไล่ปัญหาเองเมื่อ App ใช้งานไม่ได้ โดยไม่ต้องเดาสุ่ม

---

# วิธีคิดเวลาเจอ Error

อย่าเริ่มจาก “แก้ยังไง” ทันที ให้เริ่มจาก “Error เกิดตรงไหน” ก่อน

## 1. Error เกิดช่วงไหน

```text
Install: npm install ไม่ผ่าน
Run: npm run dev แล้ว Error
Build: npm run build ไม่ผ่าน
Runtime: เปิดเว็บแล้ว Error
API: เรียก API แล้ว Error
Database: บันทึกข้อมูลไม่ได้
Integration: ส่งข้อมูลไปอีกระบบไม่ได้
```

## 2. Error อยู่ฝั่งไหน

```text
Front-End
Back-End
API Route
Database
External System
Environment / Config
Network / CORS
Deploy / Production
```

## 3. Checklist ไล่ปัญหา

```text
API Server รันอยู่ไหม
URL API ถูกไหม
Method ถูกไหม
Body ถูก Format ไหม
Header ครบไหม
Token / API Key ถูกไหม
.env มีค่าครบไหม
Database เชื่อมได้ไหม
Table / Field ถูกไหม
External API ใช้งานได้ไหม
Log บอก Error อะไร
```

---

# Error ที่พบบ่อยและวิธีคิด

## npm install ไม่ผ่าน

สิ่งที่ควรเช็ก

```text
Node version ถูกไหม
package-lock เสียไหม
dependency conflict ไหม
ใช้ npm / yarn / pnpm ตรงกับโปรเจกต์ไหม
```

## Port ถูกใช้งานอยู่

อาการ

```text
Port 3000 is already in use
```

แนวทางแก้

```text
ปิด process เก่า
เปลี่ยน port
restart terminal
```

## .env หาย

อาการ

```text
API URL undefined
Database connection failed
Invalid API key
```

แนวทางแก้

```text
ดู .env.example
สร้าง .env.local
ใส่ค่าครบ
restart dev server
```

## API 404

สิ่งที่ควรเช็ก

```text
Endpoint ถูกไหม
Path ถูกไหม
Method ถูกไหม
API route มีจริงไหม
Deploy URL ถูกไหม
```

## API 500

สิ่งที่ควรเช็ก

```text
ดู Log ฝั่ง Server
Database error ไหม
Request body ไม่ครบไหม
โค้ด backend throw error ไหม
```

## CORS Error

มักเกิดเมื่อ Front-End และ Back-End อยู่คนละ Domain แล้ว Server ไม่อนุญาตให้เรียก

สิ่งที่ควรเช็ก

```text
Server อนุญาต Origin หรือยัง
เรียก URL ถูก Environment ไหม
ใช้ Browser หรือ Mobile เรียก
```

## Mobile เรียก localhost ไม่ได้

สาเหตุ

```text
localhost บนมือถือคือเครื่องมือถือ ไม่ใช่เครื่องคอม
```

แนวทางแก้

```text
ใช้ Local IP
ใช้ ngrok
หรือใช้ Production URL
```

---

# Prompt ให้ AI ช่วย Debug

```text
ฉันกำลังรันโปรเจกต์แล้วเจอ Error

Context:
- โปรเจกต์เป็น: [Web App / Mobile App / API]
- Framework: [Next.js / Expo / Express / อื่น ๆ]
- สิ่งที่กำลังทำ: [เช่น npm run dev / submit form / call API]
- ไฟล์ที่เกี่ยวข้อง: [ชื่อไฟล์]

Error:
[วาง Error แบบเต็ม]

สิ่งที่ลองแก้แล้ว:
[เขียนสิ่งที่ลองทำ]

ช่วยวิเคราะห์ว่า Error นี้น่าจะเกิดจากอะไร
ขอวิธีแก้ทีละขั้นตอน
และช่วยบอกว่าควรเช็กไฟล์หรือค่า config ไหนก่อน
```

---

## 15:15 - 16:15
## Session 7: Interface Data ระหว่าง 2 ระบบผ่าน API

### เป้าหมายของ Session

ให้ผู้เรียนเข้าใจหลักการเชื่อมข้อมูลระหว่าง 2 ระบบ และเห็นตัวอย่างการทำ Data Mapping, API Contract, Webhook และ Error Handling

---

# Interface Data คืออะไร

การ Interface Data คือการทำให้ระบบหนึ่งส่งข้อมูลไปยังอีกระบบหนึ่งอย่างเป็นระบบ ผ่าน API, Webhook หรือ Integration Layer

ตัวอย่างง่าย ๆ

```text
System A: Web Form รับ Lead
↓
API
↓
System B: Google Sheets / CRM / LINE / ERP
```

---

# คำศัพท์สำคัญ

## Source System

ระบบต้นทางที่เป็นแหล่งกำเนิดข้อมูล เช่น Web Form, Mobile App, Order System

## Destination System

ระบบปลายทางที่รับข้อมูล เช่น CRM, Google Sheets, ERP, LINE Notification

## API Contract

ข้อตกลงว่าระบบต้นทางต้องส่งข้อมูลอะไรไป และระบบปลายทางจะตอบกลับอย่างไร

## Data Mapping

การจับคู่ Field ระหว่างระบบต้นทางและระบบปลายทาง

## Webhook

การส่งข้อมูลอัตโนมัติเมื่อเกิด Event เช่น มี Lead ใหม่ มี Order ใหม่ มีการชำระเงินสำเร็จ

## Authentication

การยืนยันสิทธิ์ เช่น API Key, Bearer Token, Secret Key

## Error Handling

วิธีจัดการเมื่อส่งข้อมูลไม่สำเร็จ

## Log

ประวัติการส่งข้อมูล ใช้ตรวจสอบย้อนหลังเวลา Integration มีปัญหา

---

# ตัวอย่าง Data Mapping

ระบบ A ส่งข้อมูลมาแบบนี้

```json
{
  "fullName": "สมชาย ใจดี",
  "tel": "0890000000",
  "serviceName": "Website"
}
```

ระบบ B ต้องการข้อมูลแบบนี้

```json
{
  "name": "สมชาย ใจดี",
  "phone": "0890000000",
  "interest": "Website"
}
```

ดังนั้นต้อง Mapping เป็น

```text
fullName     → name
tel          → phone
serviceName  → interest
```

---

# สิ่งที่ต้องเช็กก่อนเชื่อม 2 ระบบ

```text
ระบบต้นทางส่งข้อมูลอะไรมา
ระบบปลายทางต้องการข้อมูลอะไร
Field ไหนจำเป็น
Field ไหนไม่จำเป็น
ชื่อ Field ตรงกันไหม
Format ข้อมูลตรงกันไหม
วันที่ต้องเป็น Format อะไร
เบอร์โทรต้องมีขีดไหม
ถ้าข้อมูลว่างส่งได้ไหม
ถ้าส่งไม่สำเร็จจะ Retry ไหม
ต้องเก็บ Log ไหม
ต้องแจ้งเตือนใครไหม
```

---

# ตัวอย่าง Workshop: Lead Form → Google Sheets

## Flow

```text
Web Form
↓
Back-End API
↓
Database
↓
Google Sheets API / Webhook
↓
ข้อมูลเข้า Sheet
```

## ข้อมูลที่ส่ง

```json
{
  "name": "สมชาย ใจดี",
  "phone": "0890000000",
  "interest": "Website",
  "source": "Landing Page"
}
```

## สิ่งที่ให้ผู้เรียนทำ

1. ส่ง Lead ผ่าน Web Form
2. API รับข้อมูล
3. บันทึกข้อมูลลง Database
4. Transform ข้อมูลให้ตรงกับระบบปลายทาง
5. ส่งข้อมูลไป Google Sheets หรือ Webhook
6. ตรวจว่าข้อมูลเข้า Sheet จริงไหม
7. ทดลองส่งข้อมูลผิด
8. ดู Error และ Log

---

# ตัวอย่าง Workshop: Lead Form → LINE Notification

## Flow

```text
Web Form
↓
Back-End API
↓
Database
↓
Notification API / Webhook
↓
แจ้งเตือนทีมขาย
```

## Message ตัวอย่าง

```text
มี Lead ใหม่จากเว็บไซต์

ชื่อ: สมชาย ใจดี
เบอร์: 0890000000
สนใจ: Website
Source: Landing Page
```

## จุดที่ควรสอน

- ไม่ควรเรียก Notification API ตรงจาก Front-End ถ้ามี Secret Key
- ให้ Back-End เป็นตัวกลางในการส่ง Notification
- เก็บ Key ไว้ใน `.env`
- ถ้าส่งแจ้งเตือนไม่สำเร็จ ควรมี Log

---

# Authentication / API Key

การเชื่อม API จริงมักต้องมีการยืนยันสิทธิ์

### ตัวอย่าง Header

```text
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### สิ่งที่ควรย้ำ

```text
อย่าใส่ Secret Key ใน Front-End
อย่า Commit .env ขึ้น GitHub
แยก Public Key และ Secret Key ให้ชัด
ใช้ Environment Variables
ถ้า Key หลุดควร Reset Key ใหม่
```

---

# Error Handling สำหรับ Integration

เมื่อส่งข้อมูลไปอีกระบบไม่สำเร็จ ควรตอบคำถามเหล่านี้ให้ได้

```text
ส่งไม่สำเร็จเพราะอะไร
ปลายทางตอบ Status Code อะไร
ข้อมูลที่ส่งไปคืออะไร
ควร Retry ไหม
ควรแจ้งเตือนใครไหม
ควรเก็บ Log ไว้ที่ไหน
ข้อมูลต้นทางถูกบันทึกแล้วหรือยัง
ถ้าระบบ B ล่ม ระบบ A ควรทำงานต่อไหม
```

---

## 16:15 - 17:00
## Session 8: Deploy + Production Testing + Q&A

### เป้าหมายของ Session

ให้ผู้เรียนเข้าใจความต่างระหว่าง Local และ Production และรู้ว่าหลัง Deploy ต้องทดสอบอะไรบ้าง

---

# Local vs Production

## Local

```text
รันบนเครื่องตัวเอง
ใช้ localhost
เหมาะสำหรับพัฒนาและทดสอบเบื้องต้น
คนอื่นเข้าไม่ได้ถ้าไม่ได้เปิด Network
```

## Production

```text
รันบน Server จริง
มี URL จริง
Web App / Mobile App / External System เรียกใช้งานได้
ต้องตั้งค่า Environment Variables บน Server
```

---

# Deploy Flow แบบเร็ว

```text
Code ในเครื่อง
↓
Commit
↓
Push GitHub
↓
Vercel Deploy
↓
ได้ Production URL
↓
Test Web / API / Mobile / External Integration
```

---

# สิ่งที่ต้องตั้งค่าบน Production

```text
API URL
Database URL
API Key
Secret Key
Webhook URL
Allowed Origin / CORS
Environment Variables ทั้งหมด
```

---

# Production Testing Checklist

```text
URL เปิดได้ไหม
Web Form ส่งข้อมูลได้ไหม
API GET / POST ใช้งานได้ไหม
Database มีข้อมูลเข้าไหม
Mobile App เรียก Production URL ได้ไหม
External System ได้รับข้อมูลไหม
Webhook ทำงานไหม
API Key ถูกไหม
.env บน Vercel ตั้งครบไหม
Log มี Error หรือไม่
```

---

# เอกสารที่ควรมีหลังส่งมอบ App

เมื่อมีการส่งมอบ App หรือให้ลูกค้าเอาไปดูแลต่อ ควรมีเอกสารเหล่านี้

## 1. README.md

ควรมี

```text
Project Overview
Tech Stack
Installation
Environment Variables
Run Commands
API Endpoint
Database Schema
Deploy Guide
Common Errors
```

## 2. .env.example

ตัวอย่างค่า Environment ที่ต้องใช้

```env
NEXT_PUBLIC_API_URL=
DATABASE_URL=
API_SECRET_KEY=
WEBHOOK_URL=
```

## 3. API Endpoint Sheet

ตัวอย่าง

```text
POST /api/leads
Body: name, phone, interest, source
Response: success, message, data

GET /api/leads
Response: success, data[]
```

## 4. Database Schema

```text
leads
- id
- name
- phone
- interest
- source
- status
- created_at
```

## 5. Debug Checklist

เอกสารรวมปัญหาที่พบบ่อยและวิธีไล่เช็ก

---

# สรุปภาพรวมทั้งวัน

สิ่งที่ผู้เรียนควรจำให้ได้

```text
Web App และ Mobile App เรียก API ชุดเดียวกันได้
API ต้องทดสอบแยกก่อนเสมอ
เวลา App มีปัญหา ต้องแยกให้ได้ว่าเสียที่ Front-End, Back-End, Database หรือ External System
การติดตั้ง App ต้องเริ่มจาก README, package.json, .env และคำสั่ง run
การ Interface Data ต้องดู Data Mapping, API Contract, Auth, Error Handling และ Log
Production URL ต้องทดสอบใหม่เสมอ เพราะบางอย่างที่ใช้ได้ใน Local อาจไม่ทำงานบน Server
```

---

# Final Checklist สำหรับผู้เรียน

## API

```text
เข้าใจ Endpoint / Method / Header / Body
ทดสอบ API ด้วย Postman ได้
อ่าน Status Code ได้
อ่าน Error เบื้องต้นได้
```

## Web App

```text
รู้ว่า Form ส่งข้อมูลไป API ยังไง
รู้ว่า Dashboard ดึงข้อมูลจาก API ยังไง
จัดการ Loading / Error ได้
```

## Mobile App

```text
เข้าใจว่า Mobile เรียก API เดียวกับ Web ได้
เข้าใจปัญหา localhost
รู้วิธีใช้ Local IP หรือ Production URL
```

## Installation

```text
Clone Project ได้
npm install ได้
ตั้งค่า .env ได้
Run Project ได้
ทดสอบ API และ Database ได้
```

## Debug

```text
รู้วิธีแยกปัญหา Front-End / Back-End / API / Database
รู้วิธีอ่าน Log
รู้วิธีใช้ AI ช่วย Debug ด้วย Context ที่ครบ
```

## Interface Data

```text
เข้าใจ Source / Destination System
ทำ Data Mapping ได้
เข้าใจ API Contract
เข้าใจ Webhook
เข้าใจ API Key และ Secret Key
รู้ว่าต้องมี Log และ Error Handling
```

## Deploy

```text
เข้าใจ Local vs Production
Deploy ผ่าน Vercel ได้
ตั้งค่า Environment Variables บน Production ได้
ทดสอบ Production URL ได้
```

---

# Appendix: Template สำหรับ README.md

```md
# Project Name

## Overview

อธิบายว่าโปรเจกต์นี้คืออะไร ใช้ทำอะไร และมีส่วนประกอบอะไรบ้าง

## Tech Stack

- Front-End:
- Back-End:
- Database:
- Mobile:
- Deploy:

## Installation

```bash
git clone <repo-url>
cd <project-folder>
npm install
```

## Environment Variables

สร้างไฟล์ `.env.local` และใส่ค่าต่อไปนี้

```env
NEXT_PUBLIC_API_URL=
DATABASE_URL=
API_SECRET_KEY=
WEBHOOK_URL=
```

## Run Development

```bash
npm run dev
```

## API Endpoints

```text
GET /api/leads
POST /api/leads
PATCH /api/leads/:id
```

## Database Schema

```text
leads
- id
- name
- phone
- interest
- source
- status
- created_at
```

## Deploy

อธิบายวิธี Deploy และค่าที่ต้องตั้งใน Production

## Common Errors

รวม Error ที่พบบ่อยและวิธีแก้
```

---

# Appendix: Prompt สำหรับให้ AI ช่วยอธิบายโปรเจกต์ที่ได้รับมา

```text
ฉันได้รับโปรเจกต์นี้มาและต้องการเข้าใจโครงสร้าง

นี่คือโครงสร้างไฟล์:
[วาง folder structure]

นี่คือ package.json:
[วาง package.json]

ช่วยอธิบายว่า:
1. โปรเจกต์นี้น่าจะเป็น App ประเภทไหน
2. คำสั่งสำหรับรันคืออะไร
3. ไฟล์สำคัญมีอะไรบ้าง
4. ต้องตั้งค่า .env อะไรบ้าง
5. API น่าจะอยู่ตรงไหน
6. ถ้าจะเริ่มแก้ไข ควรเริ่มจากไฟล์ไหน
```

---

# Appendix: Prompt สำหรับทำ API Contract

```text
ช่วยทำ API Contract สำหรับ Endpoint นี้

Endpoint: POST /api/leads
Purpose: ใช้สร้าง Lead ใหม่จาก Web Form หรือ Mobile App

ข้อมูลที่ต้องรับ:
- name
- phone
- interest
- source

ช่วยจัดทำเป็นเอกสาร API Contract ที่มี:
1. Endpoint
2. Method
3. Headers
4. Request Body
5. Required Fields
6. Example Request
7. Success Response
8. Error Response
9. Status Code
10. Notes สำหรับ Front-End และ Mobile App
```

---

# Appendix: Prompt สำหรับ Data Mapping

```text
ฉันต้องการเชื่อมข้อมูลจาก System A ไป System B

System A ส่งข้อมูลมาแบบนี้:
[วาง JSON จากระบบ A]

System B ต้องการข้อมูลแบบนี้:
[วาง JSON จากระบบ B]

ช่วยทำ Data Mapping ให้หน่อย โดยจัดเป็นตาราง:
- Field จาก System A
- Field ของ System B
- วิธีแปลงข้อมูลถ้ามี
- Required หรือ Optional
- สิ่งที่ต้องระวัง
```

---

# Appendix: Prompt สำหรับ Debug Integration

```text
ฉันกำลังเชื่อมข้อมูลระหว่าง 2 ระบบผ่าน API แล้วส่งไม่สำเร็จ

Source System:
Destination System:
Endpoint ที่เรียก:
Method:
Headers:
Request Body:
Status Code ที่ได้:
Response ที่ได้:
Error Log:
สิ่งที่ลองแก้แล้ว:

ช่วยวิเคราะห์ว่า Error น่าจะเกิดจากอะไร
และช่วยจัดลำดับวิธีตรวจทีละขั้นตอน
```
