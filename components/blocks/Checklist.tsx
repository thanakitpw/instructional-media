export default function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="my-5 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md border border-key/35 bg-key-soft text-[0.7rem] font-bold text-key"
            aria-hidden="true"
          >
            ✓
          </span>
          <span className="text-ink-soft">{item}</span>
        </li>
      ))}
    </ul>
  )
}
