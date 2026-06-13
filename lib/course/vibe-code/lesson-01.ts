import type { Lesson } from '../types'

const lesson01: Lesson = {
  title: 'ภาพรวมคอร์ส',
  sections: [
    {
      title: 'ภาพรวมคอร์ส',
      blocks: [
        {
          type: 'paragraph',
          text: 'คอร์สนี้ออกแบบให้คุณได้ทำเว็บไซต์ของตัวเอง 1 โปรเจกต์ ตั้งแต่ต้นจนจบ โดยใช้ AI เป็นผู้ช่วยในแต่ละขั้นตอน',
        },
        {
          type: 'paragraph',
          text: 'สิ่งสำคัญคือคุณไม่ได้ใช้ AI เพื่อให้มัน “ทำทุกอย่างแทน” แต่ใช้ AI เพื่อช่วยคิด ช่วยจัดระบบ ช่วยเขียนโค้ด ช่วยตรวจ และช่วยแก้ปัญหา โดยคุณยังเป็นคนตัดสินใจว่าเว็บไซต์ควรตอบโจทย์ใคร ต้องการสื่อสารอะไร และควรพาผู้ใช้ไปทำ Action อะไร',
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'แนวคิดหลักของคอร์ส',
          text: 'เริ่มจากโจทย์ให้ชัดก่อน แล้วค่อยใช้ AI ช่วยออกแบบ เขียนโค้ด แก้บั๊ก Deploy และวัดผล',
        },
      ],
    },
    {
      title: 'สิ่งที่คุณจะทำได้หลังเรียนจบ',
      blocks: [
        { type: 'paragraph', text: 'หลังเรียนจบ คุณควรสามารถ:' },
        {
          type: 'list',
          ordered: true,
          items: [
            'เข้าใจ Workflow การสร้างเว็บไซต์ยุค AI ตั้งแต่ต้นจนจบ',
            'เขียน Project Brief ให้ AI เข้าใจโจทย์ได้ชัดเจน',
            'วางโครงสร้างหน้าเว็บ เช่น Sitemap, Section, User Flow และ CTA',
            'ใช้ AI ช่วยคิด Copywriting, UX Writing และ Section ของเว็บ',
            'สร้าง HTML Preview เพื่อดูตัวอย่างหน้าเว็บก่อนทำเว็บจริง',
            'แปลง HTML Preview เป็นโปรเจกต์ Next.js',
            'แยกหน้าเว็บออกเป็น Component เช่น Navbar, Hero, Pricing, FAQ, Footer',
            'ใช้ AI ช่วยแก้ข้อความ รูป สี Layout และ Responsive',
            'ใช้ Git และ GitHub เบื้องต้นสำหรับเก็บโปรเจกต์',
            'Deploy เว็บไซต์ขึ้นออนไลน์ด้วย Vercel',
            'ทำ Contact Form หรือ Lead Form เบื้องต้น',
            'เข้าใจการวัดผลด้วย GA4, Google Tag และ Search Console ในระดับเริ่มต้น',
            'รู้จัก Conversion และ Key Event ที่ควรวัดบน Landing Page',
            'ใช้เว็บไซต์ที่ทำเสร็จเป็น Portfolio หรือ Landing Page สำหรับธุรกิจได้',
          ],
        },
      ],
    },
    {
      title: 'Workflow หลักของคอร์ส',
      blocks: [
        {
          type: 'flow',
          steps: [
            'Idea',
            'Project Brief',
            'Sitemap / Section / User Flow',
            'UX/UI Direction',
            'HTML Preview',
            'Next.js Project',
            'GitHub',
            'Deploy with Vercel',
            'Tracking',
            'Portfolio / Real Use',
          ],
        },
      ],
    },
    {
      title: 'ผลลัพธ์ที่คุณควรมีหลังจบคอร์ส',
      blocks: [
        {
          type: 'list',
          items: [
            'Project Brief ของเว็บไซต์ตัวเอง',
            'โครง Section ของ Landing Page',
            'HTML Preview 1 หน้า',
            'โปรเจกต์ Next.js',
            'Component หลักของเว็บไซต์',
            'GitHub Repository',
            'เว็บไซต์ออนไลน์บน Vercel',
            'Contact Form หรือ Lead Form เบื้องต้น',
            'Tracking Checklist',
            'Roadmap การต่อยอดเว็บไซต์',
          ],
        },
      ],
    },
  ],
}

export default lesson01
