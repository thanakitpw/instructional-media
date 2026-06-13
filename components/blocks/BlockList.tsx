import type { Block } from '@/lib/course/types'
import CodeBlock from '@/components/CodeBlock'
import Callout from './Callout'
import FlowDiagram from './FlowDiagram'
import Checklist from './Checklist'
import DataTable from './DataTable'
import Definitions from './Definitions'

export default function BlockList({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h3
                key={i}
                className="mt-8 mb-2 text-[1.0625rem] font-semibold tracking-tight text-ink"
              >
                {block.text}
              </h3>
            )
          case 'paragraph':
            return (
              <p key={i} className="my-3.5 leading-[1.75] text-ink-soft text-pretty">
                {block.text}
              </p>
            )
          case 'code':
            return <CodeBlock key={i} code={block.code} lang={block.lang} />
          case 'list':
            return block.ordered ? (
              <ol
                key={i}
                className="my-3.5 list-decimal space-y-1.5 pl-6 leading-relaxed text-ink-soft marker:font-medium marker:text-muted"
              >
                {block.items.map((it, j) => (
                  <li key={j} className="pl-1">
                    {it}
                  </li>
                ))}
              </ol>
            ) : (
              <ul
                key={i}
                className="my-3.5 list-disc space-y-1.5 pl-6 leading-relaxed text-ink-soft marker:text-muted"
              >
                {block.items.map((it, j) => (
                  <li key={j} className="pl-1">
                    {it}
                  </li>
                ))}
              </ul>
            )
          case 'checklist':
            return <Checklist key={i} items={block.items} />
          case 'flow':
            return <FlowDiagram key={i} steps={block.steps} />
          case 'table':
            return <DataTable key={i} head={block.head} rows={block.rows} />
          case 'callout':
            return (
              <Callout key={i} variant={block.variant} title={block.title}>
                {block.text}
              </Callout>
            )
          case 'definitions':
            return <Definitions key={i} items={block.items} />
          default:
            return null
        }
      })}
    </div>
  )
}
