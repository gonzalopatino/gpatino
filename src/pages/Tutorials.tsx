import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { tutorials, getCategories, getTutorialsByCategory, Tutorial } from '../data/tutorials'

// Animated background grid
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5" />
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="tutorials-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/30" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tutorials-grid)" />
      </svg>
    </div>
  )
}

// Category icon components
function AIIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
      <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
    </svg>
  )
}

function SoftwareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function EmbeddedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="9" cy="9" r="1.5" />
      <circle cx="15" cy="9" r="1.5" />
      <circle cx="9" cy="15" r="1.5" />
      <circle cx="15" cy="15" r="1.5" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
    </svg>
  )
}

// Difficulty badge colors
function getDifficultyColor(difficulty: Tutorial['difficulty']) {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-500/20 text-green-400 border-green-500/30'
    case 'Intermediate':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    case 'Advanced':
      return 'bg-red-500/20 text-red-400 border-red-500/30'
  }
}

// Category gradient colors
function getCategoryGradient(category: string) {
  switch (category) {
    case 'AI':
      return 'from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30'
    case 'Software Engineering':
      return 'from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30'
    case 'Embedded Systems & IoT':
      return 'from-green-500/20 to-teal-500/20 hover:from-green-500/30 hover:to-teal-500/30'
    default:
      return 'from-gray-500/20 to-gray-600/20'
  }
}

function getCategoryIcon(category: string) {
  switch (category) {
    case 'AI':
      return <AIIcon className="w-6 h-6" />
    case 'Software Engineering':
      return <SoftwareIcon className="w-6 h-6" />
    case 'Embedded Systems & IoT':
      return <EmbeddedIcon className="w-6 h-6" />
    default:
      return null
  }
}

// Tutorial card component
function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Link
      to={`/tutorials/${tutorial.slug}`}
      className={`group block p-6 rounded-xl bg-gradient-to-br ${getCategoryGradient(tutorial.category)} 
                  border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300
                  hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg bg-dark-800/50`}>
          {getCategoryIcon(tutorial.category)}
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(tutorial.difficulty)}`}>
          {tutorial.difficulty}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {tutorial.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {tutorial.description}
      </p>

      {/* Meta info */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {tutorial.duration}
        </span>
        <span className="flex items-center gap-1">
          {tutorial.topics.length} topics
        </span>
      </div>

      {/* Topics preview */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tutorial.topics.slice(0, 3).map((topic, index) => (
          <span key={index} className="px-2 py-1 bg-dark-800/70 rounded-md text-xs text-gray-400">
            {topic}
          </span>
        ))}
        {tutorial.topics.length > 3 && (
          <span className="px-2 py-1 bg-dark-800/70 rounded-md text-xs text-gray-500">
            +{tutorial.topics.length - 3} more
          </span>
        )}
      </div>
    </Link>
  )
}

export default function Tutorials() {
  const categories = getCategories()
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Handle URL params for category filter
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam)
    }
  }, [searchParams, categories])

  // Update URL when category changes
  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category)
    setIsDropdownOpen(false)
    if (category) {
      setSearchParams({ category })
    } else {
      setSearchParams({})
    }
  }

  const displayedTutorials = activeCategory
    ? getTutorialsByCategory(activeCategory)
    : tutorials

  return (
    <div className="min-h-screen bg-dark-950 relative">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tutorials
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn AI, Software Engineering, and Embedded Systems through hands-on tutorials.
            From beginner concepts to advanced techniques.
          </p>
        </div>

        {/* Category Filter Dropdown */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-6 py-3 bg-dark-800 border border-gray-700 rounded-xl
                       text-white hover:border-cyan-500/50 transition-all duration-300 min-w-[280px]"
            >
              {activeCategory ? (
                <>
                  {getCategoryIcon(activeCategory)}
                  <span>{activeCategory}</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span>All Categories</span>
                </>
              )}
              <svg 
                className={`w-5 h-5 ml-auto transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-dark-800 border border-gray-700 
                            rounded-xl shadow-xl shadow-black/50 overflow-hidden z-50">
                <button
                  onClick={() => handleCategoryChange(null)}
                  className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-dark-700 transition-colors
                            ${!activeCategory ? 'text-cyan-400 bg-dark-700/50' : 'text-white'}`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span>All Categories</span>
                  <span className="ml-auto text-sm text-gray-500">{tutorials.length}</span>
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-dark-700 transition-colors
                              ${activeCategory === category ? 'text-cyan-400 bg-dark-700/50' : 'text-white'}`}
                  >
                    {getCategoryIcon(category)}
                    <span>{category}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      {getTutorialsByCategory(category).length}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const categoryTutorials = getTutorialsByCategory(category)
            const totalDuration = categoryTutorials.reduce((acc, t) => {
              const mins = parseInt(t.duration)
              return acc + (isNaN(mins) ? 0 : mins)
            }, 0)

            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(activeCategory === category ? null : category)}
                className={`p-6 rounded-xl bg-gradient-to-br ${getCategoryGradient(category)}
                          border transition-all duration-300 cursor-pointer text-left
                          ${activeCategory === category 
                            ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                            : 'border-gray-700/50 hover:border-gray-600'}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-dark-800/70 rounded-lg">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                </div>
                <div className="flex gap-6 text-sm text-gray-400">
                  <span>{categoryTutorials.length} tutorials</span>
                  <span>{totalDuration} min total</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Category Header */}
        {activeCategory && (
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              {getCategoryIcon(activeCategory)}
              {activeCategory}
            </h2>
            <button
              onClick={() => handleCategoryChange(null)}
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear filter
            </button>
          </div>
        )}

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>

        {/* Empty state */}
        {displayedTutorials.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400">No tutorials found in this category.</p>
          </div>
        )}

        {/* Learning Path CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                      border border-cyan-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Learning Journey</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you're just starting out or looking to advance your skills, 
            these tutorials are designed to take you from concept to implementation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/projects"
              className="px-6 py-3 bg-cyan-500 text-dark-950 rounded-lg font-medium
                       hover:bg-cyan-400 transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-gray-600 text-white rounded-lg font-medium
                       hover:border-cyan-500 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
