import type { Lesson } from '../types'

const lesson02: Lesson = {
  title: 'Vibe Code Foundation',
  sections: [
    {
      title: 'Vibe Code คืออะไร',
      blocks: [
        {
          type: 'paragraph',
          text: 'Vibe Code คือแนวทางการทำงานที่ใช้ AI ช่วยสร้าง แก้ไข และพัฒนาเว็บไซต์ โดยคุณเป็นคนกำหนดทิศทาง และให้ AI ช่วยทำงานในส่วนที่ใช้เวลาเยอะ เช่น เขียนโค้ด สร้าง Layout แก้ Error ปรับข้อความ หรือเสนอแนวทาง UX/UI',
        },
        {
          type: 'paragraph',
          text: 'AI ช่วยให้คุณทำงานเร็วขึ้น แต่ AI จะให้ผลลัพธ์ดีแค่ไหนขึ้นอยู่กับความชัดเจนของโจทย์ที่คุณให้ไป',
        },
        {
          type: 'paragraph',
          text: 'ถ้า Brief ไม่ชัด เว็บที่ได้อาจดูสวย แต่ไม่ตอบโจทย์ ถ้า Brief ชัด AI จะช่วยคุณออกแบบและพัฒนาเว็บได้ตรงขึ้นมาก',
        },
      ],
    },
    {
      title: 'AI ช่วยทำเว็บไซต์ตรงไหนได้บ้าง',
      blocks: [
        {
          type: 'heading',
          text: '1. ช่วยคิดไอเดียเว็บไซต์',
        },
        {
          type: 'paragraph',
          text: 'AI ช่วยแตกไอเดียกว้าง ๆ ให้เป็นเว็บไซต์ที่ทำได้จริง เช่น:',
        },
        {
          type: 'list',
          items: [
            'Landing Page สำหรับขายคอร์ส',
            'เว็บรับทำเว็บไซต์',
            'Portfolio ส่วนตัว',
            'เว็บร้านอาหาร',
            'เว็บคลินิก',
            'เว็บรับ Lead สำหรับยิงแอด',
          ],
        },
        {
          type: 'heading',
          text: '2. ช่วยเขียน Project Brief',
        },
        {
          type: 'paragraph',
          text: 'AI ช่วยจัดข้อมูลให้เป็นเอกสารที่ชัดเจน เช่น:',
        },
        {
          type: 'list',
          items: [
            'เป้าหมายเว็บไซต์',
            'กลุ่มเป้าหมาย',
            'Pain Point',
            'จุดขาย',
            'CTA',
            'Section ที่ควรมี',
            'Mood & Tone',
          ],
        },
        {
          type: 'heading',
          text: '3. ช่วยวาง Section และ User Flow',
        },
        {
          type: 'paragraph',
          text: 'AI ช่วยจัดลำดับเนื้อหา เช่น:',
        },
        {
          type: 'list',
          items: [
            'Hero',
            'Problem',
            'Solution',
            'Service',
            'Process',
            'Portfolio',
            'Pricing',
            'FAQ',
            'Contact',
          ],
        },
        {
          type: 'heading',
          text: '4. ช่วยเขียน Copywriting',
        },
        {
          type: 'paragraph',
          text: 'AI ช่วยเขียน Headline, Subheadline, CTA, FAQ และข้อความขายในแต่ละ Section ได้หลายแบบ เพื่อให้คุณเลือก ปรับ และทำให้เข้ากับธุรกิจหรือโปรไฟล์ของคุณ',
        },
        {
          type: 'heading',
          text: '5. ช่วยสร้าง HTML Preview',
        },
        {
          type: 'paragraph',
          text: 'AI ช่วยสร้างหน้าเว็บตัวอย่างด้วย HTML และ CSS เพื่อให้คุณเห็นภาพก่อนว่าหน้าเว็บควรออกมาประมาณไหน',
        },
        {
          type: 'heading',
          text: '6. ช่วยแปลงเป็น Next.js',
        },
        {
          type: 'paragraph',
          text: 'AI ช่วยแปลง HTML Preview เป็นโปรเจกต์ Next.js และช่วยแยกหน้าเว็บเป็น Component',
        },
        {
          type: 'heading',
          text: '7. ช่วย Debug',
        },
        {
          type: 'paragraph',
          text: 'เมื่อเจอ Error คุณสามารถให้ AI ช่วยอ่าน Error อธิบายสาเหตุ และแนะนำวิธีแก้ทีละขั้นตอนได้',
        },
      ],
    },
    {
      title: 'ประเภทเว็บไซต์ที่เลือกทำได้',
      blocks: [
        {
          type: 'paragraph',
          text: 'เลือก 1 โปรเจกต์หลักสำหรับทำตลอดคอร์ส',
        },
        {
          type: 'heading',
          text: 'Option A: Landing Page ขายบริการ',
        },
        {
          type: 'paragraph',
          text: 'เหมาะสำหรับคนที่มีบริการหรืออยากรับงาน เช่น:',
        },
        {
          type: 'list',
          items: [
            'รับทำเว็บไซต์',
            'รับยิงแอด',
            'รับดูแลเพจ',
            'รับออกแบบ',
            'Consult ธุรกิจ',
            'คอร์สเรียนออนไลน์',
          ],
        },
        {
          type: 'heading',
          text: 'Option B: Portfolio Website',
        },
        {
          type: 'paragraph',
          text: 'เหมาะสำหรับคนที่อยากใช้สมัครงานหรือรับงาน เช่น:',
        },
        {
          type: 'list',
          items: [
            'Developer Portfolio',
            'UX/UI Designer Portfolio',
            'Content Creator Portfolio',
            'Digital Marketer Portfolio',
          ],
        },
        {
          type: 'heading',
          text: 'Option C: Website สำหรับธุรกิจ',
        },
        {
          type: 'paragraph',
          text: 'เหมาะกับเจ้าของกิจการ เช่น:',
        },
        {
          type: 'list',
          items: [
            'ร้านอาหาร',
            'คลินิก',
            'ร้านเสริมสวย',
            'ฟิตเนส',
            'โรงเรียนสอนพิเศษ',
            'ร้านค้าออนไลน์',
          ],
        },
        {
          type: 'heading',
          text: 'Option D: Lead Generation Website',
        },
        {
          type: 'paragraph',
          text: 'เหมาะกับคนที่ต้องการเก็บข้อมูลลูกค้า เช่น:',
        },
        {
          type: 'list',
          items: [
            'ฟอร์มขอใบเสนอราคา',
            'ฟอร์มจองคิว',
            'ฟอร์มสมัครเรียน',
            'ฟอร์มปรึกษาฟรี',
            'ฟอร์มรับไฟล์ฟรี',
          ],
        },
      ],
    },
    {
      title: 'Project Brief คืออะไร',
      blocks: [
        {
          type: 'paragraph',
          text: 'Project Brief คือเอกสารสั้น ๆ ที่บอกว่าเว็บไซต์นี้คืออะไร ทำเพื่อใคร แก้ปัญหาอะไร มีจุดขายอะไร และอยากให้ผู้ใช้ทำอะไร',
        },
        {
          type: 'paragraph',
          text: 'Brief ที่ดีช่วยให้:',
        },
        {
          type: 'list',
          items: [
            'คุณคิดโจทย์ชัดขึ้น',
            'AI สร้างผลลัพธ์ได้ตรงขึ้น',
            'คุณตรวจงานได้ง่ายขึ้น',
            'Design และ Copy ไม่หลุดจากเป้าหมาย',
            'ใช้เป็นฐานสำหรับทำเว็บจริงได้',
          ],
        },
        {
          type: 'heading',
          text: 'โครงสร้าง Project Brief',
        },
        {
          type: 'paragraph',
          text: 'Project Brief ที่ดีควรมีหัวข้อเหล่านี้:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'ชื่อโปรเจกต์',
            'ประเภทเว็บไซต์',
            'เป้าหมายของเว็บไซต์',
            'กลุ่มเป้าหมาย',
            'Pain Point ของกลุ่มเป้าหมาย',
            'จุดขายหลัก',
            'Offer หรือสิ่งที่นำเสนอ',
            'CTA หลัก',
            'CTA รอง',
            'Tone & Mood',
            'สีและสไตล์ที่ต้องการ',
            'Section ที่คาดว่าจะมี',
            'ข้อมูลที่ต้องการให้ลูกค้าส่งมา',
            'ตัวอย่างเว็บไซต์อ้างอิง',
            'สิ่งที่ไม่ต้องการให้มีในเว็บ',
            'ผลลัพธ์สุดท้ายที่ต้องการ',
          ],
        },
      ],
    },
    {
      title: 'Workshop: เลือกโปรเจกต์และเขียน Project Brief',
      blocks: [
        {
          type: 'paragraph',
          text: 'สิ่งที่คุณต้องทำ:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'เลือกประเภทเว็บไซต์ที่จะทำ',
            'เขียนเป้าหมายของเว็บไซต์',
            'ระบุกลุ่มเป้าหมาย',
            'เขียน Pain Point ของกลุ่มเป้าหมาย',
            'เขียนจุดขายหลัก',
            'เลือก CTA หลัก',
            'ใช้ AI ช่วยจัดเป็น Project Brief',
            'ตรวจและปรับ Brief ให้เข้าใจง่าย',
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'ผลลัพธ์ที่ต้องได้',
          text: 'Project Brief ของเว็บไซต์ตัวเอง 1 ชุด',
        },
      ],
    },
  ],
}

export default lesson02
