import type { Lesson } from '../types'

const lesson09: Lesson = {
  title: 'Checklist รวมก่อนจบคอร์ส',
  sections: [
    {
      title: 'Checklist รวมก่อนจบคอร์ส',
      blocks: [
        {
          type: 'paragraph',
          text: 'Checklist นี้ใช้ตรวจว่าโปรเจกต์ของคุณพร้อมส่งท้ายคอร์สหรือยัง ให้ใช้ตรวจตามลำดับจาก Strategy ไปจนถึง Deploy และ Tracking เพราะเว็บไซต์ที่ดีไม่ได้จบแค่หน้าตาสวย แต่ต้องมีโจทย์ชัด ใช้งานได้ และต่อยอดได้',
        },
        { type: 'heading', text: 'Strategy Checklist' },
        {
          type: 'paragraph',
          text: 'ส่วนนี้ใช้ตรวจว่าเว็บไซต์ของคุณมีเหตุผลทางธุรกิจหรือเหตุผลด้าน Portfolio ชัดเจนหรือไม่ ถ้าส่วนนี้ยังไม่ชัด ต่อให้หน้าเว็บสวยก็อาจไม่ช่วยให้ผู้ใช้ตัดสินใจ',
        },
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
          type: 'paragraph',
          text: 'ส่วนนี้ใช้ตรวจว่าโครงหน้าเว็บและการออกแบบช่วยให้ผู้ใช้อ่าน เข้าใจ และกด CTA ได้ง่ายหรือไม่',
        },
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
          type: 'paragraph',
          text: 'ส่วนนี้ใช้ตรวจว่าโปรเจกต์ของคุณไม่ได้เป็นแค่ภาพ Preview แต่กลายเป็นเว็บจริงที่รัน แก้ไข และดูแลต่อได้',
        },
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
          type: 'paragraph',
          text: 'ส่วนนี้ใช้ตรวจว่าเว็บของคุณเปิดออนไลน์ได้จริง และคนอื่นสามารถเข้าดูผลงานผ่าน URL ได้',
        },
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
          type: 'paragraph',
          text: 'ส่วนนี้ใช้ตรวจว่าคุณเข้าใจว่าเว็บควรวัดผลอะไร แม้ยังไม่ติดตั้ง Tracking เต็มรูปแบบก็ต้องรู้ว่า Conversion สำคัญคืออะไร',
        },
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
          type: 'paragraph',
          text: 'ส่วนนี้ใช้คิดต่อว่าเว็บไซต์ที่ทำในคอร์สจะนำไปใช้จริงอย่างไร หลังเรียนจบควรมีแผนว่าจะปรับเนื้อหา เพิ่มผลงาน หรือส่งให้ลูกค้าดูอย่างไร',
        },
        {
          type: 'checklist',
          items: [
            'ใช้เว็บเป็น Portfolio ได้',
            'ใช้เว็บเป็น Landing Page รับลูกค้าได้',
            'รู้แนวทางพัฒนาต่อ',
            'รู้ว่าถ้าจะรับงานควรนำเสนอผลงานอย่างไร',
          ],
        },
        {
          type: 'table',
          head: ['ถ้ายังไม่ผ่านส่วนนี้', 'สิ่งที่ควรกลับไปแก้'],
          rows: [
            ['Strategy', 'กลับไปแก้ Project Brief, กลุ่มเป้าหมาย และ CTA'],
            ['Design', 'กลับไปแก้ Hero, Section Order, สี, ฟอนต์ และ Responsive'],
            ['Development', 'กลับไปตรวจ Component, Error, Git และการรันในเครื่อง'],
            ['Deploy', 'กลับไปตรวจ GitHub, Vercel Build, URL และ Environment Variables'],
            ['Tracking', 'กลับไปกำหนด Conversion และ Key Event ที่สำคัญ'],
            ['Career / Business', 'กลับไปเพิ่มข้อความนำเสนอผลงานและ Roadmap หลังเรียน'],
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'เกณฑ์ขั้นต่ำก่อนส่งงาน',
          text: 'อย่างน้อยคุณควรมี Brief, HTML Preview, Next.js Project, GitHub Repository และ Vercel URL ที่เปิดได้จริง',
        },
      ],
    },
  ],
}

export default lesson09
