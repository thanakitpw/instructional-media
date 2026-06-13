import type { Lesson } from '../types'

const lesson07: Lesson = {
  title: 'AI Coding Skills & Context Management',
  sections: [
    {
      title: 'Skill คืออะไร',
      blocks: [
        {
          type: 'paragraph',
          text: 'การใช้ AI ทำเว็บให้ได้ผลไม่ได้อยู่ที่ Prompt เดียว แต่อยู่ที่ Workflow ที่ทำซ้ำได้',
        },
        {
          type: 'paragraph',
          text: 'คุณควรรู้วิธีแบ่งงานให้เล็กลง ใช้ชุดคำสั่งเฉพาะทาง และจัดการ Context ไม่ให้ AI อ่านข้อมูลเกินจำเป็น',
        },
        {
          type: 'paragraph',
          text: 'ในบริบทของ AI Coding คำว่า Skill หมายถึงชุดคำสั่ง Workflow หรือ Checklist ที่ทำซ้ำได้ เพื่อให้ AI ทำงานอย่างมีระบบมากขึ้น',
        },
        {
          type: 'paragraph',
          text: 'จำง่าย ๆ:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Skill = วิธีทำงานซ้ำที่ทำให้ AI เข้าใจและช่วยเราได้เร็วขึ้น',
        },
        {
          type: 'paragraph',
          text: 'Skill ที่ควรใช้ในคอร์สนี้:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Project Brief Skill',
            'Landing Page Review Skill',
            'Component Builder Skill',
            'Debug Skill',
            'Deploy Checklist Skill',
            'Token Saving / Context Management Skill',
          ],
        },
      ],
    },
    {
      title: 'Token คืออะไร',
      blocks: [
        {
          type: 'paragraph',
          text: 'Token คือหน่วยที่ AI ใช้อ่านและเขียนข้อมูล ยิ่งเราใส่ข้อมูลเยอะ AI ก็ต้องอ่านเยอะ และยิ่ง AI ตอบยาวก็ใช้ Token มากขึ้น',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Token = งบประมาณความจำของ AI ในแต่ละรอบ',
        },
        {
          type: 'paragraph',
          text: 'สิ่งที่ทำให้ Token หมดเร็ว:',
        },
        {
          type: 'list',
          items: [
            'แปะโค้ดทั้งไฟล์ ทั้งที่แก้แค่ส่วนเดียว',
            'ให้ AI อ่านทั้งโปรเจกต์โดยไม่จำเป็น',
            'คุยใน Chat เดิมยาวเกินไป',
            'ส่ง Error Log ยาวเกินไป',
            'แปะ Requirement เดิมซ้ำทุกครั้ง',
            'สั่ง AI แก้หลายเรื่องในรอบเดียว',
            'ให้ AI Rewrite ทั้งหน้า ทั้งที่ควรแก้แค่ Component เดียว',
          ],
        },
      ],
    },
    {
      title: 'หลัก Context Hygiene',
      blocks: [
        {
          type: 'paragraph',
          text: 'ก่อนสั่ง AI ทุกครั้ง ให้ถามตัวเอง 4 ข้อ:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'AI จำเป็นต้องรู้อะไรบ้างเพื่อทำงานนี้?\nAI ไม่จำเป็นต้องรู้อะไร?\nควรให้ AI ดูไฟล์ไหนเท่านั้น?\nอยากให้ AI แก้อะไรแบบเฉพาะเจาะจง?',
        },
        {
          type: 'heading',
          text: 'Prompt ที่กว้างเกินไป',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ช่วยดูโปรเจกต์ทั้งหมดแล้วแก้หน้าเว็บให้ดูดีขึ้น',
        },
        {
          type: 'heading',
          text: 'Prompt ที่ดีกว่า',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ช่วยแก้เฉพาะ Hero Section ในไฟล์ components/Hero.tsx\nเป้าหมายคือปรับข้อความให้ขายคอร์ส Vibe Code Website Bootcamp ได้ชัดขึ้น\nยังไม่ต้องแก้ไฟล์อื่น\nตอบกลับเฉพาะ code ที่ต้องเปลี่ยนและเหตุผลสั้น ๆ',
        },
      ],
    },
    {
      title: 'แยก Task ให้เล็กลง',
      blocks: [
        {
          type: 'paragraph',
          text: 'แบ่งงานเป็นรอบเล็ก ๆ:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'รอบที่ 1: วาง Section\nรอบที่ 2: ทำ Hero\nรอบที่ 3: ทำ Course Outline\nรอบที่ 4: ทำ Pricing\nรอบที่ 5: ทำ FAQ\nรอบที่ 6: ตรวจ Responsive\nรอบที่ 7: เชื่อม Form\nรอบที่ 8: Deploy',
        },
        {
          type: 'callout',
          variant: 'key',
          text: 'งานเล็กลง = AI เข้าใจง่ายขึ้น = ใช้ Token น้อยลง = แก้ผิดน้อยลง',
        },
      ],
    },
  ],
}

export default lesson07
