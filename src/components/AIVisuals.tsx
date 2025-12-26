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

// ===== ANIMATED SPECIALTY ICONS =====

// AI/ML Integration - Neural Network Animation
export function AnimatedNeuralIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="neural-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Layer 1 nodes */}
        <circle cx="8" cy="12" r="3" fill="url(#neural-icon-grad)" className="animate-pulse" style={{ animationDelay: '0s' }} />
        <circle cx="8" cy="24" r="3" fill="url(#neural-icon-grad)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="8" cy="36" r="3" fill="url(#neural-icon-grad)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        
        {/* Layer 2 nodes */}
        <circle cx="24" cy="16" r="4" fill="url(#neural-icon-grad)" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        <circle cx="24" cy="32" r="4" fill="url(#neural-icon-grad)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
        
        {/* Layer 3 node */}
        <circle cx="40" cy="24" r="4" fill="url(#neural-icon-grad)" className="animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Connection lines with animation */}
        <g stroke="url(#neural-icon-grad)" strokeWidth="1" opacity="0.6">
          <line x1="11" y1="12" x2="20" y2="16" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
          <line x1="11" y1="12" x2="20" y2="32" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
          <line x1="11" y1="24" x2="20" y2="16" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <line x1="11" y1="24" x2="20" y2="32" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          <line x1="11" y1="36" x2="20" y2="16" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="11" y1="36" x2="20" y2="32" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          <line x1="28" y1="16" x2="36" y2="24" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
          <line x1="28" y1="32" x2="36" y2="24" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
        </g>
        
        {/* Data flow particles */}
        <circle r="1.5" fill="#22d3ee" className="animate-data-particle">
          <animateMotion dur="2s" repeatCount="indefinite" path="M8,24 L24,16 L40,24" />
        </circle>
        <circle r="1.5" fill="#60a5fa" className="animate-data-particle">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M8,36 L24,32 L40,24" begin="0.5s" />
        </circle>
      </svg>
    </div>
  )
}

// Backend Systems - Server Rack Animation
export function AnimatedServerIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="server-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Server rack */}
        <rect x="8" y="4" width="32" height="12" rx="2" stroke="url(#server-grad)" strokeWidth="1.5" fill="none" />
        <rect x="8" y="18" width="32" height="12" rx="2" stroke="url(#server-grad)" strokeWidth="1.5" fill="none" />
        <rect x="8" y="32" width="32" height="12" rx="2" stroke="url(#server-grad)" strokeWidth="1.5" fill="none" />
        
        {/* LED indicators with blinking */}
        <circle cx="14" cy="10" r="2" fill="#22c55e" className="animate-blink" style={{ animationDelay: '0s' }} />
        <circle cx="14" cy="24" r="2" fill="#22c55e" className="animate-blink" style={{ animationDelay: '0.3s' }} />
        <circle cx="14" cy="38" r="2" fill="#22c55e" className="animate-blink" style={{ animationDelay: '0.6s' }} />
        
        {/* Activity indicators */}
        <rect x="22" y="8" width="14" height="4" rx="1" fill="url(#server-grad)" opacity="0.3" />
        <rect x="22" y="22" width="14" height="4" rx="1" fill="url(#server-grad)" opacity="0.3" />
        <rect x="22" y="36" width="14" height="4" rx="1" fill="url(#server-grad)" opacity="0.3" />
        
        {/* Animated activity bars */}
        <rect x="22" y="8" width="8" height="4" rx="1" fill="url(#server-grad)" className="animate-width-pulse" />
        <rect x="22" y="22" width="12" height="4" rx="1" fill="url(#server-grad)" className="animate-width-pulse" style={{ animationDelay: '0.5s' }} />
        <rect x="22" y="36" width="6" height="4" rx="1" fill="url(#server-grad)" className="animate-width-pulse" style={{ animationDelay: '1s' }} />
      </svg>
    </div>
  )
}

