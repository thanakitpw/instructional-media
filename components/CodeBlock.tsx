import hljs from 'highlight.js'
import CopyButton from './CopyButton'

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export default function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const canHighlight = Boolean(lang && lang !== 'text' && hljs.getLanguage(lang))
  const html = canHighlight
    ? hljs.highlight(code, { language: lang }).value
    : escapeHtml(code)

  return (
    <div className="group relative my-4">
      <CopyButton code={code} />
      <pre className="overflow-x-auto rounded-lg text-sm leading-relaxed">
        <code
          className="hljs block rounded-lg p-4"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  )
}
