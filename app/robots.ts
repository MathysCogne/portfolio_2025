import { baseUrl } from '@/sitemap'

// Force le rendu statique de cette route
export const dynamic = 'force-static'
export const revalidate = false

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
