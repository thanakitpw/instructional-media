import type { Lesson } from './types'

const lesson01: Lesson = {
  title: 'บทนำ',
  sections: [
    {
      title: 'ภาพรวมคอร์ส',
      blocks: [
        {
          type: 'paragraph',
          text: 'คอร์สนี้เหมาะสำหรับผู้เรียนที่มีพื้นฐานการพัฒนา Web Application อยู่แล้ว และต้องการเห็นภาพการทำงานจริงของระบบที่มี Front-End, Back-End, Database และ API เชื่อมต่อกัน รวมถึงการใช้ API ชุดเดียวกันกับทั้ง Web App และ Mobile App',
        },
        {
          type: 'paragraph',
          text: 'เนื้อหาจะเน้น Flow การทำงานจริงมากกว่าทฤษฎีเชิงลึก โดยใช้ระบบตัวอย่างชื่อ Lead Integration Mini System เพื่อให้เห็นตั้งแต่การส่งข้อมูลจากหน้าเว็บ เข้า API บันทึกลง Database และส่งต่อไปยังระบบอื่น เช่น Google Sheets, CRM, Webhook หรือระบบแจ้งเตือน',
        },
      ],
    },
    {
      title: 'เป้าหมายหลังเรียนจบ',
      blocks: [
        { type: 'paragraph', text: 'หลังเรียนจบ ผู้เรียนควรสามารถทำสิ่งต่อไปนี้ได้' },
        {
          type: 'list',
          ordered: true,
          items: [
            'อธิบาย Flow การทำงานระหว่าง Front-End, Back-End, API และ Database ได้อย่างเป็นลำดับ',
            'เข้าใจว่า Web App และ Mobile App สามารถเรียก API ชุดเดียวกันได้อย่างไร',
            'ทดสอบ API ด้วย Postman หรือ Thunder Client ได้',
            'อ่าน Request, Response, Status Code และ Error เบื้องต้นได้',
            'เข้าใจวิธีติดตั้ง App ที่ได้รับมา ตั้งแต่ Clone, Install, ตั้งค่า .env, Run ไปจนถึง Test',
            'ไล่เช็กปัญหาเมื่อ App ทำงานผิดปกติ โดยแยกสาเหตุทีละส่วน',
            'เข้าใจการ Interface Data ระหว่างสองระบบผ่าน API',
            'ทำ Data Mapping เบื้องต้นได้',
            'เข้าใจ API Contract, Webhook, API Key และ Error Handling เบื้องต้น',
            'Deploy และทดสอบ Production URL เบื้องต้นได้',
          ],
        },
      ],
    },
    {
      title: 'โปรเจกต์ตัวอย่าง: Lead Integration Mini System',
      blocks: [
        {
          type: 'paragraph',
          text: 'คอร์สนี้ใช้ระบบรับ Lead เป็นตัวอย่าง เพราะเห็นภาพง่ายและต่อยอดกับงานธุรกิจจริงได้',
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
