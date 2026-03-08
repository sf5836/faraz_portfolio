import { motion } from 'framer-motion'

export default function AnimatedText({ text, type = 'words', className = '', delay = 0 }) {
  const items = type === 'chars' ? text.split('') : text.split(' ')

  return (
    <span className={className}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            delay: i * 0.1 + delay,
            ease: [0.22, 1, 0.36, 1],
            duration: 0.7,
          }}
        >
          {item}{type === 'words' ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  )
}
