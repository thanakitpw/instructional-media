export default function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="my-4 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-0.5 text-emerald-600" aria-hidden="true">
            ☑
          </span>
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  )
}
