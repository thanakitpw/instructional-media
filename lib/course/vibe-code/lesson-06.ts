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
          text: 'Stack คือชุดเครื่องมือที่ใช้สร้างโปรเจกต์ เช่น Framework สำหรับทำเว็บ ภาษาเขียนโค้ด ระบบตกแต่ง UI ฐานข้อมูล เครื่องมือ Deploy และที่เก็บโค้ด การเลือก Stack ที่เหมาะจะทำให้โปรเจกต์เดินเร็วขึ้นและดูแลต่อได้ง่ายขึ้น',
        },
        {
          type: 'paragraph',
          text: 'ในคอร์สนี้เราเลือก Stack ที่เหมาะกับการสร้างเว็บไซต์จริงในเวลาจำกัด และเป็น Stack ที่ AI Coding Tool ส่วนใหญ่เข้าใจดี มีตัวอย่างเยอะ และ Deploy ได้ง่าย',
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
        {
          type: 'definitions',
          items: [
            { term: 'Next.js', desc: 'Framework สำหรับสร้างเว็บไซต์ด้วย React มีระบบหน้าเว็บ Routing และเหมาะกับการ Deploy บน Vercel' },
            { term: 'TypeScript', desc: 'JavaScript แบบมี type ช่วยลดความผิดพลาดและทำให้ AI เข้าใจโครงข้อมูลได้ดีขึ้น' },
            { term: 'Tailwind CSS', desc: 'ระบบเขียน CSS ด้วย utility class ทำให้จัด Layout และ Responsive ได้เร็ว' },
            { term: 'shadcn/ui', desc: 'ชุด Component ที่นำมาใช้เป็นฐาน UI ได้ โดยยังแก้โค้ดเองได้เต็มที่' },
            { term: 'Supabase', desc: 'บริการฐานข้อมูลและ Backend เบื้องต้น เหมาะกับการเก็บ Lead หรือข้อมูลฟอร์ม' },
            { term: 'Vercel', desc: 'แพลตฟอร์ม Deploy ที่เหมาะกับ Next.js และเชื่อมกับ GitHub ได้ง่าย' },
            { term: 'GitHub', desc: 'ที่เก็บโค้ดออนไลน์ ใช้เก็บประวัติงานและเชื่อมต่อกับ Vercel' },
          ],
        },
        {
          type: 'table',
          head: ['งานที่ต้องทำ', 'เครื่องมือที่เกี่ยวข้อง', 'เหตุผล'],
          rows: [
            ['สร้างหน้าเว็บ', 'Next.js + TypeScript', 'ได้โครงสร้างโปรเจกต์จริงและต่อยอดได้'],
            ['จัด UI และ Responsive', 'Tailwind CSS + shadcn/ui', 'ทำ Layout ได้เร็วและแก้เฉพาะ Component ได้ง่าย'],
            ['เก็บข้อมูลฟอร์ม', 'Supabase', 'ไม่ต้องตั้ง Server เองตั้งแต่เริ่ม'],
            ['เก็บโค้ด', 'GitHub', 'มีประวัติงานและเชื่อม Deploy ได้'],
            ['นำเว็บออนไลน์', 'Vercel', 'Deploy Next.js ได้สะดวกและมี URL จริง'],
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
          type: 'table',
          head: ['เครื่องมือ', 'ใช้ทำอะไร', 'ตรวจว่าพร้อมหรือยัง'],
          rows: [
            ['Node.js LTS', 'รันโปรเจกต์ Next.js และติดตั้ง package', 'รัน `node -v` แล้วเห็น version'],
            ['Git', 'บันทึกประวัติโค้ดและ Push ขึ้น GitHub', 'รัน `git --version` แล้วเห็น version'],
            ['VS Code หรือ Cursor', 'แก้โค้ดและเปิดโปรเจกต์', 'เปิดโฟลเดอร์โปรเจกต์ได้'],
            ['GitHub Account', 'เก็บ Repository ออนไลน์', 'Login และสร้าง repo ได้'],
            ['Vercel Account', 'Deploy เว็บไซต์', 'Login ด้วย GitHub ได้'],
            ['Supabase Account', 'เก็บ Lead หรือข้อมูลฟอร์ม', 'สร้าง project ได้ถ้าต้องเชื่อมจริง'],
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
        {
          type: 'callout',
          variant: 'note',
          title: 'ถ้ายังติดตั้งไม่ครบ',
          text: 'ให้เริ่มจาก Node.js, Git, GitHub และ Vercel ก่อน เพราะเป็นชุดขั้นต่ำที่ทำให้คุณรันเว็บ เก็บโค้ด และ Deploy ได้ ส่วน Supabase และเครื่องมือเสริมสามารถทำตามในช่วงที่ใช้จริงได้',
        },
      ],
    },
    {
      title: 'เลือก Stack ให้เหมาะกับงาน',
      blocks: [
        {
          type: 'paragraph',
          text: 'แม้คอร์สนี้จะใช้ Stack หลักชุดเดียว แต่ในงานจริงคุณควรเลือกเครื่องมือตามประเภทโปรเจกต์ ไม่ใช่เลือกเพราะเป็นเทคโนโลยีที่กำลังนิยมเท่านั้น',
        },
        {
          type: 'table',
          head: ['ประเภทโปรเจกต์', 'Stack ที่เหมาะ', 'หมายเหตุ'],
          rows: [
            ['Landing Page / Portfolio', 'Next.js + Tailwind + Vercel', 'เน้นหน้าเว็บเร็ว SEO ดี และ Deploy ง่าย'],
            ['เว็บรับ Lead', 'Next.js + Supabase + Vercel', 'เพิ่มฐานข้อมูลเพื่อเก็บข้อมูลจากฟอร์ม'],
            ['Dashboard เบื้องต้น', 'Next.js + Supabase', 'เหมาะกับข้อมูลไม่ซับซ้อนและทีมเล็ก'],
            ['Mobile App ต่อขยาย', 'React Native + Expo', 'เหมาะกับผู้เรียนที่ใช้ React / TypeScript อยู่แล้ว'],
            ['Backend จริงจัง', 'Node.js/NestJS หรือ FastAPI + Database', 'เหมาะเมื่อระบบเริ่มซับซ้อนและต้องแยก API ชัดเจน'],
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'หลักเลือกเครื่องมือ',
          text: 'เริ่มจาก Stack ที่ทำให้โปรเจกต์เสร็จและอธิบายได้ก่อน แล้วค่อยเพิ่มความซับซ้อนเมื่อมีเหตุผลจริง',
        },
      ],
    },
  ],
}

export default lesson06
