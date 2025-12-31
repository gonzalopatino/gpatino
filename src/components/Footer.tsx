import { Link } from 'react-router-dom'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons'
import { siteConfig } from '../data/siteConfig'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-dark-800 text-dark-400">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-bold text-xl bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-dark-400">
              {siteConfig.role}
            </p>
            <p className="mt-1 text-xs text-dark-500">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/projects"
                  className="text-dark-400 hover:text-primary-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/how-i-work"
                  className="text-dark-400 hover:text-primary-400 transition-colors"
                >
                  How I Work
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="text-dark-400 hover:text-primary-400 transition-colors"
                >
                  Resume
                </Link>
              </li>

            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-medium text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={24} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={24} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label="Send Email"
              >
                <EmailIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-800 text-sm text-center text-dark-500">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
