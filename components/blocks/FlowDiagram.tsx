export default function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="my-4 flex flex-col items-center">
      {steps.map((step, i) => (
        <div key={i} className="flex w-full flex-col items-center">
          <div className="w-full max-w-md rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-center text-sm font-medium text-slate-700">
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className="py-1 text-lg leading-none text-slate-400" aria-hidden="true">
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
