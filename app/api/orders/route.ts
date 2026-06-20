import { getMenuItem } from '@/lib/restaurant/menu'

// POST /api/orders — สร้างคำสั่งซื้อ คล้ายการกดส่งฟอร์มบนเว็บไซต์
// ส่ง body เป็น JSON: { "table": 5, "items": [{ "id": 1, "qty": 2 }] }
//   สำเร็จ      → 201 Created + รหัสคำสั่งซื้อ + สถานะ "cooking"
//   ข้อมูลผิด  → 400 Bad Request
export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json(
      { success: false, error: 'ไม่สามารถอ่าน body ได้ ต้องส่งข้อมูลเป็น JSON และตั้ง Content-Type: application/json' },
      { status: 400 },
    )
  }

  const { table, items } = (body ?? {}) as {
    table?: number | string
    items?: { id: number; qty: number }[]
  }

  if (!Array.isArray(items) || items.length === 0) {
    return Response.json(
      { success: false, error: 'ต้องมีรายการอาหารอย่างน้อย 1 รายการ โดยส่ง field "items" เป็น array เช่น [{ "id": 1, "qty": 2 }]' },
      { status: 400 },
    )
  }

  // ตรวจว่าทุกรายการมีอยู่จริงและยังพร้อมให้บริการ แล้วคำนวณยอดรวม
  const lines = []
  for (const line of items) {
    const dish = getMenuItem(Number(line?.id))
    if (!dish) {
      return Response.json(
        { success: false, error: `ไม่พบเมนูรหัส ${line?.id} ในระบบ` },
        { status: 400 },
      )
    }
    if (!dish.available) {
      return Response.json(
        { success: false, error: `ขออภัย "${dish.name}" ไม่พร้อมให้บริการในขณะนี้` },
        { status: 400 },
      )
    }
    const qty = Math.max(1, Number(line?.qty) || 1)
    lines.push({ id: dish.id, name: dish.name, price: dish.price, qty, subtotal: dish.price * qty })
  }

  const total = lines.reduce((sum, l) => sum + l.subtotal, 0)
  const orderId = `BB-${String(Date.now()).slice(-4)}`

  return Response.json(
    {
      success: true,
      orderId,
      status: 'cooking',
      table: table ?? 'takeaway',
      items: lines,
      total,
      etaMinutes: 15,
      message: `รับคำสั่งซื้อแล้ว กำลังดำเนินการ สามารถตรวจสอบสถานะได้ที่ /api/orders/${orderId}`,
    },
    { status: 201 },
  )
}
