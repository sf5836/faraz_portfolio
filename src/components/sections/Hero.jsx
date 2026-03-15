import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi'
import { personal } from '../../data/portfolioData'
import ParticleField from '../ui/ParticleField'
import MagneticButton from '../ui/MagneticButton'
import { resolveAssetUrl } from '../../utils/assetUrl'

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg-primary z-0" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,245,196,0.12),transparent_70%)] blur-[80px] animate-blob z-[2] pointer-events-none" />
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.10),transparent_70%)] blur-[80px] z-[2] pointer-events-none" style={{ animation: 'blob 8s ease-in-out 2s infinite' }} />
      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(244,63,142,0.08),transparent_70%)] blur-[80px] z-[2] pointer-events-none" style={{ animation: 'blob 12s ease-in-out 4s infinite' }} />

      {/* Particles */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center pt-24 lg:pt-0">
        {/* Left */}
        <div className="lg:w-[60%] flex flex-col justify-center">
          {/* Availability badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/5 px-4 py-2 text-xs font-mono text-accent-cyan w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500" style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
            Available for Opportunities
          </motion.span>

          {/* Heading */}
          <div className="font-display font-bold">
            <div className="text-3xl sm:text-5xl text-text-muted font-normal mb-2">
              {"Hello, I'm".split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="text-5xl sm:text-7xl">
              {personal.name.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  custom={i + 2}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-4 gradient-text"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-mono text-lg text-accent-cyan mt-4"
          >
            <span className="text-text-muted">&gt;&gt; </span>
            <TypeAnimation
              sequence={personal.taglines.flatMap((t) => [t, 2000])}
              wrapper="span"
              repeat={Infinity}
              speed={50}
              cursor={true}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-body text-text-muted text-base max-w-md leading-relaxed mt-4"
          >
            Full Stack Web Developer with hands-on experience in the MERN stack.
            Completed a 3-month remote internship at DevelopersHub Corporation.
            Currently exploring AI/ML and Data Science to build intelligent, data-driven solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <MagneticButton>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="bg-accent-cyan text-bg-primary font-semibold px-8 py-3.5 rounded-xl hover:brightness-90 hover:scale-105 transition-all duration-300 inline-block"
              >
                View My Work ↓
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={resolveAssetUrl('/faraz-cv.pdf')}
                download
                className="border border-accent-cyan/30 text-accent-cyan px-8 py-3.5 rounded-xl hover:bg-accent-cyan/10 hover:border-accent-cyan/60 transition-all duration-300 inline-block"
              >
                Download CV →
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex gap-3 mt-6"
          >
            {[
              { icon: FiGithub, href: personal.github },
              { icon: FiLinkedin, href: personal.linkedin },
              { icon: FiMail, href: `mailto:${personal.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] rounded-full border border-white/[0.08] flex items-center justify-center text-text-muted hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <div className="lg:w-[40%] flex items-center justify-center mt-16 lg:mt-0 relative">
          {/* Orbiting ring */}
          <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-accent-cyan/20 animate-spin-slow" />

          {/* Avatar blob */}
          <div
            className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] animate-blob relative flex items-center justify-center"
            style={{
              background: 'conic-gradient(from 0deg, #00f5c4, #a855f7, #f43f8e, #00f5c4)',
              boxShadow: '0 0 80px rgba(0,245,196,0.2)',
            }}
          >
            <div className="absolute inset-[6%] bg-bg-primary rounded-[inherit] flex items-center justify-center overflow-hidden">
              <img src={resolveAssetUrl('/profile.png')} alt="Muhammad Faraz" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute top-0 right-0 sm:-right-4 float-card-1 bg-bg-card/80 backdrop-blur border border-accent-cyan/15 px-4 py-3 rounded-xl text-xs flex items-center gap-2">
            <img src={resolveAssetUrl('/logos/comsats.png')} alt="COMSATS" className="w-6 h-6 object-contain" />
            <span className="text-white font-medium">COMSATS</span>
            <span className="text-text-muted">CS 2027</span>
          </div>
          <div className="absolute bottom-4 left-0 sm:-left-8 float-card-2 bg-bg-card/80 backdrop-blur border border-accent-purple/15 px-4 py-3 rounded-xl text-xs flex items-center gap-2">
            <img src={resolveAssetUrl('/logos/developershub-hero.png')} alt="DevelopersHub" className="w-6 h-6 object-contain" />
            <span className="text-white font-medium">DevelopersHub</span>
            <span className="text-text-muted">Intern</span>
          </div>
          <div className="absolute top-4 left-0 sm:-left-4 float-card-3 bg-bg-card/80 backdrop-blur border border-accent-pink/15 px-4 py-3 rounded-xl text-xs flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span className="text-white font-medium">6+</span>
            <span className="text-text-muted">Certs</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-text-muted">Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <FiChevronDown className="text-text-muted" size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
