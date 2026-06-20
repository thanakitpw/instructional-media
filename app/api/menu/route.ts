import { MENU, RESTAURANT_NAME } from '@/lib/restaurant/menu'

// GET /api/menu — "ขอดูเมนูทั้งร้าน"
// เปรียบเหมือนลูกค้าเปิดเมนูดูว่ามีอะไรขายบ้าง
export async function GET() {
  return Response.json({
    restaurant: RESTAURANT_NAME,
    count: MENU.length,
    items: MENU,
  })
}
