import type { Lesson } from '../types'

const lesson03: Lesson = {
  title: 'Website Design & HTML Preview',
  sections: [
    {
      title: 'Sitemap',
      blocks: [
        {
          type: 'paragraph',
          text: 'เมื่อมี Project Brief แล้ว ขั้นต่อไปคือเปลี่ยนโจทย์ให้เป็นโครงหน้าเว็บที่ผู้ใช้เข้าใจได้จริง',
        },
        {
          type: 'paragraph',
          text: 'ในส่วนนี้คุณจะวาง Section, User Flow, CTA, UX/UI Direction และใช้ AI สร้าง HTML Preview เพื่อดูหน้าตาเว็บก่อนเริ่มทำโปรเจกต์ Next.js',
        },
        {
          type: 'heading',
          text: 'Sitemap คืออะไร',
        },
        {
          type: 'paragraph',
          text: 'Sitemap คือโครงสร้างหน้าของเว็บไซต์ เช่น:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Home\nAbout\nServices\nPortfolio\nContact',
        },
        {
          type: 'paragraph',
          text: 'สำหรับคอร์สนี้ แนะนำให้เริ่มจากเว็บหน้าเดียวก่อน เพราะทำง่าย เห็นผลเร็ว และเหมาะกับการทำ Landing Page หรือ Portfolio',
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่าง Sitemap สำหรับ Landing Page:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Landing Page\nThank You Page\nPrivacy Policy',
        },
      ],
    },
    {
      title: 'User Flow',
      blocks: [
        {
          type: 'heading',
          text: 'User Flow คืออะไร',
        },
        {
          type: 'paragraph',
          text: 'User Flow คือเส้นทางที่ผู้ใช้เดินผ่านหน้าเว็บ ตั้งแต่เห็นหน้าแรกจนถึงการตัดสินใจทำ Action',
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่าง:',
        },
        {
          type: 'flow',
          steps: [
            'เห็น Hero',
            'เข้าใจปัญหาของตัวเอง',
            'เห็น Solution',
            'ดูบริการและขั้นตอน',
            'ดูตัวอย่างหรือราคา',
            'อ่าน FAQ เพื่อลดความกังวล',
            'กด CTA เพื่อติดต่อ',
          ],
        },
      ],
    },
    {
      title: 'Section ที่ควรมีใน Landing Page',
      blocks: [
        {
          type: 'heading',
          text: '1. Hero Section',
        },
        {
          type: 'paragraph',
          text: 'Hero คือส่วนแรกที่ผู้ใช้เห็น ต้องตอบให้ได้ว่า:',
        },
        {
          type: 'list',
          items: [
            'เว็บนี้คืออะไร',
            'ช่วยใคร',
            'ช่วยแก้ปัญหาอะไร',
            'มีจุดขายอะไร',
            'ต้องกดอะไรต่อ',
          ],
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่าง:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Headline: ทำเว็บไซต์ธุรกิจให้ดูน่าเชื่อถือ พร้อมใช้งานจริง\nSubheadline: เหมาะสำหรับเจ้าของธุรกิจที่อยากมีเว็บไซต์ไว้รับลูกค้าใหม่ โดยไม่ต้องเริ่มจากศูนย์\nCTA: ทัก LINE เพื่อขอดูแนวทางเว็บไซต์\nSecondary CTA: ดูตัวอย่างผลงาน',
        },
        {
          type: 'heading',
          text: '2. Problem Section',
        },
        {
          type: 'paragraph',
          text: 'ใช้เล่าปัญหาของกลุ่มเป้าหมาย เช่น:',
        },
        {
          type: 'list',
          items: [
            'มีเพจแล้วแต่ลูกค้ายังไม่มั่นใจ',
            'ยิงแอดแล้วไม่มีหน้าเว็บรองรับ',
            'อยากมีเว็บไซต์แต่ไม่รู้จะเริ่มยังไง',
            'กลัวจ้างทำเว็บแล้วไม่ตรงใจ',
            'ไม่มีเวลาเตรียมข้อมูลเอง',
          ],
        },
        {
          type: 'heading',
          text: '3. Solution Section',
        },
        {
          type: 'paragraph',
          text: 'ใช้บอกว่าวิธีของคุณช่วยแก้ปัญหาอย่างไร เช่น:',
        },
        {
          type: 'list',
          items: [
            'ช่วยวางโครงเว็บให้',
            'ออกแบบหน้าแรกให้ดูก่อน',
            'ทำเว็บให้รองรับมือถือ',
            'มีปุ่มติดต่อชัดเจน',
            'พร้อม Deploy ขึ้นออนไลน์',
          ],
        },
        {
          type: 'heading',
          text: '4. Service / Feature Section',
        },
        {
          type: 'paragraph',
          text: 'แสดงสิ่งที่ผู้ใช้จะได้รับ เช่น:',
        },
        {
          type: 'list',
          items: [
            'ออกแบบหน้าเว็บ',
            'พัฒนาเว็บไซต์',
            'รองรับมือถือ',
            'เชื่อมฟอร์มติดต่อ',
            'ติดตั้ง Tracking',
            'ดูแลหลังส่งมอบ',
          ],
        },
        {
          type: 'heading',
          text: '5. Process Section',
        },
        {
          type: 'paragraph',
          text: 'แสดงขั้นตอนการทำงาน เช่น:',
        },
        {
          type: 'code',
          lang: 'text',
          code: '1. คุยโจทย์\n2. วางโครงเว็บ\n3. ออกแบบหน้าแรก\n4. พัฒนาเว็บ\n5. ตรวจงาน\n6. Deploy\n7. ส่งมอบ',
        },
        {
          type: 'heading',
          text: '6. Portfolio / Example Section',
        },
        {
          type: 'paragraph',
          text: 'ใช้แสดงตัวอย่างงาน เว็บไซต์ที่เคยทำ Mockup, Case Study, Before / After หรือ Demo Project',
        },
        {
          type: 'paragraph',
          text: 'ถ้าคุณยังไม่มีผลงานจริง สามารถใช้ Demo Project ที่ทำในคอร์สนี้เป็น Portfolio เริ่มต้นได้',
        },
        {
          type: 'heading',
          text: '7. Pricing Section',
        },
        {
          type: 'paragraph',
          text: 'ใช้แสดงราคา แพ็กเกจ หรือราคาเริ่มต้น',
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่าง:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Starter: เหมาะกับเริ่มต้น\nGrowth: เหมาะกับธุรกิจที่ต้องการหน้าเว็บครบขึ้น\nBusiness: เหมาะกับธุรกิจที่ต้องการระบบและการวัดผล',
        },
        {
          type: 'heading',
          text: '8. FAQ Section',
        },
        {
          type: 'paragraph',
          text: 'ใช้ตอบข้อกังวล เช่น:',
        },
        {
          type: 'list',
          items: [
            'ใช้เวลากี่วัน',
            'ต้องเตรียมข้อมูลอะไร',
            'แก้ไขได้กี่ครั้ง',
            'มีค่าใช้จ่ายรายปีไหม',
            'เว็บรองรับมือถือไหม',
            'หลังส่งมอบแก้ไขเองได้ไหม',
          ],
        },
        {
          type: 'heading',
          text: '9. Final CTA Section',
        },
        {
          type: 'paragraph',
          text: 'ใช้ปิดท้ายและชวนให้ผู้ใช้ทำ Action',
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่าง:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'อยากมีเว็บไซต์ที่ช่วยให้ธุรกิจดูน่าเชื่อถือขึ้น?\nทัก LINE เพื่อเริ่มคุยโจทย์ได้เลย',
        },
      ],
    },
    {
      title: 'พื้นฐาน UX/UI',
      blocks: [
        {
          type: 'heading',
          text: 'Layout',
        },
        {
          type: 'list',
          items: [
            'หัวข้อต้องเด่น',
            'ข้อความไม่ควรยาวเกินไป',
            'Section ต้องมีระยะห่าง',
            'CTA ต้องมองเห็นง่าย',
            'หน้าเว็บควรอ่านไหลจากบนลงล่าง',
          ],
        },
        {
          type: 'heading',
          text: 'Typography',
        },
        {
          type: 'list',
          items: [
            'ใช้ฟอนต์ไม่เยอะเกินไป',
            'ขนาดหัวข้อและเนื้อหาต้องต่างกันชัดเจน',
            'ตัวหนังสือต้องอ่านง่ายบนมือถือ',
            'ไม่ควรใช้ข้อความแน่นเกินไป',
          ],
        },
        {
          type: 'heading',
          text: 'Color',
        },
        {
          type: 'list',
          items: [
            'มีสีหลัก 1 สี',
            'มีสีรอง 1-2 สี',
            'พื้นหลังต้องช่วยให้อ่านง่าย',
            'สีปุ่ม CTA ต้องเด่นกว่าส่วนอื่น',
          ],
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่างโทนสีสำหรับแบรนด์ส้ม:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Primary: Orange\nBackground: White / Light Gray\nText: Black / Dark Gray\nAccent: Soft Orange',
        },
        {
          type: 'heading',
          text: 'Spacing',
        },
        {
          type: 'list',
          items: [
            'ระยะห่างระหว่าง Section ต้องพอดี',
            'Card ไม่ควรแน่นเกินไป',
            'ปุ่มควรมีพื้นที่รอบ ๆ',
            'หน้าเว็บควรอ่านสบาย',
          ],
        },
        {
          type: 'heading',
          text: 'Responsive',
        },
        {
          type: 'list',
          items: [
            'หน้าเว็บต้องดูดีบนมือถือ',
            'Card ควรเรียงลงมาในมือถือ',
            'ปุ่มต้องกดง่าย',
            'ข้อความต้องไม่เล็กเกินไป',
            'รูปภาพต้องไม่ล้นจอ',
          ],
        },
      ],
    },
    {
      title: 'Prompt: วาง Section & สร้าง HTML Preview',
      blocks: [
        {
          type: 'heading',
          text: 'Prompt สำหรับวาง Section',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'จาก Project Brief ด้านล่าง ช่วยวางโครงหน้า Landing Page แบบละเอียด\n\nต้องการให้ช่วยจัด:\n1. Section ทั้งหมดที่ควรมี\n2. ลำดับการเล่าเรื่องจากบนลงล่าง\n3. Headline ของแต่ละ Section\n4. ข้อความอธิบายสั้น ๆ\n5. CTA ที่เหมาะสม\n6. คำแนะนำ UX/UI\n7. แนวทาง Responsive บนมือถือ\n\nProject Brief:\n[วาง Project Brief ตรงนี้]',
        },
        {
          type: 'heading',
          text: 'Prompt สำหรับสร้าง HTML Preview',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ช่วยสร้าง HTML Preview สำหรับ Landing Page จากโครงสร้างด้านล่าง\n\nเงื่อนไข:\n- ใช้ HTML + CSS ในไฟล์เดียว\n- ดีไซน์สไตล์ Modern, Clean, Premium\n- ใช้สีหลักเป็นส้ม ขาว ดำ\n- Layout ต้องดูน่าเชื่อถือ\n- มี Hero, Problem, Solution, Services, Process, Pricing, FAQ และ Contact CTA\n- รองรับ Responsive เบื้องต้น\n- ใช้ข้อความภาษาไทย\n- ปุ่ม CTA เด่นชัด\n- ไม่ต้องเชื่อมระบบจริง แค่ทำเป็น Preview\n\nข้อมูลหน้าเว็บ:\n[วาง Section ที่ได้จาก AI ตรงนี้]',
        },
      ],
    },
    {
      title: 'Checklist ตรวจ HTML Preview',
      blocks: [
        {
          type: 'checklist',
          items: [
            'Hero Section เข้าใจใน 5 วินาทีหรือไม่',
            'Headline ชัดเจนหรือไม่',
            'CTA เด่นพอหรือไม่',
            'Section เรียงลำดับดีหรือไม่',
            'สีอ่านง่ายหรือไม่',
            'ฟอนต์ดูน่าเชื่อถือหรือไม่',
            'ข้อความขายยาวเกินไปหรือไม่',
            'มีข้อมูลที่ช่วยให้ลูกค้าตัดสินใจพอหรือไม่',
            'มี FAQ ตอบข้อกังวลหรือไม่',
            'ปุ่มติดต่ออยู่ในตำแหน่งที่เหมาะสมหรือไม่',
            'เปิดบนมือถือแล้วใช้งานได้หรือไม่',
            'มี Placeholder ที่ยังไม่ได้แก้หรือไม่',
          ],
        },
      ],
    },
    {
      title: 'Workshop: สร้าง HTML Preview',
      blocks: [
        {
          type: 'heading',
          text: 'สิ่งที่คุณต้องทำ',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'นำ Project Brief มาใช้',
            'ให้ AI ช่วยวาง Section',
            'ปรับ Section ให้เหมาะกับเว็บของตัวเอง',
            'ให้ AI สร้าง HTML Preview',
            'เปิดไฟล์ Preview ดูใน Browser',
            'ปรับข้อความ สี Layout และ CTA',
            'ตรวจด้วย Checklist',
            'Save ไฟล์ HTML Preview ไว้ใช้ต่อในขั้นตอน Next.js',
          ],
        },
        {
          type: 'heading',
          text: 'ผลลัพธ์ที่ต้องได้',
        },
        {
          type: 'list',
          items: ['HTML Preview ของเว็บตัวเอง 1 หน้า'],
        },
      ],
    },
  ],
}

export default lesson03
