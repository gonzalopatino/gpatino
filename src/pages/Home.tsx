import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '../components/Button'
import Badge from '../components/Badge'
import Card, { CardContent, CardFooter, CardHeader, CardTitle } from '../components/Card'
import { GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon, ArrowRightIcon } from '../components/Icons'
import { GridBackground, NeuralNetworkBg, CodeTerminal } from '../components/AIVisuals'
import { siteConfig } from '../data/siteConfig'
import { getFeaturedProjects } from '../data/projects'

export default function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 3)

  useEffect(() => {
    document.title = `${siteConfig.name} | ${siteConfig.role}`
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <GridBackground />
        <NeuralNetworkBg className="opacity-30" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              {/* Status indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800/50 border border-dark-700 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs text-dark-300">Available for opportunities</span>
              </div>

              <p className="text-primary-400 font-mono text-sm mb-3 tracking-wide">
                {siteConfig.tagline}
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-primary-400 via-accent-cyan to-primary-500 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
              </h1>

              {/* Role badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium">
                  🧠 AI Software Engineer
                </span>
                <span className="px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium">
                  💻 Computer Scientist
                </span>
              </div>
              
              <p className="text-lg sm:text-xl text-dark-300 mb-4 leading-relaxed max-w-xl">
                {siteConfig.heroTagline}
              </p>
              
              <p className="text-dark-400 mb-8 max-w-xl">
                {siteConfig.about.education}
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button as="link" to="/projects" size="lg" variant="glow">
                  View Projects
                  <ArrowRightIcon className="ml-2" size={18} />
                </Button>
                <Button as="a" href={siteConfig.social.thinksenselabs} target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
                  ThinkSense Labs
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors group"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors group"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href={siteConfig.social.resumeUrl}
                  className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors group"
                  aria-label="Download Resume"
                >
                  <DownloadIcon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Resume</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors group"
                  aria-label="Send Email"
                >
                  <EmailIcon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>

            {/* Terminal Visual */}
            <div className="hidden lg:block animate-slide-in-right">
              <CodeTerminal
                title="gonzalo@portfolio ~ "
                lines={[
                  { prefix: '$', text: 'whoami' },
                  { text: 'Computer Scientist & AI Engineer', color: 'text-primary-400' },
                  { prefix: '$', text: 'cat skills.json' },
                  { text: '{"core": ["Python", "C++", "TypeScript"]}', color: 'text-accent-cyan' },
                  { prefix: '$', text: 'cat focus.txt' },
                  { text: 'Embedded AI • ML Systems • Full Stack', color: 'text-dark-300' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
        
        <div className="container-narrow relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What I <span className="gradient-text">Build</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Specialized in systems where software meets hardware, and where AI meets production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.specialties.map((specialty, index) => (
              <Card 
                key={specialty.label} 
                padding="lg" 
                hover
                className="animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary-400 to-accent-cyan" />
                </div>
                <CardHeader className="mb-2">
                  <CardTitle as="h3" className="text-lg">
                    {specialty.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-dark-400">
                    {specialty.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals / Results Section */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 neural-bg" />
        
        <div className="container-narrow relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Results I've <span className="gradient-text">Delivered</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {siteConfig.trustSignals.map((signal, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-dark-200">{signal}</p>
              </div>
            ))}
          </div>

          {/* Toolbox */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-white mb-8 text-center">
              Technical Toolbox
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.toolbox.map((category, index) => (
                <div 
                  key={category.category}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-sm font-medium text-primary-400 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span key={tool} className="tech-chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900/50" />
        
        <div className="container-narrow relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-dark-400">Production systems with detailed case studies</p>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 transition-colors"
            >
              View all
              <ArrowRightIcon size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Link 
                key={project.slug} 
                to={`/projects/${project.slug}`}
                className="group"
              >
                <Card 
                  hover 
                  className="h-full flex flex-col animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` } as React.CSSProperties}
                >
                  {/* Project Visual */}
                  <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                    <div className="relative z-10 text-center p-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-400 to-accent-cyan" />
                      </div>
                      <p className="text-dark-400 text-sm">View Case Study</p>
                    </div>
                  </div>

                  <CardHeader className="mb-2">
                    <CardTitle className="text-xl group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-dark-400 mb-4">
                      {project.summary}
                    </p>
                    
                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.slice(0, 3).map((metric, idx) => (
                        <Badge key={idx} variant="success" size="sm">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span key={tech} className="tech-chip text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="tech-chip text-xs">
                          +{project.stack.length - 5}
                        </span>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto">
                    <span className="text-primary-400 text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read full case study
                      <ArrowRightIcon size={16} />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-500 transition-colors"
            >
              View all projects
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-dark-900 to-accent-cyan/10" />
        
        <div className="container-narrow relative z-10">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-dark-300 mb-8 max-w-xl mx-auto">
              I'm always interested in discussing new opportunities, challenging projects, or just connecting with fellow engineers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button as="a" href={`mailto:${siteConfig.email}`} variant="glow" size="lg">
                Get in Touch
                <EmailIcon className="ml-2" size={18} />
              </Button>
              <Button as="link" to="/resume" variant="outline" size="lg">
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
