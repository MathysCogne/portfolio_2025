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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="mt-16"
        >
          <motion.button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              })
            }}
            whileHover={{ y: 5 }}
            className="group flex flex-col items-center gap-2"
          >

            <motion.div
              animate={{
                y: [0, 4, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                className="h-6 w-6 text-slate-400 transition-colors group-hover:text-slate-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </LampContainer>
  )
} 