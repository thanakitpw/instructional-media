export default function Hero({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="my-6 rounded-2xl border border-accent/15 bg-accent-soft px-6 py-7">
      <p className="text-xl font-bold tracking-tight text-balance text-ink sm:text-2xl">
        {title}
      </p>
      {subtitle && (
        <p className="mt-2 leading-relaxed text-ink-soft">{subtitle}</p>
      )}
    </div>
  )
}
