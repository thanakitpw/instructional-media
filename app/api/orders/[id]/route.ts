// GET /api/orders/:id — ตรวจสอบสถานะคำสั่งซื้อ
// หมายเหตุสำหรับการสอน: ร้าน demo นี้ไม่ได้เก็บคำสั่งซื้อจริง จึงตอบสถานะจำลองให้ทุกเลข
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params

  return Response.json({
    success: true,
    orderId: id,
    status: 'ready',
    etaMinutes: 0,
    message: 'อาหารพร้อมเสิร์ฟแล้ว',
  })
}
