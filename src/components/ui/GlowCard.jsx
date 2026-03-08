import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function GlowCard({ children, className = '' }) {
  const ref = useRef(null)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setGlowPos({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(0,245,196,0.08), transparent 60%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
