import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight } from '../../utils/animations'

const codeLines = [
  { text: '# faraz.profile ✦', type: 'comment' },
  { text: '', type: 'blank' },
  { text: 'name = ', type: 'var', value: '"Muhammad Faraz"' },
  { text: 'role = ', type: 'var', value: '"Full Stack Web Developer"' },
  { text: 'location = ', type: 'var', value: '"Chishtian, PK \ud83c\uddf5\ud83c\uddf0"' },
  { text: '', type: 'blank' },
  { text: 'skills = {', type: 'var', value: '' },
  { text: '  "Frontend": ', type: 'indent', value: '["React", "Tailwind"],' },
  { text: '  "Backend": ', type: 'indent', value: '["Node.js", "MongoDB"],' },
  { text: '  "AI/ML": ', type: 'indent', value: '["Scikit-learn", "Pandas"]' },
  { text: '}', type: 'bracket', value: '' },
  { text: '', type: 'blank' },
  { text: 'status = ', type: 'var', value: '"Ready to build 🚀"' },
  { text: '', type: 'blank' },
  { text: 'print', type: 'keyword', value: '(f"Hello World! 👋")' },
]

function CodeTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const terminalRef = useRef(null)

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 120)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  const renderLine = (line, i) => {
    if (line.type === 'blank') return <div key={i} className="h-5" />
    if (line.type === 'comment')
      return (
        <div key={i} className="text-text-muted">
          {line.text}
        </div>
      )
    if (line.type === 'keyword')
      return (
        <div key={i}>
          <span className="text-accent-purple">{line.text}</span>
          <span className="text-[#a8ff78]">{line.value}</span>
        </div>
      )
    if (line.type === 'indent')
      return (
        <div key={i}>
          <span className="text-accent-cyan">{line.text}</span>
          <span className="text-[#a8ff78]">{line.value}</span>
        </div>
      )
    if (line.type === 'bracket')
      return (
        <div key={i} className="text-accent-cyan">
          {line.text}
        </div>
      )
    return (
      <div key={i}>
        <span className="text-accent-cyan">{line.text}</span>
        <span className="text-[#a8ff78]">{line.value}</span>
      </div>
    )
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
      {/* Header */}
      <div className="bg-bg-elevated px-4 py-3 flex items-center gap-3">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-xs text-text-muted mx-auto pr-8">
          faraz.py — Python 3.11
        </span>
      </div>
      {/* Body */}
      <div
        ref={terminalRef}
        className="bg-[#0d0d14] font-mono text-sm p-6 min-h-[340px] relative overflow-hidden"
      >
        {codeLines.slice(0, visibleLines).map((line, i) => renderLine(line, i))}
        {/* Blinking cursor */}
        <span className="inline-block w-[2px] h-4 bg-accent-cyan ml-1" style={{ animation: 'glowPulse 1s ease-in-out infinite' }} />
        {/* Scanline */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)',
          }}
        />
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        {/* Left */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:w-1/2 relative"
        >
          {/* Background number */}
          <span className="absolute left-0 top-0 font-display text-[180px] font-black text-text-faint/30 leading-none pointer-events-none select-none -z-0">
            01
          </span>

          <div className="relative z-10">
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-10 h-[2px] bg-accent-cyan" />
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-[0.3em]">
                ABOUT ME
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Building the web<br />
              with passion & <span className="gradient-text">code.</span>
            </h2>

            {/* Paragraphs */}
            <p className="font-body text-text-muted leading-relaxed mt-6">
              I'm a Fourth-year Computer Science student at COMSATS University Islamabad and a Full Stack Web Developer specializing in the MERN stack. I love turning ideas into polished, functional web applications.
            </p>
            <p className="font-body text-text-muted leading-relaxed mt-4">
              Completed a 3-month remote MERN Stack Internship at DevelopersHub Corporation, where I built real-world backend systems, REST APIs, and full-stack applications.
            </p>
            <p className="font-body text-text-muted leading-relaxed mt-4">
              Currently diving deep into AI/ML and Data Science — exploring how intelligent systems can solve real-world problems. Always learning, always building.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-bg-card border border-white/[0.06] rounded-full px-4 py-2 text-sm text-text-muted">
                📍 Chishtian, Punjab, Pakistan
              </span>
              <span className="bg-bg-card border border-white/[0.06] rounded-full px-4 py-2 text-sm text-accent-cyan">
                🟢 Open to Opportunities
              </span>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-block mt-8 border border-accent-cyan/30 text-accent-cyan px-6 py-3 rounded-xl hover:bg-accent-cyan/10 hover:border-accent-cyan/60 transition-all duration-300 font-medium"
            >
              Let's Connect →
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:w-1/2"
        >
          <CodeTerminal />
        </motion.div>
      </div>
    </section>
  )
}
