import type { Lesson } from '../types'

const lesson05: Lesson = {
  title: 'Deploy, Tracking & Portfolio',
  sections: [
    {
      title: 'Contact Form / Lead Form',
      blocks: [
        {
          type: 'paragraph',
          text: 'เว็บไซต์จะมีคุณค่ามากขึ้นเมื่อเปิดใช้งานจริง วัดผลได้ และนำไปต่อยอดได้',
        },
        {
          type: 'paragraph',
          text: 'ในส่วนนี้คุณจะทำ Contact Form หรือ Lead Form เบื้องต้น เข้าใจแนวคิด Supabase Deploy ด้วย Vercel ตรวจเว็บหลังขึ้นออนไลน์ และวางแผน Tracking / Portfolio',
        },
        {
          type: 'heading',
          text: 'Contact Form / Lead Form เบื้องต้น',
        },
        {
          type: 'paragraph',
          text: 'ฟอร์มมีไว้เพื่อเก็บข้อมูลจากลูกค้า เช่น:',
        },
        {
          type: 'paragraph',
          text: 'สำหรับ Landing Page ฟอร์มคือจุดที่เปลี่ยนคนอ่านให้กลายเป็น Lead ดังนั้นฟอร์มควรถามข้อมูลเท่าที่จำเป็น และต้องทำให้ผู้ใช้รู้ว่าหลังจากส่งแล้วจะเกิดอะไรขึ้นต่อ',
        },
        {
          type: 'list',
          items: [
            'ชื่อ',
            'เบอร์โทร',
            'อีเมล',
            'LINE ID',
            'บริการที่สนใจ',
            'งบประมาณ',
            'ข้อความเพิ่มเติม',
          ],
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่างฟอร์ม:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ชื่อ:\nเบอร์โทร:\nLINE ID:\nบริการที่สนใจ:\nข้อความเพิ่มเติม:\nปุ่ม: ส่งข้อมูล',
        },
        {
          type: 'table',
          head: ['Field', 'ใช้ทำอะไร', 'ควรบังคับกรอกไหม'],
          rows: [
            ['ชื่อ', 'ใช้เรียกผู้ติดต่อและแยก Lead', 'ควรบังคับ'],
            ['เบอร์โทร', 'ใช้ติดต่อกลับโดยตรง', 'ขึ้นกับประเภทบริการ'],
            ['อีเมล', 'ใช้ส่งข้อมูลหรือเอกสารต่อ', 'ไม่จำเป็นเสมอไป'],
            ['LINE ID', 'เหมาะกับธุรกิจที่ปิดการขายผ่าน LINE', 'ควรบังคับถ้า CTA คือทัก LINE'],
            ['บริการที่สนใจ', 'ช่วยคัดแยกความต้องการของลูกค้า', 'ควรมีถ้ามีหลายบริการ'],
            ['ข้อความเพิ่มเติม', 'ให้ลูกค้าเล่ารายละเอียดเอง', 'ไม่ควรบังคับ'],
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'ฟอร์มที่ดี',
          text: 'ถามให้น้อยพอที่ผู้ใช้กล้ากรอก แต่พอให้คุณติดต่อกลับได้อย่างมีบริบท',
        },
      ],
    },
    {
      title: 'เชื่อม Supabase',
      blocks: [
        {
          type: 'heading',
          text: 'แนวคิดการเชื่อม Supabase',
        },
        {
          type: 'paragraph',
          text: 'Supabase ใช้เป็นฐานข้อมูลสำหรับเก็บข้อมูลฟอร์ม',
        },
        {
          type: 'paragraph',
          text: 'ในคอร์สนี้ให้เข้าใจ Supabase เป็นที่เก็บข้อมูล Lead ก่อน ยังไม่จำเป็นต้องลงลึกระบบ Backend ทั้งหมด แนวคิดสำคัญคือเมื่อผู้ใช้ส่งฟอร์ม ข้อมูลควรถูกบันทึกไว้ในที่ที่คุณกลับมาดูได้',
        },
        {
          type: 'paragraph',
          text: 'Flow แบบง่าย:',
        },
        {
          type: 'flow',
          steps: [
            'ผู้ใช้กรอกฟอร์มบนเว็บไซต์',
            'กดส่งข้อมูล',
            'เว็บส่งข้อมูลไป Supabase',
            'เจ้าของเว็บเข้าไปดู Lead ได้',
          ],
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่างตาราง:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'leads\n- id\n- name\n- phone\n- line_id\n- email\n- service\n- message\n- created_at',
        },
        {
          type: 'definitions',
          items: [
            { term: 'Table', desc: 'ตารางเก็บข้อมูล เช่น leads' },
            { term: 'Row', desc: 'ข้อมูล 1 รายการ เช่น Lead 1 คนที่ส่งฟอร์มเข้ามา' },
            { term: 'Column', desc: 'ช่องข้อมูล เช่น name, phone, service' },
            { term: 'created_at', desc: 'เวลาที่ข้อมูลถูกสร้าง ใช้ดูว่า Lead เข้ามาเมื่อไร' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'ระวังข้อมูลส่วนบุคคล',
          text: 'ถ้าเก็บเบอร์โทร อีเมล หรือ LINE ID ควรใช้ข้อมูลเท่าที่จำเป็น และควรมี Privacy Policy เมื่อเว็บเริ่มใช้งานจริง',
        },
      ],
    },
    {
      title: 'Deploy ด้วย Vercel',
      blocks: [
        {
          type: 'heading',
          text: 'Deploy เว็บไซต์ด้วย Vercel',
        },
        {
          type: 'paragraph',
          text: 'Vercel คือแพลตฟอร์มสำหรับนำเว็บไซต์ขึ้นออนไลน์ เหมาะกับ Next.js และเชื่อมกับ GitHub ได้ง่าย',
        },
        {
          type: 'paragraph',
          text: 'ขั้นตอน Deploy:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'เข้า Vercel',
            'Login ด้วย GitHub',
            'Import Project',
            'เลือก Repository',
            'ตรวจ Framework ว่าเป็น Next.js',
            'ตั้งค่า Environment Variables ถ้ามี',
            'กด Deploy',
            'รอระบบ Build',
            'ได้ URL เว็บไซต์ออนไลน์',
            'ทดสอบเปิดเว็บจริง',
          ],
        },
        {
          type: 'paragraph',
          text: 'เมื่อเชื่อม GitHub กับ Vercel แล้ว ทุกครั้งที่ Push โค้ดขึ้น GitHub ระบบจะ Deploy ใหม่อัตโนมัติ',
        },
        {
          type: 'paragraph',
          text: 'หลัง Deploy แล้วให้คิดว่าเว็บอยู่ในสภาพแวดล้อมจริง ไม่ใช่แค่เครื่องของคุณ ปัญหาบางอย่างอาจเกิดเฉพาะ Production เช่น Environment Variables ไม่ครบ รูปภาพ path ผิด หรือ build ไม่ผ่าน',
        },
        {
          type: 'table',
          head: ['ขั้นตอน', 'สิ่งที่ต้องตรวจ'],
          rows: [
            ['Import Project', 'เลือก Repository ถูกต้องและ Framework เป็น Next.js'],
            ['Environment Variables', 'ใส่ค่าที่จำเป็น เช่น Supabase URL หรือ API Key'],
            ['Build', 'ดู log ถ้า build fail และอ่าน error หลัก'],
            ['Production URL', 'เปิดเว็บจริงและเช็กทุก Section'],
            ['Auto Deploy', 'Push รอบต่อไปแล้ว Vercel Deploy ใหม่หรือไม่'],
          ],
        },
        {
          type: 'heading',
          text: 'Checklist หลัง Deploy',
        },
        {
          type: 'checklist',
          items: [
            'เปิด URL ได้',
            'หน้าเว็บไม่พัง',
            'รูปโหลดครบ',
            'ปุ่ม CTA ใช้งานได้',
            'ฟอร์มส่งข้อมูลได้',
            'เปิดบนมือถือได้',
            'ไม่มี Error หน้าเว็บ',
            'Title เว็บถูกต้อง',
            'Description เว็บถูกต้อง',
            'Link Social / LINE ถูกต้อง',
          ],
        },
      ],
    },
    {
      title: 'GA4 / Google Tag / Search Console',
      blocks: [
        {
          type: 'heading',
          text: 'GA4, Google Tag และ Search Console',
        },
        {
          type: 'heading',
          text: 'GA4 ใช้ทำอะไร',
        },
        {
          type: 'paragraph',
          text: 'เครื่องมือวัดผลเหล่านี้ช่วยให้คุณรู้ว่าเว็บถูกใช้งานอย่างไร ไม่ใช่แค่เดาว่าหน้าเว็บดีหรือไม่ดีจากความรู้สึก',
        },
        {
          type: 'paragraph',
          text: 'GA4 ใช้ดูพฤติกรรมคนเข้าเว็บ เช่น:',
        },
        {
          type: 'list',
          items: [
            'มีคนเข้าเว็บกี่คน',
            'เข้ามาจากช่องทางไหน',
            'ใช้มือถือหรือคอม',
            'หน้าไหนคนดูเยอะ',
            'คนอยู่ในเว็บนานไหม',
          ],
        },
        {
          type: 'heading',
          text: 'Google Tag ใช้ทำอะไร',
        },
        {
          type: 'list',
          items: [
            'Google Tag ใช้จัดการ Tracking Code และ Event ต่าง ๆ โดยไม่ต้องแก้โค้ดบ่อย',
          ],
        },
        {
          type: 'heading',
          text: 'Search Console ใช้ทำอะไร',
        },
        {
          type: 'paragraph',
          text: 'Search Console ใช้ดูว่าเว็บแสดงบน Google อย่างไร เช่น:',
        },
        {
          type: 'list',
          items: [
            'Google เจอเว็บหรือยัง',
            'เว็บมีปัญหา Index ไหม',
            'คนค้นหาคำอะไรแล้วเจอเว็บ',
            'หน้าเว็บมีปัญหา SEO เทคนิคไหม',
          ],
        },
        {
          type: 'table',
          head: ['เครื่องมือ', 'เหมาะกับการดูอะไร', 'ตัวอย่างคำถามที่ตอบได้'],
          rows: [
            ['GA4', 'พฤติกรรมผู้ใช้ในเว็บ', 'คนเข้าเว็บจากช่องทางไหนและกดอะไรบ้าง'],
            ['Google Tag', 'จัดการ tag และ event', 'จะติด event ปุ่ม LINE โดยไม่แก้โค้ดหลายรอบได้อย่างไร'],
            ['Search Console', 'การแสดงผลบน Google Search', 'Google index เว็บหรือยัง และคนค้นคำอะไรแล้วเจอ'],
          ],
        },
      ],
    },
    {
      title: 'Conversion และ Key Event',
      blocks: [
        {
          type: 'heading',
          text: 'Conversion และ Key Event',
        },
        {
          type: 'paragraph',
          text: 'Conversion คือการกระทำสำคัญที่อยากให้ผู้ใช้ทำบนเว็บ',
        },
        {
          type: 'paragraph',
          text: 'ก่อนติด Tracking ให้กำหนดก่อนว่า Action ไหนสำคัญที่สุด ถ้าเว็บต้องการ Lead การส่งฟอร์มหรือกด LINE อาจสำคัญกว่าจำนวน page view',
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่าง Conversion:',
        },
        {
          type: 'list',
          items: [
            'กดปุ่ม LINE',
            'กดปุ่มโทร',
            'ส่งฟอร์ม',
            'กดสมัครเรียน',
            'กดจองคิว',
            'กดดาวน์โหลดไฟล์',
            'กดดูแพ็กเกจ',
            'กดดู Portfolio',
          ],
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่าง Key Event:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'click_line\nsubmit_lead_form\nclick_call\nclick_pricing\nclick_portfolio',
        },
        {
          type: 'paragraph',
          text: 'เว็บที่ดีไม่ใช่แค่สวย แต่ควรวัดผลได้ด้วย',
        },
        {
          type: 'table',
          head: ['เป้าหมายเว็บ', 'Conversion ที่ควรวัด', 'ตัวอย่าง Event Name'],
          rows: [
            ['รับ Lead', 'ส่งฟอร์ม', 'submit_lead_form'],
            ['ให้ลูกค้าทัก LINE', 'กดปุ่ม LINE', 'click_line'],
            ['ให้คนโทรติดต่อ', 'กดปุ่มโทร', 'click_call'],
            ['ขายคอร์ส', 'กดสมัครเรียน', 'click_apply_course'],
            ['โชว์ผลงาน', 'กดดู Portfolio', 'click_portfolio'],
          ],
        },
      ],
    },
    {
      title: 'PageSpeed Insights และ Performance',
      blocks: [
        {
          type: 'heading',
          text: 'PageSpeed Insights และ Performance เบื้องต้น',
        },
        {
          type: 'paragraph',
          text: 'สิ่งที่ควรดูใน PageSpeed Insights:',
        },
        {
          type: 'paragraph',
          text: 'Performance ไม่ใช่แค่คะแนนสวย ๆ แต่เกี่ยวกับประสบการณ์ผู้ใช้ ถ้าเว็บโหลดช้า ผู้ใช้อาจออกก่อนเห็น Offer หรือ CTA',
        },
        {
          type: 'list',
          items: [
            'Performance',
            'Accessibility',
            'Best Practices',
            'SEO',
            'Core Web Vitals',
          ],
        },
        {
          type: 'paragraph',
          text: 'สิ่งที่มักทำให้เว็บช้า:',
        },
        {
          type: 'list',
          items: [
            'รูปภาพใหญ่เกินไป',
            'ใช้ Animation มากเกินไป',
            'โหลดฟอนต์เยอะ',
            'โค้ดไม่จำเป็นเยอะ',
            'ใช้วิดีโอหนักเกินไป',
          ],
        },
        {
          type: 'heading',
          text: 'Checklist ปรับ Performance เบื้องต้น',
        },
        {
          type: 'checklist',
          items: [
            'ลดขนาดรูป',
            'ใช้ภาพ WebP',
            'ไม่ใช้วิดีโอหนักเกินไป',
            'ตรวจ Mobile Layout',
            'ใส่ Alt Text ให้รูปสำคัญ',
            'ตั้ง Title และ Description',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'เริ่มแก้จากสิ่งที่กระทบมาก',
          text: 'ถ้าคะแนนไม่ดี ให้เริ่มจากรูปภาพขนาดใหญ่ ฟอนต์ที่โหลดเยอะ และ JavaScript ที่ไม่จำเป็น ก่อนแก้รายละเอียดเล็ก ๆ',
        },
      ],
    },
    {
      title: 'ใช้เว็บไซต์เป็น Portfolio',
      blocks: [
        {
          type: 'heading',
          text: 'การใช้เว็บไซต์เป็น Portfolio',
        },
        {
          type: 'heading',
          text: 'สำหรับสมัครงาน',
        },
        {
          type: 'paragraph',
          text: 'ถ้าใช้เว็บเป็น Portfolio สมัครงาน ให้เล่าให้เห็นทั้งผลลัพธ์และกระบวนการ ไม่ใช่แค่โชว์หน้าจอสุดท้าย เช่น อธิบายว่าคุณวาง Brief อย่างไร แยก Component อย่างไร และ Deploy อย่างไร',
        },
        {
          type: 'paragraph',
          text: 'ควรมีข้อมูล:',
        },
        {
          type: 'list',
          items: [
            'About Me',
            'Skills',
            'Projects',
            'Tools',
            'Case Study',
            'Contact',
            'GitHub',
            'LinkedIn',
          ],
        },
        {
          type: 'heading',
          text: 'สำหรับรับงาน Freelance',
        },
        {
          type: 'paragraph',
          text: 'ถ้าใช้เว็บรับงาน Freelance ให้เน้นความน่าเชื่อถือ วิธีทำงาน ตัวอย่างงาน และช่องทางติดต่อที่ชัดเจน เพราะลูกค้าต้องรู้ว่าคุยกับคุณแล้วจะได้อะไร',
        },
        {
          type: 'paragraph',
          text: 'ควรมีข้อมูล:',
        },
        {
          type: 'list',
          items: [
            'บริการที่รับทำ',
            'ตัวอย่างงาน',
            'ขั้นตอนการทำงาน',
            'ราคาเริ่มต้น',
            'FAQ',
            'ช่องทางติดต่อ',
            'ฟอร์มขอใบเสนอราคา',
          ],
        },
        {
          type: 'heading',
          text: 'สำหรับเจ้าของธุรกิจ',
        },
        {
          type: 'paragraph',
          text: 'ถ้าใช้กับธุรกิจจริง ให้ตรวจว่าข้อมูลติดต่อถูกต้อง Offer ชัดเจน และปุ่ม CTA อยู่ในตำแหน่งที่ลูกค้ากดง่าย โดยเฉพาะบนมือถือ',
        },
        {
          type: 'paragraph',
          text: 'สามารถใช้เว็บเป็น:',
        },
        {
          type: 'list',
          items: [
            'Landing Page สำหรับยิงแอด',
            'หน้าเก็บ Lead',
            'หน้าแนะนำสินค้า / บริการ',
            'หน้าเพิ่มความน่าเชื่อถือ',
            'หน้าให้ลูกค้าตัดสินใจก่อนทัก',
          ],
        },
      ],
    },
    {
      title: 'Final Workshop: Deploy เว็บจริง',
      blocks: [
        {
          type: 'heading',
          text: 'Final Workshop: Deploy เว็บจริง พร้อม Checklist การวัดผล',
        },
        {
          type: 'paragraph',
          text: 'สิ่งที่คุณต้องทำ:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'ทำ Contact Form หรือ Lead Form',
            'เชื่อม Supabase เบื้องต้น หรือวางโครงสำหรับเก็บ Lead',
            'Push โค้ดขึ้น GitHub',
            'Deploy เว็บไซต์ด้วย Vercel',
            'เปิดเว็บจริงจาก URL',
            'ตรวจ Responsive',
            'ตรวจ CTA',
            'วางแผนว่าจะ Track อะไร',
            'ตรวจเว็บด้วย PageSpeed Insights',
            'เขียน Roadmap หลังเรียนว่าจะพัฒนาต่ออะไร',
          ],
        },
        {
          type: 'paragraph',
          text: 'ผลลัพธ์สุดท้าย:',
        },
        {
          type: 'list',
          items: [
            'เว็บไซต์ออนไลน์ 1 เว็บ',
            'GitHub Repository',
            'Vercel URL',
            'Lead Form หรือ Contact Form',
            'Checklist การวัดผล',
            'Roadmap การต่อยอด',
            'โปรเจกต์ที่ใช้เป็น Portfolio ได้',
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'ส่งงานให้ครบ',
          text: 'อย่างน้อยควรมี GitHub Repository, Vercel URL, คำอธิบายเว็บสั้น ๆ และรายการสิ่งที่จะพัฒนาต่อหลังเรียน',
        },
      ],
    },
  ],
}

export default lesson05
