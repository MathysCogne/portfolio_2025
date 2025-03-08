import { BlogPosts } from './_components/posts'
import { texts } from '@/lib/constants'
import { SparklesText } from '@/ui/sparkles-text'
import { Metadata } from 'next'
import { baseUrl } from '@/sitemap'

export const metadata: Metadata = {
  title: texts.blog.title,
  description: texts.blog.description,
  keywords: "blog tech, développement web, blockchain, web3, intelligence artificielle, tutoriels, programmation, développeur, Mathys Cogné Foucault",
  openGraph: {
    title: texts.blog.title,
    description: texts.blog.description,
    url: `${baseUrl}/blog`,
    type: texts.metadata.siteType,
    siteName: texts.metadata.authorName,
    locale: texts.metadata.siteLocale,
    images: [
      {
        url: `${baseUrl}/api/og?title=${encodeURIComponent(texts.blog.title)}&subtitle=${encodeURIComponent(texts.blog.description.substring(0, 50) + '...')}&type=blog`,
        width: 1200,
        height: 630,
        alt: texts.blog.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: texts.blog.title,
    description: texts.blog.description,
    creator: texts.metadata.twitterHandle,
    images: [
      `${baseUrl}/api/og?title=${encodeURIComponent(texts.blog.title)}&subtitle=${encodeURIComponent(texts.blog.description.substring(0, 50) + '...')}&type=blog`,
    ],
  },
  authors: [{ name: texts.metadata.authorName }],
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
}

export default async function Page() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-balance leading-none tracking-tighter">
              <SparklesText 
                text={texts.blog.title} 
                className="text-slate-200"
                colors={{ first: "#60A5FA", second: "#A78BFA" }}
              />
            </h1>
          </div>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            {texts.blog.description}
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
          </div>
        </div>
        
        <div className="relative">
          {/* Effet de lueur décoratif */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl opacity-30" />
          
          {/* Contenu du blog */}
          <div className="relative z-10">
            <BlogPosts />
          </div>
        </div>
      </div>
    </section>
  )
} 