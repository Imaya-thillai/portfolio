'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

export default function FloatingMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(
      window.innerWidth < 768 ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    )
  }, [])

  const init = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    // Skip canvas entirely on mobile
    if (isMobile) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = -1000
    let mouseY = -1000
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      baseOpacity: number
    }> = []

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    const createParticles = () => {
      const count = 80
      particles = []

      for (let i = 0; i < count; i++) {
        const baseOpacity = Math.random() * 0.5 + 0.15
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: baseOpacity,
          baseOpacity,
        })
      }
    }

    resize()
    createParticles()

    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const animate = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        const dxMouse = mouseX - p.x
        const dyMouse = mouseY - p.y
        const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse
        let mouseInfluence = 0
        if (distMouseSq < 40000) {
          mouseInfluence = 1 - Math.sqrt(distMouseSq) / 200
        }
        p.opacity = p.baseOpacity + mouseInfluence * 0.4

        const isDark = document.documentElement.classList.contains('dark')
        const r = isDark ? 129 : 99
        const g = isDark ? 140 : 102
        const b = isDark ? 248 : 241

        const coreR = isDark ? 165 : 79
        const coreG = isDark ? 180 : 70
        const coreB = isDark ? 252 : 229

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.15})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${coreR}, ${coreG}, ${coreB}, ${p.opacity})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = q.x - p.x
          const dy = q.y - p.y
          const distSq = dx * dx + dy * dy

          if (distSq < 22500) {
            const dist = Math.sqrt(distSq)
            const alpha = (isDark ? 0.08 : 0.12) * (1 - dist / 150)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [isMobile])

  useEffect(() => {
    const cleanup = init()
    return cleanup
  }, [init])

  // Don't render canvas on mobile at all
  if (isMobile) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  )
}
