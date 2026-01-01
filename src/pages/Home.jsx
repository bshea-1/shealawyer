import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import ParticleCanvas from '../components/ParticleCanvas'

// Images
import heroImg from '../assets/images/hero-new.jpg'
import bothImg from '../assets/images/both.jpg'
import teamImg from '../assets/images/legal-team-meeting.jpg'

function AnimateOnScroll({ children, className = '', delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

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

function Counter({ target }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [count, setCount] = useState(0)
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (!isInView || hasAnimated.current) return
        hasAnimated.current = true

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

    return <span ref={ref}>{count}</span>
}

// TypeWriter that only runs once and persists its state
function TypeWriter({ text, onComplete, speed = 50 }) {
    const [displayText, setDisplayText] = useState('')
    const [showCursor, setShowCursor] = useState(true)
    const [isComplete, setIsComplete] = useState(false)
    const hasStarted = useRef(false)

    useEffect(() => {
        // Only run once
        if (hasStarted.current) return
        hasStarted.current = true

        let i = 0
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.slice(0, i + 1))
                i++
            } else {
                clearInterval(timer)
                setShowCursor(false)
                setIsComplete(true)
                if (onComplete) setTimeout(onComplete, 500)
            }
        }, speed)

        return () => clearInterval(timer)
    }, []) // Empty dependency array - only run once on mount

    return (
        <span>
            {isComplete ? text : displayText}
            {showCursor && !isComplete && <span className="typing-cursor"></span>}
        </span>
    )
}

export default function Home() {
    const [showSubtitle, setShowSubtitle] = useState(false)
    const [subtitleText, setSubtitleText] = useState('')
    const subtitleComplete = useRef(false)

    const titleText = "The Law Offices of Mitchell S. Shea, P.A."
    const fullSubtitle = "Dedicated Legal Representation | Real World Solutions"

    useEffect(() => {
        if (showSubtitle && !subtitleComplete.current) {
            subtitleComplete.current = true
            let i = 0
            const timer = setInterval(() => {
                if (i < fullSubtitle.length) {
                    setSubtitleText(fullSubtitle.slice(0, i + 1))
                    i++
                } else {
                    clearInterval(timer)
                }
            }, 30)
            return () => clearInterval(timer)
        }
    }, [showSubtitle])

    return (
        <>
            <ParticleCanvas />

            {/* Hero Section */}
            <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(rgba(0, 43, 73, 0.8), rgba(0, 43, 73, 0.7)), url(${heroImg})` }}>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 id="hero-title">
                        <TypeWriter text={titleText} onComplete={() => setShowSubtitle(true)} />
                    </h1>
                    <p id="hero-subtitle">{subtitleText || (showSubtitle ? fullSubtitle : '')}</p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="cta-button">Schedule Consultation</Link>
                        <Link to="/practice-areas" className="cta-button outline">Explore Services</Link>
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="container">
                    <AnimateOnScroll className="stats-grid">
                        <div className="stat-item">
                            <h3><Counter target={20} /></h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3><Counter target={1000} /></h3>
                            <p>Cases Won</p>
                        </div>
                        <div className="stat-item">
                            <h3>$<Counter target={50} />M+</h3>
                            <p>Recovered</p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* About / Real World Solutions */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <AnimateOnScroll className="about-content">
                            <div className="section-header" style={{ textAlign: 'left', marginBottom: '30px' }}>
                                <h2>Real World Solutions</h2>
                                <div className="section-divider" style={{ margin: '0', marginTop: '15px' }}></div>
                            </div>
                            <p style={{ color: 'var(--text-light)', marginBottom: '20px', fontSize: '1.1rem' }}>
                                The Law Offices of Mitchell S. Shea, P.A. combines decades of experience with a modern,
                                aggressive approach to litigation. We don't just handle cases; we solve problems.
                            </p>
                            <p style={{ color: 'var(--text-light)', marginBottom: '30px', fontSize: '1.1rem' }}>
                                From complex workers' compensation claims to serious personal injury matters, our team is
                                dedicated to securing the results you deserve.
                            </p>
                            <Link to="/attorneys" className="read-more">
                                Meet Our Team <span style={{ marginLeft: '5px' }}>→</span>
                            </Link>
                        </AnimateOnScroll>
                        <AnimateOnScroll className="about-images">
                            <img
                                src={bothImg}
                                alt="Mitchell Shea and Sharon Nowell"
                                className="about-img-1"
                            />
                            <img
                                src={teamImg}
                                alt="Legal team meeting"
                                className="about-img-2"
                            />
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Practice Areas Teaser */}
            <section className="practice-areas" id="practice-areas">
                <div className="container">
                    <AnimateOnScroll className="section-header">
                        <h2>Our Expertise</h2>
                        <div className="section-divider"></div>
                        <p style={{ marginTop: '20px', color: 'var(--text-light)' }}>
                            We specialize in protecting the rights of the injured.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll className="areas-teaser" delay={0.2}>
                        <Link to="/workers-comp" className="teaser-card">
                            <span className="area-icon">🏗️</span>
                            <h3>Workers' Comp</h3>
                        </Link>
                        <Link to="/longshore-comp" className="teaser-card">
                            <span className="area-icon">⚓</span>
                            <h3>Longshore</h3>
                        </Link>
                        <Link to="/personal-injury" className="teaser-card">
                            <span className="area-icon">🤕</span>
                            <h3>Personal Injury</h3>
                        </Link>
                        <Link to="/ss-disability" className="teaser-card">
                            <span className="area-icon">🏥</span>
                            <h3>SS Disability</h3>
                        </Link>
                        <Link to="/mediation" className="teaser-card">
                            <span className="area-icon">🤝</span>
                            <h3>Mediations</h3>
                        </Link>
                    </AnimateOnScroll>

                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link to="/practice-areas" className="cta-button outline">View All Practice Areas</Link>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <AnimateOnScroll>
                <section className="quote-section">
                    <div className="container">
                        <div className="quote-content">
                            <span className="quote-icon">❝</span>
                            <p className="quote-text">
                                We are dedicated to providing our clients with the highest quality legal
                                representation and personal service.
                            </p>
                            <div className="section-divider" style={{ backgroundColor: 'var(--secondary-color)' }}></div>
                        </div>
                    </div>
                </section>
            </AnimateOnScroll>
        </>
    )
}
