# Spec: API Integration Playground

เว็บ Demo สำหรับสอน Concept การเชื่อมต่อ API ระหว่าง Web App, Mobile App, Back-End, Database และระบบภายนอก โดยไม่เน้นให้ผู้เรียนเขียนโค้ดเอง

## 1. เป้าหมายของเว็บ

สร้างเว็บ Interactive Demo สำหรับใช้สอนคอร์ส **API Integration for Web & Mobile App** ให้ผู้เรียนหรือลูกค้าเข้าใจว่า API Integration ทำงานอย่างไร ผ่านการกดปุ่ม ทดลองส่งข้อมูล ดู Request/Response และเห็น Flow การทำงานแบบเป็นขั้นตอน

เว็บนี้ไม่ใช่ระบบ Production จริง แต่เป็น **Training Playground** ที่จำลองระบบ Lead Capture และการเชื่อมต่อ API แบบครบ Flow

## 2. กลุ่มผู้ใช้

- เจ้าของธุรกิจหรือทีมงานที่ต้องคุยกับ Developer / Vendor / AI เพื่อทำระบบ
- ผู้เรียนที่มีพื้นฐาน Web App บ้าง แต่ไม่ต้องการลงลึก syntax โค้ด
- คนที่ต้องการเข้าใจว่า API, Request, Response, Database, Webhook และ Error Handling ทำงานร่วมกันอย่างไร

## 3. สิ่งที่เว็บต้องสอนให้เข้าใจ

ผู้ใช้ควรเข้าใจเรื่องต่อไปนี้หลังใช้งานเว็บ:

- API คือข้อตกลงระหว่างระบบ ไม่ใช่แค่ URL
- Web App และ Mobile App สามารถเรียก API ชุดเดียวกันได้
- Request Body คือข้อมูลที่ Client ส่งไปหา API
- Response Body คือข้อมูลที่ API ตอบกลับ
- Status Code ใช้บอกผลลัพธ์ของ Request
- Error เกิดได้หลายจุด เช่น Front-End, API, Database, External System
- การเชื่อมระบบภายนอกต้องมี Data Mapping, API Key, Log และ Error Handling

## 4. Concept หลักของ Demo

ใช้ระบบตัวอย่างชื่อ:

**Lead Capture Integration Demo**

ผู้ใช้กรอกข้อมูล Lead ผ่านหน้าเว็บ จากนั้นระบบจะแสดงให้เห็นว่าเกิดอะไรขึ้น:

```text
User กรอก Lead Form
↓
Front-End สร้าง Request Body
↓
เรียก POST /api/leads
↓
Back-End ตรวจข้อมูล
↓
บันทึก Lead ลง Storage
↓
ส่ง Response กลับ
↓
แสดง Lead บน Dashboard
↓
ส่งข้อมูลต่อไป External System เช่น Webhook / Google Sheets Mock
```

## 5. โครงสร้างหน้าเว็บ

เว็บควรเป็น Single Page App หรือ Dashboard-style App ที่มี navigation ด้านข้างหรือด้านบน

### เมนูหลัก

1. Overview
2. Lead Form Demo
3. API Test Panel
4. Request / Response Viewer
5. Flow Visualizer
6. Lead Dashboard
7. External Integration Demo
8. Error Scenario Lab
9. API Contract
10. Debug Checklist

## 6. รายละเอียดแต่ละหน้า

### 6.1 Overview

หน้าภาพรวม ใช้อธิบายว่าเว็บนี้จำลองอะไร

ต้องมี:

- Diagram แสดง Flow:

```text
Web App / Mobile App → API → Back-End → Database → Dashboard / External System
```

- คำอธิบายสั้น ๆ ของแต่ละส่วน:
  - Web App
  - Mobile App
  - API
  - Back-End
  - Database
  - External System

- กล่อง Key Concept:

```text
API คือข้อตกลงกลางว่าระบบหนึ่งจะส่งข้อมูลอะไร ไปที่ไหน ด้วยรูปแบบไหน และจะได้รับคำตอบกลับมาอย่างไร
```

