import { KITCHEN_API_KEY } from '@/lib/restaurant/menu'

// GET /api/kitchen — "เข้าครัว" ต้องมีบัตรพนักงาน
// ใช้สอนเรื่อง Authentication / API key:
//   ไม่มี header x-api-key หรือใส่ผิด → 401 Unauthorized
//   ใส่ x-api-key: best-skills-2026     → 200 OK
export async function GET(req: Request) {
  const key = req.headers.get('x-api-key')

  if (key !== KITCHEN_API_KEY) {
    return Response.json(
      { success: false, error: '🔒 เข้าครัวไม่ได้ — ต้องแนบ header "x-api-key" ให้ถูกต้อง' },
      { status: 401 },
    )
  }

  return Response.json({
    success: true,
    message: '👨‍🍳 ยินดีต้อนรับเข้าครัว Best Bites',
    secretRecipe: 'น้ำซุปต้มยำ: เคี่ยวกระดูก 3 ชั่วโมง + ใบมะกรูดฉีก',
  })
}
