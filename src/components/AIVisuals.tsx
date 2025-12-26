// Neural Network Background Animation
export function NeuralNetworkBg({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Neural network nodes */}
        {[...Array(12)].map((_, i) => {
          const x = 10 + (i % 4) * 30
          const y = 15 + Math.floor(i / 4) * 35
          return (
            <g key={i}>
              <circle
                cx={`${x}%`}
                cy={`${y}%`}
                r="4"
                fill="url(#neural-gradient)"
                className="animate-pulse-slow"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              {/* Connection lines */}
              {i < 8 && (
                <line
                  x1={`${x}%`}
                  y1={`${y}%`}
                  x2={`${10 + ((i + 4) % 4) * 30}%`}
                  y2={`${15 + Math.floor((i + 4) / 4) * 35}%`}
                  stroke="url(#neural-gradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// Animated Grid Background
export function GridBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950" />
    </div>
  )
}

// Floating Particles
export function FloatingParticles({ count = 20 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary-500/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

// Data Flow Animation
export function DataFlowLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-data-flow"
          style={{
            top: `${20 + i * 15}%`,
            width: '200%',
            left: '-100%',
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  )
}

// Circuit Board Pattern
export function CircuitPattern({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full opacity-5 pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path
          d="M10 10h80v80H10z"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.5"
        />
        <circle cx="10" cy="10" r="3" fill="#3b82f6" />
        <circle cx="90" cy="10" r="3" fill="#3b82f6" />
        <circle cx="10" cy="90" r="3" fill="#3b82f6" />
        <circle cx="90" cy="90" r="3" fill="#3b82f6" />
        <path d="M50 10v30M10 50h30M90 50h-30M50 90v-30" stroke="#3b82f6" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="6" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="2" fill="#3b82f6" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  )
}

// Glowing Orb
export function GlowingOrb({ size = 'md', color = 'primary' }: { size?: 'sm' | 'md' | 'lg'; color?: 'primary' | 'cyan' }) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
  }
  
  const colorClasses = {
    primary: 'from-primary-500/20 to-primary-600/5',
    cyan: 'from-accent-cyan/20 to-accent-cyan/5',
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-radial ${colorClasses[color]} blur-3xl animate-pulse-slow`}
    />
  )
}

// Code Terminal Visual
export function CodeTerminal({ 
  title = 'terminal',
  lines = [] 
}: { 
  title?: string
  lines: { prefix?: string; text: string; color?: string }[] 
}) {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-2 text-xs text-dark-400">{title}</span>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <div key={i} className="flex items-start gap-2">
            {line.prefix && (
              <span className="text-primary-500 select-none">{line.prefix}</span>
            )}
            <span className={line.color || 'text-dark-300'}>{line.text}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-primary-500">$</span>
          <span className="w-2 h-4 bg-primary-500 animate-blink" />
        </div>
      </div>
    </div>
  )
}

// Animated Counter
export function AnimatedCounter({ 
  value, 
  suffix = '',
}: { 
  value: number
  suffix?: string
}) {
  return (
    <span className="tabular-nums">
      {value}{suffix}
    </span>
  )
}

// Tech Stack Visualization
export function TechStackOrbit() {
  const techs = ['Python', 'C++', 'FreeRTOS', 'PyTorch', 'React', 'Docker']
  
  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
          <span className="text-white font-bold text-xl">AI</span>
        </div>
      </div>
      {techs.map((tech, i) => {
        const angle = (i / techs.length) * 360
        const radius = 100
        return (
          <div
            key={tech}
            className="absolute w-12 h-12 -ml-6 -mt-6 flex items-center justify-center"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <span className="tech-chip text-[10px] whitespace-nowrap">{tech}</span>
          </div>
        )
      })}
      <div className="absolute inset-8 border border-primary-500/20 rounded-full animate-spin-slow" />
    </div>
  )
}

// Architecture Diagram Component
export function ArchitectureDiagram({ 
  components 
}: { 
  components: { name: string; description: string }[] 
}) {
  return (
    <div className="relative p-6">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {components.map((comp, i) => (
          <div
            key={comp.name}
            className="glass-card p-4 animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan" />
              <h4 className="font-medium text-white">{comp.name}</h4>
            </div>
            <p className="text-sm text-dark-400">{comp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Status Indicator
export function StatusIndicator({ status = 'active' }: { status?: 'active' | 'idle' | 'error' }) {
  const colors = {
    active: 'bg-emerald-500',
    idle: 'bg-yellow-500',
    error: 'bg-red-500',
  }

  return (
    <span className="relative flex h-3 w-3">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors[status]} opacity-75`} />
      <span className={`relative inline-flex rounded-full h-3 w-3 ${colors[status]}`} />
    </span>
  )
}

// Skill Bar
export function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-dark-200">{skill}</span>
        <span className="text-dark-400">{level}%</span>
      </div>
      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
