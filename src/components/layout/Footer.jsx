import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { navLinks, personal } from '../../data/portfolioData'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const socials = [
    { icon: FiGithub, href: personal.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
  ]

  return (
    <footer className="py-16 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 mb-12">
          {/* Profile & Branding */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/profile.png"
                alt={personal.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-accent-cyan/30"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-white">{personal.name}</h3>
                <p className="font-mono text-xs text-accent-cyan">{personal.role}</p>
              </div>
            </div>
            <p className="text-text-muted text-sm font-body max-w-sm text-center lg:text-left leading-relaxed">
              Building modern web applications & exploring the frontiers of AI/ML.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <span className="font-mono text-xs text-text-faint tracking-widest uppercase">Quick Links</span>
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-text-muted hover:text-accent-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-mono text-xs text-text-faint">
            © {new Date().getFullYear()} {personal.name}. Crafted with passion & code in 🇵🇰
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 hover:border-accent-cyan/40 flex items-center justify-center text-text-muted hover:text-accent-cyan transition-all"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full border border-white/10 hover:border-accent-cyan/40 bg-bg-card flex items-center justify-center text-white hover:text-accent-cyan transition-all z-40"
          >
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
