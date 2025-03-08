import { getBlogPosts } from '@/blog/_lib/blog'

export const baseUrl = 'https://www.mathys-cognefoucault.fr/'

// Force le rendu statique de cette route
export const dynamic = 'force-static'
export const revalidate = false

export default async function sitemap() {
  let posts = await getBlogPosts()

  let blogs = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
} 