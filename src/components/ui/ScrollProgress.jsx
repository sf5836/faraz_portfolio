import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #00f5c4, #a855f7, #f43f8e)',
      }}
    >
      <div
        className="absolute right-0 top-0 w-3 h-full"
        style={{ boxShadow: '0 0 10px #00f5c4, 0 0 20px #00f5c4' }}
      />
    </motion.div>
  )
}
