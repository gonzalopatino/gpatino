import { useParams, Link, useNavigate } from 'react-router-dom'
import { getTutorial, getTutorialsByCategory, Tutorial } from '../data/tutorials'

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

function getCategoryIcon(category: string, className = "w-5 h-5") {
  switch (category) {
    case 'AI':
      return <AIIcon className={className} />
    case 'Software Engineering':
      return <SoftwareIcon className={className} />
    case 'Embedded Systems & IoT':
      return <EmbeddedIcon className={className} />
    default:
      return null
  }
}

// Simple markdown-like content renderer
function TutorialContent({ content }: { content: string }) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let inCodeBlock = false
  let codeBlockContent: string[] = []
  let codeBlockLang = ''
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Code block start/end
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true
        codeBlockLang = line.slice(3)
        codeBlockContent = []
      } else {
        elements.push(
          <div key={key++} className="my-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-dark-900 border-b border-gray-700 rounded-t-lg">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              {codeBlockLang && (
                <span className="text-xs text-gray-500 ml-2">{codeBlockLang}</span>
              )}
            </div>
            <pre className="p-4 bg-dark-900 rounded-b-lg overflow-x-auto">
              <code className="text-sm text-gray-300 font-mono">
                {codeBlockContent.join('\n')}
              </code>
            </pre>
          </div>
        )
        inCodeBlock = false
        codeBlockContent = []
        codeBlockLang = ''
      }
      continue
    }

    if (inCodeBlock) {
      codeBlockContent.push(line)
      continue
    }

    // Headers
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={key++} className="text-3xl font-bold text-white mt-8 mb-4">
          {line.slice(2)}
        </h1>
      )
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-white mt-8 mb-3">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl font-semibold text-cyan-400 mt-6 mb-2">
          {line.slice(4)}
        </h3>
      )
    }
    // Bullet points
    else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="text-gray-300 ml-4 mb-1 list-disc list-inside">
          {line.slice(2)}
        </li>
      )
    }
    // Numbered lists
    else if (/^\d+\. /.test(line)) {
      const text = line.replace(/^\d+\. /, '')
      elements.push(
        <li key={key++} className="text-gray-300 ml-4 mb-1 list-decimal list-inside">
          {text}
        </li>
      )
    }
    // Bold text in paragraphs
    else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={key++} className="text-white font-semibold my-2">
          {line.slice(2, -2)}
        </p>
      )
    }
    // Empty lines
    else if (line.trim() === '') {
      // Skip but could add spacing
    }
    // Regular paragraphs
    else {
      // Handle inline code
      const parts = line.split(/(`[^`]+`)/)
      const renderedParts = parts.map((part, idx) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={idx} className="px-1.5 py-0.5 bg-dark-800 rounded text-cyan-400 text-sm font-mono">
              {part.slice(1, -1)}
            </code>
          )
        }
        return part
      })
      
      elements.push(
        <p key={key++} className="text-gray-300 my-3 leading-relaxed">
          {renderedParts}
        </p>
      )
    }
  }

  return <div className="prose-dark">{elements}</div>
}

export default function TutorialDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const tutorial = getTutorial(slug || '')

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Tutorial Not Found</h1>
          <Link to="/tutorials" className="text-cyan-400 hover:underline">
            Back to Tutorials
          </Link>
        </div>
      </div>
    )
  }

  const relatedTutorials = getTutorialsByCategory(tutorial.category)
    .filter(t => t.id !== tutorial.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-dark-900 to-dark-950 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back button */}
          <button
            onClick={() => navigate('/tutorials')}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Tutorials
          </button>

          {/* Category & Difficulty badges */}
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-2 px-3 py-1.5 bg-dark-800 rounded-full text-sm text-gray-300">
              {getCategoryIcon(tutorial.category, "w-4 h-4")}
              {tutorial.category}
            </span>
            <span className={`px-3 py-1.5 rounded-full text-sm font-medium border ${getDifficultyColor(tutorial.difficulty)}`}>
              {tutorial.difficulty}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {tutorial.title}
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-6">
            {tutorial.description}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {tutorial.duration}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              {tutorial.topics.length} topics
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-8 space-y-6">
              {/* Prerequisites */}
              <div className="p-4 bg-dark-900 rounded-xl border border-gray-800">
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Prerequisites
                </h3>
                <ul className="space-y-2">
                  {tutorial.prerequisites.map((prereq, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-gray-600 mt-1">•</span>
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Outcomes */}
              <div className="p-4 bg-dark-900 rounded-xl border border-gray-800">
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  You'll Learn
                </h3>
                <ul className="space-y-2">
                  {tutorial.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics covered */}
              <div className="p-4 bg-dark-900 rounded-xl border border-gray-800">
                <h3 className="text-sm font-semibold text-white mb-3">Topics Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {tutorial.topics.map((topic, index) => (
                    <span key={index} className="px-2 py-1 bg-dark-800 rounded-md text-xs text-gray-400">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-dark-900/50 rounded-2xl border border-gray-800 p-6 md:p-8">
              <TutorialContent content={tutorial.content} />
            </div>

            {/* Related Tutorials */}
            {relatedTutorials.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-white mb-6">
                  More {tutorial.category} Tutorials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedTutorials.map((related) => (
                    <Link
                      key={related.id}
                      to={`/tutorials/${related.slug}`}
                      className="p-4 bg-dark-900 rounded-xl border border-gray-800 
                               hover:border-cyan-500/50 transition-all group"
                    >
                      <h3 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className={`px-2 py-0.5 rounded ${getDifficultyColor(related.difficulty)}`}>
                          {related.difficulty}
                        </span>
                        <span>{related.duration}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                          rounded-xl border border-cyan-500/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Ready to Apply What You've Learned?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Check out my projects to see these concepts in action.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-dark-950 
                         rounded-lg font-medium hover:bg-cyan-400 transition-colors"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
