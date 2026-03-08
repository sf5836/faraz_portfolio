import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiClock, FiAward, FiGitCommit } from 'react-icons/fi'
import { stats } from '../../data/portfolioData'
import { scaleIn, staggerContainer } from '../../utils/animations'

const iconMap = {
  code: FiCode,
  clock: FiClock,
  award: FiAward,
  git: FiGitCommit,
}

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Decorative bg text */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[200px] sm:text-[300px] text-white/[0.015] leading-none pointer-events-none select-none whitespace-nowrap">
        DATA
      </span>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 relative"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={scaleIn}
            className="flex flex-col items-center text-center relative group"
          >
            {/* Divider (hidden on mobile, between items) */}
            {i > 0 && (
              <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/5" />
            )}

            {(() => {
              const Icon = iconMap[stat.icon]
              return Icon ? (
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-accent-cyan" />
                </div>
              ) : null
            })()}
            <span className="font-display text-5xl sm:text-6xl font-bold gradient-text group-hover:glow-cyan transition-all">
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                />
              ) : (
                `0${stat.suffix}`
              )}
            </span>
            <span className="font-body text-text-muted text-sm mt-2">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
