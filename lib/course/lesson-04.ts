import type { Lesson } from './types'

const lesson04: Lesson = {
  title: 'ปฏิบัติ: ทดสอบ API ร้าน Best Bites ด้วย Postman',
  sections: [
    {
      title: 'เตรียมความพร้อมและรายการ API ของร้าน',
      blocks: [
        {
          type: 'paragraph',
          text: 'ในบทนี้ผู้เรียนจะทดลองเรียกใช้งาน API ผ่านร้านอาหารจำลองชื่อ "Best Bites" ซึ่งออกแบบมาเพื่อใช้ฝึกทดสอบได้หลายครั้งโดยไม่กระทบระบบจริง เราจะใช้ Postman เป็นเครื่องมือส่งคำขอไปยัง API',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'BASE URL คืออะไร',
          text: 'ทุกตัวอย่างด้านล่างขึ้นต้นด้วย https://guidebook.bestsolutionskill.com ซึ่งเป็นที่อยู่ของเว็บคอร์สนี้ โดยตัว API ของร้าน Best Bites ทำงานอยู่บนเว็บเดียวกันนี้ เพียงเปิด Postman แล้วใช้ URL ตามตัวอย่างได้ทันที โดยคงส่วนที่อยู่หลัง /api ไว้ตามเดิม',
        },
        {
          type: 'heading',
          text: 'รายการ API ทั้งหมดของร้าน (endpoints)',
        },
        {
          type: 'table',
          head: ['Method', 'ที่อยู่', 'ความหมาย'],
          rows: [
            ['GET', '/api/menu', 'ดูรายการเมนูทั้งหมด'],
            ['GET', '/api/menu/2', 'ดูรายละเอียดเมนูรหัส 2'],
            ['POST', '/api/orders', 'สร้างคำสั่งซื้อ'],
            ['GET', '/api/orders/BB-1234', 'ตรวจสอบสถานะคำสั่งซื้อ'],
            ['GET', '/api/kitchen', 'เข้าถึงข้อมูลครัว (ต้องมี API Key)'],
          ],
        },
      ],
    },
    {
      title: 'สาธิตที่ 1 — GET: ดูรายการเมนู',
      blocks: [
        {
          type: 'paragraph',
          text: 'เริ่มจากคำขอที่ง่ายที่สุดคือ GET ซึ่งใช้สำหรับดูข้อมูล โดยยังไม่ส่งข้อมูลใหม่เข้าไปในระบบ',
        },
        {
          type: 'flow',
          steps: [
            'เปิด Postman แล้วกดปุ่ม +',
            'เลือก Method เป็น GET',
            'วาง URL: https://guidebook.bestsolutionskill.com/api/menu',
            'กด Send',
            'ตรวจสอบผลลัพธ์ด้านล่าง: Status 200 OK และข้อมูลเมนูในรูปแบบ JSON',
          ],
        },
        {
          type: 'paragraph',
          text: 'ตัวอย่างข้อมูลที่ได้รับกลับมา (Response):',
        },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "restaurant": "Best Bites",
  "count": 6,
  "items": [
    { "id": 1, "name": "ผัดไทยกุ้งสด", "price": 60, "available": true },
    { "id": 2, "name": "ต้มยำกุ้ง", "price": 120, "available": true },
    { "id": 3, "name": "ข้าวผัดปู", "price": 95, "available": true }
  ]
}`,
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'ประเด็นสำหรับอธิบาย',
          text: 'ในตัวอย่างนี้ เราส่งคำขอเพื่อดูรายการเมนู และระบบส่งข้อมูลรายการอาหารกลับมา โดยที่เราไม่ต้องเข้าถึงระบบเบื้องหลังโดยตรง',
        },
        {
          type: 'heading',
          text: 'ทดลองต่อ: ดูเมนูรายการเดียว และดูรายการที่ไม่มีอยู่จริง',
        },
        {
          type: 'list',
          items: [
            'เปลี่ยน URL เป็น /api/menu/2 เพื่อดูรายละเอียดเมนูรหัส 2',
            'เปลี่ยน URL เป็น /api/menu/99 จะได้รับ Status 404 เพราะไม่มีเมนูรหัส 99',
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          text: 'เมื่อเรียกข้อมูลที่ไม่มีอยู่จริง ระบบตอบกลับด้วย 404 ซึ่งเป็นตัวอย่างของกลุ่ม 4xx ที่มักเกิดจากคำขอฝั่งผู้ใช้ไม่ถูกต้อง',
        },
      ],
    },
    {
      title: 'สาธิตที่ 2 — POST: สร้างคำสั่งซื้อ',
      blocks: [
        {
          type: 'paragraph',
          text: 'ตัวอย่างนี้จะส่งข้อมูลเข้าไปยังระบบเพื่อสร้างคำสั่งซื้อ คล้ายกับการกดส่งฟอร์มบนเว็บไซต์ โดยต้องใช้ Method POST และแนบ Body ไปกับคำขอ',
        },
        {
          type: 'flow',
          steps: [
            'เปลี่ยน Method เป็น POST',
            'URL: https://guidebook.bestsolutionskill.com/api/orders',
            'ไปที่แท็บ Body → เลือก raw → เปลี่ยนตัวเลือกด้านขวาเป็น JSON',
            'วาง Body ตามตัวอย่างด้านล่าง',
            'กด Send → Status 201 Created',
          ],
        },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "table": 5,
  "items": [
    { "id": 1, "qty": 2 },
    { "id": 6, "qty": 1 }
  ]
}`,
        },
        {
          type: 'paragraph',
          text: 'ระบบจะตอบกลับว่ารับคำสั่งซื้อแล้ว พร้อมรหัสคำสั่งซื้อและยอดรวม:',
        },
        {
          type: 'code',
          lang: 'json',
          code: `{
  "success": true,
  "orderId": "BB-2134",
  "status": "cooking",
  "total": 145,
  "message": "รับคำสั่งซื้อแล้ว กำลังดำเนินการ"
}`,
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'ประเด็นสำหรับอธิบาย',
          text: 'เมื่อผู้ใช้กดส่งฟอร์ม เว็บไซต์มักส่งข้อมูลในลักษณะนี้ไปยัง API จากนั้นระบบตอบกลับด้วย 201 เพื่อบอกว่าสร้างรายการใหม่สำเร็จ',
        },
        {
          type: 'heading',
          text: 'ทดลองส่งข้อมูลไม่ครบ เพื่อดูตัวอย่าง 400',
        },
        {
          type: 'list',
          items: [
            'ลบ items ออก เหลือเพียง { "table": 5 } แล้วกด Send จะได้รับ 400 เพราะไม่มีรายการอาหาร',
            'ส่ง { "items": [{ "id": 5, "qty": 1 }] } จะได้รับ 400 เพราะเมนูดังกล่าวไม่พร้อมให้บริการ',
          ],
        },
      ],
    },
    {
      title: 'สาธิตที่ 3 — การเข้าถึงข้อมูลด้วย API Key',
      blocks: [
        {
          type: 'paragraph',
          text: 'API บางส่วนไม่ได้เปิดให้ทุกคนเรียกใช้ได้โดยตรง แต่ต้องมีข้อมูลยืนยันสิทธิ์ก่อน ในตัวอย่างนี้เราจำลองด้วย endpoint ของครัว ซึ่งต้องแนบ header ชื่อ x-api-key',
        },
        {
          type: 'flow',
          steps: [
            'Method GET → URL: https://guidebook.bestsolutionskill.com/api/kitchen',
            'กด Send โดยยังไม่ใส่ API Key → ได้ 401 Unauthorized',
            'ไปแท็บ Headers → เพิ่มแถว Key: x-api-key  Value: best-skills-2026',
            'กด Send อีกครั้ง → ได้ 200 พร้อมข้อมูลสำหรับพนักงาน',
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          text: '401 Unauthorized หมายถึงคำขอยังไม่มีข้อมูลยืนยันตัวตนหรือสิทธิ์ที่ถูกต้อง ในงานจริงมักพบกับระบบที่ต้องเข้าสู่ระบบหรือต้องใช้ API Key',
        },
      ],
    },
    {
      title: 'แนวทางตรวจสอบเมื่อเกิดข้อผิดพลาดระหว่างสาธิต',
      blocks: [
        {
          type: 'paragraph',
          text: 'เมื่อเรียก POST แล้วได้รับ 400 แม้คิดว่าตั้งค่าถูกต้องแล้ว มักเกิดจากสาเหตุพื้นฐานไม่กี่ข้อ ให้ตรวจสอบตามลำดับนี้',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'ยังไม่ได้เลือก Body เป็น raw + JSON',
            'JSON เขียนไม่ถูกต้อง เช่น ลืมลูกน้ำ ใส่ลูกน้ำเกิน หรือใช้ ‘ ’ แทน " "',
            'เลือก Method ไม่ถูกต้อง เช่นเลือก GET แทน POST',
            'URL ไม่ถูกต้อง เช่นใช้ order แทน orders',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'ใช้ AI ช่วยวิเคราะห์ปัญหา',
          text: 'สามารถถาม AI ว่า "ฉันส่ง POST ไปที่ /api/orders ด้วย body นี้ [วาง JSON] แล้วได้ status 400 หมายความว่าอะไร และควรแก้อย่างไร" วิธีนี้ช่วยเปลี่ยนข้อผิดพลาดให้เป็นตัวอย่างการวิเคราะห์ปัญหาจริง',
        },
        {
          type: 'checklist',
          items: [
            'เรียก GET /api/menu ได้ 200 และอ่านผลลัพธ์ได้',
            'เรียก POST /api/orders เพื่อสร้างคำสั่งซื้อได้ 201',
            'ทำให้เกิด 404 และ 400 ได้ และอธิบายสาเหตุได้',
            'ใส่ x-api-key เพื่อเข้าถึงข้อมูลที่ต้องใช้สิทธิ์ได้ 200',
          ],
        },
      ],
    },
  ],
}

export default lesson04
