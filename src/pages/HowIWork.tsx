import { useEffect, useState } from 'react'
import Card, { CardContent, CardHeader, CardTitle } from '../components/Card'
import Badge from '../components/Badge'
import { CheckIcon } from '../components/Icons'
import { siteConfig } from '../data/siteConfig'
import { CircuitPattern, FloatingParticles, NeuralNetworkBg, GridBackground, AnimatedNeuralIcon, AnimatedEmbeddedIcon, AnimatedSystemsIcon, AnimatedCloudIcon, AnimatedDataIcon, AnimatedQualityIcon } from '../components/AIVisuals'

// Animated process step component
function ProcessStep({ 
  number, 
  title, 
  description, 
  isActive,
  onClick 
}: { 
  number: string
  title: string
  description: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-all duration-500 ${
        isActive 
          ? 'bg-gradient-to-r from-primary-500/20 to-accent-cyan/10 border-primary-500/50 shadow-lg shadow-primary-500/10' 
          : 'bg-dark-900/50 border-dark-700/50 hover:border-dark-600'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-br from-primary-500 to-accent-cyan text-white' 
            : 'bg-dark-800 text-dark-400'
        }`}>
          <span className="font-bold text-sm">{number}</span>
        </div>
        <div>
          <h3 className={`font-semibold mb-1 transition-colors ${isActive ? 'text-white' : 'text-dark-200'}`}>
            {title}
          </h3>
          <p className={`text-sm transition-colors ${isActive ? 'text-dark-300' : 'text-dark-500'}`}>
            {description}
          </p>
        </div>
      </div>
    </button>
  )
}

// Development pipeline visualization
function MLPipelineVisual() {
  return (
    <div className="relative p-6 bg-dark-900/50 rounded-2xl border border-dark-700/50 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <GridBackground />
      </div>
      
      <div className="relative z-10">
        <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wide mb-6">
          Software Development Lifecycle
        </h4>
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          {['Requirements', 'Design', 'Implementation', 'Testing', 'Deployment', 'Monitoring'].map((stage, idx) => (
            <div key={stage} className="flex items-center">
              <div className="relative group">
                <div className="px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 group-hover:border-primary-500/50 transition-all duration-300">
                  <span className="text-xs font-medium text-dark-200 whitespace-nowrap">{stage}</span>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-dark-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {idx + 1}
                </div>
              </div>
              {idx < 5 && (
                <svg className="w-6 h-6 text-dark-600 mx-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HowIWork() {
  const [activeProcess, setActiveProcess] = useState(0)

  useEffect(() => {
    document.title = `How I Work | ${siteConfig.name}`
  }, [])

  const aiProcesses = [
    {
      number: '01',
      title: 'Requirements & Planning',
      description: 'Define clear goals, scope the problem, and establish success criteria',
      details: [
        'Stakeholder interviews to understand goals',
        'Scope definition and constraint mapping',
        'Architecture and design decisions',
        'Technology selection and tradeoffs',
        'Define acceptance criteria upfront',
      ]
    },
    {
      number: '02',
      title: 'Design & Data Modeling',
      description: 'Structure the system and data for maintainability and performance',
      details: [
        'Database schema design',
        'API contract definition',
        'Component architecture',
        'Security and access patterns',
        'Integration points and dependencies',
      ]
    },
    {
      number: '03',
      title: 'Implementation & Testing',
      description: 'Build incrementally with test coverage and code review discipline',
      details: [
        'Incremental development with version control',
        'Unit and integration testing',
        'Code review and documentation',
        'Debugging and root-cause analysis',
        'Refactoring for clarity',
      ]
    },
    {
      number: '04',
      title: 'Deployment & Delivery',
      description: 'Package and deploy reliably with proper configuration management',
      details: [
        'Environment configuration',
        'Deployment scripting (Docker)',
        'Database migrations',
        'Smoke testing and validation',
        'Rollback planning',
      ]
    },
    {
      number: '05',
      title: 'Monitoring & Iteration',
      description: 'Observe production behavior, fix issues, and improve over time',
      details: [
        'Logging and error tracking',
        'Performance monitoring',
        'User feedback integration',
        'Bug triage and prioritization',
        'Continuous improvement',
      ]
    },
  ]

  return (
    <div className="animate-fade-in bg-dark-950 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <NeuralNetworkBg className="opacity-30" />
        <CircuitPattern className="opacity-10" />
        <FloatingParticles count={25} />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        <div className="container-narrow relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm mb-6 animate-fade-in">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Software Engineering Methodology
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">How I Build </span>
            <span className="bg-gradient-to-r from-primary-400 via-accent-cyan to-primary-500 bg-clip-text text-transparent">
              Software Systems
            </span>
          </h1>
          
          <p className="text-xl text-dark-300 max-w-3xl mb-8 leading-relaxed">
            My approach to software engineering combines clean architecture with practical delivery. 
            I believe great products are built on solid foundations: clear requirements, 
            comprehensive testing, and maintainable code.
          </p>

          {/* Key principles badges */}
          <div className="flex flex-wrap gap-3">
            {['Clean Architecture', 'Test Discipline', 'Clear Requirements', 'Maintainable Code', 'Iterative'].map((principle, i) => (
              <span 
                key={principle}
                className="px-4 py-2 rounded-full bg-dark-800/50 border border-dark-700 text-dark-300 text-sm animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {principle}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="section-spacing relative">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              The <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              From requirements to production: a systematic approach to building 
              software systems that deliver real value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Process steps */}
            <div className="space-y-3">
              {aiProcesses.map((process, idx) => (
                <ProcessStep
                  key={process.number}
                  number={process.number}
                  title={process.title}
                  description={process.description}
                  isActive={activeProcess === idx}
                  onClick={() => setActiveProcess(idx)}
                />
              ))}
            </div>

            {/* Details panel */}
            <div className="glass-card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                  <span className="text-white font-bold">{aiProcesses[activeProcess].number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{aiProcesses[activeProcess].title}</h3>
                  <p className="text-sm text-dark-400">{aiProcesses[activeProcess].description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wide">
                  Key Activities
                </h4>
                <ul className="space-y-2">
                  {aiProcesses[activeProcess].details.map((detail, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-3 text-dark-300 animate-fade-in"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <CheckIcon size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ML Pipeline Visual */}
      <section className="section-spacing relative">
        <div className="container-narrow">
          <MLPipelineVisual />
        </div>
      </section>

      {/* Core Competencies Grid */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-30" />
        
        <div className="container-narrow relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Core <span className="gradient-text">Technical Competencies</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Solid skills across the software development stack, from backend systems to frontend interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'systems',
                title: 'Backend Development',
                items: ['Python & Django', 'REST APIs', 'PostgreSQL', 'Authentication & security'],
                color: 'from-cyan-500/20 to-blue-500/20',
                borderColor: 'border-cyan-500/30'
              },
              {
                icon: 'ml',
                title: 'Frontend Development',
                items: ['React & Angular', 'TypeScript', 'HTML/CSS', 'Responsive design'],
                color: 'from-purple-500/20 to-pink-500/20',
                borderColor: 'border-purple-500/30'
              },
              {
                icon: 'data',
                title: 'Data & Databases',
                items: ['SQL & PostgreSQL', 'Data modeling', 'Query optimization', 'Reporting pipelines'],
                color: 'from-indigo-500/20 to-violet-500/20',
                borderColor: 'border-indigo-500/30'
              },
              {
                icon: 'cloud',
                title: 'DevOps Basics',
                items: ['Git & version control', 'Docker', 'CI/CD concepts', 'Linux command line'],
                color: 'from-blue-500/20 to-cyan-500/20',
                borderColor: 'border-blue-500/30'
              },
              {
                icon: 'embedded',
                title: 'Connected Systems',
                items: ['C/C++ basics', 'ESP32 & Arduino', 'MQTT concepts', 'Hardware-software integration'],
                color: 'from-amber-500/20 to-orange-500/20',
                borderColor: 'border-amber-500/30'
              },
              {
                icon: 'quality',
                title: 'Quality & Process',
                items: ['Test discipline', 'Code review', 'Documentation', 'Root-cause analysis'],
                color: 'from-rose-500/20 to-red-500/20',
                borderColor: 'border-rose-500/30'
              },
            ].map((competency, idx) => {
              const iconComponents: Record<string, React.ReactNode> = {
                'ml': <AnimatedNeuralIcon className="w-10 h-10" />,
                'embedded': <AnimatedEmbeddedIcon className="w-10 h-10" />,
                'systems': <AnimatedSystemsIcon className="w-10 h-10" />,
                'cloud': <AnimatedCloudIcon className="w-10 h-10" />,
                'data': <AnimatedDataIcon className="w-10 h-10" />,
                'quality': <AnimatedQualityIcon className="w-10 h-10" />,
              }
              
              return (
                <Card 
                  key={competency.title}
                  hover
                  className="animate-fade-in group"
                  style={{ animationDelay: `${idx * 0.1}s` } as React.CSSProperties}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${competency.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <CardHeader className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-dark-800/80 border border-dark-600/50 flex items-center justify-center mb-3 group-hover:border-primary-500/30 transition-all duration-300">
                      {iconComponents[competency.icon]}
                    </div>
                    <CardTitle className="text-white">{competency.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {competency.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-dark-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testing & Quality Section */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Testing Philosophy */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Testing Strategy</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { type: 'Unit Tests', desc: 'Fast, isolated tests for functions and transformations', coverage: '80%+' },
                  { type: 'Integration Tests', desc: 'API endpoints, database interactions, service mocks', coverage: 'Critical paths' },
                  { type: 'ML Tests', desc: 'Model behavior, data drift, performance regression', coverage: 'Metrics thresholds' },
                  { type: 'E2E Tests', desc: 'Full pipeline validation, smoke tests', coverage: 'Happy paths' },
                ].map((test, idx) => (
                  <div 
                    key={test.type}
                    className="flex items-start gap-4 p-3 rounded-lg bg-dark-800/50 border border-dark-700/50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 text-sm font-bold">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-white">{test.type}</h4>
                        <Badge variant="success" size="sm">{test.coverage}</Badge>
                      </div>
                      <p className="text-sm text-dark-400">{test.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CI/CD Pipeline */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">CI/CD Pipeline</h3>
              </div>

              <div className="space-y-3">
                {[
                  { stage: 'Lint & Format', tools: ['ESLint', 'Prettier', 'Black'], icon: '📝' },
                  { stage: 'Type Check', tools: ['TypeScript', 'Pyright'], icon: '🔍' },
                  { stage: 'Test Suite', tools: ['pytest', 'Jest'], icon: '🧪' },
                  { stage: 'Build', tools: ['Vite', 'Docker'], icon: '📦' },
                  { stage: 'Deploy', tools: ['GitHub Actions'], icon: '🚀' },
                ].map((stage, idx) => (
                  <div 
                    key={stage.stage}
                    className="flex items-center gap-4 p-3 rounded-lg bg-dark-800/50 border border-dark-700/50 group hover:border-primary-500/30 transition-all duration-300"
                  >
                    <div className="text-2xl">{stage.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white text-sm">{stage.stage}</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {stage.tools.map((tool) => (
                          <span key={tool} className="text-xs px-2 py-0.5 rounded bg-dark-700 text-dark-300">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    {idx < 4 && (
                      <svg className="w-4 h-4 text-dark-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
        
        <div className="container-narrow relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tools & <span className="gradient-text">Technologies</span>
            </h2>
          </div>

          <div className="glass-card p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Python', category: 'Language' },
                { name: 'TypeScript', category: 'Language' },
                { name: 'C/C++', category: 'Language' },
                { name: 'SQL', category: 'Data' },
                { name: 'React', category: 'Frontend' },
                { name: 'Django', category: 'Backend' },
                { name: 'Node.js', category: 'Backend' },
                { name: 'PostgreSQL', category: 'Data' },
                { name: 'Docker', category: 'DevOps' },
                { name: 'Git', category: 'DevOps' },
              ].map((tool, idx) => (
                <div 
                  key={tool.name}
                  className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 text-center hover:border-primary-500/30 hover:bg-dark-800 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="font-medium text-white mb-1">{tool.name}</div>
                  <div className="text-xs text-dark-500">{tool.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
