import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import CodeBlock from './CodeBlock'

export default function CourseContent({ markdown }: { markdown: string }) {
  return (
    <article className="prose prose-slate max-w-3xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeHighlight]}
        components={{ pre: CodeBlock }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  )
}
