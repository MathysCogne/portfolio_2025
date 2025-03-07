import './styles/global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '@/components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/footer'
import { baseUrl } from '@/sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Mathys Cogné Foucault - Developpeur | Blog and Portfolio',
    template: '%s | Mathys Cogné Foucault - Developpeur | Blog and Portfolio',
  },
  description: 'Mathys Cogné Foucault - Developpeur | Blog and Portfolio',
  openGraph: {
    title: 'Portfolio Mathys Cogné Foucault',
    description: 'Mathys Cogné Foucault - Developpeur | Blog and Portfolio',
    url: baseUrl,
    siteName: 'Mathys Cogné Foucault',
    locale: 'fr-FR',
    type: 'website',
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
    title: 'Mathys Cogné Foucault - Developpeur | Blog and Portfolio',
    card: 'summary_large_image',
  },
  verification: {
    google: 'google-site-verification',
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
