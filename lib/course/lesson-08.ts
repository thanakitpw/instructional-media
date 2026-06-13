import type { Lesson } from './types'

const lesson08: Lesson = {
  title: 'Interface Data ระหว่าง 2 ระบบผ่าน API',
  sections: [
    {
      title: 'Interface Data & คำศัพท์',
      blocks: [
        {
          type: 'paragraph',
          text: 'ให้ผู้เรียนเข้าใจหลักการเชื่อมข้อมูลระหว่าง 2 ระบบ และเห็นตัวอย่างการทำ Data Mapping, API Contract, Webhook และ Error Handling',
        },
        {
          type: 'heading',
          text: 'Interface Data คืออะไร',
        },
        {
          type: 'paragraph',
          text: 'การ Interface Data คือการทำให้ระบบหนึ่งส่งข้อมูลไปยังอีกระบบหนึ่งอย่างเป็นระบบ ผ่าน API, Webhook หรือ Integration Layer',
        },
        {
          type: 'flow',
          steps: [
            'System A: Web Form รับ Lead',
            'API',
            'System B: Google Sheets / CRM / LINE / ERP',
          ],
        },
        {
          type: 'heading',
          text: 'คำศัพท์สำคัญ',
        },
        {
          type: 'definitions',
          items: [
            {
              term: 'Source System',
              desc: 'ระบบต้นทางที่เป็นแหล่งกำเนิดข้อมูล เช่น Web Form, Mobile App, Order System',
            },
            {
              term: 'Destination System',
              desc: 'ระบบปลายทางที่รับข้อมูล เช่น CRM, Google Sheets, ERP, LINE Notification',
            },
            {
              term: 'API Contract',
              desc: 'ข้อตกลงว่าระบบต้นทางต้องส่งข้อมูลอะไรไป และระบบปลายทางจะตอบกลับอย่างไร',
            },
            {
              term: 'Data Mapping',
              desc: 'การจับคู่ Field ระหว่างระบบต้นทางและระบบปลายทาง',
            },
            {
              term: 'Webhook',
              desc: 'การส่งข้อมูลอัตโนมัติเมื่อเกิด Event เช่น มี Lead ใหม่ มี Order ใหม่ มีการชำระเงินสำเร็จ',
            },
            {
              term: 'Authentication',
              desc: 'การยืนยันสิทธิ์ เช่น API Key, Bearer Token, Secret Key',
            },
            {
              term: 'Error Handling',
              desc: 'วิธีจัดการเมื่อส่งข้อมูลไม่สำเร็จ',
            },
            {
              term: 'Log',
              desc: 'ประวัติการส่งข้อมูล ใช้ตรวจสอบย้อนหลังเวลา Integration มีปัญหา',
            },
          ],
        },
      ],
    },
    {
      title: 'Data Mapping & สิ่งที่ต้องเช็ก',
      blocks: [
        {
          type: 'heading',
          text: 'ตัวอย่าง Data Mapping',
        },
        {
          type: 'paragraph',
          text: 'ระบบ A ส่งข้อมูลมาแบบนี้',
        },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "fullName": "สมชาย ใจดี",
  "tel": "0890000000",
  "serviceName": "Website"
}`,
        },
        {
          type: 'paragraph',
          text: 'ระบบ B ต้องการข้อมูลแบบนี้',
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
          type: 'paragraph',
          text: 'ดังนั้นต้อง Mapping เป็น',
        },
        {
          type: 'table',
          head: ['ระบบ A', 'ระบบ B'],
          rows: [
            ['fullName', 'name'],
            ['tel', 'phone'],
            ['serviceName', 'interest'],
          ],
        },
        {
          type: 'heading',
          text: 'สิ่งที่ต้องเช็กก่อนเชื่อม 2 ระบบ',
        },
        {
          type: 'checklist',
          items: [
            'ระบบต้นทางส่งข้อมูลอะไรมา',
            'ระบบปลายทางต้องการข้อมูลอะไร',
            'Field ไหนจำเป็น',
            'Field ไหนไม่จำเป็น',
            'ชื่อ Field ตรงกันไหม',
            'Format ข้อมูลตรงกันไหม',
            'วันที่ต้องเป็น Format อะไร',
            'เบอร์โทรต้องมีขีดไหม',
            'ถ้าข้อมูลว่างส่งได้ไหม',
            'ถ้าส่งไม่สำเร็จจะ Retry ไหม',
            'ต้องเก็บ Log ไหม',
            'ต้องแจ้งเตือนใครไหม',
          ],
        },
      ],
    },
    {
      title: 'Workshop: Lead Form → Google Sheets',
      blocks: [
        {
          type: 'flow',
          steps: [
            'Web Form',
            'Back-End API',
            'Database',
            'Google Sheets API / Webhook',
            'ข้อมูลเข้า Sheet',
          ],
        },
        {
          type: 'heading',
          text: 'ข้อมูลที่ส่ง',
        },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "name": "สมชาย ใจดี",
  "phone": "0890000000",
  "interest": "Website",
  "source": "Landing Page"
}`,
        },
        {
          type: 'heading',
          text: 'สิ่งที่ให้ผู้เรียนทำ',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'ส่ง Lead ผ่าน Web Form',
            'API รับข้อมูล',
            'บันทึกข้อมูลลง Database',
            'Transform ข้อมูลให้ตรงกับระบบปลายทาง',
            'ส่งข้อมูลไป Google Sheets หรือ Webhook',
            'ตรวจว่าข้อมูลเข้า Sheet จริงไหม',
            'ทดลองส่งข้อมูลผิด',
            'ดู Error และ Log',
          ],
        },
      ],
    },
    {
      title: 'Workshop: Lead Form → LINE Notification',
      blocks: [
        {
          type: 'flow',
          steps: [
            'Web Form',
            'Back-End API',
            'Database',
            'Notification API / Webhook',
            'แจ้งเตือนทีมขาย',
          ],
        },
        {
          type: 'heading',
          text: 'Message ตัวอย่าง',
        },
        {
          type: 'code',
          lang: 'text',
          code: `มี Lead ใหม่จากเว็บไซต์

ชื่อ: สมชาย ใจดี
เบอร์: 0890000000
สนใจ: Website
Source: Landing Page`,
        },
        {
          type: 'heading',
          text: 'จุดที่ควรสอน',
        },
        {
          type: 'list',
          items: [
            'ไม่ควรเรียก Notification API ตรงจาก Front-End ถ้ามี Secret Key',
            'ให้ Back-End เป็นตัวกลางในการส่ง Notification',
            'เก็บ Key ไว้ใน `.env`',
            'ถ้าส่งแจ้งเตือนไม่สำเร็จ ควรมี Log',
          ],
        },
      ],
    },
    {
      title: 'Authentication / API Key & Error Handling',
      blocks: [
        {
          type: 'heading',
          text: 'Authentication / API Key',
        },
        {
          type: 'paragraph',
          text: 'การเชื่อม API จริงมักต้องมีการยืนยันสิทธิ์',
        },
        {
          type: 'heading',
          text: 'ตัวอย่าง Header',
        },
        {
          type: 'code',
          lang: 'text',
          code: `Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`,
        },
        {
          type: 'heading',
          text: 'สิ่งที่ควรย้ำ',
        },
        {
          type: 'checklist',
          items: [
            'อย่าใส่ Secret Key ใน Front-End',
            'อย่า Commit .env ขึ้น GitHub',
            'แยก Public Key และ Secret Key ให้ชัด',
            'ใช้ Environment Variables',
            'ถ้า Key หลุดควร Reset Key ใหม่',
          ],
        },
        {
          type: 'heading',
          text: 'Error Handling สำหรับ Integration',
        },
        {
          type: 'paragraph',
          text: 'เมื่อส่งข้อมูลไปอีกระบบไม่สำเร็จ ควรตอบคำถามเหล่านี้ให้ได้',
        },
        {
          type: 'list',
          items: [
            'ส่งไม่สำเร็จเพราะอะไร',
            'ปลายทางตอบ Status Code อะไร',
            'ข้อมูลที่ส่งไปคืออะไร',
            'ควร Retry ไหม',
            'ควรแจ้งเตือนใครไหม',
            'ควรเก็บ Log ไว้ที่ไหน',
            'ข้อมูลต้นทางถูกบันทึกแล้วหรือยัง',
            'ถ้าระบบ B ล่ม ระบบ A ควรทำงานต่อไหม',
          ],
        },
      ],
    },
  ],
}

export default lesson08
