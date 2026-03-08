import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useSpring(cursorX, { stiffness: 180, damping: 18, mass: 0.5 })
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 18, mass: 0.5 })

  useEffect(() => {
    if ('ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      document.body.style.cursor = 'auto'
      return
    }

    const handleMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleDown = () => setIsPressed(true)
    const handleUp = () => setIsPressed(false)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor="hover"]').forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart)
        el.addEventListener('mouseleave', handleHoverEnd)
      })
    }

    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  if (isTouch) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          backgroundColor: '#00f5c4',
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 0 : isPressed ? 0.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          width: 40,
          height: 40,
          border: '1.5px solid #00f5c4',
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? 'rgba(0,245,196,0.08)' : 'transparent',
          borderColor: isHovering ? 'rgba(0,245,196,0.5)' : '#00f5c4',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
    </>
  )
}
