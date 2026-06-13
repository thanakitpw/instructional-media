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
      /* clipboard ใช้ไม่ได้ */
    }
  }

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none"
      aria-label={copied ? 'คัดลอกแล้ว' : 'คัดลอกโค้ด'}
    >
      <span aria-hidden="true">{copied ? '✓' : '⧉'}</span>
      {copied ? 'Copied' : 'Copy'}
      <span role="status" className="sr-only">
        {copied ? 'คัดลอกแล้ว' : ''}
      </span>
    </button>
  )
}
