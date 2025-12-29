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
            A selection of systems I've built. Each project includes
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
                {/* Project Image */}
                <div className="aspect-video rounded-lg mb-4 relative overflow-hidden group-hover:ring-2 group-hover:ring-cyan-500/50 transition-all duration-500">
                  {/* Background with gradient fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-850 to-dark-900" />
                  
                  {/* Project thumbnail image */}
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      // Hide image on error and show fallback
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 rounded-md bg-dark-900/80 backdrop-blur-sm border border-dark-700 text-cyan-400 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* View project indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2 rounded-lg bg-dark-900/90 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                      View Case Study
                    </div>
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
