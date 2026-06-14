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
          text: 'เว็บหน้าเดียวไม่ได้แปลว่าเว็บไม่มีโครงสร้าง แต่หมายถึงทุก Section อยู่ในหน้าเดียวกัน ผู้ใช้เลื่อนอ่านจากบนลงล่าง การจัดลำดับ Section จึงสำคัญมาก เพราะมันทำหน้าที่แทนเมนูหลายหน้า',
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
        {
          type: 'definitions',
          items: [
            { term: 'Landing Page', desc: 'หน้าหลักที่ใช้เล่า Offer และพาผู้ใช้ไปกด CTA' },
            { term: 'Thank You Page', desc: 'หน้าหลังจากผู้ใช้ส่งฟอร์มหรือทำ Action สำเร็จ ใช้ยืนยันผลและบอกขั้นตอนต่อไป' },
            { term: 'Privacy Policy', desc: 'หน้าที่อธิบายการเก็บและใช้ข้อมูลส่วนบุคคล โดยเฉพาะเมื่อมีฟอร์มเก็บ Lead' },
          ],
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
          text: 'ถ้า User Flow ดี ผู้ใช้จะไม่รู้สึกว่าต้องเดาเองว่าควรอ่านอะไรต่อ หน้าเว็บจะค่อย ๆ ตอบคำถามในหัวของผู้ใช้ เช่น เว็บนี้คืออะไร ทำไมเกี่ยวกับฉัน เชื่อถือได้ไหม ราคาเป็นอย่างไร และต้องติดต่อทางไหน',
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
        {
          type: 'callout',
          variant: 'key',
          title: 'วิธีตรวจ User Flow',
          text: 'ลองอ่านหน้าเว็บจากบนลงล่างโดยสมมติว่าคุณเป็นลูกค้าที่ไม่รู้จักแบรนด์มาก่อน ถ้ารู้สึกสะดุดหรือยังมีคำถามใหญ่ที่ไม่ถูกตอบ แปลว่ายังต้องปรับลำดับ Section',
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
          type: 'callout',
          variant: 'note',
          title: 'Hero ที่ดี',
          text: 'ควรทำให้ผู้ใช้เข้าใจภายในไม่กี่วินาทีว่าเว็บนี้ช่วยใครและช่วยเรื่องอะไร อย่าใช้คำกว้างเกินไป เช่น “ยกระดับธุรกิจของคุณ” โดยไม่มีรายละเอียดรองรับ',
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
          type: 'paragraph',
          text: 'Problem Section ไม่ควรเขียนเพื่อทำให้ผู้ใช้รู้สึกผิด แต่ควรสะท้อนปัญหาที่เขาเจอจริงและทำให้เขารู้สึกว่าเว็บนี้เข้าใจสถานการณ์ของเขา',
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
          type: 'paragraph',
          text: 'Solution Section ควรตอบกลับไปยัง Problem ก่อนหน้าโดยตรง ถ้าปัญหาคือ “ไม่รู้จะเริ่มเตรียมข้อมูลอย่างไร” Solution อาจเป็น “มีขั้นตอนช่วยวางโครงเนื้อหาและ Brief ก่อนเริ่มทำเว็บ”',
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
          type: 'paragraph',
          text: 'เวลาเขียน Feature ให้พยายามเชื่อมกับประโยชน์ เช่น “รองรับมือถือ” ควรแปลต่อให้ผู้ใช้เข้าใจว่า “ลูกค้าเปิดจากโทรศัพท์แล้วอ่านง่ายและกดติดต่อได้ทันที”',
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
          type: 'paragraph',
          text: 'Process Section ช่วยลดความกังวลของผู้ใช้ เพราะทำให้เขารู้ว่าถ้าติดต่อแล้วจะเกิดอะไรขึ้นต่อ โดยเฉพาะบริการที่ต้องคุยรายละเอียดก่อนเริ่มงาน',
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
          type: 'paragraph',
          text: 'ถ้าใช้ Demo Project ให้เขียนให้ชัดว่าเป็นโปรเจกต์ตัวอย่าง และเล่าว่าคุณรับผิดชอบส่วนไหน เช่น วาง Brief, ออกแบบ Section, เขียน Next.js, Deploy หรือวาง Tracking Plan',
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
          type: 'paragraph',
          text: 'ถ้ายังไม่พร้อมระบุราคาเต็ม สามารถใช้ “ราคาเริ่มต้น” หรือ “ขอใบเสนอราคา” ได้ แต่ต้องบอกให้ชัดว่าผู้ใช้จะได้อะไรจากการติดต่อ',
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
          type: 'paragraph',
          text: 'FAQ ที่ดีควรมาจากข้อกังวลจริงของผู้ใช้ ไม่ใช่คำถามที่ใส่ไว้ให้หน้าเว็บดูยาวขึ้น ให้เริ่มจากคำถามที่ผู้ใช้มักถามก่อนซื้อหรือติดต่อ',
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
        {
          type: 'table',
          head: ['Section', 'หน้าที่หลัก', 'สิ่งที่ควรระวัง'],
          rows: [
            ['Hero', 'ทำให้เข้าใจ Offer และ CTA เร็วที่สุด', 'Headline กว้างเกินไปหรือ CTA ไม่เด่น'],
            ['Problem', 'สะท้อนปัญหาของกลุ่มเป้าหมาย', 'เขียนดราม่าเกินจริงหรือไม่ตรงผู้ใช้'],
            ['Solution', 'อธิบายว่าคุณช่วยแก้ปัญหาอย่างไร', 'พูดแต่ฟีเจอร์โดยไม่โยงกับปัญหา'],
            ['Services', 'บอกสิ่งที่ได้รับ', 'รายการเยอะจนอ่านไม่ออกว่าอะไรสำคัญ'],
            ['Process', 'เพิ่มความมั่นใจเรื่องขั้นตอน', 'ขั้นตอนยาวเกินไปจนดูยุ่งยาก'],
            ['FAQ', 'ลดข้อกังวลก่อนติดต่อ', 'ตอบสั้นเกินไปหรือไม่ตอบข้อกังวลจริง'],
            ['Final CTA', 'ชวนให้ทำ Action สุดท้าย', 'ใช้ CTA คนละคำกับส่วนอื่นจนสับสน'],
          ],
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
          type: 'paragraph',
          text: 'ก่อนนำ HTML Preview ไปแปลงเป็น Next.js ให้ตรวจรายการนี้ก่อน เพราะการแก้ปัญหาโครงหน้าเว็บในขั้น Preview ง่ายกว่าการแก้หลังแยกเป็นหลาย Component แล้ว',
        },
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
        {
          type: 'callout',
          variant: 'key',
          title: 'ก่อนจบ Workshop นี้',
          text: 'คุณควรเปิด Preview ให้คนอื่นดูแล้วเขาบอกได้ว่าเว็บนี้เสนออะไร ช่วยใคร และต้องกดอะไรต่อ',
        },
      ],
    },
  ],
}

export default lesson03
