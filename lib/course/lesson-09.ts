import type { Lesson } from './types'

const lesson09: Lesson = {
  title: 'Deploy + Production Testing',
  sections: [
    {
      title: 'Local vs Production & Deploy Flow',
      blocks: [
        {
          type: 'paragraph',
          text: 'ให้ผู้เรียนเข้าใจความต่างระหว่าง Local และ Production และรู้ว่าหลัง Deploy ต้องทดสอบอะไรบ้าง',
        },
        { type: 'heading', text: 'Local' },
        {
          type: 'list',
          items: [
            'รันบนเครื่องตัวเอง',
            'ใช้ localhost',
            'เหมาะสำหรับพัฒนาและทดสอบเบื้องต้น',
            'คนอื่นเข้าไม่ได้ถ้าไม่ได้เปิด Network',
          ],
        },
        { type: 'heading', text: 'Production' },
        {
          type: 'list',
          items: [
            'รันบน Server จริง',
            'มี URL จริง',
            'Web App / Mobile App / External System เรียกใช้งานได้',
            'ต้องตั้งค่า Environment Variables บน Server',
          ],
        },
        { type: 'heading', text: 'Deploy Flow แบบเร็ว' },
        {
          type: 'flow',
          steps: [
            'Code ในเครื่อง',
            'Commit',
            'Push GitHub',
            'Vercel Deploy',
            'ได้ Production URL',
            'Test Web / API / Mobile / External Integration',
          ],
        },
      ],
    },
    {
      title: 'ตั้งค่า Production & Testing Checklist',
      blocks: [
        { type: 'heading', text: 'สิ่งที่ต้องตั้งค่าบน Production' },
        {
          type: 'checklist',
          items: [
            'API URL',
            'Database URL',
            'API Key',
            'Secret Key',
            'Webhook URL',
            'Allowed Origin / CORS',
            'Environment Variables ทั้งหมด',
          ],
        },
        { type: 'heading', text: 'Production Testing Checklist' },
        {
          type: 'checklist',
          items: [
            'URL เปิดได้ไหม',
            'Web Form ส่งข้อมูลได้ไหม',
            'API GET / POST ใช้งานได้ไหม',
            'Database มีข้อมูลเข้าไหม',
            'Mobile App เรียก Production URL ได้ไหม',
            'External System ได้รับข้อมูลไหม',
            'Webhook ทำงานไหม',
            'API Key ถูกไหม',
            '.env บน Vercel ตั้งครบไหม',
            'Log มี Error หรือไม่',
          ],
        },
      ],
    },
    {
      title: 'เอกสารที่ควรมีหลังส่งมอบ',
      blocks: [
        {
          type: 'paragraph',
          text: 'เมื่อมีการส่งมอบ App หรือให้ลูกค้าเอาไปดูแลต่อ ควรมีเอกสารเหล่านี้',
        },
        { type: 'heading', text: '1. README.md' },
        {
          type: 'list',
          items: [
            'Project Overview',
            'Tech Stack',
            'Installation',
            'Environment Variables',
            'Run Commands',
            'API Endpoint',
            'Database Schema',
            'Deploy Guide',
            'Common Errors',
          ],
        },
        { type: 'heading', text: '2. .env.example' },
        {
          type: 'code',
          lang: 'bash',
          code: `NEXT_PUBLIC_API_URL=
DATABASE_URL=
API_SECRET_KEY=
WEBHOOK_URL=`,
        },
        { type: 'heading', text: '3. API Endpoint Sheet' },
        {
          type: 'code',
          lang: 'text',
          code: `POST /api/leads
Body: name, phone, interest, source
Response: success, message, data

GET /api/leads
Response: success, data[]`,
        },
        { type: 'heading', text: '4. Database Schema' },
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
        { type: 'heading', text: '5. Debug Checklist' },
        {
          type: 'paragraph',
          text: 'เอกสารรวมปัญหาที่พบบ่อยและวิธีไล่เช็ก',
        },
      ],
    },
  ],
}

export default lesson09
