"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  connections: number[]
  alpha: number
}

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animationType, setAnimationType] = useState<"neurons" | "stars">("neurons")

  useEffect(() => {
    // Randomly choose animation type on mount
    setAnimationType(Math.random() > 0.5 ? "neurons" : "stars")

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()
    const rgbColor = hexToRgb(primaryColor) || { r: 22, g: 163, b: 74 }

    // Animation variables
    let animationFrame: number

    if (animationType === "neurons") {
      // Neuron/particle settings
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 150)
      const particles: Particle[] = []
      const connectionDistance = Math.min(window.innerWidth / 8, 150)

      // Initialize particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          connections: [],
          alpha: Math.random() * 0.5 + 0.1,
        })
      }

      // Neuron animation loop
      const animateNeurons = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]

          // Move particles
          p.x += p.speedX
          p.y += p.speedY

          // Bounce off edges
          if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
          if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

          // Draw particle
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${p.alpha})`
          ctx.fill()

          // Reset connections
          p.connections = []

          // Find connections
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j]
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              p.connections.push(j)

              // Draw connection
              const alpha = 1 - distance / connectionDistance
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${alpha * 0.15})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        }

        animationFrame = requestAnimationFrame(animateNeurons)
      }

      animateNeurons()
    } else {
      // Star settings
      const starCount = Math.min(Math.floor(window.innerWidth / 5), 300)
      const stars: Star[] = []

      // Initialize stars
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.1,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
        })
      }

      // Star animation loop
      const animateStars = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Update and draw stars
        for (let i = 0; i < stars.length; i++) {
          const star = stars[i]

          // Move stars
          star.y += star.speed

          // Reset stars that go off screen
          if (star.y > canvas.height) {
            star.y = 0
            star.x = Math.random() * canvas.width
          }

          // Twinkle effect
          star.opacity = Math.sin(Date.now() * 0.001 + i) * 0.3 + 0.5

          // Draw star
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${star.opacity})`
          ctx.fill()
        }

        animationFrame = requestAnimationFrame(animateStars)
      }

      animateStars()
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [animationType])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30" />
}

// Helper function to convert hex to rgb
function hexToRgb(hex: string) {
  // If it's an hsl value, use a default
  if (hex.includes("hsl")) {
    return { r: 22, g: 163, b: 74 }
  }

  // Remove # if present
  hex = hex.replace("#", "")

  // Handle shorthand hex
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("")
  }

  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return null
  }

  return { r, g, b }
}
