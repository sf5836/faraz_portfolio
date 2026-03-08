import { motion } from 'framer-motion'
import { experience, education } from '../../data/portfolioData'
import { fadeInLeft, fadeInRight } from '../../utils/animations'

export default function Experience() {
  const exp = experience[0]
  const edu = education[0]

  return (
    <section id="experience" className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs text-accent-cyan tracking-[0.2em]">
            03 / JOURNEY
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold gradient-text mt-3">
            Experience & Education
          </h2>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Central line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]">
            <motion.div
              className="h-full w-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{
                transformOrigin: 'top',
                background: 'linear-gradient(to bottom, #00f5c4, #a855f7)',
              }}
            />
          </div>

          {/* Mobile line */}
          <div className="lg:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-cyan to-accent-purple" />

          <div className="flex flex-col gap-16">

            {/* ───── Experience Card ───── */}
            <div className="relative flex flex-col lg:flex-row lg:items-stretch">

              {/* Mobile node */}
              <div className="lg:hidden absolute left-[13px] top-8 z-10">
                <div className="relative w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_20px_rgba(0,245,196,0.6)]">
                  <div className="absolute inset-0 rounded-full bg-accent-cyan/30 animate-ping" />
                </div>
              </div>

              {/* Mobile card */}
              <div className="lg:hidden pl-10 pr-2 w-full">
                <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
                  <ExperienceCard exp={exp} />
                </motion.div>
              </div>

              {/* Desktop: left card */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="hidden lg:flex lg:w-[calc(50%-56px)] lg:pr-8"
              >
                <ExperienceCard exp={exp} />
              </motion.div>

              {/* Desktop: node — sits in its own 112px column, perfectly on the line */}
              <div className="hidden lg:flex w-28 flex-shrink-0 items-center justify-center z-10">
                <div className="relative w-5 h-5 rounded-full bg-accent-cyan shadow-[0_0_24px_rgba(0,245,196,0.7)]">
                  <div className="absolute inset-0 rounded-full bg-accent-cyan/30 animate-ping" />
                </div>
              </div>

              {/* Desktop: right spacer */}
              <div className="hidden lg:block lg:w-[calc(50%-56px)]" />
            </div>

            {/* ───── Education Card ───── */}
            <div className="relative flex flex-col lg:flex-row lg:items-stretch">

              {/* Mobile node */}
              <div className="lg:hidden absolute left-[13px] top-8 z-10">
                <div className="relative w-4 h-4 rounded-full bg-accent-purple shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                  <div className="absolute inset-0 rounded-full bg-accent-purple/30 animate-ping" />
                </div>
              </div>

              {/* Mobile card */}
              <div className="lg:hidden pl-10 pr-2 w-full">
                <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
                  <EducationCard edu={edu} />
                </motion.div>
              </div>

              {/* Desktop: left spacer */}
              <div className="hidden lg:block lg:w-[calc(50%-56px)]" />

              {/* Desktop: node */}
              <div className="hidden lg:flex w-28 flex-shrink-0 items-center justify-center z-10">
                <div className="relative w-5 h-5 rounded-full bg-accent-purple shadow-[0_0_24px_rgba(168,85,247,0.7)]">
                  <div className="absolute inset-0 rounded-full bg-accent-purple/30 animate-ping" />
                </div>
              </div>

              {/* Desktop: right card */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="hidden lg:flex lg:w-[calc(50%-56px)] lg:pl-8"
              >
                <EducationCard edu={edu} />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp }) {
  return (
    <div className="w-full bg-bg-card rounded-2xl p-6 card-border-cyan">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-mono px-3 py-1 mb-4">
        {exp.current ? 'CURRENT' : 'COMPLETED'}
        <span className={`w-1.5 h-1.5 rounded-full ${exp.current ? 'bg-accent-cyan animate-glow-pulse' : 'bg-green-400'}`} />
      </span>
      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{exp.company}</h3>
      <p className="text-text-muted font-body mt-1">{exp.role}</p>
      <p className="font-mono text-xs text-text-muted mt-2">{exp.period} · {exp.location}</p>
      <hr className="border-white/5 my-4" />
      <p className="text-text-muted text-sm font-body leading-relaxed">{exp.description}</p>
      <ul className="mt-4 space-y-2">
        {exp.achievements.map((a, i) => (
          <li key={i} className="text-text-muted text-sm flex items-start gap-2">
            <span className="text-accent-cyan mt-0.5">✦</span>{a}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {exp.tech.map((t) => (
          <span key={t} className="rounded-full border border-accent-cyan/20 text-accent-cyan/70 text-xs px-3 py-1">{t}</span>
        ))}
      </div>
    </div>
  )
}

function EducationCard({ edu }) {
  return (
    <div className="w-full bg-bg-card rounded-2xl p-6 border border-accent-purple/15 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-purple/10 text-accent-purple text-xs font-mono px-3 py-1 mb-4">
        IN PROGRESS
        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
      </span>
      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{edu.institution}</h3>
      <p className="text-text-muted font-body mt-1">{edu.degree}</p>
      <p className="font-mono text-xs text-text-muted mt-2">{edu.period}</p>
      <hr className="border-white/5 my-4" />
      <p className="text-text-muted text-sm font-body leading-relaxed">{edu.description}</p>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {edu.courses.map((c) => (
          <span key={c} className="rounded-full border border-accent-purple/20 text-accent-purple/70 text-xs px-3 py-1 text-center">{c}</span>
        ))}
      </div>
    </div>
  )
}