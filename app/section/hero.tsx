'use client'

import { motion } from 'framer-motion'
import { LampContainer } from '@/ui/lamp-effect'
import { getTexts } from '@/lib/constants'
import { useLanguage } from '@/components/LanguageProvider'

export function Hero() {
  const { currentLang } = useLanguage()
  const t = getTexts(currentLang)

  return (
    <LampContainer>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent sm:text-5xl md:text-7xl">
          {t.hero.title}
          <br />
          <span className="mt-2 block text-lg sm:text-3xl md:text-3xl">
            {t.hero.name}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="mt-4 max-w-3xl mx-auto px-4 text-center text-x sm:text-sm md:text-base text-slate-400"
        >
          {t.hero.description1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="mt-2 max-w-4xl mx-auto px-4 text-center text-x sm:text-sm md:text-base text-slate-400"
        >
          {t.hero.description2}
        </motion.p>
      </div>
    </LampContainer>
  )
} 