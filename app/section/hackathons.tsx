'use client'

import { motion } from 'framer-motion'
import { type Event, getTexts } from '@/lib/constants'
import { useLanguage } from '@/components/LanguageProvider'
import { Timeline, TimelineEvent } from '@/ui/timeline'
import { SparklesText } from '@/ui/sparkles-text'
import { remark } from 'remark'
import html from 'remark-html'
import { useEffect, useState } from 'react'

// Fonction pour convertir le Markdown en HTML
async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .process(markdown)
  return result.toString()
}

// Composant pour afficher le contenu Markdown
function MarkdownContent({ content }: { content: string }) {
  const [htmlContent, setHtmlContent] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    markdownToHtml(content).then(html => {
      setHtmlContent(html)
      setIsLoaded(true)
      
      // Déclencher un événement de redimensionnement pour forcer la mise à jour de la timeline
      window.dispatchEvent(new Event('resize'))
    })
  }, [content])

  return (
    <div 
      className={`prose prose-invert max-w-none
      prose-h2:text-lg prose-h2:font-bold prose-h2:text-slate-200 prose-h2:mt-0 prose-h2:mb-2
      prose-h3:text-base prose-h3:font-semibold prose-h3:text-slate-300 prose-h3:mt-2 prose-h3:mb-1
      prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-balance prose-p:text-wrap prose-p:text-sm
      prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
      prose-strong:text-slate-200 prose-strong:font-semibold
      prose-ul:my-2 prose-li:text-slate-300 prose-li:my-0.5 prose-li:text-sm
      prose-img:rounded-xl prose-img:shadow-lg prose-img:my-2 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}

export function Hackathons() {
  const { currentLang } = useLanguage()
  const t = getTexts(currentLang)

  const timelineEvents: TimelineEvent[] = t.hackathons.events.map(event => ({
    title: event.title,
    date: event.date,
    description: event.description,
    tags: [...event.tags],
    link: event.link,
    formattedDescription: <MarkdownContent content={event.description} />
  }))

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-balance leading-none tracking-tighter">
            <SparklesText text={t.hackathons.title} className="text-slate-200" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-slate-400 text-lg"
          >
            {t.hackathons.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Timeline events={timelineEvents} />
        </motion.div>
      </div>
    </section>
  )
} 