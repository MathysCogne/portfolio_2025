import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
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
    metadata[key.trim() as keyof Metadata] = value
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

export async function getBlogPosts(): Promise<Post[]> {
  try {
    return await getMDXData(path.join(process.cwd(), 'app', 'blog', '_posts'))
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
