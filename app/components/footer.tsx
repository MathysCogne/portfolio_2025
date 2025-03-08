'use client'

import { MorphingText } from '@/ui/morphing-text'
import { WavyBackground } from '@/ui/wavy-background'
import { getTexts } from '@/lib/constants'
import { useLanguage } from '@/components/LanguageProvider'

export default function Footer() {
  const { currentLang } = useLanguage()
  const t = getTexts(currentLang)
  const morphingTexts = [...t.footer.morphingTexts]

  return (
    <footer className="relative mt-12 overflow-hidden">
      <WavyBackground 
        className="w-full px-4"
        containerClassName="relative w-full h-auto min-h-[50vh] flex flex-col items-center justify-center"
        colors={['#38bdf8', '#818cf8', '#c084fc', '#e879f9']}
        waveWidth={100}
        backgroundFill="#020617"
        blur={10}
        speed="slow"
        waveOpacity={0.5}
      >
        <div className="text-center z-10">
          <div className="">
            <MorphingText texts={morphingTexts} className="text-4xl md:text-5xl lg:text-7xl" />
          </div>
        </div>
      </WavyBackground>

      <div className="min-h-[8vh]"></div>
    </footer>
  )
} 