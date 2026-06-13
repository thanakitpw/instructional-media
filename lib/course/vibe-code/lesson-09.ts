import type { Lesson } from '../types'

const lesson09: Lesson = {
  title: 'Checklist รวมก่อนจบคอร์ส',
  sections: [
    {
      title: 'Checklist รวมก่อนจบคอร์ส',
      blocks: [
        { type: 'heading', text: 'Strategy Checklist' },
        {
          type: 'checklist',
          items: [
            'รู้ว่าเว็บทำเพื่ออะไร',
            'รู้ว่ากลุ่มเป้าหมายคือใคร',
            'มี CTA หลัก',
            'มีจุดขายชัดเจน',
            'มี Project Brief',
          ],
        },
        { type: 'heading', text: 'Design Checklist' },
        {
          type: 'checklist',
          items: [
            'มีโครง Section ชัดเจน',
            'Hero Section เข้าใจง่าย',
            'CTA เด่น',
            'สีและฟอนต์อ่านง่าย',
            'Responsive เบื้องต้น',
            'มี HTML Preview',
          ],
        },
        { type: 'heading', text: 'Development Checklist' },
        {
          type: 'checklist',
          items: [
            'มีโปรเจกต์ Next.js',
            'แยก Component ได้',
            'รันเว็บในเครื่องได้',
            'ใช้ AI ช่วยแก้โค้ดได้',
            'อ่าน Error เบื้องต้นได้',
            'ใช้ Git / GitHub ได้',
          ],
        },
        { type: 'heading', text: 'Deploy Checklist' },
        {
          type: 'checklist',
          items: [
            'Push ขึ้น GitHub แล้ว',
            'Deploy ผ่าน Vercel แล้ว',
            'เว็บเปิดออนไลน์ได้',
            'ปุ่มและลิงก์ใช้งานได้',
            'ฟอร์มทดสอบได้',
          ],
        },
        { type: 'heading', text: 'Tracking Checklist' },
        {
          type: 'checklist',
          items: [
            'รู้ว่า GA4 ใช้ทำอะไร',
            'รู้ว่า Google Tag ใช้ทำอะไร',
            'รู้ว่า Search Console ใช้ทำอะไร',
            'เข้าใจ Conversion / Key Event',
            'รู้ว่าควรวัดผลอะไร',
            'ใช้ PageSpeed Insights ตรวจเว็บได้',
          ],
        },
        { type: 'heading', text: 'Career / Business Checklist' },
        {
          type: 'checklist',
          items: [
            'ใช้เว็บเป็น Portfolio ได้',
            'ใช้เว็บเป็น Landing Page รับลูกค้าได้',
            'รู้แนวทางพัฒนาต่อ',
            'รู้ว่าถ้าจะรับงานควรนำเสนอผลงานอย่างไร',
          ],
        },
      ],
    },
  ],
}

export default lesson09
