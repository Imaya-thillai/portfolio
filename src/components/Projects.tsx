'use client'

import { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import SectionHeading from './SectionHeading'

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = -((y - centerY) / 22)
    const rotateY = (x - centerX) / 22

    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    cardRef.current.style.transform =
      'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card glow-border p-6 md:p-8 h-full transition-transform duration-200 ease-out"
      >
        {/* Badge */}
        <span className="inline-block text-xs px-3 py-1 rounded-full bg-accent/[0.08] text-accent border border-accent/[0.15] font-medium">
          {project.badge}
        </span>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mt-4">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-[15px]">{project.tagline}</p>

        {/* Description */}
        <p className="text-neutral-500 mt-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-black/[0.04] dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 border border-black/[0.06] dark:border-white/[0.06]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 text-sm text-accent hover:text-accent-light transition-colors group"
          >
            Live demo
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] w-full mx-auto">
      <SectionHeading
        title="Things I've built"
        subtitle='A mix of side projects, hackathon entries, and things that started as "I wonder if I can..."'
      />

      <div className="grid md:grid-cols-2 gap-5 mt-16">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
