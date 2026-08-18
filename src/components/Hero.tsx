'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { heroContent } from '@/lib/data'
import AnimatedText from './AnimatedText'
import MagneticButton from './MagneticButton'
import FloatingMesh from './FloatingMesh'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <FloatingMesh />

      {/* Animated gradient background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yBg, opacity: opacityBg }}
      >
        {/* Large gradient orbs */}
        <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full blur-[150px] bg-indigo-400/20 dark:bg-indigo-600/20 animate-orb-1" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full blur-[130px] bg-purple-400/15 dark:bg-purple-600/15 animate-orb-2" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] bg-indigo-300/15 dark:bg-indigo-500/10 animate-orb-3" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
          style={{ backgroundSize: '60px 60px' }}
        />
      </motion.div>

      {/* Top-down gradient fade (Fixed, doesn't scroll) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa] dark:to-[#050505] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24 w-full max-w-[1440px] w-full mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-sm mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <AnimatedText
          text={heroContent.name}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight justify-center leading-[1.05]"
          delay={0.25}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.85,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mt-6 max-w-2xl mx-auto"
        >
          {heroContent.tagline}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.05,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="text-sm md:text-base text-neutral-500 mt-4 max-w-lg mx-auto leading-relaxed"
        >
          {heroContent.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10"
        >
          <MagneticButton
            href="#projects"
            className="px-7 py-3.5 bg-accent rounded-full text-white text-sm font-medium hover:bg-accent-dark transition-colors duration-200 cursor-pointer"
          >
            {heroContent.cta1}
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-7 py-3.5 rounded-full border border-black/[0.12] dark:border-white/[0.12] text-neutral-700 dark:text-neutral-300 text-sm hover:bg-black/[0.05] dark:bg-white/[0.05] transition-colors duration-200 cursor-pointer"
          >
            {heroContent.cta2}
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
