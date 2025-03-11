import { BlogPosts } from './_components/posts'
import { texts } from '@/lib/constants'
import { SparklesText } from '@/ui/sparkles-text'
import { metadata } from './metadata'

export { metadata }

export default async function Page() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-balance leading-none tracking-tighter">
              <SparklesText 
                text={texts.fr.blog.title} 
                className="text-slate-200"
                colors={{ first: "#60A5FA", second: "#A78BFA" }}
              />
            </h1>
          </div>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            {texts.fr.blog.description}
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
          </div>
        </div>
        
        <div className="relative">
          
          {/* Contenu du blog */}
          <div className="relative z-10">
            <BlogPosts />
          </div>
        </div>
      </div>
    </section>
  )
}