export default function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="my-6 flex flex-col items-center">
      {steps.map((step, i) => (
        <div key={i} className="flex w-full flex-col items-center">
          <div className="w-full max-w-sm rounded-lg border border-border bg-elevated px-4 py-2.5 text-center text-sm font-medium text-ink shadow-sm">
            {step}
          </div>
          {i < steps.length - 1 && (
            <div
              className="py-1 text-lg leading-none text-accent"
              aria-hidden="true"
            >
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
