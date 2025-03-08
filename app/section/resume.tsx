'use client'

import { motion } from 'framer-motion'
import { getTexts } from '@/lib/constants'
import { useLanguage } from '@/components/LanguageProvider'
import Image from 'next/image'
import Link from 'next/link'
import { LineShadowText } from '@/ui/line-shadow-text'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function Resume() {
  const { currentLang } = useLanguage()
  const t = getTexts(currentLang)

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-balance leading-none tracking-tighter">
           {t.resume.beforetitle} <LineShadowText className="italic" shadowColor="#8FFFFF">{t.resume.title}</LineShadowText>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-slate-400 text-lg"
          >
            {t.resume.subtitle}
          </motion.p>
        </div>

        {/* Expérience */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            {...fadeInUp}
            className="text-m font-medium text-slate-200 mb-8 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
          >
            {t.resume.experience.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.resume.experience.items.map((item, index) => (
              <Link 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.company}
              >
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm text-slate-400">{item.company}</p>
                    <p className="text-xs text-slate-500">{item.period}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Formation */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            {...fadeInUp}
            className="text-m font-medium text-slate-200 mb-8 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
          >
            {t.resume.education.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.resume.education.items.map((item, index) => (
              <Link 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.school}
              >
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={item.logo}
                      alt={item.school}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-slate-400">{item.school}</p>
                    <p className="text-xs text-slate-500">{item.period}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Compétences */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            {...fadeInUp}
            className="text-m font-medium text-slate-200 mb-8 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
          >
            {t.resume.skills.title}
          </motion.h2>
          <motion.div 
            {...fadeInUp}
            className="flex flex-wrap gap-2"
          >
            {t.resume.skills.items.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1 text-sm bg-slate-800/30 text-slate-300 rounded-md"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 