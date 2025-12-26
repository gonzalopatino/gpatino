import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card, { CardContent, CardHeader, CardTitle } from '../components/Card'
import Badge from '../components/Badge'
import { ArrowRightIcon } from '../components/Icons'
import { GridBackground, NeuralNetworkBg } from '../components/AIVisuals'
import { siteConfig } from '../data/siteConfig'
import { blogPosts, getFeaturedPosts } from '../data/blog'

export default function Blog() {
  const featuredPosts = getFeaturedPosts()
  const recentPosts = blogPosts.slice(0, 5)

  useEffect(() => {
    document.title = `Blog | ${siteConfig.name}`
  }, [])

  const categoryColors: Record<string, string> = {
    'AI/ML': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Software Engineering': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Career': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Tutorials': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'Industry': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <GridBackground />
        <NeuralNetworkBg className="opacity-20" />
        
        <div className="container-narrow relative z-10">
          <div className="text-center">
            <Badge variant="primary" className="mb-4">
              Insights & Tutorials
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              The <span className="gradient-text">Engineering Blog</span>
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Practical insights on AI/ML engineering, software architecture, and building 
              production systems. Written from real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-spacing relative">
        <div className="container-narrow">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              Featured <span className="gradient-text">Articles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <Link 
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group"
              >
                <Card 
                  hover 
                  className="h-full animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                >
                  {/* Featured Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 rounded-t-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.3)_0%,transparent_70%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                        {post.category === 'AI/ML' ? '🧠' : post.category === 'Software Engineering' ? '⚙️' : '📝'}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 text-sm text-dark-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-dark-400 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary-400 text-sm font-medium group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRightIcon size={16} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* All Posts */}
          <h2 className="text-2xl font-bold text-white mb-6">
            All <span className="gradient-text">Articles</span>
          </h2>
          
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <Link 
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <Card 
                  hover 
                  padding="md"
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` } as React.CSSProperties}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${categoryColors[post.category]}`}>
                          {post.category}
                        </span>
                        <span className="text-sm text-dark-500">{post.date}</span>
                        <span className="text-sm text-dark-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors mb-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-dark-400 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ArrowRightIcon size={20} className="text-dark-500 group-hover:text-primary-400 transition-colors" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-30" />
        
        <div className="container-narrow relative z-10">
          <Card className="text-center p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-dark-300 mb-6 max-w-md mx-auto">
              Get notified when I publish new articles on AI engineering, software architecture, and production systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-dark-800 border border-dark-600 text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-cyan text-white font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
