import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiPython, SiScikitlearn, SiPandas, SiNumpy, SiJupyter,
  SiNodedotjs, SiExpress, SiMongodb,
  SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiGithub, SiPostman, SiLinux,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { MdAnalytics } from 'react-icons/md'
import { TbApi } from 'react-icons/tb'
import { skills } from '../../data/portfolioData'
import { scaleIn, staggerContainer } from '../../utils/animations'

const iconMap = {
  SiPython, SiScikitlearn, SiPandas, SiNumpy, SiJupyter,
  SiNodedotjs, SiExpress, SiMongodb,
  SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiGithub, SiPostman, SiLinux,
  MdAnalytics, TbApi,
  SiVisualstudiocode: VscVscode,
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const categories = skills.map((s) => s.category)

  const marqueeRow1 = 'Python ✦ Scikit-learn ✦ React ✦ Node.js ✦ MongoDB ✦ Machine Learning ✦ Data Science ✦ Jupyter ✦ '
  const marqueeRow2 = 'JavaScript ✦ Express.js ✦ Tailwind ✦ Pandas ✦ NumPy ✦ Git ✦ REST APIs ✦ VS Code ✦ '

  return (
    <section id="skills" className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-accent-cyan tracking-[0.2em]">
            02 / SKILLS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold gradient-text mt-3">
            My Technical Arsenal
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? 'bg-accent-cyan/10 border-b-2 border-accent-cyan text-white'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {skills[activeTab].items.map((skill, i) => {
              const Icon = iconMap[skill.icon]
              return (
                <motion.div
                  key={skill.name}
                  variants={scaleIn}
                  className="bg-bg-card card-border rounded-2xl p-5 hover:border-accent-cyan/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${skill.color}15` }}
                    >
                      {Icon && <Icon size={24} color={skill.color} />}
                    </div>
                    <span className="font-body text-white font-medium flex-1">
                      {skill.name}
                    </span>
                    <span className="font-mono text-sm text-accent-cyan">
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 bg-text-faint/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full relative"
                      style={{
                        background: 'linear-gradient(90deg, #00f5c4, #a855f7)',
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        ease: 'easeOut',
                        delay: i * 0.1,
                      }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#00f5c4]" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
              className="font-mono text-xs text-accent-cyan/40 uppercase tracking-[0.2em] flex"
            >
              <span>{marqueeRow1}{marqueeRow1}</span>
            </motion.div>
          </div>
          <div className="flex whitespace-nowrap mt-2">
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
              className="font-mono text-xs text-accent-purple/30 uppercase tracking-[0.2em] flex"
            >
              <span>{marqueeRow2}{marqueeRow2}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