### 6.2 Lead Form Demo

หน้าให้ผู้ใช้ทดลองกรอก Lead

Fields:

- Name
- Phone
- Interest
- Source

ค่า default:

```json
{
  "name": "สมชาย ใจดี",
  "phone": "0890000000",
  "interest": "Website",
  "source": "Landing Page"
}
```

ปุ่ม:

- Submit Lead
- Reset Form
- Fill Sample Data

เมื่อกด Submit:

1. แสดง Request Body ที่กำลังจะส่ง
2. Highlight step ใน Flow Visualizer
3. เรียก mock API `POST /api/leads`
4. แสดง Response
5. เพิ่มข้อมูลใน Lead Dashboard

### 6.3 API Test Panel

หน้าให้กดทดสอบ API โดยไม่ต้องใช้ Postman

ต้องมีปุ่ม:

- Test `GET /api/leads`
- Test `POST /api/leads`
- Test `PATCH /api/leads/:id`
- Test Missing Required Field
- Test Invalid API Key
- Test External Webhook

เมื่อกดแต่ละปุ่ม ต้องแสดง:

- Method
- Endpoint
- Headers
- Request Body
- Status Code
- Response Body
- คำอธิบายภาษาคนว่าเกิดอะไรขึ้น

ตัวอย่าง:

```text
คุณกำลังเรียก POST /api/leads เพื่อสร้าง Lead ใหม่
API ตรวจพบว่า phone หายไป จึงตอบกลับ 400 Bad Request
```

### 6.4 Request / Response Viewer

พื้นที่แสดง JSON แบบอ่านง่าย

แบ่งเป็น 2 panel:

- Request
- Response

ควรมี tabs หรือ labels:

- Headers
- Body
- Status
- Explanation

ตัวอย่าง Request:

```json
{
  "method": "POST",
  "endpoint": "/api/leads",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "name": "สมชาย ใจดี",
    "phone": "0890000000",
    "interest": "Website",
    "source": "Landing Page"
  }
}
```

ตัวอย่าง Response:

```json
{
  "success": true,
  "message": "Lead created successfully",
  "data": {
    "id": 1,
    "name": "สมชาย ใจดี",
    "phone": "0890000000",
    "interest": "Website",
    "source": "Landing Page",
    "status": "new"
  }
}
```

### 6.5 Flow Visualizer

หน้าแสดง Flow การทำงานแบบ interactive

Steps:

1. User Input
2. Front-End
3. API Endpoint
4. Back-End Validation
5. Storage / Database
6. Response
7. Dashboard
8. External System

Behavior:

- เมื่อผู้ใช้กด Submit หรือ Test API ให้ step ที่เกี่ยวข้องสว่างทีละจุด
- ถ้าเกิด Error ให้ step ที่ผิดพลาดเป็นสีแดง
- ถ้าสำเร็จให้ step เป็นสีเขียว
- มีข้อความอธิบายแต่ละ step ด้านข้าง

ตัวอย่างข้อความ:

```text
Step 3: API Endpoint
ระบบกำลังเรียก POST /api/leads ซึ่งเป็น endpoint สำหรับสร้าง Lead ใหม่
```

### 6.6 Lead Dashboard

หน้าแสดง Lead ที่ถูกสร้างจาก Demo

Columns:

- ID
- Name
- Phone
- Interest
- Source
- Status
- Created At

Actions:

- Refresh Leads
- Clear Demo Data
- Mark as Contacted
- View Raw JSON

Dashboard ควรแสดงให้เห็นว่าข้อมูลที่ส่งจาก Form หรือ API Test Panel ถูกบันทึกและนำกลับมาแสดงได้จริง

### 6.7 External Integration Demo

หน้าจำลองการส่งข้อมูลไปยังระบบภายนอก

External Systems:

- Webhook.site Mock
- Google Sheets Mock
- CRM Mock
- Notification Mock

ไม่จำเป็นต้องเชื่อม Google Sheets จริงในเวอร์ชันแรก สามารถ mock ได้ แต่ควรแสดง payload ที่จะส่งออกไป

