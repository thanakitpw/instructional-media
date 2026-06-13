import type { ReactNode } from 'react'

const VARIANTS = {
  note: 'border-note/25 bg-note-soft',
  warning: 'border-warning/35 bg-warning-soft',
  key: 'border-key/30 bg-key-soft',
} as const

const DOT = {
  note: 'bg-note',
  warning: 'bg-warning',
  key: 'bg-key',
} as const

export default function Callout({
  variant = 'note',
  title,
  children,
}: {
  variant?: 'note' | 'warning' | 'key'
  title?: string
  children: ReactNode
}) {
  return (
    <div
      className={`my-5 flex gap-3 rounded-lg border px-4 py-3.5 ${VARIANTS[variant] ?? VARIANTS.note}`}
    >
      <span
        className={`mt-[0.45rem] h-2 w-2 flex-none rounded-full ${DOT[variant] ?? DOT.note}`}
        aria-hidden="true"
      />
      <div>
        {title && <p className="mb-0.5 font-semibold text-ink">{title}</p>}
        <p className="leading-relaxed text-ink-soft">{children}</p>
      </div>
    </div>
  )
}
