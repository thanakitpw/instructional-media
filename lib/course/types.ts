export type Block =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'code'; lang: string; code: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'checklist'; items: string[] }
  | { type: 'flow'; steps: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'callout'; variant?: 'note' | 'warning' | 'key'; title?: string; text: string }
  | { type: 'definitions'; items: { term: string; desc: string }[] }

export interface Section {
  title: string
  blocks: Block[]
}

export interface Lesson {
  title: string
  sections: Section[]
}
