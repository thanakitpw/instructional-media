# API Integration for Web & Mobile App

เอกสารแนะนำหัวข้อเรียนสำหรับผู้เรียนก่อนเข้าอบรม

## ภาพรวมคอร์ส

คอร์สนี้ออกแบบสำหรับผู้ที่มีพื้นฐานการพัฒนา Web Application อยู่แล้ว และต้องการเข้าใจการทำงานจริงของระบบที่มี Web App, Mobile App, API, Back-End, Database และระบบภายนอกเชื่อมต่อกัน

เนื้อหาจะใช้โปรเจกต์ตัวอย่างเดียวตลอดคอร์ส คือ **Lead Capture Web + Mobile Demo** เพื่อให้เห็นภาพตั้งแต่ผู้ใช้กรอกข้อมูลผ่านหน้าเว็บหรือแอพมือถือ ข้อมูลถูกส่งเข้า API บันทึกในระบบ แสดงผลบน Dashboard และส่งต่อไปยังระบบภายนอก เช่น Webhook หรือ Google Sheets

## ผู้เรียนควรมีพื้นฐานก่อนเรียน

- เข้าใจพื้นฐาน HTML, CSS และ JavaScript
- เคยใช้งาน React หรือ Next.js มาบ้าง
- เข้าใจพื้นฐานการทำงานของ Front-End และ Back-End
- เคยรันโปรเจกต์ด้วยคำสั่ง เช่น `npm install` และ `npm run dev`
- หากเคยใช้ Postman, Thunder Client หรือ Expo มาก่อน จะช่วยให้ตามเนื้อหาได้ง่ายขึ้น

## สิ่งที่จะได้เรียน

### 1. ภาพรวมระบบ Web, Mobile และ API

- Web App, Mobile App, API, Back-End และ Database ทำงานร่วมกันอย่างไร
- ทำไม Web App และ Mobile App จึงสามารถเรียก API ชุดเดียวกันได้
- API เป็นมากกว่า URL อย่างไร
- API Contract คืออะไร และทำไมต้องออกแบบให้ชัดเจน

### 2. Request, Response และ Status Code

- Endpoint และ HTTP Method เช่น `GET`, `POST`, `PATCH`
- Request Body และ Response Body
- Header ที่จำเป็น เช่น `Content-Type: application/json`
- Status Code ที่ควรรู้ เช่น `200`, `201`, `400`, `401`, `404`, `500`
- วิธีอ่าน Error เบื้องต้นจาก API

### 3. การทดสอบ API ด้วย Postman หรือ Thunder Client

- ทดสอบ API แยกจากหน้าเว็บ
- ส่ง `GET /api/leads`
- ส่ง `POST /api/leads`
- ทดลองส่งข้อมูลผิดเพื่อดู Error Response
- แยกปัญหาให้ออกว่า Error มาจาก Front-End หรือ API

### 4. Web App เรียก API

- สร้าง Flow การส่งข้อมูลจาก Lead Form
- ส่งข้อมูลจาก Web Form ไปที่ API
- แสดง Loading, Success และ Error State
- ดึงข้อมูลจาก API มาแสดงใน Lead Dashboard
- แยก API function ออกจาก UI เพื่อให้ดูแลโค้ดง่ายขึ้น

### 5. Mobile App เรียก API เดียวกัน

- Mobile App เรียก API ชุดเดียวกับ Web App ได้อย่างไร
- ความต่างระหว่างการเรียก API บน Web และ Mobile
- ปัญหา `localhost` เมื่อทดสอบบนมือถือจริง
- การใช้ Local Network IP หรือ Production URL
- การตั้งค่า API URL สำหรับ Development และ Production

### 6. Installation และการรันโปรเจกต์ที่ได้รับมา

- อ่าน README ก่อนเริ่มงาน
- Clone หรือแตกไฟล์โปรเจกต์
- ตรวจ `package.json`
- ติดตั้ง dependencies
- ตั้งค่า `.env` หรือ `.env.local`
- รัน Web App และ Mobile App
- ทดสอบ API และ Database หลังติดตั้ง

### 7. Debug App แบบเป็นระบบ

