export default function Definitions({
  items,
}: {
  items: { term: string; desc: string }[]
}) {
  return (
    <dl className="my-4 space-y-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-slate-200 p-3">
          <dt className="font-semibold text-slate-800">{item.term}</dt>
          <dd className="mt-1 leading-relaxed text-slate-600">{item.desc}</dd>
        </div>
      ))}
    </dl>
  )
}
