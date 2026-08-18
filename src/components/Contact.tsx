'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { contactContent, siteConfig } from '@/lib/data'
import MagneticButton from './MagneticButton'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Hey Imaya — from ${formData.name || 'your portfolio'}`
    )
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name}\n${formData.email}`
    )
    window.open(
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
      '_blank'
    )
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] w-full mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 text-center text-balance"
      >
        {contactContent.headline}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="text-neutral-600 dark:text-neutral-400 text-center mt-4 max-w-md mx-auto text-[15px]"
      >
        {contactContent.subtitle}
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 max-w-lg mx-auto"
      >
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) =>
            setFormData((p) => ({ ...p, name: e.target.value }))
          }
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) =>
            setFormData((p) => ({ ...p, email: e.target.value }))
          }
          className="form-input mt-3"
          required
        />
        <textarea
          placeholder="What's on your mind?"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData((p) => ({ ...p, message: e.target.value }))
          }
          className="form-input mt-3 resize-none"
          required
        />

        <MagneticButton type="submit" className="w-full mt-5">
          <div
            className={`w-full py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
              sent
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-accent text-white hover:bg-accent-dark'
            }`}
          >
            {sent ? (
              'Opening mail client...'
            ) : (
              <>
                Send message <Send className="w-4 h-4" />
              </>
            )}
          </div>
        </MagneticButton>
      </motion.form>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="flex items-center justify-center gap-5 mt-10"
      >
        {[
          {
            icon: Mail,
            href: `mailto:${siteConfig.email}`,
            label: 'Email',
          },
          {
            icon: Github,
            href: siteConfig.github,
            label: 'GitHub',
          },
          {
            icon: Linkedin,
            href: siteConfig.linkedin,
            label: 'LinkedIn',
          },
        ].map(({ icon: Icon, href, label }) => (
          <MagneticButton key={label} href={href}>
            <div className="p-3 rounded-full border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.05] dark:bg-white/[0.05] hover:border-black/[0.1] dark:border-white/[0.1] transition-colors duration-300">
              <Icon className="w-5 h-5 text-neutral-500 hover:text-neutral-800 dark:text-neutral-200 transition-colors" />
            </div>
          </MagneticButton>
        ))}
      </motion.div>
    </section>
  )
}
