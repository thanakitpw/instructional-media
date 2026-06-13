import type { Lesson } from './types'

const lesson07: Lesson = {
  title: 'Debug App แบบเป็นระบบ',
  sections: [
    {
      title: 'วิธีคิดเวลาเจอ Error',
      blocks: [
        {
          type: 'paragraph',
          text: 'บทนี้วางวิธีไล่ปัญหาเมื่อ App ทำงานผิดปกติ เพื่อให้ตรวจสอบเป็นลำดับแทนการเดาสุ่ม',
        },
        {
          type: 'paragraph',
          text: 'อย่าเริ่มจากคำถามว่า "ต้องแก้อย่างไร" ทันที ให้เริ่มจาก "Error เกิดตรงไหน" ก่อน',
        },
        {
          type: 'heading',
          text: '1. Error เกิดช่วงไหน',
        },
        {
          type: 'list',
          items: [
            'Install: npm install ไม่ผ่าน',
            'Run: npm run dev แล้ว Error',
            'Build: npm run build ไม่ผ่าน',
            'Runtime: เปิดเว็บแล้ว Error',
            'API: เรียก API แล้ว Error',
            'Database: บันทึกข้อมูลไม่ได้',
            'Integration: ส่งข้อมูลไปอีกระบบไม่ได้',
          ],
        },
        {
          type: 'heading',
          text: '2. Error อยู่ฝั่งไหน',
        },
        {
          type: 'list',
          items: [
            'Front-End',
            'Back-End',
            'API Route',
            'Database',
            'External System',
            'Environment / Config',
            'Network / CORS',
            'Deploy / Production',
          ],
        },
        {
          type: 'heading',
          text: '3. Checklist ไล่ปัญหา',
        },
        {
          type: 'checklist',
          items: [
            'API Server รันอยู่ไหม',
            'URL API ถูกไหม',
            'Method ถูกไหม',
            'Body เป็นรูปแบบที่ API ต้องการไหม',
            'Header ครบไหม',
            'Token / API Key ถูกไหม',
            '.env มีค่าครบไหม',
            'Database เชื่อมได้ไหม',
            'Table / Field ถูกไหม',
            'External API ใช้งานได้ไหม',
            'Log บอก Error อะไร',
          ],
        },
      ],
    },
    {
      title: 'Error ที่พบบ่อย & วิธีคิด',
      blocks: [
        {
          type: 'heading',
          text: 'npm install ไม่ผ่าน',
        },
        {
          type: 'paragraph',
          text: 'สิ่งที่ควรเช็ก',
        },
        {
          type: 'list',
          items: [
            'Node version ถูกไหม',
            'package-lock เสียไหม',
            'dependency conflict ไหม',
            'ใช้ npm / yarn / pnpm ตรงกับโปรเจกต์ไหม',
          ],
        },
        {
          type: 'heading',
          text: 'Port ถูกใช้งานอยู่',
        },
        {
          type: 'paragraph',
          text: 'อาการ',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Port 3000 is already in use',
        },
        {
          type: 'paragraph',
          text: 'แนวทางแก้',
        },
        {
          type: 'list',
          items: [
            'ปิด process เก่า',
            'เปลี่ยน port',
            'Restart terminal',
          ],
        },
        {
          type: 'heading',
          text: '.env หาย',
        },
        {
          type: 'paragraph',
          text: 'อาการ',
        },
        {
          type: 'list',
          items: [
            'API URL undefined',
            'Database connection failed',
            'Invalid API key',
          ],
        },
        {
          type: 'paragraph',
          text: 'แนวทางแก้',
        },
        {
          type: 'list',
          items: [
            'ดู .env.example',
            'สร้าง .env.local',
            'ใส่ค่าครบ',
            'Restart dev server',
          ],
        },
        {
          type: 'heading',
          text: 'API 404',
        },
        {
          type: 'paragraph',
          text: 'สิ่งที่ควรเช็ก',
        },
        {
          type: 'list',
          items: [
            'Endpoint ถูกไหม',
            'Path ถูกไหม',
            'Method ถูกไหม',
            'API route มีจริงไหม',
            'Deploy URL ถูกไหม',
          ],
        },
        {
          type: 'heading',
          text: 'API 500',
        },
        {
          type: 'paragraph',
          text: 'สิ่งที่ควรเช็ก',
        },
        {
          type: 'list',
          items: [
            'ดู Log ฝั่ง Server',
            'Database error ไหม',
            'Request body ไม่ครบไหม',
            'โค้ด backend throw error ไหม',
          ],
        },
        {
          type: 'heading',
          text: 'CORS Error',
        },
        {
          type: 'paragraph',
          text: 'มักเกิดเมื่อ Front-End และ Back-End อยู่คนละ Domain แล้ว Server ยังไม่อนุญาตให้ Origin นั้นเรียกใช้งาน',
        },
        {
          type: 'paragraph',
          text: 'สิ่งที่ควรเช็ก',
        },
        {
          type: 'list',
          items: [
            'Server อนุญาต Origin หรือยัง',
            'เรียก URL ถูก Environment ไหม',
            'ใช้ Browser หรือ Mobile เรียก',
          ],
        },
        {
          type: 'heading',
          text: 'Mobile เรียก localhost ไม่ได้',
        },
        {
          type: 'paragraph',
          text: 'สาเหตุ',
        },
        {
          type: 'list',
          items: [
            'localhost บนมือถือคือเครื่องมือถือ ไม่ใช่เครื่องคอม',
          ],
        },
        {
          type: 'paragraph',
          text: 'แนวทางแก้',
        },
        {
          type: 'list',
          items: [
            'ใช้ Local IP',
            'ใช้ ngrok',
            'หรือใช้ Production URL',
          ],
        },
      ],
    },
    {
      title: 'Prompt ให้ AI ช่วย Debug',
      blocks: [
        {
          type: 'code',
          lang: 'text',
          code: `ฉันกำลังรันโปรเจกต์แล้วเจอ Error

Context:
- โปรเจกต์เป็น: [Web App / Mobile App / API]
- Framework: [Next.js / Expo / Express / อื่น ๆ]
- สิ่งที่กำลังทำ: [เช่น npm run dev / submit form / call API]
- ไฟล์ที่เกี่ยวข้อง: [ชื่อไฟล์]

Error:
[วาง Error แบบเต็ม]

สิ่งที่ลองแก้แล้ว:
[เขียนสิ่งที่ลองทำ]

ช่วยวิเคราะห์ว่า Error นี้น่าจะเกิดจากอะไร
ขอวิธีแก้ทีละขั้นตอน
และช่วยบอกว่าควรเช็กไฟล์หรือค่า config ไหนก่อน`,
        },
      ],
    },
  ],
}

export default lesson07
