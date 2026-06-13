import Link from 'next/link'

export default function Brand({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Best Skills — หน้าแรก"
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="" className="h-7 w-7 flex-none" />
      <span className="text-[0.95rem] font-bold tracking-tight text-ink transition group-hover:text-accent">
        Best Skills
      </span>
    </Link>
  )
}
