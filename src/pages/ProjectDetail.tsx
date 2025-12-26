import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { ArrowRightIcon, GitHubIcon, ExternalLinkIcon } from '../components/Icons'
import { getProjectBySlug } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { CircuitPattern } from '../components/AIVisuals'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | ${siteConfig.name}`
    }
  }, [project])

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const { caseStudy } = project

  return (
    <div className="animate-fade-in bg-dark-950 min-h-screen">
      {/* Header */}
      <section className="section-spacing bg-dark-900 relative overflow-hidden">
        <CircuitPattern className="opacity-20" />
        <div className="container-narrow relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  to="/projects"
                  className="text-dark-400 hover:text-cyan-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li className="text-dark-600">/</li>
              <li className="text-white font-medium truncate">
                {project.title}
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>

          <p className="text-xl text-dark-300 mb-6">
            {project.summary}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <Badge key={tech} size="md">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button
                key={link.url}
                as="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variant={link.type === 'repo' ? 'glow' : 'outline'}
                size="sm"
              >
                {link.type === 'repo' ? (
                  <GitHubIcon size={16} className="mr-2" />
                ) : (
                  <ExternalLinkIcon size={16} className="mr-2" />
                )}
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <article className="section-spacing">
        <div className="container-narrow">
          <div className="prose-custom max-w-none">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <span className="text-cyan-400 text-sm">01</span>
                </span>
                Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 p-5 hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                    Problem
                  </h3>
                  <p className="text-dark-300 text-sm">
                    {caseStudy.overview.problem}
                  </p>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 p-5 hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                    Users
                  </h3>
                  <p className="text-dark-300 text-sm">
                    {caseStudy.overview.users}
                  </p>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 p-5 hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                    Success Criteria
                  </h3>
                  <ul className="text-dark-300 text-sm space-y-1">
                    {caseStudy.overview.successCriteria.map((criteria, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Constraints */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
                  <span className="text-amber-400 text-sm">02</span>
                </span>
                Constraints
              </h2>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-5">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {caseStudy.constraints.map((constraint, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-amber-200 text-sm">
                      <span className="text-amber-400 mt-1 flex-shrink-0">⚠</span>
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Architecture */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                  <span className="text-blue-400 text-sm">03</span>
                </span>
                System Architecture
              </h2>
              <p className="text-dark-300 mb-6">{caseStudy.architecture.description}</p>

              {/* Architecture Diagram */}
              <div className="my-6 p-6 bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 overflow-x-auto">
                <svg
                  viewBox="0 0 800 200"
                  className="w-full max-w-3xl mx-auto"
                  aria-label="System Architecture Diagram"
                  role="img"
                >
                  {caseStudy.architecture.components.map((component, idx) => {
                    const x = 40 + idx * 130
                    const y = 60
                    return (
                      <g key={component.name}>
                        {/* Box */}
                        <rect
                          x={x}
                          y={y}
                          width={110}
                          height={80}
                          rx={8}
                          fill="rgba(24, 24, 27, 0.8)"
                          stroke="#22d3ee"
                          strokeWidth={2}
                        />
                        {/* Label */}
                        <text
                          x={x + 55}
                          y={y + 45}
                          textAnchor="middle"
                          className="text-xs font-medium fill-white"
                          style={{ fontSize: '10px' }}
                        >
                          {component.name.length > 14
                            ? component.name.slice(0, 12) + '...'
                            : component.name}
                        </text>
                        {/* Arrow to next */}
                        {idx < caseStudy.architecture.components.length - 1 && (
                          <path
                            d={`M${x + 115} ${y + 40} L${x + 125} ${y + 40}`}
                            stroke="#22d3ee"
                            strokeWidth={2}
                            markerEnd="url(#arrowhead)"
                          />
                        )}
                      </g>
                    )
                  })}
                  {/* Arrow marker */}
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#22d3ee" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Component List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {caseStudy.architecture.components.map((component) => (
                  <div
                    key={component.name}
                    className="bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 p-4 hover:border-cyan-500/30 transition-colors"
                  >
                    <h4 className="font-medium text-white mb-1">
                      {component.name}
                    </h4>
                    <p className="text-sm text-dark-300">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Data */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                  <span className="text-purple-400 text-sm">04</span>
                </span>
                Data
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-cyan-400 mb-2">Source</h3>
                  <p className="text-dark-300">{caseStudy.data.source}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-cyan-400 mb-2">Labeling</h3>
                  <p className="text-dark-300">{caseStudy.data.labeling}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-cyan-400 mb-2">Quality Checks</h3>
                  <ul className="space-y-1">
                    {caseStudy.data.qualityChecks.map((check, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-dark-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-cyan-400 mb-2">Leakage Prevention</h3>
                  <p className="text-dark-300">{caseStudy.data.leakagePrevention}</p>
                </div>
              </div>
            </section>

            {/* Model/Logic */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 text-sm">05</span>
                </span>
                Model / Core Logic
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-cyan-400 mb-2">Baseline</h3>
                  <p className="text-dark-300">{caseStudy.modelOrLogic.baseline}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-cyan-400 mb-2">Iterations</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    {caseStudy.modelOrLogic.iterations.map((iteration, idx) => (
                      <li key={idx} className="text-dark-300">
                        {iteration}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-cyan-400 mb-2">Why This Approach</h3>
                  <p className="text-dark-300">{caseStudy.modelOrLogic.whyChosen}</p>
                </div>
              </div>
            </section>

            {/* Evaluation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <span className="text-cyan-400 text-sm">06</span>
                </span>
                Evaluation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 p-5">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">
                    Offline Metrics
                  </h3>
                  <ul className="space-y-2">
                    {caseStudy.evaluation.offlineMetrics.map((metric, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-dark-300">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 p-5">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">
                    Production Monitoring
                  </h3>
                  <ul className="space-y-2">
                    {caseStudy.evaluation.productionMonitoring.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-dark-300">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Deployment */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center">
                  <span className="text-blue-400 text-sm">07</span>
                </span>
                Deployment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Packaging', value: caseStudy.deployment.packaging },
                  { label: 'API', value: caseStudy.deployment.api },
                  { label: 'Scaling', value: caseStudy.deployment.scaling },
                  { label: 'Versioning', value: caseStudy.deployment.versioning },
                  { label: 'Rollback', value: caseStudy.deployment.rollback },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 p-4 hover:border-cyan-500/30 transition-colors"
                  >
                    <h4 className="text-sm font-medium text-cyan-400 mb-1">
                      {item.label}
                    </h4>
                    <p className="text-sm text-dark-300">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Safety & Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 text-sm">08</span>
                </span>
                Safety & Privacy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 p-5">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                    PII Handling
                  </h3>
                  <p className="text-sm text-dark-300">
                    {caseStudy.safetyPrivacy.piiHandling}
                  </p>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 p-5">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                    Security
                  </h3>
                  <ul className="space-y-1">
                    {caseStudy.safetyPrivacy.security.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-dark-300">
                        <span className="text-emerald-400">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 text-sm">09</span>
                </span>
                Results
              </h2>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-emerald-200">
                      <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Next Steps */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <span className="text-cyan-400 text-sm">10</span>
                </span>
                What I Would Do Next
              </h2>
              <ul className="space-y-2">
                {caseStudy.nextSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">→</span>
                    <span className="text-dark-300">{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <section className="pt-8 border-t border-dark-700">
              <div className="flex flex-wrap items-center gap-4">
                <Button as="link" to="/projects" variant="outline">
                  ← All Projects
                </Button>
                {(() => {
                  const repoLink = project.links.find((l) => l.type === 'repo')
                  return repoLink ? (
                    <Button
                      as="a"
                      href={repoLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                    >
                      <GitHubIcon size={16} className="mr-2" />
                      View Repository
                    </Button>
                  ) : null
                })()}
                <Button as="link" to="/resume" variant="glow">
                  Contact Me
                  <ArrowRightIcon size={16} className="ml-2" />
                </Button>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  )
}
