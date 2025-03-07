import Link from 'next/link'
import { formatDate, getBlogPosts } from '../_lib/blog'
import Image from 'next/image'

export async function BlogPosts() {
  let allBlogs = await getBlogPosts()

  if (!allBlogs.length) {
    return (
      <div className="flex flex-col space-y-4">
        <p className="text-slate-400 text-center py-12 border border-dashed border-slate-800 rounded-xl">
          Aucun article de blog trouvé.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-8">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post, index) => (
          <div key={post.slug}>
            <Link
              className="group flex flex-col space-y-2 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 hover:from-blue-950/30 hover:to-violet-950/30 transition-all duration-300 border border-slate-800 hover:border-blue-500/20 shadow-lg hover:shadow-blue-500/5"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col space-y-4">
                {post.metadata.image && (
                  <div className="relative w-full h-48 rounded-xl overflow-hidden">
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 group-hover:from-blue-300 group-hover:to-violet-300 transition-colors duration-300">
                      {post.metadata.title}
                    </h2>
                    <p className="mt-2 text-slate-400 line-clamp-2 text-sm sm:text-base">
                      {post.metadata.summary}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 text-xs sm:text-sm tabular-nums">
                    {formatDate(post.metadata.publishedAt, true)}
                  </div>
                </div>
                
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}
