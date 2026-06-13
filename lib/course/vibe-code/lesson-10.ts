import type { Lesson } from '../types'

const lesson10: Lesson = {
  title: 'ใบงานสรุปของคุณ',
  sections: [
    {
      title: 'ใบงานสรุปของคุณ',
      blocks: [
        {
          type: 'paragraph',
          text: 'ใช้ใบงานนี้สรุปโปรเจกต์ของคุณ โดยกรอกข้อมูลในแต่ละเทมเพลตให้ครบถ้วน',
        },
        {
          type: 'heading',
          text: 'Project Brief',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ชื่อโปรเจกต์:
ประเภทเว็บไซต์:
เป้าหมายของเว็บไซต์:
กลุ่มเป้าหมาย:
Pain Point:
จุดขาย:
Offer:
CTA หลัก:
CTA รอง:
Mood & Tone:
สีและสไตล์:`,
        },
        {
          type: 'heading',
          text: 'Landing Page Section Plan',
        },
        {
          type: 'code',
          lang: 'text',
          code: `Hero:
Problem:
Solution:
Services:
Process:
Portfolio / Example:
Pricing / Offer:
FAQ:
Final CTA:`,
        },
        {
          type: 'heading',
          text: 'Final Submission',
        },
        {
          type: 'code',
          lang: 'text',
          code: `ชื่อโปรเจกต์:
GitHub Repository:
Vercel URL:
สิ่งที่ทำเสร็จแล้ว:
สิ่งที่จะพัฒนาต่อ:
Conversion ที่จะวัด:`,
        },
      ],
    },
  ],
}

export default lesson10
