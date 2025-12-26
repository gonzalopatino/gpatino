import { useEffect } from 'react'
import Button from '../components/Button'
import Card, { CardContent, CardHeader, CardTitle } from '../components/Card'
import { GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from '../components/Icons'
import { siteConfig } from '../data/siteConfig'
import { CircuitPattern, FloatingParticles } from '../components/AIVisuals'

export default function Resume() {
  useEffect(() => {
    document.title = `Resume | ${siteConfig.name}`
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
            Let's Connect
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Resume & Contact
            </span>
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl">
            Interested in working together? Download my resume or reach out directly.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Resume Download */}
            <Card padding="lg">
              <CardHeader>
                <CardTitle as="h2" className="text-xl text-white">
                  Download Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dark-300 mb-6">
                  Get a complete overview of my experience, skills, and education.
                </p>
                
                {/* Resume Preview Placeholder */}
                <div className="aspect-[8.5/11] bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg border border-dark-700 mb-6 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
                  <div className="text-center p-8 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <DownloadIcon size={32} className="text-cyan-400" />
                    </div>
                    <p className="text-dark-300 text-sm">
                      Resume Preview
                    </p>
                    <p className="text-dark-500 text-xs mt-1">
                      PDF format
                    </p>
                  </div>
                </div>

                <Button
                  as="a"
                  href={siteConfig.social.resumeUrl}
                  download
                  size="lg"
                  variant="glow"
                  className="w-full"
                >
                  <DownloadIcon size={18} className="mr-2" />
                  Download Resume (PDF)
                </Button>
              </CardContent>
            </Card>

            {/* Contact */}
            <div className="space-y-6">
              <Card padding="lg">
                <CardHeader>
                  <CardTitle as="h2" className="text-xl text-white">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-300 mb-6">
                    The best way to reach me is via email. I typically respond within 24 hours.
                  </p>

                  <Button
                    as="a"
                    href={`mailto:${siteConfig.email}`}
                    size="lg"
                    variant="glow"
                    className="w-full mb-4"
                  >
                    <EmailIcon size={18} className="mr-2" />
                    Send Email
                  </Button>

                  <p className="text-center text-dark-400 text-sm">
                    {siteConfig.email}
                  </p>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card padding="lg">
                <CardHeader>
                  <CardTitle as="h2" className="text-xl text-white">
                    Connect Online
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-dark-700 hover:border-cyan-500/50 bg-dark-800/50 hover:bg-dark-700/50 transition-all group"
                    >
                      <div className="w-12 h-12 bg-dark-700 group-hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors">
                        <GitHubIcon size={24} className="text-dark-300 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white group-hover:text-cyan-400 transition-colors">GitHub</h3>
                        <p className="text-sm text-dark-400">
                          View my code and contributions
                        </p>
                      </div>
                    </a>

                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-dark-700 hover:border-blue-500/50 bg-dark-800/50 hover:bg-dark-700/50 transition-all group"
                    >
                      <div className="w-12 h-12 bg-dark-700 group-hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors">
                        <LinkedInIcon size={24} className="text-dark-300 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">LinkedIn</h3>
                        <p className="text-sm text-dark-400">
                          Connect professionally
                        </p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card padding="lg" className="bg-emerald-500/10 border-emerald-500/30">
                <CardContent className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-300 font-medium">
                    Currently open to new opportunities
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="section-spacing bg-dark-900 border-t border-dark-800">
        <div className="container-narrow">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Quick Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-cyan-400 text-sm font-medium uppercase tracking-wide mb-3">
                Focus Areas
              </h3>
              <ul className="space-y-2">
                {siteConfig.specialties.map((specialty) => (
                  <li key={specialty.label} className="text-dark-300">
                    {specialty.label}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-cyan-400 text-sm font-medium uppercase tracking-wide mb-3">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.toolbox
                  .flatMap((cat) => cat.tools)
                  .slice(0, 12)
                  .map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-dark-800 border border-dark-700 text-dark-300 text-sm rounded hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
              </div>
            </div>
            <div>
              <h3 className="text-cyan-400 text-sm font-medium uppercase tracking-wide mb-3">
                Location
              </h3>
              <p className="text-dark-300 mb-4">
                Available for remote work worldwide.
              </p>
              <p className="text-dark-500 text-sm">
                Timezone flexible for team collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
