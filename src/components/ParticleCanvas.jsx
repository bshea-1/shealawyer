import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let width, height
        let particles = []
        let animationId

        function resize() {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
            initParticles()
        }

        function initParticles() {
            particles = []
            const numParticles = Math.floor((width * height) / 15000)
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                })
            }
        }

        function draw() {
            ctx.clearRect(0, 0, width, height)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i]

                // Move
                p.x += p.vx
                p.y += p.vy

                // Bounce
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                // Draw Particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()

                // Connect
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 150) {
                        ctx.lineWidth = 1 - dist / 150
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            }

            animationId = requestAnimationFrame(draw)
        }

        window.addEventListener('resize', resize)
        resize()
        draw()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return <canvas ref={canvasRef} id="hero-canvas" />
}
