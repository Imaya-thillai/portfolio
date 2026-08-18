'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { aboutContent } from '@/lib/data'
import SectionHeading from './SectionHeading'

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayed, setDisplayed] = useState('0')

  useEffect(() => {
    if (!isInView) return

    // If value is a number (possibly with +), animate it
    const numMatch = value.match(/^(\d+\.?\d*)(.*)$/)
    if (numMatch) {
      const target = parseFloat(numMatch[1])
      const suffix = numMatch[2] || ''
      const isFloat = numMatch[1].includes('.')
      const duration = 1200
      const start = Date.now()

      const tick = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = target * eased

        setDisplayed(
          `${isFloat ? current.toFixed(1) : Math.floor(current)}${suffix}`
        )

        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    } else {
      setDisplayed(value)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="p-3">
      <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 font-mono">
        {displayed}
      </div>
      <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1.5">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] w-full mx-auto">
      <SectionHeading title="About me" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-16 items-start">
        {/* Text column */}
        <div>
          {aboutContent.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-[17px] leading-relaxed mb-5 last:mb-0"
            >
              {para}
            </motion.p>
          ))}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-10 pt-8 border-t border-black/[0.05] dark:border-white/[0.05]"
          >
            {aboutContent.stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>

        {/* Code editor */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -5 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="code-window sticky top-28"
        >
          {/* Window header */}
          <div className="code-header">
            <div className="code-dot bg-[#ff5f57]" />
            <div className="code-dot bg-[#febc2e]" />
            <div className="code-dot bg-[#28c840]" />
            <span className="text-xs text-neutral-600 ml-3 font-mono">
              about-me.ts
            </span>
          </div>

          {/* Code body */}
          <div className="p-5 text-sm leading-[1.75] overflow-x-auto font-mono">
            <div className="text-neutral-600">{'// about-me.ts'}</div>
            <div className="mt-2">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-indigo-400">imaya</span>{' '}
              <span className="text-neutral-500">=</span>{' '}
              <span className="text-neutral-500">{'{'}</span>
            </div>
            <div className="ml-4">
              <span className="text-indigo-300">location</span>
              <span className="text-neutral-600">:</span>{' '}
              <span className="text-emerald-400">{'"Tamil Nadu, India"'}</span>
              <span className="text-neutral-600">,</span>
            </div>
            <div className="ml-4">
              <span className="text-indigo-300">education</span>
              <span className="text-neutral-600">:</span>{' '}
              <span className="text-emerald-400">
                {'"B.E. Computer Science @ SCAD"'}
              </span>
              <span className="text-neutral-600">,</span>
            </div>
            <div className="ml-4">
              <span className="text-indigo-300">currently</span>
              <span className="text-neutral-600">:</span>{' '}
              <span className="text-emerald-400">
                {'"building cool stuff & squashing bugs"'}
              </span>
              <span className="text-neutral-600">,</span>
            </div>
            <div className="ml-4">
              <span className="text-indigo-300">interests</span>
              <span className="text-neutral-600">:</span>{' '}
              <span className="text-neutral-500">[</span>
              <span className="text-emerald-400">{'"full-stack"'}</span>
              <span className="text-neutral-600">, </span>
              <span className="text-emerald-400">{'"ML"'}</span>
              <span className="text-neutral-600">, </span>
              <span className="text-emerald-400">{'"cloud"'}</span>
              <span className="text-neutral-600">, </span>
              <span className="text-emerald-400">{'"DSA"'}</span>
              <span className="text-neutral-500">]</span>
              <span className="text-neutral-600">,</span>
            </div>
            <div className="ml-4">
              <span className="text-indigo-300">funFact</span>
              <span className="text-neutral-600">:</span>{' '}
              <span className="text-emerald-400">
                {'"once built a lang where 🍕 is a valid type"'}
              </span>
              <span className="text-neutral-600">,</span>
            </div>
            <div className="ml-4">
              <span className="text-indigo-300">coffeeToday</span>
              <span className="text-neutral-600">:</span>{' '}
              <span className="text-purple-400">Math</span>
              <span className="text-neutral-500">.</span>
              <span className="text-amber-400">floor</span>
              <span className="text-neutral-500">(</span>
              <span className="text-purple-400">Math</span>
              <span className="text-neutral-500">.</span>
              <span className="text-amber-400">random</span>
              <span className="text-neutral-500">() * </span>
              <span className="text-amber-400">5</span>
              <span className="text-neutral-500">) + </span>
              <span className="text-amber-400">2</span>
              <span className="text-neutral-600">,</span>
            </div>
            <div className="ml-4">
              <span className="text-indigo-300">hireable</span>
              <span className="text-neutral-600">:</span>{' '}
              <span className="text-purple-400">true</span>
              <span className="text-neutral-600">,</span>
            </div>
            <div>
              <span className="text-neutral-500">{'};'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
