import type { Lesson } from './types'

const lesson02: Lesson = {
  title: 'API Integration Overview',
  sections: [
    {
      title: 'ภาพรวม & เป้าหมาย',
      blocks: [
        {
          type: 'paragraph',
          text: 'ให้ผู้เรียนเห็นภาพรวมของระบบที่มีหลายส่วนทำงานร่วมกัน และเข้าใจว่า API เป็นตัวกลางระหว่าง Front-End, Back-End, Database และระบบภายนอก',
        },
      ],
    },
    {
      title: 'เนื้อหา & Flow การทำงาน',
      blocks: [
        {
          type: 'list',
          items: [
            'Front-End ทำหน้าที่แสดงผลและรับ Input จากผู้ใช้',
            'Back-End ทำหน้าที่รับ Request, ประมวลผล, ตรวจข้อมูล และคุยกับ Database',
            'Database ทำหน้าที่เก็บข้อมูล',
            'API ทำหน้าที่เป็นช่องทางสื่อสารระหว่างระบบ',
            'Web App และ Mobile App สามารถเรียก API ชุดเดียวกันได้',
            'External System เช่น CRM, Google Sheets, LINE, ERP หรือระบบอื่น ๆ สามารถเชื่อมผ่าน API ได้',
          ],
        },
        {
          type: 'heading',
          text: 'Flow ที่ใช้สอน',
        },
        {
          type: 'flow',
          steps: [
            'Web App / Mobile App',
            'API Endpoint',
            'Back-End Logic',
            'Database',
            'Response กลับไปที่ Client',
          ],
        },
        {
          type: 'heading',
          text: 'Flow การเชื่อมระบบภายนอก',
        },
        {
          type: 'flow',
          steps: [
            'System A: Lead Form',
            'Back-End API',
            'System B: Google Sheets / CRM / Webhook / Notification',
          ],
        },
      ],
    },
    {
      title: 'Key Concept',
      blocks: [
        {
          type: 'callout',
          variant: 'key',
          text: 'API ไม่ใช่แค่ URL สำหรับดึงข้อมูล แต่เป็น "ข้อตกลงกลาง" ว่าระบบต้นทางจะส่งข้อมูลอะไรไป ระบบปลายทางต้องการข้อมูลแบบไหน และเมื่อทำงานสำเร็จหรือผิดพลาดจะตอบกลับอย่างไร',
        },
      ],
    },
  ],
}

export default lesson02
