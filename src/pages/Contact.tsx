import { useState } from 'react'
import { siteConfig } from '../data/siteConfig'

// Animated background
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5" />
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/30" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-grid)" />
      </svg>
    </div>
  )
}

// Social icons
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    // In production, you'd send this to a backend service like Formspree, Netlify Forms, etc.
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // For demo purposes, always succeed
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-dark-950 relative">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interested in connecting about software engineering opportunities or projects?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick intro */}
            <div className="p-8 bg-dark-900/50 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Whether you're hiring for a software engineering role, have a project idea, 
                or just want to chat about building software systems, feel free to reach out.
              </p>
              
              <div className="space-y-4">
                {/* Email */}
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl border border-gray-700/50
                           hover:border-cyan-500/50 hover:bg-dark-800 transition-all group"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <EmailIcon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-white group-hover:text-cyan-400 transition-colors">{siteConfig.email}</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl border border-gray-700/50">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <LocationIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-dark-900/50 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-6">Connect on Social</h3>
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-dark-800 rounded-xl border border-gray-700
                           hover:border-gray-600 hover:bg-dark-700 transition-all group flex-1"
                >
                  <GitHubIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">GitHub</span>
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-dark-800 rounded-xl border border-gray-700
                           hover:border-[#0077B5]/50 hover:bg-dark-700 transition-all group flex-1"
                >
                  <LinkedInIcon className="w-6 h-6 text-gray-400 group-hover:text-[#0077B5] transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-full">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Currently Available</h3>
                  <p className="text-gray-400 text-sm">
                    Open to full-time software engineering positions and interesting project collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-dark-900/50 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="text-cyan-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg
                             text-white placeholder-gray-500
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg
                             text-white placeholder-gray-500
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg
                             text-white
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="project">Project Collaboration</option>
                    <option value="consulting">Consulting Inquiry</option>
                    <option value="job">Job Opportunity</option>
                    <option value="question">Technical Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg
                             text-white placeholder-gray-500 resize-none
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-colors"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 
                           text-white font-semibold rounded-lg
                           hover:from-cyan-400 hover:to-blue-400
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-300
                           flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your information will never be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-dark-900/50 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-2">What's your typical response time?</h3>
              <p className="text-gray-400 text-sm">
                I typically respond within 24-48 hours on business days. For urgent matters, 
                please mention it in your message.
              </p>
            </div>
            <div className="p-6 bg-dark-900/50 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-2">What kind of roles are you looking for?</h3>
              <p className="text-gray-400 text-sm">
                I'm seeking software engineering positions where I can build systems, 
                work with APIs, and contribute to product development.
              </p>
            </div>
            <div className="p-6 bg-dark-900/50 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-2">Can you work remotely?</h3>
              <p className="text-gray-400 text-sm">
                Yes. I'm comfortable working remotely and collaborating with distributed teams.
              </p>
            </div>
            <div className="p-6 bg-dark-900/50 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-2">What technologies do you work with?</h3>
              <p className="text-gray-400 text-sm">
                Python, TypeScript, JavaScript, C/C++, React, Node.js, Django, PostgreSQL, 
                REST APIs, Docker, and Git.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
