'use client'

import { useRef, useState } from 'react'

export default function CodeBlock(props: React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    const text = ref.current?.innerText ?? ''
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* ไม่ทำอะไรถ้า clipboard ใช้ไม่ได้ */
    }
  }

  return (
    <div className="relative group">
      <button
        onClick={copy}
        className="absolute right-2 top-2 z-10 rounded bg-slate-700 px-2 py-1 text-xs text-slate-100 opacity-0 transition group-hover:opacity-100"
        aria-label="คัดลอกโค้ด"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre ref={ref} {...props} />
    </div>
  )
}
