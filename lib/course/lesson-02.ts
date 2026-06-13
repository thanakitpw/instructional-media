import type { Lesson } from './types'

const lesson02: Lesson = {
  title: 'API Integration Overview',
  sections: [
    {
      title: 'บทนี้เรียนไปเพื่ออะไร',
      blocks: [
        {
          type: 'paragraph',
          text: 'หลังจากเห็นภาพรวมของระบบแล้ว บทนี้จะลงรายละเอียดว่าแต่ละส่วนในระบบทำหน้าที่อะไร และทำไมการแยกบทบาทให้ชัดจึงสำคัญ',
        },
        {
          type: 'paragraph',
          text: 'เวลาสร้างเว็บหรือแอพให้ลูกค้าดู สิ่งที่ลูกค้าเห็นคือหน้าจอ เช่น form, dashboard หรือ mobile screen แต่สิ่งที่ทำให้ระบบใช้งานได้จริงคือการเชื่อมต่อหลังบ้านทั้งหมด ถ้าเราเข้าใจแค่หน้าจอ แต่ไม่เข้าใจ API และข้อมูลที่วิ่งอยู่ข้างหลัง เวลาต้องแก้ปัญหาหรือส่งมอบงานจะลำบาก',
        },
      ],
    },
    {
      title: 'ส่วนประกอบหลักของระบบ',
      blocks: [
        {
          type: 'paragraph',
          text: 'ระบบ Lead Integration Mini System มีส่วนประกอบหลัก 6 ส่วน แต่ละส่วนมีหน้าที่ต่างกัน และควรแยกความรับผิดชอบให้ชัดเจน',
        },
        {
          type: 'flow',
          steps: [
            'Web App',
            'Mobile App',
            'API',
            'Back-End Logic',
            'Database',
            'External System',
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          text: 'เป้าหมายของบทนี้คือให้ผู้เรียนมองระบบเป็นชั้น ๆ ได้ เมื่อเกิดปัญหาจะได้ถามถูกว่า error อยู่ที่ client, API, back-end, database หรือระบบภายนอก',
        },
      ],
    },
    {
      title: 'Front-End / Web App',
      blocks: [
        {
          type: 'paragraph',
          text: 'Front-End คือส่วนที่ผู้ใช้เห็นและกดใช้งาน ในระบบตัวอย่างนี้คือ Lead Form และ Lead Dashboard',
        },
        {
          type: 'paragraph',
          text: 'หน้าที่ของ Web App ไม่ใช่แค่ทำหน้าจอให้สวย แต่ต้องรับ input จากผู้ใช้ จัดข้อมูลให้อยู่ในรูปแบบที่ API ต้องการ เรียก API ให้ถูก endpoint และแสดงผลลัพธ์ให้ผู้ใช้เข้าใจ',
        },
        {
          type: 'list',
          items: [
            'แสดงฟอร์มให้ผู้ใช้กรอกข้อมูล',
            'เก็บ input จากผู้ใช้',
            'ตรวจข้อมูลเบื้องต้น เช่น ช่อง name หรือ phone ว่างหรือไม่',
            'สร้าง request body เป็น JSON',
            'เรียก API ด้วย method ที่ถูกต้อง',
            'แสดง loading, success และ error state',
            'ดึงข้อมูลจาก API มาแสดงใน dashboard',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Front-End ไม่ควรทำงานที่ต้องใช้ความลับ เช่น ใส่ Secret Key หรือเรียก API ภายนอกที่ต้องใช้ private token โดยตรง เพราะโค้ดฝั่ง Front-End มีโอกาสถูกเปิดดูได้',
        },
      ],
    },
    {
      title: 'Mobile App',
      blocks: [
        {
          type: 'paragraph',
          text: 'Mobile App ทำหน้าที่คล้าย Web App คือรับข้อมูลจากผู้ใช้และเรียก API แต่มีข้อจำกัดเพิ่มเติม เพราะ runtime, network และวิธีทดสอบไม่เหมือน browser บนคอมพิวเตอร์',
        },
        {
          type: 'list',
          items: [
            'ไม่มี browser URL เหมือน Web App',
            'การเรียก localhost มีความหมายต่างจากบนคอมพิวเตอร์',
            'ต้องทดสอบกับ emulator, simulator หรือมือถือจริง',
            'อาจเจอปัญหา network permission',
            'ต้องจัดการ API URL ตาม environment ให้ดี',
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          text: 'หลักคิดสำคัญคือ Mobile App ไม่ควรมี business logic แยกจาก Web App โดยไม่จำเป็น ถ้าเป็นการสร้าง Lead เหมือนกัน ควรเรียก API เดียวกันและใช้ contract เดียวกัน',
        },
      ],
    },
    {
      title: 'API',
      blocks: [
        {
          type: 'paragraph',
          text: 'API คือช่องทางที่ client ใช้คุยกับระบบหลังบ้าน ในระบบ Lead นี้ endpoint สำคัญคือ GET /api/leads, POST /api/leads และ PATCH /api/leads/:id',
        },
        {
          type: 'table',
          head: ['Method', 'Endpoint', 'หน้าที่'],
          rows: [
            ['GET', '/api/leads', 'ดึงรายการ Lead ทั้งหมด'],
            ['POST', '/api/leads', 'สร้าง Lead ใหม่'],
            ['PATCH', '/api/leads/:id', 'แก้ไขสถานะ Lead'],
          ],
        },
        {
          type: 'paragraph',
          text: 'API ไม่ได้มีหน้าที่แค่รับส่งข้อมูล แต่ต้องกำหนดข้อตกลงให้ชัด เช่น endpoint คืออะไร ใช้ method อะไร ต้องส่ง headers อะไร request body ต้องมี field อะไร response จะมีรูปแบบอย่างไร และ error จะตอบกลับอย่างไร',
        },
        {
          type: 'heading',
          text: 'ตัวอย่าง Error Response ที่อ่านง่าย',
        },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "success": false,
  "message": "Phone is required",
  "error": {
    "field": "phone",
    "code": "REQUIRED_FIELD"
  }
}`,
        },
        {
          type: 'paragraph',
          text: 'ถ้า error response ไม่ชัด Front-End และ Mobile App จะจัดการ error ยาก และคน debug ก็ต้องเสียเวลามากขึ้น',
        },
      ],
    },
    {
      title: 'Back-End Logic',
      blocks: [
        {
          type: 'paragraph',
          text: 'Back-End Logic คือส่วนที่อยู่หลัง API Endpoint ทำหน้าที่ตัดสินใจและจัดการข้อมูล เช่น ตรวจข้อมูล บันทึกข้อมูล เรียก database และส่งข้อมูลต่อไปยังระบบภายนอก',
        },
        {
          type: 'heading',
          text: 'ตัวอย่างลำดับการทำงานของ POST /api/leads',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'รับ request body',
            'ตรวจว่า name, phone และ interest ครบหรือไม่',
            'ปรับรูปแบบข้อมูล เช่น trim ช่องว่าง',
            'บันทึกข้อมูลลง database',
            'ส่งข้อมูลต่อไปยัง webhook หรือ Google Sheets',
            'ส่ง response กลับไปยัง client',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'จุดที่ต้องระวังคือไม่ควรผูกงานทุกอย่างให้ล้มพร้อมกันโดยไม่คิด เช่น ถ้าบันทึก Lead ลง database สำเร็จ แต่ส่ง Google Sheets ไม่สำเร็จ ระบบควรตอบอย่างไร ต้องมี log ไหม ต้อง retry ไหม ประเด็นนี้จะลงรายละเอียดในบท Interface Data',
        },
      ],
    },
    {
      title: 'Database',
      blocks: [
        {
          type: 'paragraph',
          text: 'Database คือแหล่งเก็บข้อมูลหลักของระบบ ในระบบ Lead อาจมี table ชื่อ leads สำหรับเก็บข้อมูลลูกค้าที่ส่งเข้ามาจาก Web App หรือ Mobile App',
        },
        {
          type: 'code',
          lang: 'text',
          code: `leads
- id
- name
- phone
- interest
- source
- status
- created_at`,
        },
        {
          type: 'paragraph',
          text: 'สำหรับคอร์ส 1 วัน ไม่จำเป็นต้องลงลึกเรื่อง database design มาก แต่ผู้เรียนควรเข้าใจว่า API และ database ต้องคุยกันผ่าน field ที่ตรงกัน ถ้า API ส่ง phone แต่ database ใช้ tel ต้องมีการ mapping หรือแปลงชื่อ field ให้ถูก',
        },
      ],
    },
    {
      title: 'External System',
      blocks: [
        {
          type: 'paragraph',
          text: 'External System คือระบบปลายทางที่อยู่นอก app ของเรา เช่น Google Sheets, CRM, LINE Notification, ERP หรือ Webhook',
        },
        {
          type: 'paragraph',
          text: 'ระบบเหล่านี้มักมี API Contract ของตัวเอง ดังนั้นข้อมูลที่เราเก็บในระบบเราอาจไม่ตรงกับข้อมูลที่ปลายทางต้องการ 100% จุดนี้คือที่มาของ Data Mapping',
        },
        {
          type: 'table',
          head: ['ระบบเราใช้', 'ระบบปลายทางต้องการ'],
          rows: [
            ['name', 'full_name'],
            ['phone', 'mobile_number'],
            ['interest', 'service'],
          ],
        },
        {
          type: 'paragraph',
          text: 'งาน integration จึงไม่ใช่แค่ส่ง JSON ออกไป แต่ต้องรู้ว่าปลายทางต้องการข้อมูลรูปแบบไหน ต้องใช้ API Key หรือ Token ไหม ถ้าส่งไม่สำเร็จจะทำอย่างไร ต้องเก็บ log หรือแจ้งเตือนใครหรือไม่',
        },
      ],
    },
    {
      title: 'Flow หลักของระบบ',
      blocks: [
        {
          type: 'flow',
          steps: [
            'Web App / Mobile App',
            'API Endpoint',
            'Back-End Logic',
            'Database',
            'Response กลับไปที่ Client',
          ],
        },
        {
          type: 'heading',
          text: 'อ่าน Flow นี้แบบงานจริง',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'ผู้ใช้กรอกฟอร์มบน Web หรือ Mobile',
            'Client สร้าง JSON payload',
            'Client เรียก API เช่น POST /api/leads',
            'API ส่งข้อมูลเข้า Back-End Logic',
            'Back-End ตรวจและบันทึกข้อมูล',
            'Back-End ส่ง response กลับ',
            'Client ใช้ response เพื่อแสดงผลสำเร็จหรือ error',
          ],
        },
      ],
    },
    {
      title: 'Flow การส่งข้อมูลออกไปอีกระบบ',
      blocks: [
        {
          type: 'flow',
          steps: [
            'Lead Form',
            'Back-End API',
            'Database',
            'Google Sheets / CRM / Webhook / Notification',
          ],
        },
        {
          type: 'paragraph',
          text: 'ก่อนเชื่อมระบบภายนอก ต้องตอบคำถามพื้นฐานให้ได้ก่อน เพราะคำตอบเหล่านี้จะกลายเป็น Data Mapping, API Contract และ Debug Checklist',
        },
        {
          type: 'checklist',
          items: [
            'ส่งข้อมูลไปที่ไหน',
            'ปลายทางต้องการ field อะไร',
            'ต้องใช้ API Key หรือ Token ไหม',
            'ถ้าส่งไม่สำเร็จจะทำอย่างไร',
            'ต้องเก็บ log ไหม',
            'ต้องแจ้งเตือนใครหรือไม่',
          ],
        },
      ],
    },
    {
      title: 'Key Concept: API คือข้อตกลง ไม่ใช่แค่ URL',
      blocks: [
        {
          type: 'callout',
          variant: 'key',
          text: 'API คือข้อตกลงกลางว่าระบบหนึ่งจะส่งข้อมูลอะไร ไปที่ไหน ด้วยรูปแบบไหน และจะได้รับคำตอบกลับมาอย่างไร',
        },
        {
          type: 'paragraph',
          text: 'ถ้า API Contract ชัด ทุกฝั่งทำงานง่ายขึ้น เพราะ Front-End รู้ว่าจะส่ง payload แบบไหน Mobile App ใช้ logic เดียวกับ Web ได้ Back-End validate ข้อมูลได้ตรงจุด คนทดสอบ API รู้ expected result และคน debug แยกปัญหาได้เร็วขึ้น',
        },
      ],
    },
    {
      title: 'Workshop ในบทนี้',
      blocks: [
        {
          type: 'paragraph',
          text: 'บทนี้ยังไม่ต้องเขียน integration เต็ม ให้เริ่มจากการอ่านและตรวจ API Contract ก่อน เพราะเป็นพื้นฐานของการคุยกับ Developer, Vendor หรือ AI ให้เข้าใจตรงกัน',
        },
        {
          type: 'heading',
          text: 'โจทย์',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'อ่าน endpoint POST /api/leads',
            'ดู request body ตัวอย่าง',
            'ระบุว่า field ไหน required และ field ไหน optional',
            'เขียน response success ที่คาดหวัง',
            'เขียน response error กรณีไม่ส่ง phone',
          ],
        },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "name": "สมชาย ใจดี",
  "phone": "0890000000",
  "interest": "Website",
  "source": "Web Form"
}`,
        },
        {
          type: 'table',
          head: ['Field', 'Required', 'เหตุผล'],
          rows: [
            ['name', 'yes', 'ต้องรู้ชื่อลูกค้า'],
            ['phone', 'yes', 'ทีมขายต้องติดต่อกลับ'],
            ['interest', 'yes', 'ต้องรู้ว่าลูกค้าสนใจบริการอะไร'],
            ['source', 'no', 'ใช้วิเคราะห์แหล่งที่มา แต่ระบบยังทำงานได้ถ้าไม่มี'],
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          text: 'Expected result: ผู้เรียนควรอธิบายได้ว่า API นี้ต้องการข้อมูลอะไร และเมื่อข้อมูลไม่ครบควรตอบ error อย่างไร',
        },
      ],
    },
    {
      title: 'สรุปท้ายบท',
      blocks: [
        {
          type: 'checklist',
          items: [
            'Front-End และ Mobile App เป็น client ที่เรียก API',
            'API เป็นข้อตกลงกลางระหว่าง client กับระบบหลังบ้าน',
            'Back-End Logic เป็นที่ตรวจข้อมูล บันทึกข้อมูล และเชื่อมระบบภายนอก',
            'Database เป็นแหล่งข้อมูลหลักของระบบ',
            'External System ต้องมี Data Mapping และ Error Handling ที่ชัดเจน',
            'Workshop หลักของคอร์สควรใช้ API ชุดเดียวกันทั้ง Web และ Mobile เพื่อให้เห็นภาพงานจริง',
          ],
        },
      ],
    },
  ],
}

export default lesson02