ต้องมี:

- เลือกระบบปลายทาง
- ปุ่ม Send Lead to External System
- แสดง Data Mapping
- แสดง Outgoing Payload
- แสดง Response จากระบบปลายทางแบบ mock

ตัวอย่าง Data Mapping:

| Internal Field | External Field |
|---|---|
| name | full_name |
| phone | mobile_number |
| interest | service_interest |
| source | lead_source |

ตัวอย่าง Outgoing Payload:

```json
{
  "full_name": "สมชาย ใจดี",
  "mobile_number": "0890000000",
  "service_interest": "Website",
  "lead_source": "Landing Page"
}
```

### 6.8 Error Scenario Lab

หน้าสำหรับจำลอง Error ที่พบบ่อย

Scenarios:

1. Missing Required Field
2. Invalid JSON Body
3. Wrong HTTP Method
4. Invalid API Key
5. API Endpoint Not Found
6. Database Save Failed
7. External System Failed
8. Mobile App ใช้ localhost ผิด
9. CORS Error

แต่ละ scenario ต้องแสดง:

- อาการที่เห็น
- จุดที่ Error เกิด
- Status Code ที่มักเจอ
- Response ตัวอย่าง
- วิธีไล่เช็ก
- วิธีอธิบายให้ Developer หรือ AI เข้าใจ

ตัวอย่าง:

```text
Scenario: Missing Required Field

อาการ:
กด Submit แล้วระบบตอบกลับ Error

สาเหตุ:
Request Body ไม่มี phone ซึ่งเป็น required field

Status Code:
400 Bad Request

วิธีตรวจ:
ดู Request Body ว่าส่ง field ครบไหม
```

### 6.9 API Contract

หน้าแสดงเอกสาร API Contract ของ Demo

Endpoints:

#### GET /api/leads

Purpose:

ดึงรายการ Lead ทั้งหมด

Success Response:

```json
{
  "success": true,
  "data": []
}
```

#### POST /api/leads

Purpose:

สร้าง Lead ใหม่

Required Fields:

- name
- phone
- interest

Optional Fields:

- source

#### PATCH /api/leads/:id

Purpose:

แก้ไขสถานะ Lead

Request Body:

```json
{
  "status": "contacted"
}
```

### 6.10 Debug Checklist

หน้า checklist สำหรับไล่ปัญหา

แบ่งเป็นหมวด:

#### Client

- API URL ถูกไหม
- Method ถูกไหม
- Body ส่งครบไหม
- Header ครบไหม

#### API

- Endpoint มีจริงไหม
- Status Code คืออะไร
- Response Message บอกอะไร
- Validation ผ่านไหม

#### Database / Storage

- บันทึกข้อมูลได้ไหม
- Field ตรงไหม
- Permission ถูกไหม

#### External System

- API Key ถูกไหม
- Mapping ถูกไหม
- ปลายทางตอบกลับอะไร
- มี Log หรือไม่

#### Production

- ใช้ Production URL หรือยัง
- Environment Variables ครบไหม
- CORS ถูกตั้งค่าไหม

## 7. API Behavior ที่ต้องจำลอง

เว็บควรมี mock API หรือ simulated API behavior

### GET /api/leads

คืนรายการ Lead ทั้งหมด

### POST /api/leads

รับ Lead ใหม่

Validation:

- ถ้าไม่มี `name` ให้ตอบ 400
- ถ้าไม่มี `phone` ให้ตอบ 400
- ถ้าไม่มี `interest` ให้ตอบ 400

Success:

- สร้าง id
- เพิ่ม `status: "new"`
- เพิ่ม `createdAt`
- เก็บลง demo storage
- ตอบ 201

### PATCH /api/leads/:id

แก้ไข status ของ Lead

Validation:

- ถ้าไม่พบ id ให้ตอบ 404
- ถ้า status ไม่ถูกต้อง ให้ตอบ 400

Allowed status:

- new
- contacted
- qualified
- closed

## 8. Demo Storage

ใช้ storage แบบง่ายได้ เช่น:

