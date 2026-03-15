import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // eslint-disable-line no-unused-vars
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../../data/portfolioData'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import GlowCard from '../ui/GlowCard'
import { resolveAssetUrl } from '../../utils/assetUrl'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'ML/AI', value: 'ml' },
  { label: 'Frontend', value: 'frontend' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-accent-cyan tracking-[0.2em]">
            04 / WORK
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-white mt-3">
            Selected Projects
          </h2>
          <p className="text-text-muted font-body mt-3">
            Things I've built with passion
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-accent-cyan/10 border border-accent-cyan text-white'
                  : 'text-text-muted hover:text-white border border-transparent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid — 2 per row like certificates */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {filtered.map((project) => (
              <motion.div key={project.id} variants={fadeInUp} layout>
                <GlowCard className="bg-bg-card border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-cyan/10 hover:border-accent-cyan/20 transition-all duration-300 group">
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative w-full h-44 overflow-hidden bg-bg-elevated">
                      <img
                        src={resolveAssetUrl(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-body text-sm font-semibold text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-body text-text-muted text-xs mt-2 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Bottom */}
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-xs text-text-muted bg-white/5 rounded px-2 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs text-text-muted">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-accent-cyan transition-colors"
                        >
                          <FiGithub size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
