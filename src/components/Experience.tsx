'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/lib/data'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] w-full mx-auto"
    >
      <SectionHeading title="Where I've worked" />

      <div className="relative mt-16">
        {/* Timeline line */}
        <div className="timeline-line" aria-hidden="true" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={`relative pl-14 md:pl-0 ${
                i % 2 === 0
                  ? 'md:pr-[52%]'
                  : 'md:pl-[52%]'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`timeline-dot absolute top-2 left-[14px] md:left-1/2 md:-translate-x-1/2`}
                aria-hidden="true"
              />

              {/* Card */}
              <div className="glow-border p-6">
                <div className="font-mono text-xs text-accent tracking-wider">
                  {exp.period}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mt-1.5">
                  {exp.role}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">{exp.company}</p>
                <p className="text-sm text-neutral-500 mt-3 leading-relaxed italic">
                  &ldquo;{exp.description}&rdquo;
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/60 mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
