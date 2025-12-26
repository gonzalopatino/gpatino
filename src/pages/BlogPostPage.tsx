import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { LinkedInIcon, GitHubIcon } from '../components/Icons'
import { GridBackground } from '../components/AIVisuals'
import { siteConfig } from '../data/siteConfig'
import { getBlogPost, blogPosts } from '../data/blog'

// Arrow left icon component
function ArrowLeftIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  )
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = getBlogPost(slug || '')
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | ${siteConfig.name}`
    }
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-dark-400 mb-6">The article you're looking for doesn't exist.</p>
          <Button as="link" to="/blog" variant="primary">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    )
  }

  const categoryColors: Record<string, string> = {
    'AI/ML': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Software Engineering': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Career': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Tutorials': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'Industry': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  }

  // Get related posts
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <GridBackground />
        
        <div className="container-narrow relative z-10">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${categoryColors[post.category]}`}>
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-dark-400">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-semibold">
                  GP
                </div>
                <span className="text-white font-medium">{post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <div className="prose-dark">
                {post.content.split('\n').map((paragraph, index) => {
                  // Handle headings
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index}>{paragraph.replace('## ', '')}</h2>
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={index}>{paragraph.replace('### ', '')}</h3>
                  }
                  // Handle code blocks
                  if (paragraph.startsWith('```')) {
                    return null // Skip code fence markers
                  }
                  // Handle list items
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-dark-300">
                        {paragraph.replace('- ', '')}
                      </li>
                    )
                  }
                  if (paragraph.startsWith('- [ ]')) {
                    return (
                      <li key={index} className="text-dark-300 flex items-start gap-2">
                        <span className="w-4 h-4 border border-dark-500 rounded mt-1 flex-shrink-0" />
                        {paragraph.replace('- [ ] ', '')}
                      </li>
                    )
                  }
                  // Handle bold text
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split('**')
                    return (
                      <p key={index}>
                        {parts.map((part, i) => 
                          i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                        )}
                      </p>
                    )
                  }
                  // Regular paragraphs
                  if (paragraph.trim()) {
                    return <p key={index}>{paragraph}</p>
                  }
                  return null
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-dark-700">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="neutral" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-dark-700">
                <h3 className="text-lg font-semibold text-white mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                  >
                    𝕏
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                  >
                    <LinkedInIcon size={18} />
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold text-lg">
                      GP
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{siteConfig.name}</h4>
                      <p className="text-sm text-dark-400">{siteConfig.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-dark-300 mb-4">
                    {siteConfig.about.summary.slice(0, 150)}...
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      <GitHubIcon size={16} />
                    </a>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      <LinkedInIcon size={16} />
                    </a>
                  </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="glass-card p-6">
                    <h4 className="font-semibold text-white mb-4">Related Articles</h4>
                    <div className="space-y-4">
                      {relatedPosts.map(relatedPost => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <h5 className="text-sm font-medium text-dark-200 group-hover:text-primary-400 transition-colors line-clamp-2 mb-1">
                            {relatedPost.title}
                          </h5>
                          <p className="text-xs text-dark-500">{relatedPost.readTime}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
