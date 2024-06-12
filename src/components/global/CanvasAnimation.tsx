"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef } from "react"

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  speed: number;
  friction: number;
}
type Props = {
  className?: string;
};
const CanvasAnimation: React.FC = (props: Props) => {
  const { className } = props
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    let width: number, height: number, mouseX: number, mouseY: number
    const particles: Particle[] = []
    const maxParticles = 200
    const radius = 3
    const colors = [
      "#0066ff",
      "#0099ff",
      "#00ccff",
      "#33ccff",
      "#66ccff",
      "#99ccff",
      "#00ff99",
      "#00ff66",
      "#00ff33",
      "#00ff00",
    ]

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const createParticles = () => {
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.5 + 0.5,
          friction: 0.95,
        })
      }
    }

    const drawParticles = () => {
      context.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        context.beginPath()
        context.arc(p.x, p.y, radius, 0, Math.PI * 2)
        context.fillStyle = p.color
        context.fill()
      })
    }

    const updateParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx * p.speed
        p.y += p.vy * p.speed

        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const maxForce = 0.5

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          p.vx += forceDirectionX * force * maxForce
          p.vy += forceDirectionY * force * maxForce
        }

        p.vx *= p.friction
        p.vy *= p.friction

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      })
    }

    const animate = () => {
      drawParticles()
      updateParticles()
      requestAnimationFrame(animate)
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const handleTouchMove = (event: TouchEvent) => {
      mouseX = event.touches[0].clientX
      mouseY = event.touches[0].clientY
    }

    window.addEventListener("resize", resize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove)

    resize()
    createParticles()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 bg-background", className)}
    />
  )
}

export default CanvasAnimation
