'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/data'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setIsVisible(currentY < lastScrollY || currentY < 100)
      setScrolled(currentY > 50)
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'glass' : ''
        }`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:text-neutral-200 transition-colors"
          >
            {siteConfig.name.split(' ').slice(0, 2).join(' ')}
          </a>

          {/* Desktop links + Theme */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="w-[1px] h-4 bg-black/10 dark:bg-white/10" />
            <ThemeToggle />
          </div>

          {/* Mobile hamburger + Theme */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              className="p-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#fafafa] dark:bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 p-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:text-neutral-200 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:text-neutral-100 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 text-xs text-neutral-700 font-mono"
            >
              {siteConfig.email}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
