import Link from 'next/link'

type Item = { meta?: string; title: string; desc?: string; href?: string }

function CardInner({ item }: { item: Item }) {
  return (
    <>
      {item.meta && (
        <span className="font-mono text-xs tabular-nums text-muted">
          {item.meta}
        </span>
      )}
      <h4 className="mt-1 font-semibold tracking-tight text-ink">{item.title}</h4>
      {item.desc && (
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
      )}
    </>
  )
}

export default function Cards({
  items,
  columns = 2,
}: {
  items: Item[]
  columns?: 2 | 3
}) {
  const cols = columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
  return (
    <div className={`my-6 grid gap-3 ${cols}`}>
      {items.map((item, i) =>
        item.href ? (
          <Link
            key={i}
            href={item.href}
            className="rounded-xl border border-border bg-elevated p-4 transition hover:border-accent hover:bg-accent-soft/40"
          >
            <CardInner item={item} />
          </Link>
        ) : (
          <div key={i} className="rounded-xl border border-border bg-elevated p-4">
            <CardInner item={item} />
          </div>
        ),
      )}
    </div>
  )
}
