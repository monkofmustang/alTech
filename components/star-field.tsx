"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
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

    // Star settings
    const starCount = Math.min(Math.floor(window.innerWidth / 5), 300)
    const stars: Star[] = []
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()
    const rgbColor = hexToRgb(primaryColor) || { r: 22, g: 163, b: 74 }

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

    // Animation loop
    const animate = () => {
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

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

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
