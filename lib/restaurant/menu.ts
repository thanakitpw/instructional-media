// ─────────────────────────────────────────────────────────────────────────────
// ข้อมูล "ครัว" ของร้าน Best Bites ใช้เป็น demo API สำหรับให้ผู้เรียนทดลองด้วย Postman
// อุปมา: ไฟล์นี้คือ "วัตถุดิบในครัว" ที่ API หยิบมาเสิร์ฟเวลามี request เข้ามา
// ─────────────────────────────────────────────────────────────────────────────

export const RESTAURANT_NAME = 'Best Bites'

/** บัตรพนักงานสำหรับเข้าครัว — ใช้สอนเรื่อง API key / 401 */
export const KITCHEN_API_KEY = 'best-skills-2026'

export interface MenuItem {
  id: number
  name: string
  nameEn: string
  price: number
  category: 'main' | 'drink'
  spicy: boolean
  available: boolean
}

export const MENU: MenuItem[] = [
  { id: 1, name: 'ผัดไทยกุ้งสด', nameEn: 'Pad Thai', price: 60, category: 'main', spicy: false, available: true },
  { id: 2, name: 'ต้มยำกุ้ง', nameEn: 'Tom Yum Goong', price: 120, category: 'main', spicy: true, available: true },
  { id: 3, name: 'ข้าวผัดปู', nameEn: 'Crab Fried Rice', price: 95, category: 'main', spicy: false, available: true },
  { id: 4, name: 'กะเพราหมูสับไข่ดาว', nameEn: 'Pad Kaprao', price: 55, category: 'main', spicy: true, available: true },
  { id: 5, name: 'ส้มตำไทย', nameEn: 'Som Tam', price: 45, category: 'main', spicy: true, available: false },
  { id: 6, name: 'ชาไทยเย็น', nameEn: 'Thai Iced Tea', price: 25, category: 'drink', spicy: false, available: true },
]

export function getMenuItem(id: number): MenuItem | undefined {
  return MENU.find((m) => m.id === id)
}
