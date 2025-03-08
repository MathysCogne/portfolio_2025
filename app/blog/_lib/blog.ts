import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  tags?: string[]
}

type Post = {
  metadata: Metadata
  slug: string
  content: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    
    // Gestion spéciale pour les tags qui doivent être un tableau
    if (key.trim() === 'tags') {
      // Si la valeur est entre crochets, on la parse comme un tableau
      if (value.startsWith('[') && value.endsWith(']')) {
        const tagsString = value.slice(1, -1)
        metadata.tags = tagsString
          .split(',')
          .map(tag => tag.trim())
          .filter(tag => tag.length > 0)
      } else {
        metadata.tags = value ? [value] : []
      }
    } else {
      // Pour les autres champs, on garde le comportement normal
      metadata[key.trim() as keyof Metadata] = value as any
    }
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

async function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  let { metadata, content } = parseFrontmatter(rawContent)
  
  // Convert MDX to HTML
  const processedContent = await remark()
    .use(html)
    .process(content)
  
  const contentHtml = processedContent.toString()
  
  return { metadata, content: contentHtml }
}

async function getMDXData(dir: string): Promise<Post[]> {
  let mdxFiles = getMDXFiles(dir)
  const posts: Post[] = []
  
  for (const file of mdxFiles) {
    const { metadata, content } = await readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))
    
    posts.push({
      metadata,
      slug,
      content,
    })
  }
  
  return posts
}

export function formatDate(date: string, includeYear = false) {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    ...(includeYear && { year: 'numeric' }),
  }
  return new Date(date).toLocaleDateString('fr-FR', options)
}

export async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'app', 'blog', '_posts')
  return getMDXData(postsDirectory)
}
