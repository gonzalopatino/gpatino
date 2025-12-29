import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MenuIcon, CloseIcon } from './Icons'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/tutorials', label: 'Tutorials', hasDropdown: true },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const tutorialCategories = [
  { 
    to: '/tutorials?category=AI', 
    label: 'AI',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    to: '/tutorials?category=Software Engineering', 
    label: 'Software Engineering',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  { 
    to: '/tutorials?category=Embedded Systems & IoT', 
    label: 'Embedded Systems & IoT',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <circle cx="9" cy="9" r="1" />
        <circle cx="15" cy="9" r="1" />
        <circle cx="9" cy="15" r="1" />
        <circle cx="15" cy="15" r="1" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
      </svg>
    )
  },
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
  const [tutorialsDropdownOpen, setTutorialsDropdownOpen] = useState(false)
  const [mobileTutorialsOpen, setMobileTutorialsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setTutorialsDropdownOpen(false)
    setMobileTutorialsOpen(false)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setTutorialsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-dark-900/50 backdrop-blur-sm rounded-full p-1.5 border border-dark-700/50">
            {navItems.map((item, index) => (
              item.hasDropdown ? (
                <div key={item.to} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setTutorialsDropdownOpen(!tutorialsDropdownOpen)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                      location.pathname.startsWith('/tutorials')
                        ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25'
                        : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                    }`}
                  >
                    {item.label}
                    <svg 
                      className={`w-4 h-4 transition-transform ${tutorialsDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown menu */}
                  {tutorialsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-dark-900 border border-dark-700 rounded-xl shadow-xl shadow-black/50 overflow-hidden z-50">
                      <Link
                        to="/tutorials"
                        className="flex items-center gap-3 px-4 py-3 text-white hover:bg-dark-800 transition-colors border-b border-dark-700"
                        onClick={() => setTutorialsDropdownOpen(false)}
                      >
                        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <div>
                          <div className="font-medium">All Tutorials</div>
                          <div className="text-xs text-gray-500">Browse all categories</div>
                        </div>
                      </Link>
                      {tutorialCategories.map((category) => (
                        <Link
                          key={category.to}
                          to={category.to}
                          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-800 transition-colors"
                          onClick={() => setTutorialsDropdownOpen(false)}
                        >
                          <span className="text-cyan-400">{category.icon}</span>
                          <span>{category.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-primary-400 border border-primary-500/30 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available</span>
            </Link>
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
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-dark-800/50">
            {navItems.map((item, index) => (
              item.hasDropdown ? (
                <div key={item.to}>
                  <button
                    onClick={() => setMobileTutorialsOpen(!mobileTutorialsOpen)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      location.pathname.startsWith('/tutorials')
                        ? 'text-white bg-gradient-to-r from-primary-500/20 to-accent-cyan/10 border border-primary-500/30'
                        : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full transition-all duration-300 ${location.pathname.startsWith('/tutorials') ? 'bg-primary-500' : 'bg-dark-600'}`} />
                      {item.label}
                    </span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${mobileTutorialsOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile dropdown */}
                  <div className={`overflow-hidden transition-all duration-300 ${mobileTutorialsOpen ? 'max-h-60 mt-2' : 'max-h-0'}`}>
                    <div className="ml-6 space-y-1 border-l-2 border-dark-700 pl-4">
                      <Link
                        to="/tutorials"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-dark-800/50 transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        All Tutorials
                      </Link>
                      {tutorialCategories.map((category) => (
                        <Link
                          key={category.to}
                          to={category.to}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-dark-800/50 transition-colors"
                        >
                          <span className="text-cyan-400">{category.icon}</span> {category.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-dark-800/50">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 transition-all duration-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
