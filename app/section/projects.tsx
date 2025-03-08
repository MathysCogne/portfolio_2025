'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Project, ProjectLink, getTexts } from '@/lib/constants'
import { useLanguage } from '@/components/LanguageProvider'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useId, useRef, useState } from 'react'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { cn } from '@/lib/utils'
import { SparklesText } from '@/ui/sparkles-text'

type IconName = keyof typeof Icons

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-slate-400"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}

const Icons = {
  globe: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  book: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  chart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
} as const

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()
  const { currentLang } = useLanguage()
  const t = getTexts(currentLang)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(null)
      }
    }

    if (active) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-balance leading-none tracking-tighter">
            <SparklesText text={t.projects.title} className="text-slate-200" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-slate-400 text-lg"
          >
            {t.projects.subtitle}
          </motion.p>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md h-full w-full z-50"
            />
          )}
        </AnimatePresence>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {active ? (
              <div className="fixed inset-0 grid place-items-center z-[100] p-4 sm:p-6 md:p-8">
                <motion.button
                  key={`button-${active.title}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="flex absolute top-4 right-4 sm:top-6 sm:right-6 items-center justify-center bg-slate-800/50 backdrop-blur-sm rounded-full h-8 w-8 sm:h-10 sm:w-10 border border-slate-700/50 hover:bg-slate-700/50 transition-colors"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[800px] max-h-[90vh] overflow-y-auto bg-[#0A101F]/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-800 scrollbar-thin scrollbar-track-slate-900/20 scrollbar-thumb-slate-700/50"
                >
                  <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 sm:gap-6 p-4 sm:p-6">
                    <div className="lg:col-span-2">
                      <motion.div 
                        layoutId={`image-${active.title}-${id}`} 
                        className="relative w-full aspect-video sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden"
                      >
                        <Image
                          src={active.image}
                          alt={active.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>

                    <div className="lg:col-span-3 flex flex-col">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                        <div>
                          <motion.h3
                            layoutId={`title-${active.title}-${id}`}
                            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
                          >
                            {active.title}
                          </motion.h3>
                          <motion.p
                            layoutId={`description-${active.description}-${id}`}
                            className="text-sm sm:text-base text-slate-400 mt-2"
                          >
                            {active.description}
                          </motion.p>
                        </div>
                      </div>

                      <div className="space-y-6 flex-grow">
                        <div>
                          <h4 className="text-base sm:text-lg font-medium text-slate-200 mb-3">
                            {t.projects.features}
                          </h4>
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            {active.expanded.features.map((feature) => (
                              <li 
                                key={feature}
                                className="flex items-start gap-2 text-sm text-slate-400"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-medium text-slate-200 mb-3">
                            {t.projects.technicalDetails}
                          </h4>
                          <p className="text-sm text-slate-400">
                            {active.expanded.technicalDetails}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {active.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs bg-blue-500/5 text-blue-400 rounded-full border border-blue-500/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                        {active.links.map((link) => {
                          const Icon = Icons[link.icon as keyof typeof Icons]
                          return (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 text-sm rounded-full font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 transition-colors"
                            >
                              <Icon className="h-4 w-4" />
                              {link.label}
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
        </motion.div>

        <ul className="grid grid-cols-1 gap-3 sm:gap-4">
          {t.projects.items.map((project: Project, index: number) => (
            <motion.div
              layoutId={`card-${project.title}-${id}`}
              key={project.title}
              onClick={() => setActive(project)}
              className="group p-3 sm:p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center bg-slate-800/50 hover:bg-slate-800/70 rounded-xl cursor-pointer transition-colors border border-slate-800 hover:border-slate-700/50"
            >
              <motion.div
                layoutId={`image-${project.title}-${id}`}
                className="relative w-full sm:w-24 aspect-video sm:aspect-square flex-shrink-0 rounded-lg overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="flex-grow">
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="text-base sm:text-lg font-medium text-slate-200 mb-1"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${project.description}-${id}`}
                  className="text-sm text-slate-400 mb-3 line-clamp-2"
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-blue-500/5 text-blue-400 rounded-full border border-blue-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                layoutId={`button-${project.title}-${id}`}
                className="hidden sm:flex items-center gap-2 flex-shrink-0 px-4 py-2 text-sm rounded-full font-medium bg-slate-700/50 text-slate-300 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors border border-transparent group-hover:border-blue-500/20"
              >
                <span>{t.projects.viewMore}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </ul>
      </div>
    </section>
  )
} 