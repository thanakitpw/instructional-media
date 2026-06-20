// GET /api/orders/:id — "เช็คสถานะออเดอร์" (อาหารเสร็จยัง)
// หมายเหตุสอน: ร้าน demo นี้ไม่ได้เก็บออเดอร์จริง จึงตอบสถานะจำลองให้ทุกเลข
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
    message: 'อาหารพร้อมเสิร์ฟแล้ว 🍽️ ยกออกได้เลย',
  })
}
