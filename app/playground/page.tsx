import type { Metadata } from 'next'
import Link from 'next/link'
import Brand from '@/components/Brand'
import LiveOrderForm from '@/components/blocks/LiveOrderForm'
import DataTable from '@/components/blocks/DataTable'

export const metadata: Metadata = {
  title: 'API Playground — Best Bites',
  description:
    'ทดลองเรียกใช้งาน API ของร้าน Best Bites ผ่านฟอร์ม และดู request กับ response ที่เกิดขึ้นจริง',
}

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Brand />
          <Link
            href="/c/api-integration"
            className="text-sm text-muted transition hover:text-accent"
          >
            ← กลับไปคอร์ส
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <span className="font-mono text-sm font-medium tabular-nums text-accent">
          API Playground
        </span>
        <h1 className="mt-1.5 text-3xl font-bold tracking-tight text-balance text-ink">
          ร้าน Best Bites
        </h1>
        <p className="mt-3 leading-[1.75] text-ink-soft text-pretty">
          หน้านี้ให้ผู้เรียนทดลองเรียกใช้งาน API ผ่านฟอร์มสั่งอาหาร เมื่อกรอกข้อมูลและกดส่ง
          ระบบจะแสดงทั้ง “ข้อมูลที่ส่งไป” และ “ผลลัพธ์ที่ได้รับกลับมา”
          เหมือนการทดสอบใน Postman แต่อยู่ในรูปแบบฟอร์มที่ใกล้เคียงการใช้งานจริง
        </p>

        <LiveOrderForm />

        <h2 className="mt-12 mb-2 text-lg font-semibold tracking-tight text-ink">
          เมนู API ทั้งหมดของร้าน
        </h2>
        <p className="mb-1 text-sm text-muted">
          BASE URL: <span className="font-mono">https://guidebook.bestsolutionskill.com</span>
        </p>
        <DataTable
          head={['Method', 'ที่อยู่', 'ความหมาย']}
          rows={[
            ['GET', '/api/menu', 'ดูรายการเมนูทั้งหมด'],
            ['GET', '/api/menu/2', 'ดูรายละเอียดเมนูรหัส 2'],
            ['POST', '/api/orders', 'สร้างคำสั่งซื้อ'],
            ['GET', '/api/orders/BB-1234', 'ตรวจสอบสถานะคำสั่งซื้อ'],
            ['GET', '/api/kitchen', 'เข้าถึงข้อมูลครัว (ต้องมี API Key)'],
          ]}
        />

        <p className="mt-8 text-sm text-muted">
          หากต้องการทดลองเรียกใช้งานด้วยตนเองแบบละเอียด ให้เปิด Postman แล้วส่งคำขอไปยัง URL ด้านบน โดยดูขั้นตอนประกอบได้ในบทที่ 4 ของคอร์ส
        </p>
      </main>
    </div>
  )
}
