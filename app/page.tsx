'use client'

import { Hero } from './section/hero'
import { Resume } from './section/resume'
import { Projects } from './section/projects'
import { Hackathons } from './section/hackathons'
import { LazySection } from './components/LazySection'
import { useIsFirefox } from './lib/hooks/useIsFirefox'

export default function Page() {
  return (
    <section>
      <Hero />
      <LazySection>
        <Resume />
      </LazySection>
      {/* <LazySection> */}
        <Projects />
      {/* </LazySection> */}
      <LazySection>
        <Hackathons />
      </LazySection>
    </section>
  )
}