// Full Stack Development - Layered Stack Animation
export function AnimatedStackIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="stack-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Frontend layer */}
        <g className="animate-float" style={{ animationDelay: '0s' }}>
          <path d="M6 8L24 2L42 8L42 14L24 20L6 14Z" fill="url(#stack-grad)" opacity="0.9" />
          <path d="M6 8L24 2L42 8L42 14L24 20L6 14Z" stroke="#60a5fa" strokeWidth="1" fill="none" />
          <text x="24" y="12" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">UI</text>
        </g>
        
        {/* API layer */}
        <g className="animate-float" style={{ animationDelay: '0.3s' }}>
          <path d="M6 18L24 12L42 18L42 24L24 30L6 24Z" fill="url(#stack-grad)" opacity="0.7" />
          <path d="M6 18L24 12L42 18L42 24L24 30L6 24Z" stroke="#60a5fa" strokeWidth="1" fill="none" />
          <text x="24" y="22" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">API</text>
        </g>
        
        {/* Backend layer */}
        <g className="animate-float" style={{ animationDelay: '0.6s' }}>
          <path d="M6 28L24 22L42 28L42 34L24 40L6 34Z" fill="url(#stack-grad)" opacity="0.5" />
          <path d="M6 28L24 22L42 28L42 34L24 40L6 34Z" stroke="#60a5fa" strokeWidth="1" fill="none" />
          <text x="24" y="32" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">SVC</text>
        </g>
        
        {/* Database layer */}
        <g className="animate-float" style={{ animationDelay: '0.9s' }}>
          <ellipse cx="24" cy="44" rx="16" ry="4" fill="url(#stack-grad)" opacity="0.4" />
          <ellipse cx="24" cy="44" rx="16" ry="4" stroke="#60a5fa" strokeWidth="1" fill="none" />
        </g>
      </svg>
    </div>
  )
}

// Data Engineering - Data Pipeline Animation
export function AnimatedDataIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="data-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Database cylinders */}
        <ellipse cx="10" cy="12" rx="6" ry="3" fill="url(#data-grad)" opacity="0.8" />
        <rect x="4" y="12" width="12" height="10" fill="url(#data-grad)" opacity="0.6" />
        <ellipse cx="10" cy="22" rx="6" ry="3" fill="url(#data-grad)" opacity="0.8" />
        
        <ellipse cx="38" cy="34" rx="6" ry="3" fill="url(#data-grad)" opacity="0.8" />
        <rect x="32" y="34" width="12" height="10" fill="url(#data-grad)" opacity="0.6" />
        <ellipse cx="38" cy="44" rx="6" ry="3" fill="url(#data-grad)" opacity="0.8" />
        
        {/* Pipeline path */}
        <path d="M16 17 L24 17 L24 31 L32 31" stroke="url(#data-grad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
        
        {/* Processing node */}
        <g className="animate-spin-slow" style={{ transformOrigin: '24px 24px' }}>
          <circle cx="24" cy="24" r="6" stroke="url(#data-grad)" strokeWidth="1.5" fill="none" />
          <path d="M24 20 L24 22 M24 26 L24 28 M20 24 L22 24 M26 24 L28 24" stroke="url(#data-grad)" strokeWidth="1.5" />
        </g>
        
        {/* Data flow particles */}
        <circle r="2" fill="#22d3ee">
          <animateMotion dur="2s" repeatCount="indefinite" path="M10,17 L24,17 L24,24" />
        </circle>
        <circle r="2" fill="#60a5fa">
          <animateMotion dur="2s" repeatCount="indefinite" path="M24,24 L24,31 L38,31 L38,34" begin="1s" />
        </circle>
      </svg>
    </div>
  )
}

