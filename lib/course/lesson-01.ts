import type { Lesson } from './types'

const lesson01: Lesson = {
  title: 'ภาพรวมระบบและ Case Study',
  sections: [
    {
      title: 'บทนี้เรียนไปเพื่ออะไร',
      blocks: [
        {
          type: 'paragraph',
          text: 'ก่อนลงมือทดสอบ API หรือดูโปรเจกต์จริง ผู้เรียนต้องเห็นภาพก่อนว่าระบบหนึ่งระบบประกอบด้วยอะไรบ้าง และแต่ละส่วนคุยกันอย่างไร',
        },
        {
          type: 'paragraph',
          text: 'เวลาทำงานจริง เรามักไม่ได้เจอโค้ดที่แยกเป็นบทเรียนสวย ๆ แต่จะเจอโปรเจกต์ที่มีหลายส่วนปนกัน เช่น หน้าเว็บ ฟอร์ม API, database, environment variables, dashboard และระบบภายนอก ถ้ายังมองภาพรวมไม่ออก เวลาเกิดปัญหาจะไล่ยากมาก เพราะไม่รู้ว่าควรเริ่มตรวจจากจุดไหน',
        },
        {
          type: 'paragraph',
          text: 'บทนี้จึงไม่ได้เน้นเขียนโค้ดทันที แต่เน้นสร้าง mental model ว่าเมื่อผู้ใช้กรอกฟอร์มหนึ่งครั้ง ข้อมูลเดินทางผ่านอะไรบ้าง ตั้งแต่หน้าเว็บหรือมือถือ ไปจนถึง database และระบบปลายทาง',
        },
      ],
    },
    {
      title: 'Case Study: Lead Integration Mini System',
      blocks: [
        {
          type: 'paragraph',
          text: 'ตลอดคอร์สนี้เราจะใช้ระบบตัวอย่างเดียว คือ Lead Integration Mini System เพื่อให้ทุกบทต่อเนื่องกันและไม่ต้องเปลี่ยนโจทย์ใหม่ตลอดเวลา',
        },
        {
          type: 'paragraph',
          text: 'ระบบนี้จำลองงานที่เจอได้บ่อยในธุรกิจจริง เช่น ลูกค้าเข้าหน้า landing page แล้วกรอกข้อมูลสนใจบริการทำเว็บไซต์ ทีมขายต้องเห็นข้อมูลใน dashboard และบางธุรกิจต้องการให้ข้อมูลเดียวกันถูกส่งต่อไปยัง Google Sheets, CRM, Webhook หรือระบบแจ้งเตือน',
        },
        { type: 'heading', text: 'ข้อมูล Lead ตัวอย่าง' },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "name": "สมชาย ใจดี",
  "phone": "0890000000",
  "interest": "Website",
  "source": "Landing Page"
}`,
        },
        {
          type: 'paragraph',
          text: 'ข้อมูลชุดนี้ดูเรียบง่าย แต่ในระบบจริงมันทำให้เราเรียนรู้เรื่องสำคัญได้ครบ ตั้งแต่การส่งข้อมูลจากหน้าจอ การตรวจข้อมูลใน API การบันทึกลง database ไปจนถึงการส่งข้อมูลต่อไปยังระบบอื่น',
        },
        {
          type: 'list',
          items: [
            'Front-End ต้องรู้ว่าจะส่ง field อะไรไป API',
            'API ต้องรู้ว่า field ไหนจำเป็น และ field ไหน optional',
            'Back-End ต้อง validate ข้อมูลก่อนบันทึก',
            'Database ต้องมี schema รองรับข้อมูล',
            'Dashboard ต้องดึงข้อมูลกลับมาแสดง',
            'Mobile App ต้องส่งข้อมูลในรูปแบบเดียวกับ Web App',
            'External System ต้องรับข้อมูลที่ map ถูกต้อง',
          ],
        },
      ],
    },
    {
      title: 'ภาพรวมการเดินทางของข้อมูล',
      blocks: [
        {
          type: 'paragraph',
          text: 'เมื่อผู้ใช้กรอกฟอร์ม Lead หนึ่งครั้ง ข้อมูลจะไม่ได้กระโดดจากหน้าเว็บไปถึง database ทันที แต่จะผ่านหลายชั้น แต่ละชั้นมีหน้าที่ต่างกัน และแต่ละชั้นเป็นจุดที่อาจเกิด error ได้',
        },
        {
          type: 'flow',
          steps: [
            'User',
            'Web Form หรือ Mobile App',
            'API Endpoint',
            'Back-End Logic',
            'Database',
            'Dashboard หรือ External System',
          ],
        },
        {
          type: 'definitions',
          items: [
            {
              term: 'User',
              desc: 'ผู้ที่กรอกข้อมูล เช่น ลูกค้าที่สนใจบริการ',
            },
            {
              term: 'Web Form / Mobile App',
              desc: 'หน้าจอที่รับข้อมูลจากผู้ใช้ หน้าที่หลักคือเก็บ input ให้ครบ จัดข้อมูลเป็น JSON และส่งไปที่ API',
            },
            {
              term: 'API Endpoint',
              desc: 'จุดรับข้อมูลของระบบ เช่น POST /api/leads เปรียบเหมือนประตูทางเข้าที่ client ใช้ส่ง request เข้ามา',
            },
            {
              term: 'Back-End Logic',
              desc: 'ส่วนที่ตรวจสอบข้อมูล ตัดสินใจว่าจะบันทึกหรือไม่ และจัดการงานที่ไม่ควรทำใน Front-End เช่น ใช้ secret key หรือส่งต่อข้อมูลไปยังระบบภายนอก',
            },
            {
              term: 'Database',
              desc: 'ที่เก็บข้อมูลหลักของระบบ เพื่อให้ dashboard หรือ API อื่นดึงไปใช้ต่อได้',
            },
            {
              term: 'Dashboard / External System',
              desc: 'ปลายทางที่มนุษย์หรือระบบอื่นใช้ข้อมูลนั้น เช่น ทีมขายดูรายการ Lead หรือระบบส่งแจ้งเตือนไปยังทีมงาน',
            },
          ],
        },
      ],
    },
    {
      title: 'ทำไมต้องใช้ API เป็นตัวกลาง',
      blocks: [
        {
          type: 'paragraph',
          text: 'ถ้า Web App ต้องบันทึกข้อมูลลง database โดยตรง หรือ Mobile App ต้องคุยกับ Google Sheets โดยตรง ระบบจะควบคุมยากและเสี่ยงเรื่องความปลอดภัย เพราะข้อมูลสำคัญและกฎทางธุรกิจจะกระจายอยู่หลายที่',
        },
        {
          type: 'paragraph',
          text: 'API ทำหน้าที่เป็นจุดกลางที่รับ request จากหลาย client แล้วจัดการกฎของระบบไว้ที่เดียว ทำให้ Web App, Mobile App และระบบภายนอกทำงานร่วมกันได้โดยใช้ข้อตกลงเดียวกัน',
        },
        {
          type: 'list',
          items: [
            'รวมกฎการรับข้อมูลไว้จุดเดียว',
            'ทำให้ Web App และ Mobile App ใช้ logic เดียวกัน',
            'ซ่อนข้อมูลสำคัญ เช่น Database URL หรือ Secret Key ไม่ให้หลุดไปฝั่งผู้ใช้',
            'ทำให้เปลี่ยนระบบปลายทางได้ง่ายขึ้น เช่น วันนี้ส่ง Google Sheets วันหน้าเปลี่ยนเป็น CRM',
            'ตรวจสอบ log และ error ได้เป็นระบบ',
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          text: 'ถ้า Web App และ Mobile App ส่งข้อมูลไปที่ POST /api/leads เหมือนกัน ทั้งสองแอพไม่จำเป็นต้องรู้ว่าเบื้องหลังบันทึกลง database แบบไหน หรือส่งต่อไป Google Sheets อย่างไร สิ่งที่ client ต้องรู้มีแค่ API Contract ว่าต้องส่งข้อมูลอะไร และจะได้ response แบบไหนกลับมา',
        },
      ],
    },
    {
      title: 'API Contract แบบเริ่มต้น',
      blocks: [
        {
          type: 'paragraph',
          text: 'API Contract คือข้อตกลงร่วมกันระหว่างคนทำ Front-End, Mobile App, Back-End และระบบภายนอก ว่า endpoint นี้ต้องรับข้อมูลอะไรและจะตอบกลับอย่างไร',
        },
        {
          type: 'code',
          lang: 'text',
          code: `Endpoint: POST /api/leads
Purpose: สร้าง Lead ใหม่

Request Body:
- name: string, required
- phone: string, required
- interest: string, required
- source: string, optional

Success Response:
{
  "success": true,
  "message": "Lead created successfully",
  "data": {
    "id": 1,
    "name": "สมชาย ใจดี",
    "phone": "0890000000",
    "interest": "Website",
    "source": "Landing Page",
    "status": "new"
  }
}`,
        },
        {
          type: 'paragraph',
          text: 'ในคอร์สนี้ API Contract จะเป็นแกนสำคัญ เพราะเป็นเอกสารที่ทำให้ทุกฝั่งคุยกันรู้เรื่อง และช่วยให้เรา debug ได้เร็วขึ้นเมื่อข้อมูลไม่เข้า dashboard หรือระบบปลายทาง',
        },
      ],
    },
    {
      title: 'สิ่งที่มักเข้าใจผิด',
      blocks: [
        {
          type: 'definitions',
          items: [
            {
              term: 'เข้าใจผิดที่ 1: API คือ URL อย่างเดียว',
              desc: 'URL เป็นเพียงทางเข้า API แต่ API ยังรวมถึง method, headers, request body, response body, status code และ error format ด้วย',
            },
            {
              term: 'เข้าใจผิดที่ 2: Web App กับ Mobile App ต้องมี API คนละชุด',
              desc: 'ไม่จำเป็น ถ้าออกแบบ API ดีตั้งแต่แรก Web App และ Mobile App สามารถใช้ API ชุดเดียวกันได้ เพียงแต่ UI และ runtime ต่างกัน',
            },
            {
              term: 'เข้าใจผิดที่ 3: ถ้าหน้าเว็บ Error แปลว่า API เสีย',
              desc: 'ไม่เสมอไป ปัญหาอาจอยู่ที่ URL ผิด, method ผิด, body ไม่ตรง contract, header ไม่ครบ หรือ Front-End อ่าน response ผิด',
            },
          ],
        },
      ],
    },
    {
      title: 'Workshop Preview',
      blocks: [
        {
          type: 'paragraph',
          text: 'ใน workshop หลัก เราจะไม่ได้สอนให้เขียนโค้ดจากศูนย์ แต่จะใช้ระบบ demo ที่เตรียมไว้ให้ผู้เรียนกด ทดลอง และอ่านผลลัพธ์ เพื่อเข้าใจว่า API Integration ทำงานอย่างไร',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'ทดสอบ API ด้วย Postman หรือ API Test Panel ก่อน',
            'ให้ Web Form ส่ง Lead เข้า API',
            'ให้ Mobile App หรือ Mobile Mock ส่ง Lead เข้า API เดียวกัน',
            'ดูข้อมูลที่ถูกบันทึกใน Dashboard',
            'ส่งข้อมูลต่อไปยัง Webhook หรือ Google Sheets Mock',
          ],
        },
        {
          type: 'checklist',
          items: [
            'อธิบายได้ว่าข้อมูล Lead เดินทางผ่านส่วนไหนบ้าง',
            'เข้าใจว่าทำไม API ต้องเป็นตัวกลาง',
            'เห็นภาพว่า Web App และ Mobile App ใช้ API ชุดเดียวกันได้อย่างไร',
            'เข้าใจว่า API Contract คือข้อตกลงที่ทุกฝั่งต้องใช้ร่วมกัน',
          ],
        },
      ],
    },
  ],
}

export default lesson01
