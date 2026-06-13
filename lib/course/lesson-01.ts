import type { Lesson } from './types'

const lesson01: Lesson = {
  title: 'บทนำ',
  sections: [
    {
      title: 'ภาพรวมคอร์ส',
      blocks: [
        {
          type: 'paragraph',
          text: 'คอร์สนี้ออกแบบสำหรับผู้เรียนที่มีพื้นฐานการพัฒนา Web Application อยู่แล้ว และต้องการเข้าใจภาพรวมการทำงานจริงของระบบที่มี Front-End, Back-End, Database และ API เชื่อมต่อกัน รวมถึงการนำ API เดียวกันไปใช้ทั้งใน Web App และ Mobile App',
        },
        {
          type: 'paragraph',
          text: 'เนื้อหาจะเน้นการอธิบายจาก Flow จริงมากกว่าทฤษฎีลึก โดยใช้ตัวอย่างระบบเล็ก ๆ คือ Lead Integration Mini System เพื่อให้เห็นครบตั้งแต่การส่งข้อมูลจากหน้าเว็บ เข้า API บันทึกลง Database และส่งต่อข้อมูลไปยังอีกระบบหนึ่ง เช่น Google Sheets, CRM, Webhook หรือระบบแจ้งเตือน',
        },
      ],
    },
    {
      title: 'เป้าหมายหลังเรียนจบ',
      blocks: [
        { type: 'paragraph', text: 'หลังเรียนจบ ผู้เรียนควรทำได้ดังนี้' },
        {
          type: 'list',
          ordered: true,
          items: [
            'อธิบาย Flow การทำงานระหว่าง Front-End, Back-End, API และ Database ได้',
            'เข้าใจว่า Web App และ Mobile App สามารถเรียก API ชุดเดียวกันได้อย่างไร',
            'ทดสอบ API ด้วย Postman หรือ Thunder Client ได้',
            'อ่าน Request, Response, Status Code และ Error เบื้องต้นได้',
            'เข้าใจวิธีติดตั้ง App ที่ได้รับมา เช่น Clone, Install, Setup .env, Run และ Test',
            'ไล่เช็กปัญหาเมื่อ App ใช้งานไม่ได้อย่างเป็นระบบ',
            'เข้าใจการ Interface Data ระหว่าง 2 ระบบผ่าน API',
            'ทำ Data Mapping เบื้องต้นได้',
            'เข้าใจ API Contract, Webhook, API Key และ Error Handling เบื้องต้น',
            'Deploy และทดสอบ Production URL แบบพื้นฐานได้',
          ],
        },
      ],
    },
    {
      title: 'โปรเจกต์ตัวอย่าง: Lead Integration Mini System',
      blocks: [
        {
          type: 'paragraph',
          text: 'ใช้ระบบรับ Lead เป็นตัวอย่าง เพราะเข้าใจง่ายและต่อยอดกับธุรกิจจริงได้',
        },
        { type: 'heading', text: 'Flow หลัก' },
        {
          type: 'flow',
          steps: [
            'User',
            'Web Form / Mobile App',
            'Back-End API',
            'Database',
            'Dashboard / External System',
          ],
        },
        { type: 'heading', text: 'Use Case ตัวอย่าง' },
        {
          type: 'paragraph',
          text: 'ผู้ใช้กรอกฟอร์มสนใจบริการทำเว็บไซต์ จากนั้นระบบจะทำงานดังนี้',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Front-End ส่งข้อมูลผ่าน API',
            'Back-End รับ Request',
            'Back-End ตรวจข้อมูลเบื้องต้น',
            'บันทึกข้อมูลลง Database',
            'ส่ง Response กลับไปที่ Front-End',
            'ส่งต่อข้อมูลไปยังระบบปลายทาง เช่น Google Sheets หรือ Webhook',
            'ผู้ดูแลระบบเห็น Lead ใน Dashboard หรือได้รับแจ้งเตือน',
          ],
        },
        { type: 'heading', text: 'ข้อมูล Lead ตัวอย่าง' },
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
        { type: 'heading', text: 'API Endpoint ตัวอย่าง' },
        {
          type: 'table',
          head: ['Method', 'Endpoint', 'คำอธิบาย'],
          rows: [
            ['GET', '/api/leads', 'ดึงรายการ Lead ทั้งหมด'],
            ['POST', '/api/leads', 'สร้าง Lead ใหม่'],
            ['PATCH', '/api/leads/:id', 'แก้ไขสถานะ Lead'],
          ],
        },
      ],
    },
  ],
}

export default lesson01
