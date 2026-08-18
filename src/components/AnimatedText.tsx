'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'p'
  animate?: boolean // true = play immediately, false = play on scroll
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  once = true,
  as = 'div',
  animate: playImmediately = false,
}: AnimatedTextProps) {
  const words = text.split(' ')

  const containerProps = playImmediately
    ? {
        initial: 'hidden' as const,
        animate: 'visible' as const,
      }
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once, margin: '-30px' },
      }

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      {...containerProps}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.45,
                delay: delay + i * 0.05,
                ease: [0.25, 0.4, 0.25, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
