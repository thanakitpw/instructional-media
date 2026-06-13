import type { Lesson } from '../types'

const lesson06: Lesson = {
  title: 'Current Stack & Tools',
  sections: [
    {
      title: 'Stack หลักของคอร์ส',
      blocks: [
        {
          type: 'paragraph',
          text: 'ในการทำงานจริงไม่ได้มีแค่เครื่องมือเดียวหรือ Stack เดียว คุณควรเข้าใจว่าแต่ละ Stack เหมาะกับงานแบบไหน และเลือกตามเป้าหมายของโปรเจกต์',
        },
        {
          type: 'paragraph',
          text: 'หลักจำง่าย:',
        },
        {
          type: 'callout',
          variant: 'key',
          text: 'Stack ที่ดีไม่ใช่ Stack ที่ใหม่ที่สุด แต่คือ Stack ที่ทำให้งานเสร็จจริง ดูแลต่อได้ และเหมาะกับขนาดโปรเจกต์',
        },
        {
          type: 'heading',
          text: 'Stack หลักของคอร์สนี้',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Next.js + TypeScript + Tailwind CSS + shadcn/ui + Supabase + Vercel + GitHub',
        },
        {
          type: 'paragraph',
          text: 'เหตุผล:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'เหมาะกับการทำเว็บจริงในเวลาจำกัด',
            'AI ช่วยเขียนและแก้โค้ด Stack นี้ได้ดี',
            'ต่อยอดได้ทั้ง Landing Page, Portfolio, Lead Form และ Web App',
            'Deploy ง่ายด้วย Vercel',
            'ถ้าต่อยอดเป็น Mobile App สามารถใช้ React Native + Expo ได้',
          ],
        },
      ],
    },
    {
      title: 'เครื่องมือที่ควรติดตั้ง',
      blocks: [
        {
          type: 'paragraph',
          text: 'จำเป็นสำหรับคอร์สหลัก:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Node.js LTS',
            'Git',
            'VS Code หรือ Cursor',
            'GitHub Account',
            'Vercel Account',
            'Supabase Account',
            'Postman หรือ Thunder Client',
            'AI Coding Tool อย่างน้อย 1 ตัว เช่น ChatGPT, Claude, Claude Code, Cursor หรือ Codex',
          ],
        },
        {
          type: 'heading',
          text: 'แนะนำเพิ่มเติม แต่ไม่บังคับ',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Figma',
            'Canva',
            'Expo Go สำหรับทดลอง Mobile App',
            'Flutter SDK ถ้าต้องการต่อยอด Flutter',
          ],
        },
      ],
    },
  ],
}

export default lesson06