- วิธีคิดเมื่อเจอ Error
- แยกว่า Error เกิดช่วง Install, Run, Build, Runtime, API หรือ Database
- แยกปัญหาว่าอยู่ฝั่ง Front-End, Back-End, API, Database, Environment หรือ Network
- ปัญหาที่พบบ่อย เช่น `.env` หาย, API 404, API 500, CORS, Port ถูกใช้งานอยู่
- วิธีใช้ AI ช่วย Debug ด้วย context ที่ครบ

### 8. Interface Data ระหว่างสองระบบผ่าน API

- Source System และ Destination System คืออะไร
- Data Mapping คืออะไร
- API Contract สำหรับการเชื่อมข้อมูล
- Webhook คืออะไร
- API Key, Bearer Token และ Secret Key
- Error Handling และ Log สำหรับงาน Integration
- ข้อควรระวังเมื่อส่งข้อมูลไปยังระบบภายนอก

### 9. Deploy และ Production Testing

- ความต่างระหว่าง Local และ Production
- Deploy Web/API ขึ้น Production URL
- ตั้งค่า Environment Variables บน Production
- ทดสอบ Web Form, API, Mobile App และ External Integration หลัง Deploy
- เอกสารที่ควรมีหลังส่งมอบงาน เช่น README, `.env.example`, API Contract และ Debug Checklist

## Workshop ที่จะทำในคอร์ส

Workshop หลักคือ **Lead Capture Web + Mobile Demo**

ผู้เรียนจะได้เห็น Flow การทำงานจริงดังนี้:

```text
Web Lead Form
↓
POST /api/leads
↓
Back-End API
↓
Lead Storage
↓
Web Dashboard
↓
Mobile App เรียก API เดียวกัน
↓
Webhook หรือ Google Sheets
```

สิ่งที่จะได้ทำใน Workshop:

1. เปิดและรัน Web App ที่เตรียมไว้
2. ทดสอบ API ด้วย Postman หรือ Thunder Client
3. ส่ง Lead จาก Web Form เข้า API
4. ดู Lead ที่ถูกบันทึกบน Dashboard
5. เปิด Mobile App ที่เตรียมไว้
6. ตั้งค่า API URL ให้ Mobile App เรียก API เดียวกัน
7. ส่ง Lead จาก Mobile App
8. ตรวจว่าข้อมูลจาก Web และ Mobile เข้าระบบเดียวกัน
9. ส่งข้อมูลต่อไปยัง Webhook หรือ Google Sheets
10. ทดสอบระบบหลัง Deploy ด้วย Production URL

## สิ่งที่ผู้เรียนจะได้หลังจบคอร์ส

- เข้าใจภาพรวมการเชื่อมต่อ Web App, Mobile App และ API
- อ่านและทดสอบ API เบื้องต้นได้
- เข้าใจวิธีรับโปรเจกต์มารันและตรวจปัญหา
- แยกสาเหตุของ Error ได้เป็นระบบ
- เข้าใจการใช้ API เดียวกันกับทั้ง Web และ Mobile
- เข้าใจหลักการ Interface Data ระหว่างสองระบบ
- รู้ว่าหลัง Deploy ต้องทดสอบอะไรบ้าง
- มีแนวทางเขียน README, API Contract และ Debug Checklist สำหรับส่งมอบงาน

## สิ่งที่ควรเตรียมก่อนเรียน

- ติดตั้ง Node.js
- ติดตั้ง VS Code
- ติดตั้ง Git
- ติดตั้ง Postman หรือ Thunder Client
- ติดตั้ง Expo Go บนมือถือ หากต้องการทดสอบ Mobile App บนอุปกรณ์จริง
- เตรียมบัญชี GitHub
- หากต้องการทดลอง Deploy ควรมีบัญชี Vercel

## หมายเหตุ

คอร์สนี้เน้นความเข้าใจ Flow การทำงานจริงและการ Debug อย่างเป็นระบบ มากกว่าการเขียนแอพจากศูนย์ทั้งหมด ผู้เรียนจะได้ทำงานกับโปรเจกต์ตัวอย่างที่เตรียมไว้ เพื่อให้ใช้เวลาในคอร์สไปกับการเข้าใจ API Integration, การทดสอบ, การแก้ปัญหา และการเชื่อมข้อมูลระหว่างระบบให้มากที่สุด

