import { Hero } from './section/hero'
import { Resume } from './section/resume'
import { Projects } from './section/projects'
import { Hackathons } from './section/hackathons'

export default function Page() {
  return (
    <section>
      <Hero />
      <Resume />
      <Projects />
      <Hackathons />
    </section>
  )
}
