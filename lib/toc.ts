import GithubSlugger from 'github-slugger'

export interface TocItem {
  id: string
  title: string
  level: number
  children: TocItem[]
}

interface FlatHeading {
  id: string
  title: string
  level: number
}

export function parseToc(markdown: string, maxLevel = 3): TocItem[] {
  const slugger = new GithubSlugger()
  const lines = markdown.split('\n')
  const flat: FlatHeading[] = []
  let inFence = false

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    const m = /^(#{1,6})\s+(.+?)\s*$/.exec(line)
    if (!m) continue

    const level = m[1].length
    const title = m[2].trim()
    // slug ทุก heading ตามลำดับ เพื่อให้ dedup ตรงกับ rehype-slug
    const id = slugger.slug(title)

    if (level <= maxLevel) {
      flat.push({ id, title, level })
    }
  }

  return nest(flat)
}

function nest(flat: FlatHeading[]): TocItem[] {
  const root: TocItem[] = []
  const stack: TocItem[] = []

  for (const h of flat) {
    const node: TocItem = { ...h, children: [] }
    while (stack.length && stack[stack.length - 1].level >= node.level) {
      stack.pop()
    }
    if (stack.length) {
      stack[stack.length - 1].children.push(node)
    } else {
      root.push(node)
    }
    stack.push(node)
  }

  return root
}
