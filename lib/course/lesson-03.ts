import type { Lesson } from './types'

const lesson03: Lesson = {
  title: 'Request / Response และการทดสอบ API',
  sections: [
    {
      title: 'Endpoint & HTTP Method',
      blocks: [
        {
          type: 'paragraph',
          text: 'เป้าหมายของบทนี้คือการทดสอบ API แยกจาก Front-End ให้ได้ เพื่อแยกปัญหาให้ออกว่า API มีปัญหาจริง หรือ Front-End เรียก API ผิดวิธี',
        },
        {
          type: 'heading',
          text: '1. Endpoint',
        },
        {
          type: 'paragraph',
          text: 'Endpoint คือ URL หรือ path ของ API ที่ระบบอื่นสามารถเรียกใช้งานได้ เช่น',
        },
        {
          type: 'code',
          lang: 'text',
          code: `GET /api/leads
POST /api/leads
PATCH /api/leads/:id`,
        },
        {
          type: 'heading',
          text: '2. HTTP Method',
        },
        {
          type: 'table',
          head: ['Method', 'การใช้งาน'],
          rows: [
            ['GET', 'ใช้ดึงข้อมูล'],
            ['POST', 'ใช้สร้างข้อมูลใหม่'],
            ['PATCH', 'ใช้แก้ไขข้อมูลบางส่วน'],
            ['PUT', 'ใช้แก้ไขข้อมูลทั้งก้อน'],
            ['DELETE', 'ใช้ลบข้อมูล'],
          ],
        },
      ],
    },
    {
      title: 'Request & Response Body',
      blocks: [
        {
          type: 'heading',
          text: '3. Request Body',
        },
        {
          type: 'paragraph',
          text: 'Request Body คือข้อมูลที่ Client ส่งไปให้ API เช่น',
        },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "name": "สมชาย ใจดี",
  "phone": "0890000000",
  "interest": "Website"
}`,
        },
        {
          type: 'heading',
          text: '4. Response Body',
        },
        {
          type: 'paragraph',
          text: 'Response Body คือข้อมูลที่ API ส่งกลับมาหลังประมวลผล เช่น',
        },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "success": true,
  "message": "Lead created successfully",
  "data": {
    "id": 1,
    "name": "สมชาย ใจดี",
    "phone": "0890000000",
    "interest": "Website"
  }
}`,
        },
      ],
    },
    {
      title: 'Status Code',
      blocks: [
        {
          type: 'heading',
          text: '5. Status Code ที่ควรรู้',
        },
        {
          type: 'table',
          head: ['Status Code', 'ความหมาย'],
          rows: [
            ['200 OK', 'สำเร็จ'],
            ['201 Created', 'สร้างข้อมูลสำเร็จ'],
            ['400 Bad Request', 'ส่งข้อมูลผิดหรือไม่ครบ'],
            ['401 Unauthorized', 'ไม่มีสิทธิ์ / Token ผิด'],
            ['403 Forbidden', 'ไม่มี Permission'],
            ['404 Not Found', 'ไม่พบ Endpoint หรือข้อมูล'],
            ['500 Internal Error', 'Server มีปัญหา'],
          ],
        },
      ],
    },
    {
      title: 'Workshop 1: ทดสอบ API ด้วย Postman / Thunder Client',
      blocks: [
        {
          type: 'heading',
          text: 'สิ่งที่ต้องทำใน Workshop',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'เรียก `GET /api/leads`',
            'เรียก `POST /api/leads`',
            'ใส่ Body แบบ JSON',
            'ใส่ Header `Content-Type: application/json`',
            'อ่าน Response ที่ได้กลับมา',
            'ดู Status Code',
            'ทดลองส่งข้อมูลผิด เช่น ไม่ใส่ name หรือ phone',
            'ดูว่า API ตอบ Error อย่างไร',
          ],
        },
        {
          type: 'heading',
          text: 'Checklist ก่อนสรุป Workshop',
        },
        {
          type: 'checklist',
          items: [
            'API URL ถูกไหม',
            'Method ถูกไหม',
            'Header ครบไหม',
            'Body เป็น JSON ที่ถูกต้องไหม',
            'Status Code คืออะไร',
            'Response Message บอกอะไร',
            'Error เกิดจาก Client หรือ Server',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'สิ่งที่ผู้เรียนควรเข้าใจ',
          text: 'ถ้าทดสอบ API ผ่าน Postman แล้วใช้งานได้ แต่หน้าเว็บยัง Error แสดงว่าปัญหาอาจอยู่ที่ Front-End เช่น URL ผิด, Body ผิด, Header ไม่ครบ หรือจัดการ Response ไม่ถูกต้อง',
        },
      ],
    },
  ],
}

export default lesson03
