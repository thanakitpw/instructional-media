import { getMenuItem } from '@/lib/restaurant/menu'

// POST /api/orders — "สั่งอาหาร" (เหมือนเว็บกดปุ่ม submit ฟอร์ม)
// ส่ง body เป็น JSON: { "table": 5, "items": [{ "id": 1, "qty": 2 }] }
//   สำเร็จ  → 201 Created + เลขออเดอร์ + สถานะ "cooking"
//   ส่งมั่ว → 400 Bad Request (4xx = เราส่งผิดเอง)
export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json(
      { success: false, error: 'อ่าน body ไม่ได้ — ต้องส่งเป็น JSON และตั้ง Content-Type: application/json' },
      { status: 400 },
    )
  }

  const { table, items } = (body ?? {}) as {
    table?: number | string
    items?: { id: number; qty: number }[]
  }

  if (!Array.isArray(items) || items.length === 0) {
    return Response.json(
      { success: false, error: 'ต้องสั่งอย่างน้อย 1 จาน — ส่ง field "items" เป็น array เช่น [{ "id": 1, "qty": 2 }]' },
      { status: 400 },
    )
  }

  // ตรวจว่าทุกจานมีจริงและยังขายอยู่ แล้วคิดเงิน
  const lines = []
  for (const line of items) {
    const dish = getMenuItem(Number(line?.id))
    if (!dish) {
      return Response.json(
        { success: false, error: `ไม่มีเมนูรหัส ${line?.id} ในร้าน` },
        { status: 400 },
      )
    }
    if (!dish.available) {
      return Response.json(
        { success: false, error: `ขออภัย "${dish.name}" วันนี้ของหมด 🙏` },
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
      message: `รับออเดอร์แล้ว! กำลังปรุง 👨‍🍳 เช็คสถานะได้ที่ /api/orders/${orderId}`,
    },
    { status: 201 },
  )
}
