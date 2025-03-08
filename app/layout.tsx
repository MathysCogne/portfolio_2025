import './styles/global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '@/components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/footer'
import { baseUrl } from '@/sitemap'
import { texts } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: texts.metadata.siteTitle,
    template: `%s | ${texts.metadata.siteTitle}`,
  },
  description: texts.metadata.siteDescription,
  keywords: texts.metadata.siteKeywords,
  openGraph: {
    title: texts.metadata.siteTitle,
    description: texts.metadata.siteDescription,
    url: baseUrl,
    siteName: texts.metadata.authorName,
    locale: texts.metadata.siteLocale,
    type: texts.metadata.siteType,
    images: [
      {
        url: `${baseUrl}/api/og?title=${encodeURIComponent(texts.metadata.siteTitle)}&subtitle=${encodeURIComponent('Développeur Web3 & IA')}`,
        width: 1200,
        height: 630,
        alt: texts.metadata.siteTitle,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: texts.metadata.siteTitle,
    card: 'summary_large_image',
    description: texts.metadata.siteDescription,
    creator: texts.metadata.twitterHandle,
    images: [
      `${baseUrl}/api/og?title=${encodeURIComponent(texts.metadata.siteTitle)}&subtitle=${encodeURIComponent('Développeur Web3 & IA')}`,
    ],
  },
  verification: {
    google: 'google-site-verification',
  },
  authors: [{ name: texts.metadata.authorName }],
  creator: texts.metadata.authorName,
  category: texts.metadata.siteCategory,
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-slate-950 text-white antialiased selection:bg-cyan-500/70 selection:text-cyan-50">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1 w-full">
            <div className="container mx-auto px-0 sm:px-6 lg:px-8">
              <main className="flex-auto">
                {children}
              </main>
            </div>
          </div>
          <Footer />
          <Navbar />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
