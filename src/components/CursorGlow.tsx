'use client'

import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const [visible, setVisible] = useState(false)
  const posRef = useRef({ x: 0, y: 0 })
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only show on devices that support hover (no touch)
    const hasHover = window.matchMedia('(hover: hover)').matches
    if (!hasHover) return

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }

      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }

      if (!visible) setVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [visible])

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  )
}
