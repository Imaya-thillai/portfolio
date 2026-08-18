'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  title,
  subtitle,
  className = '',
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : ''

  return (
    <div className={`${alignClass} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="text-neutral-500 text-base md:text-lg mt-3 max-w-xl"
          style={align === 'center' ? { marginInline: 'auto' } : undefined}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
