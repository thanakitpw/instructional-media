import Link from 'next/link'

export default function Brand({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Best Skills — หน้าแรก"
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      <span
        className="grid h-6 w-6 place-items-center rounded-md bg-accent text-sm font-bold text-accent-fg transition group-hover:bg-accent-hover"
        aria-hidden="true"
      >
        B
      </span>
      <span className="text-[0.95rem] font-bold tracking-tight text-ink transition group-hover:text-accent">
        Best Skills
      </span>
    </Link>
  )
}
