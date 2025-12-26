import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Card, { CardContent, CardFooter, CardHeader, CardTitle } from '../components/Card'
import Badge from '../components/Badge'
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from '../components/Icons'
import { projects } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { CircuitPattern, FloatingParticles } from '../components/AIVisuals'

export default function Projects() {
  useEffect(() => {
    document.title = `Projects | ${siteConfig.name}`
  }, [])

  return (
    <div className="animate-fade-in bg-dark-950 min-h-screen">
      {/* Header */}
      <section className="section-spacing bg-dark-900 relative overflow-hidden">
        <CircuitPattern className="opacity-20" />
        <FloatingParticles count={15} />
        <div className="container-narrow relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-4">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Featured Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl">
            A selection of production systems I've built. Each project includes
            a detailed case study covering architecture, challenges, and results.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.slug} hover className="flex flex-col group" style={{ animationDelay: `${index * 150}ms` }}>
                {/* Thumbnail Placeholder with AI styling */}
                <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg mb-4 flex items-center justify-center border border-dark-700 relative overflow-hidden group-hover:border-cyan-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id={`grid-${project.slug}`} width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/20" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#grid-${project.slug})`} />
                    </svg>
                  </div>
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-dark-400 text-sm font-medium">{project.category}</span>
                  </div>
                </div>

                <CardHeader className="mb-2">
                  <CardTitle as="h2" className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  {/* Problem */}
                  <div>
                    <h3 className="text-sm font-medium text-cyan-400 mb-1">
                      Problem
                    </h3>
                    <p className="text-dark-300 text-sm">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-sm font-medium text-cyan-400 mb-1">
                      What I Built
                    </h3>
                    <p className="text-dark-300 text-sm">
                      {project.solution}
                    </p>
                  </div>

                  {/* Role */}
                  <div>
                    <h3 className="text-sm font-medium text-cyan-400 mb-1">
                      Role
                    </h3>
                    <p className="text-dark-300 text-sm">
                      {project.role}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-sm font-medium text-cyan-400 mb-2">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <Badge key={tech} size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h3 className="text-sm font-medium text-cyan-400 mb-2">
                      Key Metrics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, idx) => (
                        <Badge key={idx} variant="success" size="sm">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-wrap items-center justify-between gap-4">
                  {/* External Links */}
                  <div className="flex items-center gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-dark-400 hover:text-cyan-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.type === 'repo' ? (
                          <GitHubIcon size={16} />
                        ) : (
                          <ExternalLinkIcon size={16} />
                        )}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>

                  {/* Case Study Link */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    Read Case Study
                    <ArrowRightIcon size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
