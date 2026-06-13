import type { Lesson } from './types'

const lesson10: Lesson = {
  title: 'สรุป & Final Checklist',
  sections: [
    {
      title: 'สรุปภาพรวมทั้งวัน',
      blocks: [
        {
          type: 'paragraph',
          text: 'ประเด็นสำคัญที่ควรจำหลังเรียนจบ',
        },
        {
          type: 'list',
          items: [
            'Web App และ Mobile App เรียก API ชุดเดียวกันได้',
            'API ต้องทดสอบแยกก่อนเสมอ',
            'เวลา App มีปัญหา ต้องแยกให้ได้ว่าปัญหาอยู่ที่ Front-End, Back-End, Database หรือ External System',
            'การติดตั้ง App ต้องเริ่มจาก README, package.json, .env และคำสั่ง run',
            'การ Interface Data ต้องดู Data Mapping, API Contract, Auth, Error Handling และ Log',
            'Production URL ต้องทดสอบใหม่เสมอ เพราะบางอย่างที่ใช้ได้ใน Local อาจไม่ทำงานบน Server',
          ],
        },
      ],
    },
    {
      title: 'Final Checklist',
      blocks: [
        { type: 'heading', text: 'API' },
        {
          type: 'checklist',
          items: [
            'เข้าใจ Endpoint / Method / Header / Body',
            'ทดสอบ API ด้วย Postman ได้',
            'อ่าน Status Code ได้',
            'อ่าน Error เบื้องต้นได้',
          ],
        },
        { type: 'heading', text: 'Web App' },
        {
          type: 'checklist',
          items: [
            'อธิบายได้ว่า Form ส่งข้อมูลไป API อย่างไร',
            'อธิบายได้ว่า Dashboard ดึงข้อมูลจาก API อย่างไร',
            'จัดการ Loading / Error ได้',
          ],
        },
        { type: 'heading', text: 'Mobile App' },
        {
          type: 'checklist',
          items: [
            'เข้าใจว่า Mobile เรียก API เดียวกับ Web ได้',
            'เข้าใจปัญหา localhost',
            'รู้วิธีใช้ Local IP หรือ Production URL',
          ],
        },
        { type: 'heading', text: 'Installation' },
        {
          type: 'checklist',
          items: [
            'Clone Project ได้',
            'npm install ได้',
            'ตั้งค่า .env ได้',
            'รันโปรเจกต์ได้',
            'ทดสอบ API และ Database ได้',
          ],
        },
        { type: 'heading', text: 'Debug' },
        {
          type: 'checklist',
          items: [
            'รู้วิธีแยกปัญหา Front-End / Back-End / API / Database',
            'รู้วิธีอ่าน Log',
            'รู้วิธีใช้ AI ช่วย Debug ด้วย Context ที่ครบ',
          ],
        },
        { type: 'heading', text: 'Interface Data' },
        {
          type: 'checklist',
          items: [
            'เข้าใจ Source / Destination System',
            'ทำ Data Mapping ได้',
            'เข้าใจ API Contract',
            'เข้าใจ Webhook',
            'เข้าใจ API Key และ Secret Key',
            'รู้ว่าต้องมี Log และ Error Handling',
          ],
        },
        { type: 'heading', text: 'Deploy' },
        {
          type: 'checklist',
          items: [
            'เข้าใจ Local vs Production',
            'Deploy ผ่าน Vercel ได้',
            'ตั้งค่า Environment Variables บน Production ได้',
            'ทดสอบ Production URL ได้',
          ],
        },
      ],
    },
  ],
}

export default lesson10
