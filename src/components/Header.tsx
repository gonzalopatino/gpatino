import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MenuIcon, CloseIcon } from './Icons'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/how-i-work', label: 'How I Work' },
  { to: '/resume', label: 'Resume' },
]

// Animated AI Logo Component
function AnimatedLogo() {
  return (
    <div className="relative group">
      {/* Logo container with glow effect */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 blur-md group-hover:blur-lg transition-all duration-300" />
        
        {/* Main logo */}
        <svg
          viewBox="0 0 48 48"
          className="relative w-full h-full"
          aria-label="GP Logo"
        >
          {/* Neural circuit background */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="logoGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          {/* Hexagonal background */}
          <polygon
            points="24,2 44,14 44,34 24,46 4,34 4,14"
            fill="url(#logoGlowGradient)"
            className="opacity-30"
          />
          <polygon
            points="24,4 42,15 42,33 24,44 6,33 6,15"
            fill="#0a0a0b"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            className="group-hover:stroke-[2] transition-all duration-300"
          />
          
          {/* Neural nodes */}
          <circle cx="12" cy="18" r="2" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0s' }} />
          <circle cx="36" cy="18" r="2" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <circle cx="24" cy="38" r="2" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          
          {/* Connection lines */}
          <line x1="12" y1="18" x2="24" y2="24" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
          <line x1="36" y1="18" x2="24" y2="24" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5" />
          <line x1="24" y1="38" x2="24" y2="24" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
          
          {/* GP Letters */}
          <text
            x="24"
            y="28"
            textAnchor="middle"
            className="font-bold fill-white text-sm"
            style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '1px' }}
          >
            GP
          </text>
        </svg>
        
        {/* Animated ring */}
        <div className="absolute inset-0 rounded-xl border border-primary-500/30 group-hover:border-primary-400/50 group-hover:scale-110 transition-all duration-300" />
      </div>
    </div>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-dark-950/95 backdrop-blur-xl shadow-lg shadow-primary-500/5 border-b border-dark-700/50' 
          : 'bg-dark-950/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 transition-opacity duration-300" style={{ opacity: scrolled ? 1 : 0 }} />
      
      <nav className="container-wide" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <span className="sr-only">Home</span>
            <AnimatedLogo />
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-semibold text-white group-hover:text-primary-400 transition-colors">
                Gonzalo Patino
              </span>
              <span className="text-xs text-dark-400 group-hover:text-dark-300 transition-colors">
                AI Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-dark-900/50 backdrop-blur-sm rounded-full p-1.5 border border-dark-700/50">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25'
                      : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                  }`
                }
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 blur-sm -z-10" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:gpatinoc92@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-primary-400 border border-primary-500/30 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden relative p-2 rounded-xl text-dark-300 hover:text-white bg-dark-800/50 hover:bg-dark-700/50 border border-dark-700/50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                <MenuIcon />
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
                <CloseIcon />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-dark-800/50">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-cyan/10 border border-primary-500/30'
                      : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                  }`
                }
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {({ isActive }) => (
                  <>
                    <span className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-primary-500' : 'bg-dark-600'}`} />
                    {item.label}
                  </>
                )}
              </NavLink>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-dark-800/50">
              <a
                href="mailto:gpatinoc92@gmail.com"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 transition-all duration-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
