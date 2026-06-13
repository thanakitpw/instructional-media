import type { Lesson } from './types'

const lesson11: Lesson = {
  title: 'ภาคผนวก',
  sections: [
    {
      title: 'Template README.md',
      blocks: [
        {
          type: 'paragraph',
          text: 'Template สำหรับเขียน README.md ของโปรเจกต์ ควรครอบคลุมข้อมูลสำคัญตั้งแต่ภาพรวม, Tech Stack, การติดตั้ง, Environment Variables, การรัน, API Endpoints, Database Schema, การ Deploy และ Common Errors',
        },
        {
          type: 'code',
          lang: 'text',
          code: `# Project Name

## Overview

อธิบายว่าโปรเจกต์นี้คืออะไร ใช้ทำอะไร และมีส่วนประกอบอะไรบ้าง

## Tech Stack

- Front-End:
- Back-End:
- Database:
- Mobile:
- Deploy:

## Installation

\`\`\`bash
git clone <repo-url>
cd <project-folder>
npm install
\`\`\`

## Environment Variables

สร้างไฟล์ \`.env.local\` และใส่ค่าต่อไปนี้

\`\`\`env
NEXT_PUBLIC_API_URL=
DATABASE_URL=
API_SECRET_KEY=
WEBHOOK_URL=
\`\`\`

## Run Development

\`\`\`bash
npm run dev
\`\`\`

## API Endpoints

\`\`\`text
GET /api/leads
POST /api/leads
PATCH /api/leads/:id
\`\`\`

## Database Schema

\`\`\`text
leads
- id
- name
- phone
- interest
- source
- status
- created_at
\`\`\`

## Deploy

อธิบายวิธี Deploy และค่าที่ต้องตั้งใน Production

## Common Errors

รวม Error ที่พบบ่อยและวิธีแก้`,
        },
      ],
    },
    {
      title: 'Prompt: อธิบายโปรเจกต์ที่ได้รับมา',
      blocks: [
        {
          type: 'paragraph',
          text: 'Prompt นี้ใช้ให้ AI ช่วยอธิบายโปรเจกต์ที่ได้รับมา โดยวาง folder structure และ package.json เพื่อให้ AI วิเคราะห์ประเภท App, คำสั่งรัน, ไฟล์สำคัญ, การตั้งค่า .env และจุดเริ่มต้นการแก้ไข',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ฉันได้รับโปรเจกต์นี้มาและต้องการเข้าใจโครงสร้าง

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
6. ถ้าจะเริ่มแก้ไข ควรเริ่มจากไฟล์ไหน`,
        },
      ],
    },
    {
      title: 'Prompt: ทำ API Contract',
      blocks: [
        {
          type: 'paragraph',
          text: 'Prompt นี้ใช้ให้ AI ช่วยจัดทำเอกสาร API Contract ให้ครบถ้วน ครอบคลุม Endpoint, Method, Headers, Request Body, Required Fields, Example Request, Success/Error Response, Status Code และ Notes สำหรับ Front-End และ Mobile App',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ช่วยทำ API Contract สำหรับ Endpoint นี้

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
10. Notes สำหรับ Front-End และ Mobile App`,
        },
      ],
    },
    {
      title: 'Prompt: Data Mapping',
      blocks: [
        {
          type: 'paragraph',
          text: 'Prompt นี้ใช้ให้ AI ช่วยทำ Data Mapping ระหว่างสองระบบ โดยวาง JSON ของทั้ง System A และ System B เพื่อให้ AI จัดทำตารางแสดง Field mapping, วิธีแปลงข้อมูล, Required/Optional และสิ่งที่ต้องระวัง',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ฉันต้องการเชื่อมข้อมูลจาก System A ไป System B

System A ส่งข้อมูลมาแบบนี้:
[วาง JSON จากระบบ A]

System B ต้องการข้อมูลแบบนี้:
[วาง JSON จากระบบ B]

ช่วยทำ Data Mapping ให้หน่อย โดยจัดเป็นตาราง:
- Field จาก System A
- Field ของ System B
- วิธีแปลงข้อมูลถ้ามี
- Required หรือ Optional
- สิ่งที่ต้องระวัง`,
        },
      ],
    },
    {
      title: 'Prompt: Debug Integration',
      blocks: [
        {
          type: 'paragraph',
          text: 'Prompt นี้ใช้ให้ AI ช่วยวิเคราะห์และ Debug ปัญหาการเชื่อมต่อข้อมูลระหว่างสองระบบผ่าน API โดยให้ข้อมูลครบทั้ง Source/Destination System, Endpoint, Method, Headers, Request Body, Status Code, Response, Error Log และสิ่งที่ลองแก้แล้ว',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ฉันกำลังเชื่อมข้อมูลระหว่างสองระบบผ่าน API แล้วส่งไม่สำเร็จ

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
และช่วยจัดลำดับวิธีตรวจทีละขั้นตอน`,
        },
      ],
    },
  ],
}

export default lesson11
