import { getMenuItem } from '@/lib/restaurant/menu'

// GET /api/menu/:id — "ขอดูเมนูจานเดียว"
// ถ้าขอจานที่ไม่มีในร้าน → ตอบ 404 (4xx = เราขอผิดเอง)
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const item = getMenuItem(Number(id))

  if (!item) {
    return Response.json(
      { error: `ไม่พบเมนูรหัส ${id} ในระบบ กรุณาดูรายการเมนูทั้งหมดที่ /api/menu` },
      { status: 404 },
    )
  }

  return Response.json(item)
}
