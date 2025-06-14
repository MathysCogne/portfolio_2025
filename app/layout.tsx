import './styles/global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '@/components/nav'
import { NavMobile } from '@/components/nav-mobile'
import Footer from '@/components/footer'
import { baseUrl } from '@/sitemap'
import { texts } from '@/lib/constants'
import { LanguageProvider } from '@/components/LanguageProvider'


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: texts.fr.metadata.siteTitle,
    template: `%s | ${texts.fr.metadata.siteTitle}`,
  },
  description: texts.fr.metadata.siteDescription,
  keywords: texts.fr.metadata.siteKeywords,
  openGraph: {
    title: texts.fr.metadata.siteTitle,
    description: texts.fr.metadata.siteDescription,
    url: baseUrl,
    siteName: texts.fr.metadata.authorName,
    locale: texts.fr.metadata.siteLocale,
    type: texts.fr.metadata.siteType,
    images: [
      {
        url: `${baseUrl}/api/og?title=${encodeURIComponent(texts.fr.metadata.siteTitle)}&subtitle=${encodeURIComponent('Développeur Web3 & IA')}`,
        width: 1200,
        height: 630,
        alt: texts.fr.metadata.siteTitle,
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
    title: texts.fr.metadata.siteTitle,
    card: 'summary_large_image',
    description: texts.fr.metadata.siteDescription,
    creator: texts.fr.metadata.twitterHandle,
    images: [
      `${baseUrl}/api/og?title=${encodeURIComponent(texts.fr.metadata.siteTitle)}&subtitle=${encodeURIComponent('Développeur Web3 & IA')}`,
    ],
  },
  verification: {
    google: 'google-site-verification',
  },
  authors: [{ name: texts.fr.metadata.authorName }],
  creator: texts.fr.metadata.authorName,
  category: texts.fr.metadata.siteCategory,
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-slate-950 text-white antialiased selection:bg-cyan-500/70 selection:text-cyan-50">
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1 w-full">
              <div className="container mx-auto px-0 sm:px-6 lg:px-8">
                <main className="flex-auto pb-24 md:pb-0">
                  {children}
                </main>
              </div>
            </div>
            <Footer />
            <Navbar />
            <NavMobile />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
