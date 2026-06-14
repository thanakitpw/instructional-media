import type { Lesson } from '../types'

const lesson04: Lesson = {
  title: 'Build Website with Next.js',
  sections: [
    {
      title: 'Next.js คืออะไร',
      blocks: [
        {
          type: 'paragraph',
          text: 'หลังจากได้ HTML Preview แล้ว คุณจะเปลี่ยนหน้าเว็บตัวอย่างให้กลายเป็นโปรเจกต์จริงที่ดูแลต่อได้',
        },
        {
          type: 'paragraph',
          text: 'Next.js คือ Framework สำหรับสร้างเว็บไซต์และ Web App ด้วย React เหมาะกับการทำเว็บไซต์จริง เพราะมีโครงสร้างชัดเจน Deploy ง่าย และทำงานร่วมกับ Vercel ได้ดี',
        },
        {
          type: 'paragraph',
          text: 'ความต่างสำคัญระหว่าง HTML Preview กับ Next.js คือ HTML Preview เหมาะกับการดูภาพรวมหน้าเดียว แต่ Next.js เหมาะกับการดูแลโปรเจกต์จริง เพราะแยกไฟล์ แยก Component จัดการรูปภาพ ตั้งค่า metadata และ Deploy ได้เป็นระบบ',
        },
        {
          type: 'paragraph',
          text: 'เปรียบเทียบง่าย ๆ:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'HTML Preview = หน้าเว็บตัวอย่างที่ทำให้เห็นภาพ\nNext.js = โปรเจกต์จริงที่พร้อมพัฒนาและ Deploy\nComponent = ชิ้นส่วนของหน้าเว็บ เช่น Hero, Pricing, FAQ\nPage = หน้าหลักของเว็บไซต์\nDeploy = การนำเว็บขึ้นออนไลน์',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'มอง Next.js เป็นโครงงานจริง',
          text: 'เมื่อเข้า Next.js แล้ว ควรเริ่มคิดแบบโปรเจกต์จริง เช่น ไฟล์ไหนรับผิดชอบอะไร Component ไหนแก้ข้อความไหน และถ้า Error เกิดขึ้นควรตรวจตรงไหนก่อน',
        },
      ],
    },
    {
      title: 'โครงสร้างโปรเจกต์ Next.js',
      blocks: [
        {
          type: 'code',
          lang: 'text',
          code: 'my-website/\n├── app/\n│   ├── page.tsx\n│   ├── layout.tsx\n│   └── globals.css\n├── components/\n│   ├── Navbar.tsx\n│   ├── Hero.tsx\n│   ├── Problem.tsx\n│   ├── Services.tsx\n│   ├── Pricing.tsx\n│   ├── FAQ.tsx\n│   └── Footer.tsx\n├── public/\n│   └── images/\n├── package.json\n└── README.md',
        },
        {
          type: 'paragraph',
          text: 'ไฟล์สำคัญ:',
        },
        {
          type: 'list',
          items: [
            '`app/page.tsx` คือหน้าหลักของเว็บไซต์',
            '`app/layout.tsx` คือโครงหลักของเว็บ เช่น metadata, font และ layout หลัก',
            '`app/globals.css` คือไฟล์ CSS หลัก',
            '`components/` คือโฟลเดอร์เก็บส่วนประกอบของหน้าเว็บ',
            '`public/` คือโฟลเดอร์เก็บรูปภาพ โลโก้ ไอคอน หรือไฟล์ Static',
            '`package.json` คือไฟล์เก็บข้อมูลโปรเจกต์และคำสั่งสำหรับรันเว็บ',
          ],
        },
        {
          type: 'table',
          head: ['ไฟล์/โฟลเดอร์', 'ใช้เมื่อไร', 'ตัวอย่างสิ่งที่แก้'],
          rows: [
            ['app/page.tsx', 'เมื่อต้องจัดลำดับ Section หน้าแรก', 'เพิ่ม/ลบ Component หรือเปลี่ยนลำดับ Hero, FAQ, Footer'],
            ['app/layout.tsx', 'เมื่อต้องตั้งค่า layout รวมของเว็บ', 'metadata, font, โครง HTML หลัก'],
            ['app/globals.css', 'เมื่อต้องตั้งค่า style รวม', 'สีพื้นฐาน, body, utility เพิ่มเติม'],
            ['components/', 'เมื่อต้องแก้ Section เฉพาะจุด', 'Hero.tsx, Pricing.tsx, FAQ.tsx'],
            ['public/', 'เมื่อต้องใส่รูป โลโก้ หรือไฟล์ static', 'logo.png, hero-image.webp'],
          ],
        },
      ],
    },
    {
      title: 'แปลง HTML Preview เป็น Component',
      blocks: [
        {
          type: 'paragraph',
          text: 'HTML Preview ที่ได้จากขั้นก่อนหน้ามักเป็นไฟล์เดียว แต่เว็บจริงควรแยกเป็น Component',
        },
        {
          type: 'flow',
          steps: [
            'HTML Preview ทั้งหน้า',
            'Navbar',
            'Hero',
            'Problem',
            'Solution',
            'Services',
            'Process',
            'Portfolio',
            'Pricing',
            'FAQ',
            'ContactCTA',
            'Footer',
          ],
        },
        {
          type: 'paragraph',
          text: 'ข้อดีของการแยก Component:',
        },
        {
          type: 'list',
          items: [
            'โค้ดอ่านง่ายขึ้น',
            'แก้เฉพาะส่วนได้ง่าย',
            'เพิ่มหรือลบ Section ได้ง่าย',
            'ทำงานร่วมกับ AI ได้แม่นขึ้น',
            'ลดความเสี่ยงที่ AI จะแก้ทั้งไฟล์จนพัง',
          ],
        },
        {
          type: 'paragraph',
          text: 'หลักง่าย ๆ คือ 1 Section ควรเป็น 1 Component ก่อน เช่น `Hero.tsx` ดูแลเฉพาะ Hero และ `FAQ.tsx` ดูแลเฉพาะคำถามที่พบบ่อย เมื่ออยากแก้ส่วนไหนก็ส่งให้ AI ดูเฉพาะไฟล์นั้น',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'อย่าสั่งกว้างเกินไปหลังแยก Component',
          text: 'ถ้าคุณสั่งว่า “ช่วยปรับเว็บทั้งหมดให้ดีขึ้น” AI อาจแก้หลายไฟล์พร้อมกันจนตรวจยาก ให้สั่งทีละส่วน เช่น “แก้เฉพาะ Hero ให้ CTA ชัดขึ้น”',
        },
        {
          type: 'heading',
          text: 'Prompt สำหรับแปลง HTML เป็น Next.js',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ฉันมี HTML Preview ของ Landing Page ด้านล่าง\nช่วยแปลงเป็น Next.js App Router โดยแยกเป็น Component ให้เรียบร้อย\n\nเงื่อนไข:\n- ใช้ TypeScript\n- ใช้ Tailwind CSS\n- แยก Component เป็นไฟล์ในโฟลเดอร์ components\n- หน้าแรกอยู่ที่ app/page.tsx\n- รักษา Layout, สี, ข้อความ และโครงสร้างเดิมให้ใกล้เคียงที่สุด\n- โค้ดต้องอ่านง่ายและแก้ไขต่อได้\n- ถ้ามีส่วนที่ควรปรับให้เหมาะกับ Next.js ให้แนะนำก่อน\n\nHTML Preview:\n[วางโค้ด HTML ตรงนี้]',
        },
      ],
    },
    {
      title: 'แก้ข้อความ รูป สี และ Section ด้วย AI',
      blocks: [
        {
          type: 'paragraph',
          text: 'หลังจากแปลงเป็น Next.js แล้ว ให้สั่ง AI แบบเจาะจงขึ้น',
        },
        {
          type: 'paragraph',
          text: 'การสั่งแบบเจาะจงช่วยลดความเสี่ยงที่ AI จะเปลี่ยนโค้ดส่วนอื่นโดยไม่จำเป็น และทำให้คุณตรวจผลลัพธ์ได้ง่ายขึ้น',
        },
        {
          type: 'heading',
          text: 'ตัวอย่าง Prompt แก้ Hero',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ช่วยแก้ Hero Section ให้ข้อความดูขายมากขึ้น\nกลุ่มเป้าหมายคือเจ้าของธุรกิจ SME\nขอ Headline 5 แบบ และเลือกแบบที่เหมาะที่สุดมาใส่ใน Component Hero.tsx',
        },
        {
          type: 'heading',
          text: 'ตัวอย่าง Prompt ปรับสี',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ช่วยปรับสีของเว็บให้ใช้โทนส้ม ขาว ดำ ดูพรีเมียมขึ้น\nแต่ยังต้องอ่านง่ายบนมือถือ',
        },
        {
          type: 'heading',
          text: 'ตัวอย่าง Prompt เพิ่ม FAQ',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ช่วยเพิ่ม FAQ Section จำนวน 6 คำถาม\nเน้นตอบข้อกังวลของลูกค้าที่อยากจ้างทำเว็บไซต์',
        },
        {
          type: 'table',
          head: ['งานที่ต้องการ', 'ควรส่งข้อมูลอะไรให้ AI'],
          rows: [
            ['แก้ข้อความ Hero', 'กลุ่มเป้าหมาย, Offer, CTA, ข้อความเดิม'],
            ['ปรับสี', 'สีหลัก สีรอง ตัวอย่าง mood และจุดที่ต้องการให้ CTA เด่น'],
            ['เพิ่ม FAQ', 'ข้อกังวลของลูกค้า, บริการที่ขาย, น้ำเสียงที่ต้องการ'],
            ['แก้ Responsive', 'ขนาดหน้าจอที่พัง, ภาพหรือข้อความที่ล้น, ไฟล์ Component ที่เกี่ยวข้อง'],
            ['แก้ Error', 'คำสั่งที่รัน, Error หลัก, ไฟล์ที่เพิ่งแก้'],
          ],
        },
      ],
    },
    {
      title: 'พื้นฐาน Git และ GitHub',
      blocks: [
        {
          type: 'paragraph',
          text: 'Git คือระบบเก็บประวัติการแก้ไขโค้ด ทำให้คุณย้อนกลับ ดูประวัติ หรือบันทึกจุดสำคัญของงานได้',
        },
        {
          type: 'paragraph',
          text: 'ให้คิดว่า Commit คือจุดบันทึกงานที่สำคัญ เมื่อเว็บเริ่มใช้งานได้หรือแก้ Section สำคัญเสร็จ ควร Commit ไว้ เพื่อให้รู้ว่าโปรเจกต์เดินมาถึงจุดไหนแล้ว',
        },
        {
          type: 'paragraph',
          text: 'GitHub คือที่เก็บโปรเจกต์ออนไลน์ และใช้เชื่อมต่อกับ Vercel เพื่อ Deploy เว็บได้',
        },
        {
          type: 'paragraph',
          text: 'คำที่ควรรู้:',
        },
        {
          type: 'definitions',
          items: [
            { term: 'git init', desc: 'เริ่มใช้ Git ในโปรเจกต์' },
            { term: 'git add .', desc: 'เลือกไฟล์ที่จะบันทึก' },
            { term: 'git commit', desc: 'บันทึกจุดสำคัญของงาน' },
            { term: 'git push', desc: 'ส่งโค้ดขึ้น GitHub' },
            { term: 'Repository', desc: 'ที่เก็บโปรเจกต์' },
          ],
        },
        {
          type: 'paragraph',
          text: 'คำสั่งพื้นฐาน:',
        },
        {
          type: 'code',
          lang: 'bash',
          code: 'git init\ngit add .\ngit commit -m "Initial website project"\ngit branch -M main\ngit remote add origin [GitHub Repository URL]\ngit push -u origin main',
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่าง Commit Message:',
        },
        {
          type: 'code',
          lang: 'bash',
          code: 'git commit -m "Add hero section"\ngit commit -m "Update pricing content"\ngit commit -m "Fix mobile responsive layout"\ngit commit -m "Add contact form section"',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Commit Message ที่ดี',
          text: 'ควรบอกว่าทำอะไร เช่น Add hero section หรือ Fix mobile layout ไม่ควรใช้ข้อความกว้าง ๆ เช่น update หรือ final-final',
        },
      ],
    },
    {
      title: 'อ่าน Error และให้ AI ช่วย Debug',
      blocks: [
        {
          type: 'paragraph',
          text: 'Error เป็นเรื่องปกติในการพัฒนาเว็บ สิ่งสำคัญคือคุณต้องส่งข้อมูลให้ AI ครบพอ',
        },
        {
          type: 'paragraph',
          text: 'เวลาเจอ Error อย่าเพิ่งแก้สุ่ม ให้แยกก่อนว่า Error เกิดตอนติดตั้ง ตอนรันเว็บ ตอน build ตอนเปิดหน้าเว็บ หรือหลังแก้ไฟล์ใดไฟล์หนึ่ง เพราะแต่ละแบบมีวิธีตรวจต่างกัน',
        },
        {
          type: 'paragraph',
          text: 'ข้อมูลที่ควรส่งให้ AI:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'กำลังทำอะไร',
            'Error ที่ขึ้นคืออะไร',
            'ไฟล์ที่เกี่ยวข้องคือไฟล์ไหน',
            'สิ่งที่ลองแก้ไปแล้วคืออะไร',
          ],
        },
        {
          type: 'heading',
          text: 'Prompt Debug',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ตอนนี้ฉันกำลังรันโปรเจกต์ Next.js แล้วเจอ Error ด้านล่าง\n\nสิ่งที่ทำ:\n- แก้ไฟล์ components/Hero.tsx\n- รันคำสั่ง npm run dev\n\nError:\n[วาง Error ตรงนี้]\n\nช่วยอธิบายว่า Error นี้เกิดจากอะไรแบบเข้าใจง่าย\nและบอกวิธีแก้ทีละขั้นตอน\nถ้าต้องแก้โค้ด ช่วยบอกด้วยว่าต้องแก้ไฟล์ไหน',
        },
        {
          type: 'table',
          head: ['อาการ', 'จุดที่ควรตรวจ'],
          rows: [
            ['รัน npm run dev ไม่ได้', 'package, dependency, port, syntax error'],
            ['เปิดหน้าแล้ว layout พัง', 'Component ล่าสุดที่แก้, className, responsive class'],
            ['รูปไม่ขึ้น', 'path ใน public, ชื่อไฟล์, import หรือ src'],
            ['Build ไม่ผ่าน', 'TypeScript error, unused import, missing export'],
            ['Deploy แล้วพังแต่ local ใช้ได้', 'Environment Variables, build log, path ที่ต่างระหว่าง local/production'],
          ],
        },
      ],
    },
    {
      title: 'Checklist ก่อน Deploy',
      blocks: [
        {
          type: 'paragraph',
          text: 'Checklist นี้ควรทำก่อน Push งานขึ้น Deploy เพราะปัญหาหลายอย่างแก้ในเครื่องได้ง่ายกว่ารอให้ Vercel build แล้วค่อยไล่ log ภายหลัง',
        },
        {
          type: 'checklist',
          items: [
            'รันเว็บในเครื่องได้',
            'ไม่มี Error ใน Terminal',
            'หน้าเว็บโหลดครบทุก Section',
            'รูปภาพแสดงถูกต้อง',
            'ปุ่ม CTA กดได้',
            'Responsive บนมือถือพอใช้ได้',
            'ไม่มีข้อความ Placeholder',
            'ข้อมูลติดต่อถูกต้อง',
            'Title และ Description ของเว็บตั้งค่าแล้ว',
            'Commit ล่าสุดเรียบร้อย',
            'Push ขึ้น GitHub แล้ว',
          ],
        },
      ],
    },
    {
      title: 'Workshop: ขึ้นโปรเจกต์ Next.js จาก HTML Preview',
      blocks: [
        {
          type: 'paragraph',
          text: 'สิ่งที่คุณต้องทำ:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'สร้างโปรเจกต์ Next.js',
            'นำ HTML Preview มาให้ AI ช่วยแปลง',
            'แยก Component หลัก',
            'ปรับข้อความ สี รูป และ Section',
            'รันเว็บในเครื่อง',
            'แก้ Error เบื้องต้น',
            'Commit โค้ด',
            'Push ขึ้น GitHub',
          ],
        },
        {
          type: 'paragraph',
          text: 'ผลลัพธ์ที่ต้องได้:',
        },
        {
          type: 'list',
          items: [
            'โปรเจกต์ Next.js ที่รันได้ในเครื่อง',
            'GitHub Repository',
          ],
        },
      ],
    },
  ],
}

export default lesson04
