import type { Lesson } from './types'

const lesson06: Lesson = {
  title: 'Installation & Run Project',
  sections: [
    {
      title: 'Step 1–3: README / Clone / package.json',
      blocks: [
        // ── Step 1 ──────────────────────────────────────────────────────────
        {
          type: 'heading',
          text: 'Step 1: อ่าน README ก่อน',
        },
        {
          type: 'paragraph',
          text: 'ไฟล์ README ควรบอกว่า',
        },
        {
          type: 'list',
          items: [
            'โปรเจกต์นี้คืออะไร',
            'ใช้ Tech Stack อะไร',
            'ต้องติดตั้งอะไรบ้าง',
            'ต้องสร้างไฟล์ .env อะไรบ้าง',
            'รันคำสั่งอะไร',
            'API Endpoint มีอะไร',
            'วิธี Deploy ทำอย่างไร',
          ],
        },

        // ── Step 2 ──────────────────────────────────────────────────────────
        {
          type: 'heading',
          text: 'Step 2: Clone หรือแตกไฟล์โปรเจกต์',
        },
        {
          type: 'code',
          lang: 'bash',
          code: `git clone <repository-url>
cd <project-folder>`,
        },
        {
          type: 'paragraph',
          text: 'หรือถ้าได้รับเป็น .zip',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'แตกไฟล์',
            'เปิด Folder ใน VS Code',
          ],
        },

        // ── Step 3 ──────────────────────────────────────────────────────────
        {
          type: 'heading',
          text: 'Step 3: เช็ก package.json',
        },
        {
          type: 'paragraph',
          text: 'ดูคำสั่งที่ใช้รันโปรเจกต์ เช่น',
        },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}`,
        },
      ],
    },

    {
      title: 'Step 4–6: Install / .env / Run Web',
      blocks: [
        // ── Step 4 ──────────────────────────────────────────────────────────
        {
          type: 'heading',
          text: 'Step 4: ติดตั้ง Dependencies',
        },
        {
          type: 'code',
          lang: 'bash',
          code: 'npm install',
        },
        {
          type: 'paragraph',
          text: 'หรือถ้าใช้ package manager อื่น',
        },
        {
          type: 'code',
          lang: 'bash',
          code: `pnpm install
yarn install`,
        },

        // ── Step 5 ──────────────────────────────────────────────────────────
        {
          type: 'heading',
          text: 'Step 5: ตั้งค่า Environment Variables',
        },
        {
          type: 'paragraph',
          text: 'ดูไฟล์ตัวอย่าง เช่น',
        },
        {
          type: 'code',
          lang: 'text',
          code: '.env.example',
        },
        {
          type: 'paragraph',
          text: 'แล้วสร้างไฟล์จริง เช่น',
        },
        {
          type: 'code',
          lang: 'text',
          code: `.env
.env.local`,
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่างค่าใน .env.local',
        },
        {
          type: 'code',
          lang: 'bash',
          code: `NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your_database_url
API_SECRET_KEY=your_secret_key`,
        },

        // ── Step 6 ──────────────────────────────────────────────────────────
        {
          type: 'heading',
          text: 'Step 6: Run Web App',
        },
        {
          type: 'code',
          lang: 'bash',
          code: 'npm run dev',
        },
        {
          type: 'paragraph',
          text: 'แล้วเปิด',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'http://localhost:3000',
        },
      ],
    },

    {
      title: 'Step 7–9: Expo / Test API / Test Database',
      blocks: [
        // ── Step 7 ──────────────────────────────────────────────────────────
        {
          type: 'heading',
          text: 'Step 7: Run Mobile App ด้วย Expo',
        },
        {
          type: 'code',
          lang: 'bash',
          code: `npm install
npx expo start`,
        },
        {
          type: 'paragraph',
          text: 'จากนั้นเลือกทดสอบผ่าน',
        },
        {
          type: 'list',
          items: [
            'Expo Go',
            'Simulator',
            'Android Emulator',
            'iOS Simulator',
          ],
        },

        // ── Step 8 ──────────────────────────────────────────────────────────
        {
          type: 'heading',
          text: 'Step 8: ทดสอบ API แยก',
        },
        {
          type: 'paragraph',
          text: 'ก่อนสรุปว่า App ใช้งานได้ ต้องทดสอบ API ผ่าน Postman หรือ Thunder Client ด้วย',
        },
        {
          type: 'code',
          lang: 'text',
          code: `GET /api/leads
POST /api/leads`,
        },

        // ── Step 9 ──────────────────────────────────────────────────────────
        {
          type: 'heading',
          text: 'Step 9: ทดสอบ Database',
        },
        {
          type: 'paragraph',
          text: 'เช็กว่า',
        },
        {
          type: 'checklist',
          items: [
            'ข้อมูลถูกบันทึกจริงไหม',
            'Table ถูกไหม',
            'Field ครบไหม',
            'Permission ถูกไหม',
            'API Key ถูกไหม',
          ],
        },
      ],
    },
  ],
}

export default lesson06
