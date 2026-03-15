import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(() => {
    return !sessionStorage.getItem('portfolio_loaded')
  })

  useEffect(() => {
    if (!show) return

    const duration = 2500
    const interval = 25
    const step = 100 / (duration / interval)
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return Math.min(prev + step, 100)
      })
    }, interval)

    return () => clearInterval(timer)
  }, [show])

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setShow(false)
        sessionStorage.setItem('portfolio_loaded', 'true')
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Top panel */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
            exit={{ clipPath: 'inset(0 0 50% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Corner brackets */}
            <div className="absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-accent-cyan/30" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-accent-cyan/30" />

            {/* Progress counter */}
            <div className="absolute top-6 right-8 font-mono text-accent-cyan text-sm">
              {Math.round(progress)}%
            </div>

            {/* Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-display text-[120px] font-bold text-white leading-none select-none"
            >
              MF
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase mt-4"
            >
              Muhammad Faraz
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-text-faint/30 mt-8 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #00f5c4, #a855f7)',
                  boxShadow: '0 0 10px rgba(0,245,196,0.6)',
                }}
              />
            </div>
          </motion.div>

          {/* Bottom panel overlay for split exit */}
          <motion.div
            className="fixed inset-0 z-[99] bg-black"
            exit={{ clipPath: 'inset(50% 0 0 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </>
      )}
    </AnimatePresence>
  )
}
