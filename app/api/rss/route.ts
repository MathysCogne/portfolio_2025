import { baseUrl } from '@/sitemap'
import { getBlogPosts } from '@/blog/_lib/blog'
import { texts } from '@/lib/constants'
// Force le rendu statique de cette route API
export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  let allBlogs = await getBlogPosts()

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .map(
      (post) =>
        `<item>
          <title><![CDATA[${post.metadata.title}]]></title>
          <link>${baseUrl}blog/${post.slug}</link>
          <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
          <description><![CDATA[${post.metadata.summary || ''}]]></description>
          <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
          ${post.metadata.tags ? `<category><![CDATA[${post.metadata.tags.join(', ')}]]></category>` : ''}
          <author>${texts.fr.metadata.authorName}</author>
          ${post.metadata.image ? `<enclosure url="${post.metadata.image}" type="image/jpeg"/>` : ''}
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
    <channel>
      <title><![CDATA[${texts.fr.metadata.siteTitle}]]></title>
      <link>${baseUrl}</link>
      <description><![CDATA[${texts.fr.metadata.siteDescription}]]></description>
      <language>fr</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <generator>Next.js</generator>
      <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
      <image>
        <url>${baseUrl}/logo.png</url>
        <title><![CDATA[${texts.fr.metadata.siteTitle}]]></title>
        <link>${baseUrl}</link>
      </image>
      ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml;charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
