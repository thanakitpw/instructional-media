'use client'

import { useEffect, useRef, useState } from 'react'

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), 1500)
    } catch {
      /* ไม่ทำอะไรถ้า clipboard ใช้ไม่ได้ */
    }
  }

  return (
    <>
      <button
        onClick={copy}
        className="absolute right-2 top-2 z-10 rounded bg-slate-700 px-2 py-1 text-xs text-slate-100 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100"
        aria-label={copied ? 'คัดลอกแล้ว' : 'คัดลอกโค้ด'}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <span role="status" className="sr-only">
        {copied ? 'คัดลอกแล้ว' : ''}
      </span>
    </>
  )
}
