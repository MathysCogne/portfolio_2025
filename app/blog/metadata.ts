import { Metadata } from 'next'
import { texts } from '@/lib/constants'
import { baseUrl } from '@/sitemap'

export const metadata: Metadata = {
  title: texts.fr.blog.title,
  description: texts.fr.blog.description,
  keywords: "blog tech, développement web, blockchain, web3, intelligence artificielle, tutoriels, programmation, développeur, Mathys Cogné Foucault",
  openGraph: {
    title: texts.fr.blog.title,
    description: texts.fr.blog.description,
    url: `${baseUrl}/blog`,
    type: texts.fr.metadata.siteType,
    siteName: texts.fr.metadata.authorName,
    locale: texts.fr.metadata.siteLocale,
    images: [
      {
        url: `${baseUrl}/api/og?title=${encodeURIComponent(texts.fr.blog.title)}&subtitle=${encodeURIComponent(texts.fr.blog.description.substring(0, 50) + '...')}&type=blog`,
        width: 1200,
        height: 630,
        alt: texts.fr.blog.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: texts.fr.blog.title,
    description: texts.fr.blog.description,
    creator: texts.fr.metadata.twitterHandle,
    images: [
      `${baseUrl}/api/og?title=${encodeURIComponent(texts.fr.blog.title)}&subtitle=${encodeURIComponent(texts.fr.blog.description.substring(0, 50) + '...')}&type=blog`,
    ],
  },
  authors: [{ name: texts.fr.metadata.authorName }],
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
} 