// DevOps & Platform - Infrastructure Animation
export function AnimatedDevOpsIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="devops-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Infinity loop / DevOps cycle */}
        <path 
          d="M14 24C14 20 10 16 6 20C2 24 6 28 10 28C14 28 18 24 24 24C30 24 34 20 38 20C42 20 46 24 42 28C38 32 34 28 30 28C26 28 22 24 14 24Z"
          stroke="url(#devops-grad)"
          strokeWidth="2"
          fill="none"
          className="animate-dash"
        />
        
        {/* Moving dot along the path */}
        <circle r="3" fill="#22d3ee">
          <animateMotion 
            dur="4s" 
            repeatCount="indefinite" 
            path="M14 24C14 20 10 16 6 20C2 24 6 28 10 28C14 28 18 24 24 24C30 24 34 20 38 20C42 20 46 24 42 28C38 32 34 28 30 28C26 28 22 24 14 24Z"
          />
        </circle>
        
        {/* Gear icons */}
        <g className="animate-spin-slow" style={{ transformOrigin: '12px 36px' }}>
          <circle cx="12" cy="36" r="5" stroke="url(#devops-grad)" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="36" r="2" fill="url(#devops-grad)" />
        </g>
        
        <g className="animate-spin-slow" style={{ transformOrigin: '36px 12px', animationDirection: 'reverse' }}>
          <circle cx="36" cy="12" r="5" stroke="url(#devops-grad)" strokeWidth="1.5" fill="none" />
          <circle cx="36" cy="12" r="2" fill="url(#devops-grad)" />
        </g>
        
        {/* Cloud symbol */}
        <path 
          d="M20 10C20 7 22 5 25 5C28 5 30 7 30 9C32 9 34 11 34 13C34 15 32 17 30 17L20 17C18 17 16 15 16 13C16 11 18 9 20 10Z" 
          fill="url(#devops-grad)" 
          opacity="0.5"
          className="animate-pulse"
        />
      </svg>
    </div>
  )
}

// How I Work Page Icons

// Problem Discovery Animation
export function AnimatedDiscoveryIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="discovery-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        
        {/* Magnifying glass */}
        <circle cx="20" cy="20" r="12" stroke="url(#discovery-grad)" strokeWidth="2" fill="none" />
        <line x1="29" y1="29" x2="42" y2="42" stroke="url(#discovery-grad)" strokeWidth="3" strokeLinecap="round" />
        
        {/* Scanning effect */}
        <circle cx="20" cy="20" r="8" stroke="url(#discovery-grad)" strokeWidth="1" fill="none" className="animate-ping" opacity="0.3" />
        
        {/* Light rays */}
        <g className="animate-pulse">
          <line x1="20" y1="12" x2="20" y2="8" stroke="url(#discovery-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="28" y1="20" x2="32" y2="20" stroke="url(#discovery-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="20" x2="8" y2="20" stroke="url(#discovery-grad)" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        
        {/* Center focus dot */}
        <circle cx="20" cy="20" r="3" fill="url(#discovery-grad)" className="animate-pulse" />
      </svg>
    </div>
  )
}

// Embedded AI Animation
export function AnimatedEmbeddedIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="embedded-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        
        {/* Chip outline */}
        <rect x="12" y="12" width="24" height="24" rx="2" stroke="url(#embedded-grad)" strokeWidth="2" fill="none" />
        
        {/* Chip pins */}
        <g stroke="url(#embedded-grad)" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="8" x2="18" y2="12" />
          <line x1="24" y1="8" x2="24" y2="12" />
          <line x1="30" y1="8" x2="30" y2="12" />
          <line x1="18" y1="36" x2="18" y2="40" />
          <line x1="24" y1="36" x2="24" y2="40" />
          <line x1="30" y1="36" x2="30" y2="40" />
          <line x1="8" y1="18" x2="12" y2="18" />
          <line x1="8" y1="24" x2="12" y2="24" />
          <line x1="8" y1="30" x2="12" y2="30" />
          <line x1="36" y1="18" x2="40" y2="18" />
          <line x1="36" y1="24" x2="40" y2="24" />
          <line x1="36" y1="30" x2="40" y2="30" />
        </g>
        
        {/* Inner circuit pattern */}
        <g className="animate-pulse">
          <circle cx="24" cy="24" r="4" fill="url(#embedded-grad)" />
          <path d="M20 24 L16 24 M28 24 L32 24 M24 20 L24 16 M24 28 L24 32" stroke="url(#embedded-grad)" strokeWidth="1.5" />
        </g>
        
        {/* Signal pulses */}
        <circle cx="24" cy="24" r="6" stroke="url(#embedded-grad)" strokeWidth="1" fill="none" className="animate-ping" opacity="0.4" />
      </svg>
    </div>
  )
}

