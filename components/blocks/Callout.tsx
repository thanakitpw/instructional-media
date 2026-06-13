import type { ReactNode } from 'react'

const styles: Record<string, string> = {
  note: 'border-blue-400 bg-blue-50 text-blue-900',
  warning: 'border-amber-400 bg-amber-50 text-amber-900',
  key: 'border-emerald-400 bg-emerald-50 text-emerald-900',
}

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
    <div className={`my-4 rounded-lg border-l-4 p-4 ${styles[variant] ?? styles.note}`}>
      {title && <p className="mb-1 font-semibold">{title}</p>}
      <p className="leading-relaxed">{children}</p>
    </div>
  )
}