- In-memory state
- LocalStorage
- Mock JSON

ไม่จำเป็นต้องใช้ Database จริงในเวอร์ชันแรก แต่ UI ควรเรียกว่า Storage / Database เพื่อใช้สอน concept ได้

ควรมีข้อมูลตัวอย่างเริ่มต้นอย่างน้อย 3 รายการ

## 9. Design Direction

เว็บควรดูเหมือนเครื่องมือสอนจริง ไม่ใช่ landing page

แนวทาง UI:

- Dashboard-style
- อ่านง่าย
- มี side navigation หรือ top navigation
- มี panel สำหรับ Request/Response ชัดเจน
- JSON viewer ควรอ่านง่าย
- Flow Visualizer ต้องเห็นลำดับการทำงานชัด
- ใช้สีสถานะ:
  - เขียว = success
  - แดง = error
  - เหลือง = warning
  - น้ำเงิน = active/current step

ไม่ควรทำ:

- ไม่ต้องมี hero ใหญ่
- ไม่ต้องมี marketing copy เยอะ
- ไม่ต้องทำ animation หนัก
- ไม่ต้องให้ผู้ใช้เขียนโค้ดเอง

## 10. Recommended Tech Stack

ถ้าสร้างด้วย Next.js:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Local state หรือ localStorage สำหรับ demo data
- API Route Handlers สำหรับ mock API

ถ้าต้องการทำเร็ว:

- ทำเป็น Single Page React App ก็ได้
- API สามารถจำลองใน client ได้ แต่ควรแสดงเหมือนมี endpoint จริง

## 11. Acceptance Criteria

เว็บถือว่าเสร็จเมื่อทำสิ่งต่อไปนี้ได้:

- ผู้ใช้กรอก Lead และกด Submit ได้
- ระบบแสดง Request Body ก่อนหรือหลังส่ง
- ระบบแสดง Response Body และ Status Code
- Lead ที่ส่งสำเร็จปรากฏใน Dashboard
- กดทดสอบ `GET /api/leads` ได้
- กดทดสอบ `POST /api/leads` ได้
- กดจำลอง Error อย่างน้อย 5 scenario ได้
- Flow Visualizer แสดง step success/error ได้
- External Integration Demo แสดง Data Mapping และ Outgoing Payload ได้
- API Contract อ่านได้ในหน้าเว็บ
- Debug Checklist ใช้ประกอบการสอนได้
- ไม่ต้องให้ผู้เรียนเขียนโค้ดเพื่อเข้าใจ demo

## 12. Suggested Teaching Flow

ใช้เว็บนี้สอนตามลำดับ:

1. เปิด Overview เพื่ออธิบายภาพรวมระบบ
2. ไปที่ Lead Form Demo แล้วกรอกข้อมูล
3. ให้ผู้เรียนดู Request Body
4. กด Submit แล้วดู Response
5. เปิด Flow Visualizer เพื่อดูว่าข้อมูลผ่าน step ไหนบ้าง
6. เปิด Dashboard เพื่อดูข้อมูลที่ถูกบันทึก
7. ไปที่ API Test Panel เพื่อทดสอบ `GET`, `POST` และ Error case
8. เปิด External Integration Demo เพื่ออธิบาย Data Mapping
9. เปิด Error Scenario Lab เพื่อสอน Debug
10. ปิดท้ายด้วย API Contract และ Debug Checklist

## 13. Future Enhancement

ถ้าต้องการต่อยอดภายหลัง:

- เพิ่ม Mobile App Mock Screen ในเว็บ เพื่อจำลองว่า Mobile App ส่ง Request แบบเดียวกัน
- เชื่อม Webhook.site จริง
- เชื่อม Google Sheets จริง
- Export API Contract เป็น Markdown
- Export Debug Report เป็นไฟล์
- เพิ่มโหมด Instructor ที่มีคำอธิบายสำหรับผู้สอน
- เพิ่มโหมด Learner ที่ซ่อนคำตอบบางส่วนให้ผู้เรียนลองวิเคราะห์

