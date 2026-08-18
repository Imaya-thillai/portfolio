'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { education, certifications } from '@/lib/data'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] w-full mx-auto">
      <SectionHeading title="Education & certs" />

      {/* Education cards */}
      <div className="grid md:grid-cols-2 gap-5 mt-16">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="glow-border p-6"
          >
            <GraduationCap className="w-5 h-5 text-accent mb-3" />
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {edu.degree}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{edu.institution}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-black/[0.05] dark:border-white/[0.05]">
              <span className="text-xs text-neutral-500 font-mono">
                {edu.period}
              </span>
              <span className="text-xs font-mono">
                <span className="text-neutral-500">{edu.scoreLabel}: </span>
                <span className="text-accent">{edu.score}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-14">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-neutral-500 uppercase tracking-[0.15em] mb-5"
        >
          Certifications
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="flex items-start gap-3 p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.03] dark:bg-white/[0.03] hover:border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300"
            >
              <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{cert.name}</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
