export default function Definitions({
  items,
}: {
  items: { term: string; desc: string }[]
}) {
  return (
    <dl className="my-5 divide-y divide-border overflow-hidden rounded-lg border border-border">
      {items.map((item, i) => (
        <div key={i} className="px-4 py-3">
          <dt className="font-semibold text-ink">{item.term}</dt>
          <dd className="mt-0.5 leading-relaxed text-ink-soft">{item.desc}</dd>
        </div>
      ))}
    </dl>
  )
}
