import type { Lesson } from './types'

const lesson04: Lesson = {
  title: 'Web App เรียก API',
  sections: [
    {
      title: 'Flow การส่งข้อมูลจาก Web Form',
      blocks: [
        {
          type: 'paragraph',
          text: 'ให้ผู้เรียนเห็นภาพการทำงานจริงเมื่อ Front-End เรียก API ผ่าน Form และ Dashboard',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lead Form สำหรับกรอกข้อมูลลูกค้า',
            'Lead Dashboard สำหรับแสดงรายการ Lead',
          ],
        },
        {
          type: 'flow',
          steps: [
            'User กรอก Form',
            'กด Submit',
            'Front-End สร้าง Request Body',
            'เรียก POST /api/leads',
            'Back-End บันทึกข้อมูล',
            'Front-End แสดง Success หรือ Error',
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
      ],
    },
    {
      title: 'สิ่งที่ควรสอนใน Code',
      blocks: [
        {
          type: 'list',
          items: [
            'การแยก API function ออกจาก UI',
            'การใช้ `fetch` หรือ axios',
            'การส่ง Header',
            'การส่ง Body แบบ JSON',
            'การจัดการ Loading State',
            'การจัดการ Success State',
            'การจัดการ Error State',
            'การ Reset Form หลัง Submit สำเร็จ',
            'การดึงข้อมูลมาแสดงใน Dashboard',
          ],
        },
      ],
    },
    {
      title: 'ตัวอย่างแยกไฟล์ & API Function',
      blocks: [
        {
          type: 'code',
          lang: 'text',
          code: `components/LeadForm.tsx
components/LeadTable.tsx
lib/api.ts
app/page.tsx`,
        },
        {
          type: 'code',
          lang: 'ts',
          code: `async function createLead(payload) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error('Create lead failed')
  }

  return response.json()
}`,
        },
      ],
    },
    {
      title: 'จุดที่ควรย้ำ',
      blocks: [
        {
          type: 'callout',
          variant: 'warning',
          text: 'อย่าเขียน API URL กระจายหลายจุดใน UI เพราะเมื่อเปลี่ยน URL หรือ Deploy แล้วจะแก้ยาก ควรแยกไว้ในไฟล์กลาง เช่น `lib/api.ts`',
        },
      ],
    },
  ],
}

export default lesson04