// Systems Programming Animation
export function AnimatedSystemsIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="systems-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        
        {/* Memory blocks */}
        <g className="animate-pulse" style={{ animationDelay: '0s' }}>
          <rect x="4" y="8" width="8" height="6" fill="url(#systems-grad)" opacity="0.8" rx="1" />
        </g>
        <g className="animate-pulse" style={{ animationDelay: '0.2s' }}>
          <rect x="14" y="8" width="8" height="6" fill="url(#systems-grad)" opacity="0.6" rx="1" />
        </g>
        <g className="animate-pulse" style={{ animationDelay: '0.4s' }}>
          <rect x="24" y="8" width="8" height="6" fill="url(#systems-grad)" opacity="0.8" rx="1" />
        </g>
        <g className="animate-pulse" style={{ animationDelay: '0.6s' }}>
          <rect x="34" y="8" width="8" height="6" fill="url(#systems-grad)" opacity="0.4" rx="1" />
        </g>
        
        {/* CPU core */}
        <rect x="14" y="20" width="20" height="16" rx="2" stroke="url(#systems-grad)" strokeWidth="2" fill="none" />
        <text x="24" y="31" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">CPU</text>
        
        {/* Data buses */}
        <path d="M8 14 L8 20 L14 20" stroke="url(#systems-grad)" strokeWidth="1.5" fill="none" />
        <path d="M40 14 L40 20 L34 20" stroke="url(#systems-grad)" strokeWidth="1.5" fill="none" />
        
        {/* Binary data flow */}
        <text x="8" y="44" fill="#10b981" fontSize="6" className="animate-pulse">0101</text>
        <text x="24" y="44" fill="#10b981" fontSize="6" className="animate-pulse" style={{ animationDelay: '0.5s' }}>1010</text>
        <text x="38" y="44" fill="#10b981" fontSize="6" className="animate-pulse" style={{ animationDelay: '1s' }}>0110</text>
      </svg>
    </div>
  )
}

// Cloud Infrastructure Animation
export function AnimatedCloudIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Cloud shape */}
        <path 
          d="M12 28C8 28 4 24 4 20C4 16 8 12 12 12C12 8 16 4 22 4C28 4 32 8 34 12C38 12 44 16 44 22C44 28 38 32 34 32L12 32C8 32 4 28 4 24"
          fill="url(#cloud-grad)"
          opacity="0.3"
          className="animate-pulse"
        />
        <path 
          d="M12 28C8 28 4 24 4 20C4 16 8 12 12 12C12 8 16 4 22 4C28 4 32 8 34 12C38 12 44 16 44 22C44 28 38 32 34 32L12 32"
          stroke="url(#cloud-grad)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Upload/download arrows */}
        <g className="animate-float">
          <path d="M18 38 L18 44" stroke="url(#cloud-grad)" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 41 L18 38 L21 41" stroke="url(#cloud-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        
        <g className="animate-float" style={{ animationDelay: '0.5s' }}>
          <path d="M30 38 L30 44" stroke="url(#cloud-grad)" strokeWidth="2" strokeLinecap="round" />
          <path d="M27 41 L30 44 L33 41" stroke="url(#cloud-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        
        {/* Connection nodes */}
        <circle cx="18" cy="20" r="2" fill="url(#cloud-grad)" className="animate-pulse" />
        <circle cx="30" cy="20" r="2" fill="url(#cloud-grad)" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="24" cy="16" r="2" fill="url(#cloud-grad)" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      </svg>
    </div>
  )
}

// Testing & Quality Animation
export function AnimatedQualityIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="quality-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        
        {/* Shield outline */}
        <path 
          d="M24 4L6 12V24C6 34 14 42 24 46C34 42 42 34 42 24V12L24 4Z"
          stroke="url(#quality-grad)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Shield fill with animation */}
        <path 
          d="M24 4L6 12V24C6 34 14 42 24 46C34 42 42 34 42 24V12L24 4Z"
          fill="url(#quality-grad)"
          opacity="0.2"
          className="animate-pulse"
        />
        
        {/* Checkmark */}
        <path 
          d="M16 24L22 30L34 18"
          stroke="#22c55e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
        />
      </svg>
    </div>
  )
}
