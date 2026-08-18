'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/data'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 lg:px-10 max-w-[1440px] w-full mx-auto">
      <SectionHeading
        title="Skills & tools"
        subtitle="The tech I reach for when building things."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mt-16">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: catIdx * 0.08,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-[0.15em] mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: catIdx * 0.06 + skillIdx * 0.03,
                  }}
                  className="skill-badge"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
