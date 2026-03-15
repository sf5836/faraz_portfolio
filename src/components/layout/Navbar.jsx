import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiMenu, FiX } from 'react-icons/fi'
import { navLinks, personal } from '../../data/portfolioData'
import MagneticButton from '../ui/MagneticButton'
import { resolveAssetUrl } from '../../utils/assetUrl'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 h-[72px] flex items-center transition-all duration-400 ${
        scrolled
          ? 'bg-[rgba(10,10,12,0.85)] backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="flex items-center gap-2"
        >
          <img src={resolveAssetUrl('/profile.png')} alt="Muhammad Faraz" className="w-9 h-9 rounded-full object-cover border-2 border-accent-cyan/40" />
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-glow-pulse" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className={`relative font-body text-sm tracking-wide transition-colors duration-300 ${
                activeSection === link.href ? 'text-white' : 'text-text-muted hover:text-white'
              }`}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-[2px] bg-accent-cyan transition-transform duration-300 origin-left"
                style={{
                  width: '100%',
                  transform: activeSection === link.href ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-white transition-colors"
          >
            <FiGithub size={18} />
          </a>
          <MagneticButton>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="border border-accent-cyan/40 text-accent-cyan px-5 py-2 rounded-lg text-sm font-medium hover:bg-accent-cyan hover:text-bg-primary transition-all duration-300"
            >
              Hire Me →
            </a>
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bg-primary z-40 flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="font-display text-2xl text-white hover:text-accent-cyan transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 mt-8"
            >
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-cyan">
                <FiGithub size={22} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
