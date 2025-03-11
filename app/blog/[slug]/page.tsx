import { notFound } from 'next/navigation';
import { formatDate, getBlogPosts } from '../_lib/blog';
import { baseUrl } from '@/sitemap';
import { SparklesText } from '@/ui/sparkles-text';
import Image from 'next/image';
import Link from 'next/link';
import { texts } from '@/lib/constants';

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    tags,
  } = post.metadata;
  
  // Générer l'URL de l'image OG
  const ogImage = image
    ? image // Utiliser l'image spécifiée dans le frontmatter si elle existe
    : `${baseUrl}/api/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description.substring(0, 50) + '...')}&type=blog`;

  // Créer des mots-clés à partir des tags ou utiliser des mots-clés par défaut
  const defaultKeywords = ["blog", texts.fr.metadata.authorName, "développeur web3", "article tech", "blockchain", "IA"];
  const keywordsList = tags ? [...tags, ...defaultKeywords] : defaultKeywords;
  const keywordsString = keywordsList.join(", ");

  return {
    title,
    description,
    keywords: keywordsString,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Image pour l'article: ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: texts.fr.metadata.twitterHandle,
    },
    authors: [{ name: texts.fr.metadata.authorName }],
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    other: {
      'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION,
    },
    // Ajout des métadonnées structurées Schema.org
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: description,
      image: ogImage,
      datePublished: publishedTime,
      dateModified: publishedTime,
      author: {
        '@type': 'Person',
        name: texts.fr.metadata.authorName,
        url: baseUrl
      },
      publisher: {
        '@type': 'Organization',
        name: texts.fr.metadata.authorName,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${baseUrl}/blog/${post.slug}`
      },
      keywords: keywordsString
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Blog',
          item: `${baseUrl}/blog`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: `${baseUrl}/blog/${post.slug}`
        }
      ]
    }]
  };
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-24 relative">
      {/* Effets de lueur décoratifs */}
      {/* <div className="absolute -top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" /> */}
      {/* <div className="absolute top-1/3 -right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl opacity-30" /> */}
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* En-tête de l'article */}
        <header className="mb-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-2"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span>Retour aux articles</span>
            </Link>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 leading-tight tracking-tighter">
            {post.metadata.title}
          </h1>
          
          <div className="flex items-center mt-6 text-sm text-slate-400">
            <time 
              dateTime={post.metadata.publishedAt}
              className="flex items-center justify-center px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 text-xs sm:text-sm"
            >
              {formatDate(post.metadata.publishedAt, true)}
            </time>
            {post.metadata.tags && (
              <div className="ml-4 flex flex-wrap gap-2">
                {post.metadata.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800/50 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>
        
        {/* Image de couverture si disponible */}
        {post.metadata.image && (
          <figure className="relative w-full h-[40vh] md:h-[50vh] rounded-2xl overflow-hidden mb-12 shadow-xl shadow-blue-900/10">
            <Image
              src={post.metadata.image}
              alt={`Image de couverture pour l'article : ${post.metadata.title}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-40" />
          </figure>
        )}
        
        {/* Séparateur décoratif */}
        <div className="flex justify-center mb-12">
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
        </div>
        
        {/* Contenu de l'article */}
        <article className="prose prose-invert max-w-none">
          <div className="prose prose-invert max-w-none
          prose-headings:text-balance
          prose-h1:text-3xl prose-h1:font-bold prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-blue-300 prose-h1:to-violet-300 prose-h1:mt-16 prose-h1:mb-8
          prose-h2:text-2xl prose-h2:font-bold prose-h2:text-white prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-xl prose-h3:font-semibold prose-h3:text-white prose-h3:mt-8 prose-h3:mb-4
          prose-h4:text-lg prose-h4:font-semibold prose-h4:text-white prose-h4:mt-6 prose-h4:mb-3
          prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-balance prose-p:my-6
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors prose-a:border-b prose-a:border-blue-500/30 hover:prose-a:border-blue-500/60
          prose-strong:text-slate-200 prose-strong:font-semibold
          prose-em:text-slate-300 prose-em:italic
          prose-ul:my-6 prose-ul:pl-6 prose-li:text-slate-300 prose-li:my-2 prose-li:marker:text-blue-400
          prose-ol:my-6 prose-ol:pl-6 prose-ol:list-decimal prose-ol:marker:text-blue-400
          prose-pre:bg-slate-800/50 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:p-4 prose-pre:my-8
          prose-code:text-blue-300 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500/30 prose-blockquote:bg-slate-800/30 prose-blockquote:rounded-r-lg prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-slate-300
          prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:mx-auto
          prose-hr:border-slate-800 prose-hr:my-12
          prose-table:border-collapse prose-table:w-full prose-table:my-8
          prose-th:bg-slate-800/50 prose-th:p-3 prose-th:text-left prose-th:font-medium prose-th:text-slate-200 prose-th:border prose-th:border-slate-700
          prose-td:p-3 prose-td:border prose-td:border-slate-800 prose-td:text-slate-300
          prose-figure:my-10 prose-figure:mx-auto
          prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-slate-400 prose-figcaption:mt-3" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        
        {/* Footer de l'article */}
        <section className="mt-16 pt-8 border-t border-slate-800">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-violet-600/20 hover:from-blue-600/30 hover:to-violet-600/30 text-blue-400 hover:text-blue-300 transition-all border border-blue-500/20 hover:border-blue-500/40"
          >
            <span>Voir tous les articles</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </section>
      </div>
    </article>
  );
}
