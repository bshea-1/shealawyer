import { useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function AnimateOnScroll({ children, className = '', delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '0px' })

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}

export function Counter({ target, suffix = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [count, setCount] = React.useState(0)

    useEffect(() => {
        if (!isInView) return

        const duration = 2000
        const steps = 60
        const stepValue = target / steps
        let current = 0

        const timer = setInterval(() => {
            current += stepValue
            if (current >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)

        return () => clearInterval(timer)
    }, [isInView, target])

    return <span ref={ref}>{count}{suffix}</span>
}

import React from 'react'
