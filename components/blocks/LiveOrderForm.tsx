'use client'

import { useEffect, useState } from 'react'

interface MenuItem {
  id: number
  name: string
  price: number
  available: boolean
}

interface SentRequest {
  url: string
  body: { table: number; items: { id: number; qty: number }[] }
}

interface ApiResponse {
  status: number
  ok: boolean
  data: unknown
}

function JsonView({ value }: { value: unknown }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-code-bg px-3.5 py-3 text-[0.8rem] leading-relaxed text-slate-200">
      <code className="font-mono">{JSON.stringify(value, null, 2)}</code>
    </pre>
  )
}

export default function LiveOrderForm() {
  const [menu, setMenu] = useState<MenuItem[]>([])
  const [menuError, setMenuError] = useState(false)
  const [table, setTable] = useState(5)
  const [qtys, setQtys] = useState<Record<number, number>>({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState<SentRequest | null>(null)
  const [res, setRes] = useState<ApiResponse | null>(null)
  const [netError, setNetError] = useState(false)

  // ดึงเมนูจริงจาก API ตอนเปิด (อันนี้ก็คือ GET /api/menu นั่นเอง)
  useEffect(() => {
    fetch('/api/menu')
      .then((r) => r.json())
      .then((d) => setMenu(d.items ?? []))
      .catch(() => setMenuError(true))
  }, [])

  const setQty = (id: number, delta: number) =>
    setQtys((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta)
      return { ...prev, [id]: next }
    })

  const items = menu
    .filter((m) => (qtys[m.id] ?? 0) > 0)
    .map((m) => ({ id: m.id, qty: qtys[m.id] }))
  const total = menu.reduce((s, m) => s + (qtys[m.id] ?? 0) * m.price, 0)

  async function submit(orderItems: { id: number; qty: number }[]) {
    const body = { table, items: orderItems }
    setLoading(true)
    setRes(null)
    setNetError(false)
    setSent({ url: '/api/orders', body })
    try {
      const r = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await r.json()
      setRes({ status: r.status, ok: r.ok, data })
    } catch {
      setNetError(true)
    } finally {
      setLoading(false)
    }
  }

  const statusOk = res?.ok
  const badgeClass = statusOk
    ? 'border-key/30 bg-key-soft text-key'
    : 'border-warning/40 bg-warning-soft text-warning'

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-surface">
      {/* หัวฟอร์ม */}
      <div className="border-b border-border bg-elevated px-5 py-3.5">
        <p className="font-semibold text-ink">🍜 ฟอร์มสั่งอาหาร Best Bites (ของจริง)</p>
        <p className="mt-0.5 text-sm text-muted">
          เลือกเมนู แล้วกดส่ง — ฟอร์มนี้ยิง POST ไปที่ API จริง แล้วโชว์สิ่งที่ส่งไปและคำตอบที่ได้กลับมาด้านล่าง
        </p>
      </div>

      <div className="px-5 py-4">
        {menuError ? (
          <p className="text-sm text-warning">โหลดเมนูจาก API ไม่ได้ ลองรีเฟรชหน้าอีกครั้ง</p>
        ) : menu.length === 0 ? (
          <p className="text-sm text-muted">กำลังโหลดเมนูจาก /api/menu …</p>
        ) : (
          <>
            {/* โต๊ะ */}
            <label className="mb-3 flex items-center gap-2 text-sm text-ink">
              <span className="font-medium">โต๊ะที่</span>
              <input
                type="number"
                min={1}
                value={table}
                onChange={(e) => setTable(Math.max(1, Number(e.target.value) || 1))}
                className="w-20 rounded-lg border border-border bg-elevated px-2.5 py-1.5 text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
              />
            </label>

            {/* รายการเมนู + ตัวเพิ่มจำนวน */}
            <ul className="divide-y divide-border rounded-lg border border-border">
              {menu.map((m) => {
                const qty = qtys[m.id] ?? 0
                return (
                  <li key={m.id} className="flex items-center gap-3 px-3 py-2.5">
                    <div className="flex-1">
                      <span className="text-sm text-ink">{m.name}</span>
                      <span className="ml-2 font-mono text-xs text-muted">{m.price}฿</span>
                      {!m.available && (
                        <span className="ml-2 rounded bg-warning-soft px-1.5 py-0.5 text-[0.7rem] text-warning">
                          ของหมด
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQty(m.id, -1)}
                        disabled={!m.available || qty === 0}
                        aria-label={`ลดจำนวน ${m.name}`}
                        className="h-7 w-7 rounded-md border border-border text-ink transition hover:bg-bg disabled:opacity-30"
                      >
                        −
                      </button>
                      <span className="w-5 text-center font-mono text-sm tabular-nums text-ink">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(m.id, 1)}
                        disabled={!m.available}
                        aria-label={`เพิ่มจำนวน ${m.name}`}
                        className="h-7 w-7 rounded-md border border-border text-ink transition hover:bg-bg disabled:opacity-30"
                      >
                        +
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>

            {/* รวม + ปุ่มส่ง */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-ink-soft">
                รวม <span className="font-mono font-semibold text-ink">{total}฿</span>
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => submit([])}
                  disabled={loading}
                  className="rounded-lg border border-border px-3 py-2 text-sm text-ink-soft transition hover:bg-bg disabled:opacity-50"
                >
                  ลองส่งที่ผิด (ดู 400)
                </button>
                <button
                  type="button"
                  onClick={() => submit(items)}
                  disabled={loading || items.length === 0}
                  className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition hover:bg-accent-hover disabled:opacity-50"
                >
                  {loading ? 'กำลังส่ง…' : 'ส่งออเดอร์ → POST /api/orders'}
                </button>
              </div>
            </div>
          </>
        )}

        {/* ผลลัพธ์: request ที่ส่ง + response ที่ได้ */}
        {sent && (
          <div className="mt-5 grid gap-4 border-t border-border pt-5 md:grid-cols-2">
            <div>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                📤 สิ่งที่ส่งไป (Request)
              </p>
              <p className="mb-1.5 font-mono text-xs text-ink-soft">
                <span className="font-semibold text-accent">POST</span> {sent.url}
              </p>
              <JsonView value={sent.body} />
            </div>
            <div>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                📥 สิ่งที่ได้กลับมา (Response)
              </p>
              {netError ? (
                <p className="text-sm text-warning">เชื่อมต่อ API ไม่ได้</p>
              ) : res ? (
                <>
                  <span
                    className={`mb-1.5 inline-block rounded-md border px-2 py-0.5 font-mono text-xs font-semibold ${badgeClass}`}
                  >
                    {res.status} {statusOk ? 'OK' : 'ERROR'}
                  </span>
                  <JsonView value={res.data} />
                </>
              ) : (
                <p className="text-sm text-muted">กำลังรอคำตอบ…</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
