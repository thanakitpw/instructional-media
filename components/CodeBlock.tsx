import hljs from 'highlight.js'
import CopyButton from './CopyButton'

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const LANG_LABEL: Record<string, string> = {
  json: 'JSON',
  bash: 'Shell',
  ts: 'TypeScript',
  tsx: 'TSX',
  js: 'JavaScript',
  text: 'Text',
}

export default function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const canHighlight = Boolean(lang && lang !== 'text' && hljs.getLanguage(lang))
  const html = canHighlight
    ? hljs.highlight(code, { language: lang }).value
    : escapeHtml(code)
  const label = LANG_LABEL[lang] ?? (lang ? lang.toUpperCase() : 'Text')

  return (
    <div className="my-5 overflow-hidden rounded-xl bg-code-bg shadow-sm ring-1 ring-black/5">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5">
        <span className="font-mono text-xs tracking-wide text-slate-400">
          {label}
        </span>
        <CopyButton code={code} />
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 text-[0.85rem] leading-relaxed">
        <code
          className="hljs font-mono"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  )
}
