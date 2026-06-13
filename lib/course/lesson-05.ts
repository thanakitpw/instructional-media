import type { Lesson } from './types'

const lesson05: Lesson = {
  title: 'Mobile App เรียก API เดียวกัน',
  sections: [
    {
      title: 'Flow & สิ่งที่เหมือน Web App',
      blocks: [
        {
          type: 'paragraph',
          text: 'ให้ผู้เรียนเข้าใจว่า Mobile App สามารถใช้ Back-End API ชุดเดียวกับ Web App ได้ แต่มีข้อควรระวังเรื่อง URL, localhost และ Environment',
        },
        {
          type: 'flow',
          steps: [
            'Mobile App',
            'API URL',
            'Back-End API',
            'Database',
            'Response กลับไปที่ Mobile App',
          ],
        },
        {
          type: 'list',
          items: [
            'เรียก API ด้วย HTTP Method',
            'ส่ง Body เป็น JSON',
            'รับ Response เป็น JSON',
            'ต้องจัดการ Loading / Error / Success',
            'ใช้ API Contract เดียวกัน',
          ],
        },
      ],
    },
    {
      title: 'สิ่งที่ต่าง & ปัญหา localhost',
      blocks: [
        {
          type: 'list',
          items: [
            'Mobile App ไม่มี Browser URL เหมือน Web',
            'การเรียก `localhost` จะมีปัญหาเมื่อทดสอบบนมือถือจริง',
            'ต้องใช้ IP เครื่องในวง LAN หรือ Production API URL',
            'ต้องจัดการ Permission / Network / Device Testing เพิ่ม',
          ],
        },
        {
          type: 'paragraph',
          text: 'ใน Web App บนเครื่องคอมพิวเตอร์ อาจเรียกได้ว่า',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'http://localhost:3000/api/leads',
        },
        {
          type: 'paragraph',
          text: 'แต่ในมือถือจริง `localhost` หมายถึง "ตัวเครื่องมือถือเอง" ไม่ใช่เครื่องคอมพิวเตอร์ที่รัน API อยู่',
        },
        {
          type: 'paragraph',
          text: 'ดังนั้น Mobile App จะเรียก API ในเครื่องคอมด้วย localhost ไม่ได้',
        },
      ],
    },
    {
      title: 'วิธีแก้ & Environment',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'ใช้ Local Network IP เช่น http://192.168.1.10:3000/api/leads',
            'ให้มือถือและคอมอยู่ Wi-Fi เดียวกัน',
            'เปิด Firewall ให้เรียกได้',
            'หรือ Deploy API แล้วใช้ Production URL',
          ],
        },
        {
          type: 'code',
          lang: 'text',
          code: `Development API URL:\nhttp://192.168.1.10:3000/api\n\nProduction API URL:\nhttps://your-app.vercel.app/api`,
        },
        {
          type: 'callout',
          variant: 'key',
          text: 'Web App และ Mobile App ต่างกันที่ UI และ Runtime แต่สามารถใช้ API Contract เดียวกันได้ ถ้าออกแบบ API ดีตั้งแต่แรก',
        },
      ],
    },
  ],
}

export default lesson05
