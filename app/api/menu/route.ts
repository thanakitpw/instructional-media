import { MENU, RESTAURANT_NAME } from '@/lib/restaurant/menu'

// GET /api/menu — ดูรายการเมนูทั้งหมด
// เปรียบเหมือนลูกค้าเปิดเมนูเพื่อดูรายการที่ให้บริการ
export async function GET() {
  return Response.json({
    restaurant: RESTAURANT_NAME,
    count: MENU.length,
    items: MENU,
  })
}
